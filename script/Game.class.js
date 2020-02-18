class Game {
  constructor(){
    this.reset()
  }

  reset(){
    this.users = [new User("1", "kevin")]
    this.year = 1
    this.rats = 2
  }

  getUsers(){
    return this.users;
  }
}
