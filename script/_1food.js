"use strict";

function step1Meteo(){
  //console.info("step1Meteo")
  //TODO Meteo

  refreshWithTemplates([tpl_start1b]);
  pause(step1);
}

// Manage Market & food
function step1(){
  //console.info("step1")
  KBlisten({
    step1BuyMarket : KEYBOARD_ONE, // 1
    step1SellMarket : KEYBOARD_TWO, // 2
    step1SellLand : KEYBOARD_THREE, // 3
    step2 : KEYBOARD_RETURN, // ↩
  });

  refreshWithTemplates([tpl_step1_base, tpl_step1]);
}

function step1BuyMarket(){
  //console.info("buy market");
  KBlisten({
    KBstartTyping : KEYBOARD_INT, // 0-9
    step1BuyMarketFrom : KEYBOARD_RETURN, //↩
    "options" : {"typing":true, "templates":[tpl_step1_base, tpl_step1_1]}
  });
  refreshWithTemplates([tpl_step1_base, tpl_step1_1]);
}

function step1BuyMarketFrom(){
  //console.info("step1BuyMarketFrom");
  let marketId=KBreturn();
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
  if(market.getSales().get(offer["marketId"])["idUser"] === game.getCurrentUser().getId){
    game.addError(Errors.cantBuyMyself());
    return step1BuyMarket();
  }

  market.createOffer(game.getCurrentUser().getId, marketId);

  KBlisten({
    KBstartTyping : KEYBOARD_INT_TYPING, // 0-9 + backspace
    step1BuyMarketFromAndHowMuch : KEYBOARD_RETURN, //↩
    "options" : {"typing":true, "templates":[tpl_step1_base, tpl_step1_1b]}
  });
  refreshWithTemplates([tpl_step1_base, tpl_step1_1b]);
}

function step1BuyMarketFromAndHowMuch(){
  //console.info("step1BuyMarketFromAndHowMuch");
  let quantity=KBreturn();
  let offer = market.getOffer();
  let sale = market.getSales().get(offer["marketId"]);

  if(sale["boisseaux"] < quantity) {
    game.addError(Errors.notEnoughtStockOnMarket());
    return step1BuyMarket();
  }

  if(sale["price"] * quantity > game.getCurrentUser().getMoney()) {
    game.addError(Errors.notEnoughtMoney());
    return step1BuyMarket();
  }

  //TODO resolve offer

  step1();
}
/*
static notEnoughtStock(){return NOT_ENOUGHT_STOCK}
static priceTooHight(){return PRICE_TOO_HIGH}*/

function step1SellMarket(){
  //console.info("sell market");
  KBlisten({
    KBstartTyping : KEYBOARD_INT_TYPING, // 0-9 + backspace
    step1SellMarketWithPrice : KEYBOARD_RETURN, //↩
    "options" : {"typing":true, "templates":[tpl_step1_base, tpl_step1_2]}
  });
  refreshWithTemplates([tpl_step1_base, tpl_step1_2]);
}

function step1SellMarketWithPrice(){
  //console.info("step1SellMarketWithPrice");
  KBlisten({
    KBstartTyping : KEYBOARD_INT_TYPING, // 0-9 + backspace
    step1DoSellMarketWithPrice : KEYBOARD_RETURN, //↩
    "options" : {"typing":true, "templates":[tpl_step1_base, tpl_step1_2b]}
  });
  refreshWithTemplates([tpl_step1_base, tpl_step1_2b]);
}

function step1DoSellMarketWithPrice(){
  //console.info("step1DoSellMarketWithPrice");

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
      user.setLand(user.getLand() - keyboard);
      user.setMoney(user.getMoney() + game.getLandPrice() * keyboard);
    }
  }
  step1();
}
