"use strict";

let game = null;
let combat = null;
let tpl_start = null;
let tpl_start1 = null;
let tpl_start1a = null;
let tpl_start1b = null;
let tpl_tuto1 = null;
let tpl_tuto2 = null;
let tpl_tuto3 = null;
let tpl_tuto4 = null;
let tpl_tuto5 = null;
let tpl_tuto6 = null;
let tpl_tuto7 = null;
let tpl_step1_base = null;
let tpl_step1 = null;
let tpl_step1_1 = null;
let tpl_step1_1b = null;
let tpl_step1_2 = null;
let tpl_step1_2b = null;
let tpl_step1_3 = null;
let tpl_step1_4 = null;
let tpl_step1_5 = null;
let tpl_step2 = null;
let tpl_step3_base = null;
let tpl_step3 = null;
let tpl_step3_a = null;
let tpl_step3_b = null;
let tpl_step3_c = null;
let tpl_step4_base = null;
let tpl_step4 = null;
let tpl_step4_a = null;
let tpl_step4_b = null;


async function init(dot){
//const start = Date.now();
  await loadTemplates()
  //console.info("load all tpl > " + (Date.now() - start) + "ms");

  //Initiate the game
  game = new Game();
  combat = new Combat();

  KBlisten({
    startTuto : KEYBOARD_OY, // o y
    askNumberOfPlayer : KEYBOARD_N, // n
  });

  refreshWithTemplates([tpl_start]);
}

function askNumberOfPlayer(){
  //console.info("askNumberOfPlayer")
  KBlisten({
    askNameOfPlayer : KEYBOARD_ONE, //↩
  });

  refreshWithTemplates([tpl_start1]);
}

function askNameOfPlayer(){
  //console.info("askNameOfPlayer")
  KBlisten({
    KBstartTyping : KEYBOARD_NAME_TYPING, //↩
    savePlayer : KEYBOARD_RETURN, //↩
    "options" : {"typing":true, "templates":[tpl_start1a]}
  });

  refreshWithTemplates([tpl_start1a]);
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

  let user = new User(1,name)
  game.updateUser(user);
  startGame();
}

function startGame(){
  //Start the phase
  step1Meteo();
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
    "KB_BUFFER": KB_BUFFER
    }, vars)
    
  for (const template of templates) {
    datas += template.run(vars);
  }

  document.getElementById("game").innerHTML = datas;
  game.purgeErrors();
}

async function loadTemplates(){
  [tpl_start,
    tpl_tuto1, tpl_tuto2, tpl_tuto3, tpl_tuto4, tpl_tuto5, tpl_tuto6, tpl_tuto7,
    tpl_start1, tpl_start1a, tpl_start1b,
    tpl_step1_base, tpl_step1, tpl_step1_1, tpl_step1_1b, tpl_step1_2,  tpl_step1_2b, tpl_step1_3, tpl_step1_4, tpl_step1_5,
    tpl_step2,
    tpl_step3_base, tpl_step3, tpl_step3_a, tpl_step3_b, tpl_step3_c,
    tpl_step4_base, tpl_step4, tpl_step4_a, tpl_step4_b
  ] = await Promise.all([new Tpl("start"),
    new Tpl("tuto1"), new Tpl("tuto2"), new Tpl("tuto3"), new Tpl("tuto4"), new Tpl("tuto5"), new Tpl("tuto6"), new Tpl("tuto7"),
    new Tpl("start1"), new Tpl("start1a"), new Tpl("start1b"),
    new Tpl("step1_base"), new Tpl("step1"), new Tpl("step1_1"), new Tpl("step1_1b"), new Tpl("step1_2"), new Tpl("step1_2b"), new Tpl("step1_3"), new Tpl("step1_4"), new Tpl("step1_5"),
    new Tpl("step2"),
    new Tpl("step3_base"), new Tpl("step3"), new Tpl("step3_a"), new Tpl("step3_b"), new Tpl("step3_c"),
    new Tpl("step4_base"), new Tpl("step4"), new Tpl("step4_a"), new Tpl("step4_b"),
  ])
}
