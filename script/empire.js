"use strict";

let game = null;
let tpl_start = null;
let tpl_tuto1 = null;
let tpl_tuto2 = null;
let tpl_tuto3 = null;
let tpl_step1 = null;
let tpl_step1_3 = null;
let KEY_BINDER = null;

async function init(dot){

  tpl_start = await new Tpl("start");
  tpl_tuto1 = await new Tpl("tuto1");
  tpl_tuto2 = await new Tpl("tuto2");
  tpl_tuto3 = await new Tpl("tuto3");
  tpl_step1 = await new Tpl("step1");
  tpl_step1_3 = await new Tpl("step1_3");

  //Initiate the game
  game = new Game();

  home();
}

function home(){
  refreshWithTemplate(tpl_start);
  KEY_BINDER = keyboardBinder.bind(null, {
    startTuto : [79,80],
    startGame : [78],
    "default" : "return"
  });
  document.addEventListener('keydown', KEY_BINDER, false);
}

function startGame(){
  //Start the phase
  step1()
}

async function step1(){

  console.info("step1")
  refreshWithTemplate(tpl_step1);
  game.purgeErrors();
  console.info("step1b")
  // thank you https://keycode.info/
  KEY_BINDER = keyboardBinder.bind(null, {
    step1BuyMarket : [97,49], // 1
    step1SellMarket : [98,50], // 2
    step1SellLand : [99,51], // 3
    step2 : [13], // ↩
    "default" : "return"
  });
  document.addEventListener('keydown', KEY_BINDER, false);
}

function step1BuyMarket(){
  console.info("buy market");
  game.addError(Errors.notImplemented());
  step1()
}
function step1SellMarket(){
  console.info("sell market");
  game.addError(Errors.notImplemented());
  step1()
}
function step1SellLand(){
  console.info("sell land")
  refreshWithTemplate(tpl_step1_3);

  game.resetTyping();
  KEY_BINDER = keyboardBinder.bind(null, {
    startTyping : [96,97,98,99,100,101,102,103,104,105,47,48,49,50,51,52,53,54,55,56,57,8], // 0-9 + backspace
    sellLand : [13], //↩
    "default" : "return",
    "options" : {"typing":true, "template":tpl_step1_3}
  });
  document.addEventListener('keydown', KEY_BINDER, false);
}

function sellLand(){
  console.info("go sell market")
  game.purgeErrors();
  document.removeEventListener('keydown',KEY_BINDER);
  if(game.keyboardInput !== ""){
    let user = game.getCurrentUser();
    if(user.getLand() < game.keyboardInput){
      game.addError(Errors.notEnoughtLand())
      game.resetTyping();
      step1SellLand();
      return;
    } else {
      user.setLand(user.getLand() - game.keyboardInput);
      user.setMoney(user.getMoney() + game.getLandPrice() * game.keyboardInput);
    }
  }
  game.resetTyping();
  step1();
}


function step2(){
  console.info("step2")
  game.resetTyping();
  KEY_BINDER = keyboardBinder.bind(null, {
    startTyping : [96,97,98,99,100,101,102,103,104,105,47,48,49,50,51,52,53,54,55,56,57,8], // 0-9 + backspace
    step3 : [13], //↩
    "default" : "return",
  });
  document.addEventListener('keydown', KEY_BINDER, false);
}

function step3(){
  document.removeEventListener('keydown',KEY_BINDER);
  console.info("step3")
}

function startTyping(key){
  game.startTyping(key)
}

function keyboardBinder(vars, event){

  //Cumulative typing mode
  let typing=false;
  let template=null;
  if("options" in vars &&
       "typing" in vars["options"] &&
       "template" in vars["options"] &&
       vars["options"]["typing"] === true) {
      typing = true;
      template = vars["options"]["template"];
  }

  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  for (let [key,value] of Object.entries(vars)) {
    if(Array.isArray(value) && value.includes(event.keyCode)){
      if(!typing){
        document.removeEventListener('keydown',KEY_BINDER);
      }
      eval(key+"(event.keyCode)");
      if(template !== null && event.keyCode !== 13){
          refreshWithTemplate(template);
      }
    }
  }
  //Nothing found, let's check "default" action
  if(vars["default"] === "return"){
    return;
  }
  if(!typing){
    document.removeEventListener('keydown',KEY_BINDER);
  }
  game.purgeErrors();
  vars["default"](event.keyCode)
}

function refreshWithTemplate(template){
  //console.info("template" + template);
  document.getElementById("game").innerHTML = template.run({
    "user": game.getUsers()[0],
    "users": game.getUsers(),
    "game": game,
    "sales": game.getSalesInArray()
  });
}
