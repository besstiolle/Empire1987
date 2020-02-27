import { KB } from './KB.class'
import { Const } from './Const.class'
import { Combat } from './Combat.class'
import { Party } from './Part_Abstract.class'
import { Errors } from './Errors.class'

export class Lands extends Party {
    // Terres vassales, choix de l'adversaire
    static step4(){
      //console.info("step4")
      KB.listen([
        {key: Const.KEYBOARD_INT, callback: Lands.step4choosingArmy}, // 0-9
        {key: Const.KEYBOARD_RETURN, callback: Lands.step5}, // ↩
      ]);

      Party.refreshWithTemplates(["step4_base", "step4"]);
    }

    //Selection du nombre de soldat
    static step4choosingArmy(opponent){
      //console.info("step4choosingArmy(" + opponent + ")");

      let opponents = game.getOpponentsAsArray();
      if(opponent < 1 || opponent > opponents.length){
        console.info("opposant pas dans la liste");
        return Lands.step4();
      }

      //opponent = myself
      if(game.getCurrentUser().getId() == opponents[opponent - 1].getId()){
        console.info("pas soi même");
        game.addError(Errors.fightMyself());
        return Lands.step4();
      }
      KB.listenTyping([
        {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
        {key: Const.KEYBOARD_RETURN, callback: Lands.step4fight}, // ↩
      ], ["step4_base", "step4_b"], [opponents[opponent - 1].getId()]);

      //else choose number of soldier
      Party.refreshWithTemplates(["step4_base", "step4_b"]);
    }


    //Selection du nombre de soldat
    static step4fight(key, defenderUserId){
      let ost = parseInt(KB.buffer);
      if(ost === ""){
        return Lands.step4();
      }

      console.info("step4fight(" + ost + ", " + defenderUserId + ")");

      //Test if we have enought ost men
      if(game.getCurrentUser().getOst() < ost){
        game.addError(Errors.notEnoughtOst());
        return Lands.step4();
      }

      let remains = 0;

      //Barbarians
      if(defenderUserId == 0){
        remains = Combat.execute(game.getBarbares(), game.getCurrentUser(), ost);
        game.getBarbares().setOst(remains[0]);
      } else {
        remains = Combat.execute(game.getUserById(defenderUserId), game.getCurrentUser(), ost);
        game.getUserById(defenderUserId).setOst(remains[0]);
      }
      game.getCurrentUser().setOst(remains[1]);

      return Lands.step4();
    }



    static step5(){
      console.info("step5")
      KB.stop();
    }
}
