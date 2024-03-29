import { KB } from './KB.class'
import { Const } from './Const.class'
import { Party } from './Part_Abstract.class'
import { Lands } from './Part5_Lands.class'
import { Errors } from './Errors.class'
import { UserUtils } from './User.utils.class'


import tpl_4_base from './templates/4_base.tpl'
import tpl_4 from './templates/4.tpl'
import tpl_4_a from './templates/4_a.tpl'
import tpl_4_b from './templates/4_b.tpl'
import tpl_4_c from './templates/4_c.tpl'
import tpl_4_d from './templates/4_d.tpl'
import tpl_4_e from './templates/4_e.tpl'

export class Invest extends Party {

  //Investissement
  static choiceTaxes(){
    if(game.getCurrentUser().getGains() == null){
      Invest.processMoney();
    }

    //console.info("step4")
    KB.listen([
      {key: Const.KEYBOARD_ONE, callback: Invest.setTaxeA}, // 1
      {key: Const.KEYBOARD_TWO, callback: Invest.setTaxeB}, // 2
      {key: Const.KEYBOARD_THREE, callback: Invest.setTaxeC}, // 3
      {key: Const.KEYBOARD_RETURN, callback: Invest.choiceInvest}, // ↩
    ]);

    Party.refreshWithTemplates([tpl_4_base, tpl_4]);
  }

  //Propose setting taxe A
  static setTaxeA(){
    //console.info("set Taxe A")
    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Invest.doSetTaxeA}, // ↩
    ], [tpl_4_base, tpl_4_a]);

    Party.refreshWithTemplates([tpl_4_base, tpl_4_a]);
  }

  // Do set Taxe A
  static doSetTaxeA(){
    //console.info("do set taxe A")
    let keyboard = KB.buffer;
    if(keyboard !== ""){
      if(keyboard > 50){
        game.addError(Errors.taxeATooHigh())
        return Invest.setTaxeA();
      } else {
        game.getCurrentUser().setTaxeA(keyboard);
      }
    }
    Invest.choiceTaxes();
  }

  //Propose setting taxe B
  static setTaxeB(){
    //console.info("set Taxe B")
    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Invest.doSetTaxeB}, // ↩
    ], [tpl_4_base, tpl_4_b]);

    Party.refreshWithTemplates([tpl_4_base, tpl_4_b]);
  }

  // Do set Taxe B
  static doSetTaxeB(){
    //console.info("do set taxe B")
    let keyboard = KB.buffer;
    if(keyboard !== ""){
      if(keyboard > 50){
        game.addError(Errors.taxeBTooHigh())
        return Invest.setTaxeB();
      } else {
        game.getCurrentUser().setTaxeB(keyboard);
      }
    }
    Invest.choiceTaxes();
  }

  //Propose setting taxe C
  static setTaxeC(){
    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Invest.doSetTaxeC}, // ↩
    ], [tpl_4_base, tpl_4_c]);

    Party.refreshWithTemplates([tpl_4_base, tpl_4_c]);
  }

  // Do set Taxe C
  static doSetTaxeC(){
    //console.info("do set taxe C")
    let keyboard = KB.buffer;
    if(keyboard !== ""){
      if(keyboard > 50){
        game.addError(Errors.taxeCTooHigh())
        return Invest.setTaxeC();
      } else {
        game.getCurrentUser().setTaxeC(keyboard);
      }
    }
    Invest.choiceTaxes();
  }

  static choiceInvest(){
    //console.info("choiceInvest")

    KB.listen([
      {key: Const.KEYBOARD_INT, callback: Invest.choiceInvestHowMuch}, // 0-9
      {key: Const.KEYBOARD_RETURN, callback: Lands.entryPoint}, // ↩
    ]);

    Party.refreshWithTemplates([tpl_4_base, tpl_4_d]);
  }

  static choiceInvestHowMuch(invest){
    //console.info("choiceInvestHowMuch()" + invest)
    if(invest < 1 || invest > 6){
      return Invest.choiceInvest();
    }

    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Invest.doInvest}, // ↩
    ], [tpl_4_base, tpl_4_e], [invest]);

    Party.refreshWithTemplates([tpl_4_base, tpl_4_e]);
  }

  static doInvest(keyCode, additionnalParameters){
    //console.info("doInvest() -" + keyCode + "- -" +  additionnalParameters + "-")
    let quantity = parseInt(KB.buffer);
    if(isNaN(quantity)){
      return Invest.choiceInvest();
    }
    //console.info("quoi : ");
    //console.info(additionnalParameters);
    //console.info("quoi : " + additionnalParameters[0]);
    //console.info("quantity : " + quantity);
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

    if(what == 5 && UserUtils.getMaxOstPossible(game.getCurrentUser()) < quantity + game.getCurrentUser().getOst()){
      game.addError(Errors.notEnoughtNobles())
      return Invest.choiceInvestHowMuch(what);
    }

    if(price * quantity > game.getCurrentUser().getMoney()){
      game.addError(Errors.notEnoughtMoney())
      return Invest.choiceInvestHowMuch(what);
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
        game.getCurrentUser().addPalais(quantity * 10);
        break;
      default:
    }

    if(what == 6){
      game.getCurrentUser().addNobles(quantity);
    }

    return Invest.choiceInvest();
  }

  static processMoney(){
    let user = game.getCurrentUser();

    let gains = {gainFoires: 0,gainMoulins: 0,gainFonderies: 0,gainChantiers: 0,gainOst: 0,
                taxeA: 0,taxeB: 0,taxeC: 0};

    gains.gainFoires = UserUtils.calculGainsOfFoires(user);
    gains.gainMoulins = UserUtils.calculGainsOfMoulins(user);
    gains.gainFonderies = UserUtils.calculGainsOfFonderies(user);
    gains.gainChantiers = UserUtils.calculGainsOfChantiers(user);
    gains.gainOst = UserUtils.calculGainsOfOst(user);

    game.getCurrentUser().setGains(gains);

    gains.taxeA = UserUtils.calculGainsOfTaxesA(user);
    gains.taxeB = UserUtils.calculGainsOfTaxesB(user);
    gains.taxeC = UserUtils.calculGainsOfTaxesC(user);

    let gain = gains.gainFoires + gains.gainMoulins + gains.gainFonderies + gains.gainChantiers + gains.gainOst + gains.taxeA + gains.taxeB + gains.taxeC;

    game.getCurrentUser().addMoney(gain);
    game.getCurrentUser().setGains(gains);
  }
}
