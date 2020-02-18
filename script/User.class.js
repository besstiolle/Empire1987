class User {
  constructor(id, name){
    this.id = id;
    this.name = name;
    this.reset();
  }

  reset(){
    this.taxeA = 20;
    this.taxeB = 15;
    this.taxeC = 35;
    this.isDead = false;
    this.rank = "Duc";
    this.country = "France";
    this.harvest = 10;
    this.supply = 100;
    this.needPeople = 1000;
    this.needOst = 1000;
    this.money = 50;
    this.land = 5000;
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
