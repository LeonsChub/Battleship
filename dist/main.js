/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody{\n\tbox-sizing: border-box;\n\tbackground-color: #f4ff81;\n}\n\n.total-wrap{\n\twidth: 100vw;\n\theight: 100vh;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\n}\nform{\n\tmargin-top: 10%;\n\tdisplay: flex;\n\tflex-flow: column;\n\talign-items: center;\n}\n.input-wrap{\n\tdisplay: flex;\n\tflex-flow: column;\n}\n.btn-wrap{\n\tmargin-top: 0.3rem;\n}\n.cell{\n\tbackground-color: white;\n\tborder: 1px solid black;\n}\n\n.cell.ship{\n\tbackground-color: lightblue;\n}\n\n.board{\n  border: 1px solid black;\n  width: 350px;\n  height: 350px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 0;\n}\n#play-area-wrap{\n\tpadding-top: 5vh;\n\tdisplay: flex;\n\tflex-flow: column;\n\n\talign-items: center;\n}\n\n#play-area-wrap > .split{\n\tdisplay: flex;\n\tjustify-content: space-between;\n\n\twidth: 80%;\n\tmargin-inline: auto;\n}\n.cell.hit{\n\tbackground-color: darkgray;\n}\n\n.cell.ship.hit{\n\tbackground-color: rgb(156, 19, 19);\n}\n\n#pregameBoard{\n\tmargin-inline: auto;\n\twidth: 20em;\n\theight: 20em;\n}\n\n#dragable-wrap{\n\twidth: 50vw;\n\tmargin-inline: auto;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\n\tmargin-top: 24px;\n\tbackground-color: cadetblue;\n\tpadding: 0.5em;\n}\n#dragable-wrap > div{\n\twidth: 7rem;\n\theight: 7rem;\n\tbackground-color: rgb(255, 255, 255);\n}\n\n#dragable-wrap .ship-wrap{\n\theight: 100%;\n\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\tmargin: auto;\n}\n#dragable-wrap .ship-wrap.horizontal{\n\tflex-flow: row;\n}\n#dragable-wrap .ship-wrap.vertical{\n\tflex-flow: column;\n}\n\n#dragable-wrap .ship-wrap.carrier{\n\twidth: 80%;\n}\n\n#dragable-wrap .ship-wrap.battleship{\n\twidth: 65%;\n}\n\n#dragable-wrap .ship-wrap.cruiser{\n\twidth: 48%;\n}\n#dragable-wrap .ship-wrap.submarine{\n\twidth: 33%;\n}\n\n#dragable-wrap .cell{\n\twidth: 1rem;\n\theight: 1rem;\n\tmargin-inline: auto;\n\n\tbackground-color: lightblue;\n}\n\n.draggable{\n\tcursor: grabbing;\n}\n\n.draggable.dragging .cell{\n\twidth: 2rem;\n\theight: 2rem;\n}\n\n#pregameBoard .cell.highlight{\n\tbackground-color: rgb(92, 92, 92);\n}\n\n#pregameBoard .cell.occupied{\n\tbackground-color:lightblue;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;CACC,sBAAsB;CACtB,yBAAyB;AAC1B;;AAEA;CACC,YAAY;CACZ,aAAa;;CAEb,aAAa;CACb,uBAAuB;;AAExB;AACA;CACC,eAAe;CACf,aAAa;CACb,iBAAiB;CACjB,mBAAmB;AACpB;AACA;CACC,aAAa;CACb,iBAAiB;AAClB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,uBAAuB;CACvB,uBAAuB;AACxB;;AAEA;CACC,2BAA2B;AAC5B;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,MAAM;AACR;AACA;CACC,gBAAgB;CAChB,aAAa;CACb,iBAAiB;;CAEjB,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,8BAA8B;;CAE9B,UAAU;CACV,mBAAmB;AACpB;AACA;CACC,0BAA0B;AAC3B;;AAEA;CACC,kCAAkC;AACnC;;AAEA;CACC,mBAAmB;CACnB,WAAW;CACX,YAAY;AACb;;AAEA;CACC,WAAW;CACX,mBAAmB;CACnB,aAAa;CACb,6BAA6B;;CAE7B,gBAAgB;CAChB,2BAA2B;CAC3B,cAAc;AACf;AACA;CACC,WAAW;CACX,YAAY;CACZ,oCAAoC;AACrC;;AAEA;CACC,YAAY;;CAEZ,aAAa;CACb,mBAAmB;CACnB,uBAAuB;;CAEvB,YAAY;AACb;AACA;CACC,cAAc;AACf;AACA;CACC,iBAAiB;AAClB;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,UAAU;AACX;AACA;CACC,UAAU;AACX;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,mBAAmB;;CAEnB,2BAA2B;AAC5B;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,WAAW;CACX,YAAY;AACb;;AAEA;CACC,iCAAiC;AAClC;;AAEA;CACC,0BAA0B;AAC3B","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody{\n\tbox-sizing: border-box;\n\tbackground-color: #f4ff81;\n}\n\n.total-wrap{\n\twidth: 100vw;\n\theight: 100vh;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\n}\nform{\n\tmargin-top: 10%;\n\tdisplay: flex;\n\tflex-flow: column;\n\talign-items: center;\n}\n.input-wrap{\n\tdisplay: flex;\n\tflex-flow: column;\n}\n.btn-wrap{\n\tmargin-top: 0.3rem;\n}\n.cell{\n\tbackground-color: white;\n\tborder: 1px solid black;\n}\n\n.cell.ship{\n\tbackground-color: lightblue;\n}\n\n.board{\n  border: 1px solid black;\n  width: 350px;\n  height: 350px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 0;\n}\n#play-area-wrap{\n\tpadding-top: 5vh;\n\tdisplay: flex;\n\tflex-flow: column;\n\n\talign-items: center;\n}\n\n#play-area-wrap > .split{\n\tdisplay: flex;\n\tjustify-content: space-between;\n\n\twidth: 80%;\n\tmargin-inline: auto;\n}\n.cell.hit{\n\tbackground-color: darkgray;\n}\n\n.cell.ship.hit{\n\tbackground-color: rgb(156, 19, 19);\n}\n\n#pregameBoard{\n\tmargin-inline: auto;\n\twidth: 20em;\n\theight: 20em;\n}\n\n#dragable-wrap{\n\twidth: 50vw;\n\tmargin-inline: auto;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\n\tmargin-top: 24px;\n\tbackground-color: cadetblue;\n\tpadding: 0.5em;\n}\n#dragable-wrap > div{\n\twidth: 7rem;\n\theight: 7rem;\n\tbackground-color: rgb(255, 255, 255);\n}\n\n#dragable-wrap .ship-wrap{\n\theight: 100%;\n\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\tmargin: auto;\n}\n#dragable-wrap .ship-wrap.horizontal{\n\tflex-flow: row;\n}\n#dragable-wrap .ship-wrap.vertical{\n\tflex-flow: column;\n}\n\n#dragable-wrap .ship-wrap.carrier{\n\twidth: 80%;\n}\n\n#dragable-wrap .ship-wrap.battleship{\n\twidth: 65%;\n}\n\n#dragable-wrap .ship-wrap.cruiser{\n\twidth: 48%;\n}\n#dragable-wrap .ship-wrap.submarine{\n\twidth: 33%;\n}\n\n#dragable-wrap .cell{\n\twidth: 1rem;\n\theight: 1rem;\n\tmargin-inline: auto;\n\n\tbackground-color: lightblue;\n}\n\n.draggable{\n\tcursor: grabbing;\n}\n\n.draggable.dragging .cell{\n\twidth: 2rem;\n\theight: 2rem;\n}\n\n#pregameBoard .cell.highlight{\n\tbackground-color: rgb(92, 92, 92);\n}\n\n#pregameBoard .cell.occupied{\n\tbackground-color:lightblue;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
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

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
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

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
const Gameboard = () => {
  const board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  const ships = [];

  const getBoard = () => {
    return board;
  };

  const getCoordinate = (coord) => {
    let y = coord[1];
    let x = coord[0];

    return board[y][x];
  };

  const blowCoordinate = (coord) => {
    let y = coord[1];
    let x = coord[0];

    board[y][x] = -1;
  };

  const getShipByCoordinate = (coord) => {
    let shipToReturn = null;
    ships.forEach((ship) => {
      ship.coordinates.forEach((element) => {
        if (element[0] === coord[0] && element[1] === coord[1]) {
          shipToReturn = ship;
        }
      });
    });
    return shipToReturn;
  };

  const getShips = () => {
    return ships;
  };

  const placeShip = (coord, ship) => {
    const x = coord[1];
    const y = coord[0];

    const checkArray = []; /*array meant check if a ship is alreadyPlaced */
    const coordArray = []; /*array meant to track ship coordinates */

    if (ship.getOrientation() === 'y') {
      for (let index = 0; index < ship.getLen(); index++) {
        checkArray.push(board[x - index][y]);
        coordArray.push([x - index, y]);
      }
    }
    if (ship.getOrientation() === 'x') {
      for (let index = 0; index < ship.getLen(); index++) {
        checkArray.push(board[x][y + index]);
        coordArray.push([y + index, x]);
      }
    }

    if (!checkArray.includes(1)) {
      ships.push({ shipPointer: ship, coordinates: coordArray });
      if (ship.getOrientation() === 'y') {
        for (let index = 0; index < ship.getLen(); index++) {
          board[x - index][y] = 1;
        }
      }
      if (ship.getOrientation() === 'x') {
        for (let index = 0; index < ship.getLen(); index++) {
          board[x][y + index] = 1;
        }
      }
    } else {
      return null;
    }
  };

  const recieveHit = (coord) => {
    if (getCoordinate(coord) !== -1) {
      if (getCoordinate(coord) === 1) {
        const hitShip = getShipByCoordinate(coord);

        for (let i = 0; i < hitShip.coordinates.length; i++) {
          if (
            hitShip.coordinates[i][0] === coord[0] &&
            hitShip.coordinates[i][1] === coord[1]
          ) {
            hitShip.shipPointer.hit(i);
          }
        }
      }
      blowCoordinate(coord);
    }
  };

  const toString = () => {
    let str = '';
    for (let index = 0; index < board.length; index++) {
      let arr = board[index];
      str += '\n';

      for (let index = 0; index < arr.length; index++) {
        const state = arr[index];
        str += `${state} |`;
      }
    }

    return str;
  };

  const allShipsSunk = () => {
    let allSunk = true;

    ships.forEach((ship) => {
      if (!ship.shipPointer.getSunk()) {
        allSunk = false;
      }
    });
    return allSunk;
  };
  return {
    getBoard,
    getShips,
    placeShip,
    recieveHit,
    allShipsSunk,
    getCoordinate,
    blowCoordinate,
    toString,
  };
};




/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMainAssests": () => (/* binding */ loadMainAssests)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _turnTracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./turnTracker */ "./src/turnTracker.js");





const anchorDiv = document.querySelector('#content');
const tracker = (0,_turnTracker__WEBPACK_IMPORTED_MODULE_3__.TurnTracker)('H');
let randomPos = [];

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    randomPos.push([i, j]);
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function loadMainAssests() {
  loadPreGame();
  loadNamePrompt();
}

function loadNamePrompt() {
  const totalWrap = document.createElement('div');
  totalWrap.classList.add('total-wrap');

  const form = document.createElement('form');

  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name:';
  nameLabel.setAttribute('for', 'name_input');

  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'name_input');
  nameInput.id = 'name_input';
  nameInput.required = true;
  nameInput.setAttribute('pattern', '^[a-zA-Z]{4,}$');

  const btn = document.createElement('button');
  btn.textContent = 'Next';

  const inputWrap = document.createElement('div');
  inputWrap.classList.add('input-wrap');

  inputWrap.appendChild(nameLabel);
  inputWrap.appendChild(nameInput);

  form.appendChild(inputWrap);
  form.onsubmit = `event.preventDefault();`;

  form.addEventListener('submit', (e) => {
    if (nameInput.validity.valid) {
      const playerBoard = populateBoard();
      const humanPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)(nameInput.value, playerBoard);
      const cpuPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)('CPU', playerBoard);

      clearScreen();
      loadPreGame(nameInput.value);
      //loadPlayArea(humanPlayer, cpuPlayer);
      //startGame(humanPlayer, cpuPlayer, nameInput.value);
    }
    e.preventDefault();
  });

  const btnWrap = document.createElement('div');
  btnWrap.classList.add('btn-wrap');

  btnWrap.appendChild(btn);
  form.appendChild(btnWrap);

  totalWrap.appendChild(form);
  anchorDiv.appendChild(totalWrap);
}

