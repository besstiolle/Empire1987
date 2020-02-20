"use strict";

const NOT_IMPLEMENTED = "NOT_IMPLEMENTED"

//Market & Land
const NOT_ENOUGHT_STOCK = "NOT_ENOUGHT_STOCK"
const PRICE_TOO_HIGH = "PRICE_TOO_HIGH"
const CANT_BUY_MYSELF = "CANT_BUY_MYSELF"
const NOT_ENOUGHT_MONEY = "NOT_ENOUGHT_MONEY"
const NOT_ENOUGHT_STOCK_ON_MARKET = "NOT_ENOUGHT_STOCK_ON_MARKET"
const NOT_ENOUGHT_LAND = "NOT_ENOUGHT_LAND"

//Taxes
const TAXE_A_TOO_HIGH = "TAXE_A_TOO_HIGH"
const TAXE_B_TOO_HIGH = "TAXE_B_TOO_HIGH"
const TAXE_C_TOO_HIGH = "TAXE_C_TOO_HIGH"

//Fight
const FIGHT_MYSELF = "FIGHT_MYSELF"
const NOT_ENOUGHT_OST = "NOT_ENOUGHT_OST"


class Errors {
  constructor(){}

  static notEnoughtLand(){return NOT_ENOUGHT_LAND}
  static notImplemented(){return NOT_IMPLEMENTED}
  static taxeATooHigh(){return TAXE_A_TOO_HIGH}
  static taxeBTooHigh(){return TAXE_B_TOO_HIGH}
  static taxeCTooHigh(){return TAXE_C_TOO_HIGH}
  static fightMyself(){return FIGHT_MYSELF}
  static notEnoughtOst(){return NOT_ENOUGHT_OST}
  static notEnoughtStock(){return NOT_ENOUGHT_STOCK}
  static priceTooHight(){return PRICE_TOO_HIGH}
  static cantBuyMyself(){return CANT_BUY_MYSELF}
  static notEnoughtMoney(){return NOT_ENOUGHT_MONEY}
  static notEnoughtStockOnMarket(){return NOT_ENOUGHT_STOCK_ON_MARKET}
}
