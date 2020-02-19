"use strict";


// Terres vassales
function step4(){
  //console.info("step4")
  document.removeEventListener('keydown',KEY_BINDER);
  refreshWithTemplate(tpl_step4);
  KEY_BINDER = keyboardBinder.bind(null, {
    step4choosingOpponent : KEYBOARD_INT, // o y
    step5 : [13], //↩
    "default" : "return",
  });
  document.addEventListener('keydown', KEY_BINDER, false);
}

function step4choosingOpponent(){
  document.removeEventListener('keydown',KEY_BINDER);
  refreshWithTemplate(tpl_step4);
  KEY_BINDER = keyboardBinder.bind(null, {
    step4choosingOpponent : [79,80], // o y
    step5 : [13], //↩
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
    startTyping : KEYBOARD_INT_TYPING, // 0-9 + backspace
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
