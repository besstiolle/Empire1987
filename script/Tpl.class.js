"use strict";

//Thank you https://olado.github.io/doT/index.html
class Tpl {

  constructor(templates){
      this.templatesNames = ["tuto1", "tuto2", "tuto3", "tuto4", "tuto5", "tuto6", "tuto7",
                            "start","start1", "start1a", "start1b",
                            "step1_base", "step1", "step1_1", "step1_1b", "step1_2", "step1_2b", "step1_3", "step1_4", "step1_5",
                            "step2",
                            "step3_base", "step3", "step3_a", "step3_b", "step3_c", "step3_d", "step3_e",
                            "step4_base", "step4", "step4_a", "step4_b"];
      this.templates = new Map();
  }

  async init(){
    let promises = [];
    for(let pos in this.templatesNames){
      promises.push(this.loadTpl(this.templatesNames[pos]));
    }
    await Promise.all(promises).then((dualTemplates) => {
      for(let pos in dualTemplates){
        this.templates.set(dualTemplates[pos][0], doT.template(dualTemplates[pos][1]) );
      }
    });
  }

  async loadTpl(template){
    let res = await fetch('templates/' + template + ".tpl")

    if (res.status == 200) {
      return [template, await res.text()];
    }

    console.error("template not found : " + 'templates/' + template + ".tpl")
    throw new Error(res.status);
  }


  run(templateName, vars = {}){
    if(!this.templates.has(templateName)){
      return "<c>Template " + templateName + " not found</c>"
    }
    return this.templates.get(templateName)(vars);
  }


}
