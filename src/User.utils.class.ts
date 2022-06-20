import { Game } from "./Game.class";
import { User } from "./User.class";

export class UserUtils {


    /**
     * Return value representing the max amount of ost availablefor a player
     **/
    static getMaxOstPossible(user:User){
      return user.nobles * 20;
    }

    /**
     * Return value representing the name of a player depending of its country
     **/
    static getName(user:User, n = ""){
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
    static calculNewHarvest(user:User){
      let landAvailable = user.land - user.people - user.nobles * 2 - user.palais - user.marchands - user.ost * 2;
      if(user.supply * 3 < landAvailable){
        landAvailable = user.supply * 3;
      }
      if(user.people * 5 < landAvailable){
        landAvailable = user.people * 5;
      }
      //remove 1/3 stock to new plants
      user.supply += Math.floor(landAvailable / -3)

      let harvest = Math.floor(landAvailable * Game.getInstance().meteo * 0.72 + Game.getInstance().rollDiceInteger(1,500) - user.fonderies * 500);
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
    static calculNewSupply(user:User){
      return Math.floor(-1 * (user.supply * Game.getInstance().rats / 100)) + user.harvest;
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
    static calculDemography(user:User){
      let newBaby = Game.getInstance().intRnd(user.people / 9.5) + 1
      let people_died_of_malnutrition = 0
      let people_died_of_disease = Game.getInstance().intRnd(user.people / 22) + 1
      let people_immigrated = 0
      if(user.supplyPeople > user.needPeople * 1.5){
        let d = Math.sqrt(user.supplyPeople - user.needPeople) - Game.getInstance().intRnd(user.taxeA * 1.5) + 1
        if( d >= 0 ){
          people_immigrated = Game.getInstance().intRnd(2 * d)
        }
      }
      let soldiers_starved_to_death = 0
      if(user.needPeople > user.supplyPeople * 2 ){
        soldiers_starved_to_death = Game.getInstance().intRnd(user.people / 16 + 1) + 1 
        people_died_of_malnutrition = Game.getInstance().intRnd(user.people / 12 + 1) + 1 
      } else if(user.needPeople > user.supplyPeople) {
        people_died_of_malnutrition = Game.getInstance().intRnd(user.people / 15 + 1) + 1 
      }

      let noble_immigrated = 0
      let total_balance_people = newBaby - soldiers_starved_to_death - people_died_of_malnutrition - people_died_of_disease + people_immigrated
      let marchands_immigrated =  Game.getInstance().intRnd(people_immigrated / 5) + 1


      //TODO 
      user.immigratedPeople = people_immigrated
    }

    /**
     * Return value representing money gained for Foires
     * 
     * 96 TAXE_MARKET =(MARKET*((MARCHANDS_NOMBRE+INT(RND*35+1)+INT(RND*35+1))/(TX_TAXE_COMMERCE+1)*12+5))^.9:
     **/
    static calculGainsOfFoires(user:User){
      return Math.ceil(
        Math.pow(user.foires * ((user.marchands + Game.getInstance().rollDiceInteger(1,35) + Game.getInstance().rollDiceInteger(1,35))/(user.taxeB+1)*12+5), 0.9)
      );
    }

    /**
     * Return value representing money gained for Moulins
     * 
     * TAXE_MOULINS=(MOULINS*(5.8*(BUSHELS_HARVESTED+INT(RND*250+1))/(TX_TAXE_PEUPLE*20+TX_TAXE_COMMERCE*40+10)+150))^.9:
     **/
    static calculGainsOfMoulins(user:User){
      return Math.ceil(
        Math.pow(user.moulins * (5.8 * (user.harvest + Game.getInstance().rollDiceInteger(1,250)) / (user.taxeC * 20 + user.taxeB * 40 + 10) + 150), 0.9)
      );
    }

    /**
     * Return value representing money gained for Fonderies
     * 
     * TAXE_FONDERIE=(FONDERIE_NB+(SOLDIERS_NB+INT(RND*150+1)+400))^.9
     **/
    static calculGainsOfFonderies(user:User){
      return Math.ceil(
        Math.pow(user.fonderies + user.ost + Game.getInstance().rollDiceInteger(1,150) + 400, 0.9)
      );
    }

    /**
     * Return value representing money gained for Chantiers
     * 
     * 97 TAXE_CHANTIER_NAVAL=(CHANTIER_NAVAL*(MARCHANDS_NOMBRE*4+MARKET*9+FONDERIE_NB*15)*METEO)^.9:
     **/
    static calculGainsOfChantiers(user:User){
      return Math.ceil(
        Math.pow((user.fonderies * user.marchands * 4 + user.foires * 9 + user.fonderies * 15) * Game.getInstance().meteo, 0.9)
      );
    }

    /**
     * Return value representing money gained for Ost
     * 
     * COUT_SOLDIERS=SOLDIERS_NB*(-8):
     **/
    static calculGainsOfOst(user:User){
      return user.ost * -8;
    }

    /**
     * Return value representing money gained for taxeA
     * 
     * TAXE_DOUANE=PEOPLE_IMMIGRATED*(INT(RND*40+1)+INT(RND*40+1))/100*TX_TAXE_DOUANE:
     **/
    static calculGainsOfTaxesA(user:User){
      return Math.ceil(
        user.immigratedPeople * (Game.getInstance().rollDiceInteger(1,40) + Game.getInstance().rollDiceInteger(1,40)) / 100 * user.taxeA
      );
    }

    /**
     * Return value representing money gained for taxeB
     * 
     * TAXE_COMMERCE=TX_TAXE_COMMERCE/100*((MARCHANDS_NOMBRE*1.8+TAXE_MARKET*33+TAXE_MOULINS*17+TAXE_FONDERIE*50+TAXE_CHANTIER_NAVAL*70)^.85+NOBLE_NOMBRE*5+SERFS_NUMBER)
     **/
    static calculGainsOfTaxesB(user:User){
      return Math.ceil(
        user.taxeB / 100 * ( Math.pow(user.marchands * 1.8 + user.gainFoires * 33 + user.gainMoulins * 17
            + user.gainFonderies * 50 + user.gainChantiers * 70, 0.85) + user.nobles * 5 + user.people)
      );
    }

    /**
     * Return value representing money gained for taxeC
     * 
     * 98 TAXE_PEUPLE=(TX_TAXE_PEUPLE/100*(SERFS_NUMBER*1.3+NOBLE_NOMBRE*145+MARCHANDS_NOMBRE*39+MARKET*99+MOULINS*99+FONDERIE_NB*425+CHANTIER_NAVAL*965))^.97
     **/
    static calculGainsOfTaxesC(user:User){
      return Math.ceil(
        Math.pow(user.taxeC / 100 * user.people * 1.3 + user.nobles * 145 + user.marchands * 39 + user.foires * 99
              +user.moulins * 99 + user.fonderies * 425 + user.chantiers * 965, 0.97)
      );
    }


    /**
     * Return value representing count of attaks possible for a user
     **/
    static getNbAttacksMax(user:User){
      return user.nobles;
    }



}
