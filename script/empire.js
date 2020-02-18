"use strict";

let game = null;
let tpl_start = null;
let tpl_tuto1 = null;
let tpl_tuto2 = null;
let tpl_tuto3 = null;
let tpl_step1 = null;
let KEY_BINDER = null;

async function init(dot){

  tpl_start = await new Tpl("start");
  tpl_tuto1 = await new Tpl("tuto1");
  tpl_tuto2 = await new Tpl("tuto2");
  tpl_tuto3 = await new Tpl("tuto3");
  tpl_step1 = await new Tpl("step1");
  home();
}

function home(){
  refreshWithTemplate(tpl_start);
  KEY_BINDER = keyboardBinder.bind(null, {
    79 : startTuto, // o
    89 : startTuto, // y
    78 : startGame, // n
    "default" : "return"
  });
  document.addEventListener('keydown', KEY_BINDER, false);
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
    "game": game,
    "sales": game.getSalesInArray()
  });

  // thank you https://keycode.info/
  KEY_BINDER = keyboardBinder.bind(null, {
    97 : step1BuyMarket, // 1
    49 : step1BuyMarket, // &
    98 : step1SellMarket, // 2
    50 : step1SellMarket, // é
    99 : step1SellLand, // 3
    51 : step1SellLand, // "
    13 : step2, // ↩
    //8 : xxx, // backspace
    "default" : "return"
  });
  document.addEventListener('keydown', KEY_BINDER, false);
}

async function step1BuyMarket(){
  console.info("buy market")
}
async function step1SellMarket(){
  console.info("sell market")
}
async function step1SellLand(){
  console.info("sell land")
}
async function step2(){
  console.info("step2")
}


function keyboardBinder(vars, event){
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  for (let [key,value] of Object.entries(vars)) {
    if(event.keyCode == key){
      document.removeEventListener('keydown',KEY_BINDER);
      value();
    }
  }
  //Nothing found, let's check "default" action
  if(vars["default"] === "return"){
    return;
  }

  document.removeEventListener('keydown',KEY_BINDER);
  vars["default"]()
}



function refreshWithTemplate(template, args = {}){
  document.getElementById("game").innerHTML = template.run(args);
}
