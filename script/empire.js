import { Game } from './Game.class'
import { User } from './User.class'
import { Tpl } from './Tpl.class'
import { Const } from './Const.class'
import { KB } from './KB.class'
import { Start } from './Part0_Start.class'

window.game = new Game();
window.tpl = new Tpl();

(function () {
  //Initiate the game
  window.game.reset();

  //const start = Date.now();
  window.tpl.init().then(() => {
    //console.info("load all tpl > " + (Date.now() - start) + "ms");
    Start.home();
  });
})()
