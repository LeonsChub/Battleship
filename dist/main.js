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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody{\n\tbox-sizing: border-box;\n\tbackground-color: #f4ff81;\n}\n\n.total-wrap{\n\twidth: 100vw;\n\theight: 100vh;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\n}\nform{\n\tmargin-top: 10%;\n\tdisplay: flex;\n\tflex-flow: column;\n\talign-items: center;\n}\n.input-wrap{\n\tdisplay: flex;\n\tflex-flow: column;\n}\n.btn-wrap{\n\tmargin-top: 0.3rem;\n}\n.cell{\n\tbackground-color: white;\n\tborder: 1px solid black;\n}\n\n.cell.ship{\n\tbackground-color: lightblue;\n}\n\n.board{\n  border: 1px solid black;\n  width: 350px;\n  height: 350px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 0;\n}\n#play-area-wrap{\n\tpadding-top: 5vh;\n\tdisplay: flex;\n\tflex-flow: column;\n\n\talign-items: center;\n}\n\n#play-area-wrap > .split{\n\tdisplay: flex;\n\tjustify-content: space-between;\n\n\twidth: 80%;\n\tmargin-inline: auto;\n}\n.cell.hit{\n\tbackground-color: darkgray;\n}\n\n.cell.ship.hit{\n\tbackground-color: rgb(156, 19, 19);\n}\n\n#pregameBoard{\n\tmargin-inline: auto;\n\twidth: 20em;\n\theight: 20em;\n}\n\n#draggable-wrap{\n\twidth: fit-content;\n\tmargin-inline: auto;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\n\tmargin-top: 24px;\n\tbackground-color: cadetblue;\n\tpadding: 0.5em;\n}\n#draggable-wrap > div{\n\twidth: 7rem;\n\theight: 7rem;\n\tbackground-color: rgb(255, 255, 255);\n}\n\n#draggable-wrap .ship-wrap{\n\theight: 100%;\n\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\tmargin: auto;\n}\n#draggable-wrap .ship-wrap.horizontal{\n\tflex-flow: row;\n}\n#draggable-wrap .ship-wrap.vertical{\n\tflex-flow: column;\n}\n\n#draggable-wrap .ship-wrap.carrier{\n\twidth: 80%;\n}\n\n#draggable-wrap .ship-wrap.battleship{\n\twidth: 65%;\n}\n\n#draggable-wrap .ship-wrap.cruiser{\n\twidth: 48%;\n}\n#draggable-wrap .ship-wrap.submarine{\n\twidth: 33%;\n}\n\n#draggable-wrap .cell{\n\twidth: 1rem;\n\theight: 1rem;\n\tmargin-inline: auto;\n\n\tbackground-color: lightblue;\n}\n\n.draggable{\n\tcursor: grabbing;\n}\n\n.draggable.dragging .cell{\n\twidth: 2rem;\n\theight: 2rem;\n}\n\n#pregameBoard .cell.highlight{\n\tbackground-color: rgb(92, 92, 92);\n}\n\n#pregameBoard .cell.occupied{\n\tbackground-color:lightblue;\n}\n\n#draggable-wrap .deactivated{\n\tvisibility:hidden;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;CACC,sBAAsB;CACtB,yBAAyB;AAC1B;;AAEA;CACC,YAAY;CACZ,aAAa;;CAEb,aAAa;CACb,uBAAuB;;AAExB;AACA;CACC,eAAe;CACf,aAAa;CACb,iBAAiB;CACjB,mBAAmB;AACpB;AACA;CACC,aAAa;CACb,iBAAiB;AAClB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,uBAAuB;CACvB,uBAAuB;AACxB;;AAEA;CACC,2BAA2B;AAC5B;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,MAAM;AACR;AACA;CACC,gBAAgB;CAChB,aAAa;CACb,iBAAiB;;CAEjB,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,8BAA8B;;CAE9B,UAAU;CACV,mBAAmB;AACpB;AACA;CACC,0BAA0B;AAC3B;;AAEA;CACC,kCAAkC;AACnC;;AAEA;CACC,mBAAmB;CACnB,WAAW;CACX,YAAY;AACb;;AAEA;CACC,kBAAkB;CAClB,mBAAmB;CACnB,aAAa;CACb,6BAA6B;;CAE7B,gBAAgB;CAChB,2BAA2B;CAC3B,cAAc;AACf;AACA;CACC,WAAW;CACX,YAAY;CACZ,oCAAoC;AACrC;;AAEA;CACC,YAAY;;CAEZ,aAAa;CACb,mBAAmB;CACnB,uBAAuB;;CAEvB,YAAY;AACb;AACA;CACC,cAAc;AACf;AACA;CACC,iBAAiB;AAClB;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,UAAU;AACX;AACA;CACC,UAAU;AACX;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,mBAAmB;;CAEnB,2BAA2B;AAC5B;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,WAAW;CACX,YAAY;AACb;;AAEA;CACC,iCAAiC;AAClC;;AAEA;CACC,0BAA0B;AAC3B;;AAEA;CACC,iBAAiB;AAClB","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody{\n\tbox-sizing: border-box;\n\tbackground-color: #f4ff81;\n}\n\n.total-wrap{\n\twidth: 100vw;\n\theight: 100vh;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\n}\nform{\n\tmargin-top: 10%;\n\tdisplay: flex;\n\tflex-flow: column;\n\talign-items: center;\n}\n.input-wrap{\n\tdisplay: flex;\n\tflex-flow: column;\n}\n.btn-wrap{\n\tmargin-top: 0.3rem;\n}\n.cell{\n\tbackground-color: white;\n\tborder: 1px solid black;\n}\n\n.cell.ship{\n\tbackground-color: lightblue;\n}\n\n.board{\n  border: 1px solid black;\n  width: 350px;\n  height: 350px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 0;\n}\n#play-area-wrap{\n\tpadding-top: 5vh;\n\tdisplay: flex;\n\tflex-flow: column;\n\n\talign-items: center;\n}\n\n#play-area-wrap > .split{\n\tdisplay: flex;\n\tjustify-content: space-between;\n\n\twidth: 80%;\n\tmargin-inline: auto;\n}\n.cell.hit{\n\tbackground-color: darkgray;\n}\n\n.cell.ship.hit{\n\tbackground-color: rgb(156, 19, 19);\n}\n\n#pregameBoard{\n\tmargin-inline: auto;\n\twidth: 20em;\n\theight: 20em;\n}\n\n#draggable-wrap{\n\twidth: fit-content;\n\tmargin-inline: auto;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\n\tmargin-top: 24px;\n\tbackground-color: cadetblue;\n\tpadding: 0.5em;\n}\n#draggable-wrap > div{\n\twidth: 7rem;\n\theight: 7rem;\n\tbackground-color: rgb(255, 255, 255);\n}\n\n#draggable-wrap .ship-wrap{\n\theight: 100%;\n\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\tmargin: auto;\n}\n#draggable-wrap .ship-wrap.horizontal{\n\tflex-flow: row;\n}\n#draggable-wrap .ship-wrap.vertical{\n\tflex-flow: column;\n}\n\n#draggable-wrap .ship-wrap.carrier{\n\twidth: 80%;\n}\n\n#draggable-wrap .ship-wrap.battleship{\n\twidth: 65%;\n}\n\n#draggable-wrap .ship-wrap.cruiser{\n\twidth: 48%;\n}\n#draggable-wrap .ship-wrap.submarine{\n\twidth: 33%;\n}\n\n#draggable-wrap .cell{\n\twidth: 1rem;\n\theight: 1rem;\n\tmargin-inline: auto;\n\n\tbackground-color: lightblue;\n}\n\n.draggable{\n\tcursor: grabbing;\n}\n\n.draggable.dragging .cell{\n\twidth: 2rem;\n\theight: 2rem;\n}\n\n#pregameBoard .cell.highlight{\n\tbackground-color: rgb(92, 92, 92);\n}\n\n#pregameBoard .cell.occupied{\n\tbackground-color:lightblue;\n}\n\n#draggable-wrap .deactivated{\n\tvisibility:hidden;\n}"],"sourceRoot":""}]);
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
          domShip.classList.remove('draggable');
          domShip.classList.add('deactivated');
        }
        clearHighlightDom(cells);
      });
    }
  }

  anchorDiv.appendChild(boardDom);

  const draggableWrap = document.createElement('div');
  draggableWrap.id = 'draggable-wrap';

  const carrierWrap = document.createElement('div');
  carrierWrap.appendChild(createShipDom(5));
  draggableWrap.appendChild(carrierWrap);

  const battleWrap = document.createElement('div');
  battleWrap.appendChild(createShipDom(4));
  draggableWrap.appendChild(battleWrap);

  const cruiserWrap = document.createElement('div');
  cruiserWrap.appendChild(createShipDom(4));
  draggableWrap.appendChild(cruiserWrap);

  const submarineWrap = document.createElement('div');
  submarineWrap.appendChild(createShipDom(3));
  draggableWrap.appendChild(submarineWrap);

  const destroyerWrap = document.createElement('div');
  destroyerWrap.appendChild(createShipDom(2));
  draggableWrap.appendChild(destroyerWrap);

  anchorDiv.appendChild(draggableWrap);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQzhCO0FBQ1c7O0FBRXpDLHNEQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2xvYWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdHVyblRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5ib2R5e1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2Y0ZmY4MTtcXG59XFxuXFxuLnRvdGFsLXdyYXB7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuZm9ybXtcXG5cXHRtYXJnaW4tdG9wOiAxMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWZsb3c6IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaW5wdXQtd3JhcHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZmxvdzogY29sdW1uO1xcbn1cXG4uYnRuLXdyYXB7XFxuXFx0bWFyZ2luLXRvcDogMC4zcmVtO1xcbn1cXG4uY2VsbHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNlbGwuc2hpcHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcblxcbi5ib2FyZHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiAwO1xcbn1cXG4jcGxheS1hcmVhLXdyYXB7XFxuXFx0cGFkZGluZy10b3A6IDV2aDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZmxvdzogY29sdW1uO1xcblxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5LWFyZWEtd3JhcCA+IC5zcGxpdHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG5cXHR3aWR0aDogODAlO1xcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcbi5jZWxsLmhpdHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuLmNlbGwuc2hpcC5oaXR7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NiwgMTksIDE5KTtcXG59XFxuXFxuI3ByZWdhbWVCb2FyZHtcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcblxcdHdpZHRoOiAyMGVtO1xcblxcdGhlaWdodDogMjBlbTtcXG59XFxuXFxuI2RyYWdnYWJsZS13cmFwe1xcblxcdHdpZHRoOiBmaXQtY29udGVudDtcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFxuXFx0bWFyZ2luLXRvcDogMjRweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XFxuXFx0cGFkZGluZzogMC41ZW07XFxufVxcbiNkcmFnZ2FibGUtd3JhcCA+IGRpdntcXG5cXHR3aWR0aDogN3JlbTtcXG5cXHRoZWlnaHQ6IDdyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4jZHJhZ2dhYmxlLXdyYXAgLnNoaXAtd3JhcHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcblxcdG1hcmdpbjogYXV0bztcXG59XFxuI2RyYWdnYWJsZS13cmFwIC5zaGlwLXdyYXAuaG9yaXpvbnRhbHtcXG5cXHRmbGV4LWZsb3c6IHJvdztcXG59XFxuI2RyYWdnYWJsZS13cmFwIC5zaGlwLXdyYXAudmVydGljYWx7XFxuXFx0ZmxleC1mbG93OiBjb2x1bW47XFxufVxcblxcbiNkcmFnZ2FibGUtd3JhcCAuc2hpcC13cmFwLmNhcnJpZXJ7XFxuXFx0d2lkdGg6IDgwJTtcXG59XFxuXFxuI2RyYWdnYWJsZS13cmFwIC5zaGlwLXdyYXAuYmF0dGxlc2hpcHtcXG5cXHR3aWR0aDogNjUlO1xcbn1cXG5cXG4jZHJhZ2dhYmxlLXdyYXAgLnNoaXAtd3JhcC5jcnVpc2Vye1xcblxcdHdpZHRoOiA0OCU7XFxufVxcbiNkcmFnZ2FibGUtd3JhcCAuc2hpcC13cmFwLnN1Ym1hcmluZXtcXG5cXHR3aWR0aDogMzMlO1xcbn1cXG5cXG4jZHJhZ2dhYmxlLXdyYXAgLmNlbGx7XFxuXFx0d2lkdGg6IDFyZW07XFxuXFx0aGVpZ2h0OiAxcmVtO1xcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG5cXG4uZHJhZ2dhYmxle1xcblxcdGN1cnNvcjogZ3JhYmJpbmc7XFxufVxcblxcbi5kcmFnZ2FibGUuZHJhZ2dpbmcgLmNlbGx7XFxuXFx0d2lkdGg6IDJyZW07XFxuXFx0aGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4jcHJlZ2FtZUJvYXJkIC5jZWxsLmhpZ2hsaWdodHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDkyLCA5Mik7XFxufVxcblxcbiNwcmVnYW1lQm9hcmQgLmNlbGwub2NjdXBpZWR7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjpsaWdodGJsdWU7XFxufVxcblxcbiNkcmFnZ2FibGUtd3JhcCAuZGVhY3RpdmF0ZWR7XFxuXFx0dmlzaWJpbGl0eTpoaWRkZW47XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhOztDQUViLGFBQWE7Q0FDYix1QkFBdUI7O0FBRXhCO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGFBQWE7Q0FDYixpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsdUJBQXVCO0NBQ3ZCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLDJCQUEyQjtBQUM1Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLE1BQU07QUFDUjtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixpQkFBaUI7O0NBRWpCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7O0NBRTlCLFVBQVU7Q0FDVixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLGtDQUFrQztBQUNuQzs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsNkJBQTZCOztDQUU3QixnQkFBZ0I7Q0FDaEIsMkJBQTJCO0NBQzNCLGNBQWM7QUFDZjtBQUNBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxZQUFZOztDQUVaLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCOztDQUV2QixZQUFZO0FBQ2I7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLG1CQUFtQjs7Q0FFbkIsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGlDQUFpQztBQUNsQzs7QUFFQTtDQUNDLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuYm9keXtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmNGZmODE7XFxufVxcblxcbi50b3RhbC13cmFwe1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxufVxcbmZvcm17XFxuXFx0bWFyZ2luLXRvcDogMTAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1mbG93OiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmlucHV0LXdyYXB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWZsb3c6IGNvbHVtbjtcXG59XFxuLmJ0bi13cmFwe1xcblxcdG1hcmdpbi10b3A6IDAuM3JlbTtcXG59XFxuLmNlbGx7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jZWxsLnNoaXB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG5cXG4uYm9hcmR7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdhcDogMDtcXG59XFxuI3BsYXktYXJlYS13cmFwe1xcblxcdHBhZGRpbmctdG9wOiA1dmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWZsb3c6IGNvbHVtbjtcXG5cXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcGxheS1hcmVhLXdyYXAgPiAuc3BsaXR7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcbn1cXG4uY2VsbC5oaXR7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxufVxcblxcbi5jZWxsLnNoaXAuaGl0e1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxNTYsIDE5LCAxOSk7XFxufVxcblxcbiNwcmVnYW1lQm9hcmR7XFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXG5cXHR3aWR0aDogMjBlbTtcXG5cXHRoZWlnaHQ6IDIwZW07XFxufVxcblxcbiNkcmFnZ2FibGUtd3JhcHtcXG5cXHR3aWR0aDogZml0LWNvbnRlbnQ7XFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcblxcdG1hcmdpbi10b3A6IDI0cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcblxcdHBhZGRpbmc6IDAuNWVtO1xcbn1cXG4jZHJhZ2dhYmxlLXdyYXAgPiBkaXZ7XFxuXFx0d2lkdGg6IDdyZW07XFxuXFx0aGVpZ2h0OiA3cmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuI2RyYWdnYWJsZS13cmFwIC5zaGlwLXdyYXB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXHRtYXJnaW46IGF1dG87XFxufVxcbiNkcmFnZ2FibGUtd3JhcCAuc2hpcC13cmFwLmhvcml6b250YWx7XFxuXFx0ZmxleC1mbG93OiByb3c7XFxufVxcbiNkcmFnZ2FibGUtd3JhcCAuc2hpcC13cmFwLnZlcnRpY2Fse1xcblxcdGZsZXgtZmxvdzogY29sdW1uO1xcbn1cXG5cXG4jZHJhZ2dhYmxlLXdyYXAgLnNoaXAtd3JhcC5jYXJyaWVye1xcblxcdHdpZHRoOiA4MCU7XFxufVxcblxcbiNkcmFnZ2FibGUtd3JhcCAuc2hpcC13cmFwLmJhdHRsZXNoaXB7XFxuXFx0d2lkdGg6IDY1JTtcXG59XFxuXFxuI2RyYWdnYWJsZS13cmFwIC5zaGlwLXdyYXAuY3J1aXNlcntcXG5cXHR3aWR0aDogNDglO1xcbn1cXG4jZHJhZ2dhYmxlLXdyYXAgLnNoaXAtd3JhcC5zdWJtYXJpbmV7XFxuXFx0d2lkdGg6IDMzJTtcXG59XFxuXFxuI2RyYWdnYWJsZS13cmFwIC5jZWxse1xcblxcdHdpZHRoOiAxcmVtO1xcblxcdGhlaWdodDogMXJlbTtcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuLmRyYWdnYWJsZXtcXG5cXHRjdXJzb3I6IGdyYWJiaW5nO1xcbn1cXG5cXG4uZHJhZ2dhYmxlLmRyYWdnaW5nIC5jZWxse1xcblxcdHdpZHRoOiAycmVtO1xcblxcdGhlaWdodDogMnJlbTtcXG59XFxuXFxuI3ByZWdhbWVCb2FyZCAuY2VsbC5oaWdobGlnaHR7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA5MiwgOTIpO1xcbn1cXG5cXG4jcHJlZ2FtZUJvYXJkIC5jZWxsLm9jY3VwaWVke1xcblxcdGJhY2tncm91bmQtY29sb3I6bGlnaHRibHVlO1xcbn1cXG5cXG4jZHJhZ2dhYmxlLXdyYXAgLmRlYWN0aXZhdGVke1xcblxcdHZpc2liaWxpdHk6aGlkZGVuO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBbXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICBdO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBib2FyZDtcbiAgfTtcblxuICBjb25zdCBnZXRDb29yZGluYXRlID0gKGNvb3JkKSA9PiB7XG4gICAgbGV0IHkgPSBjb29yZFsxXTtcbiAgICBsZXQgeCA9IGNvb3JkWzBdO1xuXG4gICAgcmV0dXJuIGJvYXJkW3ldW3hdO1xuICB9O1xuXG4gIGNvbnN0IGJsb3dDb29yZGluYXRlID0gKGNvb3JkKSA9PiB7XG4gICAgbGV0IHkgPSBjb29yZFsxXTtcbiAgICBsZXQgeCA9IGNvb3JkWzBdO1xuXG4gICAgYm9hcmRbeV1beF0gPSAtMTtcbiAgfTtcblxuICBjb25zdCBnZXRTaGlwQnlDb29yZGluYXRlID0gKGNvb3JkKSA9PiB7XG4gICAgbGV0IHNoaXBUb1JldHVybiA9IG51bGw7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcC5jb29yZGluYXRlcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50WzBdID09PSBjb29yZFswXSAmJiBlbGVtZW50WzFdID09PSBjb29yZFsxXSkge1xuICAgICAgICAgIHNoaXBUb1JldHVybiA9IHNoaXA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBzaGlwVG9SZXR1cm47XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBzO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChjb29yZCwgc2hpcCkgPT4ge1xuICAgIGNvbnN0IHggPSBjb29yZFsxXTtcbiAgICBjb25zdCB5ID0gY29vcmRbMF07XG5cbiAgICBjb25zdCBjaGVja0FycmF5ID0gW107IC8qYXJyYXkgbWVhbnQgY2hlY2sgaWYgYSBzaGlwIGlzIGFscmVhZHlQbGFjZWQgKi9cbiAgICBjb25zdCBjb29yZEFycmF5ID0gW107IC8qYXJyYXkgbWVhbnQgdG8gdHJhY2sgc2hpcCBjb29yZGluYXRlcyAqL1xuXG4gICAgaWYgKHNoaXAuZ2V0T3JpZW50YXRpb24oKSA9PT0gJ3knKSB7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcC5nZXRMZW4oKTsgaW5kZXgrKykge1xuICAgICAgICBjaGVja0FycmF5LnB1c2goYm9hcmRbeCAtIGluZGV4XVt5XSk7XG4gICAgICAgIGNvb3JkQXJyYXkucHVzaChbeCAtIGluZGV4LCB5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaGlwLmdldE9yaWVudGF0aW9uKCkgPT09ICd4Jykge1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNoaXAuZ2V0TGVuKCk7IGluZGV4KyspIHtcbiAgICAgICAgY2hlY2tBcnJheS5wdXNoKGJvYXJkW3hdW3kgKyBpbmRleF0pO1xuICAgICAgICBjb29yZEFycmF5LnB1c2goW3kgKyBpbmRleCwgeF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghY2hlY2tBcnJheS5pbmNsdWRlcygxKSkge1xuICAgICAgc2hpcHMucHVzaCh7IHNoaXBQb2ludGVyOiBzaGlwLCBjb29yZGluYXRlczogY29vcmRBcnJheSB9KTtcbiAgICAgIGlmIChzaGlwLmdldE9yaWVudGF0aW9uKCkgPT09ICd5Jykge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcC5nZXRMZW4oKTsgaW5kZXgrKykge1xuICAgICAgICAgIGJvYXJkW3ggLSBpbmRleF1beV0gPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc2hpcC5nZXRPcmllbnRhdGlvbigpID09PSAneCcpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNoaXAuZ2V0TGVuKCk7IGluZGV4KyspIHtcbiAgICAgICAgICBib2FyZFt4XVt5ICsgaW5kZXhdID0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVjaWV2ZUhpdCA9IChjb29yZCkgPT4ge1xuICAgIGlmIChnZXRDb29yZGluYXRlKGNvb3JkKSAhPT0gLTEpIHtcbiAgICAgIGlmIChnZXRDb29yZGluYXRlKGNvb3JkKSA9PT0gMSkge1xuICAgICAgICBjb25zdCBoaXRTaGlwID0gZ2V0U2hpcEJ5Q29vcmRpbmF0ZShjb29yZCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoaXRTaGlwLmNvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaGl0U2hpcC5jb29yZGluYXRlc1tpXVswXSA9PT0gY29vcmRbMF0gJiZcbiAgICAgICAgICAgIGhpdFNoaXAuY29vcmRpbmF0ZXNbaV1bMV0gPT09IGNvb3JkWzFdXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBoaXRTaGlwLnNoaXBQb2ludGVyLmhpdChpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJsb3dDb29yZGluYXRlKGNvb3JkKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB7XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBib2FyZC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGxldCBhcnIgPSBib2FyZFtpbmRleF07XG4gICAgICBzdHIgKz0gJ1xcbic7XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gYXJyW2luZGV4XTtcbiAgICAgICAgc3RyICs9IGAke3N0YXRlfSB8YDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICBsZXQgYWxsU3VuayA9IHRydWU7XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoIXNoaXAuc2hpcFBvaW50ZXIuZ2V0U3VuaygpKSB7XG4gICAgICAgIGFsbFN1bmsgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYWxsU3VuaztcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBnZXRCb2FyZCxcbiAgICBnZXRTaGlwcyxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjaWV2ZUhpdCxcbiAgICBhbGxTaGlwc1N1bmssXG4gICAgZ2V0Q29vcmRpbmF0ZSxcbiAgICBibG93Q29vcmRpbmF0ZSxcbiAgICB0b1N0cmluZyxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgeyBUdXJuVHJhY2tlciB9IGZyb20gJy4vdHVyblRyYWNrZXInO1xuXG5jb25zdCBhbmNob3JEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29uc3QgdHJhY2tlciA9IFR1cm5UcmFja2VyKCdIJyk7XG5sZXQgcmFuZG9tUG9zID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICByYW5kb21Qb3MucHVzaChbaSwgal0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUludChtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRNYWluQXNzZXN0cygpIHtcbiAgbG9hZFByZUdhbWUoKTtcbiAgbG9hZE5hbWVQcm9tcHQoKTtcbn1cblxuZnVuY3Rpb24gbG9hZE5hbWVQcm9tcHQoKSB7XG4gIGNvbnN0IHRvdGFsV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b3RhbFdyYXAuY2xhc3NMaXN0LmFkZCgndG90YWwtd3JhcCcpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ05hbWU6JztcbiAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWVfaW5wdXQnKTtcblxuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lX2lucHV0Jyk7XG4gIG5hbWVJbnB1dC5pZCA9ICduYW1lX2lucHV0JztcbiAgbmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncGF0dGVybicsICdeW2EtekEtWl17NCx9JCcpO1xuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4udGV4dENvbnRlbnQgPSAnTmV4dCc7XG5cbiAgY29uc3QgaW5wdXRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlucHV0V3JhcC5jbGFzc0xpc3QuYWRkKCdpbnB1dC13cmFwJyk7XG5cbiAgaW5wdXRXcmFwLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG4gIGlucHV0V3JhcC5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRXcmFwKTtcbiAgZm9ybS5vbnN1Ym1pdCA9IGBldmVudC5wcmV2ZW50RGVmYXVsdCgpO2A7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGlmIChuYW1lSW5wdXQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIGNvbnN0IHBsYXllckJvYXJkID0gcG9wdWxhdGVCb2FyZCgpO1xuICAgICAgY29uc3QgaHVtYW5QbGF5ZXIgPSBQbGF5ZXIobmFtZUlucHV0LnZhbHVlLCBwbGF5ZXJCb2FyZCk7XG4gICAgICBjb25zdCBjcHVQbGF5ZXIgPSBQbGF5ZXIoJ0NQVScsIHBsYXllckJvYXJkKTtcblxuICAgICAgY2xlYXJTY3JlZW4oKTtcbiAgICAgIGxvYWRQcmVHYW1lKG5hbWVJbnB1dC52YWx1ZSk7XG4gICAgICAvL2xvYWRQbGF5QXJlYShodW1hblBsYXllciwgY3B1UGxheWVyKTtcbiAgICAgIC8vc3RhcnRHYW1lKGh1bWFuUGxheWVyLCBjcHVQbGF5ZXIsIG5hbWVJbnB1dC52YWx1ZSk7XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG5cbiAgY29uc3QgYnRuV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidG5XcmFwLmNsYXNzTGlzdC5hZGQoJ2J0bi13cmFwJyk7XG5cbiAgYnRuV3JhcC5hcHBlbmRDaGlsZChidG4pO1xuICBmb3JtLmFwcGVuZENoaWxkKGJ0bldyYXApO1xuXG4gIHRvdGFsV3JhcC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgYW5jaG9yRGl2LmFwcGVuZENoaWxkKHRvdGFsV3JhcCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoaXBEb20oc2l6ZSkge1xuICBjb25zdCBzaGlwV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaGlwV3JhcC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIHRydWUpO1xuICBzaGlwV3JhcC5jbGFzc0xpc3QuYWRkKCdzaGlwLXdyYXAnKTtcbiAgc2hpcFdyYXAuY2xhc3NMaXN0LmFkZCgnZHJhZ2dhYmxlJyk7XG4gIHNoaXBXcmFwLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwnKTtcblxuICBjb25zdCByb290Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByb290Q2VsbC5pZCA9ICdyb290LWNlbGwnO1xuICByb290Q2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG5cbiAgc2hpcFdyYXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKCkgPT4ge1xuICAgIHNoaXBXcmFwLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG4gIH0pO1xuXG4gIHNoaXBXcmFwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiB7XG4gICAgc2hpcFdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgfSk7XG5cbiAgc2hpcFdyYXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbGV0IGlzSG9yaXpvbnRhbCA9IHNoaXBXcmFwLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpO1xuICAgIHN3aXRjaCAoaXNIb3Jpem9udGFsKSB7XG4gICAgICBjYXNlIHRydWU6XG4gICAgICAgIHNoaXBXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ2hvcml6b250YWwnKTtcbiAgICAgICAgc2hpcFdyYXAuY2xhc3NMaXN0LmFkZCgndmVydGljYWwnKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgc2hpcFdyYXAuY2xhc3NMaXN0LnJlbW92ZSgndmVydGljYWwnKTtcbiAgICAgICAgc2hpcFdyYXAuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xuXG4gIHNoaXBXcmFwLnNldEF0dHJpYnV0ZSgnbGVuZ3RoJywgc2l6ZSk7XG5cbiAgc3dpdGNoIChzaXplKSB7XG4gICAgY2FzZSA1OlxuICAgICAgc2hpcFdyYXAuY2xhc3NMaXN0LmFkZCgnY2FycmllcicpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDQ6XG4gICAgICBzaGlwV3JhcC5jbGFzc0xpc3QuYWRkKCdiYXR0bGVzaGlwJyk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgMzpcbiAgICAgIHNoaXBXcmFwLmNsYXNzTGlzdC5hZGQoJ2NydWlzZXInKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAyOlxuICAgICAgc2hpcFdyYXAuY2xhc3NMaXN0LmFkZCgnc3VibWFyaW5lJyk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZSAtIDE7IGkrKykge1xuICAgIGxldCBzaGlwQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXBDZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICBzaGlwV3JhcC5hcHBlbmRDaGlsZChzaGlwQ2VsbCk7XG4gIH1cblxuICBzaGlwV3JhcC5hcHBlbmRDaGlsZChyb290Q2VsbCk7XG5cbiAgcmV0dXJuIHNoaXBXcmFwO1xufVxuZnVuY3Rpb24gY2xlYXJIaWdobGlnaHREb20oY2VsbHMpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBpZiAoY2VsbHNbaV1bal0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWdobGlnaHQnKSkge1xuICAgICAgICBjZWxsc1tpXVtqXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFByZUdhbWUoKSB7XG4gIGNvbnN0IGludHJvSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGludHJvSGVhZGluZy5pZCA9ICdpbnRyby1oZWFkJztcbiAgaW50cm9IZWFkaW5nLnRleHRDb250ZW50ID0gJ0NIT09TRSBZT1VSIFNISVBTIEFETUlSQUwnO1xuXG4gIGFuY2hvckRpdi5hcHBlbmRDaGlsZChpbnRyb0hlYWRpbmcpO1xuXG4gIGNvbnN0IGJsYW5rQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgbGV0IGJvYXJkRG9tID0gYm9hcmRUb0RvbShibGFua0JvYXJkKTtcbiAgYm9hcmREb20uaWQgPSAncHJlZ2FtZUJvYXJkJztcblxuICBjb25zdCBkb21DZWxscyA9IGJvYXJkRG9tLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XG4gIGxldCBjZWxscyA9IFsuLi5BcnJheSgxMCldLm1hcCgoKSA9PiBBcnJheSgxMCkpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IGNlbGxzW2ldO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgcm93W2pdID0gZG9tQ2VsbHNbaSArIGogKiAxMF07XG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBjb25zdCBjZWxsID0gY2VsbHNbaV1bal07XG5cbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dpbmcnKTtcbiAgICAgICAgY29uc3QgbGVuID0gcGFyc2VJbnQoc2hpcC5nZXRBdHRyaWJ1dGUoJ2xlbmd0aCcpKTtcblxuICAgICAgICBpZiAoc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKSkge1xuICAgICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgbGVuOyB6KyspIHtcbiAgICAgICAgICAgIGlmIChsZW4gLSAxICsgaSA8IDEwKSB7XG4gICAgICAgICAgICAgIGNlbGxzW2kgKyB6XVtqXS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCd2ZXJ0aWNhbCcpKSB7XG4gICAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCBsZW47IHorKykge1xuICAgICAgICAgICAgaWYgKGogLSBsZW4gKyAxID49IDApIHtcbiAgICAgICAgICAgICAgY2VsbHNbaV1baiAtIHpdLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWdnaW5nJyk7XG4gICAgICAgIGNvbnN0IGxlbiA9IHBhcnNlSW50KHNoaXAuZ2V0QXR0cmlidXRlKCdsZW5ndGgnKSk7XG5cbiAgICAgICAgaWYgKHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJykpIHtcbiAgICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IGxlbjsgeisrKSB7XG4gICAgICAgICAgICBpZiAoaSArIHogPCAxMCkge1xuICAgICAgICAgICAgICBjZWxsc1tpICsgel1bal0uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucygndmVydGljYWwnKSkge1xuICAgICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgbGVuOyB6KyspIHtcbiAgICAgICAgICAgIGlmIChqIC0geiA+PSAwKSB7XG4gICAgICAgICAgICAgIGNlbGxzW2ldW2ogLSB6XS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBzaGlwUGxhY2VkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGRvbVNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dpbmcnKTtcbiAgICAgICAgY29uc3QgbGVuID0gcGFyc2VJbnQoZG9tU2hpcC5nZXRBdHRyaWJ1dGUoJ2xlbmd0aCcpKTtcblxuICAgICAgICBpZiAoZG9tU2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKSkge1xuICAgICAgICAgIGlmIChpICsgbGVuIC0gMSA8IDEwKSB7XG4gICAgICAgICAgICBsZXQgb3JpZW50YXRpb24gPSAneCc7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gU2hpcChsZW4sIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgIGlmIChibGFua0JvYXJkLnBsYWNlU2hpcChbaSwgal0sIHNoaXApID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIGFsZXJ0KCdDQU5OT1QgUExBQ0UgU0hJUCBPTiBUT1AgT0YgU0hJUCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2hpcFBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvbVNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCd2ZXJ0aWNhbCcpKSB7XG4gICAgICAgICAgaWYgKGogLSBsZW4gKyAxIDwgMTApIHtcbiAgICAgICAgICAgIGxldCBvcmllbnRhdGlvbiA9ICd5JztcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKGxlbiwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgaWYgKGJsYW5rQm9hcmQucGxhY2VTaGlwKFtpLCBqXSwgc2hpcCkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgYWxlcnQoJ0NBTk5PVCBQTEFDRSBTSElQIE9OIFRPUCBPRiBTSElQJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzaGlwUGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNoaXBQbGFjZWQpIHtcbiAgICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IGxlbjsgeisrKSB7XG4gICAgICAgICAgICBpZiAoZG9tU2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKSkge1xuICAgICAgICAgICAgICBjZWxsc1tpICsgel1bal0uY2xhc3NMaXN0LmFkZCgnb2NjdXBpZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkb21TaGlwLmNsYXNzTGlzdC5jb250YWlucygndmVydGljYWwnKSkge1xuICAgICAgICAgICAgICBjZWxsc1tpXVtqIC0gel0uY2xhc3NMaXN0LmFkZCgnb2NjdXBpZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZG9tU2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2FibGUnKTtcbiAgICAgICAgICBkb21TaGlwLmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJIaWdobGlnaHREb20oY2VsbHMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYW5jaG9yRGl2LmFwcGVuZENoaWxkKGJvYXJkRG9tKTtcblxuICBjb25zdCBkcmFnZ2FibGVXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRyYWdnYWJsZVdyYXAuaWQgPSAnZHJhZ2dhYmxlLXdyYXAnO1xuXG4gIGNvbnN0IGNhcnJpZXJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcnJpZXJXcmFwLmFwcGVuZENoaWxkKGNyZWF0ZVNoaXBEb20oNSkpO1xuICBkcmFnZ2FibGVXcmFwLmFwcGVuZENoaWxkKGNhcnJpZXJXcmFwKTtcblxuICBjb25zdCBiYXR0bGVXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJhdHRsZVdyYXAuYXBwZW5kQ2hpbGQoY3JlYXRlU2hpcERvbSg0KSk7XG4gIGRyYWdnYWJsZVdyYXAuYXBwZW5kQ2hpbGQoYmF0dGxlV3JhcCk7XG5cbiAgY29uc3QgY3J1aXNlcldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3J1aXNlcldyYXAuYXBwZW5kQ2hpbGQoY3JlYXRlU2hpcERvbSg0KSk7XG4gIGRyYWdnYWJsZVdyYXAuYXBwZW5kQ2hpbGQoY3J1aXNlcldyYXApO1xuXG4gIGNvbnN0IHN1Ym1hcmluZVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3VibWFyaW5lV3JhcC5hcHBlbmRDaGlsZChjcmVhdGVTaGlwRG9tKDMpKTtcbiAgZHJhZ2dhYmxlV3JhcC5hcHBlbmRDaGlsZChzdWJtYXJpbmVXcmFwKTtcblxuICBjb25zdCBkZXN0cm95ZXJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc3Ryb3llcldyYXAuYXBwZW5kQ2hpbGQoY3JlYXRlU2hpcERvbSgyKSk7XG4gIGRyYWdnYWJsZVdyYXAuYXBwZW5kQ2hpbGQoZGVzdHJveWVyV3JhcCk7XG5cbiAgYW5jaG9yRGl2LmFwcGVuZENoaWxkKGRyYWdnYWJsZVdyYXApO1xufVxuXG5mdW5jdGlvbiBjbGVhclNjcmVlbigpIHtcbiAgYW5jaG9yRGl2LmlubmVySFRNTCA9ICcnO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUJvYXJkKCkge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBjYXJyaWVyID0gU2hpcCg1LCAneCcpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcCg0LCAneCcpO1xuICBjb25zdCBjcnVpc2VyID0gU2hpcCgzLCAneCcpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBTaGlwKDMsICd4Jyk7XG4gIGNvbnN0IGRlc3Ryb3llciA9IFNoaXAoMiwgJ3gnKTtcblxuICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoWzAsIDJdLCBjYXJyaWVyKTtcblxuICBiYXR0bGVzaGlwLm5pbnRleURlZ3JlZXMoKTtcbiAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFs4LCAyXSwgYmF0dGxlc2hpcCk7XG5cbiAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFsxLCA0XSwgY3J1aXNlcik7XG5cbiAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFsxLCA2XSwgc3VibWFyaW5lKTtcbiAgZGVzdHJveWVyLm5pbnRleURlZ3JlZXMoKTtcblxuICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoWzYsIDVdLCBkZXN0cm95ZXIpO1xuXG4gIHJldHVybiBwbGF5ZXJCb2FyZDtcbn1cblxuZnVuY3Rpb24gYm9hcmRUb0RvbShib2FyZCwgZHJhd1NoaXAgPSBmYWxzZSkge1xuICBjb25zdCBib2FyZFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYm9hcmRXcmFwLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgY29uc3QgY2VsbFZhbCA9IGJvYXJkLmdldENvb3JkaW5hdGUoW2osIGldKTtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuXG4gICAgICBpZiAoKGNlbGxWYWwgPT09IDEpICYgZHJhd1NoaXApIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICB9XG5cbiAgICAgIGJvYXJkV3JhcC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm9hcmRXcmFwO1xufVxuXG5mdW5jdGlvbiBsb2FkUGxheUFyZWEoaHVtYW5QbGF5ZXIsIGNwdVBsYXllcikge1xuICBjb25zdCBwbGF5QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwbGF5QXJlYS5pZCA9ICdwbGF5LWFyZWEtd3JhcCc7XG5cbiAgY29uc3QgdHVybkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0dXJuSGVhZGluZy5pbm5lckhUTUwgPSAnPHNwYW4gaWQgPSBcInR1cm4taW5kaWNhdG9yXCI+PC9zcGFuPnMgVHVybi4nO1xuXG4gIHBsYXlBcmVhLmFwcGVuZENoaWxkKHR1cm5IZWFkaW5nKTtcblxuICBjb25zdCBwbGF5ZXJTcGxpdFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGxheWVyU3BsaXRXcmFwLmNsYXNzTGlzdC5hZGQoJ3NwbGl0Jyk7XG5cbiAgcGxheUFyZWEuYXBwZW5kQ2hpbGQocGxheWVyU3BsaXRXcmFwKTtcblxuICBjb25zdCBwbGF5ZXJDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGxheWVyQ29sdW1uLmlkID0gJ2h1bWFuLWNvbHVtbic7XG5cbiAgY29uc3QgY3B1Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNwdUNvbHVtbi5pZCA9ICdjcHUtY29sdW1uJztcblxuICBhbmNob3JEaXYuYXBwZW5kQ2hpbGQocGxheUFyZWEpO1xuXG4gIGNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBwbGF5ZXJOYW1lLnRleHRDb250ZW50ID0gaHVtYW5QbGF5ZXIuZ2V0TmFtZSgpO1xuXG4gIHBsYXllckNvbHVtbi5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lKTtcbiAgcGxheWVyQ29sdW1uLmFwcGVuZENoaWxkKGJvYXJkVG9Eb20oaHVtYW5QbGF5ZXIuZ2V0Qm9hcmQoKSwgdHJ1ZSkpO1xuXG4gIGNvbnN0IGNwdU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBjcHVOYW1lLnRleHRDb250ZW50ID0gY3B1UGxheWVyLmdldE5hbWUoKTtcblxuICBjcHVDb2x1bW4uYXBwZW5kQ2hpbGQoY3B1TmFtZSk7XG4gIGNwdUNvbHVtbi5hcHBlbmRDaGlsZChib2FyZFRvRG9tKGNwdVBsYXllci5nZXRCb2FyZCgpKSk7XG5cbiAgcGxheWVyU3BsaXRXcmFwLmFwcGVuZENoaWxkKHBsYXllckNvbHVtbik7XG4gIHBsYXllclNwbGl0V3JhcC5hcHBlbmRDaGlsZChjcHVDb2x1bW4pO1xufVxuXG5mdW5jdGlvbiBhZGRMaXN0ZW5lclRvQ2VsbHMoXG4gIGh1bWFuQm9hcmREb20sXG4gIGNwdUJvYXJkRG9tLFxuICBjcHVQbGF5ZXIsXG4gIGh1bWFuUGxheWVyXG4pIHtcbiAgY29uc3QgaHVtYW5DZWxscyA9IGh1bWFuQm9hcmREb21bMF0uY2hpbGRyZW47XG4gIGNvbnN0IGNwdUNlbGxzID0gY3B1Qm9hcmREb21bMF0uY2hpbGRyZW47XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBjcHVDZWxsc1tpICogMTAgKyBqXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAge1xuICAgICAgICAgIGlmIChjcHVQbGF5ZXIuZ2V0Qm9hcmQoKS5nZXRDb29yZGluYXRlKFtqLCBpXSkgPT09IDEpIHtcbiAgICAgICAgICAgIGNwdUNlbGxzW2kgKiAxMCArIGpdLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaHVtYW5QbGF5ZXIuZ2V0Qm9hcmQoKS5nZXRDb29yZGluYXRlKFtqLCBpXSkgIT09IC0xKSB7XG4gICAgICAgICAgICBodW1hblBsYXllci5hdHRhY2tCb2FyZChbaiwgaV0sIGNwdVBsYXllci5nZXRCb2FyZCgpKTtcbiAgICAgICAgICAgIGNwdUNlbGxzW2kgKiAxMCArIGpdLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgdXBkYXRlSW5kaWNhdG9yKCdDUFUnKTtcblxuICAgICAgICAgICAgY29uc3QgYXR0YWNrSW5kZXggPSBnZXRSYW5kb21JbnQocmFuZG9tUG9zLmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCBhdHRhY2tQb3MgPSByYW5kb21Qb3Muc3BsaWNlKGF0dGFja0luZGV4LCAxKVswXTtcbiAgICAgICAgICAgIGxldCB5ID0gYXR0YWNrUG9zWzFdO1xuICAgICAgICAgICAgbGV0IHggPSBhdHRhY2tQb3NbMF07XG5cbiAgICAgICAgICAgIGlmIChodW1hblBsYXllci5nZXRCb2FyZCgpLmdldENvb3JkaW5hdGUoW3ksIHhdKSA9PT0gMSkge1xuICAgICAgICAgICAgICBodW1hbkNlbGxzW2F0dGFja1Bvc1swXSAqIDEwICsgYXR0YWNrUG9zWzFdXS5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgICAgICdzaGlwJ1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaHVtYW5DZWxsc1thdHRhY2tQb3NbMF0gKiAxMCArIGF0dGFja1Bvc1sxXV0uY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG5cbiAgICAgICAgICAgIHVwZGF0ZUluZGljYXRvcihodW1hblBsYXllci5nZXROYW1lKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUluZGljYXRvcihuYW1lID0gJ1BsYXllciAxJykge1xuICBjb25zdCB0dXJuSW5kaWNhdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1cm4taW5kaWNhdG9yJyk7XG4gIGlmICh0cmFja2VyLmdldFR1cm4oKSA9PT0gJ0gnKSB7XG4gICAgdHVybkluZGljYXRvci50ZXh0Q29udGVudCA9IG5hbWU7XG4gIH1cbiAgaWYgKHRyYWNrZXIuZ2V0VHVybigpID09PSAnQycpIHtcbiAgICB0dXJuSW5kaWNhdG9yLnRleHRDb250ZW50ID0gJ0NQVSc7XG4gIH1cbiAgdHJhY2tlci5uZXh0VHVybigpO1xufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUoaHVtYW5QbGF5ZXIsIGNwdVBsYXllcikge1xuICBpZiAoXG4gICAgaHVtYW5QbGF5ZXIuZ2V0Qm9hcmQoKS5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSAmJlxuICAgIGNwdVBsYXllci5nZXRCb2FyZCgpLmdldFNoaXBzKCkubGVuZ3RoID09PSA1XG4gICkge1xuICAgIGNvbnN0IGh1bWFuRG9tQm9hcmQgPSBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKCdodW1hbi1jb2x1bW4nKVxuICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JvYXJkJyk7XG5cbiAgICBjb25zdCBjcHVEb21Cb2FyZCA9IGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoJ2NwdS1jb2x1bW4nKVxuICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JvYXJkJyk7XG5cbiAgICBhZGRMaXN0ZW5lclRvQ2VsbHMoaHVtYW5Eb21Cb2FyZCwgY3B1RG9tQm9hcmQsIGNwdVBsYXllciwgaHVtYW5QbGF5ZXIpO1xuXG4gICAgdXBkYXRlSW5kaWNhdG9yKGh1bWFuUGxheWVyLmdldE5hbWUoKSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgbG9hZE1haW5Bc3Nlc3RzIH07XG4iLCJjb25zdCBQbGF5ZXIgPSAoc3RyLCBvYmpCb2FyZCkgPT4ge1xuICBjb25zdCBuYW1lID0gc3RyO1xuICBjb25zdCBib2FyZCA9IG9iakJvYXJkO1xuXG4gIGNvbnN0IGF0dGFja0JvYXJkID0gKGNvb3JkLCBib2FyZFRvQXR0YWNrKSA9PiB7XG4gICAgaWYgKGJvYXJkVG9BdHRhY2suZ2V0Q29vcmRpbmF0ZShjb29yZCkgIT09IC0xKSB7XG4gICAgICBib2FyZFRvQXR0YWNrLnJlY2lldmVIaXQoY29vcmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBib2FyZDtcbiAgfTtcblxuICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgIHJldHVybiBuYW1lO1xuICB9O1xuXG4gIHJldHVybiB7IGF0dGFja0JvYXJkLCBnZXROYW1lLCBnZXRCb2FyZCB9O1xufTtcbmV4cG9ydCB7IFBsYXllciB9O1xuIiwiY29uc3QgU2hpcCA9IChsZW5ndGgsIG8pID0+IHtcbiAgbGV0IHNoaXBBcnJheSA9IFtdO1xuICBsZXQgb3JpZW50YXRpb24gPSBvO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICBzaGlwQXJyYXkucHVzaCgxKTtcbiAgfVxuXG4gIGNvbnN0IGdldFNoaXAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBBcnJheTtcbiAgfTtcblxuICBjb25zdCBnZXRMZW4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBBcnJheS5sZW5ndGg7XG4gIH07XG5cbiAgY29uc3QgZ2V0U3VuayA9ICgpID0+IHtcbiAgICByZXR1cm4gIXNoaXBBcnJheS5pbmNsdWRlcygxKTtcbiAgfTtcblxuICBjb25zdCBnZXRPcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gb3JpZW50YXRpb247XG4gIH07XG5cbiAgY29uc3QgbmludGV5RGVncmVlcyA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKG9yaWVudGF0aW9uKSB7XG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgb3JpZW50YXRpb24gPSAneSc7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICd5JzpcbiAgICAgICAgb3JpZW50YXRpb24gPSAneCc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoaXQgPSAobikgPT4ge1xuICAgIGlmIChuID4gbGVuZ3RoIHx8IG4gPCAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hpcEFycmF5W25dID0gMDtcbiAgICB9XG4gIH07XG4gIHJldHVybiB7IGdldFNoaXAsIGdldFN1bmssIGhpdCwgZ2V0T3JpZW50YXRpb24sIGdldExlbiwgbmludGV5RGVncmVlcyB9O1xufTtcblxuZXhwb3J0IHsgU2hpcCB9O1xuIiwiY29uc3QgVHVyblRyYWNrZXIgPSAodHVybikgPT4ge1xuICBsZXQgY3VyclR1cm4gPSB0dXJuO1xuXG4gIGNvbnN0IGdldFR1cm4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGN1cnJUdXJuO1xuICB9O1xuXG4gIGNvbnN0IG5leHRUdXJuID0gKCkgPT4ge1xuICAgIHN3aXRjaCAoY3VyclR1cm4pIHtcbiAgICAgIGNhc2UgJ0gnOlxuICAgICAgICBjdXJyVHVybiA9ICdDJztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ0MnOlxuICAgICAgICBjdXJyVHVybiA9ICdIJztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBnZXRUdXJuLCBuZXh0VHVybiB9O1xufTtcblxuZXhwb3J0IHsgVHVyblRyYWNrZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IGNzcyBmcm9tICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBsb2FkTWFpbkFzc2VzdHMgfSBmcm9tICcuL2xvYWQnO1xuXG5sb2FkTWFpbkFzc2VzdHMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==