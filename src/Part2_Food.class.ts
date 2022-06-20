import { KB } from './KB.class'
import { Const } from './Const.class'
import { Party } from './Part_Abstract.class'
import { Errors } from './Errors.class'
import { Demography } from './Part3_Demography.class'
import { UserUtils } from './User.utils.class'
import { Game } from './Game.class'

import tpl_0_1b from './templates/0_1b.tpl'
import tpl_2_base from './templates/2_base.tpl'
import tpl_2 from './templates/2.tpl'
import tpl_2_1 from './templates/2_1.tpl'
import tpl_2_1b from './templates/2_1b.tpl'
import tpl_2_2 from './templates/2_2.tpl'
import tpl_2_2b from './templates/2_2b.tpl'
import tpl_2_3 from './templates/2_3.tpl'
import tpl_2_4 from './templates/2_4.tpl'
import tpl_2_5 from './templates/2_5.tpl'



export class Food extends Party{

  protected static purchaseProposalSellerId:number
  protected static salesProposalAmount:number

  static meteoAndRats(){
    
    /**
     * METEO=INT(RND*6)+1:
     */
    Game.getInstance().meteo = Game.getInstance().rollDiceInteger(1,6)
    Game.getInstance().rats = Game.getInstance().rollDiceInteger(5,30)
    Game.getInstance().getCurrentUser().harvest = UserUtils.calculNewHarvest(Game.getInstance().getCurrentUser())
    Game.getInstance().getCurrentUser().supply += UserUtils.calculNewSupply(Game.getInstance().getCurrentUser())

    Party.refreshWithTemplate(tpl_0_1b);
    //Explicitly remove event listening
    KB.stop();
    Party.pause(Food.choiceMarket);
  }

  // Manage Market & food
  static choiceMarket(){
    //console.info("step2")
    KB.listen([
      {key: Const.KEYBOARD_ONE, callback: Food.buyOnMarket}, // 1
      {key: Const.KEYBOARD_TWO, callback: Food.sellOnMarket}, // 2
      {key: Const.KEYBOARD_THREE, callback: Food.sellLand}, // 3
      {key: Const.KEYBOARD_RETURN, callback: Food.giveToOst}, // ↩
    ]);

    Party.refreshWithTemplates([tpl_2_base, tpl_2]);
  }

  static buyOnMarket(){
    //console.info("buy market");
    Food.purchaseProposalSellerId=null
    KB.listen([
      {key: Const.KEYBOARD_INT, callback: Food.buyOnMarketFrom}, // 0-9
      {key: Const.KEYBOARD_RETURN, callback: Food.choiceMarket}, // ↩
    ]);
    Party.refreshWithTemplates([tpl_2_base, tpl_2_1]);
  }

