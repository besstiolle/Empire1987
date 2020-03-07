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
     **/
    static calculNewHarvest(user){
      return Math.floor(user.getSupply() * 1.2 * game.getMeteoPercent());
    }

    /**
     * Return value representing new new amount of boisseaux in stock
     **/
    static calculNewSupply(user){
      return Math.floor(-1 * (user.getSupply() * game.getRats() / 100)) + user.getHarvest();
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
     **/
    static calculGainsOfFoires(user){
      return Math.floor((user.getFoires() * 1500) * game.getMeteoPercent());
    }

    /**
     * Return value representing money gained for Moulins
     **/
    static calculGainsOfMoulins(user){
      return Math.floor((user.getMoulins() * 2500) * game.getMeteoPercent());
    }

    /**
     * Return value representing money gained for Fonderies
     **/
    static calculGainsOfFonderies(user){
      return Math.floor(((user.getFonderies() * 500) + 300) * game.getMeteoPercent());
    }

    /**
     * Return value representing money gained for Chantiers
     **/
    static calculGainsOfChantiers(user){
      return Math.floor((user.getChantiers() * 3500) * game.getMeteoPercent());
    }

    /**
     * Return value representing money gained for Ost
     **/
    static calculGainsOfOst(user){
      return user.getOst() * -1 * 8;
    }

    /**
     * Return value representing money gained for taxeA
     **/
    static calculGainsOfTaxesA(user){
      return Math.floor(user.getTaxeA() / 100 * user.getMigrants());
    }

    /**
     * Return value representing money gained for taxeB
     **/
    static calculGainsOfTaxesB(user){
      return Math.floor((user.getTaxeB() / 100 * user.getMarchands() * 300 + user.getTaxeB() / 100 * user.getFoires() * 75) * game.getMeteoPercent());
    }

    /**
     * Return value representing money gained for taxeC
     **/
    static calculGainsOfTaxesC(user){
      return Math.floor((user.getTaxeC() / 100 * user.getPeople() * 2) * game.getMeteoPercent());
    }


    /**
     * Return value representing count of attaks possible for a user
     **/
    static getNbAttacksMax(user){
      return user.getNobles();
    }



}
