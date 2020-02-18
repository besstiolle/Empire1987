"use strict";

var bindTuto = null

async function startTuto(){
  refreshWithTemplate(tpl_tuto1);
  KEY_BINDER = keyboardBinder.bind(null, {
    13 : tuto2, // Enter
    "default" : "return"
  });
  document.addEventListener('keydown', KEY_BINDER, false);
}

async function tuto2(){
  refreshWithTemplate(tpl_tuto2);
  KEY_BINDER = keyboardBinder.bind(null, {
    13 : tuto3, // Enter
    "default" : "return"
  });
  document.addEventListener('keydown', KEY_BINDER, false);
}


async function tuto3(){
  refreshWithTemplate(tpl_tuto3);
  KEY_BINDER = keyboardBinder.bind(null, {
    13 : tuto4, // Enter
    "default" : "return"
  });
  document.addEventListener('keydown', KEY_BINDER, false);
}

function tuto4(){
  startGame();
}
