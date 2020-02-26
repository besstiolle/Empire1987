"use strict";

function startTuto(){
  KBlisten({
    tuto2 : KEYBOARD_RETURN, // ↩
  });
  refreshWithTemplates(["tuto1"]);

}

function tuto2(){
  KBlisten({
    tuto3 : KEYBOARD_RETURN, // ↩
  });
  refreshWithTemplates(["tuto2"]);
}

function tuto3(){
  KBlisten({
    tuto4 : KEYBOARD_RETURN, // ↩
  });
  refreshWithTemplates(["tuto3"]);
}

function tuto4(){
  KBlisten({
    tuto5 : KEYBOARD_RETURN, // ↩
  });
  refreshWithTemplates(["tuto4"]);
}

function tuto5(){
  KBlisten({
    tuto6 : KEYBOARD_RETURN, // ↩
  });
  refreshWithTemplates(["tuto5"]);
}

function tuto6(){
  KBlisten({
    tuto7 : KEYBOARD_RETURN, // ↩
  });
  refreshWithTemplates(["tuto6"]);
}

function tuto7(){
  KBlisten({
    tuto_end : KEYBOARD_RETURN, // ↩
  });
  refreshWithTemplates(["tuto7"]);
}

function tuto_end(){
  askNumberOfPlayer();
}
