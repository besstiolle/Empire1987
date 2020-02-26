"use strict";


let KB_KEY_BINDER = null;
let KB_BUFFER = "";

const KEYBOARD_INT = [96,97,98,99,100,101,102,103,104,105,47,48,49,50,51,52,53,54,55,56,57]; // 0-9
const KEYBOARD_ALPHA = [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90]; // a-z
const KEYBOARD_SYMB = [32,110,188,59,58,161,170]; // space dot , ; : ! *
const KEYBOARD_INT_TYPING = KEYBOARD_INT.concat([8]); // 0-9 + backspace for typing
const KEYBOARD_PRICE_TYPING = KEYBOARD_INT.concat([8,110]); // 0-9 + backspace + dot key for typing
const KEYBOARD_NAME_TYPING = KEYBOARD_INT.concat(KEYBOARD_ALPHA).concat(KEYBOARD_SYMB).concat([8]) // 0-9 + alpha + some symbol + backspace for typing

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
  //console.info("KBstartTyping(" + KB_BUFFER + ")");
  if(key == 8) {
    KB_BUFFER = KB_BUFFER.substring(0, KB_BUFFER.length - 1);
  } else {
    KB_BUFFER += eventKeyToJScode(key);
    //console.info("Buffer = " + KB_BUFFER);
  }
}

function KBkeyboardBinder(vars, event){

  //Avoid anything but F5
  if(event.keyCode !== 116){
    event.preventDefault();
  }

  let options = [];
  if("options" in vars){
    options = vars["options"];
  }

  //Cumulative typing mode
  let typing=false;
  let templates=null;
  if("typing" in options && "templates" in options && options["typing"]) {
      typing = true;
      templates = vars["options"]["templates"];
  }

  let additionnalParameters = [];
  if("params" in options){
    additionnalParameters = options["params"];
  }

  for (let [key,value] of Object.entries(vars)) {
    if(Array.isArray(value) && value.includes(event.keyCode)){
      if(!typing){
        KBstop();
      }
      let jsCode = event.keyCode;
      if(key !== "KBstartTyping"){
        jsCode = eventKeyToJScode(jsCode);
      }
      //console.info("eval(" + key + "(" + jsCode + ",additionnalParameters)");
      //console.info(additionnalParameters);
      eval(key+"(jsCode, additionnalParameters)");
      if(templates !== null && event.keyCode !== 13){
          refreshWithTemplates(templates);
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
  vars["default"](eventKeyToJScode(event.keyCode), additionnalParameters);
}

function eventKeyToJScode(key){
  if(key == 110) {return ".";} // dot
  return String.fromCharCode((96 <= key && key <= 105)? key-48 : key);
}
