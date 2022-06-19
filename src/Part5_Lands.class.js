import { KB } from './KB.class'
import { Const } from './Const.class'
import { Combat } from './Combat.class'
import { Party } from './Part_Abstract.class'
import { IA } from './Part6_IA.class'
import { Errors } from './Errors.class'
import { UserUtils } from './User.utils.class'

import tpl_5_base from './templates/5_base.tpl'
import tpl_5 from './templates/5.tpl'
import tpl_5_b from './templates/5_b.tpl'
import tpl_5_combat_result from './templates/5_combat_result.tpl'

export class Lands extends Party {

    static entryPoint(){
      Lands.nbAttacks = 1;
      return Lands.choosingOpponent();
    }

    // Terres vassales, choix de l'adversaire
    static choosingOpponent(){
      //console.info("step5")
      KB.listen([
        {key: Const.KEYBOARD_INT, callback: Lands.choiceQttOst}, // 0-9
        {key: Const.KEYBOARD_RETURN, callback: IA.do}, // ↩
      ]);

      Party.refreshWithTemplates([tpl_5_base, tpl_5]);
    }

    //Selection du nombre de soldat
    static choiceQttOst(opponent){
      //console.info("choiceQttOst(" + opponent + ")");
      if(Lands.nbAttacks > UserUtils.getNbAttacksMax(game.getCurrentUser())){
        game.addError(Errors.notEnoughtNobles());
        return Lands.choosingOpponent();
      }

      let opponents = game.getOpponentsAsArray();
      if(opponent < 1 || opponent > opponents.length){
        //console.info("opposant pas dans la liste");
        return Lands.choosingOpponent();
      }

      //opponent = myself
      if(game.getCurrentUser().getId() == opponents[opponent - 1].getId()){
        //console.info("pas soi même");
        game.addError(Errors.fightMyself());
        return Lands.choosingOpponent();
      }
      KB.listenTyping([
        {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
        {key: Const.KEYBOARD_RETURN, callback: Lands.doFight}, // ↩
      ], [tpl_5_base, tpl_5_b], [opponents[opponent - 1].getId()]);

      //else choose number of soldier
      Party.refreshWithTemplates([tpl_5_base, tpl_5_b]);
    }


    //Selection du nombre de soldat
    static doFight(key, defenderUserId){
      let ost = parseInt(KB.buffer);
      if(isNaN(ost) || ost === 0){
        return Lands.choosingOpponent();
      }

      //console.info("doFight(" + ost + ", " + defenderUserId + ")");

      //Test if we have enought ost men
      if(game.getCurrentUser().getOst() < ost){
        game.addError(Errors.notEnoughtOst());
        return Lands.choosingOpponent();
      }


      let result = null;
      let promiseCombat = null;
      if(defenderUserId == 0){
        promiseCombat = Combat.execute(game.getBarbares(), game.getCurrentUser(), ost);
      } else {
        promiseCombat = Combat.execute(game.getUserById(defenderUserId), game.getCurrentUser(), ost);
      }

      //Resolve promise
      promiseCombat.then((result)=>{

        //add 1 to counter of current attacks
        Lands.nbAttacks++;

        KB.listen([
          {key: Const.KEYBOARD_RETURN, callback: Lands.choosingOpponent}, // ↩
        ]);

        //else choose number of soldier
        Party.refreshWithTemplate(tpl_5_combat_result, result);
      });
    }


    get nbAttacks() {
      return this._nbAttacks || 0;
    }

    set nbAttacks(v) {
      this._nbAttacks = v;
    }
}
