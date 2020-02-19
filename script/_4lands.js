"use strict";


// Terres vassales, choix de l'adversaire
function step4(){
  //console.info("step4")
  document.removeEventListener('keydown',KEY_BINDER);
  refreshWithTemplate(tpl_step4);
  KEY_BINDER = keyboardBinder.bind(null, {
    step4choosingArmy : KEYBOARD_INT, // o y
    step5 : [13], //↩
    "default" : "return"
  });
  document.addEventListener('keydown', KEY_BINDER, false);
}

//Selection du nombre de soldat
function step4choosingArmy(keyCode){
  //console.info("step4choosingArmy(" + keyCode + ")");
  document.removeEventListener('keydown',KEY_BINDER);
  game.purgeErrors();

  //Test if opponent is available
  let opponents = {"97":1,"49":1,"98":2,"50":2,"99":3,"51":3,"100":4,"52":4,"101":5,"53":5,"102":6,"54":6,"103":7,"55":7}
  let opponent;
  if(!(keyCode in opponents)){
    //console.info("opposant pas entre 1 & 7");
    return step4();
  } else {
    //TODO create context of fight
    opponent = opponents[keyCode];
    //console.info("test on opposant #" + opponent);
    // opponent dead
    if(game.getUsers.length >= opponent){
      //console.info("opposant pas dans la liste");
      return step4();
    }

    //opponent = myself
    if(game.getCurrentUser().getPosition() == opponent){
      game.addError(Errors.fightMyself());
      //console.info("pas soi même");
      return step4();
    }
  }
  //console.info("fight opposant #" + opponent);
  //else choose number of soldier
  refreshWithTemplate(tpl_step4_b);
  KEY_BINDER = keyboardBinder.bind(null, {
    startTyping : KEYBOARD_INT_TYPING, // 0-9 + backspace
    step4fight : [13], //↩
    "default" : "return",
    "options" : {"typing":true, "template":tpl_step4_b}
  });
  document.addEventListener('keydown', KEY_BINDER, false);
}


//Selection du nombre de soldat
function step4fight(){
  //console.info("step4fight()");
  document.removeEventListener('keydown',KEY_BINDER);
  game.purgeErrors();
  //Test if no input
  if(game.keyboardInput === ""){
    //console.info("aucune entrée");
    return step4();
  }
  //Test if we have enought ost men
  if(game.getCurrentUser().getOst() < game.keyboardInput){
    //console.info("pas assez d'ost");
    game.addError(Errors.notEnoughtOst());
    game.resetTyping();
    return step4();
  }
  //else fight
  //console.info("fight !")
  //TODO
  return step4();
}
