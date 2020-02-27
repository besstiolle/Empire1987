import { KB } from './KB.class'
import { Const } from './Const.class'
import { Party } from './Part_Abstract.class'
import { Lands } from './Part5_Lands.class'
import { Errors } from './Errors.class'

export class Invest extends Party {

  //Investissement
  static step3(){
    //console.info("step3")
    KB.listen([
      {key: Const.KEYBOARD_ONE, callback: Invest.step3setTaxeA}, // 1
      {key: Const.KEYBOARD_TWO, callback: Invest.step3setTaxeB}, // 2
      {key: Const.KEYBOARD_THREE, callback: Invest.step3setTaxeC}, // 3
      {key: Const.KEYBOARD_RETURN, callback: Invest.step3Invest}, // ↩
    ]);

    Party.refreshWithTemplates(["step3_base", "step3"]);
  }

  //Propose setting taxe A
  static step3setTaxeA(){
    //console.info("set Taxe A")
    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Invest.step3DoSetTaxeA}, // ↩
    ], ["step3_base", "step3_a"]);

    Party.refreshWithTemplates(["step3_base", "step3_a"]);
  }

  // Do set Taxe A
  static step3DoSetTaxeA(){
    //console.info("do set taxe A")
    let keyboard = KB.buffer;
    if(keyboard !== ""){
      if(keyboard > 50){
        game.addError(Errors.taxeATooHigh())
        return Invest.step3setTaxeA();
      } else {
        game.getCurrentUser().setTaxeA(keyboard);
      }
    }
    Invest.step3();
  }

  //Propose setting taxe B
  static step3setTaxeB(){
    //console.info("set Taxe B")
    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Invest.step3DoSetTaxeB}, // ↩
    ], ["step3_base", "step3_b"]);

    Party.refreshWithTemplates(["step3_base", "step3_b"]);
  }

  // Do set Taxe B
  static step3DoSetTaxeB(){
    //console.info("do set taxe B")
    let keyboard = KB.buffer;
    if(keyboard !== ""){
      if(keyboard > 50){
        game.addError(Errors.taxeBTooHigh())
        return Invest.step3setTaxeB();
      } else {
        game.getCurrentUser().setTaxeB(keyboard);
      }
    }
    Invest.step3();
  }

  //Propose setting taxe C
  static step3setTaxeC(){
    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Invest.step3DoSetTaxeC}, // ↩
    ], ["step3_base", "step3_c"]);

    Party.refreshWithTemplates(["step3_base", "step3_c"]);
  }

  // Do set Taxe C
  static step3DoSetTaxeC(){
    //console.info("do set taxe C")
    let keyboard = KB.buffer;
    if(keyboard !== ""){
      if(keyboard > 50){
        game.addError(Errors.taxeCTooHigh())
        return Invest.step3setTaxeC();
      } else {
        game.getCurrentUser().setTaxeC(keyboard);
      }
    }
    Invest.step3();
  }

  static step3Invest(){
    //console.info("step3invest")

    KB.listen([
      {key: Const.KEYBOARD_INT, callback: Invest.step3InvestHowMuch}, // 0-9
      {key: Const.KEYBOARD_RETURN, callback: Lands.step4}, // ↩
    ]);

    Party.refreshWithTemplates(["step3_base", "step3_d"]);
  }

  static step3InvestHowMuch(invest){
    //console.info("step3investHowMuch()" + invest)
    if(invest < 1 || invest > 6){
      return Invest.step3Invest();
    }

    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Invest.step3DoInvest}, // ↩
    ], ["step3_base", "step3_e"], [invest]);

    Party.refreshWithTemplates(["step3_base", "step3_e"]);
  }

  static step3DoInvest(keyCode, additionnalParameters){
    //console.info("step3investHowMuch() -" + keyCode + "- -" +  additionnalParameters + "-")
    let quantity = parseInt(KB.buffer);
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
      return Invest.step3InvestHowMuch(what);
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

    return Invest.step3Invest();
  }
}