  static buyOnMarketFrom(from:string){
    //console.info("buyOnMarketFrom " + from);
    let marketId=parseInt(from);
    let market=Game.getInstance().market;

    //if empty
    if( isNaN(marketId)) {
      return Food.choiceMarket();
    }

    //if vendor doesn't exist
    if(!market.sales.has(marketId)) {
      return Food.buyOnMarket();
    }

    //If Myself
    if(market.sales.get(marketId).idUser === Game.getInstance().getCurrentUser().id){
      Game.getInstance().addError(Errors.cantBuyMyself());
      return Food.buyOnMarket();
    }

    Food.purchaseProposalSellerId=marketId


    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Food.buyOnMarketFromAndHowMuch}, // ↩
    ], [tpl_2_base, tpl_2_1b]);

    Party.refreshWithTemplates([tpl_2_base, tpl_2_1b]);
  }

  static buyOnMarketFromAndHowMuch(){
    //console.info("buyOnMarketFromAndHowMuch");
    let quantity:number=parseInt(KB.buffer())
    let market=Game.getInstance().market

    let sale = market.sales.get(Food.purchaseProposalSellerId);

    if(isNaN(quantity)){
      return Food.choiceMarket();
    }

    if(sale.boisseaux < quantity) {
      Game.getInstance().addError(Errors.notEnoughtStockOnMarket());
      return Food.buyOnMarketFrom(Food.purchaseProposalSellerId+"");
    }

    if(sale.price * quantity > Game.getInstance().getCurrentUser().money) {
      Game.getInstance().addError(Errors.notEnoughtMoney());
      return Food.buyOnMarketFrom(Food.purchaseProposalSellerId+"");
    }

    //console.info("resolveMarketOffer() " + quantity);
    let seller = Game.getInstance().users.get(sale['idUser']);
    let buyer = Game.getInstance().getCurrentUser()

    seller.money += sale.price * quantity
    buyer.money -= sale.price * quantity
    buyer.supply += quantity;
    sale.boisseaux = sale.boisseaux - quantity;

    if(sale.boisseaux == 0){
      market.sales.delete(Food.purchaseProposalSellerId);
    } else {
      market.sales.set(Food.purchaseProposalSellerId, sale);
    }
    Game.getInstance().users.set(seller.id, seller);
    Game.getInstance().users.set(buyer.id, buyer);


    Food.choiceMarket();
  }


  static sellOnMarket(){
    //console.info("sell market");
    Food.salesProposalAmount=null
    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Food.sellOnMarketWithPrice}, // ↩
    ], [tpl_2_base, tpl_2_2]);

    Party.refreshWithTemplates([tpl_2_base, tpl_2_2]);
  }

  static sellOnMarketWithPrice(quantityParam:number){
    //console.info("sellOnMarketWithPrice");
    let market=Game.getInstance().market;
    let quantity:number=parseInt(KB.buffer());
    if(Number.isInteger(quantityParam)){
      quantity = quantityParam;
    }

    if(isNaN(quantity)){
      return Food.choiceMarket();
    }

    if(quantity > Game.getInstance().getCurrentUser().supply){
        Game.getInstance().addError(Errors.notEnoughtStock());
        return Food.sellOnMarket();
    }

    Food.salesProposalAmount=quantity

    KB.listenTyping([
      {key: Const.KEYBOARD_PRICE_TYPING, callback: KB.startTyping}, // 0-9 + backspace + dot
      {key: Const.KEYBOARD_RETURN, callback: Food.doSellMarketWithPrice}, // ↩
    ], [tpl_2_base, tpl_2_2b]);

    Party.refreshWithTemplates([tpl_2_base, tpl_2_2b]);
  }

  static doSellMarketWithPrice(){
    //console.info("doSellMarketWithPrice");
    let market=Game.getInstance().market;
    let quantity = Food.salesProposalAmount
    let price=Number.parseFloat(KB.buffer());

    if(isNaN(price)){
      return Food.choiceMarket()
    }

    if(price > 15){
      Game.getInstance().addError(Errors.priceTooHigh());
      return Food.sellOnMarketWithPrice(quantity);
    }

    //console.info("quantity : " + quantity)
    //console.info("price : " + price)
    market.addSales(Game.getInstance().getCurrentUser().id, Game.getInstance().getCurrentUser().country, quantity, Math.round((price + Number.EPSILON) * 100) / 100)
    Game.getInstance().getCurrentUser().supply -= quantity
    Food.choiceMarket();
  }




  //Propose selling Land
  static sellLand(){
    //console.info("sell land")
    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Food.doSellLand}, // ↩
    ], [tpl_2_base, tpl_2_3]);

    Party.refreshWithTemplates([tpl_2_base, tpl_2_3]);
  }

  // Do selling land
  static doSellLand(){
    //console.info("go sell market")
    let keyboard:number = parseInt(KB.buffer())
    if(isNaN(keyboard)){
      let user = Game.getInstance().getCurrentUser();
      if(user.land < keyboard){
        Game.getInstance().addError(Errors.notEnoughtLand())
        return Food.sellLand();
      } else {
        user.land -= -keyboard
        user.money += Const.landPrice * keyboard
      }
    }
    Food.choiceMarket();
  }

  static giveToOst(){
    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Food.doGiveToOst}, // ↩
    ], [tpl_2_base, tpl_2_4]);
    Party.refreshWithTemplates([tpl_2_base, tpl_2_4]);
  }

  static doGiveToOst(){

    let quantity:number=parseInt(KB.buffer())
    if(isNaN(quantity)){
      quantity = 0;
    }

    if(quantity > Game.getInstance().getCurrentUser().supply){
      Game.getInstance().addError(Errors.notEnoughtStock())
        return Food.giveToOst();
    }

    Game.getInstance().getCurrentUser().supply -=  quantity
    Game.getInstance().getCurrentUser().supplyOst = quantity

    return Food.giveToPeople();
  }

  static giveToPeople(){
    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Food.doGiveToPeople}, // ↩
    ], [tpl_2_base, tpl_2_5]);
    Party.refreshWithTemplates([tpl_2_base, tpl_2_5]);
  }

  static doGiveToPeople(){

    let quantity:number=parseInt(KB.buffer());
    if(isNaN(quantity)){
      quantity = 0;
    }


    if(quantity > Game.getInstance().getCurrentUser().supply){
      //console.info(Errors.notEnoughtStock());
      Game.getInstance().addError(Errors.notEnoughtStock())
      return Food.giveToPeople();
    }

    if(quantity < Game.getInstance().getCurrentUser().needPeople && quantity < (0.1 * Game.getInstance().getCurrentUser().supply)){
      //console.info(Errors.atLast10Percent());
      Game.getInstance().addError(Errors.atLast10Percent())
      return Food.giveToPeople();
    }

    Game.getInstance().getCurrentUser().supply -= quantity
    Game.getInstance().getCurrentUser().supplyPeople = quantity

    return Demography.demography();
  }
}
