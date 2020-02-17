"use strict";

const regexINT = /^(48|49|50|51|52|53|54|55|56|57|13)$/ //0->9
const regexYN = /^(79|89|78)*$/ //o|y|n
let game = null

var $ = function( id ) { return document.getElementById( id ); };

async function init(){
  let tpl = await loadTpl("start");
  $("game").innerHTML = processTpl(tpl);
  document.addEventListener('keydown',keyboardOYN);

}

function keyboardOYN(event){

  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  let tuto = true;
  switch (event.keyCode) {
    case 79:
    case 89:
      break;
    case 78:
      tuto = false;
      break;
    default:
      return;
  }
  document.removeEventListener('keydown',keyboardOYN);
  if(tuto) {
    startTuto();
  } else {
    startGame();
  }

}

function startGame(){
  //Initiate the game
  game = new Game();
  //Start the phase
  step1()
}

async function step1(){
  let tpl = await loadTpl("step1");
  tpl = hydrateTpl(tpl, {
    "user.name": game.getUsers()[0].getName(),
    "user.taxeA": game.getUsers()[0].getTaxeC()
  })
  tpl = processTpl(tpl);

  $("game").innerHTML = tpl;
}
/*
function listenKeyboard(event){

  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  if(event.keyCode == 37) {
        alert('Left was pressed');
    }
    else if(event.keyCode == 39) {
        alert('Right was pressed');
    }
   console.info(event.keyCode + " " + String.fromCharCode(event.keyCode));
}
*/
