class Market {
  constructor(){
    this.reset();
  }

  reset(){
    this.sales = {};
    this.addSales(1, "France", 10, 1);
    this.addSales(2, "Inde", 10, 1);
    this.addSales(1, "France", 20, 0.5);
    console.info(this.sales);
  }

  addSales(idUser, country, boisseaux, price){
    let sale = null;
    if(idUser in this.sales){
      sale = this.sales[idUser];
      sale["price"] += (sale["price"] * sale["boisseaux"] + price * boisseaux) / (sale["boisseaux"] +  boisseaux)
      sale["boisseaux"] += boisseaux
    } else {
      sale = {"idUser":idUser, "country": country, "boisseaux": boisseaux, "price": price};
    }
    this.sales[idUser] = sale
  }

  getSalesInArray(){
    let array = [];
    for (let [key, value] of Object.entries(this.sales)) {
       array.push(value);
    }
    return array;
  }

  getSaleOfUser(idUser){
    if(idUser in this.sales){
      return this.sales[idUser];
    } else {
      return {};
    }
  }

  buy(seller,customer, boisseaux){
    this.sales[seller.getId()]["boisseaux"] -= boisseaux
    if(this.sales[seller.getId()]["boisseaux"] == 0){
      delete this.sales[seller.getId()];
    }
  }
}
