"use strict";

const regexINT = /^(48|49|50|51|52|53|54|55|56|57|13)$/ //0->9
const regexYN = /^(79|89|78)*$/ //o|y|n
let game = null
let tpl_start = null
let tpl_tuto1 = null
let tpl_step1 = null

async function init(dot){

  tpl_start = await new Tpl("start");
  tpl_tuto1 = await new Tpl("tuto1");
  tpl_step1 = await new Tpl("step1");
  home();
}

function home(){
  refreshWithTemplate(tpl_start);
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
  refreshWithTemplate(tpl_step1,{
    "user": game.getUsers()[0],
    "users": game.getUsers(),
    "game": game
  });
}












function refreshWithTemplate(template, args = {}){
  document.getElementById("game").innerHTML = template.run(args);
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
