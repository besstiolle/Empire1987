"use strict";

const NOT_IMPLEMENTED = "NOT_IMPLEMENTED"

//Land
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
}
