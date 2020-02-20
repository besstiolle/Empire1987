"use strict";

class Game {
  constructor(){
    this.reset();
  }

  reset(){
    this.users = new Map([[1,new User(1, "kevin")],[2,new User(2, "second")],[3,new User(3, "troisieme")],
                            [4,new User(4, "quatre")],[5,new User(5, "cinq")],[6,new User(6, "sixième")],
                          [7,new User(7, "sept")]]);
    this.market = new Market();
    this.year = 1;
    this.rats = this.rollDice(5,30);
    //this.keyboardInput = "";
    this.currentPlayer = 1;
    this.landPrice = 10;
    this.errors = [];
  }

  getUsers(){
    return this.users;
  }

  getCurrentUser(){
    return this.users.get(this.currentPlayer);
  }

  getSalesInArray(){
    return this.market.getSalesInArray();
  }

  nextPayer(){
    this.currentPlayer = ((this.currentPlayer+1) % this.users.size);
  }

  nextYear(){
    this.year++;
    this.rats = this.rollDice(5,30);
  }

  rollDice(start = 0, end = 100){
    return Math.floor(Math.random() * (end - start)) + start;
  }

  getLandPrice(){
    return this.landPrice;
  }

  purgeErrors(){
    this.errors = [];
  }

  addError(error){
    this.errors.push(error);
  }


}
