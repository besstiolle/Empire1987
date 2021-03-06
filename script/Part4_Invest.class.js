import { KB } from './KB.class'
import { Const } from './Const.class'
import { Party } from './Part_Abstract.class'
import { Lands } from './Part5_Lands.class'
import { Errors } from './Errors.class'

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

    Party.refreshWithTemplates(["4_base", "4"]);
  }

  //Propose setting taxe A
  static setTaxeA(){
    //console.info("set Taxe A")
    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Invest.doSetTaxeA}, // ↩
    ], ["4_base", "4_a"]);

    Party.refreshWithTemplates(["4_base", "4_a"]);
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
    ], ["4_base", "4_b"]);

    Party.refreshWithTemplates(["4_base", "4_b"]);
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
    ], ["4_base", "4_c"]);

    Party.refreshWithTemplates(["4_base", "4_c"]);
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
      {key: Const.KEYBOARD_RETURN, callback: Lands.choosingOpponent}, // ↩
    ]);

    Party.refreshWithTemplates(["4_base", "4_d"]);
  }

  static choiceInvestHowMuch(invest){
    //console.info("choiceInvestHowMuch()" + invest)
    if(invest < 1 || invest > 6){
      return Invest.choiceInvest();
    }

    KB.listenTyping([
      {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
      {key: Const.KEYBOARD_RETURN, callback: Invest.doInvest}, // ↩
    ], ["4_base", "4_e"], [invest]);

    Party.refreshWithTemplates(["4_base", "4_e"]);
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

    return Invest.choiceInvest();
  }

  static processMoney(){
    let user = game.getCurrentUser();

    let gains = {gainFoires: 0,gainMoulins: 0,gainFonderies: 0,gainChantiers: 0,gainOst: 0,
                taxeA: 0,taxeB: 0,taxeC: 0};

    gains.gainFoires = Math.floor((user.getFoires() * 1500) * game.getMeteoPercent());
    gains.gainMoulins = Math.floor((user.getMoulins() * 2500) * game.getMeteoPercent());
    gains.gainFonderies = Math.floor(((user.getFonderies() * 500) + 300) * game.getMeteoPercent());
    gains.gainChantiers = Math.floor((user.getChantiers() * 3500) * game.getMeteoPercent());
    gains.gainOst = user.getOst() * -1 * 8;

    gains.taxeA = Math.floor(user.getTaxeA() / 100 * user.getMigrants());
    gains.taxeB = Math.floor((user.getTaxeB() / 100 * user.getMarchands() * 300 + user.getTaxeB() / 100 * user.getFoires() * 75) * game.getMeteoPercent());
    gains.taxeC = Math.floor((user.getTaxeC() / 100 * user.getPeople() * 2) * game.getMeteoPercent());

    let gain = gains.gainFoires + gains.gainMoulins + gains.gainFonderies + gains.gainChantiers + gains.gainOst + gains.taxeA + gains.taxeB + gains.taxeC;

    game.getCurrentUser().addMoney(gain);
    game.getCurrentUser().setGains(gains);
  }
}
