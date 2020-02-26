"use strict";


// Terres vassales, choix de l'adversaire
function step4(){
  //console.info("step4")
  KBlisten({
    step4choosingArmy : KEYBOARD_INT, // 0-9
    step5 : KEYBOARD_RETURN, //↩
  });

  refreshWithTemplates(["step4_base", "step4"]);
}

//Selection du nombre de soldat
function step4choosingArmy(opponent){
  //console.info("step4choosingArmy(" + opponent + ")");

  let opponents = game.getOpponentsAsArray();
  if(opponent < 1 || opponent > opponents.length){
    console.info("opposant pas dans la liste");
    return step4();
  }

  //opponent = myself
  if(game.getCurrentUser().getId() == opponents[opponent - 1].getId()){
    console.info("pas soi même");
    game.addError(Errors.fightMyself());
    return step4();
  }
  KBlisten({
    KBstartTyping : KEYBOARD_INT_TYPING, // 0-9 + backspace
    step4fight : KEYBOARD_RETURN, //↩
    "options" : {"typing":true, "templates":["step4_base", "step4_b"], "params":[opponents[opponent - 1].getId()]}
  });
  //else choose number of soldier
  refreshWithTemplates(["step4_base", "step4_b"]);
}


//Selection du nombre de soldat
function step4fight(key, defenderUserId){
  let ost = parseInt(KBreturn());
  if(ost === ""){
    return step4();
  }

  console.info("step4fight(" + ost + ", " + defenderUserId + ")");

  //Test if we have enought ost men
  if(game.getCurrentUser().getOst() < ost){
    game.addError(Errors.notEnoughtOst());
    return step4();
  }

  let remains = 0;

  //Barbarians
  if(defenderUserId == 0){
    remains = Combat.execute(game.getBarbares(), game.getCurrentUser(), ost);
    game.getBarbares().setOst(remains[0]);
  } else {
    remains = Combat.execute(game.getUserById(defenderUserId), game.getCurrentUser(), ost);
    game.getUserById(defenderUserId).setOst(remains[0]);
  }
  game.getCurrentUser().setOst(remains[1]);

  return step4();
}
