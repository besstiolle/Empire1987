import { Party } from './Part_Abstract.class'
import { Food } from './Part2_Food.class'
import { Errors } from './Errors.class'
import { KB } from './KB.class'
import { Const } from './Const.class'

export class IA extends Party {
    // Terres vassales, choix de l'adversaire
    static do(){
      console.info("do IA")

      //Exécution for each of IA player
      game.getUsers().forEach(IA.doAction);

      KB.listen([
        {key: Const.KEYBOARD_RETURN, callback: IA.turnYear} // ↩
      ]);
      Party.refreshWithTemplates(["6_base"]);
    }

    static doAction(user, key){
      if(key == 1) {
        //player
        return;
      }
  /*    if(!user.isAlive()){
        //IA dead
        return;
      }*/

      console.info("doAction() " + user.getName())
    }

    //Turn one Year and go on for a new round
    static turnYear(){
        game.nextYear();

        return Food.meteoAndRats();
    }
}
