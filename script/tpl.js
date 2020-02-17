"use strict";

async function loadTpl(template){
  let res = await fetch('templates/' + template + ".tpl")

  if (res.status == 200) {
    let data = await res.text()
    return data;
  }

  throw new Error(res.status);
}

function hydrateTpl(tpl, vars){
  for (var key in vars) {
    tpl = tpl.replace("${" + key + "}", vars[key])
  }
  return tpl;
}

function processTpl(tpl){
  tpl = tpl.replace(/\r\n/g, "<br/>");
  console.info("tpl " + tpl);
  return tpl;
}
