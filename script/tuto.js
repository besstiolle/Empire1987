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

function tuto2(){
  startGame();
}
