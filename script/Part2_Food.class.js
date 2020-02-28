import { KB } from './KB.class'
import { Const } from './Const.class'
import { Party } from './Part_Abstract.class'
import { Errors } from './Errors.class'
import { Demography } from './Part3_Demography.class'

export class Food extends Party{

  static meteoAndRats(){
    //console.info("step2Meteo")
    game.setMeteo(game.rollDiceInteger(0,3));

    game.setRats(game.rollDiceInteger(5,30));
    game.getCurrentUser().setHarvest(Math.floor(game.getCurrentUser().getSupply() * 1.2 * game.getMeteoPercent()));
    game.getCurrentUser().addSupply( Math.floor(-1 * (game.getCurrentUser().getSupply() * game.getRats() / 100)) + game.getCurrentUser().getHarvest())

    Party.refreshWithTemplates(["0_1b"]);
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

    Party.refreshWithTemplates(["2_base", "2"]);
  }

  static buyOnMarket(){
    //console.info("buy market");
    KB.listen([
      {key: Const.KEYBOARD_INT, callback: Food.buyOnMarketFrom}, // 0-9
      {key: Const.KEYBOARD_RETURN, callback: Food.choiceMarket}, // ↩
    ]);
    Party.refreshWithTemplates(["2_base", "2_1"]);
  }

  static buyOnMarketFrom(from){
    //console.info("buyOnMarketFrom " + from);
    let marketId=parseInt(from);
    let market=game.getMarket();

    //if empty
    if( marketId === "") {
      return Food.choiceMarket();
    }

    //if vendor doesn't exist
    if(!market.getSales().has(marketId)) {
      return Food.buyOnMarket();
    }

    //If Myself
    if(market.getSales().get(marketId)["idUser"] === game.getCurrentUser().getId()){
      game.addError(Errors.cantBuyMyself());
      return Food.buyOnMarket();
    }

    market.createOffer(game.getCurrentUser().getId(), marketId);

    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Food.buyOnMarketFromAndHowMuch}, // ↩
    ], ["2_base", "2_1b"]);

    Party.refreshWithTemplates(["2_base", "2_1b"]);
  }

  static buyOnMarketFromAndHowMuch(){
    //console.info("buyOnMarketFromAndHowMuch");
    let quantity=parseInt(KB.buffer);
    let market=game.getMarket();

    let offer = market.getOffer();
    let sale = market.getSales().get(offer["marketId"]);

    if(isNaN(quantity)){
      return Food.choiceMarket();
    }

    if(sale["boisseaux"] < quantity) {
      game.addError(Errors.notEnoughtStockOnMarket());
      return Food.buyOnMarketFrom(offer["marketId"]);
    }

    if(sale["price"] * quantity > game.getCurrentUser().getMoney()) {
      game.addError(Errors.notEnoughtMoney());
      return Food.buyOnMarketFrom(offer["marketId"]);
    }

    game.resolveMarketOffer(quantity);

    Food.choiceMarket();
  }


  static sellOnMarket(){
    //console.info("sell market");
    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Food.sellOnMarketWithPrice}, // ↩
    ], ["2_base", "2_2"]);

    Party.refreshWithTemplates(["2_base", "2_2"]);
  }

  static sellOnMarketWithPrice(quantityParam){
    //console.info("sellOnMarketWithPrice");
    let market=game.getMarket();
    let quantity=parseInt(KB.buffer);
    if(Number.isInteger(quantityParam)){
      quantity = quantityParam;
    }

    if(isNaN(quantity)){
      return Food.choiceMarket();
    }

    if(quantity > game.getCurrentUser().getSupply()){
        game.addError(Errors.notEnoughtStock());
        return Food.sellOnMarket();
    }

    market.createPromise(game.getCurrentUser().getId(), quantity);
    KB.listenTyping([
      {key: Const.KEYBOARD_PRICE_TYPING, callback: KB.startTyping}, // 0-9 + backspace + dot
      {key: Const.KEYBOARD_RETURN, callback: Food.doSellMarketWithPrice}, // ↩
    ], ["2_base", "2_2b"]);

    Party.refreshWithTemplates(["2_base", "2_2b"]);
  }

  static doSellMarketWithPrice(){
    //console.info("doSellMarketWithPrice");
    let market=game.getMarket();
    let quantity = market.getPromise().quantity;
    let price=Number.parseFloat(KB.buffer).toFixed(2);

    if(isNaN(price)){
      return Food.choiceMarket()
    }

    if(price > 15){
      game.addError(Errors.priceTooHigh());
      return Food.sellOnMarketWithPrice(quantity);
    }

    //console.info("quantity : " + quantity)
    //console.info("price : " + price)
    market.addSales(game.getCurrentUser().getId(), game.getCurrentUser().getCountry(), quantity, price);
    game.getCurrentUser().addSupply(-1 * quantity);
    Food.choiceMarket();
  }




  //Propose selling Land
  static sellLand(){
    //console.info("sell land")
    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Food.doSellLand}, // ↩
    ], ["2_base", "2_3"]);

    Party.refreshWithTemplates(["2_base", "2_3"]);
  }

  // Do selling land
  static doSellLand(){
    //console.info("go sell market")
    let keyboard = KB.buffer;
    if(keyboard !== ""){
      let user = game.getCurrentUser();
      if(user.getLand() < keyboard){
        game.addError(Errors.notEnoughtLand())
        return Food.sellLand();
      } else {
        user.addLand(-keyboard);
        user.addMoney(Const.landPrice * keyboard);
      }
    }
    Food.choiceMarket();
  }

  static giveToOst(){
    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Food.doGiveToOst}, // ↩
    ], ["2_base", "2_4"]);
    Party.refreshWithTemplates(["2_base", "2_4"]);
  }

  static doGiveToOst(){

    let quantity=parseInt(KB.buffer);
    if(isNaN(quantity)){
      quantity = 0;
    }

    if(quantity > game.getCurrentUser().getSupply()){
        game.addError(Errors.notEnoughtStock())
        return Food.giveToOst();
    }

    game.getCurrentUser().addSupply(-1 * quantity);
    game.getCurrentUser().setSupplyOst(quantity);

    return Food.giveToPeople();
  }

  static giveToPeople(){
    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Food.doGiveToPeople}, // ↩
    ], ["2_base", "2_5"]);
    Party.refreshWithTemplates(["2_base", "2_5"]);
  }

  static doGiveToPeople(){

    let quantity=parseInt(KB.buffer);
    if(isNaN(quantity)){
      quantity = 0;
    }


    if(quantity > game.getCurrentUser().getSupply()){
      //console.info(Errors.notEnoughtStock());
      game.addError(Errors.notEnoughtStock())
      return Food.giveToPeople();
    }

    if(quantity < game.getCurrentUser().getNeedPeople() && quantity < (0.1 * game.getCurrentUser().getSupply())){
      //console.info(Errors.atLast10Percent());
      game.addError(Errors.atLast10Percent())
      return Food.giveToPeople();
    }

    game.getCurrentUser().addSupply(-1 * quantity);
    game.getCurrentUser().setSupplyPeople(quantity);

    return Demography.demography();
  }
}
