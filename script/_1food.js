"use strict";

// Manage Market & food
function step1(){

  //console.info("step1")
  refreshWithTemplate(tpl_step1);
  game.purgeErrors();

  // thank you https://keycode.info/
  KEY_BINDER = keyboardBinder.bind(null, {
    step1BuyMarket : [97,49], // 1
    step1SellMarket : [98,50], // 2
    step1SellLand : [99,51], // 3
    step2 : [13], // ↩
    "default" : "return"
  });
  document.addEventListener('keydown', KEY_BINDER, false);
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
  refreshWithTemplate(tpl_step1_3);

  game.resetTyping();
  KEY_BINDER = keyboardBinder.bind(null, {
    startTyping : KEYBOARD_INT_TYPING, // 0-9 + backspace
    step1DoSellLand : [13], //↩
    "default" : "return",
    "options" : {"typing":true, "template":tpl_step1_3}
  });
  document.addEventListener('keydown', KEY_BINDER, false);
}

// Do selling land
function step1DoSellLand(){
  //console.info("go sell market")
  game.purgeErrors();
  document.removeEventListener('keydown',KEY_BINDER);
  if(game.keyboardInput !== ""){
    let user = game.getCurrentUser();
    if(user.getLand() < game.keyboardInput){
      game.addError(Errors.notEnoughtLand())
      game.resetTyping();
      step1SellLand();
      return;
    } else {
      user.setLand(user.getLand() - game.keyboardInput);
      user.setMoney(user.getMoney() + game.getLandPrice() * game.keyboardInput);
    }
  }
  game.resetTyping();
  step1();
}
