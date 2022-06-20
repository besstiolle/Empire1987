export class UserUtils {


    /**
     * Return value representing the max amount of ost availablefor a player
     **/
    static getMaxOstPossible(user){
      return user.getNobles() * 20;
    }

    /**
     * Return value representing the name of a player depending of its country
     **/
    static getName(user, n = ""){
      let name = ""
      if( n !== ""){
        if(n === "J") {
          name = "Jeanne d'Arc"
        }
      } else {
        name = "Hugues";
      }
      return name;
    }

    /**
     * Return value representing the new harvest
     *    SURFACE_TO_BE_PLANTED=SURFACE_TERRAIN-SERFS_NUMBER-NOBLE_NOMBRE*2-PALAIS_POURCENT-MARCHANDS_NOMBRE-SOLDIERS_NB*2:
     * 37 IF BUSHELS_IN_STOCKS*3<SURFACE_TO_BE_PLANTED THEN SURFACE_TO_BE_PLANTED=BUSHELS_IN_STOCKS*3
     * 38 IF SERFS_NUMBER*5<SURFACE_TO_BE_PLANTED THEN SURFACE_TO_BE_PLANTED=SERFS_NUMBER*5
     * 39 BUSHELS_IN_STOCKS=BUSHELS_IN_STOCKS-SURFACE_TO_BE_PLANTED/3:
	   *    BUSHELS_HARVESTED=SURFACE_TO_BE_PLANTED*METEO*.72+INT(RND*500)+1-FONDERIE_NB*500:
     *    IF BUSHELS_HARVESTED<0 THEN BUSHELS_HARVESTED=0
     **/
    static calculNewHarvest(user){
      let landAvailable = user.getLand() - user.getPeople() - user.getNobles() * 2 - user.getPalais() - user.getMarchands() - user.getOst() * 2;
      if(user.getSupply() * 3 < landAvailable){
        landAvailable = user.getSupply() * 3;
      }
      if(user.getPeople() * 5 < landAvailable){
        landAvailable = user.getPeople() * 5;
      }
      //remove 1/3 stock to new plants
      user.addSupply(Math.floor(landAvailable / -3))

      let harvest = Math.floor(landAvailable * game.getMeteo() * 0.72 + game.rollDiceInteger(1,500) - user.getFonderies() * 500);
      if(harvest < 0){
        harvest = 0
      }
      return harvest
    }

    /**
     * Return value representing new new amount of boisseaux in stock
     * 
     *    BUSHELS_IN_STOCKS=BUSHELS_IN_STOCKS-BUSHELS_IN_STOCKS*BUSHELS_EATEN_BY_RATS/100:
     * 40 BUSHELS_IN_STOCKS=BUSHELS_IN_STOCKS+BUSHELS_HARVESTED
     **/
    static calculNewSupply(user){
      return Math.floor(-1 * (user.getSupply() * game.getRats() / 100)) + user.getHarvest();
    }

    /**
     * 
     * 80 BABY_BORN=INT(RND*PEOPLE_NB/9.5+1):
     * 	PEOPLE_DIED_OF_MALNUTRITION=0:
     * 	PEOPLE_DIED_OF_DISEASE=INT(RND*PEOPLE_NB/22+1):
     * 	PEOPLE_IMMIGRATED=0:
     * 	IF BUSHELS_FOR_PEOPLE>PEOPLE_REQUIREMENT_FOOD*1.5 THEN D=SQR(BUSHELS_FOR_PEOPLE-PEOPLE_REQUIREMENT_FOOD)-INT(RND*TX_TAXE_DOUANE*1.5+1):
     * 	IF D<0 THEN 81 ELSE PEOPLE_IMMIGRATED=INT(RND*(2*D+1))
     * 81 SOLDIERS_STARVED_TO_DEATH=0:
     * 	IF PEOPLE_REQUIREMENT_FOOD>BUSHELS_FOR_PEOPLE*2 THEN SOLDIERS_STARVED_TO_DEATH=INT(RND*PEOPLE_NB/16+1)+1:
     * 	PEOPLE_DIED_OF_MALNUTRITION=INT(RND*(PEOPLE_NB/12+1)+1):
     * 	GOTO 83
     * 82 IF PEOPLE_REQUIREMENT_FOOD>BUSHELS_FOR_PEOPLE THEN PEOPLE_DIED_OF_MALNUTRITION=INT(RND*(PEOPLE_NB/15+1)+1)
     * 83 NOBLE_IMMIGRATED=0:
     * 	TOTAL_BALANCE_PEOPLE=BABY_BORN-SOLDIERS_STARVED_TO_DEATH-PEOPLE_DIED_OF_MALNUTRITION-PEOPLE_DIED_OF_DISEASE+PEOPLE_IMMIGRATED:
     * 	SOLDIERS_SENDED=INT(RND*PEOPLE_IMMIGRATED/5+1):
     * 	MARCHANDS_NOMBRE=MARCHANDS_NOMBRE+SOLDIERS_SENDED:
     * 	SERFS_NUMBER=SERFS_NUMBER+TOTAL_BALANCE_PEOPLE-SOLDIERS_SENDED:
     * 	IF PEOPLE_IMMIGRATED/25>.999 THEN NOBLE_IMMIGRATED=INT(RND*PEOPLE_IMMIGRATED/25)+1:
     * 	NOBLE_NOMBRE=NOBLE_NOMBRE+NOBLE_IMMIGRATED:
     * 	SERFS_NUMBER=SERFS_NUMBER-NOBLE_IMMIGRATED
     * 84 SOLDIERS_STARVED_TO_DEATH=0:
     * 	IF ARMY_REQUIREMENT_FOOD>BUSHELS_FOR_SOLDIERS*2 THEN SOLDIERS_STARVED_TO_DEATH=INT(RND*(SOLDIERS_NB/2+1)+1):
     * 	SOLDIERS_NB=SOLDIERS_NB-SOLDIERS_STARVED_TO_DEATH
     * 85 PA=0:
     * 	IF BUSHELS_FOR_SOLDIERS*2<ARMY_REQUIREMENT_FOOD THEN PA=INT(RND*SOLDIERS_NB/5+1):
     * 	SOLDIERS_NB=SOLDIERS_NB-PA
     */
    static calculDemography(user){
      let newBaby = game.intRnd(user.getPeople() / 9.5) + 1
      let people_died_of_malnutrition = 0
      let people_died_of_disease = game.intRnd(user.getPeople() / 22) + 1
      let people_immigrated = 0
      if(user.getSupplyPeople() > user.getNeedPeople() * 1.5){
        let d = Math.sqrt(user.getSupplyPeople() - user.getNeedPeople()) - game.intRnd(user.getTaxeA() * 1.5) + 1
        if( d >= 0 ){
          people_immigrated = game.intRnd(2 * d)
        }
      }
      let soldiers_starved_to_death = 0
      if(user.getNeedPeople() > user.getSupplyPeople() * 2 ){
        soldiers_starved_to_death = game.intRnd(user.getPeople() / 16 + 1) + 1 
        people_died_of_malnutrition = game.intRnd(user.getPeople() / 12 + 1) + 1 
      } else if(user.getNeedPeople() > user.getSupplyPeople()) {
        people_died_of_malnutrition = game.intRnd(user.getPeople() / 15 + 1) + 1 
      }

      let noble_immigrated = 0
      let total_balance_people = newBaby - soldiers_starved_to_death - people_died_of_malnutrition - people_died_of_disease + people_immigrated
      let marchands_immigrated =  game.intRnd(people_immigrated / 5) + 1


      user.setImmigratedPeople(people_immigrated)
    }

    /**
     * Return the value of satisfaction 0% -> 200%
     */
    static calculSatisfaction(need, supply){
      if(need == 0){
        return 0;
      }
      let satisfaction = 100 * supply / need;
      if(satisfaction > 200){
        satisfaction = 200;
      }
      return Math.floor(satisfaction);
    }

    /**
     * Return value representing nomber of Death per year
     **/
    static calculDeaths(user){
      return Math.floor(game.rollDiceFloat(0, 2.5 * 100 / user.getSatisfactionPeople()) * user.getPeople() / 100); //TODO apply taxeC effect
    }


    /**
     * Return value representing nomber of Birth per year
     **/
    static calculBirths(user){
      return Math.floor(game.rollDiceFloat(0, 5 * user.getSatisfactionPeople() / 100) * user.getPeople() / 100); //TODO apply taxeC effect
    }


    /**
     * Return value representing nomber of Migrants per year
     **/
    static calculMigrants(user){
      if(user.getSatisfactionPeople() > 175){
        return Math.floor(game.rollDiceFloat(0, 2.5 * user.getSatisfactionPeople() / 100) * user.getPeople() / 100); //TODO apply taxeA effect
      }
      return 0;
    }


    /**
     * Return value representing nomber of starving people per year
     **/
    static calculStarvingPeople(user){
      if(user.getSatisfactionPeople() < 90){
        return Math.floor(game.rollDiceFloat(0, 5 * 100 / Math.max(user.getSatisfactionPeople(),10)) * user.getPeople() / 100); //TODO apply taxeC effect
      }
      return 0;
    }

    /**
     * Return value representing nomber of starving ost per year
     **/
    static calculStarvingOst(user){
      if(user.getSatisfactionOst() < 85){
        return Math.floor(game.rollDiceFloat(0, 5 * 100 / Math.max(user.getSatisfactionOst(),10)) * user.getOst() / 100);
      }
      return 0;
    }

    /**
     * Return value representing money gained for Foires
     * 
     * 96 TAXE_MARKET =(MARKET*((MARCHANDS_NOMBRE+INT(RND*35+1)+INT(RND*35+1))/(TX_TAXE_COMMERCE+1)*12+5))^.9:
     **/
    static calculGainsOfFoires(user){
      return Math.ceil(
        Math.pow(user.getFoires() * ((user.getMarchands() + game.rollDiceInteger(1,35) + game.rollDiceInteger(1,35))/(user.getTaxeB()+1)*12+5), 0.9)
      );
    }

    /**
     * Return value representing money gained for Moulins
     * 
     * TAXE_MOULINS=(MOULINS*(5.8*(BUSHELS_HARVESTED+INT(RND*250+1))/(TX_TAXE_PEUPLE*20+TX_TAXE_COMMERCE*40+10)+150))^.9:
     **/
    static calculGainsOfMoulins(user){
      return Math.ceil(
        Math.pow(user.getMoulins() * (5.8 * (user.getHarvest() + game.rollDiceInteger(1,250)) / (user.getTaxeC() * 20 + user.getTaxeB() * 40 + 10) + 150), 0.9)
      );
    }

    /**
     * Return value representing money gained for Fonderies
     * 
     * TAXE_FONDERIE=(FONDERIE_NB+(SOLDIERS_NB+INT(RND*150+1)+400))^.9
     **/
    static calculGainsOfFonderies(user){
      return Math.ceil(
        Math.pow(user.getFonderies() + user.getOst() + game.rollDiceInteger(1,150) + 400, 0.9)
      );
    }

    /**
     * Return value representing money gained for Chantiers
     * 
     * 97 TAXE_CHANTIER_NAVAL=(CHANTIER_NAVAL*(MARCHANDS_NOMBRE*4+MARKET*9+FONDERIE_NB*15)*METEO)^.9:
     **/
    static calculGainsOfChantiers(user){
      return Math.ceil(
        Math.pow((user.getFonderies() * user.getMarchands() * 4 + user.getFoires() * 9 + user.getFonderies() * 15) * game.getMeteo(), 0.9)
      );
    }

    /**
     * Return value representing money gained for Ost
     * 
     * COUT_SOLDIERS=SOLDIERS_NB*(-8):
     **/
    static calculGainsOfOst(user){
      return user.getOst() * -8;
    }

    /**
     * Return value representing money gained for taxeA
     * 
     * TAXE_DOUANE=PEOPLE_IMMIGRATED*(INT(RND*40+1)+INT(RND*40+1))/100*TX_TAXE_DOUANE:
     **/
    static calculGainsOfTaxesA(user){
      return Math.ceil(
        user.getMigrants() * (game.rollDiceInteger(1,40) + game.rollDiceInteger(1,40)) / 100 * user.getTaxeA()
      );
    }

    /**
     * Return value representing money gained for taxeB
     * 
     * TAXE_COMMERCE=TX_TAXE_COMMERCE/100*((MARCHANDS_NOMBRE*1.8+TAXE_MARKET*33+TAXE_MOULINS*17+TAXE_FONDERIE*50+TAXE_CHANTIER_NAVAL*70)^.85+NOBLE_NOMBRE*5+SERFS_NUMBER)
     **/
    static calculGainsOfTaxesB(user){
      return Math.ceil(
        user.getTaxeB() / 100 * ( Math.pow(user.getMarchands() * 1.8 + user.getGains().gainFoires * 33 + user.getGains().gainMoulins * 17
            + user.getGains().gainFondries * 50 + user.getGains().gainChantiers * 70, 0.85) + user.getNobles() * 5 + user.getPeople())
      );
    }

    /**
     * Return value representing money gained for taxeC
     * 
     * 98 TAXE_PEUPLE=(TX_TAXE_PEUPLE/100*(SERFS_NUMBER*1.3+NOBLE_NOMBRE*145+MARCHANDS_NOMBRE*39+MARKET*99+MOULINS*99+FONDERIE_NB*425+CHANTIER_NAVAL*965))^.97
     **/
    static calculGainsOfTaxesC(user){
      return Math.ceil(
        Math.pow(user.getTaxeC() / 100 * user.getPeople() * 1.3 + user.getNobles() * 145 + user.getMarchands() * 39 + user.getFoires() * 99
              +user.getMoulins() * 99 + user.getFonderies() * 425 + user.getChantiers() * 965, 0.97)
      );
    }


    /**
     * Return value representing count of attaks possible for a user
     **/
    static getNbAttacksMax(user){
      return user.getNobles();
    }



}
