"use strict";

var bindTuto = null

async function startTuto(){
  refreshWithTemplate(tpl_tuto1);
  bindTuto = keyboardNext.bind(null, tuto2);
  document.addEventListener('keydown', bindTuto, false);
}

function tuto2(){
  startGame();
}



function keyboardNext(nextCall, event){
  if (event.defaultPrevented || event.keyCode != 13) {
    return; // Do nothing if the event was already processed
  }
  document.removeEventListener('keydown',bindTuto);
  nextCall()
}
