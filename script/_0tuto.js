"use strict";

function startTuto(){
  KBlisten({
    tuto2 : KEYBOARD_RETURN, // ↩
  });
  refreshWithTemplates([tpl_tuto1]);

}

function tuto2(){
  KBlisten({
    tuto3 : KEYBOARD_RETURN, // ↩
  });
  refreshWithTemplates([tpl_tuto2]);
}

function tuto3(){
  KBlisten({
    tuto4 : KEYBOARD_RETURN, // ↩
  });
  refreshWithTemplates([tpl_tuto3]);
}

function tuto4(){
  KBlisten({
    tuto5 : KEYBOARD_RETURN, // ↩
  });
  refreshWithTemplates([tpl_tuto4]);
}

function tuto5(){
  KBlisten({
    tuto6 : KEYBOARD_RETURN, // ↩
  });
  refreshWithTemplates([tpl_tuto5]);
}

function tuto6(){
  KBlisten({
    tuto7 : KEYBOARD_RETURN, // ↩
  });
  refreshWithTemplates([tpl_tuto6]);
}

function tuto7(){
  KBlisten({
    tuto_end : KEYBOARD_RETURN, // ↩
  });
  refreshWithTemplates([tpl_tuto7]);
}

function tuto_end(){
  askNumberOfPlayer();
}
