"use strict";

class Game {
  constructor(){
    this.reset();
  }

  reset(){
    this.users = [new User("1", "kevin")];
    this.market = new Market();
    this.year = 1;
    this.rats = this.rollDice(5,30);
    this.keyboardInput = "";
    this.currentPlayer = 0;
    this.landPrice = 10;
    this.errors = [];
  }

  getUsers(){
    return this.users;
  }

  getCurrentUser(){
    return this.users[0];
  }

  getSalesInArray(){
    return this.market.getSalesInArray();
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

  resetTyping(){
    this.keyboardInput = "";
  }

  startTyping(key){
    if(key == 8) {
      this.keyboardInput = this.keyboardInput.substring(0, this.keyboardInput.length - 1);
    } else {
      this.keyboardInput += String.fromCharCode((96 <= key && key <= 105)? key-48 : key);
    }
  }

  purgeErrors(){
    this.errors = [];
  }

  addError(error){
    this.errors.push(error);
  }


}
