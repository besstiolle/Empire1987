import { KB } from './KB.class'
import { Const } from './Const.class'
import { Game } from './Game.class';

export class Party {

  static pause(nextCall:Function){
    setTimeout(function(){ nextCall(); }, 2000);
  }

  static refreshWithTemplate(template:Function, vars = {}){
    return Party.refreshWithTemplates([template], vars)
  }

  static refreshWithTemplates(templates:Function[], vars = {}){
    //console.info("template" + template);
    let datas = "";
    vars = Object.assign({
      "user": Game.getInstance().getCurrentUser(),
      "users": Game.getInstance().getUsers(),
      "game": Game.getInstance(),
      "sales": Game.getInstance().market.getSalesInArray(),
      "Const": Const,
      "KB_BUFFER": KB.buffer()
      }, vars)

    for (const tpl of templates) {
        datas += tpl(vars);
    }

    document.getElementById("game").innerHTML = datas;
    Game.getInstance().purgeErrors();
  }

}
