class Game {
  constructor(){
    this.reset()
  }

  reset(){
    this.users = [new User("1", "kevin")]
    this.year = 1
  }

  getUsers(){
    return this.users;
  }

  getYear(){
    return this.year;
  }
}
