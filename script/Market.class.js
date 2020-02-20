"use strict";

class Market {
  constructor(){
    this.reset();
  }

  reset(){
    this.sales = new Map();
    this.addSales(1,"France", 10, 1);
    this.addSales(3,"Inde", 10, 1);
    this.addSales(1,"France", 20, 0.5);
    this.offer = null
    //console.info(this.sales);
  }

  addSales(idUser, country, boisseaux, price){

    let keyValue = this.getSaleOfUser(idUser);

    if(keyValue === null){
      this.sales.set(this.sales.size + 1,{"idUser":idUser, "country": country, "boisseaux": boisseaux, "price": price});
    } else {
      let sale = keyValue[1];
      sale["price"] = (sale["price"] * sale["boisseaux"] + price * boisseaux) / (sale["boisseaux"] +  boisseaux);
      sale["boisseaux"] += boisseaux;
      this.sales.set(keyValue[0], sale);
    }
  }

  getSales(){
    return this.sales;
  }

  getSalesInArray(){
    console.info("getSalesInArray()")
    return this.sales.values();
  }

  getSaleOfUser(idUser){
    let sale = null;
    let keyValue = null;
    const iterator1 = this.sales.entries();
    while(true){
      keyValue = iterator1.next().value;
      if(keyValue === undefined) {
          keyValue = null;
          break;
      }
      if(keyValue[0] == idUser){
        sale = keyValue[1];
        break;
      }
    }
    return keyValue;
  }

  createOffer(userId, marketId){
    this.offer = {"userId" : userId, "marketId": marketId};
  }

  getOffer(){
    return this.offer;
  }
/*
  buy(seller,customer, boisseaux){
    this.sales[seller.getId()]["boisseaux"] -= boisseaux
    if(this.sales[seller.getId()]["boisseaux"] == 0){
      delete this.sales[seller.getId()];
    }
  }*/
}
