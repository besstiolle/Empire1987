"use strict";

class User {
  constructor(id, name){
    this.id = id;
    this.name = name;
    this.reset();
  }

  reset(){
    this.taxeA = 20;
    this.taxeB = 5;
    this.taxeC = 35;
    this.isDead = false;
    this.rank = "Baron";
    this.country = "France";
    this.harvest = 17524;
    this.supply = 12842;
    this.people = 2026;
    this.needPeople = 10140;
    this.supplyPeople = 0;
    this.ost=20;
    this.needOst = 160;
    this.supplyOst = 0;
    this.money = 1000;
    this.land = 5000;

    this.foires = 0;
    this.moulins = 0;
    this.fonderies = 0;
    this.chantiers = 0;
    this.palais = 0;
  }

  /**
   * Return the value of satisfaction 0 -> 200%
   */
  getSatisfactionPeople(){
    if(this.needPeople == 0){
      return 0;
    }
    let satisfaction = 100 * this.supplyPeople / this.needPeople;
    if(satisfaction > 200){
      satisfaction = 200;
    }
    return Math.floor(satisfaction);
  }

  /**
   * Return the value of satisfaction 0 -> 200%
   */
  getSatisfactionOst(){
    if(this.needOst == 0){
      return 0;
    }
    let satisfaction = 100 * this.supplyOst / this.needOst;
    if(satisfaction > 200){
      satisfaction = 200;
    }
    return Math.floor(satisfaction);
  }

   /*************************/
  getId(){return this.id;}
  getLand(){return this.land;}
  getMoney(){return this.money;}
  getTaxeA(){return this.taxeA;}
  getTaxeB(){return this.taxeB;}
  getTaxeC(){return this.taxeC;}
  getSupply(){return this.supply;}
  getOst(){return this.ost;}
  getCountry(){return this.country;}
  getPeople(){return this.people;}
  getNeedPeople(){return this.needPeople;}
  getHarvest(){return this.harvest;}

  setTaxeA(taxeA){this.taxeA = taxeA;}
  setTaxeB(taxeB){this.taxeB = taxeB;}
  setTaxeC(taxeC){this.taxeC = taxeC;}
  setOst(ost){this.ost = ost;}
  setSupplyPeople(supplyPeople){this.supplyPeople = supplyPeople;}
  setSupplyOst(supplyOst){this.supplyOst = supplyOst;}
  setHarvest(harvest){this.harvest = harvest;}

  addMoney(money){this.money += money;}
  addSupply(supply){this.supply += supply;}
  addOst(ost){this.ost += ost;}
  addPeople(people){this.people += people;}
  addLand(land){this.land += land;}

}
