import { Party } from './Part_Abstract.class'


export class KB {

  static listen(m, t = [], p = {}, typing = false){
    KB.buffer = "";
    KB.stop()

    let vars = {"mapping":m, "templates":t, "additionnalParameters":p, "typing":typing};
    KB.binder = KB.keyboardBinder.bind(null, vars);
    document.addEventListener('keydown', KB.binder, false);
  }

  static listenTyping(m,t,p){
    KB.listen(m,t,p,true);
  }

  static stop(){
    document.removeEventListener('keydown',KB.binder);
  }

  static startTyping(key){
    //console.info("KB.startTyping(" + this._buffer + ")");
    //console.info("Buffer avant = " + KB.buffer);
    if(key == 8) {
      KB.buffer = KB.buffer.substring(0, KB.buffer.length - 1);
    } else {
      KB.buffer += KB.eventKeyToJScode(key);
    }
  //  console.info("Buffer après = " + KB.buffer);
  }

  static keyboardBinder(vars, event){

    //Avoid anything but F5
    if(event.keyCode !== 116){
      event.preventDefault();
    }

    vars.mapping.forEach((map) => {
      if(map.key.includes(event.keyCode)){

        if(!vars.typing){
          KB.stop();
        }

        if(map.callback === KB.startTyping){
            KB.startTyping(event.keyCode);
            if(event.keyCode !== 13){
                Party.refreshWithTemplates(vars.templates);
            }
            return;
        }

        Party.refreshWithTemplates(vars.templates);
        return map.callback(KB.eventKeyToJScode(event.keyCode), vars.additionnalParameters);
      }
    })
  }

  static eventKeyToJScode(key){
    if(key == 110) {return ".";} // dot
    return String.fromCharCode((96 <= key && key <= 105)? key-48 : key);
  }

  static isFunction(functionToCheck) {
   return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
  }

  get buffer() {
    return this._buffer || "";
  }

  set buffer(v) {
    this._buffer = v;
  }
  get binder() {
    return this._binder || null;
  }

  set binder(v) {
    this._binder = v;
  }
}
