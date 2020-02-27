import { KB } from './KB.class'
import { Const } from './Const.class'
import { Party } from './Part_Abstract.class'
import { Start } from './Part0_Start.class'

export class Tuto extends Party {

  static startTuto(){
    KB.listen([
      {key: Const.KEYBOARD_RETURN, callback: Tuto.tuto2}, // ↩
    ]);
    Party.refreshWithTemplates(["tuto1"]);
  }

  static tuto2(){
    KB.listen([
      {key: Const.KEYBOARD_RETURN, callback: Tuto.tuto3}, // ↩
    ]);
    Party.refreshWithTemplates(["tuto2"]);
  }

  static tuto3(){
    KB.listen([
      {key: Const.KEYBOARD_RETURN, callback: Tuto.tuto4}, // ↩
    ]);
    Party.refreshWithTemplates(["tuto3"]);
  }

  static tuto4(){
    KB.listen([
      {key: Const.KEYBOARD_RETURN, callback: Tuto.tuto5}, // ↩
    ]);
    Party.refreshWithTemplates(["tuto4"]);
  }

  static tuto5(){
    KB.listen([
      {key: Const.KEYBOARD_RETURN, callback: Tuto.tuto6}, // ↩
    ]);
    Party.refreshWithTemplates(["tuto5"]);
  }

  static tuto6(){
    KB.listen([
      {key: Const.KEYBOARD_RETURN, callback: Tuto.tuto7}, // ↩
    ]);
    Party.refreshWithTemplates(["tuto6"]);
  }

  static tuto7(){
    KB.listen([
      {key: Const.KEYBOARD_RETURN, callback: Tuto.tuto_end}, // ↩
    ]);
    Party.refreshWithTemplates(["tuto7"]);
  }

  static tuto_end(){
    Start.askNumberOfPlayer();
  }
}
