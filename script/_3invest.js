"use strict";

//Investissement
function step3(){
  //console.info("step3")
  KBlisten({
    step3setTaxeA : KEYBOARD_ONE, // 1
    step3setTaxeB : KEYBOARD_TWO, // 2
    step3setTaxeC : KEYBOARD_THREE, // 3
    step3Invest : KEYBOARD_RETURN, //↩
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

function step3Invest(){
  //console.info("step3invest")
  KBlisten({
      step3InvestHowMuch : KEYBOARD_INT, // 0-9
      step4 : KEYBOARD_RETURN, //↩
  });

  refreshWithTemplates([tpl_step3_base, tpl_step3_d]);
}

function step3InvestHowMuch(invest){
  //console.info("step3investHowMuch()" + invest)

  if(invest < 1 || invest > 6){
    console.info("retour step3Invest()")
    return step3Invest();
  }

  KBlisten({
      KBstartTyping : KEYBOARD_INT_TYPING, // 0-9 + backspace
      step3DoInvest : KEYBOARD_RETURN, //↩
      "options" : {"typing":true, "templates":[tpl_step3_base, tpl_step3_e], "params" : [invest]}
  });
  refreshWithTemplates([tpl_step3_base, tpl_step3_e]);
}

function step3DoInvest(keyCode, additionnalParameters){
  //console.info("step3investHowMuch() -" + keyCode + "- -" +  additionnalParameters + "-")
  let quantity = parseInt(KBreturn());
//  console.info("quoi : ");
//  console.info(additionnalParameters);
//  console.info("quoi : " + additionnalParameters[0]);
//  console.info("quantity : " + quantity);
  let what = parseInt(additionnalParameters[0]);
  let price = 0;
  switch (what) {
    case 1:
      price = Const.foirePrice;break;
    case 2:
      price = Const.moulinPrice;break;
    case 3:
      price = Const.fonderiePrice;break;
    case 4:
      price = Const.chantierPrice;break;
    case 5:
      price = Const.ostPrice;break;
    case 6:
      price = Const.palaisPrice;break;
    default:
  }

  if(price * quantity > game.getCurrentUser().getMoney()){
    game.addError(Errors.notEnoughtMoney())
    return step3InvestHowMuch(what);
  }
  game.getCurrentUser().addMoney(-1 * price * quantity);

  switch (what) {
    case 1:
      game.getCurrentUser().addFoires(quantity);
      break;
    case 2:
      game.getCurrentUser().addMoulins(quantity);
      break;
    case 3:
      game.getCurrentUser().addFonderies(quantity);
      break;
    case 4:
      game.getCurrentUser().addChantiers(quantity);
      break;
    case 5:
      game.getCurrentUser().addOst(quantity);
      break;
    case 6:
      game.getCurrentUser().addPalais(quantity);
      break;
    default:
  }

  return step3Invest();
}
