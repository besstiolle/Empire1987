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
    this.rats = 0;
    this.meteo = null;
    this.currentPlayer = 1;
    this.landPrice = 2;
    this.errors = [];
  }

  getUsers(){
    return this.users;
  }

  getCurrentUser(){
    return this.users.get(this.currentPlayer);
  }

  updateUser(user){
    this.users.set(user.getId(), user);
  }

  getSalesInArray(){
    return this.market.getSalesInArray();
  }

  getMarket(){
    return this.market;
  }

  setMeteo(meteo){
    this.meteo = meteo;
  }
  getMeteo(){
    return this.meteo;
  }

  getMeteoPercent(){
    switch (this.meteo) {
      case 0:
        return 0.25
      case 1:
        return 0.75
      case 2:
        return 1.25
      case 3:
        return 2
    }
  }

  setRats(rats){
    this.rats = rats
  }
  getRats(){
    return this.rats;
  }

  nextPayer(){
    this.currentPlayer = ((this.currentPlayer+1) % this.users.size);
  }

  nextYear(){
    this.year++;
    this.rats = this.rollDice(5,30);
  }

  rollDiceInteger(start = 0, end = 100){
    return Math.floor(Math.random() * (end - start)) + start;
  }

  rollDiceFloat(start = 0, end = 100){
    return (Math.random() * (end - start)) + start;
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


  resolveMarketOffer(quantity){
    //console.info("resolveMarketOffer() " + quantity);
    let sale = this.market.getSales().get(this.market.getOffer()["marketId"]);
    let seller = this.users.get(sale['idUser']);
    let buyer = this.getCurrentUser()

    seller.addMoney(sale.price * quantity);
    buyer.addMoney(-1 * (sale.price * quantity));
    buyer.addSupply(quantity);
    sale.boisseaux = sale.boisseaux - quantity;

    if(sale.boisseaux == 0){
      this.market.removeSale(this.market.getOffer()["marketId"]);
    } else {
      this.market.getSales().set(this.market.getOffer()["marketId"], sale);
    }
    this.users.set(seller.getId(), seller);
    this.users.set(buyer.getId(), buyer);
  }


}
