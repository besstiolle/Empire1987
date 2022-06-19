"use strict";
(self["webpackChunkempire1987"] = self["webpackChunkempire1987"] || []).push([["index"],{

/***/ 5426:
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ 7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n  background-color: #000;\n  color:#FFF;\n  font-family: monospace;\n  font-size:1.41em;\n  white-space: pre-wrap;\n}\n\n#game{\n  max-width: 800px;\n  margin: auto;\n  padding:10px;\n  line-break: auto;\n  background-color: #111;\n  min-height: 530px;\n}\n\nh1{\n  font-family: Monospace;\n  white-space: pre;\n}\n\nl, c, r {\n  width: 100%;\n  display: inline-block;\n}\n\nc{\n  text-align: center;\n}\n\nr{\n  text-align: right;\n}\n\ninvert{\n  background-color: #AAA;\n  color:#000;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,UAAU;EACV,sBAAsB;EACtB,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ","sourcesContent":["body{\n  background-color: #000;\n  color:#FFF;\n  font-family: monospace;\n  font-size:1.41em;\n  white-space: pre-wrap;\n}\n\n#game{\n  max-width: 800px;\n  margin: auto;\n  padding:10px;\n  line-break: auto;\n  background-color: #111;\n  min-height: 530px;\n}\n\nh1{\n  font-family: Monospace;\n  white-space: pre;\n}\n\nl, c, r {\n  width: 100%;\n  display: inline-block;\n}\n\nc{\n  text-align: center;\n}\n\nr{\n  text-align: right;\n}\n\ninvert{\n  background-color: #AAA;\n  color:#000;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3645:
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 7537:
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 684:
/*!*****************************!*\
  !*** ./src/templates/0.tpl ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<l></l><l></l><l></l><l></l><c>E M P I R E</c><l></l><c>* &#8617; = Taper RC (retour chariot) pour continuer *</c><l></l><c>Règles ? (O/N)</c>';return out;
}

/***/ }),

/***/ 4255:
/*!*******************************!*\
  !*** ./src/templates/0_1.tpl ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<l></l><l></l><l></l><l></l><l></l><l></l><l></l><l></l><l></l><l></l><c>Combien de joueurs (1 à 1) :</c>';return out;
}

/***/ }),

/***/ 4561:
/*!********************************!*\
  !*** ./src/templates/0_1a.tpl ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<l></l><l></l><l></l><l></l><l></l><l></l><l></l><l></l><l></l><l></l><c>Combien de joueurs (1 à 1) : 1</c><c>Seigneur de France : '+(it.KB_BUFFER)+'&#9617;</c><c>(&#8617; = nom par défaut = Hugues)</c><c>(Pour une gente dame, taper J)</c>';return out;
}

/***/ }),

/***/ 7531:
/*!********************************!*\
  !*** ./src/templates/0_1b.tpl ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<l></l><l></l><l></l><l></l><l></l><l></l><l></l><l></l><l></l><l></l><c>An '+(it.game.year)+'</c><l></l>';if(game.meteo === 0){out+='<c>Mauvais temps, Sècheresse, Sauterelles.</c>';}if(game.meteo === 1){out+='<c>Gelées précoces. Aridité.</c>';}if(game.meteo === 2){out+='<c>Innondations. Trop de pluies.</c>';}if(game.meteo === 3){out+='<c>Temps moyen. Bonne année.</c>';}if(game.meteo === 4){out+='<c>Beau temps, Eté long.</c>';}if(game.meteo === 5){out+='<c>Temps superbe! Grande année!</c>';}return out;
}

/***/ }),

/***/ 2076:
/*!***********************************!*\
  !*** ./src/templates/1_tuto1.tpl ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<l>            Oyez, oyez, bonnes gens !</l><l></l><l>               Bienvenue dans l\' E M P I R E !</l><l></l><l>   Imaginez que vous êtes le gentil seigneur (ou la gente dame) d\'un petit fief sans importance de l\'Europe du Moyen-Age. Votre pays réunit de nombreux agréments : pas d\'industrie, commerce réduit, armée insignifiante, sur ou sous population, vosins haineux, complots, famines, perste, et toutes les autres douceurs quotidiennes du pouvoir. C\'est uniquement la nécessité de survivre pour vous conserver à l\'amour de vos bons et loyaux sujets, et non une démoniaque ambition, qui vous pouse à rassembler années après année terres, argent et armées.</l><l></l><l>   Mais la brièveté de la vie ne vous laisera que peu de temps pour transformer votre baronnie en empire.</l><l></l><l>   Car la Providence est prête à récompenser votre sage politique par une ascension bien méritée :</l><l></l><l>         Baron, Duc, Roi, et finalement (peut-être) EMPEREUR !</l><l></l><l>            (ou leurs équivalents étrangers)</l><l></l><r>&#8617;</r>';return out;
}

/***/ }),

/***/ 905:
/*!***********************************!*\
  !*** ./src/templates/1_tuto2.tpl ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<l>   Vous suivez? Alors sachez que 5 autres gentils seigneurs lorgnent aussi la couronne impériale et n\'ont pas du tout l\'intention de vous regarder la prendre. Leur armées peuvent vous attaquer au moment propice, et peut-être dévaster votre pays.</l><l></l><l>   Ils tiennent le marché du garin et si vous pensez du mal de l\'OPEP, attendez seulement de voir combien le grain peut aussi devenir rare et cher.</l><l></l><l>   Bien sûr, un chef habile peut faire un malheur sur le marché du grain. En calculant bien, vos moissons devraient être abondante. Quant au surpeuplement, vous pouvez u remédier en levant ue grande armée que la guerre réduira.</l><l></l><l>   Néamoins, votre souci majeur sera le lebensraum, l\'espace vital. Les terres à conquérir ne sont pas illimitées.</l><l></l><l>   Si vous écrasez les hordes barbares et les armées bien entraînées des autres nations ainsi que leurs milices paysannes, peut-être obtiendrez- vous le prestigieux titre d\'EMPREUR !</l><l></l><l></l><l></l><r>&#8617;</r>';return out;
}

/***/ }),

/***/ 2804:
/*!***********************************!*\
  !*** ./src/templates/1_tuto3.tpl ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<c>TAXES</c><l></l><l>   Les taxes douanières ne s\'appliquentqu\'aux immigrants de votre nation. Souvent, un faible taux attire plus d\'étrangers.</l><l></l><l>   La taxe commerciale influe fortement sur votre économie capitaliste. Si elle permet de ramasser beaucoup d\'argent, un niveau trop élevé tend à décourager l\'activité industrielle.</l><l></l><l>   Les impôts directs sont joyeusement payés par tous, habitants et industries. Là encore, un faible taux favorise souvent la production industrielle.</l><l></l><l></l><l></l><l></l><l></l><l></l><l></l><l></l><l></l><l></l><l></l><r>&#8617;</r>';return out;
}

/***/ }),

/***/ 3150:
/*!***********************************!*\
  !*** ./src/templates/1_tuto4.tpl ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<l>   Chaque années, vous pouvez investir vos revenus en divers placements commerciaux ou industriels. Les années suivantes, ces placements vous seront hautement profitables, s\'ils étaient judicieux.</l><l></l><c>INVESTISSEMENTS POSSIBLE</c><l></l><l>   Les foires sont un placement relativement bon marché et assez intéressant car elles favorisent la formation d\'une classe moyenne, les marchands. Et, comme vous le savez sûrement, la classe  moyenne paye bien plus d\'impôts que sa part.</l><l></l><l>   Les moulins à grains sont nécessaires pour traiter les moissons et par suite sont d\'un bon rapport les années aux récoltes abondantes.</l><l></l><l>   Les fonderies permettent de lever de grandes armées. En avoir plusieurs vous permettra d\'équiper une armée bien plus nombreuse.</l><l></l><l>   Les chantiers navals sont les plus profitables des investissements. A cause dun grand nombre des commandes lors du beau temps, ils rapportent souvent plus durant ces années.</l><l></l><l></l><l></l><r>&#8617;</r>';return out;
}

/***/ }),

/***/ 7290:
/*!***********************************!*\
  !*** ./src/templates/1_tuto5.tpl ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<l>  Les armées ne sont jamais un bon investissement. Non contentes d\'être chères à recruter, elles sont encore coûteuses à entretenir et entraîner. En plus, il leur faut aussi une plus grande part de la moisson que les serfs.</l><l></l><l>  Bien sûr, vous pouvez vous offrir le luxe d\'édifier un palais. Qu\'est- ce qui permet de distinguer un empereur des autres rois et de leur château, sinon un palais? De plus, avec un palais, votre pays pourra attirer plus de nobles.</l><l></l><l></l><l></l><l></l><l></l><l></l><l></l><l></l><l></l><l></l><l></l><l></l><l></l><l></l><r>&#8617;</r>';return out;
}

/***/ }),

/***/ 7345:
/*!***********************************!*\
  !*** ./src/templates/1_tuto6.tpl ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<c>QUELQUES DETAILS NON INUTILES</c><l></l><l>  Vous perdez toujours 10% de commission en traintant sur le marché du grain. Quand vous vendez du grain à différents prix, le prix du marché est la moyenne des prix de vente, ce qui contrinue à empêcher de trop grands écarts annuels.</l><l></l><l>  Pour interdire à des seigneurs peu scrupuleux d\'utiliser le marché afin d\'éviter les rats, on ne peut y racheter son propre grain.</l><l></l><l>  Pensez également à garder une partie de votre réserve de grain si vous envisagez de planter quelque chose l\'année suivante.</l><l></l><l>  Il est souvent avantageux de nourrir le peuple au-delà du strict nécessaire. Les immigrants sont habituellement attirés par une nation prospère et parfois même les nobles et les marchands peuvent s\'y établir.</l><l></l><l>  On peut jouer à 6 au plus. Les joueurs absents sont remplacés par l\'ordinateur, dont l\'habilité est fonction de la moyenne des joueurs réels.</l><l></l><l></l><r>&#8617;</r>';return out;
}

/***/ }),

/***/ 634:
/*!***********************************!*\
  !*** ./src/templates/1_tuto7.tpl ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<c>VICTOIRE</c><l></l><l>   Vous devenez DUC moyennant la bagatelle de 10 foires, 5 moulins, plus de 2500 serfs avec 4.5 arpents par serf, un palais fini à 20% et plus de 10 nobles.</l><l></l><l>   Vous voilà ROI quand votre justice s\'étend sur 20 foires, 10 moulins, 1 fonderie, plus de 3000 serfs avec 5 arpents par serf, un palais fini à 60% et 20 nobles.</l><l></l><l>   L\'EMPIRE est à vous si votre bon plaisir règne sur 40 foires, 20 mouluns, 3 fonderies, 3500 serfs avec 6 arpents par serf, un palais terminé à 100% et 40 nobles.</l><l></l><l>   Dieu vous ait en sa très saincte garde, Messires!</l><l></l><l></l><l></l><l></l><l></l><l></l><l></l><l></l><r>&#8617;</r><l></l>';return out;
}

/***/ }),

/***/ 1860:
/*!*****************************!*\
  !*** ./src/templates/2.tpl ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<l>&#8617; ou 1=Achat de grain 2=Vente de grain 3=Vente de terres :</l>';if(it.game.errors.includes("NOT_IMPLEMENTED")){out+='<l>Fonction non implémentée &#x1F49D;</l>';}return out;
}

/***/ }),

/***/ 8923:
/*!*******************************!*\
  !*** ./src/templates/2_1.tpl ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='';if(!it.game.errors.length){out+='<l>A Qui achetez ? '+(it.KB_BUFFER)+'&#9617;</l>';}if(it.game.errors.includes("CANT_BUY_MYSELF")){out+='<l>Vous ne pouvez acheter à vous même</l>';}return out;
}

/***/ }),

/***/ 4832:
/*!********************************!*\
  !*** ./src/templates/2_1b.tpl ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='';if(!it.game.errors.length){out+=' <l>Combien ? '+(it.KB_BUFFER)+'&#9617;</l>';}if(it.game.errors.includes("NOT_ENOUGHT_MONEY")){out+='<l>Vous n\'avez pas assez d\'argent</l>';}if(it.game.errors.includes("NOT_ENOUGHT_STOCK_ON_MARKET")){out+='<l>Il n\'en vend pas autant</l>';}return out;
}

/***/ }),

/***/ 8470:
/*!*******************************!*\
  !*** ./src/templates/2_2.tpl ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='';if(!it.game.errors.includes("NOT_ENOUGHT_STOCK")){out+='<l>Combien de boisseaux vendez-vous ? '+(it.KB_BUFFER)+'&#9617;</l>';}if(it.game.errors.includes("NOT_ENOUGHT_STOCK")){out+='<l>'+(it.user.rank)+' '+(it.user.name)+', pensez y encore</l>';}if(it.game.errors.includes("NOT_ENOUGHT_STOCK")){out+='<l>Vous n\'avez que '+(it.user.supply)+' boisseaux.</l>';}return out;
}

/***/ }),

/***/ 4988:
/*!********************************!*\
  !*** ./src/templates/2_2b.tpl ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='';if(!it.game.errors.includes("PRICE_TOO_HIGH")){out+='<l>A quel tarif ? '+(it.KB_BUFFER)+'&#9617;</l>';}if(it.game.errors.includes("PRICE_TOO_HIGH")){out+='<l>PRICE_TOO_HIGH';}return out;
}

/***/ }),

/***/ 4462:
/*!*******************************!*\
  !*** ./src/templates/2_3.tpl ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<l>A raison de '+( it.Const.landPrice )+' francs l\'arpant, combien en vendez-vous aux Barbares ? '+(it.KB_BUFFER)+'&#9617;</l>';if(it.game.errors.includes("NOT_ENOUGHT_LAND")){out+='<l>Il faut garder un peu de terrain pour le palais royal!</l>';}return out;
}

/***/ }),

/***/ 3023:
/*!*******************************!*\
  !*** ./src/templates/2_4.tpl ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<l>Combien donnez vous à votre OST ? '+(it.KB_BUFFER)+'&#9617;</l>';if(it.game.errors.includes("NOT_ENOUGHT_STOCK")){out+='<l>Vous n\'avez pas assez en stock!</l>';}return out;
}

/***/ }),

/***/ 849:
/*!*******************************!*\
  !*** ./src/templates/2_5.tpl ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<l>Combien donnez vous à votre peuple ? '+(it.KB_BUFFER)+'&#9617;</l>';if(it.game.errors.includes("NOT_ENOUGHT_STOCK")){out+='<l>Vous n\'avez pas assez en stock!</l>';}if(it.game.errors.includes("AT_LAST_10_PERCENT")){out+='<l>Vous devez au moins en consacrer 10%!</l>';}return out;
}

/***/ }),

/***/ 8453:
/*!**********************************!*\
  !*** ./src/templates/2_base.tpl ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<c>'+(it.user.rank)+' '+(it.user.name)+' de '+(it.user.country)+'</c><c>An '+(it.game.year)+'</c><c>Les rats ont mangé '+(it.game.rats)+' % de vos réserves de grain</c><c>&#x2554&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x44&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x44&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x44&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x44&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2557</c><c>&#x2551  Récoltes   &#x2502  Réserves   &#x2502   Besoins   &#x2502   Besoins   &#x2502    Trésor   &#x2551</c><c>&#x2551  de grain   &#x2502  de grain   &#x2502  du peuple  &#x2502   de l\'ost  &#x2502     royal   &#x2551</c><c>&#x2551  '+(it.user.harvest.toString().padStart(8," "))+'   &#x2502  '+(it.user.supply.toString().padStart(8," "))+'   &#x2502   '+(it.user.needPeople.toString().padStart(8," "))+'  &#x2502   '+(it.user.needOst.toString().padStart(8," "))+'  &#x2502  '+(it.user.money.toString().padStart(8," "))+'   &#x2551</c><c>&#x2551  boisseaux  &#x2502  boisseaux  &#x2502  boisseaux  &#x2502  boisseaux  &#x2502    francs   &#x2551</c><c>&#x255A&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#xa4&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#xa4&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#xa4&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#xa4&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x255D</c><l></l><l>                     * * * Grain à vendre :</l><c><invert>Pays              Boisseaux          Prix</invert></c><l>';var arr1=it.sales;if(arr1){var sale,index=-1,l1=arr1.length-1;while(index<l1){sale=arr1[index+=1];out+='<c>'+(index+1)+' '+(sale.country.toString().padEnd(10," "))+'    '+(sale.boisseaux.toString().padStart(10," "))+'    '+((Math.round(sale.price * 100)/100).toString().padStart(8," "))+'<br/>';} } out+='</l><l>                     ';if(!it.sales.length){out+='Pas de grain à vendre...';}out+='</l><l></l><l></l>';return out;
}

/***/ }),

/***/ 1101:
/*!*****************************!*\
  !*** ./src/templates/3.tpl ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<l></l><l></l><l></l><l></l><c>'+(it.user.rank)+' '+(it.user.name)+' de '+(it.user.country)+'</c><c>en l\'an '+(it.game.year)+'</c><l></l><l>'+(it.randomBirth)+' naissances</l><l>'+(it.randomDeath)+' habitants morts de maladie</l>';if(it.randomStarvingPeople > 0){out+='<l>'+(it.randomStarvingPeople)+' habitants morts de faim</l>';}if(it.randomMigrant > 0){out+='<l>'+(it.randomMigrant)+' migrants viennent dans votre pays</l>';}if(it.randomStarvingOst > 0){out+='<l>'+(it.randomStarvingOst)+' soldats morts de faim</l>';}out+='<l></l><l>Votre ost combattra avec une efficacité de '+(it.user.getSatisfactionOst())+'%</l><l></l><l>Vous avez ';if(it.randomPeople >= 0){out+='gagné';}if(it.randomPeople < 0){out+='perdu';}out+=' '+(Math.abs(it.randomPeople))+' sujets taillables et corvéables à merci</l><l></l><l>&#8617;</l>';return out;
}

/***/ }),

/***/ 719:
/*!*****************************!*\
  !*** ./src/templates/4.tpl ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<l>1/Droits de douane,2/Taxe commerciale,3/Impôts directs ou &#8617;/Investissements ?</l>';if(it.game.errors.includes("FIGHT_MYSELF")){out+='<l>Vous ne pouvez vous attaquer.</l>';}return out;
}

/***/ }),

/***/ 3506:
/*!*******************************!*\
  !*** ./src/templates/4_a.tpl ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<l>Quelle valeur pour la taxe de douane (50% max) ? '+(it.KB_BUFFER)+'&#9617;</l>';if(it.game.errors.includes("TAXE_A_TOO_HIGH")){out+='<l>Vous ne pouvez dépasser les 50%.</l>';}return out;
}

/***/ }),

/***/ 819:
/*!*******************************!*\
  !*** ./src/templates/4_b.tpl ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<l>Quelle valeur pour la taxe commerciale (50% max) ? '+(it.KB_BUFFER)+'&#9617;</l>';if(it.game.errors.includes("TAXE_B_TOO_HIGH")){out+='<l>Vous ne pouvez dépasser les 50%.</l>';}return out;
}

/***/ }),

/***/ 9799:
/*!**********************************!*\
  !*** ./src/templates/4_base.tpl ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<c>'+(it.user.rank)+' '+(it.user.name)+' de '+(it.user.country)+'</c><c>en l\'an '+(it.game.year)+'</c><l><invert> Revenus d\'état </invert></l><l>          Trésor = '+(it.user.money.toString().padStart(6))+' francs</l><l>          <invert>  Droits         Taxe       Impôts  </invert></l><l>          <invert> de douane    commerciale   directs </invert></l><l>              '+(it.user.taxeA.toString().padStart(2))+' %         '+(it.user.taxeB.toString().padStart(2))+' %         '+(it.user.taxeC.toString().padStart(2))+' %</l><l>            '+(it.user.gains.taxeA.toString().padStart(6))+'       '+(it.user.gains.taxeB.toString().padStart(6))+'       '+(it.user.gains.taxeC.toString().padStart(6))+'</l><l></l><l>  <invert>  Investissements    Nombre       Profits      Coût </invert></l><l> 1) Champs de foire  '+(it.user.foires.toString().padStart(7))+'         '+(it.user.gains.gainFoires.toString().padStart(6))+'       1000</l><l> 2) Moulins à grain  '+(it.user.moulins.toString().padStart(7))+'         '+(it.user.gains.gainMoulins.toString().padStart(6))+'       2000</l><l> 3) Fonderies        '+(it.user.fonderies.toString().padStart(7))+'         '+(it.user.gains.gainFonderies.toString().padStart(6))+'       7000</l><l> 4) Chantiers navals '+(it.user.chantiers.toString().padStart(7))+'         '+(it.user.gains.gainChantiers.toString().padStart(6))+'       8000</l><l> 5) Hommes d\'armes   '+(it.user.ost.toString().padStart(7))+'         '+(it.user.gains.gainOst.toString().padStart(6))+'          8</l><l> 6) Palais           '+(it.user.palais.toString().padStart(7))+'% terminé             5000</l><l></l><l></l>';return out;
}

/***/ }),

/***/ 2913:
/*!*******************************!*\
  !*** ./src/templates/4_c.tpl ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<l>Quelle valeur pour les impôts directs (50% max) ? '+(it.KB_BUFFER)+'&#9617;</l>';if(it.game.errors.includes("TAXE_C_TOO_HIGH")){out+='<l>Vous ne pouvez dépasser les 50%.</l>';}return out;
}

/***/ }),

/***/ 8387:
/*!*******************************!*\
  !*** ./src/templates/4_d.tpl ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<l>Quoi ou &#8617;? </l>';return out;
}

/***/ }),

/***/ 2853:
/*!*******************************!*\
  !*** ./src/templates/4_e.tpl ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<l>Combien ? '+(it.KB_BUFFER)+'&#9617;</l>';if(it.game.errors.includes("NOT_ENOUGHT_MONEY")){out+='<l>Vous n\'avez pas assez d\'argent.</l>';}if(it.game.errors.includes("NOT_ENOUGHT_NOBLES")){out+='<l>Vous n\'avez pas assez de nobles.</l>';}return out;
}

/***/ }),

/***/ 3633:
/*!*****************************!*\
  !*** ./src/templates/5.tpl ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<l>          &#8617; ou ennemi à attaquer (donner n°) :</l>';if(it.game.errors.includes("FIGHT_MYSELF")){out+='<l>Vous ne pouvez vous attaquer.</l>';}if(it.game.errors.includes("NOT_ENOUGHT_OST")){out+='<l>Vous n\'avez pas assez de soldat.</l>';}if(it.game.errors.includes("NOT_ENOUGHT_NOBLES")){out+='<l>Vous n\'avez pas assez de nobles.</l>';}return out;
}

/***/ }),

/***/ 2088:
/*!*******************************!*\
  !*** ./src/templates/5_b.tpl ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<l>          &#8617; ou Combien d\'hommes '+(it.user.ost)+'? '+(it.KB_BUFFER)+'&#9617;</l>';return out;
}

/***/ }),

/***/ 586:
/*!**********************************!*\
  !*** ./src/templates/5_base.tpl ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<l></l><l></l><l></l><l>          <invert> Terres vassales </invert></l><l></l><l></l>';var arr1=it.game.getOpponentsAsArray();if(arr1){var opponent,index=-1,l1=arr1.length-1;while(index<l1){opponent=arr1[index+=1];out+='<l>          '+(index+1)+') '+(opponent.getCountry().padEnd(20," "))+'      '+(opponent.getLand().toString().padStart(7," "))+'</l>';} } out+='<l></l><l></l><l></l><l></l><l></l>';return out;
}

/***/ }),

/***/ 2682:
/*!*******************************************!*\
  !*** ./src/templates/5_combat_result.tpl ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<l></l><l></l><l></l><l></l><l></l><c>Expédition terminée</c><l></l><l>              '+(it.userAttaker.rank)+' '+(it.userAttaker.name)+' ';if(it.win){out+='gagne';}else if(true){out+='perd';}out+='.</l>';if(it.win){out+='<l>Grace à cette victoire vous arrivez à conquérir '+(it.land)+' arpents</l>';}if(!it.win){out+='<l>Malgré cette défaite vous arrivez quand même à conquérir '+(it.land)+' arpents</l>';}if(it.death){out+='<l>Dans tous les cas votre puissance de feu terrasse votre adversaire et son royaume qui s\'effondre dans le chaos.</l>';}out+='<l>          &#8617;</l>';return out;
}

/***/ }),

/***/ 2810:
/*!*****************************************!*\
  !*** ./src/templates/5_combat_show.tpl ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<l></l><l></l><l></l><l></l><l></l><c>Combat</c><l></l><l>             Attanquant : '+(it.ostAttaker)+'</l><l>              Defenseur : '+(it.ostDefender)+'</l>';return out;
}

/***/ }),

/***/ 904:
/*!**********************************!*\
  !*** ./src/templates/6_base.tpl ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(it
) {
var out='<l></l><c><invert>Situation à la fin de l\'an '+(game.year)+'</invert></c><l></l><l>              Nobles     Hommes    Marchands   Serfs   Terres   Palais</l><l>                         d\'armes</l><l></l>';var arr1=it.game.getUsersAsArray();if(arr1){var user,index=-1,l1=arr1.length-1;while(index<l1){user=arr1[index+=1];out+='<invert><l> '+(user.getRank())+' '+(user.getName())+' de '+(user.getCountry())+'</l></invert><l>             '+(user.getNobles().toString().padStart(4," "))+'     '+(user.getOst().toString().padStart(8," "))+'       '+(user.getMarchands().toString().padStart(4," "))+' '+(user.getPeople().toString().padStart(10," "))+' '+(user.getLand().toString().padStart(8," "))+'    '+(user.getPalais().toString().padStart(4," "))+'%</l>';} } out+='<l></l><l>               &#8617;</l>';return out;
}

/***/ }),

/***/ 7654:
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ 5426);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 3379:
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 9216:
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 3565:
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 7795:
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 4589:
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ 533:
/*!*****************************!*\
  !*** ./src/Combat.class.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Combat": () => (/* binding */ Combat)
/* harmony export */ });
/* harmony import */ var _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Part_Abstract.class */ 6262);
/* harmony import */ var _templates_5_combat_show_tpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/5_combat_show.tpl */ 2810);





class Combat extends _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_0__.Party {

  static execute(userDefender, userAttaker, ostAttaker, start = true){
    return new Promise((resolve)=>{
      //console.info("execute(" + userDefender + ", " + userAttaker + ", " + ostAttaker + ")");
      //console.info(userDefender);
      //console.info(userAttaker);
      //console.info("execute(" + userDefender.getName() + ", " + userAttaker.getName() + ", " + ostAttaker + ")");
      let ostDefender = userDefender.getOst();
      let ostEfficiencyDefender = userDefender.getSatisfactionOst() / 100;
      let ostAttakerRemaining = userAttaker.getOst() - ostAttaker;
      let ostEfficiencyAttaker = userAttaker.getSatisfactionOst() / 100;
      let land = 0;
      if(start){
        land = (game.rollDiceFloat(0,10) * ostAttaker *  ostEfficiencyAttaker / 10) + (game.rollDiceFloat(0,10) * ((ostAttaker * ostEfficiencyAttaker) - ostDefender));
        land = Math.floor(land);
        if(land < 0){
          land = game.rollDiceInteger(0,10)
        }
        //console.info("potential land : " + land)
      }

      let balance = ostAttaker * ostEfficiencyAttaker * 100 / (ostAttaker * ostEfficiencyAttaker  + ostDefender * ostEfficiencyDefender);
      if(balance < 20){
        balance = 20;
      }
      if(balance > 80){
        balance = 80;
      }

      let dice = game.rollDiceInteger();
      //console.info("avantage attacker vs defender = " + balance + "% , dice = " + dice)

      if(ostAttaker <= 0 || ostDefender <= 0){
        if(start){
          return resolve(Combat.getResults(userDefender.getOst() == 0, land, userDefender, userAttaker));
        } else {
          return resolve();
        }
      }

      if(dice < balance){
        //Defender -1
        //console.info("ostDefender -- : " + ostDefender);
        ostDefender--;
        userDefender.addOst(-1);
      } else {
        //Attacker -1
        //console.info("ostAttaker -- : " + ostAttaker);
        ostAttaker--;
        userAttaker.addOst(-1);
      }
      //console.info("remaining force attaker : " + (ostAttakerRemaining + ostAttaker) + " vs " + ostDefender);


      _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_0__.Party.refreshWithTemplate(_templates_5_combat_show_tpl__WEBPACK_IMPORTED_MODULE_1__["default"], {"ostAttaker": ostAttaker, "ostDefender": ostDefender});

      Combat.sleep(200).then(() => {
        Combat.execute(userDefender, userAttaker, ostAttaker, false).then(() => {
            if(start){
              return resolve(Combat.getResults(userDefender.getOst() == 0, land, userDefender, userAttaker));
            } else {
              return resolve();
            }
        })
      })
    })
  }

  static getResults(win, land, userDefender, userAttaker){
    if(win){
      land = land * 3;
    }

    if(land > userDefender.getLand()){
      //console.info("rectif land to " + userDefender.getLand())
      land = userDefender.getLand();
    }

    //console.info("captured land : " + land);
    userAttaker.addLand(land);

    //If death of defender
    // 1 chance on 2 if attaker took +25% of land
    // or if there is no more land
    let death = false;
    if((userDefender.getLand() / 4 < land && game.rollDiceInteger(0,1)) || userDefender.getLand() <= land){
      death = true;
      game.kill(userDefender);
    } else {
      userDefender.addLand(-1 * land);
    }


    return {"win" : win, "land" : land, "userAttaker": userAttaker, "death" : death};
  }

  static sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}


/***/ }),

/***/ 250:
/*!****************************!*\
  !*** ./src/Const.class.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Const": () => (/* binding */ Const)
/* harmony export */ });

class Const {

    static get landPrice(){ return 2;}
    static get foirePrice(){ return 1000;}
    static get moulinPrice(){ return 2000;}
    static get fonderiePrice(){ return 7000;}
    static get chantierPrice(){ return 8000;}
    static get ostPrice(){ return 5;}
    static get palaisPrice(){ return 5000;}


    static get KEYBOARD_INT() { return [96,97,98,99,100,101,102,103,104,105,47,48,49,50,51,52,53,54,55,56,57]; } // 0-9
    static get KEYBOARD_ALPHA() { return [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90]; } // a-z
    static get KEYBOARD_SYMB() { return [32,110,188,59,58,161,170]; } // space dot , ; : ! *
    static get KEYBOARD_INT_TYPING() { return Const.KEYBOARD_INT.concat([8]); } // 0-9 + backspace for typing
    static get KEYBOARD_NAME_TYPING() { return Const.KEYBOARD_INT.concat(Const.KEYBOARD_ALPHA).concat(Const.KEYBOARD_SYMB).concat([8]); } // 0-9 + alpha + some symbol + backspace for typing
    static get KEYBOARD_PRICE_TYPING() { return Const.KEYBOARD_INT.concat([8,110]); }// 0-9 + backspace + dot key for typing

    static get KEYBOARD_RETURN() { return [13]; } // ENTER/RETURN ↩
    static get KEYBOARD_ONE() { return [97,49]; } // 1
    static get KEYBOARD_TWO() { return [98,50]; } // 2
    static get KEYBOARD_THREE() { return [99,51]; } // 3
    static get KEYBOARD_OY() { return [79,80]; } // o/y
    static get KEYBOARD_N() { return [78]; } // n
}


/***/ }),

/***/ 6794:
/*!*****************************!*\
  !*** ./src/Errors.class.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Errors": () => (/* binding */ Errors)
/* harmony export */ });
class Errors {
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


/***/ }),

/***/ 9148:
/*!***************************!*\
  !*** ./src/Game.class.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _User_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.class */ 3836);
/* harmony import */ var _Market_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Market.class */ 3664);



class Game {

  reset(){
    this.users = new Map();
    this.users.set(1,new _User_class__WEBPACK_IMPORTED_MODULE_0__.User(1, "Hugues", "France"));
    this.users.set(2,new _User_class__WEBPACK_IMPORTED_MODULE_0__.User(2, "Arthur", "Bretagne"));
    this.users.set(3,new _User_class__WEBPACK_IMPORTED_MODULE_0__.User(3, "Othon", "Germanie"));
    this.users.set(4,new _User_class__WEBPACK_IMPORTED_MODULE_0__.User(4, "Rodrigue", "Castille"));
    this.users.set(5,new _User_class__WEBPACK_IMPORTED_MODULE_0__.User(5, "Ivan", "Moscovie"));
    this.users.set(6,new _User_class__WEBPACK_IMPORTED_MODULE_0__.User(6, "Kubéni", "Perse"));
    this.barbares = new _User_class__WEBPACK_IMPORTED_MODULE_0__.User(0, "Barbares", "Barbares", 6000);
    this.market = new _Market_class__WEBPACK_IMPORTED_MODULE_1__.Market();
    this.year = 1;
    this.rats = 0;
    this.meteo = null;
    this.currentPlayer = 1;
    this.errors = [];
  }

  /**
   * dead or alive user
   */
  getUsers(){
    return this.users;
  }

  getUsersAsArray(){
    return [... this.getUsers().values()];
  }

  getUserById(userId){
    let users = [ ... this.users.values() ];
    for (var pos in users) {
      if(users[pos].getId() == userId){
        return users[pos];
      }
    }
    return null;
  }

  getCurrentUser(){
    return this.users.get(this.currentPlayer);
  }

  updateUser(user){
    this.users.set(user.getId(), user);
  }

  getOpponents(){
    let i = 1;
    let opponents = new Map();
    if(this.barbares.getLand() > 0){
      opponents.set(i, this.barbares);
      i++;
    }
    let users = [ ... this.getUsers().values() ];
    for (var pos in users) {
      opponents.set(i, users[pos]);
      i++;
    }
    return opponents;
  }

  getOpponentsAsArray(){
    return [... this.getOpponents().values()];
  }

  getSalesInArray(){
    return this.market.getSalesInArray();
  }

  getMarket(){
    return this.market;
  }

  setMeteo(meteo){
    this.meteo = meteo;
  }
  getMeteo(){
    return this.meteo;
  }

  getBarbares(){
    return this.barbares;
  }

  setRats(rats){
    this.rats = rats
  }
  getRats(){
    return this.rats;
  }

  nextYear(){
    this.year++;
    const i = this.users.keys();
    for (let u of i) {
        this.users.get(u).resetNewYear();
    }
  }

  rollDiceInteger(start = 0, end = 100){
    return Math.floor(Math.random() * (end - start)) + start;
  }

  rollDiceFloat(start = 0, end = 100){
    return (Math.random() * (end - start)) + start;
  }

  purgeErrors(){
    this.errors = [];
  }

  addError(error){
    this.errors.push(error);
  }

  resolveMarketOffer(quantity){
    //console.info("resolveMarketOffer() " + quantity);
    let sale = this.market.getSales().get(this.market.getOffer()["marketId"]);
    let seller = this.users.get(sale['idUser']);
    let buyer = this.getCurrentUser()

    seller.addMoney(sale.price * quantity);
    buyer.addMoney(-1 * (sale.price * quantity));
    buyer.addSupply(quantity);
    sale.boisseaux = sale.boisseaux - quantity;

    if(sale.boisseaux == 0){
      this.market.removeSale(this.market.getOffer()["marketId"]);
    } else {
      this.market.getSales().set(this.market.getOffer()["marketId"], sale);
    }
    this.users.set(seller.getId(), seller);
    this.users.set(buyer.getId(), buyer);
  }

  kill(user){
    //console.info("kill() " + user.getId());

    if(user.getId() == 0){
      user.setLand(0);
    }

    this.users.delete(user.getId());
    this.market.removeSaleOfUser(user.getId());
  }


}


/***/ }),

/***/ 8446:
/*!*************************!*\
  !*** ./src/KB.class.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KB": () => (/* binding */ KB)
/* harmony export */ });
/* harmony import */ var _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Part_Abstract.class */ 6262);



class KB {

  static listen(m, t = [], p = {}, typing = false){
    KB.buffer = "";
    KB.stop()

    let vars = {"mapping":m, "templates":t, "additionnalParameters":p, "typing":typing};
    KB.binder = KB.keyboardBinder.bind(null, vars);
    document.addEventListener('keydown', KB.binder, false);
  }

  static listenTyping(m,t,p){
    KB.listen(m,t,p,true);
  }

  static stop(){
    document.removeEventListener('keydown',KB.binder);
  }

  static startTyping(key){
    //console.info("KB.startTyping(" + this._buffer + ")");
    //console.info("Buffer avant = " + KB.buffer);
    if(key == 8) {
      KB.buffer = KB.buffer.substring(0, KB.buffer.length - 1);
    } else {
      KB.buffer += KB.eventKeyToJScode(key);
    }
    //console.info("Buffer après = " + KB.buffer);
  }

