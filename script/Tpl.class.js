"use strict";


//Thank you https://olado.github.io/doT/index.html
class Tpl {
  constructor(template){
    return (async () => {
      this.template = template;
      this.reset();
      await this.loadTpl();
      this.processTpl();
      return this;
     })();
  }

  reset(){
    this.data=null;
    this.vars={}
    this.doTData = null
  }

  async loadTpl(){
    //const start = Date.now();
    let res = await fetch('templates/' + this.template + ".tpl")

    if (res.status == 200) {
      this.data = await res.text()
      //console.info("loadTpl > " + (Date.now() - start) + "ms");
      return;
    }

    //console.info("loadTpl > " + (Date.now() - start) + "ms");
    throw new Error(res.status);
  }

  processTpl(){
    //const start = Date.now();
    this.doTData = doT.template(this.data)
    //console.info("tpl : " + this.data);
    //console.info("processTpl > " + (Date.now() - start) + "ms");
  }

  run(vars = {}){
    //const start = Date.now();
    let tmp = this.doTData(vars);
    //console.info("run > " + (Date.now() - start) + "ms");
    return tmp;
  }


}
