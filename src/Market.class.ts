export class Sale {
  idUser:number
  country: string
  boisseaux: number
  price: number

  constructor(idUser:number, country: string, boisseaux: number, price: number){
    this.idUser=idUser
    this.country=country
    this.boisseaux=boisseaux
    this.price=price
  }
}
export class Market {

  public sales:Map<number, Sale> = new Map<number, Sale>();

  constructor(){
  }

  addSales(idUser:number, country:string, boisseaux:number, price:number){
    if(!this.sales.has(idUser)){
      //console.info("add new sale for " + country)
      this.sales.set(idUser,new Sale(idUser, country, boisseaux, price));
    } else {
      //console.info("update sale for " + country)
      let sale = this.sales.get(idUser);
      sale.price = (sale.price * sale.boisseaux + price * boisseaux) / (sale.boisseaux +  boisseaux);
      sale.boisseaux += boisseaux;
      this.sales.set(idUser, sale);
    }
  }

  getSalesInArray(){
    let sales = new Array<Sale>()
    this.sales.forEach((value, key) => {
      sales.push(value)
    });
    return sales
  }

}
