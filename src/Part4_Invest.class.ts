import { KB } from './KB.class'
import { Const } from './Const.class'
import { Party } from './Part_Abstract.class'
import { Lands } from './Part5_Lands.class'
import { Errors } from './Errors.class'
import { UserUtils } from './User.utils.class'
import { Game } from './Game.class'
import { User } from './User.class'


import tpl_4_base from './templates/4_base.tpl'
import tpl_4 from './templates/4.tpl'
import tpl_4_a from './templates/4_a.tpl'
import tpl_4_b from './templates/4_b.tpl'
import tpl_4_c from './templates/4_c.tpl'
import tpl_4_d from './templates/4_d.tpl'
import tpl_4_e from './templates/4_e.tpl'

export class Invest extends Party {

  static enterStep4(){
    Invest.processMoney()
    Invest.choiceTaxes()
  }

  //Investissement
  static choiceTaxes(){
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
    let keyboard:number = parseInt(KB.buffer())
    if(isNaN(keyboard)){
      if(keyboard > 50){
        Game.getInstance().addError(Errors.taxeATooHigh())
        return Invest.setTaxeA();
      } else {
        Game.getInstance().getCurrentUser().taxeA = keyboard;
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
    let keyboard:number = parseInt(KB.buffer())
    if(isNaN(keyboard)){
      if(keyboard > 50){
        Game.getInstance().addError(Errors.taxeBTooHigh())
        return Invest.setTaxeB();
      } else {
        Game.getInstance().getCurrentUser().taxeB = keyboard;
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
    let keyboard:number = parseInt(KB.buffer())
    if(isNaN(keyboard)){
      if(keyboard > 50){
        Game.getInstance().addError(Errors.taxeCTooHigh())
        return Invest.setTaxeC();
      } else {
        Game.getInstance().getCurrentUser().taxeC = keyboard
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

  static choiceInvestHowMuch(invest:number = 0){
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

  static doInvest(keyCode:number, additionnalParameters:string[]){
    //console.info("doInvest() -" + keyCode + "- -" +  additionnalParameters + "-")
    let quantity:number = parseInt(KB.buffer())
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

    if(what == 5 && UserUtils.getMaxOstPossible(Game.getInstance().getCurrentUser()) < quantity + Game.getInstance().getCurrentUser().ost){
      Game.getInstance().addError(Errors.notEnoughtNobles())
      return Invest.choiceInvestHowMuch(what);
    }

    if(price * quantity > Game.getInstance().getCurrentUser().money){
      Game.getInstance().addError(Errors.notEnoughtMoney())
      return Invest.choiceInvestHowMuch(what);
    }
    Game.getInstance().getCurrentUser().money -= price * quantity

    switch (what) {
      case 1:
        Game.getInstance().getCurrentUser().foires += quantity
        break;
      case 2:
        Game.getInstance().getCurrentUser().moulins += quantity
        break;
      case 3:
        Game.getInstance().getCurrentUser().fonderies += quantity
        break;
      case 4:
        Game.getInstance().getCurrentUser().chantiers += quantity
        break;
      case 5:
        Game.getInstance().getCurrentUser().ost += quantity
        break;
      case 6:
        Game.getInstance().getCurrentUser().palais += quantity * 10
        break;
      default:
    }

    if(what == 6){
      Game.getInstance().getCurrentUser().nobles += quantity
    }

    return Invest.choiceInvest();
  }

  static processMoney(){
    let user:User = Game.getInstance().getCurrentUser();

    Game.getInstance().getCurrentUser().gainFoires = UserUtils.calculGainsOfFoires(user);
    Game.getInstance().getCurrentUser().gainMoulins = UserUtils.calculGainsOfMoulins(user);
    Game.getInstance().getCurrentUser().gainFonderies = UserUtils.calculGainsOfFonderies(user);
    Game.getInstance().getCurrentUser().gainChantiers = UserUtils.calculGainsOfChantiers(user);
    Game.getInstance().getCurrentUser().costOst = UserUtils.calculGainsOfOst(user);

    Game.getInstance().getCurrentUser().gainTaxesA = UserUtils.calculGainsOfTaxesA(user);
    Game.getInstance().getCurrentUser().gainTaxesB = UserUtils.calculGainsOfTaxesB(user);
    Game.getInstance().getCurrentUser().gainTaxesC = UserUtils.calculGainsOfTaxesC(user);

    let gain = Game.getInstance().getCurrentUser().gainFoires + 
              Game.getInstance().getCurrentUser().gainMoulins + 
              Game.getInstance().getCurrentUser().gainFonderies + 
              Game.getInstance().getCurrentUser().gainChantiers + 
              Game.getInstance().getCurrentUser().costOst * -1 + 
              Game.getInstance().getCurrentUser().gainTaxesA + 
              Game.getInstance().getCurrentUser().gainTaxesB + 
              Game.getInstance().getCurrentUser().gainTaxesC

    Game.getInstance().getCurrentUser().money += gain
  }
}
