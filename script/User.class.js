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
  }

  getId(){
    return this.id;
  }
  getName(){
    return this.name;
  }
  getTaxeA(){
    return this.taxeA;
  }
  getTaxeB(){
    return this.taxeB;
  }
  getTaxeC(){
    return this.taxeC;
  }
  isDead(){
    return this.isDead;
  }
}
