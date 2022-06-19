import { KB } from './KB.class'
import { Const } from './Const.class'

export class Party {

  static pause(nextCall){
    setTimeout(function(){ nextCall(); }, 2000);
  }

  static refreshWithTemplate(template, vars = {}){
    return Party.refreshWithTemplates([template], vars)
  }

  static refreshWithTemplates(templates, vars = {}){
    //console.info("template" + template);
    let datas = "";
    vars = Object.assign({
      "user": window.game.getCurrentUser(),
      "users": window.game.getUsers(),
      "game": window.game,
      "sales": window.game.getSalesInArray(),
      "Const": Const,
      "KB_BUFFER": KB.buffer
      }, vars)

    for (const tpl of templates) {
     // if( typeof(tpl) == Object){
        datas += tpl(vars);
     // } else {
     //   throw "tpl wasn't an object " + tpl
     // }
    }

    document.getElementById("game").innerHTML = datas;
    game.purgeErrors();
  }

}
