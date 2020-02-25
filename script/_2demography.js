"use strict";

//Démographie
function step2(){
  //console.info("step2")

  let satisfactionPeople = game.getCurrentUser().getSatisfactionPeople();
  let satisfactionOst = game.getCurrentUser().getSatisfactionOst();

  let randomDeath = Math.floor(game.rollDiceFloat(0, 2.5 * 100 / satisfactionPeople) * game.getCurrentUser().getPeople() / 100);
  let randomBirth = Math.floor(game.rollDiceFloat(0, 5 * satisfactionPeople / 100) * game.getCurrentUser().getPeople() / 100);
  let randomMigrant = 0;
  if(satisfactionPeople > 175){
    randomMigrant = Math.floor(game.rollDiceFloat(0, 2.5 * satisfactionPeople / 100) * game.getCurrentUser().getPeople() / 100);
  }
  let randomStarvingPeople = 0;
  if(satisfactionPeople < 90){
    randomStarvingPeople = Math.floor(game.rollDiceFloat(0, 5 * 100 / Math.max(satisfactionPeople,10)) * game.getCurrentUser().getPeople() / 100);
  }
  let randomStarvingOst = 0;
  if(satisfactionOst < 85){
    randomStarvingOst = Math.floor(game.rollDiceFloat(0, 5 * 100 / Math.max(satisfactionOst,10)) * game.getCurrentUser().getOst() / 100);
  }

  let randomPeople = randomBirth - randomDeath + randomMigrant - randomStarvingPeople;

  game.getCurrentUser().addPeople(randomPeople);
  game.getCurrentUser().addOst(-1 * randomStarvingOst);

  let templateVars = {"randomDeath" : randomDeath, "randomBirth" : randomBirth,
                    "randomMigrant" : randomMigrant, "randomStarvingPeople" : randomStarvingPeople,
                    "randomStarvingOst" : randomStarvingOst, "randomPeople" : randomPeople };

  KBlisten({
    step3 : KEYBOARD_RETURN, //↩
  });

  refreshWithTemplates([tpl_step2], templateVars);
}
