"use strict";

export class Combat {

  static execute(userDefender, userAttaker, ostAttaker){
    //console.info("execute(" + userDefender + ", " + userAttaker + ", " + ostAttaker + ")");
    //console.info(userDefender);
    //console.info(userAttaker);
    //console.info("execute(" + userDefender.getName() + ", " + userAttaker.getName() + ", " + ostAttaker + ")");
    let ostDefender = userDefender.getOst();
    let ostAttakerRemaining = userAttaker.getOst() - ostAttaker;

    if(ostDefender == ostAttaker) {
      ostDefender = 0;
      ostAttaker = 0;
    } else if(ostDefender > ostAttaker) {
      ostDefender = ostDefender - ostAttaker;
      ostAttaker = 0;
    } else {
      ostDefender = 0;
    }

    console.info("remaining force : " + ostDefender + " vs " + (ostAttakerRemaining + ostAttaker));

    return [ostDefender, (ostAttakerRemaining + ostAttaker)];
  }
}
