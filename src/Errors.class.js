export class Errors {
  static notImplemented(){return "NOT_IMPLEMENTED"}

  //Market & Land
  static notEnoughtLand(){return "NOT_ENOUGHT_LAND"}
  static notEnoughtStock(){return "NOT_ENOUGHT_STOCK"}
  static priceTooHigh(){return "PRICE_TOO_HIGH"}
  static cantBuyMyself(){return "CANT_BUY_MYSELF"}
  static notEnoughtMoney(){return "NOT_ENOUGHT_MONEY"}
  static notEnoughtStockOnMarket(){return "NOT_ENOUGHT_STOCK_ON_MARKET"}

  //Demographie
  //static notEnoughtStock(){return "NOT_ENOUGHT_STOCK"}
  static atLast10Percent(){return "AT_LAST_10_PERCENT"}

  //Taxes
  //static notEnoughtMoney(){return "NOT_ENOUGHT_MONEY"}
  static taxeATooHigh(){return "TAXE_A_TOO_HIGH"}
  static taxeBTooHigh(){return "TAXE_B_TOO_HIGH"}
  static taxeCTooHigh(){return "TAXE_C_TOO_HIGH"}
  static notEnoughtNobles(){return "NOT_ENOUGHT_NOBLES"}

  //Fight
  //static notEnoughtNobles(){return "NOT_ENOUGHT_NOBLES"}
  static fightMyself(){return "FIGHT_MYSELF"}
  static notEnoughtOst(){return "NOT_ENOUGHT_OST"}
}
