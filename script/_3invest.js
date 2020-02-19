"use strict";

//Investissement
function step3(){
  //console.info("step3")
  document.removeEventListener('keydown',KEY_BINDER);
  refreshWithTemplate(tpl_step3);
  KEY_BINDER = keyboardBinder.bind(null, {
    step3setTaxeA : [97,49], // 1
    step3setTaxeB : [98,50], // 2
    step3setTaxeC : [99,51], // 3
    step4 : [13], //↩
    "default" : "return",
  });
  document.addEventListener('keydown', KEY_BINDER, false);
}

//Propose setting taxe A
function step3setTaxeA(){
  //console.info("set Taxe A")
  refreshWithTemplate(tpl_step3_a);

  game.resetTyping();
  KEY_BINDER = keyboardBinder.bind(null, {
    startTyping : KEYBOARD_NUM, // 0-9 + backspace
    step3DoSetTaxeA : [13], //↩
    "default" : "return",
    "options" : {"typing":true, "template":tpl_step3_a}
  });
  document.addEventListener('keydown', KEY_BINDER, false);
}

// Do set Taxe A
function step3DoSetTaxeA(){
  //console.info("do set taxe A")
  game.purgeErrors();
  document.removeEventListener('keydown',KEY_BINDER);
  if(game.keyboardInput !== ""){
    if(game.keyboardInput > 50){
      game.addError(Errors.taxeATooHigh())
      game.resetTyping();
      step3setTaxeA();
      return;
    } else {
      game.getCurrentUser().setTaxeA(game.keyboardInput);
    }
  }
  game.resetTyping();
  step3();
}

//Propose setting taxe B
function step3setTaxeB(){
  //console.info("set Taxe B")
  refreshWithTemplate(tpl_step3_b);

  game.resetTyping();
  KEY_BINDER = keyboardBinder.bind(null, {
    startTyping : KEYBOARD_NUM, // 0-9 + backspace
    step3DoSetTaxeB : [13], //↩
    "default" : "return",
    "options" : {"typing":true, "template":tpl_step3_b}
  });
  document.addEventListener('keydown', KEY_BINDER, false);
}

// Do set Taxe B
function step3DoSetTaxeB(){
  //console.info("do set taxe B")
  game.purgeErrors();
  document.removeEventListener('keydown',KEY_BINDER);
  if(game.keyboardInput !== ""){
    if(game.keyboardInput > 50){
      game.addError(Errors.taxeBTooHigh())
      game.resetTyping();
      step3setTaxeB();
      return;
    } else {
      game.getCurrentUser().setTaxeB(game.keyboardInput);
    }
  }
  game.resetTyping();
  step3();
}

//Propose setting taxe C
function step3setTaxeC(){
  //console.info("set Taxe C")
  refreshWithTemplate(tpl_step3_c);

  game.resetTyping();
  KEY_BINDER = keyboardBinder.bind(null, {
    startTyping : KEYBOARD_NUM, // 0-9 + backspace
    step3DoSetTaxeC : [13], //↩
    "default" : "return",
    "options" : {"typing":true, "template":tpl_step3_c}
  });
  document.addEventListener('keydown', KEY_BINDER, false);
}

// Do set Taxe C
function step3DoSetTaxeC(){
  //console.info("do set taxe C")
  game.purgeErrors();
  document.removeEventListener('keydown',KEY_BINDER);
  if(game.keyboardInput !== ""){
    if(game.keyboardInput > 50){
      game.addError(Errors.taxeCTooHigh())
      game.resetTyping();
      step3setTaxeC();
      return;
    } else {
      game.getCurrentUser().setTaxeC(game.keyboardInput);
    }
  }
  game.resetTyping();
  step3();
}
