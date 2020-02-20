"use strict";


// Terres vassales, choix de l'adversaire
function step4(){
  //console.info("step4")
  KBlisten({
    step4choosingArmy : KEYBOARD_INT, // o y
    step5 : KEYBOARD_RETURN, //↩
  });

  refreshWithTemplates([tpl_step4_base, tpl_step4]);
}

//Selection du nombre de soldat
function step4choosingArmy(keyCode){
  //console.info("step4choosingArmy(" + keyCode + ")");

  //Test if opponent is available
  let opponents = {"97":1,"49":1,"98":2,"50":2,"99":3,"51":3,"100":4,"52":4,"101":5,"53":5,"102":6,"54":6,"103":7,"55":7}
  let opponent;
  if(!(keyCode in opponents)){
    //console.info("opposant pas entre 1 & 7");
    return step4();
  } else {
    opponent = opponents[keyCode] -1; // minus 1 because Barbares are not real users
    //console.info("test on opposant #" + opponent);
    // opponent dead
    if(game.getUsers.length >= opponent){
      //console.info("opposant pas dans la liste");
      return step4();
    }

    //opponent = myself
    if(game.getCurrentUser().getId() == opponent){
      game.addError(Errors.fightMyself());
      //console.info("pas soi même");
      return step4();
    }
  }
  //console.info("fight opposant #" + opponent);
  combat.initiateNewCombat(game.getCurrentUser().getId(), opponent);

  KBlisten({
    KBstartTyping : KEYBOARD_INT_TYPING, // 0-9 + backspace
    step4fight : KEYBOARD_RETURN, //↩
    "options" : {"typing":true, "templates":[tpl_step4_base, tpl_step4_b]}
  });
  //else choose number of soldier
  refreshWithTemplates([tpl_step4_base, tpl_step4_b]);
}


//Selection du nombre de soldat
function step4fight(){
  //console.info("step4fight()");
  let keyboard = KBreturn();
  //Test if no input
  if(keyboard !== ""){
    let ost = parseInt(keyboard);
    //Test if we have enought ost men
    if(game.getCurrentUser().getOst() < ost){
      //console.info("pas assez d'ost");
      game.addError(Errors.notEnoughtOst());
    } else {
      //console.info("fight !")
      combat.execute(ost);
    }
  }
  return step4();
}
