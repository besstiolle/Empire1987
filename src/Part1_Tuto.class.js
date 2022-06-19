import { KB } from './KB.class'
import { Const } from './Const.class'
import { Party } from './Part_Abstract.class'
import { Start } from './Part0_Start.class'

import tpl_1_tuto1 from './templates/1_tuto1.tpl'
import tpl_1_tuto2 from './templates/1_tuto2.tpl'
import tpl_1_tuto3 from './templates/1_tuto3.tpl'
import tpl_1_tuto4 from './templates/1_tuto4.tpl'
import tpl_1_tuto5 from './templates/1_tuto5.tpl'
import tpl_1_tuto6 from './templates/1_tuto6.tpl'
import tpl_1_tuto7 from './templates/1_tuto7.tpl'

export class Tuto extends Party {

  static startTuto(){
    KB.listen([
      {key: Const.KEYBOARD_RETURN, callback: Tuto.tuto2}, // ↩
    ]);
    Party.refreshWithTemplate(tpl_1_tuto1);
  }

  static tuto2(){
    KB.listen([
      {key: Const.KEYBOARD_RETURN, callback: Tuto.tuto3}, // ↩
    ]);
    Party.refreshWithTemplate(tpl_1_tuto2);
  }

  static tuto3(){
    KB.listen([
      {key: Const.KEYBOARD_RETURN, callback: Tuto.tuto4}, // ↩
    ]);
    Party.refreshWithTemplate(tpl_1_tuto3);
  }

  static tuto4(){
    KB.listen([
      {key: Const.KEYBOARD_RETURN, callback: Tuto.tuto5}, // ↩
    ]);
    Party.refreshWithTemplate(tpl_1_tuto4);
  }

  static tuto5(){
    KB.listen([
      {key: Const.KEYBOARD_RETURN, callback: Tuto.tuto6}, // ↩
    ]);
    Party.refreshWithTemplate(tpl_1_tuto5);
  }

  static tuto6(){
    KB.listen([
      {key: Const.KEYBOARD_RETURN, callback: Tuto.tuto7}, // ↩
    ]);
    Party.refreshWithTemplate(tpl_1_tuto6);
  }

  static tuto7(){
    KB.listen([
      {key: Const.KEYBOARD_RETURN, callback: Tuto.tuto_end}, // ↩
    ]);
    Party.refreshWithTemplate(tpl_1_tuto7);
  }

  static tuto_end(){
    Start.askNumberOfPlayer();
  }
}