  static keyboardBinder(vars, event){

    //Avoid anything but F5
    if(event.keyCode !== 116){
      event.preventDefault();
    }

    vars.mapping.forEach((map) => {
      if(map.key.includes(event.keyCode)){

        if(!vars.typing){
          KB.stop();
        }

        if(map.callback === KB.startTyping){
            KB.startTyping(event.keyCode);
            if(event.keyCode !== 13){
                _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_0__.Party.refreshWithTemplates(vars.templates);
            }
            return;
        }

        _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_0__.Party.refreshWithTemplates(vars.templates);
        return map.callback(KB.eventKeyToJScode(event.keyCode), vars.additionnalParameters);
      }
    })
  }

  static eventKeyToJScode(key){
    if(key == 110) {return ".";} // dot
    return String.fromCharCode((96 <= key && key <= 105)? key-48 : key);
  }

  static isFunction(functionToCheck) {
   return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
  }

  get buffer() {
    return this._buffer || "";
  }

  set buffer(v) {
    this._buffer = v;
  }
  get binder() {
    return this._binder || null;
  }

  set binder(v) {
    this._binder = v;
  }
}


/***/ }),

/***/ 3664:
/*!*****************************!*\
  !*** ./src/Market.class.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Market": () => (/* binding */ Market)
/* harmony export */ });
class Market {
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
    return [... this.sales.values()];
  }

  getSaleOfUser(idUser){
    //console.info("getSaleOfUser() " + idUser);
    let liste = this.getSalesInArray();
    for( var pos in liste){
      if(liste[pos]['idUser'] === idUser){
        return [parseInt(pos)+1, liste[pos]];
      }
    }
    return null;
  }

  removeSaleOfUser(idUser){
    //console.info("removeSaleOfUser() " + idUser);
    let liste = this.getSalesInArray();
    for( var pos in liste){
      if(liste[pos]['idUser'] === idUser){
        this.removeSale(parseInt(pos)+1);
      }
    }
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
    let liste = this.getSalesInArray();
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


/***/ }),

/***/ 8489:
/*!**********************************!*\
  !*** ./src/Part0_Start.class.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Start": () => (/* binding */ Start)
/* harmony export */ });
/* harmony import */ var _KB_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KB.class */ 8446);
/* harmony import */ var _Const_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Const.class */ 250);
/* harmony import */ var _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Part_Abstract.class */ 6262);
/* harmony import */ var _Part1_Tuto_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Part1_Tuto.class */ 844);
/* harmony import */ var _Part2_Food_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Part2_Food.class */ 5340);
/* harmony import */ var _User_utils_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User.utils.class */ 8509);
/* harmony import */ var _templates_0_tpl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/0.tpl */ 684);
/* harmony import */ var _templates_0_1_tpl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templates/0_1.tpl */ 4255);
/* harmony import */ var _templates_0_1a_tpl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates/0_1a.tpl */ 4561);










class Start extends _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party {

  static home(){
    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listen([
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_OY, callback: _Part1_Tuto_class__WEBPACK_IMPORTED_MODULE_3__.Tuto.startTuto}, // O/Y
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_N, callback: Start.askNumberOfPlayer} // N
    ]);
    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplate(_templates_0_tpl__WEBPACK_IMPORTED_MODULE_6__["default"]);
  }

  static askNumberOfPlayer(){
    //console.info("askNumberOfPlayer")
    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listen([
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_ONE, callback: Start.askNameOfPlayer} // 1
    ]);
    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplate(_templates_0_1_tpl__WEBPACK_IMPORTED_MODULE_7__["default"]);
  }

  static askNameOfPlayer(){
    //console.info("askNameOfPlayer")
    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listenTyping([
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_NAME_TYPING, callback: _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.startTyping}, // 1
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: Start.savePlayer}, // 1
    ], [_templates_0_1a_tpl__WEBPACK_IMPORTED_MODULE_8__["default"]]);
    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplate(_templates_0_1a_tpl__WEBPACK_IMPORTED_MODULE_8__["default"]);
  }

  static savePlayer(){
    let input = _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.buffer;
    if(input != "" && input =="J"){
      game.getCurrentUser().setSexe(1);
    }

    game.getCurrentUser().setName(_User_utils_class__WEBPACK_IMPORTED_MODULE_5__.UserUtils.getName(game.getCurrentUser(), input));

    _Part2_Food_class__WEBPACK_IMPORTED_MODULE_4__.Food.meteoAndRats();
  }
}


/***/ }),

/***/ 844:
/*!*********************************!*\
  !*** ./src/Part1_Tuto.class.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tuto": () => (/* binding */ Tuto)
/* harmony export */ });
/* harmony import */ var _KB_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KB.class */ 8446);
/* harmony import */ var _Const_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Const.class */ 250);
/* harmony import */ var _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Part_Abstract.class */ 6262);
/* harmony import */ var _Part0_Start_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Part0_Start.class */ 8489);
/* harmony import */ var _templates_1_tuto1_tpl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/1_tuto1.tpl */ 2076);
/* harmony import */ var _templates_1_tuto2_tpl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates/1_tuto2.tpl */ 905);
/* harmony import */ var _templates_1_tuto3_tpl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/1_tuto3.tpl */ 2804);
/* harmony import */ var _templates_1_tuto4_tpl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templates/1_tuto4.tpl */ 3150);
/* harmony import */ var _templates_1_tuto5_tpl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates/1_tuto5.tpl */ 7290);
/* harmony import */ var _templates_1_tuto6_tpl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templates/1_tuto6.tpl */ 7345);
/* harmony import */ var _templates_1_tuto7_tpl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./templates/1_tuto7.tpl */ 634);













class Tuto extends _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party {

  static startTuto(){
    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listen([
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: Tuto.tuto2}, // ↩
    ]);
    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplate(_templates_1_tuto1_tpl__WEBPACK_IMPORTED_MODULE_4__["default"]);
  }

  static tuto2(){
    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listen([
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: Tuto.tuto3}, // ↩
    ]);
    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplate(_templates_1_tuto2_tpl__WEBPACK_IMPORTED_MODULE_5__["default"]);
  }

  static tuto3(){
    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listen([
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: Tuto.tuto4}, // ↩
    ]);
    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplate(_templates_1_tuto3_tpl__WEBPACK_IMPORTED_MODULE_6__["default"]);
  }

  static tuto4(){
    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listen([
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: Tuto.tuto5}, // ↩
    ]);
    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplate(_templates_1_tuto4_tpl__WEBPACK_IMPORTED_MODULE_7__["default"]);
  }

  static tuto5(){
    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listen([
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: Tuto.tuto6}, // ↩
    ]);
    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplate(_templates_1_tuto5_tpl__WEBPACK_IMPORTED_MODULE_8__["default"]);
  }

  static tuto6(){
    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listen([
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: Tuto.tuto7}, // ↩
    ]);
    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplate(_templates_1_tuto6_tpl__WEBPACK_IMPORTED_MODULE_9__["default"]);
  }

  static tuto7(){
    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listen([
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: Tuto.tuto_end}, // ↩
    ]);
    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplate(_templates_1_tuto7_tpl__WEBPACK_IMPORTED_MODULE_10__["default"]);
  }

  static tuto_end(){
    _Part0_Start_class__WEBPACK_IMPORTED_MODULE_3__.Start.askNumberOfPlayer();
  }
}


/***/ }),

/***/ 5340:
/*!*********************************!*\
  !*** ./src/Part2_Food.class.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Food": () => (/* binding */ Food)
/* harmony export */ });
/* harmony import */ var _KB_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KB.class */ 8446);
/* harmony import */ var _Const_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Const.class */ 250);
/* harmony import */ var _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Part_Abstract.class */ 6262);
/* harmony import */ var _Errors_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Errors.class */ 6794);
/* harmony import */ var _Part3_Demography_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Part3_Demography.class */ 6267);
/* harmony import */ var _User_utils_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User.utils.class */ 8509);
/* harmony import */ var _templates_0_1b_tpl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/0_1b.tpl */ 7531);
/* harmony import */ var _templates_2_base_tpl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templates/2_base.tpl */ 8453);
/* harmony import */ var _templates_2_tpl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates/2.tpl */ 1860);
/* harmony import */ var _templates_2_1_tpl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templates/2_1.tpl */ 8923);
/* harmony import */ var _templates_2_1b_tpl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./templates/2_1b.tpl */ 4832);
/* harmony import */ var _templates_2_2_tpl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./templates/2_2.tpl */ 8470);
/* harmony import */ var _templates_2_2b_tpl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./templates/2_2b.tpl */ 4988);
/* harmony import */ var _templates_2_3_tpl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./templates/2_3.tpl */ 4462);
/* harmony import */ var _templates_2_4_tpl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./templates/2_4.tpl */ 3023);
/* harmony import */ var _templates_2_5_tpl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./templates/2_5.tpl */ 849);


















class Food extends _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party{

  static meteoAndRats(){
    //console.info("step2Meteo")
    game.setMeteo(game.rollDiceInteger(1,6));

    game.setRats(game.rollDiceInteger(5,30));
    game.getCurrentUser().setHarvest(_User_utils_class__WEBPACK_IMPORTED_MODULE_5__.UserUtils.calculNewHarvest(game.getCurrentUser()));
    game.getCurrentUser().addSupply(_User_utils_class__WEBPACK_IMPORTED_MODULE_5__.UserUtils.calculNewSupply(game.getCurrentUser()));

    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplate(_templates_0_1b_tpl__WEBPACK_IMPORTED_MODULE_6__["default"]);
    //Explicitly remove event listening
    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.stop();
    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.pause(Food.choiceMarket);
  }

  // Manage Market & food
  static choiceMarket(){
    //console.info("step2")
    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listen([
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_ONE, callback: Food.buyOnMarket}, // 1
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_TWO, callback: Food.sellOnMarket}, // 2
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_THREE, callback: Food.sellLand}, // 3
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: Food.giveToOst}, // ↩
    ]);

    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplates([_templates_2_base_tpl__WEBPACK_IMPORTED_MODULE_7__["default"], _templates_2_tpl__WEBPACK_IMPORTED_MODULE_8__["default"]]);
  }

  static buyOnMarket(){
    //console.info("buy market");
    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listen([
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_INT, callback: Food.buyOnMarketFrom}, // 0-9
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: Food.choiceMarket}, // ↩
    ]);
    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplates([_templates_2_base_tpl__WEBPACK_IMPORTED_MODULE_7__["default"], _templates_2_1_tpl__WEBPACK_IMPORTED_MODULE_9__["default"]]);
  }

  static buyOnMarketFrom(from){
    //console.info("buyOnMarketFrom " + from);
    let marketId=parseInt(from);
    let market=game.getMarket();

    //if empty
    if( marketId === "") {
      return Food.choiceMarket();
    }

    //if vendor doesn't exist
    if(!market.getSales().has(marketId)) {
      return Food.buyOnMarket();
    }

    //If Myself
    if(market.getSales().get(marketId)["idUser"] === game.getCurrentUser().getId()){
      game.addError(_Errors_class__WEBPACK_IMPORTED_MODULE_3__.Errors.cantBuyMyself());
      return Food.buyOnMarket();
    }

    market.createOffer(game.getCurrentUser().getId(), marketId);

    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listenTyping([
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_INT_TYPING, callback: _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.startTyping}, // 0-9 + backspace
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: Food.buyOnMarketFromAndHowMuch}, // ↩
    ], [_templates_2_base_tpl__WEBPACK_IMPORTED_MODULE_7__["default"], _templates_2_1b_tpl__WEBPACK_IMPORTED_MODULE_10__["default"]]);

    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplates([_templates_2_base_tpl__WEBPACK_IMPORTED_MODULE_7__["default"], _templates_2_1b_tpl__WEBPACK_IMPORTED_MODULE_10__["default"]]);
  }

  static buyOnMarketFromAndHowMuch(){
    //console.info("buyOnMarketFromAndHowMuch");
    let quantity=parseInt(_KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.buffer);
    let market=game.getMarket();

    let offer = market.getOffer();
    let sale = market.getSales().get(offer["marketId"]);

    if(isNaN(quantity)){
      return Food.choiceMarket();
    }

    if(sale["boisseaux"] < quantity) {
      game.addError(_Errors_class__WEBPACK_IMPORTED_MODULE_3__.Errors.notEnoughtStockOnMarket());
      return Food.buyOnMarketFrom(offer["marketId"]);
    }

    if(sale["price"] * quantity > game.getCurrentUser().getMoney()) {
      game.addError(_Errors_class__WEBPACK_IMPORTED_MODULE_3__.Errors.notEnoughtMoney());
      return Food.buyOnMarketFrom(offer["marketId"]);
    }

    game.resolveMarketOffer(quantity);

    Food.choiceMarket();
  }


  static sellOnMarket(){
    //console.info("sell market");
    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listenTyping([
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_INT_TYPING, callback: _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.startTyping}, // 0-9 + backspace
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: Food.sellOnMarketWithPrice}, // ↩
    ], [_templates_2_base_tpl__WEBPACK_IMPORTED_MODULE_7__["default"], _templates_2_2_tpl__WEBPACK_IMPORTED_MODULE_11__["default"]]);

    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplates([_templates_2_base_tpl__WEBPACK_IMPORTED_MODULE_7__["default"], _templates_2_2_tpl__WEBPACK_IMPORTED_MODULE_11__["default"]]);
  }

  static sellOnMarketWithPrice(quantityParam){
    //console.info("sellOnMarketWithPrice");
    let market=game.getMarket();
    let quantity=parseInt(_KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.buffer);
    if(Number.isInteger(quantityParam)){
      quantity = quantityParam;
    }

    if(isNaN(quantity)){
      return Food.choiceMarket();
    }

    if(quantity > game.getCurrentUser().getSupply()){
        game.addError(_Errors_class__WEBPACK_IMPORTED_MODULE_3__.Errors.notEnoughtStock());
        return Food.sellOnMarket();
    }

    market.createPromise(game.getCurrentUser().getId(), quantity);
    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listenTyping([
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_PRICE_TYPING, callback: _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.startTyping}, // 0-9 + backspace + dot
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: Food.doSellMarketWithPrice}, // ↩
    ], [_templates_2_base_tpl__WEBPACK_IMPORTED_MODULE_7__["default"], _templates_2_2b_tpl__WEBPACK_IMPORTED_MODULE_12__["default"]]);

    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplates([_templates_2_base_tpl__WEBPACK_IMPORTED_MODULE_7__["default"], _templates_2_2b_tpl__WEBPACK_IMPORTED_MODULE_12__["default"]]);
  }

  static doSellMarketWithPrice(){
    //console.info("doSellMarketWithPrice");
    let market=game.getMarket();
    let quantity = market.getPromise().quantity;
    let price=Number.parseFloat(_KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.buffer).toFixed(2);

    if(isNaN(price)){
      return Food.choiceMarket()
    }

    if(price > 15){
      game.addError(_Errors_class__WEBPACK_IMPORTED_MODULE_3__.Errors.priceTooHigh());
      return Food.sellOnMarketWithPrice(quantity);
    }

    //console.info("quantity : " + quantity)
    //console.info("price : " + price)
    market.addSales(game.getCurrentUser().getId(), game.getCurrentUser().getCountry(), quantity, price);
    game.getCurrentUser().addSupply(-1 * quantity);
    Food.choiceMarket();
  }




  //Propose selling Land
  static sellLand(){
    //console.info("sell land")
    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listenTyping([
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_INT_TYPING, callback: _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.startTyping}, // 0-9 + backspace
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: Food.doSellLand}, // ↩
    ], [_templates_2_base_tpl__WEBPACK_IMPORTED_MODULE_7__["default"], _templates_2_3_tpl__WEBPACK_IMPORTED_MODULE_13__["default"]]);

    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplates([_templates_2_base_tpl__WEBPACK_IMPORTED_MODULE_7__["default"], _templates_2_3_tpl__WEBPACK_IMPORTED_MODULE_13__["default"]]);
  }

  // Do selling land
  static doSellLand(){
    //console.info("go sell market")
    let keyboard = _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.buffer;
    if(keyboard !== ""){
      let user = game.getCurrentUser();
      if(user.getLand() < keyboard){
        game.addError(_Errors_class__WEBPACK_IMPORTED_MODULE_3__.Errors.notEnoughtLand())
        return Food.sellLand();
      } else {
        user.addLand(-keyboard);
        user.addMoney(_Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.landPrice * keyboard);
      }
    }
    Food.choiceMarket();
  }

  static giveToOst(){
    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listenTyping([
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_INT_TYPING, callback: _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.startTyping}, // 0-9 + backspace
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: Food.doGiveToOst}, // ↩
    ], [_templates_2_base_tpl__WEBPACK_IMPORTED_MODULE_7__["default"], _templates_2_4_tpl__WEBPACK_IMPORTED_MODULE_14__["default"]]);
    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplates([_templates_2_base_tpl__WEBPACK_IMPORTED_MODULE_7__["default"], _templates_2_4_tpl__WEBPACK_IMPORTED_MODULE_14__["default"]]);
  }

  static doGiveToOst(){

    let quantity=parseInt(_KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.buffer);
    if(isNaN(quantity)){
      quantity = 0;
    }

    if(quantity > game.getCurrentUser().getSupply()){
        game.addError(_Errors_class__WEBPACK_IMPORTED_MODULE_3__.Errors.notEnoughtStock())
        return Food.giveToOst();
    }

    game.getCurrentUser().addSupply(-1 * quantity);
    game.getCurrentUser().setSupplyOst(quantity);

    return Food.giveToPeople();
  }

  static giveToPeople(){
    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listenTyping([
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_INT_TYPING, callback: _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.startTyping}, // 0-9 + backspace
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: Food.doGiveToPeople}, // ↩
    ], [_templates_2_base_tpl__WEBPACK_IMPORTED_MODULE_7__["default"], _templates_2_5_tpl__WEBPACK_IMPORTED_MODULE_15__["default"]]);
    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplates([_templates_2_base_tpl__WEBPACK_IMPORTED_MODULE_7__["default"], _templates_2_5_tpl__WEBPACK_IMPORTED_MODULE_15__["default"]]);
  }

  static doGiveToPeople(){

    let quantity=parseInt(_KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.buffer);
    if(isNaN(quantity)){
      quantity = 0;
    }


    if(quantity > game.getCurrentUser().getSupply()){
      //console.info(Errors.notEnoughtStock());
      game.addError(_Errors_class__WEBPACK_IMPORTED_MODULE_3__.Errors.notEnoughtStock())
      return Food.giveToPeople();
    }

    if(quantity < game.getCurrentUser().getNeedPeople() && quantity < (0.1 * game.getCurrentUser().getSupply())){
      //console.info(Errors.atLast10Percent());
      game.addError(_Errors_class__WEBPACK_IMPORTED_MODULE_3__.Errors.atLast10Percent())
      return Food.giveToPeople();
    }

    game.getCurrentUser().addSupply(-1 * quantity);
    game.getCurrentUser().setSupplyPeople(quantity);

    return _Part3_Demography_class__WEBPACK_IMPORTED_MODULE_4__.Demography.demography();
  }
}


/***/ }),

/***/ 6267:
/*!***************************************!*\
  !*** ./src/Part3_Demography.class.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Demography": () => (/* binding */ Demography)
/* harmony export */ });
/* harmony import */ var _KB_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KB.class */ 8446);
/* harmony import */ var _Const_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Const.class */ 250);
/* harmony import */ var _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Part_Abstract.class */ 6262);
/* harmony import */ var _User_utils_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User.utils.class */ 8509);
/* harmony import */ var _Part4_Invest_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Part4_Invest.class */ 2043);
/* harmony import */ var _templates_3_tpl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates/3.tpl */ 1101);








class Demography extends _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party {

  //Démographie
  static demography(){
    //console.info("demography")

    let satisfactionPeople = _User_utils_class__WEBPACK_IMPORTED_MODULE_3__.UserUtils.calculSatisfaction(game.getCurrentUser().getNeedPeople(),game.getCurrentUser().getSupplyPeople());
    let satisfactionOst = _User_utils_class__WEBPACK_IMPORTED_MODULE_3__.UserUtils.calculSatisfaction(game.getCurrentUser().getNeedOst(),game.getCurrentUser().getSupplyOst());

    game.getCurrentUser().setSatisfactionPeople(satisfactionPeople);
    game.getCurrentUser().setSatisfactionOst(satisfactionOst);

    let randomDeath = _User_utils_class__WEBPACK_IMPORTED_MODULE_3__.UserUtils.calculDeaths(game.getCurrentUser());
    let randomBirth = _User_utils_class__WEBPACK_IMPORTED_MODULE_3__.UserUtils.calculBirths(game.getCurrentUser());
    let randomMigrant = _User_utils_class__WEBPACK_IMPORTED_MODULE_3__.UserUtils.calculMigrants(game.getCurrentUser());
    let randomStarvingPeople = _User_utils_class__WEBPACK_IMPORTED_MODULE_3__.UserUtils.calculStarvingPeople(game.getCurrentUser());
    let randomStarvingOst = _User_utils_class__WEBPACK_IMPORTED_MODULE_3__.UserUtils.calculStarvingOst(game.getCurrentUser());

    let randomPeople = randomBirth - randomDeath + randomMigrant - randomStarvingPeople;

    game.getCurrentUser().addPeople(randomPeople);
    game.getCurrentUser().addOst(-1 * randomStarvingOst);

    let templateVars = {"randomDeath" : randomDeath, "randomBirth" : randomBirth,
                      "randomMigrant" : randomMigrant, "randomStarvingPeople" : randomStarvingPeople,
                      "randomStarvingOst" : randomStarvingOst, "randomPeople" : randomPeople };
    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listen([
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: _Part4_Invest_class__WEBPACK_IMPORTED_MODULE_4__.Invest.choiceTaxes}, // ↩
    ]);

    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplate(_templates_3_tpl__WEBPACK_IMPORTED_MODULE_5__["default"], templateVars);
  }

}


/***/ }),

/***/ 2043:
/*!***********************************!*\
  !*** ./src/Part4_Invest.class.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Invest": () => (/* binding */ Invest)
/* harmony export */ });
/* harmony import */ var _KB_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KB.class */ 8446);
/* harmony import */ var _Const_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Const.class */ 250);
/* harmony import */ var _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Part_Abstract.class */ 6262);
/* harmony import */ var _Part5_Lands_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Part5_Lands.class */ 1170);
/* harmony import */ var _Errors_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Errors.class */ 6794);
/* harmony import */ var _User_utils_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User.utils.class */ 8509);
/* harmony import */ var _templates_4_base_tpl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/4_base.tpl */ 9799);
/* harmony import */ var _templates_4_tpl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templates/4.tpl */ 719);
/* harmony import */ var _templates_4_a_tpl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates/4_a.tpl */ 3506);
/* harmony import */ var _templates_4_b_tpl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templates/4_b.tpl */ 819);
/* harmony import */ var _templates_4_c_tpl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./templates/4_c.tpl */ 2913);
/* harmony import */ var _templates_4_d_tpl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./templates/4_d.tpl */ 8387);
/* harmony import */ var _templates_4_e_tpl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./templates/4_e.tpl */ 2853);
















class Invest extends _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party {

  //Investissement
  static choiceTaxes(){
    if(game.getCurrentUser().getGains() == null){
      Invest.processMoney();
    }

    //console.info("step4")
    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listen([
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_ONE, callback: Invest.setTaxeA}, // 1
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_TWO, callback: Invest.setTaxeB}, // 2
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_THREE, callback: Invest.setTaxeC}, // 3
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: Invest.choiceInvest}, // ↩
    ]);

    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplates([_templates_4_base_tpl__WEBPACK_IMPORTED_MODULE_6__["default"], _templates_4_tpl__WEBPACK_IMPORTED_MODULE_7__["default"]]);
  }

  //Propose setting taxe A
  static setTaxeA(){
    //console.info("set Taxe A")
    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listenTyping([
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_INT_TYPING, callback: _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.startTyping}, // 0-9 + backspace
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: Invest.doSetTaxeA}, // ↩
    ], [_templates_4_base_tpl__WEBPACK_IMPORTED_MODULE_6__["default"], _templates_4_a_tpl__WEBPACK_IMPORTED_MODULE_8__["default"]]);

    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplates([_templates_4_base_tpl__WEBPACK_IMPORTED_MODULE_6__["default"], _templates_4_a_tpl__WEBPACK_IMPORTED_MODULE_8__["default"]]);
  }

  // Do set Taxe A
  static doSetTaxeA(){
    //console.info("do set taxe A")
    let keyboard = _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.buffer;
    if(keyboard !== ""){
      if(keyboard > 50){
        game.addError(_Errors_class__WEBPACK_IMPORTED_MODULE_4__.Errors.taxeATooHigh())
        return Invest.setTaxeA();
      } else {
        game.getCurrentUser().setTaxeA(keyboard);
      }
    }
    Invest.choiceTaxes();
  }

  //Propose setting taxe B
  static setTaxeB(){
    //console.info("set Taxe B")
    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listenTyping([
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_INT_TYPING, callback: _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.startTyping}, // 0-9 + backspace
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: Invest.doSetTaxeB}, // ↩
    ], [_templates_4_base_tpl__WEBPACK_IMPORTED_MODULE_6__["default"], _templates_4_b_tpl__WEBPACK_IMPORTED_MODULE_9__["default"]]);

    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplates([_templates_4_base_tpl__WEBPACK_IMPORTED_MODULE_6__["default"], _templates_4_b_tpl__WEBPACK_IMPORTED_MODULE_9__["default"]]);
  }

  // Do set Taxe B
  static doSetTaxeB(){
    //console.info("do set taxe B")
    let keyboard = _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.buffer;
    if(keyboard !== ""){
      if(keyboard > 50){
        game.addError(_Errors_class__WEBPACK_IMPORTED_MODULE_4__.Errors.taxeBTooHigh())
        return Invest.setTaxeB();
      } else {
        game.getCurrentUser().setTaxeB(keyboard);
      }
    }
    Invest.choiceTaxes();
  }

  //Propose setting taxe C
  static setTaxeC(){
    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listenTyping([
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_INT_TYPING, callback: _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.startTyping}, // 0-9 + backspace
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: Invest.doSetTaxeC}, // ↩
    ], [_templates_4_base_tpl__WEBPACK_IMPORTED_MODULE_6__["default"], _templates_4_c_tpl__WEBPACK_IMPORTED_MODULE_10__["default"]]);

    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplates([_templates_4_base_tpl__WEBPACK_IMPORTED_MODULE_6__["default"], _templates_4_c_tpl__WEBPACK_IMPORTED_MODULE_10__["default"]]);
  }

  // Do set Taxe C
  static doSetTaxeC(){
    //console.info("do set taxe C")
    let keyboard = _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.buffer;
    if(keyboard !== ""){
      if(keyboard > 50){
        game.addError(_Errors_class__WEBPACK_IMPORTED_MODULE_4__.Errors.taxeCTooHigh())
        return Invest.setTaxeC();
      } else {
        game.getCurrentUser().setTaxeC(keyboard);
      }
    }
    Invest.choiceTaxes();
  }

  static choiceInvest(){
    //console.info("choiceInvest")

    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listen([
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_INT, callback: Invest.choiceInvestHowMuch}, // 0-9
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: _Part5_Lands_class__WEBPACK_IMPORTED_MODULE_3__.Lands.entryPoint}, // ↩
    ]);

    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplates([_templates_4_base_tpl__WEBPACK_IMPORTED_MODULE_6__["default"], _templates_4_d_tpl__WEBPACK_IMPORTED_MODULE_11__["default"]]);
  }

  static choiceInvestHowMuch(invest){
    //console.info("choiceInvestHowMuch()" + invest)
    if(invest < 1 || invest > 6){
      return Invest.choiceInvest();
    }

    _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listenTyping([
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_INT_TYPING, callback: _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.startTyping}, // 0-9 + backspace
      {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: Invest.doInvest}, // ↩
    ], [_templates_4_base_tpl__WEBPACK_IMPORTED_MODULE_6__["default"], _templates_4_e_tpl__WEBPACK_IMPORTED_MODULE_12__["default"]], [invest]);

    _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_2__.Party.refreshWithTemplates([_templates_4_base_tpl__WEBPACK_IMPORTED_MODULE_6__["default"], _templates_4_e_tpl__WEBPACK_IMPORTED_MODULE_12__["default"]]);
  }

  static doInvest(keyCode, additionnalParameters){
    //console.info("doInvest() -" + keyCode + "- -" +  additionnalParameters + "-")
    let quantity = parseInt(_KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.buffer);
    if(isNaN(quantity)){
      return Invest.choiceInvest();
    }
    //console.info("quoi : ");
    //console.info(additionnalParameters);
    //console.info("quoi : " + additionnalParameters[0]);
    //console.info("quantity : " + quantity);
    let what = parseInt(additionnalParameters[0]);
    let price = 0;
    switch (what) {
      case 1:
        price = _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.foirePrice;break;
      case 2:
        price = _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.moulinPrice;break;
      case 3:
        price = _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.fonderiePrice;break;
      case 4:
        price = _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.chantierPrice;break;
      case 5:
        price = _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.ostPrice;break;
      case 6:
        price = _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.palaisPrice;break;
      default:
    }

    if(what == 5 && _User_utils_class__WEBPACK_IMPORTED_MODULE_5__.UserUtils.getMaxOstPossible(game.getCurrentUser()) < quantity + game.getCurrentUser().getOst()){
      game.addError(_Errors_class__WEBPACK_IMPORTED_MODULE_4__.Errors.notEnoughtNobles())
      return Invest.choiceInvestHowMuch(what);
    }

    if(price * quantity > game.getCurrentUser().getMoney()){
      game.addError(_Errors_class__WEBPACK_IMPORTED_MODULE_4__.Errors.notEnoughtMoney())
      return Invest.choiceInvestHowMuch(what);
    }
    game.getCurrentUser().addMoney(-1 * price * quantity);

    switch (what) {
      case 1:
        game.getCurrentUser().addFoires(quantity);
        break;
      case 2:
        game.getCurrentUser().addMoulins(quantity);
        break;
      case 3:
        game.getCurrentUser().addFonderies(quantity);
        break;
      case 4:
        game.getCurrentUser().addChantiers(quantity);
        break;
      case 5:
        game.getCurrentUser().addOst(quantity);
        break;
      case 6:
        game.getCurrentUser().addPalais(quantity * 10);
        break;
      default:
    }

    if(what == 6){
      game.getCurrentUser().addNobles(quantity);
    }

    return Invest.choiceInvest();
  }

  static processMoney(){
    let user = game.getCurrentUser();

    let gains = {gainFoires: 0,gainMoulins: 0,gainFonderies: 0,gainChantiers: 0,gainOst: 0,
                taxeA: 0,taxeB: 0,taxeC: 0};

    gains.gainFoires = _User_utils_class__WEBPACK_IMPORTED_MODULE_5__.UserUtils.calculGainsOfFoires(user);
    gains.gainMoulins = _User_utils_class__WEBPACK_IMPORTED_MODULE_5__.UserUtils.calculGainsOfMoulins(user);
    gains.gainFonderies = _User_utils_class__WEBPACK_IMPORTED_MODULE_5__.UserUtils.calculGainsOfFonderies(user);
    gains.gainChantiers = _User_utils_class__WEBPACK_IMPORTED_MODULE_5__.UserUtils.calculGainsOfChantiers(user);
    gains.gainOst = _User_utils_class__WEBPACK_IMPORTED_MODULE_5__.UserUtils.calculGainsOfOst(user);

    game.getCurrentUser().setGains(gains);

    gains.taxeA = _User_utils_class__WEBPACK_IMPORTED_MODULE_5__.UserUtils.calculGainsOfTaxesA(user);
    gains.taxeB = _User_utils_class__WEBPACK_IMPORTED_MODULE_5__.UserUtils.calculGainsOfTaxesB(user);
    gains.taxeC = _User_utils_class__WEBPACK_IMPORTED_MODULE_5__.UserUtils.calculGainsOfTaxesC(user);

    let gain = gains.gainFoires + gains.gainMoulins + gains.gainFonderies + gains.gainChantiers + gains.gainOst + gains.taxeA + gains.taxeB + gains.taxeC;

    game.getCurrentUser().addMoney(gain);
    game.getCurrentUser().setGains(gains);
  }
}


/***/ }),

/***/ 1170:
/*!**********************************!*\
  !*** ./src/Part5_Lands.class.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lands": () => (/* binding */ Lands)
/* harmony export */ });
/* harmony import */ var _KB_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KB.class */ 8446);
/* harmony import */ var _Const_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Const.class */ 250);
/* harmony import */ var _Combat_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Combat.class */ 533);
/* harmony import */ var _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Part_Abstract.class */ 6262);
/* harmony import */ var _Part6_IA_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Part6_IA.class */ 448);
/* harmony import */ var _Errors_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Errors.class */ 6794);
/* harmony import */ var _User_utils_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./User.utils.class */ 8509);
/* harmony import */ var _templates_5_base_tpl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templates/5_base.tpl */ 586);
/* harmony import */ var _templates_5_tpl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates/5.tpl */ 3633);
/* harmony import */ var _templates_5_b_tpl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templates/5_b.tpl */ 2088);
/* harmony import */ var _templates_5_combat_result_tpl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./templates/5_combat_result.tpl */ 2682);













class Lands extends _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_3__.Party {

    static entryPoint(){
      Lands.nbAttacks = 1;
      return Lands.choosingOpponent();
    }

    // Terres vassales, choix de l'adversaire
    static choosingOpponent(){
      //console.info("step5")
      _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listen([
        {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_INT, callback: Lands.choiceQttOst}, // 0-9
        {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: _Part6_IA_class__WEBPACK_IMPORTED_MODULE_4__.IA["do"]}, // ↩
      ]);

      _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_3__.Party.refreshWithTemplates([_templates_5_base_tpl__WEBPACK_IMPORTED_MODULE_7__["default"], _templates_5_tpl__WEBPACK_IMPORTED_MODULE_8__["default"]]);
    }

    //Selection du nombre de soldat
    static choiceQttOst(opponent){
      //console.info("choiceQttOst(" + opponent + ")");
      if(Lands.nbAttacks > _User_utils_class__WEBPACK_IMPORTED_MODULE_6__.UserUtils.getNbAttacksMax(game.getCurrentUser())){
        game.addError(_Errors_class__WEBPACK_IMPORTED_MODULE_5__.Errors.notEnoughtNobles());
        return Lands.choosingOpponent();
      }

      let opponents = game.getOpponentsAsArray();
      if(opponent < 1 || opponent > opponents.length){
        //console.info("opposant pas dans la liste");
        return Lands.choosingOpponent();
      }

      //opponent = myself
      if(game.getCurrentUser().getId() == opponents[opponent - 1].getId()){
        //console.info("pas soi même");
        game.addError(_Errors_class__WEBPACK_IMPORTED_MODULE_5__.Errors.fightMyself());
        return Lands.choosingOpponent();
      }
      _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listenTyping([
        {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_INT_TYPING, callback: _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.startTyping}, // 0-9 + backspace
        {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: Lands.doFight}, // ↩
      ], [_templates_5_base_tpl__WEBPACK_IMPORTED_MODULE_7__["default"], _templates_5_b_tpl__WEBPACK_IMPORTED_MODULE_9__["default"]], [opponents[opponent - 1].getId()]);

      //else choose number of soldier
      _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_3__.Party.refreshWithTemplates([_templates_5_base_tpl__WEBPACK_IMPORTED_MODULE_7__["default"], _templates_5_b_tpl__WEBPACK_IMPORTED_MODULE_9__["default"]]);
    }


    //Selection du nombre de soldat
    static doFight(key, defenderUserId){
      let ost = parseInt(_KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.buffer);
      if(isNaN(ost) || ost === 0){
        return Lands.choosingOpponent();
      }

      //console.info("doFight(" + ost + ", " + defenderUserId + ")");

      //Test if we have enought ost men
      if(game.getCurrentUser().getOst() < ost){
        game.addError(_Errors_class__WEBPACK_IMPORTED_MODULE_5__.Errors.notEnoughtOst());
        return Lands.choosingOpponent();
      }


      let result = null;
      let promiseCombat = null;
      if(defenderUserId == 0){
        promiseCombat = _Combat_class__WEBPACK_IMPORTED_MODULE_2__.Combat.execute(game.getBarbares(), game.getCurrentUser(), ost);
      } else {
        promiseCombat = _Combat_class__WEBPACK_IMPORTED_MODULE_2__.Combat.execute(game.getUserById(defenderUserId), game.getCurrentUser(), ost);
      }

      //Resolve promise
      promiseCombat.then((result)=>{

        //add 1 to counter of current attacks
        Lands.nbAttacks++;

        _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.listen([
          {key: _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const.KEYBOARD_RETURN, callback: Lands.choosingOpponent}, // ↩
        ]);

        //else choose number of soldier
        _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_3__.Party.refreshWithTemplate(_templates_5_combat_result_tpl__WEBPACK_IMPORTED_MODULE_10__["default"], result);
      });
    }


    get nbAttacks() {
      return this._nbAttacks || 0;
    }

