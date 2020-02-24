"use strict";

function step1MeteoAndRats(){
  //console.info("step1Meteo")
  game.setMeteo(game.rollDiceInteger(0,3));

  game.setRats(game.rollDiceInteger(5,30));
  game.getCurrentUser().setHarvest(game.getCurrentUser().getSupply() * 1.2 * game.getMeteoPercent());
  game.getCurrentUser().addSupply( (-1 * (game.getCurrentUser().getSupply() * game.getRats() / 100)) + game.getCurrentUser().getHarvest())

  refreshWithTemplates([tpl_start1b]);
  //Explicitly remove event listening
  KBstop();
  pause(step1);
}

// Manage Market & food
function step1(){
  //console.info("step1")
  KBlisten({
    step1BuyMarket : KEYBOARD_ONE, // 1
    step1SellMarket : KEYBOARD_TWO, // 2
    step1SellLand : KEYBOARD_THREE, // 3
    step1GiveToOst : KEYBOARD_RETURN, // ↩
  });

  refreshWithTemplates([tpl_step1_base, tpl_step1]);
}

function step1BuyMarket(){
  //console.info("buy market");
  KBlisten({
    step1BuyMarketFrom : KEYBOARD_INT, // 0-9
    step1 : KEYBOARD_RETURN, //↩
  });
  refreshWithTemplates([tpl_step1_base, tpl_step1_1]);
}

function step1BuyMarketFrom(from){
  //console.info("step1BuyMarketFrom " + from);
  let marketId=parseInt(from);
  let market=game.getMarket();

  //if empty
  if( marketId === "") {
    return step1();
  }

  //if vendor doesn't exist
  if(!market.getSales().has(marketId)) {
    return step1BuyMarket();
  }

  //If Myself
  if(market.getSales().get(marketId)["idUser"] === game.getCurrentUser().getId()){
    game.addError(Errors.cantBuyMyself());
    return step1BuyMarket();
  }

  market.createOffer(game.getCurrentUser().getId(), marketId);

  KBlisten({
    KBstartTyping : KEYBOARD_INT_TYPING, // 0-9 + backspace
    step1BuyMarketFromAndHowMuch : KEYBOARD_RETURN, //↩
    "options" : {"typing":true, "templates":[tpl_step1_base, tpl_step1_1b]}
  });
  refreshWithTemplates([tpl_step1_base, tpl_step1_1b]);
}

function step1BuyMarketFromAndHowMuch(){
  //console.info("step1BuyMarketFromAndHowMuch");
  let quantity=parseInt(KBreturn());
  let market=game.getMarket();

  let offer = market.getOffer();
  let sale = market.getSales().get(offer["marketId"]);

  if(isNaN(quantity)){
    return step1();
  }

  if(sale["boisseaux"] < quantity) {
    game.addError(Errors.notEnoughtStockOnMarket());
    return step1BuyMarketFrom(offer["marketId"]);
  }

  if(sale["price"] * quantity > game.getCurrentUser().getMoney()) {
    game.addError(Errors.notEnoughtMoney());
    return step1BuyMarketFrom(offer["marketId"]);
  }

  game.resolveMarketOffer(quantity);

  step1();
}


function step1SellMarket(){
  //console.info("sell market");
  KBlisten({
    KBstartTyping : KEYBOARD_INT_TYPING, // 0-9 + backspace
    step1SellMarketWithPrice : KEYBOARD_RETURN, //↩
    "options" : {"typing":true, "templates":[tpl_step1_base, tpl_step1_2]}
  });
  refreshWithTemplates([tpl_step1_base, tpl_step1_2]);
}

function step1SellMarketWithPrice(quantityParam){
  //console.info("step1SellMarketWithPrice");
  let market=game.getMarket();
  let quantity=parseInt(KBreturn());
  if(Number.isInteger(quantityParam)){
    quantity = quantityParam;
  }

  if(isNaN(quantity)){
    return step1();
  }

  if(quantity > game.getCurrentUser().getSupply()){
      game.addError(Errors.notEnoughtStock());
      return step1SellMarket();
  }

  market.createPromise(game.getCurrentUser().getId(), quantity);

  KBlisten({
    KBstartTyping : KEYBOARD_PRICE_TYPING, // 0-9 + backspace + dot key
    step1DoSellMarketWithPrice : KEYBOARD_RETURN, //↩
    "options" : {"typing":true, "templates":[tpl_step1_base, tpl_step1_2b]}
  });
  refreshWithTemplates([tpl_step1_base, tpl_step1_2b]);
}

