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
  game.addError(Errors.notImplemented());
  step1()
}
function step1SellMarket(){
  //console.info("sell market");
  game.addError(Errors.notImplemented());
  step1()
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
