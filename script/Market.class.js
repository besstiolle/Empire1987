export class Market {
  constructor(){
    this.reset();
  }

  reset(){
    this.sales = new Map();
    this.addSales(3,"Inde", 100, 50);
    this.addSales(2,"Suisse", 100, 0.01);
    this.offer = null;
    this.promise = null;
    //console.info(this.sales);
  }

  addSales(idUser, country, boisseaux, price){

    let keyValue = this.getSaleOfUser(idUser);

    if(keyValue === null){
      //console.info("add new sale for " + country)
      this.sales.set(this.sales.size + 1,{"idUser":idUser, "country": country, "boisseaux": boisseaux, "price": price});
    } else {
      //console.info("update sale for " + country)
      let sale = keyValue[1];
      sale["price"] = (sale["price"] * sale["boisseaux"] + price * boisseaux) / (sale["boisseaux"] +  boisseaux);
      sale["boisseaux"] += boisseaux;
      this.sales.set(keyValue[0], sale);
    }
    this.orderSales();
  }

  getSales(){
    return this.sales;
  }

  getSalesInArray(){
    //console.info("getSalesInArray()")
    return this.sales.values();
  }

  getSaleOfUser(idUser){
    //console.info("getSaleOfUser() " + idUser);
    let liste = [... this.getSalesInArray()];
    for( var pos in liste){
      if(liste[pos]['idUser'] === idUser){
        return [parseInt(pos)+1, liste[pos]];
      }
    }
    return null;
  }

  createOffer(buyerId, marketId){
    this.offer = {"buyerId" : buyerId, "marketId": marketId};
  }

  getOffer(){
    return this.offer;
  }

  createPromise(sellerId, quantity){
    this.promise = {"sellerId" : sellerId, "quantity": quantity};
  }

  getPromise(){
    return this.promise;
  }

  removeSale(marketId){
    //console.info("removeSale()" + marketId)
    this.sales.delete(marketId);
    this.orderSales();
  }

  orderSales(){
    //console.info("orderSales()")
    let liste = [... this.getSalesInArray()];
    let minusIdUser=0;
    let minusSale;
    let position;
    let positionRemoved;
    let newMap = new Map();

    let max = 10; // Avoid weird infiny loop
    while(liste.length > 0 && max > 0){
      positionRemoved = 0;
      minusIdUser = 1000;
      for( var pos in liste){
          if(minusIdUser > liste[pos].idUser){
            minusIdUser = liste[pos].idUser;
            minusSale = liste[pos];
            positionRemoved = pos;
          }
      }
      newMap.set(newMap.size+1, minusSale);
      liste.splice(positionRemoved, 1);
      max--;
    }
    this.sales = newMap;

  }
}
