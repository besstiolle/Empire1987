"use strict";


let KB_KEY_BINDER = null;
let KB_BUFFER = "";

const KEYBOARD_INT = [96,97,98,99,100,101,102,103,104,105,47,48,49,50,51,52,53,54,55,56,57]; // 0-9
const KEYBOARD_INT_TYPING = KEYBOARD_INT.concat([8]); // 0-9 + backspace for typing

const KEYBOARD_RETURN = [13]; // ENTER/RETURN ↩
const KEYBOARD_ONE = [97,49]; // 1
const KEYBOARD_TWO = [98,50]; // 2
const KEYBOARD_THREE = [99,51]; // 3
const KEYBOARD_OY = [79,80]; // o/y
const KEYBOARD_N = [78]; // n



function KBlisten(vars){
  KB_BUFFER = "";
  KBstop()
  //Add vars.default = "return"
  if(!("default" in vars)) {
      vars["default"] = "return";
  }

  KB_KEY_BINDER = KBkeyboardBinder.bind(null, vars);
  document.addEventListener('keydown', KB_KEY_BINDER, false);
}

function KBstop(){
  document.removeEventListener('keydown',KB_KEY_BINDER);
}

function KBreturn(){
  return KB_BUFFER;
}

function KBstartTyping(key){
  if(key == 8) {
    KB_BUFFER = KB_BUFFER.substring(0, KB_BUFFER.length - 1);
  } else {
    KB_BUFFER += String.fromCharCode((96 <= key && key <= 105)? key-48 : key);
  }
}

function KBkeyboardBinder(vars, event){

  if(event.keyCode !== 116){
    event.preventDefault();
  }
  //Cumulative typing mode
  let typing=false;
  let template=null;
  let KB = vars["KB"];

  if("options" in vars &&
       "typing" in vars["options"] &&
       "template" in vars["options"] &&
       vars["options"]["typing"] === true) {
      typing = true;
      template = vars["options"]["template"];
  }

  for (let [key,value] of Object.entries(vars)) {
    if(Array.isArray(value) && value.includes(event.keyCode)){
      if(!typing){
        KBstop();
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
    KBstop();
  }
  vars["default"](event.keyCode)
}
