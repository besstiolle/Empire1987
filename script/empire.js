"use strict";

let game = null;
let combat = null;
let tpl_start = null;
let tpl_tuto1 = null;
let tpl_tuto2 = null;
let tpl_tuto3 = null;
let tpl_tuto4 = null;
let tpl_tuto5 = null;
let tpl_tuto6 = null;
let tpl_tuto7 = null;
let tpl_step1_base = null;
let tpl_step1 = null;
let tpl_step1_3 = null;
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
  tpl_start = await new Tpl("start");
  tpl_tuto1 = await new Tpl("tuto1");
  tpl_tuto2 = await new Tpl("tuto2");
  tpl_tuto3 = await new Tpl("tuto3");
  tpl_tuto4 = await new Tpl("tuto4");
  tpl_tuto5 = await new Tpl("tuto5");
  tpl_tuto6 = await new Tpl("tuto6");
  tpl_tuto7 = await new Tpl("tuto7");
  tpl_step1_base = await new Tpl("step1_base");
  tpl_step1 = await new Tpl("step1");
  tpl_step1_3 = await new Tpl("step1_3");
  tpl_step2 = await new Tpl("step2");
  tpl_step3_base = await new Tpl("step3_base");
  tpl_step3 = await new Tpl("step3");
  tpl_step3_a = await new Tpl("step3_a");
  tpl_step3_b = await new Tpl("step3_b");
  tpl_step3_c = await new Tpl("step3_c");
  tpl_step4_base = await new Tpl("step4_base");
  tpl_step4 = await new Tpl("step4");
  tpl_step4_a = await new Tpl("step4_a");
  tpl_step4_b = await new Tpl("step4_b");
  //console.info("load all tpl > " + (Date.now() - start) + "ms");

  //Initiate the game
  game = new Game();
  combat = new Combat();

  home();
}

function home(){
  KBlisten({
    startTuto : KEYBOARD_OY, // o y
    startGame : KEYBOARD_N, // n
  });

  refreshWithTemplates([tpl_start]);
}

function startGame(){
  //Start the phase
  step1()
}

//Démographie
function step2(){
  //console.info("step2")
  KBlisten({
    step3 : KEYBOARD_RETURN, //↩
  });

  refreshWithTemplates([tpl_step2]);
}

function step5(){
  console.info("step5")
  KBstop();
}

function refreshWithTemplates(templates){
  //console.info("template" + template);
  let datas = "";
  for (const template of templates) {
    datas += template.run({
      "user": game.getCurrentUser(),
      "users": game.getUsers(),
      "game": game,
      "sales": game.getSalesInArray(),
      "KB_BUFFER": KB_BUFFER
    });
  }

  document.getElementById("game").innerHTML = datas;
  game.purgeErrors();
}
