import { User } from './User.class'
import { Market } from './Market.class'

export class Game {

  reset(){
    this.users = new Map();
    this.users.set(1,new User(1, "Hugues", "France"));
    this.users.set(2,new User(2, "Arthur", "Bretagne"));
    this.users.set(3,new User(3, "Othon", "Germanie"));
    this.users.set(4,new User(4, "Rodrigue", "Castille"));
    this.users.set(5,new User(5, "Ivan", "Moscovie"));
    this.users.set(6,new User(6, "Kubéni", "Perse"));
    this.barbares = new User(0, "Barbares", "Barbares", 6000);
    this.market = new Market();
    this.year = 1;
    this.rats = 0;
    this.meteo = null;
    this.currentPlayer = 1;
    this.errors = [];
  }

  /**
   * dead or alive user
   */
  getUsers(){
    return this.users;
  }

  getUsersAsArray(){
    return [... this.getUsers().values()];
  }

  getUserById(userId){
    let users = [ ... this.users.values() ];
    for (var pos in users) {
      if(users[pos].getId() == userId){
        return users[pos];
      }
    }
    return null;
  }

  getCurrentUser(){
    return this.users.get(this.currentPlayer);
  }

  updateUser(user){
    this.users.set(user.getId(), user);
  }

  getOpponents(){
    let i = 1;
    let opponents = new Map();
    if(this.barbares != null){
      opponents.set(i, this.barbares);
      i++;
    }
    let users = [ ... this.getUsers().values() ];
    for (var pos in users) {
      opponents.set(i, users[pos]);
      i++;
    }
    return opponents;
  }

  getOpponentsAsArray(){
    return [... this.getOpponents().values()];
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

  getBarbares(){
    return this.barbares;
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

  nextYear(){
    this.year++;
    const i = this.users.keys();
    for (let u of i) {
        this.users.get(u).resetNewYear();
    }
  }

  rollDiceInteger(start = 0, end = 100){
    return Math.floor(Math.random() * (end - start)) + start;
  }

  rollDiceFloat(start = 0, end = 100){
    return (Math.random() * (end - start)) + start;
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

  kill(user){
    console.info("kill() " + user.getId());
    this.users.delete(user.getId());
    this.market.removeSaleOfUser(user);
  }


}