function createShipDom(size) {
  const shipWrap = document.createElement('div');
  shipWrap.setAttribute('draggable', true);
  shipWrap.classList.add('ship-wrap');
  shipWrap.classList.add('draggable');
  shipWrap.classList.add('horizontal');

  const rootCell = document.createElement('div');
  rootCell.id = 'root-cell';
  rootCell.classList.add('cell');

  shipWrap.addEventListener('dragstart', () => {
    shipWrap.classList.add('dragging');
  });

  shipWrap.addEventListener('dragend', () => {
    shipWrap.classList.remove('dragging');
  });

  shipWrap.addEventListener('click', () => {
    let isHorizontal = shipWrap.classList.contains('horizontal');
    switch (isHorizontal) {
      case true:
        shipWrap.classList.remove('horizontal');
        shipWrap.classList.add('vertical');

        break;

      case false:
        shipWrap.classList.remove('vertical');
        shipWrap.classList.add('horizontal');

        break;

      default:
        break;
    }
  });

  shipWrap.setAttribute('length', size);

  switch (size) {
    case 5:
      shipWrap.classList.add('carrier');
      break;

    case 4:
      shipWrap.classList.add('battleship');
      break;

    case 3:
      shipWrap.classList.add('cruiser');
      break;

    case 2:
      shipWrap.classList.add('submarine');
      break;

    default:
      break;
  }

  for (let i = 0; i < size - 1; i++) {
    let shipCell = document.createElement('div');
    shipCell.classList.add('cell');
    shipWrap.appendChild(shipCell);
  }

  shipWrap.appendChild(rootCell);

  return shipWrap;
}
function clearHighlightDom(cells) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (cells[i][j].classList.contains('highlight')) {
        cells[i][j].classList.remove('highlight');
      }
    }
  }
}

function loadPreGame() {
  const introHeading = document.createElement('h1');
  introHeading.id = 'intro-head';
  introHeading.textContent = 'CHOOSE YOUR SHIPS ADMIRAL';

  anchorDiv.appendChild(introHeading);

  const blankBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();
  let boardDom = boardToDom(blankBoard);
  boardDom.id = 'pregameBoard';

  const domCells = boardDom.querySelectorAll('.cell');
  let cells = [...Array(10)].map(() => Array(10));

  for (let i = 0; i < 10; i++) {
    const row = cells[i];
    for (let j = 0; j < 10; j++) {
      row[j] = domCells[i + j * 10];
    }
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = cells[i][j];

      cell.addEventListener('dragover', (e) => {
        e.preventDefault();
        const ship = document.querySelector('.dragging');
        const len = parseInt(ship.getAttribute('length'));

        if (ship.classList.contains('horizontal')) {
          for (let z = 0; z < len; z++) {
            if (len - 1 + i < 10) {
              cells[i + z][j].classList.add('highlight');
            }
          }
        }
        if (ship.classList.contains('vertical')) {
          for (let z = 0; z < len; z++) {
            if (j - len + 1 >= 0) {
              cells[i][j - z].classList.add('highlight');
            }
          }
        }
      });

      cell.addEventListener('dragleave', () => {
        const ship = document.querySelector('.dragging');
        const len = parseInt(ship.getAttribute('length'));

        if (ship.classList.contains('horizontal')) {
          for (let z = 0; z < len; z++) {
            if (i + z < 10) {
              cells[i + z][j].classList.remove('highlight');
            }
          }
        }
        if (ship.classList.contains('vertical')) {
          for (let z = 0; z < len; z++) {
            if (j - z >= 0) {
              cells[i][j - z].classList.remove('highlight');
            }
          }
        }
      });

      cell.addEventListener('drop', (e) => {
        e.preventDefault();
        let shipPlaced = false;
        const domShip = document.querySelector('.dragging');
        const len = parseInt(domShip.getAttribute('length'));

        if (domShip.classList.contains('horizontal')) {
          if (i + len - 1 < 10) {
            let orientation = 'x';
            const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(len, orientation);
            if (blankBoard.placeShip([i, j], ship) === null) {
              alert('CANNOT PLACE SHIP ON TOP OF SHIP');
            } else {
              shipPlaced = true;
            }
          }
        }

        if (domShip.classList.contains('vertical')) {
          if (j - len + 1 < 10) {
            let orientation = 'y';
            const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(len, orientation);
            if (blankBoard.placeShip([i, j], ship) === null) {
              alert('CANNOT PLACE SHIP ON TOP OF SHIP');
            } else {
              shipPlaced = true;
            }
          }
        }
        if (shipPlaced) {
          for (let z = 0; z < len; z++) {
            if (domShip.classList.contains('horizontal')) {
              cells[i + z][j].classList.add('occupied');
            }
            if (domShip.classList.contains('vertical')) {
              cells[i][j - z].classList.add('occupied');
            }
          }
        }

        clearHighlightDom(cells);
        console.log(blankBoard.toString());
      });
    }
  }

  anchorDiv.appendChild(boardDom);

  const dragableWrap = document.createElement('div');
  dragableWrap.id = 'dragable-wrap';

  const carrierWrap = document.createElement('div');
  carrierWrap.appendChild(createShipDom(5));
  dragableWrap.appendChild(carrierWrap);

  const battleWrap = document.createElement('div');
  battleWrap.appendChild(createShipDom(4));
  dragableWrap.appendChild(battleWrap);

  const cruiserWrap = document.createElement('div');
  cruiserWrap.appendChild(createShipDom(4));
  dragableWrap.appendChild(cruiserWrap);

  const submarineWrap = document.createElement('div');
  submarineWrap.appendChild(createShipDom(3));
  dragableWrap.appendChild(submarineWrap);

  const destroyerWrap = document.createElement('div');
  destroyerWrap.appendChild(createShipDom(2));
  dragableWrap.appendChild(destroyerWrap);

  anchorDiv.appendChild(dragableWrap);
}

function clearScreen() {
  anchorDiv.innerHTML = '';
}

