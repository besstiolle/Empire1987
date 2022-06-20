import { Party } from './Part_Abstract.class'

export class KBVars {

  mapping:Object[]
  templates:Function[]
  additionnalParameters:object
  typing:boolean

  constructor(m:Object[], t:Function[] = [], p:object = {}, typing:boolean = false){
    this.mapping = m
    this.templates = t
    this.additionnalParameters = p
    this.typing = typing
  }
}

export class KB {

  protected static _buffer:string = ""
  protected static _binder:EventListener = null
  protected static KEYDOWN = 'keydown'

  static listen(m:Object[], t:Function[] = [], p:object = {}, typing:boolean = false){
    KB._buffer = "";
    KB.stop()
    KB._binder = KB.keyboardBinder.bind(
        null, 
        new KBVars(m, t, p, typing));
    document.addEventListener(KB.KEYDOWN, KB._binder, false);
  }

  static listenTyping(m:Object[], t:Function[] = [], p:object = {}){
    KB.listen(m,t,p,true);
  }

  static stop(){
    document.removeEventListener(KB.KEYDOWN,KB._binder);
  }

  static startTyping(key:number){
    //console.info("KB.startTyping(" + this._buffer + ")");
    //console.info("Buffer avant = " + KB._buffer);
    if(key == 8) {
      KB._buffer = KB._buffer.substring(0, KB._buffer.length - 1);
    } else {
      KB._buffer += KB.eventKeyToJScode(key);
    }
    //console.info("Buffer après = " + KB._buffer);
  }

  static keyboardBinder(vars:KBVars, event:any){

    //Avoid anything but F5
    if(event.keyCode !== 116){
      event.preventDefault();
    }

    vars.mapping.forEach((map:any) => {
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

  static eventKeyToJScode(key:number){
    if(key == 110) {return ".";} // dot
    return String.fromCharCode((96 <= key && key <= 105)? key-48 : key);
  }

  static buffer(){
    return KB._buffer || ""
  }
}
