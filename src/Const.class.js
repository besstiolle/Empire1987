
export class Const {

    static get landPrice(){ return 2;}
    static get foirePrice(){ return 1000;}
    static get moulinPrice(){ return 2000;}
    static get fonderiePrice(){ return 7000;}
    static get chantierPrice(){ return 8000;}
    static get ostPrice(){ return 5;}
    static get palaisPrice(){ return 5000;}


    static get KEYBOARD_INT() { return [96,97,98,99,100,101,102,103,104,105,47,48,49,50,51,52,53,54,55,56,57]; } // 0-9
    static get KEYBOARD_ALPHA() { return [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90]; } // a-z
    static get KEYBOARD_SYMB() { return [32,110,188,59,58,161,170]; } // space dot , ; : ! *
    static get KEYBOARD_INT_TYPING() { return Const.KEYBOARD_INT.concat([8]); } // 0-9 + backspace for typing
    static get KEYBOARD_NAME_TYPING() { return Const.KEYBOARD_INT.concat(Const.KEYBOARD_ALPHA).concat(Const.KEYBOARD_SYMB).concat([8]); } // 0-9 + alpha + some symbol + backspace for typing
    static get KEYBOARD_PRICE_TYPING() { return Const.KEYBOARD_INT.concat([8,110]); }// 0-9 + backspace + dot key for typing

    static get KEYBOARD_RETURN() { return [13]; } // ENTER/RETURN ↩
    static get KEYBOARD_ONE() { return [97,49]; } // 1
    static get KEYBOARD_TWO() { return [98,50]; } // 2
    static get KEYBOARD_THREE() { return [99,51]; } // 3
    static get KEYBOARD_OY() { return [79,80]; } // o/y
    static get KEYBOARD_N() { return [78]; } // n
}