function populateBoard() {
  const playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();
  const carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(5, 'x');
  const battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(4, 'x');
  const cruiser = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(3, 'x');
  const submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(3, 'x');
  const destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(2, 'x');

  playerBoard.placeShip([0, 2], carrier);

  battleship.ninteyDegrees();
  playerBoard.placeShip([8, 2], battleship);

  playerBoard.placeShip([1, 4], cruiser);

  playerBoard.placeShip([1, 6], submarine);
  destroyer.ninteyDegrees();

  playerBoard.placeShip([6, 5], destroyer);

  return playerBoard;
}

function boardToDom(board, drawShip = false) {
  const boardWrap = document.createElement('div');
  boardWrap.classList.add('board');
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cellVal = board.getCoordinate([j, i]);
      const cell = document.createElement('div');
      cell.classList.add('cell');

      if ((cellVal === 1) & drawShip) {
        cell.classList.add('ship');
      }

      boardWrap.appendChild(cell);
    }
  }

  return boardWrap;
}

function loadPlayArea(humanPlayer, cpuPlayer) {
  const playArea = document.createElement('div');
  playArea.id = 'play-area-wrap';

  const turnHeading = document.createElement('h2');
  turnHeading.innerHTML = '<span id = "turn-indicator"></span>s Turn.';

  playArea.appendChild(turnHeading);

  const playerSplitWrap = document.createElement('div');
  playerSplitWrap.classList.add('split');

  playArea.appendChild(playerSplitWrap);

  const playerColumn = document.createElement('div');
  playerColumn.id = 'human-column';

  const cpuColumn = document.createElement('div');
  cpuColumn.id = 'cpu-column';

  anchorDiv.appendChild(playArea);

  const playerName = document.createElement('h1');
  playerName.textContent = humanPlayer.getName();

  playerColumn.appendChild(playerName);
  playerColumn.appendChild(boardToDom(humanPlayer.getBoard(), true));

  const cpuName = document.createElement('h1');
  cpuName.textContent = cpuPlayer.getName();

  cpuColumn.appendChild(cpuName);
  cpuColumn.appendChild(boardToDom(cpuPlayer.getBoard()));

  playerSplitWrap.appendChild(playerColumn);
  playerSplitWrap.appendChild(cpuColumn);
}

function addListenerToCells(
  humanBoardDom,
  cpuBoardDom,
  cpuPlayer,
  humanPlayer
) {
  const humanCells = humanBoardDom[0].children;
  const cpuCells = cpuBoardDom[0].children;

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      cpuCells[i * 10 + j].addEventListener('click', () => {
        {
          if (cpuPlayer.getBoard().getCoordinate([j, i]) === 1) {
            cpuCells[i * 10 + j].classList.add('ship');
          }

          if (humanPlayer.getBoard().getCoordinate([j, i]) !== -1) {
            humanPlayer.attackBoard([j, i], cpuPlayer.getBoard());
            cpuCells[i * 10 + j].classList.add('hit');
            updateIndicator('CPU');

            const attackIndex = getRandomInt(randomPos.length);
            const attackPos = randomPos.splice(attackIndex, 1)[0];
            let y = attackPos[1];
            let x = attackPos[0];

            if (humanPlayer.getBoard().getCoordinate([y, x]) === 1) {
              humanCells[attackPos[0] * 10 + attackPos[1]].classList.add(
                'ship'
              );
            }
            humanCells[attackPos[0] * 10 + attackPos[1]].classList.add('hit');

            updateIndicator(humanPlayer.getName());
          }
        }
      });
    }
  }
}

function updateIndicator(name = 'Player 1') {
  const turnIndicator = document.getElementById('turn-indicator');
  if (tracker.getTurn() === 'H') {
    turnIndicator.textContent = name;
  }
  if (tracker.getTurn() === 'C') {
    turnIndicator.textContent = 'CPU';
  }
  tracker.nextTurn();
}

function startGame(humanPlayer, cpuPlayer) {
  if (
    humanPlayer.getBoard().getShips().length === 5 &&
    cpuPlayer.getBoard().getShips().length === 5
  ) {
    const humanDomBoard = document
      .getElementById('human-column')
      .getElementsByClassName('board');

    const cpuDomBoard = document
      .getElementById('cpu-column')
      .getElementsByClassName('board');

    addListenerToCells(humanDomBoard, cpuDomBoard, cpuPlayer, humanPlayer);

    updateIndicator(humanPlayer.getName());
  }
}




/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
const Player = (str, objBoard) => {
  const name = str;
  const board = objBoard;

  const attackBoard = (coord, boardToAttack) => {
    if (boardToAttack.getCoordinate(coord) !== -1) {
      boardToAttack.recieveHit(coord);
    } else {
      return false;
    }
    return true;
  };

  const getBoard = () => {
    return board;
  };

  const getName = () => {
    return name;
  };

  return { attackBoard, getName, getBoard };
};



/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
const Ship = (length, o) => {
  let shipArray = [];
  let orientation = o;

  for (let index = 0; index < length; index++) {
    shipArray.push(1);
  }

  const getShip = () => {
    return shipArray;
  };

  const getLen = () => {
    return shipArray.length;
  };

  const getSunk = () => {
    return !shipArray.includes(1);
  };

  const getOrientation = () => {
    return orientation;
  };

  const ninteyDegrees = () => {
    switch (orientation) {
      case 'x':
        orientation = 'y';
        break;

      case 'y':
        orientation = 'x';
        break;
    }
  };

  const hit = (n) => {
    if (n > length || n < 0) {
      return null;
    } else {
      shipArray[n] = 0;
    }
  };
  return { getShip, getSunk, hit, getOrientation, getLen, ninteyDegrees };
};




/***/ }),

/***/ "./src/turnTracker.js":
/*!****************************!*\
  !*** ./src/turnTracker.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TurnTracker": () => (/* binding */ TurnTracker)
/* harmony export */ });
const TurnTracker = (turn) => {
  let currTurn = turn;

  const getTurn = () => {
    return currTurn;
  };

  const nextTurn = () => {
    switch (currTurn) {
      case 'H':
        currTurn = 'C';
        break;

      case 'C':
        currTurn = 'H';
        break;

      default:
        break;
    }
  };

  return { getTurn, nextTurn };
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load */ "./src/load.js");
// eslint-disable-next-line no-unused-vars



