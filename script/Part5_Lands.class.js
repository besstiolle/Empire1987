import { KB } from './KB.class'
import { Const } from './Const.class'
import { Combat } from './Combat.class'
import { Party } from './Part_Abstract.class'
import { IA } from './Part6_IA.class'
import { Errors } from './Errors.class'

export class Lands extends Party {
    // Terres vassales, choix de l'adversaire
    static choosingOpponent(){
      //console.info("step5")
      KB.listen([
        {key: Const.KEYBOARD_INT, callback: Lands.choiceQttOst}, // 0-9
        {key: Const.KEYBOARD_RETURN, callback: IA.do}, // ↩
      ]);

      Party.refreshWithTemplates(["5_base", "5"]);
    }

    //Selection du nombre de soldat
    static choiceQttOst(opponent){
      //console.info("choiceQttOst(" + opponent + ")");

      let opponents = game.getOpponentsAsArray();
      if(opponent < 1 || opponent > opponents.length){
        console.info("opposant pas dans la liste");
        return Lands.choosingOpponent();
      }

      //opponent = myself
      if(game.getCurrentUser().getId() == opponents[opponent - 1].getId()){
        console.info("pas soi même");
        game.addError(Errors.fightMyself());
        return Lands.choosingOpponent();
      }
      KB.listenTyping([
        {key: Const.KEYBOARD_INT_TYPING, callback: KB.startTyping}, // 0-9 + backspace
        {key: Const.KEYBOARD_RETURN, callback: Lands.doFight}, // ↩
      ], ["5_base", "5_b"], [opponents[opponent - 1].getId()]);

      //else choose number of soldier
      Party.refreshWithTemplates(["5_base", "5_b"]);
    }


    //Selection du nombre de soldat
    static doFight(key, defenderUserId){
      let ost = parseInt(KB.buffer);
      if(isNaN(ost) || ost === 0){
        return Lands.choosingOpponent();
      }

      console.info("doFight(" + ost + ", " + defenderUserId + ")");

      //Test if we have enought ost men
      if(game.getCurrentUser().getOst() < ost){
        game.addError(Errors.notEnoughtOst());
        return Lands.choosingOpponent();
      }


      let result = null;
      if(defenderUserId == 0){
        Combat.execute(game.getBarbares(), game.getCurrentUser(), ost).then((r)=>{
          result = r;
          console.info(result);

          KB.listen([
            {key: Const.KEYBOARD_RETURN, callback: Lands.choosingOpponent}, // ↩
          ], ["5_combat_result"], result);

          //else choose number of soldier
          Party.refreshWithTemplates(["5_combat_result"]);
        });
      } else {
        Combat.execute(game.getUserById(defenderUserId), game.getCurrentUser(), ost).then((r)=>{
          result = r;
          console.info(result);

          KB.listen([
            {key: Const.KEYBOARD_RETURN, callback: Lands.choosingOpponent}, // ↩
          ]);

          //else choose number of soldier
          Party.refreshWithTemplates(["5_combat_result"], result);
        });
      }



    }
}
