import { Party } from './Part_Abstract.class'
import { Food } from './Part2_Food.class'
import { Errors } from './Errors.class'
import { KB } from './KB.class'
import { Const } from './Const.class'
import { Game } from './Game.class'
import { User } from './User.class'


import tpl_6_base from './templates/6_base.tpl'

export class IA extends Party {
    // Terres vassales, choix de l'adversaire
    static do(){
      console.info("do IA")

      //Exécution for each of IA player
      Game.getInstance().getUsers().forEach(IA.doAction);

      KB.listen([
        {key: Const.KEYBOARD_RETURN, callback: IA.turnYear} // ↩
      ]);
      Party.refreshWithTemplate(tpl_6_base);
    }

    static doAction(user:User, key:number){
      if(key == 1) {
        //player
        return;
      }
  /*    if(!user.isAlive()){
        //IA dead
        return;
      }*/

      console.info("doAction() " + user.name)
    }

    //Turn one Year and go on for a new round
    static turnYear(){
        Game.getInstance().nextYear();

        return Food.meteoAndRats();
    }
}