function step1DoSellMarketWithPrice(){
  //console.info("step1DoSellMarketWithPrice");
  let market=game.getMarket();
  let quantity = market.getPromise().quantity;
  let price=Number.parseFloat(KBreturn()).toFixed(2);

  if(isNaN(price)){
    return step1()
  }

  if(price > 15){
    game.addError(Errors.priceTooHigh());
    return step1SellMarketWithPrice(quantity);
  }

  //console.info("quantity : " + quantity)
  //console.info("price : " + price)
  market.addSales(game.getCurrentUser().getId(), game.getCurrentUser().getCountry(), quantity, price);
  game.getCurrentUser().addSupply(-1 * quantity);
  step1();
}




//Propose selling Land
function step1SellLand(){
  //console.info("sell land")
  KBlisten({
    KBstartTyping : KEYBOARD_INT_TYPING, // 0-9 + backspace
    step1DoSellLand : KEYBOARD_RETURN, //↩
    "options" : {"typing":true, "templates":[tpl_step1_base, tpl_step1_3]}
  });
  refreshWithTemplates([tpl_step1_base, tpl_step1_3]);
}

// Do selling land
function step1DoSellLand(){
  //console.info("go sell market")
  let keyboard = KBreturn();
  if(keyboard !== ""){
    let user = game.getCurrentUser();
    if(user.getLand() < keyboard){
      game.addError(Errors.notEnoughtLand())
      return step1SellLand();
    } else {
      user.addLand(-keyboard);
      user.addMoney(game.getLandPrice() * keyboard);
    }
  }
  step1();
}

function step1GiveToOst(){
  KBlisten({
    KBstartTyping : KEYBOARD_INT_TYPING, // 0-9 + backspace
    step1DoGiveToOst : KEYBOARD_RETURN, //↩
    "options" : {"typing":true, "templates":[tpl_step1_base, tpl_step1_4]}
  });
  refreshWithTemplates([tpl_step1_base, tpl_step1_4]);
}

function step1DoGiveToOst(){

  let quantity=parseInt(KBreturn());
  if(isNaN(quantity)){
    quantity = 0;
  }

  if(quantity > game.getCurrentUser().getSupply()){
      game.addError(Errors.notEnoughtStock())
      return step1GiveToOst();
  }

  game.getCurrentUser().addSupply(-1 * quantity);
  game.getCurrentUser().setSupplyOst(quantity);

  return step1GiveToPeople();
}

function step1GiveToPeople(){

  KBlisten({
    KBstartTyping : KEYBOARD_INT_TYPING, // 0-9 + backspace
    step1DoGiveToPeople : KEYBOARD_RETURN, //↩
    "options" : {"typing":true, "templates":[tpl_step1_base, tpl_step1_5]}
  });
  refreshWithTemplates([tpl_step1_base, tpl_step1_5]);
}

function step1DoGiveToPeople(){

  let quantity=parseInt(KBreturn());
  if(isNaN(quantity)){
    quantity = 0;
  }


  if(quantity > game.getCurrentUser().getSupply()){
    console.info(Errors.notEnoughtStock());
    game.addError(Errors.notEnoughtStock())
    return step1GiveToPeople();
  }

  if(quantity < game.getCurrentUser().getNeedPeople() && quantity < (0.1 * game.getCurrentUser().getSupply())){
    console.info(Errors.atLast10Percent());
    game.addError(Errors.atLast10Percent())
    return step1GiveToPeople();
  }

  game.getCurrentUser().addSupply(-1 * quantity);
  game.getCurrentUser().setSupplyPeople(quantity);

console.info(">" + game.getCurrentUser().getSupply());

  return step2();
}
