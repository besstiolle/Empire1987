import './style.css';

import { Game } from './Game.class'
import { Start } from './Part0_Start.class'


window.game = new Game();
function component() {
  //Initiate the game
  window.game.reset();
  Start.home(); 
}

component()