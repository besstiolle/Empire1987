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
    this.ost=20;
    this.needOst = 160;
    this.money = 1000;
    this.land = 5000;

    this.foires = 0;
    this.moulins = 0;
    this.fonderies = 0;
    this.chantiers = 0;
    this.palais = 0;
  }

  getId(){
    return this.id;
  }

  getLand(){
    return this.land;
  }

  setLand(land){
    this.land = land;
  }

  getMoney(){
    return this.money;
  }

  setMoney(money){
    this.money = money;
  }

}
