"use strict";

let game = null;
let tpl_start = null;
let tpl_tuto1 = null;
let tpl_tuto2 = null;
let tpl_tuto3 = null;
let tpl_tuto4 = null;
let tpl_tuto5 = null;
let tpl_tuto6 = null;
let tpl_tuto7 = null;
let tpl_step1 = null;
let tpl_step1_3 = null;
let tpl_step2 = null;
let tpl_step3 = null;
let tpl_step3_a = null;
let tpl_step3_b = null;
let tpl_step3_c = null;
let tpl_step4 = null;
let tpl_step4_a = null;
let tpl_step4_b = null;
let KEY_BINDER = null;

const KEYBOARD_INT = [96,97,98,99,100,101,102,103,104,105,47,48,49,50,51,52,53,54,55,56,57] // 0-9
const KEYBOARD_INT_TYPING = KEYBOARD_INT.concat([8]) // 0-9 + backspace for typing

async function init(dot){

  tpl_start = await new Tpl("start");
  tpl_tuto1 = await new Tpl("tuto1");
  tpl_tuto2 = await new Tpl("tuto2");
  tpl_tuto3 = await new Tpl("tuto3");
  tpl_tuto4 = await new Tpl("tuto4");
  tpl_tuto5 = await new Tpl("tuto5");
  tpl_tuto6 = await new Tpl("tuto6");
  tpl_tuto7 = await new Tpl("tuto7");
  tpl_step1 = await new Tpl("step1");
  tpl_step1_3 = await new Tpl("step1_3");
  tpl_step2 = await new Tpl("step2");
  tpl_step3 = await new Tpl("step3");
  tpl_step3_a = await new Tpl("step3_a");
  tpl_step3_b = await new Tpl("step3_b");
  tpl_step3_c = await new Tpl("step3_c");
  tpl_step4 = await new Tpl("step4");
  tpl_step4_a = await new Tpl("step4_a");
  tpl_step4_b = await new Tpl("step4_b");

  //Initiate the game
  game = new Game();

  home();
}

function home(){
  refreshWithTemplate(tpl_start);
  KEY_BINDER = keyboardBinder.bind(null, {
    startTuto : [79,80], // o y
    startGame : [78], // n
    "default" : "return"
  });
  document.addEventListener('keydown', KEY_BINDER, false);
}

function startGame(){
  //Start the phase
  step1()
}

//Démographie
function step2(){
  //console.info("step2")
  refreshWithTemplate(tpl_step2);
  game.resetTyping();
  KEY_BINDER = keyboardBinder.bind(null, {
    step3 : [13], //↩
    "default" : "return",
  });
  document.addEventListener('keydown', KEY_BINDER, false);
}


function step5(){
  console.info("step5")
  document.removeEventListener('keydown',KEY_BINDER);
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
