export class User {

  constructor(id, name, country, land = 10000){
    this.id = id;
    this.name = name;
    this.country = country;
    this.land = land;
    this.reset();
  }

  reset(){
    this.sexe = 0; // 0=male 1=female
    this.taxeA = 20;
    this.taxeB = 5;
    this.taxeC = 35;
    this.rank = "Baron";
    this.harvest = 17524;
    this.supply = 12842;
    this.people = 2026;
    this.ost=20;
    this.money = 1000;

    this.foires = 0;
    this.moulins = 0;
    this.fonderies = 0;
    this.chantiers = 0;
    this.palais = 0;

    this.nobles = 1;
    this.marchands = 1;

    this.satisfactionPeople = 100;
    this.satisfactionOst = 100;

  //  this.alive = true;

    this.resetNewYear();
  }

  resetNewYear(){
    this.needPeople = 5 * this.people;
    this.supplyPeople = 0;
    this.needOst = 8 * this.ost;
    this.supplyOst = 0;
    this.migrants = 0;
    this.gains = null;
  }

  /**
   * Return the value of satisfaction 0 -> 200%
   */

   /*************************/
  getId(){return this.id;}
  getName(){return this.name;}
  getSexe(){return this.sexe;}
  getRank(){return this.rank;}
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
  getSupplyPeople(){return this.supplyPeople;}
  getSupplyOst(){return this.supplyOst;}
  getSatisfactionPeople(){ return this.satisfactionPeople; }
  getSatisfactionOst(){ return this.satisfactionOst; }
  getNeedOst(){ return this.needOst; }
  getHarvest(){return this.harvest;}
  getFoires(){return this.foires;}
  getMoulins(){return this.moulins;}
  getFonderies(){return this.fonderies;}
  getChantiers(){return this.chantiers;}
  getPalais(){return this.palais;}
  getMigrants(){return this.migrants;}
  getNobles(){return this.nobles;}
  getMarchands(){return this.marchands;}
  getGains(){return this.gains;}
//  isAlive(){return this.alive;}

  setSexe(sexe){this.sexe = sexe;}
  setTaxeA(taxeA){this.taxeA = taxeA;}
  setName(name){this.name = name;}
  setTaxeB(taxeB){this.taxeB = taxeB;}
  setTaxeC(taxeC){this.taxeC = taxeC;}
  setOst(ost){this.ost = ost;}
  setSupplyPeople(supplyPeople){this.supplyPeople = supplyPeople;}
  setSupplyOst(supplyOst){this.supplyOst = supplyOst;}
  setSatisfactionPeople(satisfactionOst){this.satisfactionOst = satisfactionOst;}
  setSatisfactionOst(satisfactionOst){this.satisfactionOst = satisfactionOst;}
  setHarvest(harvest){this.harvest = harvest;}
  setMarchands(marchands){this.marchands = marchands;}
  setMigrants(migrants){this.migrants = migrants;}
  setGains(gains){this.gains = gains;}
  setLand(land){this.land = land;}

  addMoney(money){this.money += money;}
  addSupply(supply){this.supply += supply;}
  addOst(ost){this.ost += ost;}
  addPeople(people){this.people += people;}
  addLand(land){this.land += land;}

  addFoires(foires){this.foires += foires;}
  addMoulins(moulins){this.moulins += moulins;}
  addFonderies(fonderies){this.fonderies += fonderies;}
  addChantiers(chantiers){this.chantiers += chantiers;}
  addPalais(palais){this.palais += palais;}
  addNobles(nobles){this.nobles += nobles;}

//  kill(){
//    this.alive=false;
//  }


}
