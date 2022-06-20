import { KB } from './KB.class'
import { Const } from './Const.class'
import { Party } from './Part_Abstract.class'
import { UserUtils } from './User.utils.class'
import { Invest } from './Part4_Invest.class'

import tpl_3 from './templates/3.tpl'

export class Demography extends Party {

  //Démographie
  static demography(){
    //console.info("demography")

    let randomDeath = 0
    let randomBirth = 0
    let randomMigrant = 0
    let randomStarvingPeople = 0
    let randomStarvingOst = 0

    let randomPeople = randomBirth - randomDeath + randomMigrant - randomStarvingPeople;

    //TODO : rewrite code

    let templateVars = {"randomDeath" : randomDeath, "randomBirth" : randomBirth,
                      "randomMigrant" : randomMigrant, "randomStarvingPeople" : randomStarvingPeople,
                      "randomStarvingOst" : randomStarvingOst, "randomPeople" : randomPeople };
    KB.listen([
      {key: Const.KEYBOARD_RETURN, callback: Invest.enterStep4}, // ↩
    ]);

    Party.refreshWithTemplate(tpl_3, templateVars);
  }

}
