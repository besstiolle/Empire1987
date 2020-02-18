class Game {
  constructor(){
    this.reset();
  }

  reset(){
    this.users = [new User("1", "kevin")];
    this.market = new Market();
    this.year = 1;
    this.rats = this.rollDice(5,30);

  }

  getUsers(){
    return this.users;
  }

  getSalesInArray(){
    return this.market.getSalesInArray();
  }

  nextYear(){
    this.year++;
    this.rats = this.rollDice(5,30);
  }

  rollDice(start = 0, end = 100){
    return Math.floor(Math.random() * (end - start)) + start
  }
}
