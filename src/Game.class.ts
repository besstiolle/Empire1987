import { User } from './User.class'
import { Market } from './Market.class'

export class Game {

  private static instance: Game;

  public users:Map<number, User>
  public barbares:User
  public market:Market
  public year:number
  public rats:number
  public meteo:number
  public currentPlayer:number
  public errors:Array<String>

  private constructor() {}
  
  public static getInstance(): Game {
    if (!Game.instance) {
      Game.instance = new Game();
    }
    return Game.instance;
}

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

  getUsersAliveAsArray(){
    let usersAlive = new Array<User>()
    this.users.forEach((value, key) => {
      usersAlive.push(value)
    });
    return usersAlive
  }

  getUserById(userId:number){
    let users = Array.from(this.users.values())
    for (var pos in users) {
      if(users[pos].id == userId){
        return users[pos];
      }
    }
    return null;
  }

  getCurrentUser(){
    return this.users.get(this.currentPlayer);
  }

  updateUser(user:User){
    this.users.set(user.id, user);
  }

  getOpponents(){
    let i = 1;
    let opponents = new Map();
    if(this.barbares.land > 0){
      opponents.set(i, this.barbares);
      i++;
    }
    let users = Array.from(this.getUsers().values())
    for (var pos in users) {
      opponents.set(i, users[pos]);
      i++;
    }
    return opponents;
  }

  getOpponentsAsArray(){
    return Array.from(this.getOpponents().values())
  }

  nextYear(){
    this.year++;
    let it = this.users.keys()
    while(!it.next().done){
      this.users.get(it.next().value).resetNewYear();
    }
  }

  intRnd(val:number){
    return Math.floor(Math.random() * val)
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

  addError(error:string){
    this.errors.push(error);
  }

  kill(user:User){
    //console.info("kill() " + user.getId());

    if(user.id == 0){
      user.land = 0;
    }

    this.users.delete(user.id);
    this.market.sales.delete(user.id);
  }


}
