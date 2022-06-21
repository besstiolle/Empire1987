import { KB } from './KB.class'
import { Const } from './Const.class'
import { Party } from './Part_Abstract.class'
import { Tuto } from './Part1_Tuto.class'
import { Food } from './Part2_Food.class'
import { UserUtils } from './User.utils.class'
import { Game } from './Game.class'

import tpl_0 from '/templates/0.tpl'
import tpl_0_1 from './templates/0_1.tpl'
import tpl_0_1a from './templates/0_1a.tpl'

export abstract class Page{

  /**
   * State Machine
   *  0 : default (function _entry())
   *  1 : ...
   */
  protected state:number = 0
  protected templates:string[] = []

  static entry(){
    state=0
    templates=[]
    return this._entry()
  }


}

export class Start extends Page {
  static _entry(){

    switch(state){

      case 0: //Default state
        i.addTemplates(tpl_0)
         .addListener(Const.KB_OY, 20)
         .addListener(Const.KB_N, 1) // No rules asked, we're going to ask the number of players
        break

      case 1: // Here : we ask the number of player
        addTemplates(tpl_0_1)
        addListener(Const.KB_ONE, 2)
        break

      case 2: // Here : we ask the player its name
        addTemplates(tpl_0_1)
        addListener(Const.KB_NAME_TYPING + Const.KB_RETURN, 3)
        live()

        break

      case 3: // Here : we're saving everything
        let input = KB.buffer()
        if(input != "" && input =="J"){
          Game.getInstance().getCurrentUser().sexe = 1;
        }

        Game.getInstance().getCurrentUser().name = UserUtils.getName(Game.getInstance().getCurrentUser(), input);
        //We're leaving for the other view
        return Food.entry()
        
        break
      
      case 20: // Asking for the tutorials
        //We're leaving for the other view
        return Tuto.entry()
        break

      default:
        throw "state " + state + " wasn't expected in " + myself.className
        
    }

    super.refresh()
  }

}
