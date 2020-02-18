class Game {
  constructor(){
    this.reset();
  }

  reset(){
    this.users = [new User("1", "kevin")];
    this.market = new Market();
    this.year = 1;
    this.rats = 2;

  }

  getUsers(){
    return this.users;
  }

  getSalesInArray(){
    return this.market.getSalesInArray();
  }
}
