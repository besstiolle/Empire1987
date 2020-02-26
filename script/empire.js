"use strict";

let game = null;
let tpl = null;

async function init(dot){

  //Initiate the game
  game = new Game();
  tpl = new Tpl();
  //const start = Date.now();
  await tpl.init();
  //console.info("load all tpl > " + (Date.now() - start) + "ms");

  KBlisten({
    startTuto : KEYBOARD_OY, // o y
    askNumberOfPlayer : KEYBOARD_N, // n
  });

  refreshWithTemplates(["start"]);
}

function askNumberOfPlayer(){
  //console.info("askNumberOfPlayer")
  KBlisten({
    askNameOfPlayer : KEYBOARD_ONE, //↩
  });

  refreshWithTemplates(["start1"]);
}

function askNameOfPlayer(){
  //console.info("askNameOfPlayer")
  KBlisten({
    KBstartTyping : KEYBOARD_NAME_TYPING, //↩
    savePlayer : KEYBOARD_RETURN, //↩
    "options" : {"typing":true, "templates":["start1a"]}
  });

  refreshWithTemplates(["start1a"]);
}

function savePlayer(){
  //console.info("savePlayer")
  let name = KBreturn();
  if( name !== ""){
    if(name === "J") {
      name = "Jeanne d'Arc"
    }
  } else {
    name = "Hugues";
  }

  let user = game.getCurrentUser().setName(name);
  startGame();
}

function startGame(){
  //Start the phase
  step1MeteoAndRats();
}

function step5(){
  console.info("step5")
  KBstop();
}

function pause(nextCall){
  setTimeout(function(){ nextCall(); }, 300);
}

function refreshWithTemplates(templates, vars = {}){
  //console.info("template" + template);
  let datas = "";
  vars = Object.assign({
    "user": game.getCurrentUser(),
    "users": game.getUsers(),
    "game": game,
    "sales": [...game.getSalesInArray()],
    "Const": Const,
    "KB_BUFFER": KB_BUFFER
    }, vars)

  for (const template of templates) {
    datas += tpl.run(template, vars);
  }

  document.getElementById("game").innerHTML = datas;
  game.purgeErrors();
}
