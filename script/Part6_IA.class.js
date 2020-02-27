import { Party } from './Part_Abstract.class'
import { Errors } from './Errors.class'

export class IA extends Party {
    // Terres vassales, choix de l'adversaire
    static do(){
      console.info("do IA")

      //else choose number of soldier
      Party.refreshWithTemplates(["6_base"]);
    }
}
