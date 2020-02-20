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

  refreshWithTemplates([tpl_step3_base, tpl_step3]);
}

//Propose setting taxe A
function step3setTaxeA(){
  //console.info("set Taxe A")
  KBlisten({
    KBstartTyping : KEYBOARD_INT_TYPING, // 0-9 + backspace
    step3DoSetTaxeA : KEYBOARD_RETURN, //↩
    "options" : {"typing":true, "templates":[tpl_step3_base, tpl_step3_a]}
  });

  refreshWithTemplates([tpl_step3_base, tpl_step3_a]);
}

// Do set Taxe A
function step3DoSetTaxeA(){
  //console.info("do set taxe A")
  let keyboard = KBreturn();
  if(keyboard !== ""){
    if(keyboard > 50){
      game.addError(Errors.taxeATooHigh())
      return step3setTaxeA();
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
      "options" : {"typing":true, "templates":[tpl_step3_base, tpl_step3_b]}
  });

  refreshWithTemplates([tpl_step3_base, tpl_step3_b]);
}

// Do set Taxe B
function step3DoSetTaxeB(){
  //console.info("do set taxe B")
  let keyboard = KBreturn();
  if(keyboard !== ""){
    if(keyboard > 50){
      game.addError(Errors.taxeBTooHigh())
      return step3setTaxeB();
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
      "options" : {"typing":true, "templates":[tpl_step3_base, tpl_step3_c]}
  });

  refreshWithTemplates([tpl_step3_base, tpl_step3_c]);
}

// Do set Taxe C
function step3DoSetTaxeC(){
  //console.info("do set taxe C")
  //KBstop();
  let keyboard = KBreturn();
  if(keyboard !== ""){
    if(keyboard > 50){
      game.addError(Errors.taxeCTooHigh())
      return step3setTaxeC();
    } else {
      game.getCurrentUser().setTaxeC(keyboard);
    }
  }
  step3();
}
