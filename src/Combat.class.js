import { Party } from './Part_Abstract.class'


import tpl_5_combat_show from './templates/5_combat_show.tpl'

export class Combat extends Party {

  static execute(userDefender, userAttaker, ostAttaker, start = true){
    return new Promise((resolve)=>{
      //console.info("execute(" + userDefender + ", " + userAttaker + ", " + ostAttaker + ")");
      //console.info(userDefender);
      //console.info(userAttaker);
      //console.info("execute(" + userDefender.getName() + ", " + userAttaker.getName() + ", " + ostAttaker + ")");
      let ostDefender = userDefender.getOst();
      let ostEfficiencyDefender = userDefender.getSatisfactionOst() / 100;
      let ostAttakerRemaining = userAttaker.getOst() - ostAttaker;
      let ostEfficiencyAttaker = userAttaker.getSatisfactionOst() / 100;
      let land = 0;
      if(start){
        land = (game.rollDiceFloat(0,10) * ostAttaker *  ostEfficiencyAttaker / 10) + (game.rollDiceFloat(0,10) * ((ostAttaker * ostEfficiencyAttaker) - ostDefender));
        land = Math.floor(land);
        if(land < 0){
          land = game.rollDiceInteger(0,10)
        }
        //console.info("potential land : " + land)
      }

      let balance = ostAttaker * ostEfficiencyAttaker * 100 / (ostAttaker * ostEfficiencyAttaker  + ostDefender * ostEfficiencyDefender);
      if(balance < 20){
        balance = 20;
      }
      if(balance > 80){
        balance = 80;
      }

      let dice = game.rollDiceInteger();
      //console.info("avantage attacker vs defender = " + balance + "% , dice = " + dice)

      if(ostAttaker <= 0 || ostDefender <= 0){
        if(start){
          return resolve(Combat.getResults(userDefender.getOst() == 0, land, userDefender, userAttaker));
        } else {
          return resolve();
        }
      }

      if(dice < balance){
        //Defender -1
        //console.info("ostDefender -- : " + ostDefender);
        ostDefender--;
        userDefender.addOst(-1);
      } else {
        //Attacker -1
        //console.info("ostAttaker -- : " + ostAttaker);
        ostAttaker--;
        userAttaker.addOst(-1);
      }
      //console.info("remaining force attaker : " + (ostAttakerRemaining + ostAttaker) + " vs " + ostDefender);


      Party.refreshWithTemplate(tpl_5_combat_show, {"ostAttaker": ostAttaker, "ostDefender": ostDefender});

      Combat.sleep(200).then(() => {
        Combat.execute(userDefender, userAttaker, ostAttaker, false).then(() => {
            if(start){
              return resolve(Combat.getResults(userDefender.getOst() == 0, land, userDefender, userAttaker));
            } else {
              return resolve();
            }
        })
      })
    })
  }

  static getResults(win, land, userDefender, userAttaker){
    if(win){
      land = land * 3;
    }

    if(land > userDefender.getLand()){
      //console.info("rectif land to " + userDefender.getLand())
      land = userDefender.getLand();
    }

    //console.info("captured land : " + land);
    userAttaker.addLand(land);

    //If death of defender
    // 1 chance on 2 if attaker took +25% of land
    // or if there is no more land
    let death = false;
    if((userDefender.getLand() / 4 < land && game.rollDiceInteger(0,1)) || userDefender.getLand() <= land){
      death = true;
      game.kill(userDefender);
    } else {
      userDefender.addLand(-1 * land);
    }


    return {"win" : win, "land" : land, "userAttaker": userAttaker, "death" : death};
  }

  static sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