    set nbAttacks(v) {
      this._nbAttacks = v;
    }
}


/***/ }),

/***/ 448:
/*!*******************************!*\
  !*** ./src/Part6_IA.class.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IA": () => (/* binding */ IA)
/* harmony export */ });
/* harmony import */ var _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Part_Abstract.class */ 6262);
/* harmony import */ var _Part2_Food_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Part2_Food.class */ 5340);
/* harmony import */ var _Errors_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Errors.class */ 6794);
/* harmony import */ var _KB_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KB.class */ 8446);
/* harmony import */ var _Const_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Const.class */ 250);
/* harmony import */ var _templates_6_base_tpl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates/6_base.tpl */ 904);









class IA extends _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_0__.Party {
    // Terres vassales, choix de l'adversaire
    static do(){
      console.info("do IA")

      //Exécution for each of IA player
      game.getUsers().forEach(IA.doAction);

      _KB_class__WEBPACK_IMPORTED_MODULE_3__.KB.listen([
        {key: _Const_class__WEBPACK_IMPORTED_MODULE_4__.Const.KEYBOARD_RETURN, callback: IA.turnYear} // ↩
      ]);
      _Part_Abstract_class__WEBPACK_IMPORTED_MODULE_0__.Party.refreshWithTemplate(_templates_6_base_tpl__WEBPACK_IMPORTED_MODULE_5__["default"]);
    }

    static doAction(user, key){
      if(key == 1) {
        //player
        return;
      }
  /*    if(!user.isAlive()){
        //IA dead
        return;
      }*/

      console.info("doAction() " + user.getName())
    }

    //Turn one Year and go on for a new round
    static turnYear(){
        game.nextYear();

        return _Part2_Food_class__WEBPACK_IMPORTED_MODULE_1__.Food.meteoAndRats();
    }
}


/***/ }),

/***/ 6262:
/*!************************************!*\
  !*** ./src/Part_Abstract.class.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Party": () => (/* binding */ Party)
/* harmony export */ });
/* harmony import */ var _KB_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KB.class */ 8446);
/* harmony import */ var _Const_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Const.class */ 250);



class Party {

  static pause(nextCall){
    setTimeout(function(){ nextCall(); }, 2000);
  }

  static refreshWithTemplate(template, vars = {}){
    return Party.refreshWithTemplates([template], vars)
  }

  static refreshWithTemplates(templates, vars = {}){
    //console.info("template" + template);
    let datas = "";
    vars = Object.assign({
      "user": window.game.getCurrentUser(),
      "users": window.game.getUsers(),
      "game": window.game,
      "sales": window.game.getSalesInArray(),
      "Const": _Const_class__WEBPACK_IMPORTED_MODULE_1__.Const,
      "KB_BUFFER": _KB_class__WEBPACK_IMPORTED_MODULE_0__.KB.buffer
      }, vars)

    for (const tpl of templates) {
     // if( typeof(tpl) == Object){
        datas += tpl(vars);
     // } else {
     //   throw "tpl wasn't an object " + tpl
     // }
    }

    document.getElementById("game").innerHTML = datas;
    game.purgeErrors();
  }

}


/***/ }),

/***/ 3836:
/*!***************************!*\
  !*** ./src/User.class.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {

  constructor(id, name, country, land = 10000){
    this.id = id;
    this.name = name;
    this.country = country;
    this.land = land;
    this.reset();
  }

  reset(){
    this.sexe = 0; // 0=male 1=female
    this.taxeA = 20;
    this.taxeB = 5;
    this.taxeC = 35;
    this.rank = "Baron";
    this.harvest = 17524;
    this.supply = 12842;
    this.people = 2026;
    this.ost=20;
    this.money = 1000;

    this.foires = 0;
    this.moulins = 0;
    this.fonderies = 0;
    this.chantiers = 0;
    this.palais = 0;

    this.nobles = 1;
    this.marchands = 1;

    this.satisfactionPeople = 100;
    this.satisfactionOst = 100;

  //  this.alive = true;

    this.resetNewYear();
  }

  resetNewYear(){
    this.needPeople = 5 * this.people;
    this.supplyPeople = 0;
    this.needOst = 8 * this.ost;
    this.supplyOst = 0;
    this.migrants = 0;
    this.gains = null;
  }

  /**
   * Return the value of satisfaction 0 -> 200%
   */

   /*************************/
  getId(){return this.id;}
  getName(){return this.name;}
  getSexe(){return this.sexe;}
  getRank(){return this.rank;}
  getLand(){return this.land;}
  getMoney(){return this.money;}
  getTaxeA(){return this.taxeA;}
  getTaxeB(){return this.taxeB;}
  getTaxeC(){return this.taxeC;}
  getSupply(){return this.supply;}
  getOst(){return this.ost;}
  getCountry(){return this.country;}
  getPeople(){return this.people;}
  getNeedPeople(){return this.needPeople;}
  getSupplyPeople(){return this.supplyPeople;}
  getSupplyOst(){return this.supplyOst;}
  getSatisfactionPeople(){ return this.satisfactionPeople; }
  getSatisfactionOst(){ return this.satisfactionOst; }
  getNeedOst(){ return this.needOst; }
  getHarvest(){return this.harvest;}
  getFoires(){return this.foires;}
  getMoulins(){return this.moulins;}
  getFonderies(){return this.fonderies;}
  getChantiers(){return this.chantiers;}
  getPalais(){return this.palais;}
  getMigrants(){return this.migrants;}
  getNobles(){return this.nobles;}
  getMarchands(){return this.marchands;}
  getGains(){return this.gains;}
//  isAlive(){return this.alive;}

  setSexe(sexe){this.sexe = sexe;}
  setTaxeA(taxeA){this.taxeA = taxeA;}
  setName(name){this.name = name;}
  setTaxeB(taxeB){this.taxeB = taxeB;}
  setTaxeC(taxeC){this.taxeC = taxeC;}
  setOst(ost){this.ost = ost;}
  setSupplyPeople(supplyPeople){this.supplyPeople = supplyPeople;}
  setSupplyOst(supplyOst){this.supplyOst = supplyOst;}
  setSatisfactionPeople(satisfactionOst){this.satisfactionOst = satisfactionOst;}
  setSatisfactionOst(satisfactionOst){this.satisfactionOst = satisfactionOst;}
  setHarvest(harvest){this.harvest = harvest;}
  setMarchands(marchands){this.marchands = marchands;}
  setMigrants(migrants){this.migrants = migrants;}
  setGains(gains){this.gains = gains;}
  setLand(land){this.land = land;}

  addMoney(money){this.money += money;}
  addSupply(supply){this.supply += supply;}
  addOst(ost){this.ost += ost;}
  addPeople(people){this.people += people;}
  addLand(land){this.land += land;}

  addFoires(foires){this.foires += foires;}
  addMoulins(moulins){this.moulins += moulins;}
  addFonderies(fonderies){this.fonderies += fonderies;}
  addChantiers(chantiers){this.chantiers += chantiers;}
  addPalais(palais){this.palais += palais;}
  addNobles(nobles){this.nobles += nobles;}

//  kill(){
//    this.alive=false;
//  }


}


/***/ }),

/***/ 8509:
/*!*********************************!*\
  !*** ./src/User.utils.class.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserUtils": () => (/* binding */ UserUtils)
/* harmony export */ });
class UserUtils {


    /**
     * Return value representing the max amount of ost availablefor a player
     **/
    static getMaxOstPossible(user){
      return user.getNobles() * 20;
    }

    /**
     * Return value representing the name of a player depending of its country
     **/
    static getName(user, n = ""){
      let name = ""
      if( n !== ""){
        if(n === "J") {
          name = "Jeanne d'Arc"
        }
      } else {
        name = "Hugues";
      }
      return name;
    }

    /**
     * Return value representing the new harvest
     * LA=A(CUR_PLAY,1)-A(CUR_PLAY,3)-A(CUR_PLAY,18)*2-A(CUR_PLAY,16)-A(CUR_PLAY,7)-A(CUR_PLAY,15)*2
     * IF A(CUR_PLAY,2)*3<LA THEN LA=A(CUR_PLAY,2)*3
     * IF A(CUR_PLAY,3)*5<LA THEN LA=A(CUR_PLAY,3)*5
     * A(CUR_PLAY,2)=A(CUR_PLAY,2)-LA/3
     * HARVEST=LA*METEO*.72+INT(RND*500)+1-A(CUR_PLAY,13)*500
     **/
    static calculNewHarvest(user){
      let landAvailable = user.getLand() - user.getPeople() - user.getNobles() * 2 - user.getPalais() - user.getMarchands() - user.getOst() * 2;
      if(user.getSupply() * 3 < landAvailable){
        landAvailable = user.getSupply() * 3;
      }
      if(user.getPeople() * 5 < landAvailable){
        landAvailable = user.getPeople() * 5;
      }
      //remove 1/3 stock to new plants
      user.addSupply(Math.floor(landAvailable / -3))

      return Math.floor(landAvailable * game.getMeteo() * 0.72 + game.rollDiceInteger(1,500) - user.getFonderies() * 500);
    }

    /**
     * Return value representing new new amount of boisseaux in stock
     **/
    static calculNewSupply(user){
      return Math.floor(-1 * (user.getSupply() * game.getRats() / 100)) + user.getHarvest();
    }

    /**
     * Return the value of satisfaction 0% -> 200%
     */
    static calculSatisfaction(need, supply){
      if(need == 0){
        return 0;
      }
      let satisfaction = 100 * supply / need;
      if(satisfaction > 200){
        satisfaction = 200;
      }
      return Math.floor(satisfaction);
    }

    /**
     * Return value representing nomber of Death per year
     **/
    static calculDeaths(user){
      return Math.floor(game.rollDiceFloat(0, 2.5 * 100 / user.getSatisfactionPeople()) * user.getPeople() / 100); //TODO apply taxeC effect
    }


    /**
     * Return value representing nomber of Birth per year
     **/
    static calculBirths(user){
      return Math.floor(game.rollDiceFloat(0, 5 * user.getSatisfactionPeople() / 100) * user.getPeople() / 100); //TODO apply taxeC effect
    }


    /**
     * Return value representing nomber of Migrants per year
     **/
    static calculMigrants(user){
      if(user.getSatisfactionPeople() > 175){
        return Math.floor(game.rollDiceFloat(0, 2.5 * user.getSatisfactionPeople() / 100) * user.getPeople() / 100); //TODO apply taxeA effect
      }
      return 0;
    }


    /**
     * Return value representing nomber of starving people per year
     **/
    static calculStarvingPeople(user){
      if(user.getSatisfactionPeople() < 90){
        return Math.floor(game.rollDiceFloat(0, 5 * 100 / Math.max(user.getSatisfactionPeople(),10)) * user.getPeople() / 100); //TODO apply taxeC effect
      }
      return 0;
    }

    /**
     * Return value representing nomber of starving ost per year
     **/
    static calculStarvingOst(user){
      if(user.getSatisfactionOst() < 85){
        return Math.floor(game.rollDiceFloat(0, 5 * 100 / Math.max(user.getSatisfactionOst(),10)) * user.getOst() / 100);
      }
      return 0;
    }

    /**
     * Return value representing money gained for Foires
     * F1=(A(CUR_PLAY,11)*((A(CUR_PLAY,7)+INT(RND*35+1)+INT(RND*35+1))/(A(CUR_PLAY,9)+1)*12+5))^.9
     **/
    static calculGainsOfFoires(user){
      return Math.ceil(
        Math.pow(user.getFoires() * ((user.getMarchands() + game.rollDiceInteger(1,35) + game.rollDiceInteger(1,35))/(user.getTaxeB()+1)*12+5), 0.9)
      );
    }

    /**
     * Return value representing money gained for Moulins
     * F2=(A(CUR_PLAY,12)*(5.8*(HARVEST+INT(RND*250+1))/(A(CUR_PLAY,10)*20+A(CUR_PLAY,9)*40+10)+150))^.9
     **/
    static calculGainsOfMoulins(user){
      return Math.ceil(
        Math.pow(user.getMoulins() * (5.8 * (user.getHarvest() + game.rollDiceInteger(1,250)) / (user.getTaxeC() * 20 + user.getTaxeB() * 40 + 10) + 150), 0.9)
      );
    }

    /**
     * Return value representing money gained for Fonderies
     * F3=(A(CUR_PLAY,13)+(A(CUR_PLAY,15)+INT(RND*150+1)+400))^.9
     **/
    static calculGainsOfFonderies(user){
      return Math.ceil(
        Math.pow(user.getFonderies() + user.getOst() + game.rollDiceInteger(1,150) + 400, 0.9)
      );
    }

    /**
     * Return value representing money gained for Chantiers
     * F4=(A(CUR_PLAY,14)*(A(CUR_PLAY,7)*4+A(CUR_PLAY,11)*9+A(CUR_PLAY,13)*15)*METEO)^.9
     **/
    static calculGainsOfChantiers(user){
      return Math.ceil(
        Math.pow((user.getFonderies() * user.getMarchands() * 4 + user.getFoires() * 9 + user.getFonderies() * 15) * game.getMeteo(), 0.9)
      );
    }

    /**
     * Return value representing money gained for Ost
     * F5=A(CUR_PLAY,15)*(-8)
     **/
    static calculGainsOfOst(user){
      return user.getOst() * -8;
    }

    /**
     * Return value representing money gained for taxeA
     * FC=PPL_MIGR*(INT(RND*40+1)+INT(RND*40+1))/100*A(CUR_PLAY,8)
     **/
    static calculGainsOfTaxesA(user){
      return Math.ceil(
        user.getMigrants() * (game.rollDiceInteger(1,40) + game.rollDiceInteger(1,40)) / 100 * user.getTaxeA()
      );
    }

    /**
     * Return value representing money gained for taxeB
     * FS=A(CUR_PLAY,9)/100*((A(CUR_PLAY,7)*1.8+F1*33+F2*17+F3*50+F4*70)^.85+A(CUR_PLAY,18)*5+A(CUR_PLAY,3))
     **/
    static calculGainsOfTaxesB(user){
      return Math.ceil(
        user.getTaxeB() / 100 * ( Math.pow(user.getMarchands() * 1.8 + user.getGains().gainFoires * 33 + user.getGains().gainMoulins * 17
            + user.getGains().gainFondries * 50 + user.getGains().gainChantiers * 70, 0.85) + user.getNobles() * 5 + user.getPeople())
      );
    }

    /**
     * Return value representing money gained for taxeC
     * FI=(A(CUR_PLAY,10)/100*(A(CUR_PLAY,3)*1.3+A(CUR_PLAY,18)*145+A(CUR_PLAY,7)*39+A(CUR_PLAY,11)*99+A(CUR_PLAY,12)*99+A(CUR_PLAY,13)*425+A(CUR_PLAY,14)*965))^.97
     **/
    static calculGainsOfTaxesC(user){
      return Math.ceil(
        Math.pow(user.getTaxeC() / 100 * user.getPeople() * 1.3 + user.getNobles() * 145 + user.getMarchands() * 39 + user.getFoires() * 99
              +user.getMoulins() * 99 + user.getFonderies() * 425 + user.getChantiers() * 965, 0.97)
      );
    }


    /**
     * Return value representing count of attaks possible for a user
     **/
    static getNbAttacksMax(user){
      return user.getNobles();
    }



}


/***/ }),

/***/ 8138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ 7654);
/* harmony import */ var _Game_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game.class */ 9148);
/* harmony import */ var _Part0_Start_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Part0_Start.class */ 8489);






window.game = new _Game_class__WEBPACK_IMPORTED_MODULE_1__.Game();
function component() {
  //Initiate the game
  window.game.reset();
  _Part0_Start_class__WEBPACK_IMPORTED_MODULE_2__.Start.home(); 
}

