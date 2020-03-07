import { KB } from './KB.class'
import { Const } from './Const.class'
import { Party } from './Part_Abstract.class'
import { UserUtils } from './User.utils.class'
import { Invest } from './Part4_Invest.class'

export class Demography extends Party {

  //Démographie
  static demography(){
    //console.info("demography")

    let satisfactionPeople = UserUtils.calculSatisfaction(game.getCurrentUser().getNeedPeople(),game.getCurrentUser().getSupplyPeople());
    let satisfactionOst = UserUtils.calculSatisfaction(game.getCurrentUser().getNeedOst(),game.getCurrentUser().getSupplyOst());

    game.getCurrentUser().setSatisfactionPeople(satisfactionPeople);
    game.getCurrentUser().setSatisfactionOst(satisfactionOst);

    let randomDeath = UserUtils.calculDeaths(game.getCurrentUser());
    let randomBirth = UserUtils.calculBirths(game.getCurrentUser());
    let randomMigrant = UserUtils.calculMigrants(game.getCurrentUser());
    let randomStarvingPeople = UserUtils.calculStarvingPeople(game.getCurrentUser());
    let randomStarvingOst = UserUtils.calculStarvingOst(game.getCurrentUser());

    let randomPeople = randomBirth - randomDeath + randomMigrant - randomStarvingPeople;

    game.getCurrentUser().addPeople(randomPeople);
    game.getCurrentUser().addOst(-1 * randomStarvingOst);

    let templateVars = {"randomDeath" : randomDeath, "randomBirth" : randomBirth,
                      "randomMigrant" : randomMigrant, "randomStarvingPeople" : randomStarvingPeople,
                      "randomStarvingOst" : randomStarvingOst, "randomPeople" : randomPeople };
    KB.listen([
      {key: Const.KEYBOARD_RETURN, callback: Invest.choiceTaxes}, // ↩
    ]);

    Party.refreshWithTemplates(["3"], templateVars);
  }

}
