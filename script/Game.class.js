class Game {
  constructor(){
    this.reset()
  }

  reset(){
    this.users = [new User("1", "kevin")]
  }

  getUsers(){
    return this.users;
  }
}
