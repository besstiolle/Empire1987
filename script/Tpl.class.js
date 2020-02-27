import * as doT from './doT'

//Thank you https://olado.github.io/doT/index.html
export class Tpl {

  constructor(templates){
      this.templatesNames = ["0","0_1", "0_1a", "0_1b",
                            "1_tuto1", "1_tuto2", "1_tuto3", "1_tuto4", "1_tuto5", "1_tuto6", "1_tuto7",
                            "2_base", "2", "2_1", "2_1b", "2_2", "2_2b", "2_3", "2_4", "2_5",
                            "3",
                            "4_base", "4", "4_a", "4_b", "4_c", "4_d", "4_e",
                            "5_base", "5", "5_a", "5_b",
                            "6_base"];
      this.templates = new Map();
  }

  init(){
    let promises = [];
    for(let pos in this.templatesNames){
      promises.push(this.loadTpl(this.templatesNames[pos]));
    }
    return Promise.all(promises).then((dualTemplates) => {
      for(let pos in dualTemplates){
        this.templates.set(dualTemplates[pos][0], doT.template(dualTemplates[pos][1]) );
      }
    });
  }

  loadTpl(template){
    return fetch(`templates/${template}.tpl`).then((res) => {
      if (res.status == 200) {
        return res.text().then((text)=>[template, text])
      }

      console.error("template not found : " + 'templates/' + template + ".tpl")
      throw new Error(res.status);
    })
  }

  run(templateName, vars = {}){
    if(!this.templates.has(templateName)){
      return "<c>Template " + templateName + " not found</c>"
    }
    return this.templates.get(templateName)(vars);
  }
}
