import { KB } from './KB.class'
import { Const } from './Const.class'
import { Party } from './Part_Abstract.class'
import { Errors } from './Errors.class'
import { Demography } from './Part3_Demography.class'

export class Food extends Party{

  static step1MeteoAndRats(){
    //console.info("step1Meteo")
    game.setMeteo(game.rollDiceInteger(0,3));

    game.setRats(game.rollDiceInteger(5,30));
    game.getCurrentUser().setHarvest(game.getCurrentUser().getSupply() * 1.2 * game.getMeteoPercent());
    game.getCurrentUser().addSupply( (-1 * (game.getCurrentUser().getSupply() * game.getRats() / 100)) + game.getCurrentUser().getHarvest())

    Party.refreshWithTemplates(["start1b"]);
    //Explicitly remove event listening
    KB.stop();
    Party.pause(Food.step1);
  }

  // Manage Market & food
  static step1(){
    //console.info("step1")
    KB.listen([
      {key: Const.KEYBOARD_ONE, callback: Food.step1BuyMarket}, // 1
      {key: Const.KEYBOARD_TWO, callback: Food.step1SellMarket}, // 2
      {key: Const.KEYBOARD_THREE, callback: Food.step1SellLand}, // 3
      {key: Const.KEYBOARD_RETURN, callback: Food.step1GiveToOst}, // ↩
    ]);

    Party.refreshWithTemplates(["step1_base", "step1"]);
  }

  static step1BuyMarket(){
    //console.info("buy market");
    KB.listen([
      {key: Const.KEYBOARD_INT, callback: Food.step1BuyMarketFrom}, // 0-9
      {key: Const.KEYBOARD_RETURN, callback: Food.step1}, // ↩
    ]);
    Party.refreshWithTemplates(["step1_base", "step1_1"]);
  }

  static step1BuyMarketFrom(from){
    //console.info("step1BuyMarketFrom " + from);
    let marketId=parseInt(from);
    let market=game.getMarket();

    //if empty
    if( marketId === "") {
      return Food.step1();
    }

    //if vendor doesn't exist
    if(!market.getSales().has(marketId)) {
      return Food.step1BuyMarket();
    }

    //If Myself
    if(market.getSales().get(marketId)["idUser"] === game.getCurrentUser().getId()){
      game.addError(Errors.cantBuyMyself());
      return Food.step1BuyMarket();
    }

    market.createOffer(game.getCurrentUser().getId(), marketId);

    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Food.step1BuyMarketFromAndHowMuch}, // ↩
    ], ["step1_base", "step1_1b"]);

    Party.refreshWithTemplates(["step1_base", "step1_1b"]);
  }

  static step1BuyMarketFromAndHowMuch(){
    //console.info("step1BuyMarketFromAndHowMuch");
    let quantity=parseInt(KB.buffer);
    let market=game.getMarket();

    let offer = market.getOffer();
    let sale = market.getSales().get(offer["marketId"]);

    if(isNaN(quantity)){
      return Food.step1();
    }

    if(sale["boisseaux"] < quantity) {
      game.addError(Errors.notEnoughtStockOnMarket());
      return Food.step1BuyMarketFrom(offer["marketId"]);
    }

    if(sale["price"] * quantity > game.getCurrentUser().getMoney()) {
      game.addError(Errors.notEnoughtMoney());
      return Food.step1BuyMarketFrom(offer["marketId"]);
    }

    game.resolveMarketOffer(quantity);

    Food.step1();
  }


  static step1SellMarket(){
    //console.info("sell market");
    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Food.step1SellMarketWithPrice}, // ↩
    ], ["step1_base", "step1_2"]);

    Party.refreshWithTemplates(["step1_base", "step1_2"]);
  }

  static step1SellMarketWithPrice(quantityParam){
    //console.info("step1SellMarketWithPrice");
    let market=game.getMarket();
    let quantity=parseInt(KB.buffer);
    if(Number.isInteger(quantityParam)){
      quantity = quantityParam;
    }

    if(isNaN(quantity)){
      return Food.step1();
    }

    if(quantity > game.getCurrentUser().getSupply()){
        game.addError(Errors.notEnoughtStock());
        return Food.step1SellMarket();
    }

    market.createPromise(game.getCurrentUser().getId(), quantity);
    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Food.step1DoSellMarketWithPrice}, // ↩
    ], ["step1_base", "step1_2b"]);

    Party.refreshWithTemplates(["step1_base", "step1_2b"]);
  }

  static step1DoSellMarketWithPrice(){
    //console.info("step1DoSellMarketWithPrice");
    let market=game.getMarket();
    let quantity = market.getPromise().quantity;
    let price=Number.parseFloat(KB.buffer).toFixed(2);

    if(isNaN(price)){
      return Food.step1()
    }

    if(price > 15){
      game.addError(Errors.priceTooHigh());
      return Food.step1SellMarketWithPrice(quantity);
    }

    //console.info("quantity : " + quantity)
    //console.info("price : " + price)
    market.addSales(game.getCurrentUser().getId(), game.getCurrentUser().getCountry(), quantity, price);
    game.getCurrentUser().addSupply(-1 * quantity);
    Food.step1();
  }




  //Propose selling Land
  static step1SellLand(){
    //console.info("sell land")
    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Food.step1DoSellLand}, // ↩
    ], ["step1_base", "step1_3"]);

    Party.refreshWithTemplates(["step1_base", "step1_3"]);
  }

  // Do selling land
  static step1DoSellLand(){
    //console.info("go sell market")
    let keyboard = KB.buffer;
    if(keyboard !== ""){
      let user = game.getCurrentUser();
      if(user.getLand() < keyboard){
        game.addError(Errors.notEnoughtLand())
        return Food.step1SellLand();
      } else {
        user.addLand(-keyboard);
        user.addMoney(Const.landPrice * keyboard);
      }
    }
    Food.step1();
  }

  static step1GiveToOst(){
    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Food.step1DoGiveToOst}, // ↩
    ], ["step1_base", "step1_4"]);
    Party.refreshWithTemplates(["step1_base", "step1_4"]);
  }

  static step1DoGiveToOst(){

    let quantity=parseInt(KB.buffer);
    if(isNaN(quantity)){
      quantity = 0;
    }

    if(quantity > game.getCurrentUser().getSupply()){
        game.addError(Errors.notEnoughtStock())
        return Food.step1GiveToOst();
    }

    game.getCurrentUser().addSupply(-1 * quantity);
    game.getCurrentUser().setSupplyOst(quantity);

    return Food.step1GiveToPeople();
  }

  static step1GiveToPeople(){
    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Food.step1DoGiveToPeople}, // ↩
    ], ["step1_base", "step1_5"]);
    Party.refreshWithTemplates(["step1_base", "step1_5"]);
  }

  static step1DoGiveToPeople(){

    let quantity=parseInt(KB.buffer);
    if(isNaN(quantity)){
      quantity = 0;
    }


    if(quantity > game.getCurrentUser().getSupply()){
      //console.info(Errors.notEnoughtStock());
      game.addError(Errors.notEnoughtStock())
      return Food.step1GiveToPeople();
    }

    if(quantity < game.getCurrentUser().getNeedPeople() && quantity < (0.1 * game.getCurrentUser().getSupply())){
      //console.info(Errors.atLast10Percent());
      game.addError(Errors.atLast10Percent())
      return Food.step1GiveToPeople();
    }

    game.getCurrentUser().addSupply(-1 * quantity);
    game.getCurrentUser().setSupplyPeople(quantity);

    return Demography.step2();
  }
}
