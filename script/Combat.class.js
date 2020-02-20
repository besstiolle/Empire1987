"use strict";

class Combat {
  constructor(){
    this.attacker = null;
    this.defender = null;
  }

  initiateNewCombat(attackerO, defenderO){
    //console.info("initiateNewCombat(" + attackerO + "," + defenderO + ")");
    this.attacker = game.getUsers().get(attackerO);
    this.defender = game.getUsers().get(defenderO);
  }

  execute(ost){
    console.info("execute(" + ost + ")");
    let defenderOst= this.defender.getOst();
    let attackerOst = this.attacker.getOst() - ost;

    if(defenderOst == ost) {
      defenderOst = 0;
      ost = 0;
    } else if(defenderOst > ost) {
      defenderOst = defenderOst - ost;
      ost = 0;
    } else {
      defenderOst = 0;
    }
    game.getUsers().get(this.defender.getId()).setOst(defenderOst);
    game.getUsers().get(this.attacker.getId()).setOst(attackerOst + ost);
  }
}
