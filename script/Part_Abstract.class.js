import { KB } from './KB.class'
import { Const } from './Const.class'

export class Party {

  static pause(nextCall){
    setTimeout(function(){ nextCall(); }, 2000);
  }

  static refreshWithTemplates(templates, vars = {}){
    //console.info("template" + template);
    let datas = "";
    vars = Object.assign({
      "user": window.game.getCurrentUser(),
      "users": window.game.getUsers(),
      "game": window.game,
      "sales": [...window.game.getSalesInArray()],
      "Const": Const,
      "KB_BUFFER": KB.buffer
      }, vars)

    for (const template of templates) {
      datas += tpl.run(template, vars);
    }

    document.getElementById("game").innerHTML = datas;
    game.purgeErrors();
  }

}
