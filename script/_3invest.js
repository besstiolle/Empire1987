"use strict";

//Investissement
function step3(){
  //console.info("step3")
  KBlisten({
    step3setTaxeA : KEYBOARD_ONE, // 1
    step3setTaxeB : KEYBOARD_TWO, // 2
    step3setTaxeC : KEYBOARD_THREE, // 3
    step4 : KEYBOARD_RETURN, //↩
  });

  refreshWithTemplate(tpl_step3);
}

//Propose setting taxe A
function step3setTaxeA(){
  //console.info("set Taxe A")
  KBlisten({
    KBstartTyping : KEYBOARD_INT_TYPING, // 0-9 + backspace
    step3DoSetTaxeA : KEYBOARD_RETURN, //↩
    "options" : {"typing":true, "template":tpl_step3_a}
  });

  refreshWithTemplate(tpl_step3_a);
}

// Do set Taxe A
function step3DoSetTaxeA(){
  //console.info("do set taxe A")
  game.purgeErrors();
  let keyboard = KBreturn();
  if(keyboard !== ""){
    if(keyboard > 50){
      game.addError(Errors.taxeATooHigh())
      step3setTaxeA();
      return;
    } else {
      game.getCurrentUser().setTaxeA(keyboard);
    }
  }
  step3();
}

//Propose setting taxe B
function step3setTaxeB(){
  //console.info("set Taxe B")
  KBlisten({
      KBstartTyping : KEYBOARD_INT_TYPING, // 0-9 + backspace
      step3DoSetTaxeB : KEYBOARD_RETURN, //↩
      "options" : {"typing":true, "template":tpl_step3_b}
  });

  refreshWithTemplate(tpl_step3_b);
}

// Do set Taxe B
function step3DoSetTaxeB(){
  //console.info("do set taxe B")
  game.purgeErrors();
  let keyboard = KBreturn();
  if(keyboard !== ""){
    if(keyboard > 50){
      game.addError(Errors.taxeBTooHigh())
      step3setTaxeB();
      return;
    } else {
      game.getCurrentUser().setTaxeB(keyboard);
    }
  }
  step3();
}

//Propose setting taxe C
function step3setTaxeC(){
  KBlisten({
      KBstartTyping : KEYBOARD_INT_TYPING, // 0-9 + backspace
      step3DoSetTaxeC : KEYBOARD_RETURN, //↩
      "options" : {"typing":true, "template":tpl_step3_c}
  });

  refreshWithTemplate(tpl_step3_c);
}

// Do set Taxe C
function step3DoSetTaxeC(){
  //console.info("do set taxe C")
  game.purgeErrors();
  //KBstop();
  let keyboard = KBreturn();
  if(keyboard !== ""){
    if(keyboard > 50){
      game.addError(Errors.taxeCTooHigh())
      step3setTaxeC();
      return;
    } else {
      game.getCurrentUser().setTaxeC(keyboard);
    }
  }
  step3();
}
