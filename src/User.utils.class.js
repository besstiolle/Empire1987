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
     * LA=A(CUR_PLAY,1)-A(CUR_PLAY,3)-A(CUR_PLAY,18)*2-A(CUR_PLAY,16)-A(CUR_PLAY,7)-A(CUR_PLAY,15)*2
     * IF A(CUR_PLAY,2)*3<LA THEN LA=A(CUR_PLAY,2)*3
     * IF A(CUR_PLAY,3)*5<LA THEN LA=A(CUR_PLAY,3)*5
     * A(CUR_PLAY,2)=A(CUR_PLAY,2)-LA/3
     * HARVEST=LA*METEO*.72+INT(RND*500)+1-A(CUR_PLAY,13)*500
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

      return Math.floor(landAvailable * game.getMeteo() * 0.72 + game.rollDiceInteger(1,500) - user.getFonderies() * 500);
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
     * F1=(A(CUR_PLAY,11)*((A(CUR_PLAY,7)+INT(RND*35+1)+INT(RND*35+1))/(A(CUR_PLAY,9)+1)*12+5))^.9
     **/
    static calculGainsOfFoires(user){
      return Math.ceil(
        Math.pow(user.getFoires() * ((user.getMarchands() + game.rollDiceInteger(1,35) + game.rollDiceInteger(1,35))/(user.getTaxeB()+1)*12+5), 0.9)
      );
    }

    /**
     * Return value representing money gained for Moulins
     * F2=(A(CUR_PLAY,12)*(5.8*(HARVEST+INT(RND*250+1))/(A(CUR_PLAY,10)*20+A(CUR_PLAY,9)*40+10)+150))^.9
     **/
    static calculGainsOfMoulins(user){
      return Math.ceil(
        Math.pow(user.getMoulins() * (5.8 * (user.getHarvest() + game.rollDiceInteger(1,250)) / (user.getTaxeC() * 20 + user.getTaxeB() * 40 + 10) + 150), 0.9)
      );
    }

    /**
     * Return value representing money gained for Fonderies
     * F3=(A(CUR_PLAY,13)+(A(CUR_PLAY,15)+INT(RND*150+1)+400))^.9
     **/
    static calculGainsOfFonderies(user){
      return Math.ceil(
        Math.pow(user.getFonderies() + user.getOst() + game.rollDiceInteger(1,150) + 400, 0.9)
      );
    }

    /**
     * Return value representing money gained for Chantiers
     * F4=(A(CUR_PLAY,14)*(A(CUR_PLAY,7)*4+A(CUR_PLAY,11)*9+A(CUR_PLAY,13)*15)*METEO)^.9
     **/
    static calculGainsOfChantiers(user){
      return Math.ceil(
        Math.pow((user.getFonderies() * user.getMarchands() * 4 + user.getFoires() * 9 + user.getFonderies() * 15) * game.getMeteo(), 0.9)
      );
    }

    /**
     * Return value representing money gained for Ost
     * F5=A(CUR_PLAY,15)*(-8)
     **/
    static calculGainsOfOst(user){
      return user.getOst() * -8;
    }

    /**
     * Return value representing money gained for taxeA
     * FC=PPL_MIGR*(INT(RND*40+1)+INT(RND*40+1))/100*A(CUR_PLAY,8)
     **/
    static calculGainsOfTaxesA(user){
      return Math.ceil(
        user.getMigrants() * (game.rollDiceInteger(1,40) + game.rollDiceInteger(1,40)) / 100 * user.getTaxeA()
      );
    }

    /**
     * Return value representing money gained for taxeB
     * FS=A(CUR_PLAY,9)/100*((A(CUR_PLAY,7)*1.8+F1*33+F2*17+F3*50+F4*70)^.85+A(CUR_PLAY,18)*5+A(CUR_PLAY,3))
     **/
    static calculGainsOfTaxesB(user){
      return Math.ceil(
        user.getTaxeB() / 100 * ( Math.pow(user.getMarchands() * 1.8 + user.getGains().gainFoires * 33 + user.getGains().gainMoulins * 17
            + user.getGains().gainFondries * 50 + user.getGains().gainChantiers * 70, 0.85) + user.getNobles() * 5 + user.getPeople())
      );
    }

    /**
     * Return value representing money gained for taxeC
     * FI=(A(CUR_PLAY,10)/100*(A(CUR_PLAY,3)*1.3+A(CUR_PLAY,18)*145+A(CUR_PLAY,7)*39+A(CUR_PLAY,11)*99+A(CUR_PLAY,12)*99+A(CUR_PLAY,13)*425+A(CUR_PLAY,14)*965))^.97
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