(0,_load__WEBPACK_IMPORTED_MODULE_1__.loadMainAssests)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esb2lCQUFvaUIsY0FBYyxlQUFlLGNBQWMsb0JBQW9CLGtCQUFrQiw2QkFBNkIsR0FBRyxnSkFBZ0osbUJBQW1CLEdBQUcsUUFBUSxtQkFBbUIsR0FBRyxVQUFVLHFCQUFxQixHQUFHLGlCQUFpQixpQkFBaUIsR0FBRywyREFBMkQsZ0JBQWdCLGtCQUFrQixHQUFHLFNBQVMsOEJBQThCLHNCQUFzQixHQUFHLFNBQVMsMkJBQTJCLDhCQUE4QixHQUFHLGdCQUFnQixpQkFBaUIsa0JBQWtCLG9CQUFvQiw0QkFBNEIsS0FBSyxPQUFPLG9CQUFvQixrQkFBa0Isc0JBQXNCLHdCQUF3QixHQUFHLGNBQWMsa0JBQWtCLHNCQUFzQixHQUFHLFlBQVksdUJBQXVCLEdBQUcsUUFBUSw0QkFBNEIsNEJBQTRCLEdBQUcsZUFBZSxnQ0FBZ0MsR0FBRyxXQUFXLDRCQUE0QixpQkFBaUIsa0JBQWtCLGtCQUFrQiwyQ0FBMkMsd0NBQXdDLFdBQVcsR0FBRyxrQkFBa0IscUJBQXFCLGtCQUFrQixzQkFBc0IsMEJBQTBCLEdBQUcsNkJBQTZCLGtCQUFrQixtQ0FBbUMsaUJBQWlCLHdCQUF3QixHQUFHLFlBQVksK0JBQStCLEdBQUcsbUJBQW1CLHVDQUF1QyxHQUFHLGtCQUFrQix3QkFBd0IsZ0JBQWdCLGlCQUFpQixHQUFHLG1CQUFtQixnQkFBZ0Isd0JBQXdCLGtCQUFrQixrQ0FBa0MsdUJBQXVCLGdDQUFnQyxtQkFBbUIsR0FBRyx1QkFBdUIsZ0JBQWdCLGlCQUFpQix5Q0FBeUMsR0FBRyw4QkFBOEIsaUJBQWlCLG9CQUFvQix3QkFBd0IsNEJBQTRCLG1CQUFtQixHQUFHLHVDQUF1QyxtQkFBbUIsR0FBRyxxQ0FBcUMsc0JBQXNCLEdBQUcsc0NBQXNDLGVBQWUsR0FBRyx5Q0FBeUMsZUFBZSxHQUFHLHNDQUFzQyxlQUFlLEdBQUcsc0NBQXNDLGVBQWUsR0FBRyx5QkFBeUIsZ0JBQWdCLGlCQUFpQix3QkFBd0Isa0NBQWtDLEdBQUcsZUFBZSxxQkFBcUIsR0FBRyw4QkFBOEIsZ0JBQWdCLGlCQUFpQixHQUFHLGtDQUFrQyxzQ0FBc0MsR0FBRyxpQ0FBaUMsK0JBQStCLEdBQUcsT0FBTyw0RkFBNEYsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLFVBQVUsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssV0FBVyxVQUFVLFlBQVksY0FBYyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksb2hCQUFvaEIsY0FBYyxlQUFlLGNBQWMsb0JBQW9CLGtCQUFrQiw2QkFBNkIsR0FBRyxnSkFBZ0osbUJBQW1CLEdBQUcsUUFBUSxtQkFBbUIsR0FBRyxVQUFVLHFCQUFxQixHQUFHLGlCQUFpQixpQkFBaUIsR0FBRywyREFBMkQsZ0JBQWdCLGtCQUFrQixHQUFHLFNBQVMsOEJBQThCLHNCQUFzQixHQUFHLFNBQVMsMkJBQTJCLDhCQUE4QixHQUFHLGdCQUFnQixpQkFBaUIsa0JBQWtCLG9CQUFvQiw0QkFBNEIsS0FBSyxPQUFPLG9CQUFvQixrQkFBa0Isc0JBQXNCLHdCQUF3QixHQUFHLGNBQWMsa0JBQWtCLHNCQUFzQixHQUFHLFlBQVksdUJBQXVCLEdBQUcsUUFBUSw0QkFBNEIsNEJBQTRCLEdBQUcsZUFBZSxnQ0FBZ0MsR0FBRyxXQUFXLDRCQUE0QixpQkFBaUIsa0JBQWtCLGtCQUFrQiwyQ0FBMkMsd0NBQXdDLFdBQVcsR0FBRyxrQkFBa0IscUJBQXFCLGtCQUFrQixzQkFBc0IsMEJBQTBCLEdBQUcsNkJBQTZCLGtCQUFrQixtQ0FBbUMsaUJBQWlCLHdCQUF3QixHQUFHLFlBQVksK0JBQStCLEdBQUcsbUJBQW1CLHVDQUF1QyxHQUFHLGtCQUFrQix3QkFBd0IsZ0JBQWdCLGlCQUFpQixHQUFHLG1CQUFtQixnQkFBZ0Isd0JBQXdCLGtCQUFrQixrQ0FBa0MsdUJBQXVCLGdDQUFnQyxtQkFBbUIsR0FBRyx1QkFBdUIsZ0JBQWdCLGlCQUFpQix5Q0FBeUMsR0FBRyw4QkFBOEIsaUJBQWlCLG9CQUFvQix3QkFBd0IsNEJBQTRCLG1CQUFtQixHQUFHLHVDQUF1QyxtQkFBbUIsR0FBRyxxQ0FBcUMsc0JBQXNCLEdBQUcsc0NBQXNDLGVBQWUsR0FBRyx5Q0FBeUMsZUFBZSxHQUFHLHNDQUFzQyxlQUFlLEdBQUcsc0NBQXNDLGVBQWUsR0FBRyx5QkFBeUIsZ0JBQWdCLGlCQUFpQix3QkFBd0Isa0NBQWtDLEdBQUcsZUFBZSxxQkFBcUIsR0FBRyw4QkFBOEIsZ0JBQWdCLGlCQUFpQixHQUFHLGtDQUFrQyxzQ0FBc0MsR0FBRyxpQ0FBaUMsK0JBQStCLEdBQUcsbUJBQW1CO0FBQ3oxUDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCLDJCQUEyQjs7QUFFM0I7QUFDQSwwQkFBMEIsdUJBQXVCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsdUJBQXVCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLDRDQUE0QztBQUMvRDtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdUJBQXVCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLGdDQUFnQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7O0FBRUEsMEJBQTBCLG9CQUFvQjtBQUM5QztBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdJYTtBQUNNO0FBQ1Y7QUFDYzs7QUFFNUM7QUFDQSxnQkFBZ0IseURBQVc7QUFDM0I7O0FBRUEsZ0JBQWdCLFFBQVE7QUFDeEIsa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsR0FBRzs7QUFFbEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwrQ0FBTTtBQUNoQyx3QkFBd0IsK0NBQU07O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGNBQWM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUIsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQixxREFBUztBQUM5QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLFFBQVE7QUFDMUI7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLFFBQVE7QUFDMUIsb0JBQW9CLFFBQVE7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsU0FBUztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsU0FBUztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsU0FBUztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsU0FBUztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyQ0FBSTtBQUM3QjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyQ0FBSTtBQUM3QjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsU0FBUztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IscURBQVM7QUFDL0Isa0JBQWtCLDJDQUFJO0FBQ3RCLHFCQUFxQiwyQ0FBSTtBQUN6QixrQkFBa0IsMkNBQUk7QUFDdEIsb0JBQW9CLDJDQUFJO0FBQ3hCLG9CQUFvQiwyQ0FBSTs7QUFFeEI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUIsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixRQUFRO0FBQzFCLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUUyQjs7Ozs7Ozs7Ozs7Ozs7O0FDeGMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ2tCOzs7Ozs7Ozs7Ozs7Ozs7QUN2QmxCO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVnQjs7Ozs7Ozs7Ozs7Ozs7O0FDOUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRXVCOzs7Ozs7O1VDekJ2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQzhCO0FBQ1c7O0FBRXpDLHNEQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2xvYWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdHVyblRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5ib2R5e1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2Y0ZmY4MTtcXG59XFxuXFxuLnRvdGFsLXdyYXB7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuZm9ybXtcXG5cXHRtYXJnaW4tdG9wOiAxMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWZsb3c6IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaW5wdXQtd3JhcHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZmxvdzogY29sdW1uO1xcbn1cXG4uYnRuLXdyYXB7XFxuXFx0bWFyZ2luLXRvcDogMC4zcmVtO1xcbn1cXG4uY2VsbHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNlbGwuc2hpcHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcblxcbi5ib2FyZHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiAwO1xcbn1cXG4jcGxheS1hcmVhLXdyYXB7XFxuXFx0cGFkZGluZy10b3A6IDV2aDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZmxvdzogY29sdW1uO1xcblxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5LWFyZWEtd3JhcCA+IC5zcGxpdHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG5cXHR3aWR0aDogODAlO1xcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcbi5jZWxsLmhpdHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuLmNlbGwuc2hpcC5oaXR7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NiwgMTksIDE5KTtcXG59XFxuXFxuI3ByZWdhbWVCb2FyZHtcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcblxcdHdpZHRoOiAyMGVtO1xcblxcdGhlaWdodDogMjBlbTtcXG59XFxuXFxuI2RyYWdhYmxlLXdyYXB7XFxuXFx0d2lkdGg6IDUwdnc7XFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcblxcdG1hcmdpbi10b3A6IDI0cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcblxcdHBhZGRpbmc6IDAuNWVtO1xcbn1cXG4jZHJhZ2FibGUtd3JhcCA+IGRpdntcXG5cXHR3aWR0aDogN3JlbTtcXG5cXHRoZWlnaHQ6IDdyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4jZHJhZ2FibGUtd3JhcCAuc2hpcC13cmFwe1xcblxcdGhlaWdodDogMTAwJTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFx0bWFyZ2luOiBhdXRvO1xcbn1cXG4jZHJhZ2FibGUtd3JhcCAuc2hpcC13cmFwLmhvcml6b250YWx7XFxuXFx0ZmxleC1mbG93OiByb3c7XFxufVxcbiNkcmFnYWJsZS13cmFwIC5zaGlwLXdyYXAudmVydGljYWx7XFxuXFx0ZmxleC1mbG93OiBjb2x1bW47XFxufVxcblxcbiNkcmFnYWJsZS13cmFwIC5zaGlwLXdyYXAuY2FycmllcntcXG5cXHR3aWR0aDogODAlO1xcbn1cXG5cXG4jZHJhZ2FibGUtd3JhcCAuc2hpcC13cmFwLmJhdHRsZXNoaXB7XFxuXFx0d2lkdGg6IDY1JTtcXG59XFxuXFxuI2RyYWdhYmxlLXdyYXAgLnNoaXAtd3JhcC5jcnVpc2Vye1xcblxcdHdpZHRoOiA0OCU7XFxufVxcbiNkcmFnYWJsZS13cmFwIC5zaGlwLXdyYXAuc3VibWFyaW5le1xcblxcdHdpZHRoOiAzMyU7XFxufVxcblxcbiNkcmFnYWJsZS13cmFwIC5jZWxse1xcblxcdHdpZHRoOiAxcmVtO1xcblxcdGhlaWdodDogMXJlbTtcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuLmRyYWdnYWJsZXtcXG5cXHRjdXJzb3I6IGdyYWJiaW5nO1xcbn1cXG5cXG4uZHJhZ2dhYmxlLmRyYWdnaW5nIC5jZWxse1xcblxcdHdpZHRoOiAycmVtO1xcblxcdGhlaWdodDogMnJlbTtcXG59XFxuXFxuI3ByZWdhbWVCb2FyZCAuY2VsbC5oaWdobGlnaHR7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA5MiwgOTIpO1xcbn1cXG5cXG4jcHJlZ2FtZUJvYXJkIC5jZWxsLm9jY3VwaWVke1xcblxcdGJhY2tncm91bmQtY29sb3I6bGlnaHRibHVlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0Qix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTs7Q0FFYixhQUFhO0NBQ2IsdUJBQXVCOztBQUV4QjtBQUNBO0NBQ0MsZUFBZTtDQUNmLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLHVCQUF1QjtDQUN2Qix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQywyQkFBMkI7QUFDNUI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxNQUFNO0FBQ1I7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsaUJBQWlCOztDQUVqQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCOztDQUU5QixVQUFVO0NBQ1YsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQywwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxrQ0FBa0M7QUFDbkM7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLDZCQUE2Qjs7Q0FFN0IsZ0JBQWdCO0NBQ2hCLDJCQUEyQjtDQUMzQixjQUFjO0FBQ2Y7QUFDQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0MsWUFBWTs7Q0FFWixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1Qjs7Q0FFdkIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFVBQVU7QUFDWDtBQUNBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixtQkFBbUI7O0NBRW5CLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBRUE7Q0FDQywwQkFBMEI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmJvZHl7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmZjgxO1xcbn1cXG5cXG4udG90YWwtd3JhcHtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbn1cXG5mb3Jte1xcblxcdG1hcmdpbi10b3A6IDEwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZmxvdzogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5pbnB1dC13cmFwe1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1mbG93OiBjb2x1bW47XFxufVxcbi5idG4td3JhcHtcXG5cXHRtYXJnaW4tdG9wOiAwLjNyZW07XFxufVxcbi5jZWxse1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2VsbC5zaGlwe1xcblxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuLmJvYXJke1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBnYXA6IDA7XFxufVxcbiNwbGF5LWFyZWEtd3JhcHtcXG5cXHRwYWRkaW5nLXRvcDogNXZoO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1mbG93OiBjb2x1bW47XFxuXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3BsYXktYXJlYS13cmFwID4gLnNwbGl0e1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcblxcdHdpZHRoOiA4MCU7XFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuLmNlbGwuaGl0e1xcblxcdGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbn1cXG5cXG4uY2VsbC5zaGlwLmhpdHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU2LCAxOSwgMTkpO1xcbn1cXG5cXG4jcHJlZ2FtZUJvYXJke1xcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuXFx0d2lkdGg6IDIwZW07XFxuXFx0aGVpZ2h0OiAyMGVtO1xcbn1cXG5cXG4jZHJhZ2FibGUtd3JhcHtcXG5cXHR3aWR0aDogNTB2dztcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFxuXFx0bWFyZ2luLXRvcDogMjRweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XFxuXFx0cGFkZGluZzogMC41ZW07XFxufVxcbiNkcmFnYWJsZS13cmFwID4gZGl2e1xcblxcdHdpZHRoOiA3cmVtO1xcblxcdGhlaWdodDogN3JlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbiNkcmFnYWJsZS13cmFwIC5zaGlwLXdyYXB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXHRtYXJnaW46IGF1dG87XFxufVxcbiNkcmFnYWJsZS13cmFwIC5zaGlwLXdyYXAuaG9yaXpvbnRhbHtcXG5cXHRmbGV4LWZsb3c6IHJvdztcXG59XFxuI2RyYWdhYmxlLXdyYXAgLnNoaXAtd3JhcC52ZXJ0aWNhbHtcXG5cXHRmbGV4LWZsb3c6IGNvbHVtbjtcXG59XFxuXFxuI2RyYWdhYmxlLXdyYXAgLnNoaXAtd3JhcC5jYXJyaWVye1xcblxcdHdpZHRoOiA4MCU7XFxufVxcblxcbiNkcmFnYWJsZS13cmFwIC5zaGlwLXdyYXAuYmF0dGxlc2hpcHtcXG5cXHR3aWR0aDogNjUlO1xcbn1cXG5cXG4jZHJhZ2FibGUtd3JhcCAuc2hpcC13cmFwLmNydWlzZXJ7XFxuXFx0d2lkdGg6IDQ4JTtcXG59XFxuI2RyYWdhYmxlLXdyYXAgLnNoaXAtd3JhcC5zdWJtYXJpbmV7XFxuXFx0d2lkdGg6IDMzJTtcXG59XFxuXFxuI2RyYWdhYmxlLXdyYXAgLmNlbGx7XFxuXFx0d2lkdGg6IDFyZW07XFxuXFx0aGVpZ2h0OiAxcmVtO1xcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG5cXG4uZHJhZ2dhYmxle1xcblxcdGN1cnNvcjogZ3JhYmJpbmc7XFxufVxcblxcbi5kcmFnZ2FibGUuZHJhZ2dpbmcgLmNlbGx7XFxuXFx0d2lkdGg6IDJyZW07XFxuXFx0aGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4jcHJlZ2FtZUJvYXJkIC5jZWxsLmhpZ2hsaWdodHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDkyLCA5Mik7XFxufVxcblxcbiNwcmVnYW1lQm9hcmQgLmNlbGwub2NjdXBpZWR7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjpsaWdodGJsdWU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IFtcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gIF07XG4gIGNvbnN0IHNoaXBzID0gW107XG5cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IGdldENvb3JkaW5hdGUgPSAoY29vcmQpID0+IHtcbiAgICBsZXQgeSA9IGNvb3JkWzFdO1xuICAgIGxldCB4ID0gY29vcmRbMF07XG5cbiAgICByZXR1cm4gYm9hcmRbeV1beF07XG4gIH07XG5cbiAgY29uc3QgYmxvd0Nvb3JkaW5hdGUgPSAoY29vcmQpID0+IHtcbiAgICBsZXQgeSA9IGNvb3JkWzFdO1xuICAgIGxldCB4ID0gY29vcmRbMF07XG5cbiAgICBib2FyZFt5XVt4XSA9IC0xO1xuICB9O1xuXG4gIGNvbnN0IGdldFNoaXBCeUNvb3JkaW5hdGUgPSAoY29vcmQpID0+IHtcbiAgICBsZXQgc2hpcFRvUmV0dXJuID0gbnVsbDtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBzaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnRbMF0gPT09IGNvb3JkWzBdICYmIGVsZW1lbnRbMV0gPT09IGNvb3JkWzFdKSB7XG4gICAgICAgICAgc2hpcFRvUmV0dXJuID0gc2hpcDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNoaXBUb1JldHVybjtcbiAgfTtcblxuICBjb25zdCBnZXRTaGlwcyA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcHM7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKGNvb3JkLCBzaGlwKSA9PiB7XG4gICAgY29uc3QgeCA9IGNvb3JkWzFdO1xuICAgIGNvbnN0IHkgPSBjb29yZFswXTtcblxuICAgIGNvbnN0IGNoZWNrQXJyYXkgPSBbXTsgLyphcnJheSBtZWFudCBjaGVjayBpZiBhIHNoaXAgaXMgYWxyZWFkeVBsYWNlZCAqL1xuICAgIGNvbnN0IGNvb3JkQXJyYXkgPSBbXTsgLyphcnJheSBtZWFudCB0byB0cmFjayBzaGlwIGNvb3JkaW5hdGVzICovXG5cbiAgICBpZiAoc2hpcC5nZXRPcmllbnRhdGlvbigpID09PSAneScpIHtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaGlwLmdldExlbigpOyBpbmRleCsrKSB7XG4gICAgICAgIGNoZWNrQXJyYXkucHVzaChib2FyZFt4IC0gaW5kZXhdW3ldKTtcbiAgICAgICAgY29vcmRBcnJheS5wdXNoKFt4IC0gaW5kZXgsIHldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNoaXAuZ2V0T3JpZW50YXRpb24oKSA9PT0gJ3gnKSB7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcC5nZXRMZW4oKTsgaW5kZXgrKykge1xuICAgICAgICBjaGVja0FycmF5LnB1c2goYm9hcmRbeF1beSArIGluZGV4XSk7XG4gICAgICAgIGNvb3JkQXJyYXkucHVzaChbeSArIGluZGV4LCB4XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFjaGVja0FycmF5LmluY2x1ZGVzKDEpKSB7XG4gICAgICBzaGlwcy5wdXNoKHsgc2hpcFBvaW50ZXI6IHNoaXAsIGNvb3JkaW5hdGVzOiBjb29yZEFycmF5IH0pO1xuICAgICAgaWYgKHNoaXAuZ2V0T3JpZW50YXRpb24oKSA9PT0gJ3knKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaGlwLmdldExlbigpOyBpbmRleCsrKSB7XG4gICAgICAgICAgYm9hcmRbeCAtIGluZGV4XVt5XSA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzaGlwLmdldE9yaWVudGF0aW9uKCkgPT09ICd4Jykge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcC5nZXRMZW4oKTsgaW5kZXgrKykge1xuICAgICAgICAgIGJvYXJkW3hdW3kgKyBpbmRleF0gPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZWNpZXZlSGl0ID0gKGNvb3JkKSA9PiB7XG4gICAgaWYgKGdldENvb3JkaW5hdGUoY29vcmQpICE9PSAtMSkge1xuICAgICAgaWYgKGdldENvb3JkaW5hdGUoY29vcmQpID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGhpdFNoaXAgPSBnZXRTaGlwQnlDb29yZGluYXRlKGNvb3JkKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhpdFNoaXAuY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBoaXRTaGlwLmNvb3JkaW5hdGVzW2ldWzBdID09PSBjb29yZFswXSAmJlxuICAgICAgICAgICAgaGl0U2hpcC5jb29yZGluYXRlc1tpXVsxXSA9PT0gY29vcmRbMV1cbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGhpdFNoaXAuc2hpcFBvaW50ZXIuaGl0KGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYmxvd0Nvb3JkaW5hdGUoY29vcmQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0b1N0cmluZyA9ICgpID0+IHtcbiAgICBsZXQgc3RyID0gJyc7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGJvYXJkLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgbGV0IGFyciA9IGJvYXJkW2luZGV4XTtcbiAgICAgIHN0ciArPSAnXFxuJztcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFyci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBhcnJbaW5kZXhdO1xuICAgICAgICBzdHIgKz0gYCR7c3RhdGV9IHxgO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG4gIH07XG5cbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgIGxldCBhbGxTdW5rID0gdHJ1ZTtcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmICghc2hpcC5zaGlwUG9pbnRlci5nZXRTdW5rKCkpIHtcbiAgICAgICAgYWxsU3VuayA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhbGxTdW5rO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGdldEJvYXJkLFxuICAgIGdldFNoaXBzLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNpZXZlSGl0LFxuICAgIGFsbFNoaXBzU3VuayxcbiAgICBnZXRDb29yZGluYXRlLFxuICAgIGJsb3dDb29yZGluYXRlLFxuICAgIHRvU3RyaW5nLFxuICB9O1xufTtcblxuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwJztcbmltcG9ydCB7IFR1cm5UcmFja2VyIH0gZnJvbSAnLi90dXJuVHJhY2tlcic7XG5cbmNvbnN0IGFuY2hvckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb25zdCB0cmFja2VyID0gVHVyblRyYWNrZXIoJ0gnKTtcbmxldCByYW5kb21Qb3MgPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgIHJhbmRvbVBvcy5wdXNoKFtpLCBqXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcbn1cblxuZnVuY3Rpb24gbG9hZE1haW5Bc3Nlc3RzKCkge1xuICBsb2FkUHJlR2FtZSgpO1xuICBsb2FkTmFtZVByb21wdCgpO1xufVxuXG5mdW5jdGlvbiBsb2FkTmFtZVByb21wdCgpIHtcbiAgY29uc3QgdG90YWxXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvdGFsV3JhcC5jbGFzc0xpc3QuYWRkKCd0b3RhbC13cmFwJyk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZTonO1xuICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZV9pbnB1dCcpO1xuXG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWVfaW5wdXQnKTtcbiAgbmFtZUlucHV0LmlkID0gJ25hbWVfaW5wdXQnO1xuICBuYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdwYXR0ZXJuJywgJ15bYS16QS1aXXs0LH0kJyk7XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi50ZXh0Q29udGVudCA9ICdOZXh0JztcblxuICBjb25zdCBpbnB1dFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5wdXRXcmFwLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXdyYXAnKTtcblxuICBpbnB1dFdyYXAuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgaW5wdXRXcmFwLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dFdyYXApO1xuICBmb3JtLm9uc3VibWl0ID0gYGV2ZW50LnByZXZlbnREZWZhdWx0KCk7YDtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgaWYgKG5hbWVJbnB1dC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgY29uc3QgcGxheWVyQm9hcmQgPSBwb3B1bGF0ZUJvYXJkKCk7XG4gICAgICBjb25zdCBodW1hblBsYXllciA9IFBsYXllcihuYW1lSW5wdXQudmFsdWUsIHBsYXllckJvYXJkKTtcbiAgICAgIGNvbnN0IGNwdVBsYXllciA9IFBsYXllcignQ1BVJywgcGxheWVyQm9hcmQpO1xuXG4gICAgICBjbGVhclNjcmVlbigpO1xuICAgICAgbG9hZFByZUdhbWUobmFtZUlucHV0LnZhbHVlKTtcbiAgICAgIC8vbG9hZFBsYXlBcmVhKGh1bWFuUGxheWVyLCBjcHVQbGF5ZXIpO1xuICAgICAgLy9zdGFydEdhbWUoaHVtYW5QbGF5ZXIsIGNwdVBsYXllciwgbmFtZUlucHV0LnZhbHVlKTtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxuICBjb25zdCBidG5XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ0bldyYXAuY2xhc3NMaXN0LmFkZCgnYnRuLXdyYXAnKTtcblxuICBidG5XcmFwLmFwcGVuZENoaWxkKGJ0bik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnRuV3JhcCk7XG5cbiAgdG90YWxXcmFwLmFwcGVuZENoaWxkKGZvcm0pO1xuICBhbmNob3JEaXYuYXBwZW5kQ2hpbGQodG90YWxXcmFwKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2hpcERvbShzaXplKSB7XG4gIGNvbnN0IHNoaXBXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNoaXBXcmFwLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgdHJ1ZSk7XG4gIHNoaXBXcmFwLmNsYXNzTGlzdC5hZGQoJ3NoaXAtd3JhcCcpO1xuICBzaGlwV3JhcC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2FibGUnKTtcbiAgc2hpcFdyYXAuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuXG4gIGNvbnN0IHJvb3RDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJvb3RDZWxsLmlkID0gJ3Jvb3QtY2VsbCc7XG4gIHJvb3RDZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcblxuICBzaGlwV3JhcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiB7XG4gICAgc2hpcFdyYXAuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKTtcbiAgfSk7XG5cbiAgc2hpcFdyYXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IHtcbiAgICBzaGlwV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xuICB9KTtcblxuICBzaGlwV3JhcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgaXNIb3Jpem9udGFsID0gc2hpcFdyYXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJyk7XG4gICAgc3dpdGNoIChpc0hvcml6b250YWwpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgc2hpcFdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnaG9yaXpvbnRhbCcpO1xuICAgICAgICBzaGlwV3JhcC5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGZhbHNlOlxuICAgICAgICBzaGlwV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCd2ZXJ0aWNhbCcpO1xuICAgICAgICBzaGlwV3JhcC5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsJyk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG5cbiAgc2hpcFdyYXAuc2V0QXR0cmlidXRlKCdsZW5ndGgnLCBzaXplKTtcblxuICBzd2l0Y2ggKHNpemUpIHtcbiAgICBjYXNlIDU6XG4gICAgICBzaGlwV3JhcC5jbGFzc0xpc3QuYWRkKCdjYXJyaWVyJyk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgNDpcbiAgICAgIHNoaXBXcmFwLmNsYXNzTGlzdC5hZGQoJ2JhdHRsZXNoaXAnKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAzOlxuICAgICAgc2hpcFdyYXAuY2xhc3NMaXN0LmFkZCgnY3J1aXNlcicpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDI6XG4gICAgICBzaGlwV3JhcC5jbGFzc0xpc3QuYWRkKCdzdWJtYXJpbmUnKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplIC0gMTsgaSsrKSB7XG4gICAgbGV0IHNoaXBDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcENlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgIHNoaXBXcmFwLmFwcGVuZENoaWxkKHNoaXBDZWxsKTtcbiAgfVxuXG4gIHNoaXBXcmFwLmFwcGVuZENoaWxkKHJvb3RDZWxsKTtcblxuICByZXR1cm4gc2hpcFdyYXA7XG59XG5mdW5jdGlvbiBjbGVhckhpZ2hsaWdodERvbShjZWxscykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGlmIChjZWxsc1tpXVtqXS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZ2hsaWdodCcpKSB7XG4gICAgICAgIGNlbGxzW2ldW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkUHJlR2FtZSgpIHtcbiAgY29uc3QgaW50cm9IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaW50cm9IZWFkaW5nLmlkID0gJ2ludHJvLWhlYWQnO1xuICBpbnRyb0hlYWRpbmcudGV4dENvbnRlbnQgPSAnQ0hPT1NFIFlPVVIgU0hJUFMgQURNSVJBTCc7XG5cbiAgYW5jaG9yRGl2LmFwcGVuZENoaWxkKGludHJvSGVhZGluZyk7XG5cbiAgY29uc3QgYmxhbmtCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBsZXQgYm9hcmREb20gPSBib2FyZFRvRG9tKGJsYW5rQm9hcmQpO1xuICBib2FyZERvbS5pZCA9ICdwcmVnYW1lQm9hcmQnO1xuXG4gIGNvbnN0IGRvbUNlbGxzID0gYm9hcmREb20ucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcbiAgbGV0IGNlbGxzID0gWy4uLkFycmF5KDEwKV0ubWFwKCgpID0+IEFycmF5KDEwKSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gY2VsbHNbaV07XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICByb3dbal0gPSBkb21DZWxsc1tpICsgaiAqIDEwXTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGNvbnN0IGNlbGwgPSBjZWxsc1tpXVtqXTtcblxuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnZ2luZycpO1xuICAgICAgICBjb25zdCBsZW4gPSBwYXJzZUludChzaGlwLmdldEF0dHJpYnV0ZSgnbGVuZ3RoJykpO1xuXG4gICAgICAgIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpKSB7XG4gICAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCBsZW47IHorKykge1xuICAgICAgICAgICAgaWYgKGxlbiAtIDEgKyBpIDwgMTApIHtcbiAgICAgICAgICAgICAgY2VsbHNbaSArIHpdW2pdLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykpIHtcbiAgICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IGxlbjsgeisrKSB7XG4gICAgICAgICAgICBpZiAoaiAtIGxlbiArIDEgPj0gMCkge1xuICAgICAgICAgICAgICBjZWxsc1tpXVtqIC0gel0uY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dpbmcnKTtcbiAgICAgICAgY29uc3QgbGVuID0gcGFyc2VJbnQoc2hpcC5nZXRBdHRyaWJ1dGUoJ2xlbmd0aCcpKTtcblxuICAgICAgICBpZiAoc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKSkge1xuICAgICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgbGVuOyB6KyspIHtcbiAgICAgICAgICAgIGlmIChpICsgeiA8IDEwKSB7XG4gICAgICAgICAgICAgIGNlbGxzW2kgKyB6XVtqXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCd2ZXJ0aWNhbCcpKSB7XG4gICAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCBsZW47IHorKykge1xuICAgICAgICAgICAgaWYgKGogLSB6ID49IDApIHtcbiAgICAgICAgICAgICAgY2VsbHNbaV1baiAtIHpdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHNoaXBQbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgZG9tU2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnZ2luZycpO1xuICAgICAgICBjb25zdCBsZW4gPSBwYXJzZUludChkb21TaGlwLmdldEF0dHJpYnV0ZSgnbGVuZ3RoJykpO1xuXG4gICAgICAgIGlmIChkb21TaGlwLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpKSB7XG4gICAgICAgICAgaWYgKGkgKyBsZW4gLSAxIDwgMTApIHtcbiAgICAgICAgICAgIGxldCBvcmllbnRhdGlvbiA9ICd4JztcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKGxlbiwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgaWYgKGJsYW5rQm9hcmQucGxhY2VTaGlwKFtpLCBqXSwgc2hpcCkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgYWxlcnQoJ0NBTk5PVCBQTEFDRSBTSElQIE9OIFRPUCBPRiBTSElQJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzaGlwUGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9tU2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykpIHtcbiAgICAgICAgICBpZiAoaiAtIGxlbiArIDEgPCAxMCkge1xuICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gJ3knO1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IFNoaXAobGVuLCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICBpZiAoYmxhbmtCb2FyZC5wbGFjZVNoaXAoW2ksIGpdLCBzaGlwKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBhbGVydCgnQ0FOTk9UIFBMQUNFIFNISVAgT04gVE9QIE9GIFNISVAnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNoaXBQbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hpcFBsYWNlZCkge1xuICAgICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgbGVuOyB6KyspIHtcbiAgICAgICAgICAgIGlmIChkb21TaGlwLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpKSB7XG4gICAgICAgICAgICAgIGNlbGxzW2kgKyB6XVtqXS5jbGFzc0xpc3QuYWRkKCdvY2N1cGllZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRvbVNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCd2ZXJ0aWNhbCcpKSB7XG4gICAgICAgICAgICAgIGNlbGxzW2ldW2ogLSB6XS5jbGFzc0xpc3QuYWRkKCdvY2N1cGllZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNsZWFySGlnaGxpZ2h0RG9tKGNlbGxzKTtcbiAgICAgICAgY29uc29sZS5sb2coYmxhbmtCb2FyZC50b1N0cmluZygpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFuY2hvckRpdi5hcHBlbmRDaGlsZChib2FyZERvbSk7XG5cbiAgY29uc3QgZHJhZ2FibGVXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRyYWdhYmxlV3JhcC5pZCA9ICdkcmFnYWJsZS13cmFwJztcblxuICBjb25zdCBjYXJyaWVyV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJyaWVyV3JhcC5hcHBlbmRDaGlsZChjcmVhdGVTaGlwRG9tKDUpKTtcbiAgZHJhZ2FibGVXcmFwLmFwcGVuZENoaWxkKGNhcnJpZXJXcmFwKTtcblxuICBjb25zdCBiYXR0bGVXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJhdHRsZVdyYXAuYXBwZW5kQ2hpbGQoY3JlYXRlU2hpcERvbSg0KSk7XG4gIGRyYWdhYmxlV3JhcC5hcHBlbmRDaGlsZChiYXR0bGVXcmFwKTtcblxuICBjb25zdCBjcnVpc2VyV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjcnVpc2VyV3JhcC5hcHBlbmRDaGlsZChjcmVhdGVTaGlwRG9tKDQpKTtcbiAgZHJhZ2FibGVXcmFwLmFwcGVuZENoaWxkKGNydWlzZXJXcmFwKTtcblxuICBjb25zdCBzdWJtYXJpbmVXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHN1Ym1hcmluZVdyYXAuYXBwZW5kQ2hpbGQoY3JlYXRlU2hpcERvbSgzKSk7XG4gIGRyYWdhYmxlV3JhcC5hcHBlbmRDaGlsZChzdWJtYXJpbmVXcmFwKTtcblxuICBjb25zdCBkZXN0cm95ZXJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc3Ryb3llcldyYXAuYXBwZW5kQ2hpbGQoY3JlYXRlU2hpcERvbSgyKSk7XG4gIGRyYWdhYmxlV3JhcC5hcHBlbmRDaGlsZChkZXN0cm95ZXJXcmFwKTtcblxuICBhbmNob3JEaXYuYXBwZW5kQ2hpbGQoZHJhZ2FibGVXcmFwKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJTY3JlZW4oKSB7XG4gIGFuY2hvckRpdi5pbm5lckhUTUwgPSAnJztcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVCb2FyZCgpIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgY2FycmllciA9IFNoaXAoNSwgJ3gnKTtcbiAgY29uc3QgYmF0dGxlc2hpcCA9IFNoaXAoNCwgJ3gnKTtcbiAgY29uc3QgY3J1aXNlciA9IFNoaXAoMywgJ3gnKTtcbiAgY29uc3Qgc3VibWFyaW5lID0gU2hpcCgzLCAneCcpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwKDIsICd4Jyk7XG5cbiAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFswLCAyXSwgY2Fycmllcik7XG5cbiAgYmF0dGxlc2hpcC5uaW50ZXlEZWdyZWVzKCk7XG4gIHBsYXllckJvYXJkLnBsYWNlU2hpcChbOCwgMl0sIGJhdHRsZXNoaXApO1xuXG4gIHBsYXllckJvYXJkLnBsYWNlU2hpcChbMSwgNF0sIGNydWlzZXIpO1xuXG4gIHBsYXllckJvYXJkLnBsYWNlU2hpcChbMSwgNl0sIHN1Ym1hcmluZSk7XG4gIGRlc3Ryb3llci5uaW50ZXlEZWdyZWVzKCk7XG5cbiAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFs2LCA1XSwgZGVzdHJveWVyKTtcblxuICByZXR1cm4gcGxheWVyQm9hcmQ7XG59XG5cbmZ1bmN0aW9uIGJvYXJkVG9Eb20oYm9hcmQsIGRyYXdTaGlwID0gZmFsc2UpIHtcbiAgY29uc3QgYm9hcmRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvYXJkV3JhcC5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGNvbnN0IGNlbGxWYWwgPSBib2FyZC5nZXRDb29yZGluYXRlKFtqLCBpXSk7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcblxuICAgICAgaWYgKChjZWxsVmFsID09PSAxKSAmIGRyYXdTaGlwKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgfVxuXG4gICAgICBib2FyZFdyYXAuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJvYXJkV3JhcDtcbn1cblxuZnVuY3Rpb24gbG9hZFBsYXlBcmVhKGh1bWFuUGxheWVyLCBjcHVQbGF5ZXIpIHtcbiAgY29uc3QgcGxheUFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGxheUFyZWEuaWQgPSAncGxheS1hcmVhLXdyYXAnO1xuXG4gIGNvbnN0IHR1cm5IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgdHVybkhlYWRpbmcuaW5uZXJIVE1MID0gJzxzcGFuIGlkID0gXCJ0dXJuLWluZGljYXRvclwiPjwvc3Bhbj5zIFR1cm4uJztcblxuICBwbGF5QXJlYS5hcHBlbmRDaGlsZCh0dXJuSGVhZGluZyk7XG5cbiAgY29uc3QgcGxheWVyU3BsaXRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBsYXllclNwbGl0V3JhcC5jbGFzc0xpc3QuYWRkKCdzcGxpdCcpO1xuXG4gIHBsYXlBcmVhLmFwcGVuZENoaWxkKHBsYXllclNwbGl0V3JhcCk7XG5cbiAgY29uc3QgcGxheWVyQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBsYXllckNvbHVtbi5pZCA9ICdodW1hbi1jb2x1bW4nO1xuXG4gIGNvbnN0IGNwdUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjcHVDb2x1bW4uaWQgPSAnY3B1LWNvbHVtbic7XG5cbiAgYW5jaG9yRGl2LmFwcGVuZENoaWxkKHBsYXlBcmVhKTtcblxuICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgcGxheWVyTmFtZS50ZXh0Q29udGVudCA9IGh1bWFuUGxheWVyLmdldE5hbWUoKTtcblxuICBwbGF5ZXJDb2x1bW4uYXBwZW5kQ2hpbGQocGxheWVyTmFtZSk7XG4gIHBsYXllckNvbHVtbi5hcHBlbmRDaGlsZChib2FyZFRvRG9tKGh1bWFuUGxheWVyLmdldEJvYXJkKCksIHRydWUpKTtcblxuICBjb25zdCBjcHVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgY3B1TmFtZS50ZXh0Q29udGVudCA9IGNwdVBsYXllci5nZXROYW1lKCk7XG5cbiAgY3B1Q29sdW1uLmFwcGVuZENoaWxkKGNwdU5hbWUpO1xuICBjcHVDb2x1bW4uYXBwZW5kQ2hpbGQoYm9hcmRUb0RvbShjcHVQbGF5ZXIuZ2V0Qm9hcmQoKSkpO1xuXG4gIHBsYXllclNwbGl0V3JhcC5hcHBlbmRDaGlsZChwbGF5ZXJDb2x1bW4pO1xuICBwbGF5ZXJTcGxpdFdyYXAuYXBwZW5kQ2hpbGQoY3B1Q29sdW1uKTtcbn1cblxuZnVuY3Rpb24gYWRkTGlzdGVuZXJUb0NlbGxzKFxuICBodW1hbkJvYXJkRG9tLFxuICBjcHVCb2FyZERvbSxcbiAgY3B1UGxheWVyLFxuICBodW1hblBsYXllclxuKSB7XG4gIGNvbnN0IGh1bWFuQ2VsbHMgPSBodW1hbkJvYXJkRG9tWzBdLmNoaWxkcmVuO1xuICBjb25zdCBjcHVDZWxscyA9IGNwdUJvYXJkRG9tWzBdLmNoaWxkcmVuO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgY3B1Q2VsbHNbaSAqIDEwICsgal0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoY3B1UGxheWVyLmdldEJvYXJkKCkuZ2V0Q29vcmRpbmF0ZShbaiwgaV0pID09PSAxKSB7XG4gICAgICAgICAgICBjcHVDZWxsc1tpICogMTAgKyBqXS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGh1bWFuUGxheWVyLmdldEJvYXJkKCkuZ2V0Q29vcmRpbmF0ZShbaiwgaV0pICE9PSAtMSkge1xuICAgICAgICAgICAgaHVtYW5QbGF5ZXIuYXR0YWNrQm9hcmQoW2osIGldLCBjcHVQbGF5ZXIuZ2V0Qm9hcmQoKSk7XG4gICAgICAgICAgICBjcHVDZWxsc1tpICogMTAgKyBqXS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgIHVwZGF0ZUluZGljYXRvcignQ1BVJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGF0dGFja0luZGV4ID0gZ2V0UmFuZG9tSW50KHJhbmRvbVBvcy5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgYXR0YWNrUG9zID0gcmFuZG9tUG9zLnNwbGljZShhdHRhY2tJbmRleCwgMSlbMF07XG4gICAgICAgICAgICBsZXQgeSA9IGF0dGFja1Bvc1sxXTtcbiAgICAgICAgICAgIGxldCB4ID0gYXR0YWNrUG9zWzBdO1xuXG4gICAgICAgICAgICBpZiAoaHVtYW5QbGF5ZXIuZ2V0Qm9hcmQoKS5nZXRDb29yZGluYXRlKFt5LCB4XSkgPT09IDEpIHtcbiAgICAgICAgICAgICAgaHVtYW5DZWxsc1thdHRhY2tQb3NbMF0gKiAxMCArIGF0dGFja1Bvc1sxXV0uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgICAgICAnc2hpcCdcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGh1bWFuQ2VsbHNbYXR0YWNrUG9zWzBdICogMTAgKyBhdHRhY2tQb3NbMV1dLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuXG4gICAgICAgICAgICB1cGRhdGVJbmRpY2F0b3IoaHVtYW5QbGF5ZXIuZ2V0TmFtZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVJbmRpY2F0b3IobmFtZSA9ICdQbGF5ZXIgMScpIHtcbiAgY29uc3QgdHVybkluZGljYXRvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dXJuLWluZGljYXRvcicpO1xuICBpZiAodHJhY2tlci5nZXRUdXJuKCkgPT09ICdIJykge1xuICAgIHR1cm5JbmRpY2F0b3IudGV4dENvbnRlbnQgPSBuYW1lO1xuICB9XG4gIGlmICh0cmFja2VyLmdldFR1cm4oKSA9PT0gJ0MnKSB7XG4gICAgdHVybkluZGljYXRvci50ZXh0Q29udGVudCA9ICdDUFUnO1xuICB9XG4gIHRyYWNrZXIubmV4dFR1cm4oKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRHYW1lKGh1bWFuUGxheWVyLCBjcHVQbGF5ZXIpIHtcbiAgaWYgKFxuICAgIGh1bWFuUGxheWVyLmdldEJvYXJkKCkuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUgJiZcbiAgICBjcHVQbGF5ZXIuZ2V0Qm9hcmQoKS5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNVxuICApIHtcbiAgICBjb25zdCBodW1hbkRvbUJvYXJkID0gZG9jdW1lbnRcbiAgICAgIC5nZXRFbGVtZW50QnlJZCgnaHVtYW4tY29sdW1uJylcbiAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib2FyZCcpO1xuXG4gICAgY29uc3QgY3B1RG9tQm9hcmQgPSBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKCdjcHUtY29sdW1uJylcbiAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib2FyZCcpO1xuXG4gICAgYWRkTGlzdGVuZXJUb0NlbGxzKGh1bWFuRG9tQm9hcmQsIGNwdURvbUJvYXJkLCBjcHVQbGF5ZXIsIGh1bWFuUGxheWVyKTtcblxuICAgIHVwZGF0ZUluZGljYXRvcihodW1hblBsYXllci5nZXROYW1lKCkpO1xuICB9XG59XG5cbmV4cG9ydCB7IGxvYWRNYWluQXNzZXN0cyB9O1xuIiwiY29uc3QgUGxheWVyID0gKHN0ciwgb2JqQm9hcmQpID0+IHtcbiAgY29uc3QgbmFtZSA9IHN0cjtcbiAgY29uc3QgYm9hcmQgPSBvYmpCb2FyZDtcblxuICBjb25zdCBhdHRhY2tCb2FyZCA9IChjb29yZCwgYm9hcmRUb0F0dGFjaykgPT4ge1xuICAgIGlmIChib2FyZFRvQXR0YWNrLmdldENvb3JkaW5hdGUoY29vcmQpICE9PSAtMSkge1xuICAgICAgYm9hcmRUb0F0dGFjay5yZWNpZXZlSGl0KGNvb3JkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IHtcbiAgICByZXR1cm4gYm9hcmQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbmFtZTtcbiAgfTtcblxuICByZXR1cm4geyBhdHRhY2tCb2FyZCwgZ2V0TmFtZSwgZ2V0Qm9hcmQgfTtcbn07XG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsImNvbnN0IFNoaXAgPSAobGVuZ3RoLCBvKSA9PiB7XG4gIGxldCBzaGlwQXJyYXkgPSBbXTtcbiAgbGV0IG9yaWVudGF0aW9uID0gbztcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgc2hpcEFycmF5LnB1c2goMSk7XG4gIH1cblxuICBjb25zdCBnZXRTaGlwID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwQXJyYXk7XG4gIH07XG5cbiAgY29uc3QgZ2V0TGVuID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwQXJyYXkubGVuZ3RoO1xuICB9O1xuXG4gIGNvbnN0IGdldFN1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuICFzaGlwQXJyYXkuaW5jbHVkZXMoMSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0T3JpZW50YXRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIG9yaWVudGF0aW9uO1xuICB9O1xuXG4gIGNvbnN0IG5pbnRleURlZ3JlZXMgPSAoKSA9PiB7XG4gICAgc3dpdGNoIChvcmllbnRhdGlvbikge1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIG9yaWVudGF0aW9uID0gJ3knO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAneSc6XG4gICAgICAgIG9yaWVudGF0aW9uID0gJ3gnO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGl0ID0gKG4pID0+IHtcbiAgICBpZiAobiA+IGxlbmd0aCB8fCBuIDwgMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoaXBBcnJheVtuXSA9IDA7XG4gICAgfVxuICB9O1xuICByZXR1cm4geyBnZXRTaGlwLCBnZXRTdW5rLCBoaXQsIGdldE9yaWVudGF0aW9uLCBnZXRMZW4sIG5pbnRleURlZ3JlZXMgfTtcbn07XG5cbmV4cG9ydCB7IFNoaXAgfTtcbiIsImNvbnN0IFR1cm5UcmFja2VyID0gKHR1cm4pID0+IHtcbiAgbGV0IGN1cnJUdXJuID0gdHVybjtcblxuICBjb25zdCBnZXRUdXJuID0gKCkgPT4ge1xuICAgIHJldHVybiBjdXJyVHVybjtcbiAgfTtcblxuICBjb25zdCBuZXh0VHVybiA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKGN1cnJUdXJuKSB7XG4gICAgICBjYXNlICdIJzpcbiAgICAgICAgY3VyclR1cm4gPSAnQyc7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdDJzpcbiAgICAgICAgY3VyclR1cm4gPSAnSCc7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0VHVybiwgbmV4dFR1cm4gfTtcbn07XG5cbmV4cG9ydCB7IFR1cm5UcmFja2VyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgbG9hZE1haW5Bc3Nlc3RzIH0gZnJvbSAnLi9sb2FkJztcblxubG9hZE1haW5Bc3Nlc3RzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=