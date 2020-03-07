import { KB } from './KB.class'
import { Const } from './Const.class'
import { Party } from './Part_Abstract.class'
import { Tuto } from './Part1_Tuto.class'
import { Food } from './Part2_Food.class'
import { UserUtils } from './User.utils.class'

export class Start extends Party {

  static home(){
    KB.listen([
      {key: Const.KEYBOARD_OY, callback: Tuto.startTuto}, // O/Y
      {key: Const.KEYBOARD_N, callback: Start.askNumberOfPlayer} // N
    ]);
    Party.refreshWithTemplates(["0"]);
  }

  static askNumberOfPlayer(){
    //console.info("askNumberOfPlayer")
    KB.listen([
      {key: Const.KEYBOARD_ONE, callback: Start.askNameOfPlayer} // 1
    ]);
    Party.refreshWithTemplates(["0_1"]);
  }

  static askNameOfPlayer(){
    //console.info("askNameOfPlayer")
    KB.listenTyping([
      {key: Const.KEYBOARD_NAME_TYPING, callback: KB.startTyping}, // 1
      {key: Const.KEYBOARD_RETURN, callback: Start.savePlayer}, // 1
    ], ["0_1a"]);
    Party.refreshWithTemplates(["0_1a"]);
  }

  static savePlayer(){
    let input = KB.buffer;
    if(input != "" && input =="J"){
      game.getCurrentUser().setSexe(1);
    }

    game.getCurrentUser().setName(UserUtils.getName(game.getCurrentUser(), input));

    Food.meteoAndRats();
  }
}
