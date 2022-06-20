export class User {

  public id:number
  public name:string
  public country:string
  public land:number = 10000
  public sexe:number = 0 // 0=male 1=female
  public taxeA:number = 20
  public taxeB:number = 5
  public taxeC:number = 35
  public rank:string = "Baron"
  public harvest:number = 17524
  public supply:number = 12842
  public people:number = 2026
  public ost:number =20
  public money:number = 1000

  public foires:number = 0
  public moulins:number = 0
  public fonderies:number = 0
  public chantiers:number = 0
  public palais:number = 0

  public nobles:number = 1
  public marchands:number = 1

  //Is reseted each year
  public needPeople:number = 0
  public supplyPeople:number = 0
  public needOst:number = 0
  public supplyOst:number = 0
  public gainFoires:number = 0
  public gainMoulins:number = 0
  public gainFonderies:number = 0
  public gainChantiers:number = 0
  public immigratedPeople:number = 0
  public costOst:number = 0
  public gainTaxesA:number = 0
  public gainTaxesB:number = 0
  public gainTaxesC:number = 0


  constructor(id: number, name:string, country:string, land: number = 10000){
    this.id = id
    this.name = name
    this.country = country
    this.land = land
  }

  //TODO revoir usage ?
  resetNewYear(){
    this.needPeople = 0
    this.supplyPeople = 0
    this.needOst = 0
    this.supplyOst = 0
    this.gainFoires = 0
    this.gainMoulins = 0
    this.gainFonderies = 0
    this.gainChantiers = 0
    this.immigratedPeople = 0
    this.costOst = 0
    this.gainTaxesA = 0
    this.gainTaxesB = 0
    this.gainTaxesC = 0
  }
}
