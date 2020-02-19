"use strict";

function startTuto(){
  refreshWithTemplate(tpl_tuto1);
  KEY_BINDER = keyboardBinder.bind(null, {
    tuto2 : [13], // ↩
    "default" : "return"
  });
  document.addEventListener('keydown', KEY_BINDER, false);
}

function tuto2(){
  refreshWithTemplate(tpl_tuto2);
  KEY_BINDER = keyboardBinder.bind(null, {
    tuto3 : [13], // ↩
    "default" : "return"
  });
  document.addEventListener('keydown', KEY_BINDER, false);
}

function tuto3(){
  refreshWithTemplate(tpl_tuto3);
  KEY_BINDER = keyboardBinder.bind(null, {
    tuto4 : [13], // ↩
    "default" : "return"
  });
  document.addEventListener('keydown', KEY_BINDER, false);
}

function tuto4(){
  refreshWithTemplate(tpl_tuto4);
  KEY_BINDER = keyboardBinder.bind(null, {
    tuto5 : [13], // ↩
    "default" : "return"
  });
  document.addEventListener('keydown', KEY_BINDER, false);
}

function tuto5(){
  refreshWithTemplate(tpl_tuto5);
  KEY_BINDER = keyboardBinder.bind(null, {
    tuto6 : [13], // ↩
    "default" : "return"
  });
  document.addEventListener('keydown', KEY_BINDER, false);
}

function tuto6(){
  refreshWithTemplate(tpl_tuto6);
  KEY_BINDER = keyboardBinder.bind(null, {
    tuto7 : [13], // ↩
    "default" : "return"
  });
  document.addEventListener('keydown', KEY_BINDER, false);
}

function tuto7(){
  refreshWithTemplate(tpl_tuto7);
  KEY_BINDER = keyboardBinder.bind(null, {
    tuto_end : [13], // ↩
    "default" : "return"
  });
  document.addEventListener('keydown', KEY_BINDER, false);
}

function tuto_end(){
  startGame();
}