component()

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(8138));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7OztBQzdNcUI7O0FBRWM7QUFDUTs7O0FBRzNDLGtCQUFrQiw2Q0FBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxFQUFFLDBEQUFVO0FBQ1o7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZW1waXJlMTk4Ny8uL3NyYy90ZW1wbGF0ZXMvMC50cGwiLCJ3ZWJwYWNrOi8vZW1waXJlMTk4Ny8uL3NyYy90ZW1wbGF0ZXMvMF8xLnRwbCIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL3RlbXBsYXRlcy8wXzFhLnRwbCIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL3RlbXBsYXRlcy8wXzFiLnRwbCIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL3RlbXBsYXRlcy8xX3R1dG8xLnRwbCIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL3RlbXBsYXRlcy8xX3R1dG8yLnRwbCIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL3RlbXBsYXRlcy8xX3R1dG8zLnRwbCIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL3RlbXBsYXRlcy8xX3R1dG80LnRwbCIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL3RlbXBsYXRlcy8xX3R1dG81LnRwbCIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL3RlbXBsYXRlcy8xX3R1dG82LnRwbCIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL3RlbXBsYXRlcy8xX3R1dG83LnRwbCIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL3RlbXBsYXRlcy8yLnRwbCIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL3RlbXBsYXRlcy8yXzEudHBsIiwid2VicGFjazovL2VtcGlyZTE5ODcvLi9zcmMvdGVtcGxhdGVzLzJfMWIudHBsIiwid2VicGFjazovL2VtcGlyZTE5ODcvLi9zcmMvdGVtcGxhdGVzLzJfMi50cGwiLCJ3ZWJwYWNrOi8vZW1waXJlMTk4Ny8uL3NyYy90ZW1wbGF0ZXMvMl8yYi50cGwiLCJ3ZWJwYWNrOi8vZW1waXJlMTk4Ny8uL3NyYy90ZW1wbGF0ZXMvMl8zLnRwbCIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL3RlbXBsYXRlcy8yXzQudHBsIiwid2VicGFjazovL2VtcGlyZTE5ODcvLi9zcmMvdGVtcGxhdGVzLzJfNS50cGwiLCJ3ZWJwYWNrOi8vZW1waXJlMTk4Ny8uL3NyYy90ZW1wbGF0ZXMvMl9iYXNlLnRwbCIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL3RlbXBsYXRlcy8zLnRwbCIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL3RlbXBsYXRlcy80LnRwbCIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL3RlbXBsYXRlcy80X2EudHBsIiwid2VicGFjazovL2VtcGlyZTE5ODcvLi9zcmMvdGVtcGxhdGVzLzRfYi50cGwiLCJ3ZWJwYWNrOi8vZW1waXJlMTk4Ny8uL3NyYy90ZW1wbGF0ZXMvNF9iYXNlLnRwbCIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL3RlbXBsYXRlcy80X2MudHBsIiwid2VicGFjazovL2VtcGlyZTE5ODcvLi9zcmMvdGVtcGxhdGVzLzRfZC50cGwiLCJ3ZWJwYWNrOi8vZW1waXJlMTk4Ny8uL3NyYy90ZW1wbGF0ZXMvNF9lLnRwbCIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL3RlbXBsYXRlcy81LnRwbCIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL3RlbXBsYXRlcy81X2IudHBsIiwid2VicGFjazovL2VtcGlyZTE5ODcvLi9zcmMvdGVtcGxhdGVzLzVfYmFzZS50cGwiLCJ3ZWJwYWNrOi8vZW1waXJlMTk4Ny8uL3NyYy90ZW1wbGF0ZXMvNV9jb21iYXRfcmVzdWx0LnRwbCIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL3RlbXBsYXRlcy81X2NvbWJhdF9zaG93LnRwbCIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL3RlbXBsYXRlcy82X2Jhc2UudHBsIiwid2VicGFjazovL2VtcGlyZTE5ODcvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZW1waXJlMTk4Ny8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2VtcGlyZTE5ODcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZW1waXJlMTk4Ny8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2VtcGlyZTE5ODcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL0NvbWJhdC5jbGFzcy5qcyIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL0NvbnN0LmNsYXNzLmpzIiwid2VicGFjazovL2VtcGlyZTE5ODcvLi9zcmMvRXJyb3JzLmNsYXNzLmpzIiwid2VicGFjazovL2VtcGlyZTE5ODcvLi9zcmMvR2FtZS5jbGFzcy5qcyIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL0tCLmNsYXNzLmpzIiwid2VicGFjazovL2VtcGlyZTE5ODcvLi9zcmMvTWFya2V0LmNsYXNzLmpzIiwid2VicGFjazovL2VtcGlyZTE5ODcvLi9zcmMvUGFydDBfU3RhcnQuY2xhc3MuanMiLCJ3ZWJwYWNrOi8vZW1waXJlMTk4Ny8uL3NyYy9QYXJ0MV9UdXRvLmNsYXNzLmpzIiwid2VicGFjazovL2VtcGlyZTE5ODcvLi9zcmMvUGFydDJfRm9vZC5jbGFzcy5qcyIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL1BhcnQzX0RlbW9ncmFwaHkuY2xhc3MuanMiLCJ3ZWJwYWNrOi8vZW1waXJlMTk4Ny8uL3NyYy9QYXJ0NF9JbnZlc3QuY2xhc3MuanMiLCJ3ZWJwYWNrOi8vZW1waXJlMTk4Ny8uL3NyYy9QYXJ0NV9MYW5kcy5jbGFzcy5qcyIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL1BhcnQ2X0lBLmNsYXNzLmpzIiwid2VicGFjazovL2VtcGlyZTE5ODcvLi9zcmMvUGFydF9BYnN0cmFjdC5jbGFzcy5qcyIsIndlYnBhY2s6Ly9lbXBpcmUxOTg3Ly4vc3JjL1VzZXIuY2xhc3MuanMiLCJ3ZWJwYWNrOi8vZW1waXJlMTk4Ny8uL3NyYy9Vc2VyLnV0aWxzLmNsYXNzLmpzIiwid2VicGFjazovL2VtcGlyZTE5ODcvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiNGRkY7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOjEuNDFlbTtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG59XFxuXFxuI2dhbWV7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzoxMHB4O1xcbiAgbGluZS1icmVhazogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxuICBtaW4taGVpZ2h0OiA1MzBweDtcXG59XFxuXFxuaDF7XFxuICBmb250LWZhbWlseTogTW9ub3NwYWNlO1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG59XFxuXFxubCwgYywgciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuY3tcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxucntcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG5pbnZlcnR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUFBO1xcbiAgY29sb3I6IzAwMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiNGRkY7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOjEuNDFlbTtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG59XFxuXFxuI2dhbWV7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzoxMHB4O1xcbiAgbGluZS1icmVhazogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxuICBtaW4taGVpZ2h0OiA1MzBweDtcXG59XFxuXFxuaDF7XFxuICBmb250LWZhbWlseTogTW9ub3NwYWNlO1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG59XFxuXFxubCwgYywgciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuY3tcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxucntcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG5pbnZlcnR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUFBO1xcbiAgY29sb3I6IzAwMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFub255bW91cyhpdFxuKSB7XG52YXIgb3V0PSc8bD48L2w+PGw+PC9sPjxsPjwvbD48bD48L2w+PGM+RSBNIFAgSSBSIEU8L2M+PGw+PC9sPjxjPiogJiM4NjE3OyA9IFRhcGVyIFJDIChyZXRvdXIgY2hhcmlvdCkgcG91ciBjb250aW51ZXIgKjwvYz48bD48L2w+PGM+UsOoZ2xlcyA/IChPL04pPC9jPic7cmV0dXJuIG91dDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbm9ueW1vdXMoaXRcbikge1xudmFyIG91dD0nPGw+PC9sPjxsPjwvbD48bD48L2w+PGw+PC9sPjxsPjwvbD48bD48L2w+PGw+PC9sPjxsPjwvbD48bD48L2w+PGw+PC9sPjxjPkNvbWJpZW4gZGUgam91ZXVycyAoMSDDoCAxKSA6PC9jPic7cmV0dXJuIG91dDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbm9ueW1vdXMoaXRcbikge1xudmFyIG91dD0nPGw+PC9sPjxsPjwvbD48bD48L2w+PGw+PC9sPjxsPjwvbD48bD48L2w+PGw+PC9sPjxsPjwvbD48bD48L2w+PGw+PC9sPjxjPkNvbWJpZW4gZGUgam91ZXVycyAoMSDDoCAxKSA6IDE8L2M+PGM+U2VpZ25ldXIgZGUgRnJhbmNlIDogJysoaXQuS0JfQlVGRkVSKSsnJiM5NjE3OzwvYz48Yz4oJiM4NjE3OyA9IG5vbSBwYXIgZMOpZmF1dCA9IEh1Z3Vlcyk8L2M+PGM+KFBvdXIgdW5lIGdlbnRlIGRhbWUsIHRhcGVyIEopPC9jPic7cmV0dXJuIG91dDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbm9ueW1vdXMoaXRcbikge1xudmFyIG91dD0nPGw+PC9sPjxsPjwvbD48bD48L2w+PGw+PC9sPjxsPjwvbD48bD48L2w+PGw+PC9sPjxsPjwvbD48bD48L2w+PGw+PC9sPjxjPkFuICcrKGl0LmdhbWUueWVhcikrJzwvYz48bD48L2w+JztpZihnYW1lLm1ldGVvID09PSAwKXtvdXQrPSc8Yz5NYXV2YWlzIHRlbXBzLCBTw6hjaGVyZXNzZSwgU2F1dGVyZWxsZXMuPC9jPic7fWlmKGdhbWUubWV0ZW8gPT09IDEpe291dCs9JzxjPkdlbMOpZXMgcHLDqWNvY2VzLiBBcmlkaXTDqS48L2M+Jzt9aWYoZ2FtZS5tZXRlbyA9PT0gMil7b3V0Kz0nPGM+SW5ub25kYXRpb25zLiBUcm9wIGRlIHBsdWllcy48L2M+Jzt9aWYoZ2FtZS5tZXRlbyA9PT0gMyl7b3V0Kz0nPGM+VGVtcHMgbW95ZW4uIEJvbm5lIGFubsOpZS48L2M+Jzt9aWYoZ2FtZS5tZXRlbyA9PT0gNCl7b3V0Kz0nPGM+QmVhdSB0ZW1wcywgRXTDqSBsb25nLjwvYz4nO31pZihnYW1lLm1ldGVvID09PSA1KXtvdXQrPSc8Yz5UZW1wcyBzdXBlcmJlISBHcmFuZGUgYW5uw6llITwvYz4nO31yZXR1cm4gb3V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFub255bW91cyhpdFxuKSB7XG52YXIgb3V0PSc8bD4gICAgICAgICAgICBPeWV6LCBveWV6LCBib25uZXMgZ2VucyAhPC9sPjxsPjwvbD48bD4gICAgICAgICAgICAgICBCaWVudmVudWUgZGFucyBsXFwnIEUgTSBQIEkgUiBFICE8L2w+PGw+PC9sPjxsPiAgIEltYWdpbmV6IHF1ZSB2b3VzIMOqdGVzIGxlIGdlbnRpbCBzZWlnbmV1ciAob3UgbGEgZ2VudGUgZGFtZSkgZFxcJ3VuIHBldGl0IGZpZWYgc2FucyBpbXBvcnRhbmNlIGRlIGxcXCdFdXJvcGUgZHUgTW95ZW4tQWdlLiBWb3RyZSBwYXlzIHLDqXVuaXQgZGUgbm9tYnJldXggYWdyw6ltZW50cyA6IHBhcyBkXFwnaW5kdXN0cmllLCBjb21tZXJjZSByw6lkdWl0LCBhcm3DqWUgaW5zaWduaWZpYW50ZSwgc3VyIG91IHNvdXMgcG9wdWxhdGlvbiwgdm9zaW5zIGhhaW5ldXgsIGNvbXBsb3RzLCBmYW1pbmVzLCBwZXJzdGUsIGV0IHRvdXRlcyBsZXMgYXV0cmVzIGRvdWNldXJzIHF1b3RpZGllbm5lcyBkdSBwb3V2b2lyLiBDXFwnZXN0IHVuaXF1ZW1lbnQgbGEgbsOpY2Vzc2l0w6kgZGUgc3Vydml2cmUgcG91ciB2b3VzIGNvbnNlcnZlciDDoCBsXFwnYW1vdXIgZGUgdm9zIGJvbnMgZXQgbG95YXV4IHN1amV0cywgZXQgbm9uIHVuZSBkw6ltb25pYXF1ZSBhbWJpdGlvbiwgcXVpIHZvdXMgcG91c2Ugw6AgcmFzc2VtYmxlciBhbm7DqWVzIGFwcsOocyBhbm7DqWUgdGVycmVzLCBhcmdlbnQgZXQgYXJtw6llcy48L2w+PGw+PC9sPjxsPiAgIE1haXMgbGEgYnJpw6h2ZXTDqSBkZSBsYSB2aWUgbmUgdm91cyBsYWlzZXJhIHF1ZSBwZXUgZGUgdGVtcHMgcG91ciB0cmFuc2Zvcm1lciB2b3RyZSBiYXJvbm5pZSBlbiBlbXBpcmUuPC9sPjxsPjwvbD48bD4gICBDYXIgbGEgUHJvdmlkZW5jZSBlc3QgcHLDqnRlIMOgIHLDqWNvbXBlbnNlciB2b3RyZSBzYWdlIHBvbGl0aXF1ZSBwYXIgdW5lIGFzY2Vuc2lvbiBiaWVuIG3DqXJpdMOpZSA6PC9sPjxsPjwvbD48bD4gICAgICAgICBCYXJvbiwgRHVjLCBSb2ksIGV0IGZpbmFsZW1lbnQgKHBldXQtw6p0cmUpIEVNUEVSRVVSICE8L2w+PGw+PC9sPjxsPiAgICAgICAgICAgIChvdSBsZXVycyDDqXF1aXZhbGVudHMgw6l0cmFuZ2Vycyk8L2w+PGw+PC9sPjxyPiYjODYxNzs8L3I+JztyZXR1cm4gb3V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFub255bW91cyhpdFxuKSB7XG52YXIgb3V0PSc8bD4gICBWb3VzIHN1aXZlej8gQWxvcnMgc2FjaGV6IHF1ZSA1IGF1dHJlcyBnZW50aWxzIHNlaWduZXVycyBsb3JnbmVudCBhdXNzaSBsYSBjb3Vyb25uZSBpbXDDqXJpYWxlIGV0IG5cXCdvbnQgcGFzIGR1IHRvdXQgbFxcJ2ludGVudGlvbiBkZSB2b3VzIHJlZ2FyZGVyIGxhIHByZW5kcmUuIExldXIgYXJtw6llcyBwZXV2ZW50IHZvdXMgYXR0YXF1ZXIgYXUgbW9tZW50IHByb3BpY2UsIGV0IHBldXQtw6p0cmUgZMOpdmFzdGVyIHZvdHJlIHBheXMuPC9sPjxsPjwvbD48bD4gICBJbHMgdGllbm5lbnQgbGUgbWFyY2jDqSBkdSBnYXJpbiBldCBzaSB2b3VzIHBlbnNleiBkdSBtYWwgZGUgbFxcJ09QRVAsIGF0dGVuZGV6IHNldWxlbWVudCBkZSB2b2lyIGNvbWJpZW4gbGUgZ3JhaW4gcGV1dCBhdXNzaSBkZXZlbmlyIHJhcmUgZXQgY2hlci48L2w+PGw+PC9sPjxsPiAgIEJpZW4gc8O7ciwgdW4gY2hlZiBoYWJpbGUgcGV1dCBmYWlyZSB1biBtYWxoZXVyIHN1ciBsZSBtYXJjaMOpIGR1IGdyYWluLiBFbiBjYWxjdWxhbnQgYmllbiwgdm9zIG1vaXNzb25zIGRldnJhaWVudCDDqnRyZSBhYm9uZGFudGUuIFF1YW50IGF1IHN1cnBldXBsZW1lbnQsIHZvdXMgcG91dmV6IHUgcmVtw6lkaWVyIGVuIGxldmFudCB1ZSBncmFuZGUgYXJtw6llIHF1ZSBsYSBndWVycmUgcsOpZHVpcmEuPC9sPjxsPjwvbD48bD4gICBOw6lhbW9pbnMsIHZvdHJlIHNvdWNpIG1hamV1ciBzZXJhIGxlIGxlYmVuc3JhdW0sIGxcXCdlc3BhY2Ugdml0YWwuIExlcyB0ZXJyZXMgw6AgY29ucXXDqXJpciBuZSBzb250IHBhcyBpbGxpbWl0w6llcy48L2w+PGw+PC9sPjxsPiAgIFNpIHZvdXMgw6ljcmFzZXogbGVzIGhvcmRlcyBiYXJiYXJlcyBldCBsZXMgYXJtw6llcyBiaWVuIGVudHJhw65uw6llcyBkZXMgYXV0cmVzIG5hdGlvbnMgYWluc2kgcXVlIGxldXJzIG1pbGljZXMgcGF5c2FubmVzLCBwZXV0LcOqdHJlIG9idGllbmRyZXotIHZvdXMgbGUgcHJlc3RpZ2lldXggdGl0cmUgZFxcJ0VNUFJFVVIgITwvbD48bD48L2w+PGw+PC9sPjxsPjwvbD48cj4mIzg2MTc7PC9yPic7cmV0dXJuIG91dDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbm9ueW1vdXMoaXRcbikge1xudmFyIG91dD0nPGM+VEFYRVM8L2M+PGw+PC9sPjxsPiAgIExlcyB0YXhlcyBkb3VhbmnDqHJlcyBuZSBzXFwnYXBwbGlxdWVudHF1XFwnYXV4IGltbWlncmFudHMgZGUgdm90cmUgbmF0aW9uLiBTb3V2ZW50LCB1biBmYWlibGUgdGF1eCBhdHRpcmUgcGx1cyBkXFwnw6l0cmFuZ2Vycy48L2w+PGw+PC9sPjxsPiAgIExhIHRheGUgY29tbWVyY2lhbGUgaW5mbHVlIGZvcnRlbWVudCBzdXIgdm90cmUgw6ljb25vbWllIGNhcGl0YWxpc3RlLiBTaSBlbGxlIHBlcm1ldCBkZSByYW1hc3NlciBiZWF1Y291cCBkXFwnYXJnZW50LCB1biBuaXZlYXUgdHJvcCDDqWxldsOpIHRlbmQgw6AgZMOpY291cmFnZXIgbFxcJ2FjdGl2aXTDqSBpbmR1c3RyaWVsbGUuPC9sPjxsPjwvbD48bD4gICBMZXMgaW1ww7R0cyBkaXJlY3RzIHNvbnQgam95ZXVzZW1lbnQgcGF5w6lzIHBhciB0b3VzLCBoYWJpdGFudHMgZXQgaW5kdXN0cmllcy4gTMOgIGVuY29yZSwgdW4gZmFpYmxlIHRhdXggZmF2b3Jpc2Ugc291dmVudCBsYSBwcm9kdWN0aW9uIGluZHVzdHJpZWxsZS48L2w+PGw+PC9sPjxsPjwvbD48bD48L2w+PGw+PC9sPjxsPjwvbD48bD48L2w+PGw+PC9sPjxsPjwvbD48bD48L2w+PGw+PC9sPjxsPjwvbD48cj4mIzg2MTc7PC9yPic7cmV0dXJuIG91dDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbm9ueW1vdXMoaXRcbikge1xudmFyIG91dD0nPGw+ICAgQ2hhcXVlIGFubsOpZXMsIHZvdXMgcG91dmV6IGludmVzdGlyIHZvcyByZXZlbnVzIGVuIGRpdmVycyBwbGFjZW1lbnRzIGNvbW1lcmNpYXV4IG91IGluZHVzdHJpZWxzLiBMZXMgYW5uw6llcyBzdWl2YW50ZXMsIGNlcyBwbGFjZW1lbnRzIHZvdXMgc2Vyb250IGhhdXRlbWVudCBwcm9maXRhYmxlcywgc1xcJ2lscyDDqXRhaWVudCBqdWRpY2lldXguPC9sPjxsPjwvbD48Yz5JTlZFU1RJU1NFTUVOVFMgUE9TU0lCTEU8L2M+PGw+PC9sPjxsPiAgIExlcyBmb2lyZXMgc29udCB1biBwbGFjZW1lbnQgcmVsYXRpdmVtZW50IGJvbiBtYXJjaMOpIGV0IGFzc2V6IGludMOpcmVzc2FudCBjYXIgZWxsZXMgZmF2b3Jpc2VudCBsYSBmb3JtYXRpb24gZFxcJ3VuZSBjbGFzc2UgbW95ZW5uZSwgbGVzIG1hcmNoYW5kcy4gRXQsIGNvbW1lIHZvdXMgbGUgc2F2ZXogc8O7cmVtZW50LCBsYSBjbGFzc2UgIG1veWVubmUgcGF5ZSBiaWVuIHBsdXMgZFxcJ2ltcMO0dHMgcXVlIHNhIHBhcnQuPC9sPjxsPjwvbD48bD4gICBMZXMgbW91bGlucyDDoCBncmFpbnMgc29udCBuw6ljZXNzYWlyZXMgcG91ciB0cmFpdGVyIGxlcyBtb2lzc29ucyBldCBwYXIgc3VpdGUgc29udCBkXFwndW4gYm9uIHJhcHBvcnQgbGVzIGFubsOpZXMgYXV4IHLDqWNvbHRlcyBhYm9uZGFudGVzLjwvbD48bD48L2w+PGw+ICAgTGVzIGZvbmRlcmllcyBwZXJtZXR0ZW50IGRlIGxldmVyIGRlIGdyYW5kZXMgYXJtw6llcy4gRW4gYXZvaXIgcGx1c2lldXJzIHZvdXMgcGVybWV0dHJhIGRcXCfDqXF1aXBlciB1bmUgYXJtw6llIGJpZW4gcGx1cyBub21icmV1c2UuPC9sPjxsPjwvbD48bD4gICBMZXMgY2hhbnRpZXJzIG5hdmFscyBzb250IGxlcyBwbHVzIHByb2ZpdGFibGVzIGRlcyBpbnZlc3Rpc3NlbWVudHMuIEEgY2F1c2UgZHVuIGdyYW5kIG5vbWJyZSBkZXMgY29tbWFuZGVzIGxvcnMgZHUgYmVhdSB0ZW1wcywgaWxzIHJhcHBvcnRlbnQgc291dmVudCBwbHVzIGR1cmFudCBjZXMgYW5uw6llcy48L2w+PGw+PC9sPjxsPjwvbD48bD48L2w+PHI+JiM4NjE3Ozwvcj4nO3JldHVybiBvdXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYW5vbnltb3VzKGl0XG4pIHtcbnZhciBvdXQ9JzxsPiAgTGVzIGFybcOpZXMgbmUgc29udCBqYW1haXMgdW4gYm9uIGludmVzdGlzc2VtZW50LiBOb24gY29udGVudGVzIGRcXCfDqnRyZSBjaMOocmVzIMOgIHJlY3J1dGVyLCBlbGxlcyBzb250IGVuY29yZSBjb8O7dGV1c2VzIMOgIGVudHJldGVuaXIgZXQgZW50cmHDrm5lci4gRW4gcGx1cywgaWwgbGV1ciBmYXV0IGF1c3NpIHVuZSBwbHVzIGdyYW5kZSBwYXJ0IGRlIGxhIG1vaXNzb24gcXVlIGxlcyBzZXJmcy48L2w+PGw+PC9sPjxsPiAgQmllbiBzw7tyLCB2b3VzIHBvdXZleiB2b3VzIG9mZnJpciBsZSBsdXhlIGRcXCfDqWRpZmllciB1biBwYWxhaXMuIFF1XFwnZXN0LSBjZSBxdWkgcGVybWV0IGRlIGRpc3Rpbmd1ZXIgdW4gZW1wZXJldXIgZGVzIGF1dHJlcyByb2lzIGV0IGRlIGxldXIgY2jDonRlYXUsIHNpbm9uIHVuIHBhbGFpcz8gRGUgcGx1cywgYXZlYyB1biBwYWxhaXMsIHZvdHJlIHBheXMgcG91cnJhIGF0dGlyZXIgcGx1cyBkZSBub2JsZXMuPC9sPjxsPjwvbD48bD48L2w+PGw+PC9sPjxsPjwvbD48bD48L2w+PGw+PC9sPjxsPjwvbD48bD48L2w+PGw+PC9sPjxsPjwvbD48bD48L2w+PGw+PC9sPjxsPjwvbD48bD48L2w+PHI+JiM4NjE3Ozwvcj4nO3JldHVybiBvdXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYW5vbnltb3VzKGl0XG4pIHtcbnZhciBvdXQ9JzxjPlFVRUxRVUVTIERFVEFJTFMgTk9OIElOVVRJTEVTPC9jPjxsPjwvbD48bD4gIFZvdXMgcGVyZGV6IHRvdWpvdXJzIDEwJSBkZSBjb21taXNzaW9uIGVuIHRyYWludGFudCBzdXIgbGUgbWFyY2jDqSBkdSBncmFpbi4gUXVhbmQgdm91cyB2ZW5kZXogZHUgZ3JhaW4gw6AgZGlmZsOpcmVudHMgcHJpeCwgbGUgcHJpeCBkdSBtYXJjaMOpIGVzdCBsYSBtb3llbm5lIGRlcyBwcml4IGRlIHZlbnRlLCBjZSBxdWkgY29udHJpbnVlIMOgIGVtcMOqY2hlciBkZSB0cm9wIGdyYW5kcyDDqWNhcnRzIGFubnVlbHMuPC9sPjxsPjwvbD48bD4gIFBvdXIgaW50ZXJkaXJlIMOgIGRlcyBzZWlnbmV1cnMgcGV1IHNjcnVwdWxldXggZFxcJ3V0aWxpc2VyIGxlIG1hcmNow6kgYWZpbiBkXFwnw6l2aXRlciBsZXMgcmF0cywgb24gbmUgcGV1dCB5IHJhY2hldGVyIHNvbiBwcm9wcmUgZ3JhaW4uPC9sPjxsPjwvbD48bD4gIFBlbnNleiDDqWdhbGVtZW50IMOgIGdhcmRlciB1bmUgcGFydGllIGRlIHZvdHJlIHLDqXNlcnZlIGRlIGdyYWluIHNpIHZvdXMgZW52aXNhZ2V6IGRlIHBsYW50ZXIgcXVlbHF1ZSBjaG9zZSBsXFwnYW5uw6llIHN1aXZhbnRlLjwvbD48bD48L2w+PGw+ICBJbCBlc3Qgc291dmVudCBhdmFudGFnZXV4IGRlIG5vdXJyaXIgbGUgcGV1cGxlIGF1LWRlbMOgIGR1IHN0cmljdCBuw6ljZXNzYWlyZS4gTGVzIGltbWlncmFudHMgc29udCBoYWJpdHVlbGxlbWVudCBhdHRpcsOpcyBwYXIgdW5lIG5hdGlvbiBwcm9zcMOocmUgZXQgcGFyZm9pcyBtw6ptZSBsZXMgbm9ibGVzIGV0IGxlcyBtYXJjaGFuZHMgcGV1dmVudCBzXFwneSDDqXRhYmxpci48L2w+PGw+PC9sPjxsPiAgT24gcGV1dCBqb3VlciDDoCA2IGF1IHBsdXMuIExlcyBqb3VldXJzIGFic2VudHMgc29udCByZW1wbGFjw6lzIHBhciBsXFwnb3JkaW5hdGV1ciwgZG9udCBsXFwnaGFiaWxpdMOpIGVzdCBmb25jdGlvbiBkZSBsYSBtb3llbm5lIGRlcyBqb3VldXJzIHLDqWVscy48L2w+PGw+PC9sPjxsPjwvbD48cj4mIzg2MTc7PC9yPic7cmV0dXJuIG91dDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbm9ueW1vdXMoaXRcbikge1xudmFyIG91dD0nPGM+VklDVE9JUkU8L2M+PGw+PC9sPjxsPiAgIFZvdXMgZGV2ZW5leiBEVUMgbW95ZW5uYW50IGxhIGJhZ2F0ZWxsZSBkZSAxMCBmb2lyZXMsIDUgbW91bGlucywgcGx1cyBkZSAyNTAwIHNlcmZzIGF2ZWMgNC41IGFycGVudHMgcGFyIHNlcmYsIHVuIHBhbGFpcyBmaW5pIMOgIDIwJSBldCBwbHVzIGRlIDEwIG5vYmxlcy48L2w+PGw+PC9sPjxsPiAgIFZvdXMgdm9pbMOgIFJPSSBxdWFuZCB2b3RyZSBqdXN0aWNlIHNcXCfDqXRlbmQgc3VyIDIwIGZvaXJlcywgMTAgbW91bGlucywgMSBmb25kZXJpZSwgcGx1cyBkZSAzMDAwIHNlcmZzIGF2ZWMgNSBhcnBlbnRzIHBhciBzZXJmLCB1biBwYWxhaXMgZmluaSDDoCA2MCUgZXQgMjAgbm9ibGVzLjwvbD48bD48L2w+PGw+ICAgTFxcJ0VNUElSRSBlc3Qgw6Agdm91cyBzaSB2b3RyZSBib24gcGxhaXNpciByw6hnbmUgc3VyIDQwIGZvaXJlcywgMjAgbW91bHVucywgMyBmb25kZXJpZXMsIDM1MDAgc2VyZnMgYXZlYyA2IGFycGVudHMgcGFyIHNlcmYsIHVuIHBhbGFpcyB0ZXJtaW7DqSDDoCAxMDAlIGV0IDQwIG5vYmxlcy48L2w+PGw+PC9sPjxsPiAgIERpZXUgdm91cyBhaXQgZW4gc2EgdHLDqHMgc2FpbmN0ZSBnYXJkZSwgTWVzc2lyZXMhPC9sPjxsPjwvbD48bD48L2w+PGw+PC9sPjxsPjwvbD48bD48L2w+PGw+PC9sPjxsPjwvbD48bD48L2w+PHI+JiM4NjE3Ozwvcj48bD48L2w+JztyZXR1cm4gb3V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFub255bW91cyhpdFxuKSB7XG52YXIgb3V0PSc8bD4mIzg2MTc7IG91IDE9QWNoYXQgZGUgZ3JhaW4gMj1WZW50ZSBkZSBncmFpbiAzPVZlbnRlIGRlIHRlcnJlcyA6PC9sPic7aWYoaXQuZ2FtZS5lcnJvcnMuaW5jbHVkZXMoXCJOT1RfSU1QTEVNRU5URURcIikpe291dCs9JzxsPkZvbmN0aW9uIG5vbiBpbXBsw6ltZW50w6llICYjeDFGNDlEOzwvbD4nO31yZXR1cm4gb3V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFub255bW91cyhpdFxuKSB7XG52YXIgb3V0PScnO2lmKCFpdC5nYW1lLmVycm9ycy5sZW5ndGgpe291dCs9JzxsPkEgUXVpIGFjaGV0ZXogPyAnKyhpdC5LQl9CVUZGRVIpKycmIzk2MTc7PC9sPic7fWlmKGl0LmdhbWUuZXJyb3JzLmluY2x1ZGVzKFwiQ0FOVF9CVVlfTVlTRUxGXCIpKXtvdXQrPSc8bD5Wb3VzIG5lIHBvdXZleiBhY2hldGVyIMOgIHZvdXMgbcOqbWU8L2w+Jzt9cmV0dXJuIG91dDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbm9ueW1vdXMoaXRcbikge1xudmFyIG91dD0nJztpZighaXQuZ2FtZS5lcnJvcnMubGVuZ3RoKXtvdXQrPScgPGw+Q29tYmllbiA/ICcrKGl0LktCX0JVRkZFUikrJyYjOTYxNzs8L2w+Jzt9aWYoaXQuZ2FtZS5lcnJvcnMuaW5jbHVkZXMoXCJOT1RfRU5PVUdIVF9NT05FWVwiKSl7b3V0Kz0nPGw+Vm91cyBuXFwnYXZleiBwYXMgYXNzZXogZFxcJ2FyZ2VudDwvbD4nO31pZihpdC5nYW1lLmVycm9ycy5pbmNsdWRlcyhcIk5PVF9FTk9VR0hUX1NUT0NLX09OX01BUktFVFwiKSl7b3V0Kz0nPGw+SWwgblxcJ2VuIHZlbmQgcGFzIGF1dGFudDwvbD4nO31yZXR1cm4gb3V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFub255bW91cyhpdFxuKSB7XG52YXIgb3V0PScnO2lmKCFpdC5nYW1lLmVycm9ycy5pbmNsdWRlcyhcIk5PVF9FTk9VR0hUX1NUT0NLXCIpKXtvdXQrPSc8bD5Db21iaWVuIGRlIGJvaXNzZWF1eCB2ZW5kZXotdm91cyA/ICcrKGl0LktCX0JVRkZFUikrJyYjOTYxNzs8L2w+Jzt9aWYoaXQuZ2FtZS5lcnJvcnMuaW5jbHVkZXMoXCJOT1RfRU5PVUdIVF9TVE9DS1wiKSl7b3V0Kz0nPGw+JysoaXQudXNlci5yYW5rKSsnICcrKGl0LnVzZXIubmFtZSkrJywgcGVuc2V6IHkgZW5jb3JlPC9sPic7fWlmKGl0LmdhbWUuZXJyb3JzLmluY2x1ZGVzKFwiTk9UX0VOT1VHSFRfU1RPQ0tcIikpe291dCs9JzxsPlZvdXMgblxcJ2F2ZXogcXVlICcrKGl0LnVzZXIuc3VwcGx5KSsnIGJvaXNzZWF1eC48L2w+Jzt9cmV0dXJuIG91dDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbm9ueW1vdXMoaXRcbikge1xudmFyIG91dD0nJztpZighaXQuZ2FtZS5lcnJvcnMuaW5jbHVkZXMoXCJQUklDRV9UT09fSElHSFwiKSl7b3V0Kz0nPGw+QSBxdWVsIHRhcmlmID8gJysoaXQuS0JfQlVGRkVSKSsnJiM5NjE3OzwvbD4nO31pZihpdC5nYW1lLmVycm9ycy5pbmNsdWRlcyhcIlBSSUNFX1RPT19ISUdIXCIpKXtvdXQrPSc8bD5QUklDRV9UT09fSElHSCc7fXJldHVybiBvdXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYW5vbnltb3VzKGl0XG4pIHtcbnZhciBvdXQ9JzxsPkEgcmFpc29uIGRlICcrKCBpdC5Db25zdC5sYW5kUHJpY2UgKSsnIGZyYW5jcyBsXFwnYXJwYW50LCBjb21iaWVuIGVuIHZlbmRlei12b3VzIGF1eCBCYXJiYXJlcyA/ICcrKGl0LktCX0JVRkZFUikrJyYjOTYxNzs8L2w+JztpZihpdC5nYW1lLmVycm9ycy5pbmNsdWRlcyhcIk5PVF9FTk9VR0hUX0xBTkRcIikpe291dCs9JzxsPklsIGZhdXQgZ2FyZGVyIHVuIHBldSBkZSB0ZXJyYWluIHBvdXIgbGUgcGFsYWlzIHJveWFsITwvbD4nO31yZXR1cm4gb3V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFub255bW91cyhpdFxuKSB7XG52YXIgb3V0PSc8bD5Db21iaWVuIGRvbm5leiB2b3VzIMOgIHZvdHJlIE9TVCA/ICcrKGl0LktCX0JVRkZFUikrJyYjOTYxNzs8L2w+JztpZihpdC5nYW1lLmVycm9ycy5pbmNsdWRlcyhcIk5PVF9FTk9VR0hUX1NUT0NLXCIpKXtvdXQrPSc8bD5Wb3VzIG5cXCdhdmV6IHBhcyBhc3NleiBlbiBzdG9jayE8L2w+Jzt9cmV0dXJuIG91dDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbm9ueW1vdXMoaXRcbikge1xudmFyIG91dD0nPGw+Q29tYmllbiBkb25uZXogdm91cyDDoCB2b3RyZSBwZXVwbGUgPyAnKyhpdC5LQl9CVUZGRVIpKycmIzk2MTc7PC9sPic7aWYoaXQuZ2FtZS5lcnJvcnMuaW5jbHVkZXMoXCJOT1RfRU5PVUdIVF9TVE9DS1wiKSl7b3V0Kz0nPGw+Vm91cyBuXFwnYXZleiBwYXMgYXNzZXogZW4gc3RvY2shPC9sPic7fWlmKGl0LmdhbWUuZXJyb3JzLmluY2x1ZGVzKFwiQVRfTEFTVF8xMF9QRVJDRU5UXCIpKXtvdXQrPSc8bD5Wb3VzIGRldmV6IGF1IG1vaW5zIGVuIGNvbnNhY3JlciAxMCUhPC9sPic7fXJldHVybiBvdXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYW5vbnltb3VzKGl0XG4pIHtcbnZhciBvdXQ9JzxjPicrKGl0LnVzZXIucmFuaykrJyAnKyhpdC51c2VyLm5hbWUpKycgZGUgJysoaXQudXNlci5jb3VudHJ5KSsnPC9jPjxjPkFuICcrKGl0LmdhbWUueWVhcikrJzwvYz48Yz5MZXMgcmF0cyBvbnQgbWFuZ8OpICcrKGl0LmdhbWUucmF0cykrJyAlIGRlIHZvcyByw6lzZXJ2ZXMgZGUgZ3JhaW48L2M+PGM+JiN4MjU1NCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3g0NCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3g0NCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3g0NCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3g0NCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTU3PC9jPjxjPiYjeDI1NTEgIFLDqWNvbHRlcyAgICYjeDI1MDIgIFLDqXNlcnZlcyAgICYjeDI1MDIgICBCZXNvaW5zICAgJiN4MjUwMiAgIEJlc29pbnMgICAmI3gyNTAyICAgIFRyw6lzb3IgICAmI3gyNTUxPC9jPjxjPiYjeDI1NTEgIGRlIGdyYWluICAgJiN4MjUwMiAgZGUgZ3JhaW4gICAmI3gyNTAyICBkdSBwZXVwbGUgICYjeDI1MDIgICBkZSBsXFwnb3N0ICAmI3gyNTAyICAgICByb3lhbCAgICYjeDI1NTE8L2M+PGM+JiN4MjU1MSAgJysoaXQudXNlci5oYXJ2ZXN0LnRvU3RyaW5nKCkucGFkU3RhcnQoOCxcIiBcIikpKycgICAmI3gyNTAyICAnKyhpdC51c2VyLnN1cHBseS50b1N0cmluZygpLnBhZFN0YXJ0KDgsXCIgXCIpKSsnICAgJiN4MjUwMiAgICcrKGl0LnVzZXIubmVlZFBlb3BsZS50b1N0cmluZygpLnBhZFN0YXJ0KDgsXCIgXCIpKSsnICAmI3gyNTAyICAgJysoaXQudXNlci5uZWVkT3N0LnRvU3RyaW5nKCkucGFkU3RhcnQoOCxcIiBcIikpKycgICYjeDI1MDIgICcrKGl0LnVzZXIubW9uZXkudG9TdHJpbmcoKS5wYWRTdGFydCg4LFwiIFwiKSkrJyAgICYjeDI1NTE8L2M+PGM+JiN4MjU1MSAgYm9pc3NlYXV4ICAmI3gyNTAyICBib2lzc2VhdXggICYjeDI1MDIgIGJvaXNzZWF1eCAgJiN4MjUwMiAgYm9pc3NlYXV4ICAmI3gyNTAyICAgIGZyYW5jcyAgICYjeDI1NTE8L2M+PGM+JiN4MjU1QSYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3hhNCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3hhNCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3hhNCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3hhNCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTUwJiN4MjU1MCYjeDI1NTAmI3gyNTVEPC9jPjxsPjwvbD48bD4gICAgICAgICAgICAgICAgICAgICAqICogKiBHcmFpbiDDoCB2ZW5kcmUgOjwvbD48Yz48aW52ZXJ0PlBheXMgICAgICAgICAgICAgIEJvaXNzZWF1eCAgICAgICAgICBQcml4PC9pbnZlcnQ+PC9jPjxsPic7dmFyIGFycjE9aXQuc2FsZXM7aWYoYXJyMSl7dmFyIHNhbGUsaW5kZXg9LTEsbDE9YXJyMS5sZW5ndGgtMTt3aGlsZShpbmRleDxsMSl7c2FsZT1hcnIxW2luZGV4Kz0xXTtvdXQrPSc8Yz4nKyhpbmRleCsxKSsnICcrKHNhbGUuY291bnRyeS50b1N0cmluZygpLnBhZEVuZCgxMCxcIiBcIikpKycgICAgJysoc2FsZS5ib2lzc2VhdXgudG9TdHJpbmcoKS5wYWRTdGFydCgxMCxcIiBcIikpKycgICAgJysoKE1hdGgucm91bmQoc2FsZS5wcmljZSAqIDEwMCkvMTAwKS50b1N0cmluZygpLnBhZFN0YXJ0KDgsXCIgXCIpKSsnPGJyLz4nO30gfSBvdXQrPSc8L2w+PGw+ICAgICAgICAgICAgICAgICAgICAgJztpZighaXQuc2FsZXMubGVuZ3RoKXtvdXQrPSdQYXMgZGUgZ3JhaW4gw6AgdmVuZHJlLi4uJzt9b3V0Kz0nPC9sPjxsPjwvbD48bD48L2w+JztyZXR1cm4gb3V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFub255bW91cyhpdFxuKSB7XG52YXIgb3V0PSc8bD48L2w+PGw+PC9sPjxsPjwvbD48bD48L2w+PGM+JysoaXQudXNlci5yYW5rKSsnICcrKGl0LnVzZXIubmFtZSkrJyBkZSAnKyhpdC51c2VyLmNvdW50cnkpKyc8L2M+PGM+ZW4gbFxcJ2FuICcrKGl0LmdhbWUueWVhcikrJzwvYz48bD48L2w+PGw+JysoaXQucmFuZG9tQmlydGgpKycgbmFpc3NhbmNlczwvbD48bD4nKyhpdC5yYW5kb21EZWF0aCkrJyBoYWJpdGFudHMgbW9ydHMgZGUgbWFsYWRpZTwvbD4nO2lmKGl0LnJhbmRvbVN0YXJ2aW5nUGVvcGxlID4gMCl7b3V0Kz0nPGw+JysoaXQucmFuZG9tU3RhcnZpbmdQZW9wbGUpKycgaGFiaXRhbnRzIG1vcnRzIGRlIGZhaW08L2w+Jzt9aWYoaXQucmFuZG9tTWlncmFudCA+IDApe291dCs9JzxsPicrKGl0LnJhbmRvbU1pZ3JhbnQpKycgbWlncmFudHMgdmllbm5lbnQgZGFucyB2b3RyZSBwYXlzPC9sPic7fWlmKGl0LnJhbmRvbVN0YXJ2aW5nT3N0ID4gMCl7b3V0Kz0nPGw+JysoaXQucmFuZG9tU3RhcnZpbmdPc3QpKycgc29sZGF0cyBtb3J0cyBkZSBmYWltPC9sPic7fW91dCs9JzxsPjwvbD48bD5Wb3RyZSBvc3QgY29tYmF0dHJhIGF2ZWMgdW5lIGVmZmljYWNpdMOpIGRlICcrKGl0LnVzZXIuZ2V0U2F0aXNmYWN0aW9uT3N0KCkpKyclPC9sPjxsPjwvbD48bD5Wb3VzIGF2ZXogJztpZihpdC5yYW5kb21QZW9wbGUgPj0gMCl7b3V0Kz0nZ2FnbsOpJzt9aWYoaXQucmFuZG9tUGVvcGxlIDwgMCl7b3V0Kz0ncGVyZHUnO31vdXQrPScgJysoTWF0aC5hYnMoaXQucmFuZG9tUGVvcGxlKSkrJyBzdWpldHMgdGFpbGxhYmxlcyBldCBjb3J2w6lhYmxlcyDDoCBtZXJjaTwvbD48bD48L2w+PGw+JiM4NjE3OzwvbD4nO3JldHVybiBvdXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYW5vbnltb3VzKGl0XG4pIHtcbnZhciBvdXQ9JzxsPjEvRHJvaXRzIGRlIGRvdWFuZSwyL1RheGUgY29tbWVyY2lhbGUsMy9JbXDDtHRzIGRpcmVjdHMgb3UgJiM4NjE3Oy9JbnZlc3Rpc3NlbWVudHMgPzwvbD4nO2lmKGl0LmdhbWUuZXJyb3JzLmluY2x1ZGVzKFwiRklHSFRfTVlTRUxGXCIpKXtvdXQrPSc8bD5Wb3VzIG5lIHBvdXZleiB2b3VzIGF0dGFxdWVyLjwvbD4nO31yZXR1cm4gb3V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFub255bW91cyhpdFxuKSB7XG52YXIgb3V0PSc8bD5RdWVsbGUgdmFsZXVyIHBvdXIgbGEgdGF4ZSBkZSBkb3VhbmUgKDUwJSBtYXgpID8gJysoaXQuS0JfQlVGRkVSKSsnJiM5NjE3OzwvbD4nO2lmKGl0LmdhbWUuZXJyb3JzLmluY2x1ZGVzKFwiVEFYRV9BX1RPT19ISUdIXCIpKXtvdXQrPSc8bD5Wb3VzIG5lIHBvdXZleiBkw6lwYXNzZXIgbGVzIDUwJS48L2w+Jzt9cmV0dXJuIG91dDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbm9ueW1vdXMoaXRcbikge1xudmFyIG91dD0nPGw+UXVlbGxlIHZhbGV1ciBwb3VyIGxhIHRheGUgY29tbWVyY2lhbGUgKDUwJSBtYXgpID8gJysoaXQuS0JfQlVGRkVSKSsnJiM5NjE3OzwvbD4nO2lmKGl0LmdhbWUuZXJyb3JzLmluY2x1ZGVzKFwiVEFYRV9CX1RPT19ISUdIXCIpKXtvdXQrPSc8bD5Wb3VzIG5lIHBvdXZleiBkw6lwYXNzZXIgbGVzIDUwJS48L2w+Jzt9cmV0dXJuIG91dDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbm9ueW1vdXMoaXRcbikge1xudmFyIG91dD0nPGM+JysoaXQudXNlci5yYW5rKSsnICcrKGl0LnVzZXIubmFtZSkrJyBkZSAnKyhpdC51c2VyLmNvdW50cnkpKyc8L2M+PGM+ZW4gbFxcJ2FuICcrKGl0LmdhbWUueWVhcikrJzwvYz48bD48aW52ZXJ0PiBSZXZlbnVzIGRcXCfDqXRhdCA8L2ludmVydD48L2w+PGw+ICAgICAgICAgIFRyw6lzb3IgPSAnKyhpdC51c2VyLm1vbmV5LnRvU3RyaW5nKCkucGFkU3RhcnQoNikpKycgZnJhbmNzPC9sPjxsPiAgICAgICAgICA8aW52ZXJ0PiAgRHJvaXRzICAgICAgICAgVGF4ZSAgICAgICBJbXDDtHRzICA8L2ludmVydD48L2w+PGw+ICAgICAgICAgIDxpbnZlcnQ+IGRlIGRvdWFuZSAgICBjb21tZXJjaWFsZSAgIGRpcmVjdHMgPC9pbnZlcnQ+PC9sPjxsPiAgICAgICAgICAgICAgJysoaXQudXNlci50YXhlQS50b1N0cmluZygpLnBhZFN0YXJ0KDIpKSsnICUgICAgICAgICAnKyhpdC51c2VyLnRheGVCLnRvU3RyaW5nKCkucGFkU3RhcnQoMikpKycgJSAgICAgICAgICcrKGl0LnVzZXIudGF4ZUMudG9TdHJpbmcoKS5wYWRTdGFydCgyKSkrJyAlPC9sPjxsPiAgICAgICAgICAgICcrKGl0LnVzZXIuZ2FpbnMudGF4ZUEudG9TdHJpbmcoKS5wYWRTdGFydCg2KSkrJyAgICAgICAnKyhpdC51c2VyLmdhaW5zLnRheGVCLnRvU3RyaW5nKCkucGFkU3RhcnQoNikpKycgICAgICAgJysoaXQudXNlci5nYWlucy50YXhlQy50b1N0cmluZygpLnBhZFN0YXJ0KDYpKSsnPC9sPjxsPjwvbD48bD4gIDxpbnZlcnQ+ICBJbnZlc3Rpc3NlbWVudHMgICAgTm9tYnJlICAgICAgIFByb2ZpdHMgICAgICBDb8O7dCA8L2ludmVydD48L2w+PGw+IDEpIENoYW1wcyBkZSBmb2lyZSAgJysoaXQudXNlci5mb2lyZXMudG9TdHJpbmcoKS5wYWRTdGFydCg3KSkrJyAgICAgICAgICcrKGl0LnVzZXIuZ2FpbnMuZ2FpbkZvaXJlcy50b1N0cmluZygpLnBhZFN0YXJ0KDYpKSsnICAgICAgIDEwMDA8L2w+PGw+IDIpIE1vdWxpbnMgw6AgZ3JhaW4gICcrKGl0LnVzZXIubW91bGlucy50b1N0cmluZygpLnBhZFN0YXJ0KDcpKSsnICAgICAgICAgJysoaXQudXNlci5nYWlucy5nYWluTW91bGlucy50b1N0cmluZygpLnBhZFN0YXJ0KDYpKSsnICAgICAgIDIwMDA8L2w+PGw+IDMpIEZvbmRlcmllcyAgICAgICAgJysoaXQudXNlci5mb25kZXJpZXMudG9TdHJpbmcoKS5wYWRTdGFydCg3KSkrJyAgICAgICAgICcrKGl0LnVzZXIuZ2FpbnMuZ2FpbkZvbmRlcmllcy50b1N0cmluZygpLnBhZFN0YXJ0KDYpKSsnICAgICAgIDcwMDA8L2w+PGw+IDQpIENoYW50aWVycyBuYXZhbHMgJysoaXQudXNlci5jaGFudGllcnMudG9TdHJpbmcoKS5wYWRTdGFydCg3KSkrJyAgICAgICAgICcrKGl0LnVzZXIuZ2FpbnMuZ2FpbkNoYW50aWVycy50b1N0cmluZygpLnBhZFN0YXJ0KDYpKSsnICAgICAgIDgwMDA8L2w+PGw+IDUpIEhvbW1lcyBkXFwnYXJtZXMgICAnKyhpdC51c2VyLm9zdC50b1N0cmluZygpLnBhZFN0YXJ0KDcpKSsnICAgICAgICAgJysoaXQudXNlci5nYWlucy5nYWluT3N0LnRvU3RyaW5nKCkucGFkU3RhcnQoNikpKycgICAgICAgICAgODwvbD48bD4gNikgUGFsYWlzICAgICAgICAgICAnKyhpdC51c2VyLnBhbGFpcy50b1N0cmluZygpLnBhZFN0YXJ0KDcpKSsnJSB0ZXJtaW7DqSAgICAgICAgICAgICA1MDAwPC9sPjxsPjwvbD48bD48L2w+JztyZXR1cm4gb3V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFub255bW91cyhpdFxuKSB7XG52YXIgb3V0PSc8bD5RdWVsbGUgdmFsZXVyIHBvdXIgbGVzIGltcMO0dHMgZGlyZWN0cyAoNTAlIG1heCkgPyAnKyhpdC5LQl9CVUZGRVIpKycmIzk2MTc7PC9sPic7aWYoaXQuZ2FtZS5lcnJvcnMuaW5jbHVkZXMoXCJUQVhFX0NfVE9PX0hJR0hcIikpe291dCs9JzxsPlZvdXMgbmUgcG91dmV6IGTDqXBhc3NlciBsZXMgNTAlLjwvbD4nO31yZXR1cm4gb3V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFub255bW91cyhpdFxuKSB7XG52YXIgb3V0PSc8bD5RdW9pIG91ICYjODYxNzs/IDwvbD4nO3JldHVybiBvdXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYW5vbnltb3VzKGl0XG4pIHtcbnZhciBvdXQ9JzxsPkNvbWJpZW4gPyAnKyhpdC5LQl9CVUZGRVIpKycmIzk2MTc7PC9sPic7aWYoaXQuZ2FtZS5lcnJvcnMuaW5jbHVkZXMoXCJOT1RfRU5PVUdIVF9NT05FWVwiKSl7b3V0Kz0nPGw+Vm91cyBuXFwnYXZleiBwYXMgYXNzZXogZFxcJ2FyZ2VudC48L2w+Jzt9aWYoaXQuZ2FtZS5lcnJvcnMuaW5jbHVkZXMoXCJOT1RfRU5PVUdIVF9OT0JMRVNcIikpe291dCs9JzxsPlZvdXMgblxcJ2F2ZXogcGFzIGFzc2V6IGRlIG5vYmxlcy48L2w+Jzt9cmV0dXJuIG91dDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbm9ueW1vdXMoaXRcbikge1xudmFyIG91dD0nPGw+ICAgICAgICAgICYjODYxNzsgb3UgZW5uZW1pIMOgIGF0dGFxdWVyIChkb25uZXIgbsKwKSA6PC9sPic7aWYoaXQuZ2FtZS5lcnJvcnMuaW5jbHVkZXMoXCJGSUdIVF9NWVNFTEZcIikpe291dCs9JzxsPlZvdXMgbmUgcG91dmV6IHZvdXMgYXR0YXF1ZXIuPC9sPic7fWlmKGl0LmdhbWUuZXJyb3JzLmluY2x1ZGVzKFwiTk9UX0VOT1VHSFRfT1NUXCIpKXtvdXQrPSc8bD5Wb3VzIG5cXCdhdmV6IHBhcyBhc3NleiBkZSBzb2xkYXQuPC9sPic7fWlmKGl0LmdhbWUuZXJyb3JzLmluY2x1ZGVzKFwiTk9UX0VOT1VHSFRfTk9CTEVTXCIpKXtvdXQrPSc8bD5Wb3VzIG5cXCdhdmV6IHBhcyBhc3NleiBkZSBub2JsZXMuPC9sPic7fXJldHVybiBvdXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYW5vbnltb3VzKGl0XG4pIHtcbnZhciBvdXQ9JzxsPiAgICAgICAgICAmIzg2MTc7IG91IENvbWJpZW4gZFxcJ2hvbW1lcyAnKyhpdC51c2VyLm9zdCkrJz8gJysoaXQuS0JfQlVGRkVSKSsnJiM5NjE3OzwvbD4nO3JldHVybiBvdXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYW5vbnltb3VzKGl0XG4pIHtcbnZhciBvdXQ9JzxsPjwvbD48bD48L2w+PGw+PC9sPjxsPiAgICAgICAgICA8aW52ZXJ0PiBUZXJyZXMgdmFzc2FsZXMgPC9pbnZlcnQ+PC9sPjxsPjwvbD48bD48L2w+Jzt2YXIgYXJyMT1pdC5nYW1lLmdldE9wcG9uZW50c0FzQXJyYXkoKTtpZihhcnIxKXt2YXIgb3Bwb25lbnQsaW5kZXg9LTEsbDE9YXJyMS5sZW5ndGgtMTt3aGlsZShpbmRleDxsMSl7b3Bwb25lbnQ9YXJyMVtpbmRleCs9MV07b3V0Kz0nPGw+ICAgICAgICAgICcrKGluZGV4KzEpKycpICcrKG9wcG9uZW50LmdldENvdW50cnkoKS5wYWRFbmQoMjAsXCIgXCIpKSsnICAgICAgJysob3Bwb25lbnQuZ2V0TGFuZCgpLnRvU3RyaW5nKCkucGFkU3RhcnQoNyxcIiBcIikpKyc8L2w+Jzt9IH0gb3V0Kz0nPGw+PC9sPjxsPjwvbD48bD48L2w+PGw+PC9sPjxsPjwvbD4nO3JldHVybiBvdXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYW5vbnltb3VzKGl0XG4pIHtcbnZhciBvdXQ9JzxsPjwvbD48bD48L2w+PGw+PC9sPjxsPjwvbD48bD48L2w+PGM+RXhww6lkaXRpb24gdGVybWluw6llPC9jPjxsPjwvbD48bD4gICAgICAgICAgICAgICcrKGl0LnVzZXJBdHRha2VyLnJhbmspKycgJysoaXQudXNlckF0dGFrZXIubmFtZSkrJyAnO2lmKGl0Lndpbil7b3V0Kz0nZ2FnbmUnO31lbHNlIGlmKHRydWUpe291dCs9J3BlcmQnO31vdXQrPScuPC9sPic7aWYoaXQud2luKXtvdXQrPSc8bD5HcmFjZSDDoCBjZXR0ZSB2aWN0b2lyZSB2b3VzIGFycml2ZXogw6AgY29ucXXDqXJpciAnKyhpdC5sYW5kKSsnIGFycGVudHM8L2w+Jzt9aWYoIWl0Lndpbil7b3V0Kz0nPGw+TWFsZ3LDqSBjZXR0ZSBkw6lmYWl0ZSB2b3VzIGFycml2ZXogcXVhbmQgbcOqbWUgw6AgY29ucXXDqXJpciAnKyhpdC5sYW5kKSsnIGFycGVudHM8L2w+Jzt9aWYoaXQuZGVhdGgpe291dCs9JzxsPkRhbnMgdG91cyBsZXMgY2FzIHZvdHJlIHB1aXNzYW5jZSBkZSBmZXUgdGVycmFzc2Ugdm90cmUgYWR2ZXJzYWlyZSBldCBzb24gcm95YXVtZSBxdWkgc1xcJ2VmZm9uZHJlIGRhbnMgbGUgY2hhb3MuPC9sPic7fW91dCs9JzxsPiAgICAgICAgICAmIzg2MTc7PC9sPic7cmV0dXJuIG91dDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbm9ueW1vdXMoaXRcbikge1xudmFyIG91dD0nPGw+PC9sPjxsPjwvbD48bD48L2w+PGw+PC9sPjxsPjwvbD48Yz5Db21iYXQ8L2M+PGw+PC9sPjxsPiAgICAgICAgICAgICBBdHRhbnF1YW50IDogJysoaXQub3N0QXR0YWtlcikrJzwvbD48bD4gICAgICAgICAgICAgIERlZmVuc2V1ciA6ICcrKGl0Lm9zdERlZmVuZGVyKSsnPC9sPic7cmV0dXJuIG91dDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbm9ueW1vdXMoaXRcbikge1xudmFyIG91dD0nPGw+PC9sPjxjPjxpbnZlcnQ+U2l0dWF0aW9uIMOgIGxhIGZpbiBkZSBsXFwnYW4gJysoZ2FtZS55ZWFyKSsnPC9pbnZlcnQ+PC9jPjxsPjwvbD48bD4gICAgICAgICAgICAgIE5vYmxlcyAgICAgSG9tbWVzICAgIE1hcmNoYW5kcyAgIFNlcmZzICAgVGVycmVzICAgUGFsYWlzPC9sPjxsPiAgICAgICAgICAgICAgICAgICAgICAgICBkXFwnYXJtZXM8L2w+PGw+PC9sPic7dmFyIGFycjE9aXQuZ2FtZS5nZXRVc2Vyc0FzQXJyYXkoKTtpZihhcnIxKXt2YXIgdXNlcixpbmRleD0tMSxsMT1hcnIxLmxlbmd0aC0xO3doaWxlKGluZGV4PGwxKXt1c2VyPWFycjFbaW5kZXgrPTFdO291dCs9JzxpbnZlcnQ+PGw+ICcrKHVzZXIuZ2V0UmFuaygpKSsnICcrKHVzZXIuZ2V0TmFtZSgpKSsnIGRlICcrKHVzZXIuZ2V0Q291bnRyeSgpKSsnPC9sPjwvaW52ZXJ0PjxsPiAgICAgICAgICAgICAnKyh1c2VyLmdldE5vYmxlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoNCxcIiBcIikpKycgICAgICcrKHVzZXIuZ2V0T3N0KCkudG9TdHJpbmcoKS5wYWRTdGFydCg4LFwiIFwiKSkrJyAgICAgICAnKyh1c2VyLmdldE1hcmNoYW5kcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoNCxcIiBcIikpKycgJysodXNlci5nZXRQZW9wbGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDEwLFwiIFwiKSkrJyAnKyh1c2VyLmdldExhbmQoKS50b1N0cmluZygpLnBhZFN0YXJ0KDgsXCIgXCIpKSsnICAgICcrKHVzZXIuZ2V0UGFsYWlzKCkudG9TdHJpbmcoKS5wYWRTdGFydCg0LFwiIFwiKSkrJyU8L2w+Jzt9IH0gb3V0Kz0nPGw+PC9sPjxsPiAgICAgICAgICAgICAgICYjODYxNzs8L2w+JztyZXR1cm4gb3V0O1xufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBQYXJ0eSB9IGZyb20gJy4vUGFydF9BYnN0cmFjdC5jbGFzcydcblxuXG5pbXBvcnQgdHBsXzVfY29tYmF0X3Nob3cgZnJvbSAnLi90ZW1wbGF0ZXMvNV9jb21iYXRfc2hvdy50cGwnXG5cbmV4cG9ydCBjbGFzcyBDb21iYXQgZXh0ZW5kcyBQYXJ0eSB7XG5cbiAgc3RhdGljIGV4ZWN1dGUodXNlckRlZmVuZGVyLCB1c2VyQXR0YWtlciwgb3N0QXR0YWtlciwgc3RhcnQgPSB0cnVlKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAvL2NvbnNvbGUuaW5mbyhcImV4ZWN1dGUoXCIgKyB1c2VyRGVmZW5kZXIgKyBcIiwgXCIgKyB1c2VyQXR0YWtlciArIFwiLCBcIiArIG9zdEF0dGFrZXIgKyBcIilcIik7XG4gICAgICAvL2NvbnNvbGUuaW5mbyh1c2VyRGVmZW5kZXIpO1xuICAgICAgLy9jb25zb2xlLmluZm8odXNlckF0dGFrZXIpO1xuICAgICAgLy9jb25zb2xlLmluZm8oXCJleGVjdXRlKFwiICsgdXNlckRlZmVuZGVyLmdldE5hbWUoKSArIFwiLCBcIiArIHVzZXJBdHRha2VyLmdldE5hbWUoKSArIFwiLCBcIiArIG9zdEF0dGFrZXIgKyBcIilcIik7XG4gICAgICBsZXQgb3N0RGVmZW5kZXIgPSB1c2VyRGVmZW5kZXIuZ2V0T3N0KCk7XG4gICAgICBsZXQgb3N0RWZmaWNpZW5jeURlZmVuZGVyID0gdXNlckRlZmVuZGVyLmdldFNhdGlzZmFjdGlvbk9zdCgpIC8gMTAwO1xuICAgICAgbGV0IG9zdEF0dGFrZXJSZW1haW5pbmcgPSB1c2VyQXR0YWtlci5nZXRPc3QoKSAtIG9zdEF0dGFrZXI7XG4gICAgICBsZXQgb3N0RWZmaWNpZW5jeUF0dGFrZXIgPSB1c2VyQXR0YWtlci5nZXRTYXRpc2ZhY3Rpb25Pc3QoKSAvIDEwMDtcbiAgICAgIGxldCBsYW5kID0gMDtcbiAgICAgIGlmKHN0YXJ0KXtcbiAgICAgICAgbGFuZCA9IChnYW1lLnJvbGxEaWNlRmxvYXQoMCwxMCkgKiBvc3RBdHRha2VyICogIG9zdEVmZmljaWVuY3lBdHRha2VyIC8gMTApICsgKGdhbWUucm9sbERpY2VGbG9hdCgwLDEwKSAqICgob3N0QXR0YWtlciAqIG9zdEVmZmljaWVuY3lBdHRha2VyKSAtIG9zdERlZmVuZGVyKSk7XG4gICAgICAgIGxhbmQgPSBNYXRoLmZsb29yKGxhbmQpO1xuICAgICAgICBpZihsYW5kIDwgMCl7XG4gICAgICAgICAgbGFuZCA9IGdhbWUucm9sbERpY2VJbnRlZ2VyKDAsMTApXG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmluZm8oXCJwb3RlbnRpYWwgbGFuZCA6IFwiICsgbGFuZClcbiAgICAgIH1cblxuICAgICAgbGV0IGJhbGFuY2UgPSBvc3RBdHRha2VyICogb3N0RWZmaWNpZW5jeUF0dGFrZXIgKiAxMDAgLyAob3N0QXR0YWtlciAqIG9zdEVmZmljaWVuY3lBdHRha2VyICArIG9zdERlZmVuZGVyICogb3N0RWZmaWNpZW5jeURlZmVuZGVyKTtcbiAgICAgIGlmKGJhbGFuY2UgPCAyMCl7XG4gICAgICAgIGJhbGFuY2UgPSAyMDtcbiAgICAgIH1cbiAgICAgIGlmKGJhbGFuY2UgPiA4MCl7XG4gICAgICAgIGJhbGFuY2UgPSA4MDtcbiAgICAgIH1cblxuICAgICAgbGV0IGRpY2UgPSBnYW1lLnJvbGxEaWNlSW50ZWdlcigpO1xuICAgICAgLy9jb25zb2xlLmluZm8oXCJhdmFudGFnZSBhdHRhY2tlciB2cyBkZWZlbmRlciA9IFwiICsgYmFsYW5jZSArIFwiJSAsIGRpY2UgPSBcIiArIGRpY2UpXG5cbiAgICAgIGlmKG9zdEF0dGFrZXIgPD0gMCB8fCBvc3REZWZlbmRlciA8PSAwKXtcbiAgICAgICAgaWYoc3RhcnQpe1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKENvbWJhdC5nZXRSZXN1bHRzKHVzZXJEZWZlbmRlci5nZXRPc3QoKSA9PSAwLCBsYW5kLCB1c2VyRGVmZW5kZXIsIHVzZXJBdHRha2VyKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihkaWNlIDwgYmFsYW5jZSl7XG4gICAgICAgIC8vRGVmZW5kZXIgLTFcbiAgICAgICAgLy9jb25zb2xlLmluZm8oXCJvc3REZWZlbmRlciAtLSA6IFwiICsgb3N0RGVmZW5kZXIpO1xuICAgICAgICBvc3REZWZlbmRlci0tO1xuICAgICAgICB1c2VyRGVmZW5kZXIuYWRkT3N0KC0xKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vQXR0YWNrZXIgLTFcbiAgICAgICAgLy9jb25zb2xlLmluZm8oXCJvc3RBdHRha2VyIC0tIDogXCIgKyBvc3RBdHRha2VyKTtcbiAgICAgICAgb3N0QXR0YWtlci0tO1xuICAgICAgICB1c2VyQXR0YWtlci5hZGRPc3QoLTEpO1xuICAgICAgfVxuICAgICAgLy9jb25zb2xlLmluZm8oXCJyZW1haW5pbmcgZm9yY2UgYXR0YWtlciA6IFwiICsgKG9zdEF0dGFrZXJSZW1haW5pbmcgKyBvc3RBdHRha2VyKSArIFwiIHZzIFwiICsgb3N0RGVmZW5kZXIpO1xuXG5cbiAgICAgIFBhcnR5LnJlZnJlc2hXaXRoVGVtcGxhdGUodHBsXzVfY29tYmF0X3Nob3csIHtcIm9zdEF0dGFrZXJcIjogb3N0QXR0YWtlciwgXCJvc3REZWZlbmRlclwiOiBvc3REZWZlbmRlcn0pO1xuXG4gICAgICBDb21iYXQuc2xlZXAoMjAwKS50aGVuKCgpID0+IHtcbiAgICAgICAgQ29tYmF0LmV4ZWN1dGUodXNlckRlZmVuZGVyLCB1c2VyQXR0YWtlciwgb3N0QXR0YWtlciwgZmFsc2UpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYoc3RhcnQpe1xuICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShDb21iYXQuZ2V0UmVzdWx0cyh1c2VyRGVmZW5kZXIuZ2V0T3N0KCkgPT0gMCwgbGFuZCwgdXNlckRlZmVuZGVyLCB1c2VyQXR0YWtlcikpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBnZXRSZXN1bHRzKHdpbiwgbGFuZCwgdXNlckRlZmVuZGVyLCB1c2VyQXR0YWtlcil7XG4gICAgaWYod2luKXtcbiAgICAgIGxhbmQgPSBsYW5kICogMztcbiAgICB9XG5cbiAgICBpZihsYW5kID4gdXNlckRlZmVuZGVyLmdldExhbmQoKSl7XG4gICAgICAvL2NvbnNvbGUuaW5mbyhcInJlY3RpZiBsYW5kIHRvIFwiICsgdXNlckRlZmVuZGVyLmdldExhbmQoKSlcbiAgICAgIGxhbmQgPSB1c2VyRGVmZW5kZXIuZ2V0TGFuZCgpO1xuICAgIH1cblxuICAgIC8vY29uc29sZS5pbmZvKFwiY2FwdHVyZWQgbGFuZCA6IFwiICsgbGFuZCk7XG4gICAgdXNlckF0dGFrZXIuYWRkTGFuZChsYW5kKTtcblxuICAgIC8vSWYgZGVhdGggb2YgZGVmZW5kZXJcbiAgICAvLyAxIGNoYW5jZSBvbiAyIGlmIGF0dGFrZXIgdG9vayArMjUlIG9mIGxhbmRcbiAgICAvLyBvciBpZiB0aGVyZSBpcyBubyBtb3JlIGxhbmRcbiAgICBsZXQgZGVhdGggPSBmYWxzZTtcbiAgICBpZigodXNlckRlZmVuZGVyLmdldExhbmQoKSAvIDQgPCBsYW5kICYmIGdhbWUucm9sbERpY2VJbnRlZ2VyKDAsMSkpIHx8IHVzZXJEZWZlbmRlci5nZXRMYW5kKCkgPD0gbGFuZCl7XG4gICAgICBkZWF0aCA9IHRydWU7XG4gICAgICBnYW1lLmtpbGwodXNlckRlZmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXNlckRlZmVuZGVyLmFkZExhbmQoLTEgKiBsYW5kKTtcbiAgICB9XG5cblxuICAgIHJldHVybiB7XCJ3aW5cIiA6IHdpbiwgXCJsYW5kXCIgOiBsYW5kLCBcInVzZXJBdHRha2VyXCI6IHVzZXJBdHRha2VyLCBcImRlYXRoXCIgOiBkZWF0aH07XG4gIH1cblxuICBzdGF0aWMgc2xlZXAobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4gIH1cbn1cbiIsIlxuZXhwb3J0IGNsYXNzIENvbnN0IHtcblxuICAgIHN0YXRpYyBnZXQgbGFuZFByaWNlKCl7IHJldHVybiAyO31cbiAgICBzdGF0aWMgZ2V0IGZvaXJlUHJpY2UoKXsgcmV0dXJuIDEwMDA7fVxuICAgIHN0YXRpYyBnZXQgbW91bGluUHJpY2UoKXsgcmV0dXJuIDIwMDA7fVxuICAgIHN0YXRpYyBnZXQgZm9uZGVyaWVQcmljZSgpeyByZXR1cm4gNzAwMDt9XG4gICAgc3RhdGljIGdldCBjaGFudGllclByaWNlKCl7IHJldHVybiA4MDAwO31cbiAgICBzdGF0aWMgZ2V0IG9zdFByaWNlKCl7IHJldHVybiA1O31cbiAgICBzdGF0aWMgZ2V0IHBhbGFpc1ByaWNlKCl7IHJldHVybiA1MDAwO31cblxuXG4gICAgc3RhdGljIGdldCBLRVlCT0FSRF9JTlQoKSB7IHJldHVybiBbOTYsOTcsOTgsOTksMTAwLDEwMSwxMDIsMTAzLDEwNCwxMDUsNDcsNDgsNDksNTAsNTEsNTIsNTMsNTQsNTUsNTYsNTddOyB9IC8vIDAtOVxuICAgIHN0YXRpYyBnZXQgS0VZQk9BUkRfQUxQSEEoKSB7IHJldHVybiBbNjUsNjYsNjcsNjgsNjksNzAsNzEsNzIsNzMsNzQsNzUsNzYsNzcsNzgsNzksODAsODEsODIsODMsODQsODUsODYsODcsODgsODksOTBdOyB9IC8vIGEtelxuICAgIHN0YXRpYyBnZXQgS0VZQk9BUkRfU1lNQigpIHsgcmV0dXJuIFszMiwxMTAsMTg4LDU5LDU4LDE2MSwxNzBdOyB9IC8vIHNwYWNlIGRvdCAsIDsgOiAhICpcbiAgICBzdGF0aWMgZ2V0IEtFWUJPQVJEX0lOVF9UWVBJTkcoKSB7IHJldHVybiBDb25zdC5LRVlCT0FSRF9JTlQuY29uY2F0KFs4XSk7IH0gLy8gMC05ICsgYmFja3NwYWNlIGZvciB0eXBpbmdcbiAgICBzdGF0aWMgZ2V0IEtFWUJPQVJEX05BTUVfVFlQSU5HKCkgeyByZXR1cm4gQ29uc3QuS0VZQk9BUkRfSU5ULmNvbmNhdChDb25zdC5LRVlCT0FSRF9BTFBIQSkuY29uY2F0KENvbnN0LktFWUJPQVJEX1NZTUIpLmNvbmNhdChbOF0pOyB9IC8vIDAtOSArIGFscGhhICsgc29tZSBzeW1ib2wgKyBiYWNrc3BhY2UgZm9yIHR5cGluZ1xuICAgIHN0YXRpYyBnZXQgS0VZQk9BUkRfUFJJQ0VfVFlQSU5HKCkgeyByZXR1cm4gQ29uc3QuS0VZQk9BUkRfSU5ULmNvbmNhdChbOCwxMTBdKTsgfS8vIDAtOSArIGJhY2tzcGFjZSArIGRvdCBrZXkgZm9yIHR5cGluZ1xuXG4gICAgc3RhdGljIGdldCBLRVlCT0FSRF9SRVRVUk4oKSB7IHJldHVybiBbMTNdOyB9IC8vIEVOVEVSL1JFVFVSTiDihqlcbiAgICBzdGF0aWMgZ2V0IEtFWUJPQVJEX09ORSgpIHsgcmV0dXJuIFs5Nyw0OV07IH0gLy8gMVxuICAgIHN0YXRpYyBnZXQgS0VZQk9BUkRfVFdPKCkgeyByZXR1cm4gWzk4LDUwXTsgfSAvLyAyXG4gICAgc3RhdGljIGdldCBLRVlCT0FSRF9USFJFRSgpIHsgcmV0dXJuIFs5OSw1MV07IH0gLy8gM1xuICAgIHN0YXRpYyBnZXQgS0VZQk9BUkRfT1koKSB7IHJldHVybiBbNzksODBdOyB9IC8vIG8veVxuICAgIHN0YXRpYyBnZXQgS0VZQk9BUkRfTigpIHsgcmV0dXJuIFs3OF07IH0gLy8gblxufVxuIiwiZXhwb3J0IGNsYXNzIEVycm9ycyB7XG4gIHN0YXRpYyBub3RJbXBsZW1lbnRlZCgpe3JldHVybiBcIk5PVF9JTVBMRU1FTlRFRFwifVxuXG4gIC8vTWFya2V0ICYgTGFuZFxuICBzdGF0aWMgbm90RW5vdWdodExhbmQoKXtyZXR1cm4gXCJOT1RfRU5PVUdIVF9MQU5EXCJ9XG4gIHN0YXRpYyBub3RFbm91Z2h0U3RvY2soKXtyZXR1cm4gXCJOT1RfRU5PVUdIVF9TVE9DS1wifVxuICBzdGF0aWMgcHJpY2VUb29IaWdoKCl7cmV0dXJuIFwiUFJJQ0VfVE9PX0hJR0hcIn1cbiAgc3RhdGljIGNhbnRCdXlNeXNlbGYoKXtyZXR1cm4gXCJDQU5UX0JVWV9NWVNFTEZcIn1cbiAgc3RhdGljIG5vdEVub3VnaHRNb25leSgpe3JldHVybiBcIk5PVF9FTk9VR0hUX01PTkVZXCJ9XG4gIHN0YXRpYyBub3RFbm91Z2h0U3RvY2tPbk1hcmtldCgpe3JldHVybiBcIk5PVF9FTk9VR0hUX1NUT0NLX09OX01BUktFVFwifVxuXG4gIC8vRGVtb2dyYXBoaWVcbiAgLy9zdGF0aWMgbm90RW5vdWdodFN0b2NrKCl7cmV0dXJuIFwiTk9UX0VOT1VHSFRfU1RPQ0tcIn1cbiAgc3RhdGljIGF0TGFzdDEwUGVyY2VudCgpe3JldHVybiBcIkFUX0xBU1RfMTBfUEVSQ0VOVFwifVxuXG4gIC8vVGF4ZXNcbiAgLy9zdGF0aWMgbm90RW5vdWdodE1vbmV5KCl7cmV0dXJuIFwiTk9UX0VOT1VHSFRfTU9ORVlcIn1cbiAgc3RhdGljIHRheGVBVG9vSGlnaCgpe3JldHVybiBcIlRBWEVfQV9UT09fSElHSFwifVxuICBzdGF0aWMgdGF4ZUJUb29IaWdoKCl7cmV0dXJuIFwiVEFYRV9CX1RPT19ISUdIXCJ9XG4gIHN0YXRpYyB0YXhlQ1Rvb0hpZ2goKXtyZXR1cm4gXCJUQVhFX0NfVE9PX0hJR0hcIn1cbiAgc3RhdGljIG5vdEVub3VnaHROb2JsZXMoKXtyZXR1cm4gXCJOT1RfRU5PVUdIVF9OT0JMRVNcIn1cblxuICAvL0ZpZ2h0XG4gIC8vc3RhdGljIG5vdEVub3VnaHROb2JsZXMoKXtyZXR1cm4gXCJOT1RfRU5PVUdIVF9OT0JMRVNcIn1cbiAgc3RhdGljIGZpZ2h0TXlzZWxmKCl7cmV0dXJuIFwiRklHSFRfTVlTRUxGXCJ9XG4gIHN0YXRpYyBub3RFbm91Z2h0T3N0KCl7cmV0dXJuIFwiTk9UX0VOT1VHSFRfT1NUXCJ9XG59XG4iLCJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9Vc2VyLmNsYXNzJ1xuaW1wb3J0IHsgTWFya2V0IH0gZnJvbSAnLi9NYXJrZXQuY2xhc3MnXG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcblxuICByZXNldCgpe1xuICAgIHRoaXMudXNlcnMgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy51c2Vycy5zZXQoMSxuZXcgVXNlcigxLCBcIkh1Z3Vlc1wiLCBcIkZyYW5jZVwiKSk7XG4gICAgdGhpcy51c2Vycy5zZXQoMixuZXcgVXNlcigyLCBcIkFydGh1clwiLCBcIkJyZXRhZ25lXCIpKTtcbiAgICB0aGlzLnVzZXJzLnNldCgzLG5ldyBVc2VyKDMsIFwiT3Rob25cIiwgXCJHZXJtYW5pZVwiKSk7XG4gICAgdGhpcy51c2Vycy5zZXQoNCxuZXcgVXNlcig0LCBcIlJvZHJpZ3VlXCIsIFwiQ2FzdGlsbGVcIikpO1xuICAgIHRoaXMudXNlcnMuc2V0KDUsbmV3IFVzZXIoNSwgXCJJdmFuXCIsIFwiTW9zY292aWVcIikpO1xuICAgIHRoaXMudXNlcnMuc2V0KDYsbmV3IFVzZXIoNiwgXCJLdWLDqW5pXCIsIFwiUGVyc2VcIikpO1xuICAgIHRoaXMuYmFyYmFyZXMgPSBuZXcgVXNlcigwLCBcIkJhcmJhcmVzXCIsIFwiQmFyYmFyZXNcIiwgNjAwMCk7XG4gICAgdGhpcy5tYXJrZXQgPSBuZXcgTWFya2V0KCk7XG4gICAgdGhpcy55ZWFyID0gMTtcbiAgICB0aGlzLnJhdHMgPSAwO1xuICAgIHRoaXMubWV0ZW8gPSBudWxsO1xuICAgIHRoaXMuY3VycmVudFBsYXllciA9IDE7XG4gICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBkZWFkIG9yIGFsaXZlIHVzZXJcbiAgICovXG4gIGdldFVzZXJzKCl7XG4gICAgcmV0dXJuIHRoaXMudXNlcnM7XG4gIH1cblxuICBnZXRVc2Vyc0FzQXJyYXkoKXtcbiAgICByZXR1cm4gWy4uLiB0aGlzLmdldFVzZXJzKCkudmFsdWVzKCldO1xuICB9XG5cbiAgZ2V0VXNlckJ5SWQodXNlcklkKXtcbiAgICBsZXQgdXNlcnMgPSBbIC4uLiB0aGlzLnVzZXJzLnZhbHVlcygpIF07XG4gICAgZm9yICh2YXIgcG9zIGluIHVzZXJzKSB7XG4gICAgICBpZih1c2Vyc1twb3NdLmdldElkKCkgPT0gdXNlcklkKXtcbiAgICAgICAgcmV0dXJuIHVzZXJzW3Bvc107XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0Q3VycmVudFVzZXIoKXtcbiAgICByZXR1cm4gdGhpcy51c2Vycy5nZXQodGhpcy5jdXJyZW50UGxheWVyKTtcbiAgfVxuXG4gIHVwZGF0ZVVzZXIodXNlcil7XG4gICAgdGhpcy51c2Vycy5zZXQodXNlci5nZXRJZCgpLCB1c2VyKTtcbiAgfVxuXG4gIGdldE9wcG9uZW50cygpe1xuICAgIGxldCBpID0gMTtcbiAgICBsZXQgb3Bwb25lbnRzID0gbmV3IE1hcCgpO1xuICAgIGlmKHRoaXMuYmFyYmFyZXMuZ2V0TGFuZCgpID4gMCl7XG4gICAgICBvcHBvbmVudHMuc2V0KGksIHRoaXMuYmFyYmFyZXMpO1xuICAgICAgaSsrO1xuICAgIH1cbiAgICBsZXQgdXNlcnMgPSBbIC4uLiB0aGlzLmdldFVzZXJzKCkudmFsdWVzKCkgXTtcbiAgICBmb3IgKHZhciBwb3MgaW4gdXNlcnMpIHtcbiAgICAgIG9wcG9uZW50cy5zZXQoaSwgdXNlcnNbcG9zXSk7XG4gICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiBvcHBvbmVudHM7XG4gIH1cblxuICBnZXRPcHBvbmVudHNBc0FycmF5KCl7XG4gICAgcmV0dXJuIFsuLi4gdGhpcy5nZXRPcHBvbmVudHMoKS52YWx1ZXMoKV07XG4gIH1cblxuICBnZXRTYWxlc0luQXJyYXkoKXtcbiAgICByZXR1cm4gdGhpcy5tYXJrZXQuZ2V0U2FsZXNJbkFycmF5KCk7XG4gIH1cblxuICBnZXRNYXJrZXQoKXtcbiAgICByZXR1cm4gdGhpcy5tYXJrZXQ7XG4gIH1cblxuICBzZXRNZXRlbyhtZXRlbyl7XG4gICAgdGhpcy5tZXRlbyA9IG1ldGVvO1xuICB9XG4gIGdldE1ldGVvKCl7XG4gICAgcmV0dXJuIHRoaXMubWV0ZW87XG4gIH1cblxuICBnZXRCYXJiYXJlcygpe1xuICAgIHJldHVybiB0aGlzLmJhcmJhcmVzO1xuICB9XG5cbiAgc2V0UmF0cyhyYXRzKXtcbiAgICB0aGlzLnJhdHMgPSByYXRzXG4gIH1cbiAgZ2V0UmF0cygpe1xuICAgIHJldHVybiB0aGlzLnJhdHM7XG4gIH1cblxuICBuZXh0WWVhcigpe1xuICAgIHRoaXMueWVhcisrO1xuICAgIGNvbnN0IGkgPSB0aGlzLnVzZXJzLmtleXMoKTtcbiAgICBmb3IgKGxldCB1IG9mIGkpIHtcbiAgICAgICAgdGhpcy51c2Vycy5nZXQodSkucmVzZXROZXdZZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgcm9sbERpY2VJbnRlZ2VyKHN0YXJ0ID0gMCwgZW5kID0gMTAwKXtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGVuZCAtIHN0YXJ0KSkgKyBzdGFydDtcbiAgfVxuXG4gIHJvbGxEaWNlRmxvYXQoc3RhcnQgPSAwLCBlbmQgPSAxMDApe1xuICAgIHJldHVybiAoTWF0aC5yYW5kb20oKSAqIChlbmQgLSBzdGFydCkpICsgc3RhcnQ7XG4gIH1cblxuICBwdXJnZUVycm9ycygpe1xuICAgIHRoaXMuZXJyb3JzID0gW107XG4gIH1cblxuICBhZGRFcnJvcihlcnJvcil7XG4gICAgdGhpcy5lcnJvcnMucHVzaChlcnJvcik7XG4gIH1cblxuICByZXNvbHZlTWFya2V0T2ZmZXIocXVhbnRpdHkpe1xuICAgIC8vY29uc29sZS5pbmZvKFwicmVzb2x2ZU1hcmtldE9mZmVyKCkgXCIgKyBxdWFudGl0eSk7XG4gICAgbGV0IHNhbGUgPSB0aGlzLm1hcmtldC5nZXRTYWxlcygpLmdldCh0aGlzLm1hcmtldC5nZXRPZmZlcigpW1wibWFya2V0SWRcIl0pO1xuICAgIGxldCBzZWxsZXIgPSB0aGlzLnVzZXJzLmdldChzYWxlWydpZFVzZXInXSk7XG4gICAgbGV0IGJ1eWVyID0gdGhpcy5nZXRDdXJyZW50VXNlcigpXG5cbiAgICBzZWxsZXIuYWRkTW9uZXkoc2FsZS5wcmljZSAqIHF1YW50aXR5KTtcbiAgICBidXllci5hZGRNb25leSgtMSAqIChzYWxlLnByaWNlICogcXVhbnRpdHkpKTtcbiAgICBidXllci5hZGRTdXBwbHkocXVhbnRpdHkpO1xuICAgIHNhbGUuYm9pc3NlYXV4ID0gc2FsZS5ib2lzc2VhdXggLSBxdWFudGl0eTtcblxuICAgIGlmKHNhbGUuYm9pc3NlYXV4ID09IDApe1xuICAgICAgdGhpcy5tYXJrZXQucmVtb3ZlU2FsZSh0aGlzLm1hcmtldC5nZXRPZmZlcigpW1wibWFya2V0SWRcIl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1hcmtldC5nZXRTYWxlcygpLnNldCh0aGlzLm1hcmtldC5nZXRPZmZlcigpW1wibWFya2V0SWRcIl0sIHNhbGUpO1xuICAgIH1cbiAgICB0aGlzLnVzZXJzLnNldChzZWxsZXIuZ2V0SWQoKSwgc2VsbGVyKTtcbiAgICB0aGlzLnVzZXJzLnNldChidXllci5nZXRJZCgpLCBidXllcik7XG4gIH1cblxuICBraWxsKHVzZXIpe1xuICAgIC8vY29uc29sZS5pbmZvKFwia2lsbCgpIFwiICsgdXNlci5nZXRJZCgpKTtcblxuICAgIGlmKHVzZXIuZ2V0SWQoKSA9PSAwKXtcbiAgICAgIHVzZXIuc2V0TGFuZCgwKTtcbiAgICB9XG5cbiAgICB0aGlzLnVzZXJzLmRlbGV0ZSh1c2VyLmdldElkKCkpO1xuICAgIHRoaXMubWFya2V0LnJlbW92ZVNhbGVPZlVzZXIodXNlci5nZXRJZCgpKTtcbiAgfVxuXG5cbn1cbiIsImltcG9ydCB7IFBhcnR5IH0gZnJvbSAnLi9QYXJ0X0Fic3RyYWN0LmNsYXNzJ1xuXG5cbmV4cG9ydCBjbGFzcyBLQiB7XG5cbiAgc3RhdGljIGxpc3RlbihtLCB0ID0gW10sIHAgPSB7fSwgdHlwaW5nID0gZmFsc2Upe1xuICAgIEtCLmJ1ZmZlciA9IFwiXCI7XG4gICAgS0Iuc3RvcCgpXG5cbiAgICBsZXQgdmFycyA9IHtcIm1hcHBpbmdcIjptLCBcInRlbXBsYXRlc1wiOnQsIFwiYWRkaXRpb25uYWxQYXJhbWV0ZXJzXCI6cCwgXCJ0eXBpbmdcIjp0eXBpbmd9O1xuICAgIEtCLmJpbmRlciA9IEtCLmtleWJvYXJkQmluZGVyLmJpbmQobnVsbCwgdmFycyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIEtCLmJpbmRlciwgZmFsc2UpO1xuICB9XG5cbiAgc3RhdGljIGxpc3RlblR5cGluZyhtLHQscCl7XG4gICAgS0IubGlzdGVuKG0sdCxwLHRydWUpO1xuICB9XG5cbiAgc3RhdGljIHN0b3AoKXtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJyxLQi5iaW5kZXIpO1xuICB9XG5cbiAgc3RhdGljIHN0YXJ0VHlwaW5nKGtleSl7XG4gICAgLy9jb25zb2xlLmluZm8oXCJLQi5zdGFydFR5cGluZyhcIiArIHRoaXMuX2J1ZmZlciArIFwiKVwiKTtcbiAgICAvL2NvbnNvbGUuaW5mbyhcIkJ1ZmZlciBhdmFudCA9IFwiICsgS0IuYnVmZmVyKTtcbiAgICBpZihrZXkgPT0gOCkge1xuICAgICAgS0IuYnVmZmVyID0gS0IuYnVmZmVyLnN1YnN0cmluZygwLCBLQi5idWZmZXIubGVuZ3RoIC0gMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIEtCLmJ1ZmZlciArPSBLQi5ldmVudEtleVRvSlNjb2RlKGtleSk7XG4gICAgfVxuICAgIC8vY29uc29sZS5pbmZvKFwiQnVmZmVyIGFwcsOocyA9IFwiICsgS0IuYnVmZmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBrZXlib2FyZEJpbmRlcih2YXJzLCBldmVudCl7XG5cbiAgICAvL0F2b2lkIGFueXRoaW5nIGJ1dCBGNVxuICAgIGlmKGV2ZW50LmtleUNvZGUgIT09IDExNil7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHZhcnMubWFwcGluZy5mb3JFYWNoKChtYXApID0+IHtcbiAgICAgIGlmKG1hcC5rZXkuaW5jbHVkZXMoZXZlbnQua2V5Q29kZSkpe1xuXG4gICAgICAgIGlmKCF2YXJzLnR5cGluZyl7XG4gICAgICAgICAgS0Iuc3RvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYobWFwLmNhbGxiYWNrID09PSBLQi5zdGFydFR5cGluZyl7XG4gICAgICAgICAgICBLQi5zdGFydFR5cGluZyhldmVudC5rZXlDb2RlKTtcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleUNvZGUgIT09IDEzKXtcbiAgICAgICAgICAgICAgICBQYXJ0eS5yZWZyZXNoV2l0aFRlbXBsYXRlcyh2YXJzLnRlbXBsYXRlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBQYXJ0eS5yZWZyZXNoV2l0aFRlbXBsYXRlcyh2YXJzLnRlbXBsYXRlcyk7XG4gICAgICAgIHJldHVybiBtYXAuY2FsbGJhY2soS0IuZXZlbnRLZXlUb0pTY29kZShldmVudC5rZXlDb2RlKSwgdmFycy5hZGRpdGlvbm5hbFBhcmFtZXRlcnMpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgZXZlbnRLZXlUb0pTY29kZShrZXkpe1xuICAgIGlmKGtleSA9PSAxMTApIHtyZXR1cm4gXCIuXCI7fSAvLyBkb3RcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgoOTYgPD0ga2V5ICYmIGtleSA8PSAxMDUpPyBrZXktNDggOiBrZXkpO1xuICB9XG5cbiAgc3RhdGljIGlzRnVuY3Rpb24oZnVuY3Rpb25Ub0NoZWNrKSB7XG4gICByZXR1cm4gZnVuY3Rpb25Ub0NoZWNrICYmIHt9LnRvU3RyaW5nLmNhbGwoZnVuY3Rpb25Ub0NoZWNrKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfVxuXG4gIGdldCBidWZmZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1ZmZlciB8fCBcIlwiO1xuICB9XG5cbiAgc2V0IGJ1ZmZlcih2KSB7XG4gICAgdGhpcy5fYnVmZmVyID0gdjtcbiAgfVxuICBnZXQgYmluZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9iaW5kZXIgfHwgbnVsbDtcbiAgfVxuXG4gIHNldCBiaW5kZXIodikge1xuICAgIHRoaXMuX2JpbmRlciA9IHY7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBNYXJrZXQge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIHJlc2V0KCl7XG4gICAgdGhpcy5zYWxlcyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLmFkZFNhbGVzKDMsXCJJbmRlXCIsIDEwMCwgNTApO1xuICAgIHRoaXMuYWRkU2FsZXMoMixcIlN1aXNzZVwiLCAxMDAsIDAuMDEpO1xuICAgIHRoaXMub2ZmZXIgPSBudWxsO1xuICAgIHRoaXMucHJvbWlzZSA9IG51bGw7XG4gICAgLy9jb25zb2xlLmluZm8odGhpcy5zYWxlcyk7XG4gIH1cblxuICBhZGRTYWxlcyhpZFVzZXIsIGNvdW50cnksIGJvaXNzZWF1eCwgcHJpY2Upe1xuXG4gICAgbGV0IGtleVZhbHVlID0gdGhpcy5nZXRTYWxlT2ZVc2VyKGlkVXNlcik7XG5cbiAgICBpZihrZXlWYWx1ZSA9PT0gbnVsbCl7XG4gICAgICAvL2NvbnNvbGUuaW5mbyhcImFkZCBuZXcgc2FsZSBmb3IgXCIgKyBjb3VudHJ5KVxuICAgICAgdGhpcy5zYWxlcy5zZXQodGhpcy5zYWxlcy5zaXplICsgMSx7XCJpZFVzZXJcIjppZFVzZXIsIFwiY291bnRyeVwiOiBjb3VudHJ5LCBcImJvaXNzZWF1eFwiOiBib2lzc2VhdXgsIFwicHJpY2VcIjogcHJpY2V9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9jb25zb2xlLmluZm8oXCJ1cGRhdGUgc2FsZSBmb3IgXCIgKyBjb3VudHJ5KVxuICAgICAgbGV0IHNhbGUgPSBrZXlWYWx1ZVsxXTtcbiAgICAgIHNhbGVbXCJwcmljZVwiXSA9IChzYWxlW1wicHJpY2VcIl0gKiBzYWxlW1wiYm9pc3NlYXV4XCJdICsgcHJpY2UgKiBib2lzc2VhdXgpIC8gKHNhbGVbXCJib2lzc2VhdXhcIl0gKyAgYm9pc3NlYXV4KTtcbiAgICAgIHNhbGVbXCJib2lzc2VhdXhcIl0gKz0gYm9pc3NlYXV4O1xuICAgICAgdGhpcy5zYWxlcy5zZXQoa2V5VmFsdWVbMF0sIHNhbGUpO1xuICAgIH1cbiAgICB0aGlzLm9yZGVyU2FsZXMoKTtcbiAgfVxuXG4gIGdldFNhbGVzKCl7XG4gICAgcmV0dXJuIHRoaXMuc2FsZXM7XG4gIH1cblxuICBnZXRTYWxlc0luQXJyYXkoKXtcbiAgICAvL2NvbnNvbGUuaW5mbyhcImdldFNhbGVzSW5BcnJheSgpXCIpXG4gICAgcmV0dXJuIFsuLi4gdGhpcy5zYWxlcy52YWx1ZXMoKV07XG4gIH1cblxuICBnZXRTYWxlT2ZVc2VyKGlkVXNlcil7XG4gICAgLy9jb25zb2xlLmluZm8oXCJnZXRTYWxlT2ZVc2VyKCkgXCIgKyBpZFVzZXIpO1xuICAgIGxldCBsaXN0ZSA9IHRoaXMuZ2V0U2FsZXNJbkFycmF5KCk7XG4gICAgZm9yKCB2YXIgcG9zIGluIGxpc3RlKXtcbiAgICAgIGlmKGxpc3RlW3Bvc11bJ2lkVXNlciddID09PSBpZFVzZXIpe1xuICAgICAgICByZXR1cm4gW3BhcnNlSW50KHBvcykrMSwgbGlzdGVbcG9zXV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVtb3ZlU2FsZU9mVXNlcihpZFVzZXIpe1xuICAgIC8vY29uc29sZS5pbmZvKFwicmVtb3ZlU2FsZU9mVXNlcigpIFwiICsgaWRVc2VyKTtcbiAgICBsZXQgbGlzdGUgPSB0aGlzLmdldFNhbGVzSW5BcnJheSgpO1xuICAgIGZvciggdmFyIHBvcyBpbiBsaXN0ZSl7XG4gICAgICBpZihsaXN0ZVtwb3NdWydpZFVzZXInXSA9PT0gaWRVc2VyKXtcbiAgICAgICAgdGhpcy5yZW1vdmVTYWxlKHBhcnNlSW50KHBvcykrMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlT2ZmZXIoYnV5ZXJJZCwgbWFya2V0SWQpe1xuICAgIHRoaXMub2ZmZXIgPSB7XCJidXllcklkXCIgOiBidXllcklkLCBcIm1hcmtldElkXCI6IG1hcmtldElkfTtcbiAgfVxuXG4gIGdldE9mZmVyKCl7XG4gICAgcmV0dXJuIHRoaXMub2ZmZXI7XG4gIH1cblxuICBjcmVhdGVQcm9taXNlKHNlbGxlcklkLCBxdWFudGl0eSl7XG4gICAgdGhpcy5wcm9taXNlID0ge1wic2VsbGVySWRcIiA6IHNlbGxlcklkLCBcInF1YW50aXR5XCI6IHF1YW50aXR5fTtcbiAgfVxuXG4gIGdldFByb21pc2UoKXtcbiAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xuICB9XG5cbiAgcmVtb3ZlU2FsZShtYXJrZXRJZCl7XG4gICAgLy9jb25zb2xlLmluZm8oXCJyZW1vdmVTYWxlKClcIiArIG1hcmtldElkKVxuICAgIHRoaXMuc2FsZXMuZGVsZXRlKG1hcmtldElkKTtcbiAgICB0aGlzLm9yZGVyU2FsZXMoKTtcbiAgfVxuXG4gIG9yZGVyU2FsZXMoKXtcbiAgICAvL2NvbnNvbGUuaW5mbyhcIm9yZGVyU2FsZXMoKVwiKVxuICAgIGxldCBsaXN0ZSA9IHRoaXMuZ2V0U2FsZXNJbkFycmF5KCk7XG4gICAgbGV0IG1pbnVzSWRVc2VyPTA7XG4gICAgbGV0IG1pbnVzU2FsZTtcbiAgICBsZXQgcG9zaXRpb247XG4gICAgbGV0IHBvc2l0aW9uUmVtb3ZlZDtcbiAgICBsZXQgbmV3TWFwID0gbmV3IE1hcCgpO1xuXG4gICAgbGV0IG1heCA9IDEwOyAvLyBBdm9pZCB3ZWlyZCBpbmZpbnkgbG9vcFxuICAgIHdoaWxlKGxpc3RlLmxlbmd0aCA+IDAgJiYgbWF4ID4gMCl7XG4gICAgICBwb3NpdGlvblJlbW92ZWQgPSAwO1xuICAgICAgbWludXNJZFVzZXIgPSAxMDAwO1xuICAgICAgZm9yKCB2YXIgcG9zIGluIGxpc3RlKXtcbiAgICAgICAgICBpZihtaW51c0lkVXNlciA+IGxpc3RlW3Bvc10uaWRVc2VyKXtcbiAgICAgICAgICAgIG1pbnVzSWRVc2VyID0gbGlzdGVbcG9zXS5pZFVzZXI7XG4gICAgICAgICAgICBtaW51c1NhbGUgPSBsaXN0ZVtwb3NdO1xuICAgICAgICAgICAgcG9zaXRpb25SZW1vdmVkID0gcG9zO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG5ld01hcC5zZXQobmV3TWFwLnNpemUrMSwgbWludXNTYWxlKTtcbiAgICAgIGxpc3RlLnNwbGljZShwb3NpdGlvblJlbW92ZWQsIDEpO1xuICAgICAgbWF4LS07XG4gICAgfVxuICAgIHRoaXMuc2FsZXMgPSBuZXdNYXA7XG5cbiAgfVxufVxuIiwiaW1wb3J0IHsgS0IgfSBmcm9tICcuL0tCLmNsYXNzJ1xuaW1wb3J0IHsgQ29uc3QgfSBmcm9tICcuL0NvbnN0LmNsYXNzJ1xuaW1wb3J0IHsgUGFydHkgfSBmcm9tICcuL1BhcnRfQWJzdHJhY3QuY2xhc3MnXG5pbXBvcnQgeyBUdXRvIH0gZnJvbSAnLi9QYXJ0MV9UdXRvLmNsYXNzJ1xuaW1wb3J0IHsgRm9vZCB9IGZyb20gJy4vUGFydDJfRm9vZC5jbGFzcydcbmltcG9ydCB7IFVzZXJVdGlscyB9IGZyb20gJy4vVXNlci51dGlscy5jbGFzcydcbmltcG9ydCB0cGxfMCBmcm9tICcuL3RlbXBsYXRlcy8wLnRwbCdcbmltcG9ydCB0cGxfMF8xIGZyb20gJy4vdGVtcGxhdGVzLzBfMS50cGwnXG5pbXBvcnQgdHBsXzBfMWEgZnJvbSAnLi90ZW1wbGF0ZXMvMF8xYS50cGwnXG5cbmV4cG9ydCBjbGFzcyBTdGFydCBleHRlbmRzIFBhcnR5IHtcblxuICBzdGF0aWMgaG9tZSgpe1xuICAgIEtCLmxpc3RlbihbXG4gICAgICB7a2V5OiBDb25zdC5LRVlCT0FSRF9PWSwgY2FsbGJhY2s6IFR1dG8uc3RhcnRUdXRvfSwgLy8gTy9ZXG4gICAgICB7a2V5OiBDb25zdC5LRVlCT0FSRF9OLCBjYWxsYmFjazogU3RhcnQuYXNrTnVtYmVyT2ZQbGF5ZXJ9IC8vIE5cbiAgICBdKTtcbiAgICBQYXJ0eS5yZWZyZXNoV2l0aFRlbXBsYXRlKHRwbF8wKTtcbiAgfVxuXG4gIHN0YXRpYyBhc2tOdW1iZXJPZlBsYXllcigpe1xuICAgIC8vY29uc29sZS5pbmZvKFwiYXNrTnVtYmVyT2ZQbGF5ZXJcIilcbiAgICBLQi5saXN0ZW4oW1xuICAgICAge2tleTogQ29uc3QuS0VZQk9BUkRfT05FLCBjYWxsYmFjazogU3RhcnQuYXNrTmFtZU9mUGxheWVyfSAvLyAxXG4gICAgXSk7XG4gICAgUGFydHkucmVmcmVzaFdpdGhUZW1wbGF0ZSh0cGxfMF8xKTtcbiAgfVxuXG4gIHN0YXRpYyBhc2tOYW1lT2ZQbGF5ZXIoKXtcbiAgICAvL2NvbnNvbGUuaW5mbyhcImFza05hbWVPZlBsYXllclwiKVxuICAgIEtCLmxpc3RlblR5cGluZyhbXG4gICAgICB7a2V5OiBDb25zdC5LRVlCT0FSRF9OQU1FX1RZUElORywgY2FsbGJhY2s6IEtCLnN0YXJ0VHlwaW5nfSwgLy8gMVxuICAgICAge2tleTogQ29uc3QuS0VZQk9BUkRfUkVUVVJOLCBjYWxsYmFjazogU3RhcnQuc2F2ZVBsYXllcn0sIC8vIDFcbiAgICBdLCBbdHBsXzBfMWFdKTtcbiAgICBQYXJ0eS5yZWZyZXNoV2l0aFRlbXBsYXRlKHRwbF8wXzFhKTtcbiAgfVxuXG4gIHN0YXRpYyBzYXZlUGxheWVyKCl7XG4gICAgbGV0IGlucHV0ID0gS0IuYnVmZmVyO1xuICAgIGlmKGlucHV0ICE9IFwiXCIgJiYgaW5wdXQgPT1cIkpcIil7XG4gICAgICBnYW1lLmdldEN1cnJlbnRVc2VyKCkuc2V0U2V4ZSgxKTtcbiAgICB9XG5cbiAgICBnYW1lLmdldEN1cnJlbnRVc2VyKCkuc2V0TmFtZShVc2VyVXRpbHMuZ2V0TmFtZShnYW1lLmdldEN1cnJlbnRVc2VyKCksIGlucHV0KSk7XG5cbiAgICBGb29kLm1ldGVvQW5kUmF0cygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBLQiB9IGZyb20gJy4vS0IuY2xhc3MnXG5pbXBvcnQgeyBDb25zdCB9IGZyb20gJy4vQ29uc3QuY2xhc3MnXG5pbXBvcnQgeyBQYXJ0eSB9IGZyb20gJy4vUGFydF9BYnN0cmFjdC5jbGFzcydcbmltcG9ydCB7IFN0YXJ0IH0gZnJvbSAnLi9QYXJ0MF9TdGFydC5jbGFzcydcblxuaW1wb3J0IHRwbF8xX3R1dG8xIGZyb20gJy4vdGVtcGxhdGVzLzFfdHV0bzEudHBsJ1xuaW1wb3J0IHRwbF8xX3R1dG8yIGZyb20gJy4vdGVtcGxhdGVzLzFfdHV0bzIudHBsJ1xuaW1wb3J0IHRwbF8xX3R1dG8zIGZyb20gJy4vdGVtcGxhdGVzLzFfdHV0bzMudHBsJ1xuaW1wb3J0IHRwbF8xX3R1dG80IGZyb20gJy4vdGVtcGxhdGVzLzFfdHV0bzQudHBsJ1xuaW1wb3J0IHRwbF8xX3R1dG81IGZyb20gJy4vdGVtcGxhdGVzLzFfdHV0bzUudHBsJ1xuaW1wb3J0IHRwbF8xX3R1dG82IGZyb20gJy4vdGVtcGxhdGVzLzFfdHV0bzYudHBsJ1xuaW1wb3J0IHRwbF8xX3R1dG83IGZyb20gJy4vdGVtcGxhdGVzLzFfdHV0bzcudHBsJ1xuXG5leHBvcnQgY2xhc3MgVHV0byBleHRlbmRzIFBhcnR5IHtcblxuICBzdGF0aWMgc3RhcnRUdXRvKCl7XG4gICAgS0IubGlzdGVuKFtcbiAgICAgIHtrZXk6IENvbnN0LktFWUJPQVJEX1JFVFVSTiwgY2FsbGJhY2s6IFR1dG8udHV0bzJ9LCAvLyDihqlcbiAgICBdKTtcbiAgICBQYXJ0eS5yZWZyZXNoV2l0aFRlbXBsYXRlKHRwbF8xX3R1dG8xKTtcbiAgfVxuXG4gIHN0YXRpYyB0dXRvMigpe1xuICAgIEtCLmxpc3RlbihbXG4gICAgICB7a2V5OiBDb25zdC5LRVlCT0FSRF9SRVRVUk4sIGNhbGxiYWNrOiBUdXRvLnR1dG8zfSwgLy8g4oapXG4gICAgXSk7XG4gICAgUGFydHkucmVmcmVzaFdpdGhUZW1wbGF0ZSh0cGxfMV90dXRvMik7XG4gIH1cblxuICBzdGF0aWMgdHV0bzMoKXtcbiAgICBLQi5saXN0ZW4oW1xuICAgICAge2tleTogQ29uc3QuS0VZQk9BUkRfUkVUVVJOLCBjYWxsYmFjazogVHV0by50dXRvNH0sIC8vIOKGqVxuICAgIF0pO1xuICAgIFBhcnR5LnJlZnJlc2hXaXRoVGVtcGxhdGUodHBsXzFfdHV0bzMpO1xuICB9XG5cbiAgc3RhdGljIHR1dG80KCl7XG4gICAgS0IubGlzdGVuKFtcbiAgICAgIHtrZXk6IENvbnN0LktFWUJPQVJEX1JFVFVSTiwgY2FsbGJhY2s6IFR1dG8udHV0bzV9LCAvLyDihqlcbiAgICBdKTtcbiAgICBQYXJ0eS5yZWZyZXNoV2l0aFRlbXBsYXRlKHRwbF8xX3R1dG80KTtcbiAgfVxuXG4gIHN0YXRpYyB0dXRvNSgpe1xuICAgIEtCLmxpc3RlbihbXG4gICAgICB7a2V5OiBDb25zdC5LRVlCT0FSRF9SRVRVUk4sIGNhbGxiYWNrOiBUdXRvLnR1dG82fSwgLy8g4oapXG4gICAgXSk7XG4gICAgUGFydHkucmVmcmVzaFdpdGhUZW1wbGF0ZSh0cGxfMV90dXRvNSk7XG4gIH1cblxuICBzdGF0aWMgdHV0bzYoKXtcbiAgICBLQi5saXN0ZW4oW1xuICAgICAge2tleTogQ29uc3QuS0VZQk9BUkRfUkVUVVJOLCBjYWxsYmFjazogVHV0by50dXRvN30sIC8vIOKGqVxuICAgIF0pO1xuICAgIFBhcnR5LnJlZnJlc2hXaXRoVGVtcGxhdGUodHBsXzFfdHV0bzYpO1xuICB9XG5cbiAgc3RhdGljIHR1dG83KCl7XG4gICAgS0IubGlzdGVuKFtcbiAgICAgIHtrZXk6IENvbnN0LktFWUJPQVJEX1JFVFVSTiwgY2FsbGJhY2s6IFR1dG8udHV0b19lbmR9LCAvLyDihqlcbiAgICBdKTtcbiAgICBQYXJ0eS5yZWZyZXNoV2l0aFRlbXBsYXRlKHRwbF8xX3R1dG83KTtcbiAgfVxuXG4gIHN0YXRpYyB0dXRvX2VuZCgpe1xuICAgIFN0YXJ0LmFza051bWJlck9mUGxheWVyKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEtCIH0gZnJvbSAnLi9LQi5jbGFzcydcbmltcG9ydCB7IENvbnN0IH0gZnJvbSAnLi9Db25zdC5jbGFzcydcbmltcG9ydCB7IFBhcnR5IH0gZnJvbSAnLi9QYXJ0X0Fic3RyYWN0LmNsYXNzJ1xuaW1wb3J0IHsgRXJyb3JzIH0gZnJvbSAnLi9FcnJvcnMuY2xhc3MnXG5pbXBvcnQgeyBEZW1vZ3JhcGh5IH0gZnJvbSAnLi9QYXJ0M19EZW1vZ3JhcGh5LmNsYXNzJ1xuaW1wb3J0IHsgVXNlclV0aWxzIH0gZnJvbSAnLi9Vc2VyLnV0aWxzLmNsYXNzJ1xuXG5pbXBvcnQgdHBsXzBfMWIgZnJvbSAnLi90ZW1wbGF0ZXMvMF8xYi50cGwnXG5pbXBvcnQgdHBsXzJfYmFzZSBmcm9tICcuL3RlbXBsYXRlcy8yX2Jhc2UudHBsJ1xuaW1wb3J0IHRwbF8yIGZyb20gJy4vdGVtcGxhdGVzLzIudHBsJ1xuaW1wb3J0IHRwbF8yXzEgZnJvbSAnLi90ZW1wbGF0ZXMvMl8xLnRwbCdcbmltcG9ydCB0cGxfMl8xYiBmcm9tICcuL3RlbXBsYXRlcy8yXzFiLnRwbCdcbmltcG9ydCB0cGxfMl8yIGZyb20gJy4vdGVtcGxhdGVzLzJfMi50cGwnXG5pbXBvcnQgdHBsXzJfMmIgZnJvbSAnLi90ZW1wbGF0ZXMvMl8yYi50cGwnXG5pbXBvcnQgdHBsXzJfMyBmcm9tICcuL3RlbXBsYXRlcy8yXzMudHBsJ1xuaW1wb3J0IHRwbF8yXzQgZnJvbSAnLi90ZW1wbGF0ZXMvMl80LnRwbCdcbmltcG9ydCB0cGxfMl81IGZyb20gJy4vdGVtcGxhdGVzLzJfNS50cGwnXG5cbmV4cG9ydCBjbGFzcyBGb29kIGV4dGVuZHMgUGFydHl7XG5cbiAgc3RhdGljIG1ldGVvQW5kUmF0cygpe1xuICAgIC8vY29uc29sZS5pbmZvKFwic3RlcDJNZXRlb1wiKVxuICAgIGdhbWUuc2V0TWV0ZW8oZ2FtZS5yb2xsRGljZUludGVnZXIoMSw2KSk7XG5cbiAgICBnYW1lLnNldFJhdHMoZ2FtZS5yb2xsRGljZUludGVnZXIoNSwzMCkpO1xuICAgIGdhbWUuZ2V0Q3VycmVudFVzZXIoKS5zZXRIYXJ2ZXN0KFVzZXJVdGlscy5jYWxjdWxOZXdIYXJ2ZXN0KGdhbWUuZ2V0Q3VycmVudFVzZXIoKSkpO1xuICAgIGdhbWUuZ2V0Q3VycmVudFVzZXIoKS5hZGRTdXBwbHkoVXNlclV0aWxzLmNhbGN1bE5ld1N1cHBseShnYW1lLmdldEN1cnJlbnRVc2VyKCkpKTtcblxuICAgIFBhcnR5LnJlZnJlc2hXaXRoVGVtcGxhdGUodHBsXzBfMWIpO1xuICAgIC8vRXhwbGljaXRseSByZW1vdmUgZXZlbnQgbGlzdGVuaW5nXG4gICAgS0Iuc3RvcCgpO1xuICAgIFBhcnR5LnBhdXNlKEZvb2QuY2hvaWNlTWFya2V0KTtcbiAgfVxuXG4gIC8vIE1hbmFnZSBNYXJrZXQgJiBmb29kXG4gIHN0YXRpYyBjaG9pY2VNYXJrZXQoKXtcbiAgICAvL2NvbnNvbGUuaW5mbyhcInN0ZXAyXCIpXG4gICAgS0IubGlzdGVuKFtcbiAgICAgIHtrZXk6IENvbnN0LktFWUJPQVJEX09ORSwgY2FsbGJhY2s6IEZvb2QuYnV5T25NYXJrZXR9LCAvLyAxXG4gICAgICB7a2V5OiBDb25zdC5LRVlCT0FSRF9UV08sIGNhbGxiYWNrOiBGb29kLnNlbGxPbk1hcmtldH0sIC8vIDJcbiAgICAgIHtrZXk6IENvbnN0LktFWUJPQVJEX1RIUkVFLCBjYWxsYmFjazogRm9vZC5zZWxsTGFuZH0sIC8vIDNcbiAgICAgIHtrZXk6IENvbnN0LktFWUJPQVJEX1JFVFVSTiwgY2FsbGJhY2s6IEZvb2QuZ2l2ZVRvT3N0fSwgLy8g4oapXG4gICAgXSk7XG5cbiAgICBQYXJ0eS5yZWZyZXNoV2l0aFRlbXBsYXRlcyhbdHBsXzJfYmFzZSwgdHBsXzJdKTtcbiAgfVxuXG4gIHN0YXRpYyBidXlPbk1hcmtldCgpe1xuICAgIC8vY29uc29sZS5pbmZvKFwiYnV5IG1hcmtldFwiKTtcbiAgICBLQi5saXN0ZW4oW1xuICAgICAge2tleTogQ29uc3QuS0VZQk9BUkRfSU5ULCBjYWxsYmFjazogRm9vZC5idXlPbk1hcmtldEZyb219LCAvLyAwLTlcbiAgICAgIHtrZXk6IENvbnN0LktFWUJPQVJEX1JFVFVSTiwgY2FsbGJhY2s6IEZvb2QuY2hvaWNlTWFya2V0fSwgLy8g4oapXG4gICAgXSk7XG4gICAgUGFydHkucmVmcmVzaFdpdGhUZW1wbGF0ZXMoW3RwbF8yX2Jhc2UsIHRwbF8yXzFdKTtcbiAgfVxuXG4gIHN0YXRpYyBidXlPbk1hcmtldEZyb20oZnJvbSl7XG4gICAgLy9jb25zb2xlLmluZm8oXCJidXlPbk1hcmtldEZyb20gXCIgKyBmcm9tKTtcbiAgICBsZXQgbWFya2V0SWQ9cGFyc2VJbnQoZnJvbSk7XG4gICAgbGV0IG1hcmtldD1nYW1lLmdldE1hcmtldCgpO1xuXG4gICAgLy9pZiBlbXB0eVxuICAgIGlmKCBtYXJrZXRJZCA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuIEZvb2QuY2hvaWNlTWFya2V0KCk7XG4gICAgfVxuXG4gICAgLy9pZiB2ZW5kb3IgZG9lc24ndCBleGlzdFxuICAgIGlmKCFtYXJrZXQuZ2V0U2FsZXMoKS5oYXMobWFya2V0SWQpKSB7XG4gICAgICByZXR1cm4gRm9vZC5idXlPbk1hcmtldCgpO1xuICAgIH1cblxuICAgIC8vSWYgTXlzZWxmXG4gICAgaWYobWFya2V0LmdldFNhbGVzKCkuZ2V0KG1hcmtldElkKVtcImlkVXNlclwiXSA9PT0gZ2FtZS5nZXRDdXJyZW50VXNlcigpLmdldElkKCkpe1xuICAgICAgZ2FtZS5hZGRFcnJvcihFcnJvcnMuY2FudEJ1eU15c2VsZigpKTtcbiAgICAgIHJldHVybiBGb29kLmJ1eU9uTWFya2V0KCk7XG4gICAgfVxuXG4gICAgbWFya2V0LmNyZWF0ZU9mZmVyKGdhbWUuZ2V0Q3VycmVudFVzZXIoKS5nZXRJZCgpLCBtYXJrZXRJZCk7XG5cbiAgICBLQi5saXN0ZW5UeXBpbmcoW1xuICAgICAge2tleTogQ29uc3QuS0VZQk9BUkRfSU5UX1RZUElORywgY2FsbGJhY2s6IEtCLnN0YXJ0VHlwaW5nfSwgLy8gMC05ICsgYmFja3NwYWNlXG4gICAgICB7a2V5OiBDb25zdC5LRVlCT0FSRF9SRVRVUk4sIGNhbGxiYWNrOiBGb29kLmJ1eU9uTWFya2V0RnJvbUFuZEhvd011Y2h9LCAvLyDihqlcbiAgICBdLCBbdHBsXzJfYmFzZSwgdHBsXzJfMWJdKTtcblxuICAgIFBhcnR5LnJlZnJlc2hXaXRoVGVtcGxhdGVzKFt0cGxfMl9iYXNlLCB0cGxfMl8xYl0pO1xuICB9XG5cbiAgc3RhdGljIGJ1eU9uTWFya2V0RnJvbUFuZEhvd011Y2goKXtcbiAgICAvL2NvbnNvbGUuaW5mbyhcImJ1eU9uTWFya2V0RnJvbUFuZEhvd011Y2hcIik7XG4gICAgbGV0IHF1YW50aXR5PXBhcnNlSW50KEtCLmJ1ZmZlcik7XG4gICAgbGV0IG1hcmtldD1nYW1lLmdldE1hcmtldCgpO1xuXG4gICAgbGV0IG9mZmVyID0gbWFya2V0LmdldE9mZmVyKCk7XG4gICAgbGV0IHNhbGUgPSBtYXJrZXQuZ2V0U2FsZXMoKS5nZXQob2ZmZXJbXCJtYXJrZXRJZFwiXSk7XG5cbiAgICBpZihpc05hTihxdWFudGl0eSkpe1xuICAgICAgcmV0dXJuIEZvb2QuY2hvaWNlTWFya2V0KCk7XG4gICAgfVxuXG4gICAgaWYoc2FsZVtcImJvaXNzZWF1eFwiXSA8IHF1YW50aXR5KSB7XG4gICAgICBnYW1lLmFkZEVycm9yKEVycm9ycy5ub3RFbm91Z2h0U3RvY2tPbk1hcmtldCgpKTtcbiAgICAgIHJldHVybiBGb29kLmJ1eU9uTWFya2V0RnJvbShvZmZlcltcIm1hcmtldElkXCJdKTtcbiAgICB9XG5cbiAgICBpZihzYWxlW1wicHJpY2VcIl0gKiBxdWFudGl0eSA+IGdhbWUuZ2V0Q3VycmVudFVzZXIoKS5nZXRNb25leSgpKSB7XG4gICAgICBnYW1lLmFkZEVycm9yKEVycm9ycy5ub3RFbm91Z2h0TW9uZXkoKSk7XG4gICAgICByZXR1cm4gRm9vZC5idXlPbk1hcmtldEZyb20ob2ZmZXJbXCJtYXJrZXRJZFwiXSk7XG4gICAgfVxuXG4gICAgZ2FtZS5yZXNvbHZlTWFya2V0T2ZmZXIocXVhbnRpdHkpO1xuXG4gICAgRm9vZC5jaG9pY2VNYXJrZXQoKTtcbiAgfVxuXG5cbiAgc3RhdGljIHNlbGxPbk1hcmtldCgpe1xuICAgIC8vY29uc29sZS5pbmZvKFwic2VsbCBtYXJrZXRcIik7XG4gICAgS0IubGlzdGVuVHlwaW5nKFtcbiAgICAgIHtrZXk6IENvbnN0LktFWUJPQVJEX0lOVF9UWVBJTkcsIGNhbGxiYWNrOiBLQi5zdGFydFR5cGluZ30sIC8vIDAtOSArIGJhY2tzcGFjZVxuICAgICAge2tleTogQ29uc3QuS0VZQk9BUkRfUkVUVVJOLCBjYWxsYmFjazogRm9vZC5zZWxsT25NYXJrZXRXaXRoUHJpY2V9LCAvLyDihqlcbiAgICBdLCBbdHBsXzJfYmFzZSwgdHBsXzJfMl0pO1xuXG4gICAgUGFydHkucmVmcmVzaFdpdGhUZW1wbGF0ZXMoW3RwbF8yX2Jhc2UsIHRwbF8yXzJdKTtcbiAgfVxuXG4gIHN0YXRpYyBzZWxsT25NYXJrZXRXaXRoUHJpY2UocXVhbnRpdHlQYXJhbSl7XG4gICAgLy9jb25zb2xlLmluZm8oXCJzZWxsT25NYXJrZXRXaXRoUHJpY2VcIik7XG4gICAgbGV0IG1hcmtldD1nYW1lLmdldE1hcmtldCgpO1xuICAgIGxldCBxdWFudGl0eT1wYXJzZUludChLQi5idWZmZXIpO1xuICAgIGlmKE51bWJlci5pc0ludGVnZXIocXVhbnRpdHlQYXJhbSkpe1xuICAgICAgcXVhbnRpdHkgPSBxdWFudGl0eVBhcmFtO1xuICAgIH1cblxuICAgIGlmKGlzTmFOKHF1YW50aXR5KSl7XG4gICAgICByZXR1cm4gRm9vZC5jaG9pY2VNYXJrZXQoKTtcbiAgICB9XG5cbiAgICBpZihxdWFudGl0eSA+IGdhbWUuZ2V0Q3VycmVudFVzZXIoKS5nZXRTdXBwbHkoKSl7XG4gICAgICAgIGdhbWUuYWRkRXJyb3IoRXJyb3JzLm5vdEVub3VnaHRTdG9jaygpKTtcbiAgICAgICAgcmV0dXJuIEZvb2Quc2VsbE9uTWFya2V0KCk7XG4gICAgfVxuXG4gICAgbWFya2V0LmNyZWF0ZVByb21pc2UoZ2FtZS5nZXRDdXJyZW50VXNlcigpLmdldElkKCksIHF1YW50aXR5KTtcbiAgICBLQi5saXN0ZW5UeXBpbmcoW1xuICAgICAge2tleTogQ29uc3QuS0VZQk9BUkRfUFJJQ0VfVFlQSU5HLCBjYWxsYmFjazogS0Iuc3RhcnRUeXBpbmd9LCAvLyAwLTkgKyBiYWNrc3BhY2UgKyBkb3RcbiAgICAgIHtrZXk6IENvbnN0LktFWUJPQVJEX1JFVFVSTiwgY2FsbGJhY2s6IEZvb2QuZG9TZWxsTWFya2V0V2l0aFByaWNlfSwgLy8g4oapXG4gICAgXSwgW3RwbF8yX2Jhc2UsIHRwbF8yXzJiXSk7XG5cbiAgICBQYXJ0eS5yZWZyZXNoV2l0aFRlbXBsYXRlcyhbdHBsXzJfYmFzZSwgdHBsXzJfMmJdKTtcbiAgfVxuXG4gIHN0YXRpYyBkb1NlbGxNYXJrZXRXaXRoUHJpY2UoKXtcbiAgICAvL2NvbnNvbGUuaW5mbyhcImRvU2VsbE1hcmtldFdpdGhQcmljZVwiKTtcbiAgICBsZXQgbWFya2V0PWdhbWUuZ2V0TWFya2V0KCk7XG4gICAgbGV0IHF1YW50aXR5ID0gbWFya2V0LmdldFByb21pc2UoKS5xdWFudGl0eTtcbiAgICBsZXQgcHJpY2U9TnVtYmVyLnBhcnNlRmxvYXQoS0IuYnVmZmVyKS50b0ZpeGVkKDIpO1xuXG4gICAgaWYoaXNOYU4ocHJpY2UpKXtcbiAgICAgIHJldHVybiBGb29kLmNob2ljZU1hcmtldCgpXG4gICAgfVxuXG4gICAgaWYocHJpY2UgPiAxNSl7XG4gICAgICBnYW1lLmFkZEVycm9yKEVycm9ycy5wcmljZVRvb0hpZ2goKSk7XG4gICAgICByZXR1cm4gRm9vZC5zZWxsT25NYXJrZXRXaXRoUHJpY2UocXVhbnRpdHkpO1xuICAgIH1cblxuICAgIC8vY29uc29sZS5pbmZvKFwicXVhbnRpdHkgOiBcIiArIHF1YW50aXR5KVxuICAgIC8vY29uc29sZS5pbmZvKFwicHJpY2UgOiBcIiArIHByaWNlKVxuICAgIG1hcmtldC5hZGRTYWxlcyhnYW1lLmdldEN1cnJlbnRVc2VyKCkuZ2V0SWQoKSwgZ2FtZS5nZXRDdXJyZW50VXNlcigpLmdldENvdW50cnkoKSwgcXVhbnRpdHksIHByaWNlKTtcbiAgICBnYW1lLmdldEN1cnJlbnRVc2VyKCkuYWRkU3VwcGx5KC0xICogcXVhbnRpdHkpO1xuICAgIEZvb2QuY2hvaWNlTWFya2V0KCk7XG4gIH1cblxuXG5cblxuICAvL1Byb3Bvc2Ugc2VsbGluZyBMYW5kXG4gIHN0YXRpYyBzZWxsTGFuZCgpe1xuICAgIC8vY29uc29sZS5pbmZvKFwic2VsbCBsYW5kXCIpXG4gICAgS0IubGlzdGVuVHlwaW5nKFtcbiAgICAgIHtrZXk6IENvbnN0LktFWUJPQVJEX0lOVF9UWVBJTkcsIGNhbGxiYWNrOiBLQi5zdGFydFR5cGluZ30sIC8vIDAtOSArIGJhY2tzcGFjZVxuICAgICAge2tleTogQ29uc3QuS0VZQk9BUkRfUkVUVVJOLCBjYWxsYmFjazogRm9vZC5kb1NlbGxMYW5kfSwgLy8g4oapXG4gICAgXSwgW3RwbF8yX2Jhc2UsIHRwbF8yXzNdKTtcblxuICAgIFBhcnR5LnJlZnJlc2hXaXRoVGVtcGxhdGVzKFt0cGxfMl9iYXNlLCB0cGxfMl8zXSk7XG4gIH1cblxuICAvLyBEbyBzZWxsaW5nIGxhbmRcbiAgc3RhdGljIGRvU2VsbExhbmQoKXtcbiAgICAvL2NvbnNvbGUuaW5mbyhcImdvIHNlbGwgbWFya2V0XCIpXG4gICAgbGV0IGtleWJvYXJkID0gS0IuYnVmZmVyO1xuICAgIGlmKGtleWJvYXJkICE9PSBcIlwiKXtcbiAgICAgIGxldCB1c2VyID0gZ2FtZS5nZXRDdXJyZW50VXNlcigpO1xuICAgICAgaWYodXNlci5nZXRMYW5kKCkgPCBrZXlib2FyZCl7XG4gICAgICAgIGdhbWUuYWRkRXJyb3IoRXJyb3JzLm5vdEVub3VnaHRMYW5kKCkpXG4gICAgICAgIHJldHVybiBGb29kLnNlbGxMYW5kKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1c2VyLmFkZExhbmQoLWtleWJvYXJkKTtcbiAgICAgICAgdXNlci5hZGRNb25leShDb25zdC5sYW5kUHJpY2UgKiBrZXlib2FyZCk7XG4gICAgICB9XG4gICAgfVxuICAgIEZvb2QuY2hvaWNlTWFya2V0KCk7XG4gIH1cblxuICBzdGF0aWMgZ2l2ZVRvT3N0KCl7XG4gICAgS0IubGlzdGVuVHlwaW5nKFtcbiAgICAgIHtrZXk6IENvbnN0LktFWUJPQVJEX0lOVF9UWVBJTkcsIGNhbGxiYWNrOiBLQi5zdGFydFR5cGluZ30sIC8vIDAtOSArIGJhY2tzcGFjZVxuICAgICAge2tleTogQ29uc3QuS0VZQk9BUkRfUkVUVVJOLCBjYWxsYmFjazogRm9vZC5kb0dpdmVUb09zdH0sIC8vIOKGqVxuICAgIF0sIFt0cGxfMl9iYXNlLCB0cGxfMl80XSk7XG4gICAgUGFydHkucmVmcmVzaFdpdGhUZW1wbGF0ZXMoW3RwbF8yX2Jhc2UsIHRwbF8yXzRdKTtcbiAgfVxuXG4gIHN0YXRpYyBkb0dpdmVUb09zdCgpe1xuXG4gICAgbGV0IHF1YW50aXR5PXBhcnNlSW50KEtCLmJ1ZmZlcik7XG4gICAgaWYoaXNOYU4ocXVhbnRpdHkpKXtcbiAgICAgIHF1YW50aXR5ID0gMDtcbiAgICB9XG5cbiAgICBpZihxdWFudGl0eSA+IGdhbWUuZ2V0Q3VycmVudFVzZXIoKS5nZXRTdXBwbHkoKSl7XG4gICAgICAgIGdhbWUuYWRkRXJyb3IoRXJyb3JzLm5vdEVub3VnaHRTdG9jaygpKVxuICAgICAgICByZXR1cm4gRm9vZC5naXZlVG9Pc3QoKTtcbiAgICB9XG5cbiAgICBnYW1lLmdldEN1cnJlbnRVc2VyKCkuYWRkU3VwcGx5KC0xICogcXVhbnRpdHkpO1xuICAgIGdhbWUuZ2V0Q3VycmVudFVzZXIoKS5zZXRTdXBwbHlPc3QocXVhbnRpdHkpO1xuXG4gICAgcmV0dXJuIEZvb2QuZ2l2ZVRvUGVvcGxlKCk7XG4gIH1cblxuICBzdGF0aWMgZ2l2ZVRvUGVvcGxlKCl7XG4gICAgS0IubGlzdGVuVHlwaW5nKFtcbiAgICAgIHtrZXk6IENvbnN0LktFWUJPQVJEX0lOVF9UWVBJTkcsIGNhbGxiYWNrOiBLQi5zdGFydFR5cGluZ30sIC8vIDAtOSArIGJhY2tzcGFjZVxuICAgICAge2tleTogQ29uc3QuS0VZQk9BUkRfUkVUVVJOLCBjYWxsYmFjazogRm9vZC5kb0dpdmVUb1Blb3BsZX0sIC8vIOKGqVxuICAgIF0sIFt0cGxfMl9iYXNlLCB0cGxfMl81XSk7XG4gICAgUGFydHkucmVmcmVzaFdpdGhUZW1wbGF0ZXMoW3RwbF8yX2Jhc2UsIHRwbF8yXzVdKTtcbiAgfVxuXG4gIHN0YXRpYyBkb0dpdmVUb1Blb3BsZSgpe1xuXG4gICAgbGV0IHF1YW50aXR5PXBhcnNlSW50KEtCLmJ1ZmZlcik7XG4gICAgaWYoaXNOYU4ocXVhbnRpdHkpKXtcbiAgICAgIHF1YW50aXR5ID0gMDtcbiAgICB9XG5cblxuICAgIGlmKHF1YW50aXR5ID4gZ2FtZS5nZXRDdXJyZW50VXNlcigpLmdldFN1cHBseSgpKXtcbiAgICAgIC8vY29uc29sZS5pbmZvKEVycm9ycy5ub3RFbm91Z2h0U3RvY2soKSk7XG4gICAgICBnYW1lLmFkZEVycm9yKEVycm9ycy5ub3RFbm91Z2h0U3RvY2soKSlcbiAgICAgIHJldHVybiBGb29kLmdpdmVUb1Blb3BsZSgpO1xuICAgIH1cblxuICAgIGlmKHF1YW50aXR5IDwgZ2FtZS5nZXRDdXJyZW50VXNlcigpLmdldE5lZWRQZW9wbGUoKSAmJiBxdWFudGl0eSA8ICgwLjEgKiBnYW1lLmdldEN1cnJlbnRVc2VyKCkuZ2V0U3VwcGx5KCkpKXtcbiAgICAgIC8vY29uc29sZS5pbmZvKEVycm9ycy5hdExhc3QxMFBlcmNlbnQoKSk7XG4gICAgICBnYW1lLmFkZEVycm9yKEVycm9ycy5hdExhc3QxMFBlcmNlbnQoKSlcbiAgICAgIHJldHVybiBGb29kLmdpdmVUb1Blb3BsZSgpO1xuICAgIH1cblxuICAgIGdhbWUuZ2V0Q3VycmVudFVzZXIoKS5hZGRTdXBwbHkoLTEgKiBxdWFudGl0eSk7XG4gICAgZ2FtZS5nZXRDdXJyZW50VXNlcigpLnNldFN1cHBseVBlb3BsZShxdWFudGl0eSk7XG5cbiAgICByZXR1cm4gRGVtb2dyYXBoeS5kZW1vZ3JhcGh5KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEtCIH0gZnJvbSAnLi9LQi5jbGFzcydcbmltcG9ydCB7IENvbnN0IH0gZnJvbSAnLi9Db25zdC5jbGFzcydcbmltcG9ydCB7IFBhcnR5IH0gZnJvbSAnLi9QYXJ0X0Fic3RyYWN0LmNsYXNzJ1xuaW1wb3J0IHsgVXNlclV0aWxzIH0gZnJvbSAnLi9Vc2VyLnV0aWxzLmNsYXNzJ1xuaW1wb3J0IHsgSW52ZXN0IH0gZnJvbSAnLi9QYXJ0NF9JbnZlc3QuY2xhc3MnXG5cbmltcG9ydCB0cGxfMyBmcm9tICcuL3RlbXBsYXRlcy8zLnRwbCdcblxuZXhwb3J0IGNsYXNzIERlbW9ncmFwaHkgZXh0ZW5kcyBQYXJ0eSB7XG5cbiAgLy9Ew6ltb2dyYXBoaWVcbiAgc3RhdGljIGRlbW9ncmFwaHkoKXtcbiAgICAvL2NvbnNvbGUuaW5mbyhcImRlbW9ncmFwaHlcIilcblxuICAgIGxldCBzYXRpc2ZhY3Rpb25QZW9wbGUgPSBVc2VyVXRpbHMuY2FsY3VsU2F0aXNmYWN0aW9uKGdhbWUuZ2V0Q3VycmVudFVzZXIoKS5nZXROZWVkUGVvcGxlKCksZ2FtZS5nZXRDdXJyZW50VXNlcigpLmdldFN1cHBseVBlb3BsZSgpKTtcbiAgICBsZXQgc2F0aXNmYWN0aW9uT3N0ID0gVXNlclV0aWxzLmNhbGN1bFNhdGlzZmFjdGlvbihnYW1lLmdldEN1cnJlbnRVc2VyKCkuZ2V0TmVlZE9zdCgpLGdhbWUuZ2V0Q3VycmVudFVzZXIoKS5nZXRTdXBwbHlPc3QoKSk7XG5cbiAgICBnYW1lLmdldEN1cnJlbnRVc2VyKCkuc2V0U2F0aXNmYWN0aW9uUGVvcGxlKHNhdGlzZmFjdGlvblBlb3BsZSk7XG4gICAgZ2FtZS5nZXRDdXJyZW50VXNlcigpLnNldFNhdGlzZmFjdGlvbk9zdChzYXRpc2ZhY3Rpb25Pc3QpO1xuXG4gICAgbGV0IHJhbmRvbURlYXRoID0gVXNlclV0aWxzLmNhbGN1bERlYXRocyhnYW1lLmdldEN1cnJlbnRVc2VyKCkpO1xuICAgIGxldCByYW5kb21CaXJ0aCA9IFVzZXJVdGlscy5jYWxjdWxCaXJ0aHMoZ2FtZS5nZXRDdXJyZW50VXNlcigpKTtcbiAgICBsZXQgcmFuZG9tTWlncmFudCA9IFVzZXJVdGlscy5jYWxjdWxNaWdyYW50cyhnYW1lLmdldEN1cnJlbnRVc2VyKCkpO1xuICAgIGxldCByYW5kb21TdGFydmluZ1Blb3BsZSA9IFVzZXJVdGlscy5jYWxjdWxTdGFydmluZ1Blb3BsZShnYW1lLmdldEN1cnJlbnRVc2VyKCkpO1xuICAgIGxldCByYW5kb21TdGFydmluZ09zdCA9IFVzZXJVdGlscy5jYWxjdWxTdGFydmluZ09zdChnYW1lLmdldEN1cnJlbnRVc2VyKCkpO1xuXG4gICAgbGV0IHJhbmRvbVBlb3BsZSA9IHJhbmRvbUJpcnRoIC0gcmFuZG9tRGVhdGggKyByYW5kb21NaWdyYW50IC0gcmFuZG9tU3RhcnZpbmdQZW9wbGU7XG5cbiAgICBnYW1lLmdldEN1cnJlbnRVc2VyKCkuYWRkUGVvcGxlKHJhbmRvbVBlb3BsZSk7XG4gICAgZ2FtZS5nZXRDdXJyZW50VXNlcigpLmFkZE9zdCgtMSAqIHJhbmRvbVN0YXJ2aW5nT3N0KTtcblxuICAgIGxldCB0ZW1wbGF0ZVZhcnMgPSB7XCJyYW5kb21EZWF0aFwiIDogcmFuZG9tRGVhdGgsIFwicmFuZG9tQmlydGhcIiA6IHJhbmRvbUJpcnRoLFxuICAgICAgICAgICAgICAgICAgICAgIFwicmFuZG9tTWlncmFudFwiIDogcmFuZG9tTWlncmFudCwgXCJyYW5kb21TdGFydmluZ1Blb3BsZVwiIDogcmFuZG9tU3RhcnZpbmdQZW9wbGUsXG4gICAgICAgICAgICAgICAgICAgICAgXCJyYW5kb21TdGFydmluZ09zdFwiIDogcmFuZG9tU3RhcnZpbmdPc3QsIFwicmFuZG9tUGVvcGxlXCIgOiByYW5kb21QZW9wbGUgfTtcbiAgICBLQi5saXN0ZW4oW1xuICAgICAge2tleTogQ29uc3QuS0VZQk9BUkRfUkVUVVJOLCBjYWxsYmFjazogSW52ZXN0LmNob2ljZVRheGVzfSwgLy8g4oapXG4gICAgXSk7XG5cbiAgICBQYXJ0eS5yZWZyZXNoV2l0aFRlbXBsYXRlKHRwbF8zLCB0ZW1wbGF0ZVZhcnMpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEtCIH0gZnJvbSAnLi9LQi5jbGFzcydcbmltcG9ydCB7IENvbnN0IH0gZnJvbSAnLi9Db25zdC5jbGFzcydcbmltcG9ydCB7IFBhcnR5IH0gZnJvbSAnLi9QYXJ0X0Fic3RyYWN0LmNsYXNzJ1xuaW1wb3J0IHsgTGFuZHMgfSBmcm9tICcuL1BhcnQ1X0xhbmRzLmNsYXNzJ1xuaW1wb3J0IHsgRXJyb3JzIH0gZnJvbSAnLi9FcnJvcnMuY2xhc3MnXG5pbXBvcnQgeyBVc2VyVXRpbHMgfSBmcm9tICcuL1VzZXIudXRpbHMuY2xhc3MnXG5cblxuaW1wb3J0IHRwbF80X2Jhc2UgZnJvbSAnLi90ZW1wbGF0ZXMvNF9iYXNlLnRwbCdcbmltcG9ydCB0cGxfNCBmcm9tICcuL3RlbXBsYXRlcy80LnRwbCdcbmltcG9ydCB0cGxfNF9hIGZyb20gJy4vdGVtcGxhdGVzLzRfYS50cGwnXG5pbXBvcnQgdHBsXzRfYiBmcm9tICcuL3RlbXBsYXRlcy80X2IudHBsJ1xuaW1wb3J0IHRwbF80X2MgZnJvbSAnLi90ZW1wbGF0ZXMvNF9jLnRwbCdcbmltcG9ydCB0cGxfNF9kIGZyb20gJy4vdGVtcGxhdGVzLzRfZC50cGwnXG5pbXBvcnQgdHBsXzRfZSBmcm9tICcuL3RlbXBsYXRlcy80X2UudHBsJ1xuXG5leHBvcnQgY2xhc3MgSW52ZXN0IGV4dGVuZHMgUGFydHkge1xuXG4gIC8vSW52ZXN0aXNzZW1lbnRcbiAgc3RhdGljIGNob2ljZVRheGVzKCl7XG4gICAgaWYoZ2FtZS5nZXRDdXJyZW50VXNlcigpLmdldEdhaW5zKCkgPT0gbnVsbCl7XG4gICAgICBJbnZlc3QucHJvY2Vzc01vbmV5KCk7XG4gICAgfVxuXG4gICAgLy9jb25zb2xlLmluZm8oXCJzdGVwNFwiKVxuICAgIEtCLmxpc3RlbihbXG4gICAgICB7a2V5OiBDb25zdC5LRVlCT0FSRF9PTkUsIGNhbGxiYWNrOiBJbnZlc3Quc2V0VGF4ZUF9LCAvLyAxXG4gICAgICB7a2V5OiBDb25zdC5LRVlCT0FSRF9UV08sIGNhbGxiYWNrOiBJbnZlc3Quc2V0VGF4ZUJ9LCAvLyAyXG4gICAgICB7a2V5OiBDb25zdC5LRVlCT0FSRF9USFJFRSwgY2FsbGJhY2s6IEludmVzdC5zZXRUYXhlQ30sIC8vIDNcbiAgICAgIHtrZXk6IENvbnN0LktFWUJPQVJEX1JFVFVSTiwgY2FsbGJhY2s6IEludmVzdC5jaG9pY2VJbnZlc3R9LCAvLyDihqlcbiAgICBdKTtcblxuICAgIFBhcnR5LnJlZnJlc2hXaXRoVGVtcGxhdGVzKFt0cGxfNF9iYXNlLCB0cGxfNF0pO1xuICB9XG5cbiAgLy9Qcm9wb3NlIHNldHRpbmcgdGF4ZSBBXG4gIHN0YXRpYyBzZXRUYXhlQSgpe1xuICAgIC8vY29uc29sZS5pbmZvKFwic2V0IFRheGUgQVwiKVxuICAgIEtCLmxpc3RlblR5cGluZyhbXG4gICAgICB7a2V5OiBDb25zdC5LRVlCT0FSRF9JTlRfVFlQSU5HLCBjYWxsYmFjazogS0Iuc3RhcnRUeXBpbmd9LCAvLyAwLTkgKyBiYWNrc3BhY2VcbiAgICAgIHtrZXk6IENvbnN0LktFWUJPQVJEX1JFVFVSTiwgY2FsbGJhY2s6IEludmVzdC5kb1NldFRheGVBfSwgLy8g4oapXG4gICAgXSwgW3RwbF80X2Jhc2UsIHRwbF80X2FdKTtcblxuICAgIFBhcnR5LnJlZnJlc2hXaXRoVGVtcGxhdGVzKFt0cGxfNF9iYXNlLCB0cGxfNF9hXSk7XG4gIH1cblxuICAvLyBEbyBzZXQgVGF4ZSBBXG4gIHN0YXRpYyBkb1NldFRheGVBKCl7XG4gICAgLy9jb25zb2xlLmluZm8oXCJkbyBzZXQgdGF4ZSBBXCIpXG4gICAgbGV0IGtleWJvYXJkID0gS0IuYnVmZmVyO1xuICAgIGlmKGtleWJvYXJkICE9PSBcIlwiKXtcbiAgICAgIGlmKGtleWJvYXJkID4gNTApe1xuICAgICAgICBnYW1lLmFkZEVycm9yKEVycm9ycy50YXhlQVRvb0hpZ2goKSlcbiAgICAgICAgcmV0dXJuIEludmVzdC5zZXRUYXhlQSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2FtZS5nZXRDdXJyZW50VXNlcigpLnNldFRheGVBKGtleWJvYXJkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgSW52ZXN0LmNob2ljZVRheGVzKCk7XG4gIH1cblxuICAvL1Byb3Bvc2Ugc2V0dGluZyB0YXhlIEJcbiAgc3RhdGljIHNldFRheGVCKCl7XG4gICAgLy9jb25zb2xlLmluZm8oXCJzZXQgVGF4ZSBCXCIpXG4gICAgS0IubGlzdGVuVHlwaW5nKFtcbiAgICAgIHtrZXk6IENvbnN0LktFWUJPQVJEX0lOVF9UWVBJTkcsIGNhbGxiYWNrOiBLQi5zdGFydFR5cGluZ30sIC8vIDAtOSArIGJhY2tzcGFjZVxuICAgICAge2tleTogQ29uc3QuS0VZQk9BUkRfUkVUVVJOLCBjYWxsYmFjazogSW52ZXN0LmRvU2V0VGF4ZUJ9LCAvLyDihqlcbiAgICBdLCBbdHBsXzRfYmFzZSwgdHBsXzRfYl0pO1xuXG4gICAgUGFydHkucmVmcmVzaFdpdGhUZW1wbGF0ZXMoW3RwbF80X2Jhc2UsIHRwbF80X2JdKTtcbiAgfVxuXG4gIC8vIERvIHNldCBUYXhlIEJcbiAgc3RhdGljIGRvU2V0VGF4ZUIoKXtcbiAgICAvL2NvbnNvbGUuaW5mbyhcImRvIHNldCB0YXhlIEJcIilcbiAgICBsZXQga2V5Ym9hcmQgPSBLQi5idWZmZXI7XG4gICAgaWYoa2V5Ym9hcmQgIT09IFwiXCIpe1xuICAgICAgaWYoa2V5Ym9hcmQgPiA1MCl7XG4gICAgICAgIGdhbWUuYWRkRXJyb3IoRXJyb3JzLnRheGVCVG9vSGlnaCgpKVxuICAgICAgICByZXR1cm4gSW52ZXN0LnNldFRheGVCKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnYW1lLmdldEN1cnJlbnRVc2VyKCkuc2V0VGF4ZUIoa2V5Ym9hcmQpO1xuICAgICAgfVxuICAgIH1cbiAgICBJbnZlc3QuY2hvaWNlVGF4ZXMoKTtcbiAgfVxuXG4gIC8vUHJvcG9zZSBzZXR0aW5nIHRheGUgQ1xuICBzdGF0aWMgc2V0VGF4ZUMoKXtcbiAgICBLQi5saXN0ZW5UeXBpbmcoW1xuICAgICAge2tleTogQ29uc3QuS0VZQk9BUkRfSU5UX1RZUElORywgY2FsbGJhY2s6IEtCLnN0YXJ0VHlwaW5nfSwgLy8gMC05ICsgYmFja3NwYWNlXG4gICAgICB7a2V5OiBDb25zdC5LRVlCT0FSRF9SRVRVUk4sIGNhbGxiYWNrOiBJbnZlc3QuZG9TZXRUYXhlQ30sIC8vIOKGqVxuICAgIF0sIFt0cGxfNF9iYXNlLCB0cGxfNF9jXSk7XG5cbiAgICBQYXJ0eS5yZWZyZXNoV2l0aFRlbXBsYXRlcyhbdHBsXzRfYmFzZSwgdHBsXzRfY10pO1xuICB9XG5cbiAgLy8gRG8gc2V0IFRheGUgQ1xuICBzdGF0aWMgZG9TZXRUYXhlQygpe1xuICAgIC8vY29uc29sZS5pbmZvKFwiZG8gc2V0IHRheGUgQ1wiKVxuICAgIGxldCBrZXlib2FyZCA9IEtCLmJ1ZmZlcjtcbiAgICBpZihrZXlib2FyZCAhPT0gXCJcIil7XG4gICAgICBpZihrZXlib2FyZCA+IDUwKXtcbiAgICAgICAgZ2FtZS5hZGRFcnJvcihFcnJvcnMudGF4ZUNUb29IaWdoKCkpXG4gICAgICAgIHJldHVybiBJbnZlc3Quc2V0VGF4ZUMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdhbWUuZ2V0Q3VycmVudFVzZXIoKS5zZXRUYXhlQyhrZXlib2FyZCk7XG4gICAgICB9XG4gICAgfVxuICAgIEludmVzdC5jaG9pY2VUYXhlcygpO1xuICB9XG5cbiAgc3RhdGljIGNob2ljZUludmVzdCgpe1xuICAgIC8vY29uc29sZS5pbmZvKFwiY2hvaWNlSW52ZXN0XCIpXG5cbiAgICBLQi5saXN0ZW4oW1xuICAgICAge2tleTogQ29uc3QuS0VZQk9BUkRfSU5ULCBjYWxsYmFjazogSW52ZXN0LmNob2ljZUludmVzdEhvd011Y2h9LCAvLyAwLTlcbiAgICAgIHtrZXk6IENvbnN0LktFWUJPQVJEX1JFVFVSTiwgY2FsbGJhY2s6IExhbmRzLmVudHJ5UG9pbnR9LCAvLyDihqlcbiAgICBdKTtcblxuICAgIFBhcnR5LnJlZnJlc2hXaXRoVGVtcGxhdGVzKFt0cGxfNF9iYXNlLCB0cGxfNF9kXSk7XG4gIH1cblxuICBzdGF0aWMgY2hvaWNlSW52ZXN0SG93TXVjaChpbnZlc3Qpe1xuICAgIC8vY29uc29sZS5pbmZvKFwiY2hvaWNlSW52ZXN0SG93TXVjaCgpXCIgKyBpbnZlc3QpXG4gICAgaWYoaW52ZXN0IDwgMSB8fCBpbnZlc3QgPiA2KXtcbiAgICAgIHJldHVybiBJbnZlc3QuY2hvaWNlSW52ZXN0KCk7XG4gICAgfVxuXG4gICAgS0IubGlzdGVuVHlwaW5nKFtcbiAgICAgIHtrZXk6IENvbnN0LktFWUJPQVJEX0lOVF9UWVBJTkcsIGNhbGxiYWNrOiBLQi5zdGFydFR5cGluZ30sIC8vIDAtOSArIGJhY2tzcGFjZVxuICAgICAge2tleTogQ29uc3QuS0VZQk9BUkRfUkVUVVJOLCBjYWxsYmFjazogSW52ZXN0LmRvSW52ZXN0fSwgLy8g4oapXG4gICAgXSwgW3RwbF80X2Jhc2UsIHRwbF80X2VdLCBbaW52ZXN0XSk7XG5cbiAgICBQYXJ0eS5yZWZyZXNoV2l0aFRlbXBsYXRlcyhbdHBsXzRfYmFzZSwgdHBsXzRfZV0pO1xuICB9XG5cbiAgc3RhdGljIGRvSW52ZXN0KGtleUNvZGUsIGFkZGl0aW9ubmFsUGFyYW1ldGVycyl7XG4gICAgLy9jb25zb2xlLmluZm8oXCJkb0ludmVzdCgpIC1cIiArIGtleUNvZGUgKyBcIi0gLVwiICsgIGFkZGl0aW9ubmFsUGFyYW1ldGVycyArIFwiLVwiKVxuICAgIGxldCBxdWFudGl0eSA9IHBhcnNlSW50KEtCLmJ1ZmZlcik7XG4gICAgaWYoaXNOYU4ocXVhbnRpdHkpKXtcbiAgICAgIHJldHVybiBJbnZlc3QuY2hvaWNlSW52ZXN0KCk7XG4gICAgfVxuICAgIC8vY29uc29sZS5pbmZvKFwicXVvaSA6IFwiKTtcbiAgICAvL2NvbnNvbGUuaW5mbyhhZGRpdGlvbm5hbFBhcmFtZXRlcnMpO1xuICAgIC8vY29uc29sZS5pbmZvKFwicXVvaSA6IFwiICsgYWRkaXRpb25uYWxQYXJhbWV0ZXJzWzBdKTtcbiAgICAvL2NvbnNvbGUuaW5mbyhcInF1YW50aXR5IDogXCIgKyBxdWFudGl0eSk7XG4gICAgbGV0IHdoYXQgPSBwYXJzZUludChhZGRpdGlvbm5hbFBhcmFtZXRlcnNbMF0pO1xuICAgIGxldCBwcmljZSA9IDA7XG4gICAgc3dpdGNoICh3aGF0KSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHByaWNlID0gQ29uc3QuZm9pcmVQcmljZTticmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcHJpY2UgPSBDb25zdC5tb3VsaW5QcmljZTticmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcHJpY2UgPSBDb25zdC5mb25kZXJpZVByaWNlO2JyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBwcmljZSA9IENvbnN0LmNoYW50aWVyUHJpY2U7YnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIHByaWNlID0gQ29uc3Qub3N0UHJpY2U7YnJlYWs7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIHByaWNlID0gQ29uc3QucGFsYWlzUHJpY2U7YnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cblxuICAgIGlmKHdoYXQgPT0gNSAmJiBVc2VyVXRpbHMuZ2V0TWF4T3N0UG9zc2libGUoZ2FtZS5nZXRDdXJyZW50VXNlcigpKSA8IHF1YW50aXR5ICsgZ2FtZS5nZXRDdXJyZW50VXNlcigpLmdldE9zdCgpKXtcbiAgICAgIGdhbWUuYWRkRXJyb3IoRXJyb3JzLm5vdEVub3VnaHROb2JsZXMoKSlcbiAgICAgIHJldHVybiBJbnZlc3QuY2hvaWNlSW52ZXN0SG93TXVjaCh3aGF0KTtcbiAgICB9XG5cbiAgICBpZihwcmljZSAqIHF1YW50aXR5ID4gZ2FtZS5nZXRDdXJyZW50VXNlcigpLmdldE1vbmV5KCkpe1xuICAgICAgZ2FtZS5hZGRFcnJvcihFcnJvcnMubm90RW5vdWdodE1vbmV5KCkpXG4gICAgICByZXR1cm4gSW52ZXN0LmNob2ljZUludmVzdEhvd011Y2god2hhdCk7XG4gICAgfVxuICAgIGdhbWUuZ2V0Q3VycmVudFVzZXIoKS5hZGRNb25leSgtMSAqIHByaWNlICogcXVhbnRpdHkpO1xuXG4gICAgc3dpdGNoICh3aGF0KSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGdhbWUuZ2V0Q3VycmVudFVzZXIoKS5hZGRGb2lyZXMocXVhbnRpdHkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgZ2FtZS5nZXRDdXJyZW50VXNlcigpLmFkZE1vdWxpbnMocXVhbnRpdHkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgZ2FtZS5nZXRDdXJyZW50VXNlcigpLmFkZEZvbmRlcmllcyhxdWFudGl0eSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBnYW1lLmdldEN1cnJlbnRVc2VyKCkuYWRkQ2hhbnRpZXJzKHF1YW50aXR5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIGdhbWUuZ2V0Q3VycmVudFVzZXIoKS5hZGRPc3QocXVhbnRpdHkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgZ2FtZS5nZXRDdXJyZW50VXNlcigpLmFkZFBhbGFpcyhxdWFudGl0eSAqIDEwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cblxuICAgIGlmKHdoYXQgPT0gNil7XG4gICAgICBnYW1lLmdldEN1cnJlbnRVc2VyKCkuYWRkTm9ibGVzKHF1YW50aXR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gSW52ZXN0LmNob2ljZUludmVzdCgpO1xuICB9XG5cbiAgc3RhdGljIHByb2Nlc3NNb25leSgpe1xuICAgIGxldCB1c2VyID0gZ2FtZS5nZXRDdXJyZW50VXNlcigpO1xuXG4gICAgbGV0IGdhaW5zID0ge2dhaW5Gb2lyZXM6IDAsZ2Fpbk1vdWxpbnM6IDAsZ2FpbkZvbmRlcmllczogMCxnYWluQ2hhbnRpZXJzOiAwLGdhaW5Pc3Q6IDAsXG4gICAgICAgICAgICAgICAgdGF4ZUE6IDAsdGF4ZUI6IDAsdGF4ZUM6IDB9O1xuXG4gICAgZ2FpbnMuZ2FpbkZvaXJlcyA9IFVzZXJVdGlscy5jYWxjdWxHYWluc09mRm9pcmVzKHVzZXIpO1xuICAgIGdhaW5zLmdhaW5Nb3VsaW5zID0gVXNlclV0aWxzLmNhbGN1bEdhaW5zT2ZNb3VsaW5zKHVzZXIpO1xuICAgIGdhaW5zLmdhaW5Gb25kZXJpZXMgPSBVc2VyVXRpbHMuY2FsY3VsR2FpbnNPZkZvbmRlcmllcyh1c2VyKTtcbiAgICBnYWlucy5nYWluQ2hhbnRpZXJzID0gVXNlclV0aWxzLmNhbGN1bEdhaW5zT2ZDaGFudGllcnModXNlcik7XG4gICAgZ2FpbnMuZ2Fpbk9zdCA9IFVzZXJVdGlscy5jYWxjdWxHYWluc09mT3N0KHVzZXIpO1xuXG4gICAgZ2FtZS5nZXRDdXJyZW50VXNlcigpLnNldEdhaW5zKGdhaW5zKTtcblxuICAgIGdhaW5zLnRheGVBID0gVXNlclV0aWxzLmNhbGN1bEdhaW5zT2ZUYXhlc0EodXNlcik7XG4gICAgZ2FpbnMudGF4ZUIgPSBVc2VyVXRpbHMuY2FsY3VsR2FpbnNPZlRheGVzQih1c2VyKTtcbiAgICBnYWlucy50YXhlQyA9IFVzZXJVdGlscy5jYWxjdWxHYWluc09mVGF4ZXNDKHVzZXIpO1xuXG4gICAgbGV0IGdhaW4gPSBnYWlucy5nYWluRm9pcmVzICsgZ2FpbnMuZ2Fpbk1vdWxpbnMgKyBnYWlucy5nYWluRm9uZGVyaWVzICsgZ2FpbnMuZ2FpbkNoYW50aWVycyArIGdhaW5zLmdhaW5Pc3QgKyBnYWlucy50YXhlQSArIGdhaW5zLnRheGVCICsgZ2FpbnMudGF4ZUM7XG5cbiAgICBnYW1lLmdldEN1cnJlbnRVc2VyKCkuYWRkTW9uZXkoZ2Fpbik7XG4gICAgZ2FtZS5nZXRDdXJyZW50VXNlcigpLnNldEdhaW5zKGdhaW5zKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgS0IgfSBmcm9tICcuL0tCLmNsYXNzJ1xuaW1wb3J0IHsgQ29uc3QgfSBmcm9tICcuL0NvbnN0LmNsYXNzJ1xuaW1wb3J0IHsgQ29tYmF0IH0gZnJvbSAnLi9Db21iYXQuY2xhc3MnXG5pbXBvcnQgeyBQYXJ0eSB9IGZyb20gJy4vUGFydF9BYnN0cmFjdC5jbGFzcydcbmltcG9ydCB7IElBIH0gZnJvbSAnLi9QYXJ0Nl9JQS5jbGFzcydcbmltcG9ydCB7IEVycm9ycyB9IGZyb20gJy4vRXJyb3JzLmNsYXNzJ1xuaW1wb3J0IHsgVXNlclV0aWxzIH0gZnJvbSAnLi9Vc2VyLnV0aWxzLmNsYXNzJ1xuXG5pbXBvcnQgdHBsXzVfYmFzZSBmcm9tICcuL3RlbXBsYXRlcy81X2Jhc2UudHBsJ1xuaW1wb3J0IHRwbF81IGZyb20gJy4vdGVtcGxhdGVzLzUudHBsJ1xuaW1wb3J0IHRwbF81X2IgZnJvbSAnLi90ZW1wbGF0ZXMvNV9iLnRwbCdcbmltcG9ydCB0cGxfNV9jb21iYXRfcmVzdWx0IGZyb20gJy4vdGVtcGxhdGVzLzVfY29tYmF0X3Jlc3VsdC50cGwnXG5cbmV4cG9ydCBjbGFzcyBMYW5kcyBleHRlbmRzIFBhcnR5IHtcblxuICAgIHN0YXRpYyBlbnRyeVBvaW50KCl7XG4gICAgICBMYW5kcy5uYkF0dGFja3MgPSAxO1xuICAgICAgcmV0dXJuIExhbmRzLmNob29zaW5nT3Bwb25lbnQoKTtcbiAgICB9XG5cbiAgICAvLyBUZXJyZXMgdmFzc2FsZXMsIGNob2l4IGRlIGwnYWR2ZXJzYWlyZVxuICAgIHN0YXRpYyBjaG9vc2luZ09wcG9uZW50KCl7XG4gICAgICAvL2NvbnNvbGUuaW5mbyhcInN0ZXA1XCIpXG4gICAgICBLQi5saXN0ZW4oW1xuICAgICAgICB7a2V5OiBDb25zdC5LRVlCT0FSRF9JTlQsIGNhbGxiYWNrOiBMYW5kcy5jaG9pY2VRdHRPc3R9LCAvLyAwLTlcbiAgICAgICAge2tleTogQ29uc3QuS0VZQk9BUkRfUkVUVVJOLCBjYWxsYmFjazogSUEuZG99LCAvLyDihqlcbiAgICAgIF0pO1xuXG4gICAgICBQYXJ0eS5yZWZyZXNoV2l0aFRlbXBsYXRlcyhbdHBsXzVfYmFzZSwgdHBsXzVdKTtcbiAgICB9XG5cbiAgICAvL1NlbGVjdGlvbiBkdSBub21icmUgZGUgc29sZGF0XG4gICAgc3RhdGljIGNob2ljZVF0dE9zdChvcHBvbmVudCl7XG4gICAgICAvL2NvbnNvbGUuaW5mbyhcImNob2ljZVF0dE9zdChcIiArIG9wcG9uZW50ICsgXCIpXCIpO1xuICAgICAgaWYoTGFuZHMubmJBdHRhY2tzID4gVXNlclV0aWxzLmdldE5iQXR0YWNrc01heChnYW1lLmdldEN1cnJlbnRVc2VyKCkpKXtcbiAgICAgICAgZ2FtZS5hZGRFcnJvcihFcnJvcnMubm90RW5vdWdodE5vYmxlcygpKTtcbiAgICAgICAgcmV0dXJuIExhbmRzLmNob29zaW5nT3Bwb25lbnQoKTtcbiAgICAgIH1cblxuICAgICAgbGV0IG9wcG9uZW50cyA9IGdhbWUuZ2V0T3Bwb25lbnRzQXNBcnJheSgpO1xuICAgICAgaWYob3Bwb25lbnQgPCAxIHx8IG9wcG9uZW50ID4gb3Bwb25lbnRzLmxlbmd0aCl7XG4gICAgICAgIC8vY29uc29sZS5pbmZvKFwib3Bwb3NhbnQgcGFzIGRhbnMgbGEgbGlzdGVcIik7XG4gICAgICAgIHJldHVybiBMYW5kcy5jaG9vc2luZ09wcG9uZW50KCk7XG4gICAgICB9XG5cbiAgICAgIC8vb3Bwb25lbnQgPSBteXNlbGZcbiAgICAgIGlmKGdhbWUuZ2V0Q3VycmVudFVzZXIoKS5nZXRJZCgpID09IG9wcG9uZW50c1tvcHBvbmVudCAtIDFdLmdldElkKCkpe1xuICAgICAgICAvL2NvbnNvbGUuaW5mbyhcInBhcyBzb2kgbcOqbWVcIik7XG4gICAgICAgIGdhbWUuYWRkRXJyb3IoRXJyb3JzLmZpZ2h0TXlzZWxmKCkpO1xuICAgICAgICByZXR1cm4gTGFuZHMuY2hvb3NpbmdPcHBvbmVudCgpO1xuICAgICAgfVxuICAgICAgS0IubGlzdGVuVHlwaW5nKFtcbiAgICAgICAge2tleTogQ29uc3QuS0VZQk9BUkRfSU5UX1RZUElORywgY2FsbGJhY2s6IEtCLnN0YXJ0VHlwaW5nfSwgLy8gMC05ICsgYmFja3NwYWNlXG4gICAgICAgIHtrZXk6IENvbnN0LktFWUJPQVJEX1JFVFVSTiwgY2FsbGJhY2s6IExhbmRzLmRvRmlnaHR9LCAvLyDihqlcbiAgICAgIF0sIFt0cGxfNV9iYXNlLCB0cGxfNV9iXSwgW29wcG9uZW50c1tvcHBvbmVudCAtIDFdLmdldElkKCldKTtcblxuICAgICAgLy9lbHNlIGNob29zZSBudW1iZXIgb2Ygc29sZGllclxuICAgICAgUGFydHkucmVmcmVzaFdpdGhUZW1wbGF0ZXMoW3RwbF81X2Jhc2UsIHRwbF81X2JdKTtcbiAgICB9XG5cblxuICAgIC8vU2VsZWN0aW9uIGR1IG5vbWJyZSBkZSBzb2xkYXRcbiAgICBzdGF0aWMgZG9GaWdodChrZXksIGRlZmVuZGVyVXNlcklkKXtcbiAgICAgIGxldCBvc3QgPSBwYXJzZUludChLQi5idWZmZXIpO1xuICAgICAgaWYoaXNOYU4ob3N0KSB8fCBvc3QgPT09IDApe1xuICAgICAgICByZXR1cm4gTGFuZHMuY2hvb3NpbmdPcHBvbmVudCgpO1xuICAgICAgfVxuXG4gICAgICAvL2NvbnNvbGUuaW5mbyhcImRvRmlnaHQoXCIgKyBvc3QgKyBcIiwgXCIgKyBkZWZlbmRlclVzZXJJZCArIFwiKVwiKTtcblxuICAgICAgLy9UZXN0IGlmIHdlIGhhdmUgZW5vdWdodCBvc3QgbWVuXG4gICAgICBpZihnYW1lLmdldEN1cnJlbnRVc2VyKCkuZ2V0T3N0KCkgPCBvc3Qpe1xuICAgICAgICBnYW1lLmFkZEVycm9yKEVycm9ycy5ub3RFbm91Z2h0T3N0KCkpO1xuICAgICAgICByZXR1cm4gTGFuZHMuY2hvb3NpbmdPcHBvbmVudCgpO1xuICAgICAgfVxuXG5cbiAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgbGV0IHByb21pc2VDb21iYXQgPSBudWxsO1xuICAgICAgaWYoZGVmZW5kZXJVc2VySWQgPT0gMCl7XG4gICAgICAgIHByb21pc2VDb21iYXQgPSBDb21iYXQuZXhlY3V0ZShnYW1lLmdldEJhcmJhcmVzKCksIGdhbWUuZ2V0Q3VycmVudFVzZXIoKSwgb3N0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2VDb21iYXQgPSBDb21iYXQuZXhlY3V0ZShnYW1lLmdldFVzZXJCeUlkKGRlZmVuZGVyVXNlcklkKSwgZ2FtZS5nZXRDdXJyZW50VXNlcigpLCBvc3QpO1xuICAgICAgfVxuXG4gICAgICAvL1Jlc29sdmUgcHJvbWlzZVxuICAgICAgcHJvbWlzZUNvbWJhdC50aGVuKChyZXN1bHQpPT57XG5cbiAgICAgICAgLy9hZGQgMSB0byBjb3VudGVyIG9mIGN1cnJlbnQgYXR0YWNrc1xuICAgICAgICBMYW5kcy5uYkF0dGFja3MrKztcblxuICAgICAgICBLQi5saXN0ZW4oW1xuICAgICAgICAgIHtrZXk6IENvbnN0LktFWUJPQVJEX1JFVFVSTiwgY2FsbGJhY2s6IExhbmRzLmNob29zaW5nT3Bwb25lbnR9LCAvLyDihqlcbiAgICAgICAgXSk7XG5cbiAgICAgICAgLy9lbHNlIGNob29zZSBudW1iZXIgb2Ygc29sZGllclxuICAgICAgICBQYXJ0eS5yZWZyZXNoV2l0aFRlbXBsYXRlKHRwbF81X2NvbWJhdF9yZXN1bHQsIHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9XG5cblxuICAgIGdldCBuYkF0dGFja3MoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbmJBdHRhY2tzIHx8IDA7XG4gICAgfVxuXG4gICAgc2V0IG5iQXR0YWNrcyh2KSB7XG4gICAgICB0aGlzLl9uYkF0dGFja3MgPSB2O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFBhcnR5IH0gZnJvbSAnLi9QYXJ0X0Fic3RyYWN0LmNsYXNzJ1xuaW1wb3J0IHsgRm9vZCB9IGZyb20gJy4vUGFydDJfRm9vZC5jbGFzcydcbmltcG9ydCB7IEVycm9ycyB9IGZyb20gJy4vRXJyb3JzLmNsYXNzJ1xuaW1wb3J0IHsgS0IgfSBmcm9tICcuL0tCLmNsYXNzJ1xuaW1wb3J0IHsgQ29uc3QgfSBmcm9tICcuL0NvbnN0LmNsYXNzJ1xuXG5cbmltcG9ydCB0cGxfNl9iYXNlIGZyb20gJy4vdGVtcGxhdGVzLzZfYmFzZS50cGwnXG5cbmV4cG9ydCBjbGFzcyBJQSBleHRlbmRzIFBhcnR5IHtcbiAgICAvLyBUZXJyZXMgdmFzc2FsZXMsIGNob2l4IGRlIGwnYWR2ZXJzYWlyZVxuICAgIHN0YXRpYyBkbygpe1xuICAgICAgY29uc29sZS5pbmZvKFwiZG8gSUFcIilcblxuICAgICAgLy9FeMOpY3V0aW9uIGZvciBlYWNoIG9mIElBIHBsYXllclxuICAgICAgZ2FtZS5nZXRVc2VycygpLmZvckVhY2goSUEuZG9BY3Rpb24pO1xuXG4gICAgICBLQi5saXN0ZW4oW1xuICAgICAgICB7a2V5OiBDb25zdC5LRVlCT0FSRF9SRVRVUk4sIGNhbGxiYWNrOiBJQS50dXJuWWVhcn0gLy8g4oapXG4gICAgICBdKTtcbiAgICAgIFBhcnR5LnJlZnJlc2hXaXRoVGVtcGxhdGUodHBsXzZfYmFzZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRvQWN0aW9uKHVzZXIsIGtleSl7XG4gICAgICBpZihrZXkgPT0gMSkge1xuICAgICAgICAvL3BsYXllclxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gIC8qICAgIGlmKCF1c2VyLmlzQWxpdmUoKSl7XG4gICAgICAgIC8vSUEgZGVhZFxuICAgICAgICByZXR1cm47XG4gICAgICB9Ki9cblxuICAgICAgY29uc29sZS5pbmZvKFwiZG9BY3Rpb24oKSBcIiArIHVzZXIuZ2V0TmFtZSgpKVxuICAgIH1cblxuICAgIC8vVHVybiBvbmUgWWVhciBhbmQgZ28gb24gZm9yIGEgbmV3IHJvdW5kXG4gICAgc3RhdGljIHR1cm5ZZWFyKCl7XG4gICAgICAgIGdhbWUubmV4dFllYXIoKTtcblxuICAgICAgICByZXR1cm4gRm9vZC5tZXRlb0FuZFJhdHMoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBLQiB9IGZyb20gJy4vS0IuY2xhc3MnXG5pbXBvcnQgeyBDb25zdCB9IGZyb20gJy4vQ29uc3QuY2xhc3MnXG5cbmV4cG9ydCBjbGFzcyBQYXJ0eSB7XG5cbiAgc3RhdGljIHBhdXNlKG5leHRDYWxsKXtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IG5leHRDYWxsKCk7IH0sIDIwMDApO1xuICB9XG5cbiAgc3RhdGljIHJlZnJlc2hXaXRoVGVtcGxhdGUodGVtcGxhdGUsIHZhcnMgPSB7fSl7XG4gICAgcmV0dXJuIFBhcnR5LnJlZnJlc2hXaXRoVGVtcGxhdGVzKFt0ZW1wbGF0ZV0sIHZhcnMpXG4gIH1cblxuICBzdGF0aWMgcmVmcmVzaFdpdGhUZW1wbGF0ZXModGVtcGxhdGVzLCB2YXJzID0ge30pe1xuICAgIC8vY29uc29sZS5pbmZvKFwidGVtcGxhdGVcIiArIHRlbXBsYXRlKTtcbiAgICBsZXQgZGF0YXMgPSBcIlwiO1xuICAgIHZhcnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIFwidXNlclwiOiB3aW5kb3cuZ2FtZS5nZXRDdXJyZW50VXNlcigpLFxuICAgICAgXCJ1c2Vyc1wiOiB3aW5kb3cuZ2FtZS5nZXRVc2VycygpLFxuICAgICAgXCJnYW1lXCI6IHdpbmRvdy5nYW1lLFxuICAgICAgXCJzYWxlc1wiOiB3aW5kb3cuZ2FtZS5nZXRTYWxlc0luQXJyYXkoKSxcbiAgICAgIFwiQ29uc3RcIjogQ29uc3QsXG4gICAgICBcIktCX0JVRkZFUlwiOiBLQi5idWZmZXJcbiAgICAgIH0sIHZhcnMpXG5cbiAgICBmb3IgKGNvbnN0IHRwbCBvZiB0ZW1wbGF0ZXMpIHtcbiAgICAgLy8gaWYoIHR5cGVvZih0cGwpID09IE9iamVjdCl7XG4gICAgICAgIGRhdGFzICs9IHRwbCh2YXJzKTtcbiAgICAgLy8gfSBlbHNlIHtcbiAgICAgLy8gICB0aHJvdyBcInRwbCB3YXNuJ3QgYW4gb2JqZWN0IFwiICsgdHBsXG4gICAgIC8vIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVcIikuaW5uZXJIVE1MID0gZGF0YXM7XG4gICAgZ2FtZS5wdXJnZUVycm9ycygpO1xuICB9XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBVc2VyIHtcblxuICBjb25zdHJ1Y3RvcihpZCwgbmFtZSwgY291bnRyeSwgbGFuZCA9IDEwMDAwKXtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmNvdW50cnkgPSBjb3VudHJ5O1xuICAgIHRoaXMubGFuZCA9IGxhbmQ7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgcmVzZXQoKXtcbiAgICB0aGlzLnNleGUgPSAwOyAvLyAwPW1hbGUgMT1mZW1hbGVcbiAgICB0aGlzLnRheGVBID0gMjA7XG4gICAgdGhpcy50YXhlQiA9IDU7XG4gICAgdGhpcy50YXhlQyA9IDM1O1xuICAgIHRoaXMucmFuayA9IFwiQmFyb25cIjtcbiAgICB0aGlzLmhhcnZlc3QgPSAxNzUyNDtcbiAgICB0aGlzLnN1cHBseSA9IDEyODQyO1xuICAgIHRoaXMucGVvcGxlID0gMjAyNjtcbiAgICB0aGlzLm9zdD0yMDtcbiAgICB0aGlzLm1vbmV5ID0gMTAwMDtcblxuICAgIHRoaXMuZm9pcmVzID0gMDtcbiAgICB0aGlzLm1vdWxpbnMgPSAwO1xuICAgIHRoaXMuZm9uZGVyaWVzID0gMDtcbiAgICB0aGlzLmNoYW50aWVycyA9IDA7XG4gICAgdGhpcy5wYWxhaXMgPSAwO1xuXG4gICAgdGhpcy5ub2JsZXMgPSAxO1xuICAgIHRoaXMubWFyY2hhbmRzID0gMTtcblxuICAgIHRoaXMuc2F0aXNmYWN0aW9uUGVvcGxlID0gMTAwO1xuICAgIHRoaXMuc2F0aXNmYWN0aW9uT3N0ID0gMTAwO1xuXG4gIC8vICB0aGlzLmFsaXZlID0gdHJ1ZTtcblxuICAgIHRoaXMucmVzZXROZXdZZWFyKCk7XG4gIH1cblxuICByZXNldE5ld1llYXIoKXtcbiAgICB0aGlzLm5lZWRQZW9wbGUgPSA1ICogdGhpcy5wZW9wbGU7XG4gICAgdGhpcy5zdXBwbHlQZW9wbGUgPSAwO1xuICAgIHRoaXMubmVlZE9zdCA9IDggKiB0aGlzLm9zdDtcbiAgICB0aGlzLnN1cHBseU9zdCA9IDA7XG4gICAgdGhpcy5taWdyYW50cyA9IDA7XG4gICAgdGhpcy5nYWlucyA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSB2YWx1ZSBvZiBzYXRpc2ZhY3Rpb24gMCAtPiAyMDAlXG4gICAqL1xuXG4gICAvKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgZ2V0SWQoKXtyZXR1cm4gdGhpcy5pZDt9XG4gIGdldE5hbWUoKXtyZXR1cm4gdGhpcy5uYW1lO31cbiAgZ2V0U2V4ZSgpe3JldHVybiB0aGlzLnNleGU7fVxuICBnZXRSYW5rKCl7cmV0dXJuIHRoaXMucmFuazt9XG4gIGdldExhbmQoKXtyZXR1cm4gdGhpcy5sYW5kO31cbiAgZ2V0TW9uZXkoKXtyZXR1cm4gdGhpcy5tb25leTt9XG4gIGdldFRheGVBKCl7cmV0dXJuIHRoaXMudGF4ZUE7fVxuICBnZXRUYXhlQigpe3JldHVybiB0aGlzLnRheGVCO31cbiAgZ2V0VGF4ZUMoKXtyZXR1cm4gdGhpcy50YXhlQzt9XG4gIGdldFN1cHBseSgpe3JldHVybiB0aGlzLnN1cHBseTt9XG4gIGdldE9zdCgpe3JldHVybiB0aGlzLm9zdDt9XG4gIGdldENvdW50cnkoKXtyZXR1cm4gdGhpcy5jb3VudHJ5O31cbiAgZ2V0UGVvcGxlKCl7cmV0dXJuIHRoaXMucGVvcGxlO31cbiAgZ2V0TmVlZFBlb3BsZSgpe3JldHVybiB0aGlzLm5lZWRQZW9wbGU7fVxuICBnZXRTdXBwbHlQZW9wbGUoKXtyZXR1cm4gdGhpcy5zdXBwbHlQZW9wbGU7fVxuICBnZXRTdXBwbHlPc3QoKXtyZXR1cm4gdGhpcy5zdXBwbHlPc3Q7fVxuICBnZXRTYXRpc2ZhY3Rpb25QZW9wbGUoKXsgcmV0dXJuIHRoaXMuc2F0aXNmYWN0aW9uUGVvcGxlOyB9XG4gIGdldFNhdGlzZmFjdGlvbk9zdCgpeyByZXR1cm4gdGhpcy5zYXRpc2ZhY3Rpb25Pc3Q7IH1cbiAgZ2V0TmVlZE9zdCgpeyByZXR1cm4gdGhpcy5uZWVkT3N0OyB9XG4gIGdldEhhcnZlc3QoKXtyZXR1cm4gdGhpcy5oYXJ2ZXN0O31cbiAgZ2V0Rm9pcmVzKCl7cmV0dXJuIHRoaXMuZm9pcmVzO31cbiAgZ2V0TW91bGlucygpe3JldHVybiB0aGlzLm1vdWxpbnM7fVxuICBnZXRGb25kZXJpZXMoKXtyZXR1cm4gdGhpcy5mb25kZXJpZXM7fVxuICBnZXRDaGFudGllcnMoKXtyZXR1cm4gdGhpcy5jaGFudGllcnM7fVxuICBnZXRQYWxhaXMoKXtyZXR1cm4gdGhpcy5wYWxhaXM7fVxuICBnZXRNaWdyYW50cygpe3JldHVybiB0aGlzLm1pZ3JhbnRzO31cbiAgZ2V0Tm9ibGVzKCl7cmV0dXJuIHRoaXMubm9ibGVzO31cbiAgZ2V0TWFyY2hhbmRzKCl7cmV0dXJuIHRoaXMubWFyY2hhbmRzO31cbiAgZ2V0R2FpbnMoKXtyZXR1cm4gdGhpcy5nYWluczt9XG4vLyAgaXNBbGl2ZSgpe3JldHVybiB0aGlzLmFsaXZlO31cblxuICBzZXRTZXhlKHNleGUpe3RoaXMuc2V4ZSA9IHNleGU7fVxuICBzZXRUYXhlQSh0YXhlQSl7dGhpcy50YXhlQSA9IHRheGVBO31cbiAgc2V0TmFtZShuYW1lKXt0aGlzLm5hbWUgPSBuYW1lO31cbiAgc2V0VGF4ZUIodGF4ZUIpe3RoaXMudGF4ZUIgPSB0YXhlQjt9XG4gIHNldFRheGVDKHRheGVDKXt0aGlzLnRheGVDID0gdGF4ZUM7fVxuICBzZXRPc3Qob3N0KXt0aGlzLm9zdCA9IG9zdDt9XG4gIHNldFN1cHBseVBlb3BsZShzdXBwbHlQZW9wbGUpe3RoaXMuc3VwcGx5UGVvcGxlID0gc3VwcGx5UGVvcGxlO31cbiAgc2V0U3VwcGx5T3N0KHN1cHBseU9zdCl7dGhpcy5zdXBwbHlPc3QgPSBzdXBwbHlPc3Q7fVxuICBzZXRTYXRpc2ZhY3Rpb25QZW9wbGUoc2F0aXNmYWN0aW9uT3N0KXt0aGlzLnNhdGlzZmFjdGlvbk9zdCA9IHNhdGlzZmFjdGlvbk9zdDt9XG4gIHNldFNhdGlzZmFjdGlvbk9zdChzYXRpc2ZhY3Rpb25Pc3Qpe3RoaXMuc2F0aXNmYWN0aW9uT3N0ID0gc2F0aXNmYWN0aW9uT3N0O31cbiAgc2V0SGFydmVzdChoYXJ2ZXN0KXt0aGlzLmhhcnZlc3QgPSBoYXJ2ZXN0O31cbiAgc2V0TWFyY2hhbmRzKG1hcmNoYW5kcyl7dGhpcy5tYXJjaGFuZHMgPSBtYXJjaGFuZHM7fVxuICBzZXRNaWdyYW50cyhtaWdyYW50cyl7dGhpcy5taWdyYW50cyA9IG1pZ3JhbnRzO31cbiAgc2V0R2FpbnMoZ2FpbnMpe3RoaXMuZ2FpbnMgPSBnYWluczt9XG4gIHNldExhbmQobGFuZCl7dGhpcy5sYW5kID0gbGFuZDt9XG5cbiAgYWRkTW9uZXkobW9uZXkpe3RoaXMubW9uZXkgKz0gbW9uZXk7fVxuICBhZGRTdXBwbHkoc3VwcGx5KXt0aGlzLnN1cHBseSArPSBzdXBwbHk7fVxuICBhZGRPc3Qob3N0KXt0aGlzLm9zdCArPSBvc3Q7fVxuICBhZGRQZW9wbGUocGVvcGxlKXt0aGlzLnBlb3BsZSArPSBwZW9wbGU7fVxuICBhZGRMYW5kKGxhbmQpe3RoaXMubGFuZCArPSBsYW5kO31cblxuICBhZGRGb2lyZXMoZm9pcmVzKXt0aGlzLmZvaXJlcyArPSBmb2lyZXM7fVxuICBhZGRNb3VsaW5zKG1vdWxpbnMpe3RoaXMubW91bGlucyArPSBtb3VsaW5zO31cbiAgYWRkRm9uZGVyaWVzKGZvbmRlcmllcyl7dGhpcy5mb25kZXJpZXMgKz0gZm9uZGVyaWVzO31cbiAgYWRkQ2hhbnRpZXJzKGNoYW50aWVycyl7dGhpcy5jaGFudGllcnMgKz0gY2hhbnRpZXJzO31cbiAgYWRkUGFsYWlzKHBhbGFpcyl7dGhpcy5wYWxhaXMgKz0gcGFsYWlzO31cbiAgYWRkTm9ibGVzKG5vYmxlcyl7dGhpcy5ub2JsZXMgKz0gbm9ibGVzO31cblxuLy8gIGtpbGwoKXtcbi8vICAgIHRoaXMuYWxpdmU9ZmFsc2U7XG4vLyAgfVxuXG5cbn1cbiIsImV4cG9ydCBjbGFzcyBVc2VyVXRpbHMge1xuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdmFsdWUgcmVwcmVzZW50aW5nIHRoZSBtYXggYW1vdW50IG9mIG9zdCBhdmFpbGFibGVmb3IgYSBwbGF5ZXJcbiAgICAgKiovXG4gICAgc3RhdGljIGdldE1heE9zdFBvc3NpYmxlKHVzZXIpe1xuICAgICAgcmV0dXJuIHVzZXIuZ2V0Tm9ibGVzKCkgKiAyMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdmFsdWUgcmVwcmVzZW50aW5nIHRoZSBuYW1lIG9mIGEgcGxheWVyIGRlcGVuZGluZyBvZiBpdHMgY291bnRyeVxuICAgICAqKi9cbiAgICBzdGF0aWMgZ2V0TmFtZSh1c2VyLCBuID0gXCJcIil7XG4gICAgICBsZXQgbmFtZSA9IFwiXCJcbiAgICAgIGlmKCBuICE9PSBcIlwiKXtcbiAgICAgICAgaWYobiA9PT0gXCJKXCIpIHtcbiAgICAgICAgICBuYW1lID0gXCJKZWFubmUgZCdBcmNcIlxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuYW1lID0gXCJIdWd1ZXNcIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB2YWx1ZSByZXByZXNlbnRpbmcgdGhlIG5ldyBoYXJ2ZXN0XG4gICAgICogTEE9QShDVVJfUExBWSwxKS1BKENVUl9QTEFZLDMpLUEoQ1VSX1BMQVksMTgpKjItQShDVVJfUExBWSwxNiktQShDVVJfUExBWSw3KS1BKENVUl9QTEFZLDE1KSoyXG4gICAgICogSUYgQShDVVJfUExBWSwyKSozPExBIFRIRU4gTEE9QShDVVJfUExBWSwyKSozXG4gICAgICogSUYgQShDVVJfUExBWSwzKSo1PExBIFRIRU4gTEE9QShDVVJfUExBWSwzKSo1XG4gICAgICogQShDVVJfUExBWSwyKT1BKENVUl9QTEFZLDIpLUxBLzNcbiAgICAgKiBIQVJWRVNUPUxBKk1FVEVPKi43MitJTlQoUk5EKjUwMCkrMS1BKENVUl9QTEFZLDEzKSo1MDBcbiAgICAgKiovXG4gICAgc3RhdGljIGNhbGN1bE5ld0hhcnZlc3QodXNlcil7XG4gICAgICBsZXQgbGFuZEF2YWlsYWJsZSA9IHVzZXIuZ2V0TGFuZCgpIC0gdXNlci5nZXRQZW9wbGUoKSAtIHVzZXIuZ2V0Tm9ibGVzKCkgKiAyIC0gdXNlci5nZXRQYWxhaXMoKSAtIHVzZXIuZ2V0TWFyY2hhbmRzKCkgLSB1c2VyLmdldE9zdCgpICogMjtcbiAgICAgIGlmKHVzZXIuZ2V0U3VwcGx5KCkgKiAzIDwgbGFuZEF2YWlsYWJsZSl7XG4gICAgICAgIGxhbmRBdmFpbGFibGUgPSB1c2VyLmdldFN1cHBseSgpICogMztcbiAgICAgIH1cbiAgICAgIGlmKHVzZXIuZ2V0UGVvcGxlKCkgKiA1IDwgbGFuZEF2YWlsYWJsZSl7XG4gICAgICAgIGxhbmRBdmFpbGFibGUgPSB1c2VyLmdldFBlb3BsZSgpICogNTtcbiAgICAgIH1cbiAgICAgIC8vcmVtb3ZlIDEvMyBzdG9jayB0byBuZXcgcGxhbnRzXG4gICAgICB1c2VyLmFkZFN1cHBseShNYXRoLmZsb29yKGxhbmRBdmFpbGFibGUgLyAtMykpXG5cbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGxhbmRBdmFpbGFibGUgKiBnYW1lLmdldE1ldGVvKCkgKiAwLjcyICsgZ2FtZS5yb2xsRGljZUludGVnZXIoMSw1MDApIC0gdXNlci5nZXRGb25kZXJpZXMoKSAqIDUwMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHZhbHVlIHJlcHJlc2VudGluZyBuZXcgbmV3IGFtb3VudCBvZiBib2lzc2VhdXggaW4gc3RvY2tcbiAgICAgKiovXG4gICAgc3RhdGljIGNhbGN1bE5ld1N1cHBseSh1c2VyKXtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKC0xICogKHVzZXIuZ2V0U3VwcGx5KCkgKiBnYW1lLmdldFJhdHMoKSAvIDEwMCkpICsgdXNlci5nZXRIYXJ2ZXN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSB2YWx1ZSBvZiBzYXRpc2ZhY3Rpb24gMCUgLT4gMjAwJVxuICAgICAqL1xuICAgIHN0YXRpYyBjYWxjdWxTYXRpc2ZhY3Rpb24obmVlZCwgc3VwcGx5KXtcbiAgICAgIGlmKG5lZWQgPT0gMCl7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgbGV0IHNhdGlzZmFjdGlvbiA9IDEwMCAqIHN1cHBseSAvIG5lZWQ7XG4gICAgICBpZihzYXRpc2ZhY3Rpb24gPiAyMDApe1xuICAgICAgICBzYXRpc2ZhY3Rpb24gPSAyMDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihzYXRpc2ZhY3Rpb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB2YWx1ZSByZXByZXNlbnRpbmcgbm9tYmVyIG9mIERlYXRoIHBlciB5ZWFyXG4gICAgICoqL1xuICAgIHN0YXRpYyBjYWxjdWxEZWF0aHModXNlcil7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihnYW1lLnJvbGxEaWNlRmxvYXQoMCwgMi41ICogMTAwIC8gdXNlci5nZXRTYXRpc2ZhY3Rpb25QZW9wbGUoKSkgKiB1c2VyLmdldFBlb3BsZSgpIC8gMTAwKTsgLy9UT0RPIGFwcGx5IHRheGVDIGVmZmVjdFxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHZhbHVlIHJlcHJlc2VudGluZyBub21iZXIgb2YgQmlydGggcGVyIHllYXJcbiAgICAgKiovXG4gICAgc3RhdGljIGNhbGN1bEJpcnRocyh1c2VyKXtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGdhbWUucm9sbERpY2VGbG9hdCgwLCA1ICogdXNlci5nZXRTYXRpc2ZhY3Rpb25QZW9wbGUoKSAvIDEwMCkgKiB1c2VyLmdldFBlb3BsZSgpIC8gMTAwKTsgLy9UT0RPIGFwcGx5IHRheGVDIGVmZmVjdFxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHZhbHVlIHJlcHJlc2VudGluZyBub21iZXIgb2YgTWlncmFudHMgcGVyIHllYXJcbiAgICAgKiovXG4gICAgc3RhdGljIGNhbGN1bE1pZ3JhbnRzKHVzZXIpe1xuICAgICAgaWYodXNlci5nZXRTYXRpc2ZhY3Rpb25QZW9wbGUoKSA+IDE3NSl7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGdhbWUucm9sbERpY2VGbG9hdCgwLCAyLjUgKiB1c2VyLmdldFNhdGlzZmFjdGlvblBlb3BsZSgpIC8gMTAwKSAqIHVzZXIuZ2V0UGVvcGxlKCkgLyAxMDApOyAvL1RPRE8gYXBwbHkgdGF4ZUEgZWZmZWN0XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB2YWx1ZSByZXByZXNlbnRpbmcgbm9tYmVyIG9mIHN0YXJ2aW5nIHBlb3BsZSBwZXIgeWVhclxuICAgICAqKi9cbiAgICBzdGF0aWMgY2FsY3VsU3RhcnZpbmdQZW9wbGUodXNlcil7XG4gICAgICBpZih1c2VyLmdldFNhdGlzZmFjdGlvblBlb3BsZSgpIDwgOTApe1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihnYW1lLnJvbGxEaWNlRmxvYXQoMCwgNSAqIDEwMCAvIE1hdGgubWF4KHVzZXIuZ2V0U2F0aXNmYWN0aW9uUGVvcGxlKCksMTApKSAqIHVzZXIuZ2V0UGVvcGxlKCkgLyAxMDApOyAvL1RPRE8gYXBwbHkgdGF4ZUMgZWZmZWN0XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdmFsdWUgcmVwcmVzZW50aW5nIG5vbWJlciBvZiBzdGFydmluZyBvc3QgcGVyIHllYXJcbiAgICAgKiovXG4gICAgc3RhdGljIGNhbGN1bFN0YXJ2aW5nT3N0KHVzZXIpe1xuICAgICAgaWYodXNlci5nZXRTYXRpc2ZhY3Rpb25Pc3QoKSA8IDg1KXtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZ2FtZS5yb2xsRGljZUZsb2F0KDAsIDUgKiAxMDAgLyBNYXRoLm1heCh1c2VyLmdldFNhdGlzZmFjdGlvbk9zdCgpLDEwKSkgKiB1c2VyLmdldE9zdCgpIC8gMTAwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB2YWx1ZSByZXByZXNlbnRpbmcgbW9uZXkgZ2FpbmVkIGZvciBGb2lyZXNcbiAgICAgKiBGMT0oQShDVVJfUExBWSwxMSkqKChBKENVUl9QTEFZLDcpK0lOVChSTkQqMzUrMSkrSU5UKFJORCozNSsxKSkvKEEoQ1VSX1BMQVksOSkrMSkqMTIrNSkpXi45XG4gICAgICoqL1xuICAgIHN0YXRpYyBjYWxjdWxHYWluc09mRm9pcmVzKHVzZXIpe1xuICAgICAgcmV0dXJuIE1hdGguY2VpbChcbiAgICAgICAgTWF0aC5wb3codXNlci5nZXRGb2lyZXMoKSAqICgodXNlci5nZXRNYXJjaGFuZHMoKSArIGdhbWUucm9sbERpY2VJbnRlZ2VyKDEsMzUpICsgZ2FtZS5yb2xsRGljZUludGVnZXIoMSwzNSkpLyh1c2VyLmdldFRheGVCKCkrMSkqMTIrNSksIDAuOSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHZhbHVlIHJlcHJlc2VudGluZyBtb25leSBnYWluZWQgZm9yIE1vdWxpbnNcbiAgICAgKiBGMj0oQShDVVJfUExBWSwxMikqKDUuOCooSEFSVkVTVCtJTlQoUk5EKjI1MCsxKSkvKEEoQ1VSX1BMQVksMTApKjIwK0EoQ1VSX1BMQVksOSkqNDArMTApKzE1MCkpXi45XG4gICAgICoqL1xuICAgIHN0YXRpYyBjYWxjdWxHYWluc09mTW91bGlucyh1c2VyKXtcbiAgICAgIHJldHVybiBNYXRoLmNlaWwoXG4gICAgICAgIE1hdGgucG93KHVzZXIuZ2V0TW91bGlucygpICogKDUuOCAqICh1c2VyLmdldEhhcnZlc3QoKSArIGdhbWUucm9sbERpY2VJbnRlZ2VyKDEsMjUwKSkgLyAodXNlci5nZXRUYXhlQygpICogMjAgKyB1c2VyLmdldFRheGVCKCkgKiA0MCArIDEwKSArIDE1MCksIDAuOSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHZhbHVlIHJlcHJlc2VudGluZyBtb25leSBnYWluZWQgZm9yIEZvbmRlcmllc1xuICAgICAqIEYzPShBKENVUl9QTEFZLDEzKSsoQShDVVJfUExBWSwxNSkrSU5UKFJORCoxNTArMSkrNDAwKSleLjlcbiAgICAgKiovXG4gICAgc3RhdGljIGNhbGN1bEdhaW5zT2ZGb25kZXJpZXModXNlcil7XG4gICAgICByZXR1cm4gTWF0aC5jZWlsKFxuICAgICAgICBNYXRoLnBvdyh1c2VyLmdldEZvbmRlcmllcygpICsgdXNlci5nZXRPc3QoKSArIGdhbWUucm9sbERpY2VJbnRlZ2VyKDEsMTUwKSArIDQwMCwgMC45KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdmFsdWUgcmVwcmVzZW50aW5nIG1vbmV5IGdhaW5lZCBmb3IgQ2hhbnRpZXJzXG4gICAgICogRjQ9KEEoQ1VSX1BMQVksMTQpKihBKENVUl9QTEFZLDcpKjQrQShDVVJfUExBWSwxMSkqOStBKENVUl9QTEFZLDEzKSoxNSkqTUVURU8pXi45XG4gICAgICoqL1xuICAgIHN0YXRpYyBjYWxjdWxHYWluc09mQ2hhbnRpZXJzKHVzZXIpe1xuICAgICAgcmV0dXJuIE1hdGguY2VpbChcbiAgICAgICAgTWF0aC5wb3coKHVzZXIuZ2V0Rm9uZGVyaWVzKCkgKiB1c2VyLmdldE1hcmNoYW5kcygpICogNCArIHVzZXIuZ2V0Rm9pcmVzKCkgKiA5ICsgdXNlci5nZXRGb25kZXJpZXMoKSAqIDE1KSAqIGdhbWUuZ2V0TWV0ZW8oKSwgMC45KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdmFsdWUgcmVwcmVzZW50aW5nIG1vbmV5IGdhaW5lZCBmb3IgT3N0XG4gICAgICogRjU9QShDVVJfUExBWSwxNSkqKC04KVxuICAgICAqKi9cbiAgICBzdGF0aWMgY2FsY3VsR2FpbnNPZk9zdCh1c2VyKXtcbiAgICAgIHJldHVybiB1c2VyLmdldE9zdCgpICogLTg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHZhbHVlIHJlcHJlc2VudGluZyBtb25leSBnYWluZWQgZm9yIHRheGVBXG4gICAgICogRkM9UFBMX01JR1IqKElOVChSTkQqNDArMSkrSU5UKFJORCo0MCsxKSkvMTAwKkEoQ1VSX1BMQVksOClcbiAgICAgKiovXG4gICAgc3RhdGljIGNhbGN1bEdhaW5zT2ZUYXhlc0EodXNlcil7XG4gICAgICByZXR1cm4gTWF0aC5jZWlsKFxuICAgICAgICB1c2VyLmdldE1pZ3JhbnRzKCkgKiAoZ2FtZS5yb2xsRGljZUludGVnZXIoMSw0MCkgKyBnYW1lLnJvbGxEaWNlSW50ZWdlcigxLDQwKSkgLyAxMDAgKiB1c2VyLmdldFRheGVBKClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHZhbHVlIHJlcHJlc2VudGluZyBtb25leSBnYWluZWQgZm9yIHRheGVCXG4gICAgICogRlM9QShDVVJfUExBWSw5KS8xMDAqKChBKENVUl9QTEFZLDcpKjEuOCtGMSozMytGMioxNytGMyo1MCtGNCo3MCleLjg1K0EoQ1VSX1BMQVksMTgpKjUrQShDVVJfUExBWSwzKSlcbiAgICAgKiovXG4gICAgc3RhdGljIGNhbGN1bEdhaW5zT2ZUYXhlc0IodXNlcil7XG4gICAgICByZXR1cm4gTWF0aC5jZWlsKFxuICAgICAgICB1c2VyLmdldFRheGVCKCkgLyAxMDAgKiAoIE1hdGgucG93KHVzZXIuZ2V0TWFyY2hhbmRzKCkgKiAxLjggKyB1c2VyLmdldEdhaW5zKCkuZ2FpbkZvaXJlcyAqIDMzICsgdXNlci5nZXRHYWlucygpLmdhaW5Nb3VsaW5zICogMTdcbiAgICAgICAgICAgICsgdXNlci5nZXRHYWlucygpLmdhaW5Gb25kcmllcyAqIDUwICsgdXNlci5nZXRHYWlucygpLmdhaW5DaGFudGllcnMgKiA3MCwgMC44NSkgKyB1c2VyLmdldE5vYmxlcygpICogNSArIHVzZXIuZ2V0UGVvcGxlKCkpXG4gICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB2YWx1ZSByZXByZXNlbnRpbmcgbW9uZXkgZ2FpbmVkIGZvciB0YXhlQ1xuICAgICAqIEZJPShBKENVUl9QTEFZLDEwKS8xMDAqKEEoQ1VSX1BMQVksMykqMS4zK0EoQ1VSX1BMQVksMTgpKjE0NStBKENVUl9QTEFZLDcpKjM5K0EoQ1VSX1BMQVksMTEpKjk5K0EoQ1VSX1BMQVksMTIpKjk5K0EoQ1VSX1BMQVksMTMpKjQyNStBKENVUl9QTEFZLDE0KSo5NjUpKV4uOTdcbiAgICAgKiovXG4gICAgc3RhdGljIGNhbGN1bEdhaW5zT2ZUYXhlc0ModXNlcil7XG4gICAgICByZXR1cm4gTWF0aC5jZWlsKFxuICAgICAgICBNYXRoLnBvdyh1c2VyLmdldFRheGVDKCkgLyAxMDAgKiB1c2VyLmdldFBlb3BsZSgpICogMS4zICsgdXNlci5nZXROb2JsZXMoKSAqIDE0NSArIHVzZXIuZ2V0TWFyY2hhbmRzKCkgKiAzOSArIHVzZXIuZ2V0Rm9pcmVzKCkgKiA5OVxuICAgICAgICAgICAgICArdXNlci5nZXRNb3VsaW5zKCkgKiA5OSArIHVzZXIuZ2V0Rm9uZGVyaWVzKCkgKiA0MjUgKyB1c2VyLmdldENoYW50aWVycygpICogOTY1LCAwLjk3KVxuICAgICAgKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB2YWx1ZSByZXByZXNlbnRpbmcgY291bnQgb2YgYXR0YWtzIHBvc3NpYmxlIGZvciBhIHVzZXJcbiAgICAgKiovXG4gICAgc3RhdGljIGdldE5iQXR0YWNrc01heCh1c2VyKXtcbiAgICAgIHJldHVybiB1c2VyLmdldE5vYmxlcygpO1xuICAgIH1cblxuXG5cbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9HYW1lLmNsYXNzJ1xuaW1wb3J0IHsgU3RhcnQgfSBmcm9tICcuL1BhcnQwX1N0YXJ0LmNsYXNzJ1xuXG5cbndpbmRvdy5nYW1lID0gbmV3IEdhbWUoKTtcbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgLy9Jbml0aWF0ZSB0aGUgZ2FtZVxuICB3aW5kb3cuZ2FtZS5yZXNldCgpO1xuICBTdGFydC5ob21lKCk7IFxufVxuXG5jb21wb25lbnQoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==