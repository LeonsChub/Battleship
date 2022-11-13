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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody{\n\tbox-sizing: border-box;\n\tbackground-color: #f4ff81;\n}\n:root{\n\tfont-family: 'Oswald', sans-serif;\n}\n\n.total-wrap{\n\twidth: 100vw;\n\theight: 100vh;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\n}\nform{\n\tmargin-top: 10%;\n\tdisplay: flex;\n\tflex-flow: column;\n\talign-items: center;\n}\n.input-wrap{\n\tdisplay: flex;\n\tflex-flow: column;\n}\n.btn-wrap{\n\tmargin-block: 1rem;\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.cell{\n\tbackground-color: white;\n\tborder: 1px solid black;\n}\n\n.cell.ship{\n\tbackground-color: lightblue;\n}\n\n.board{\n  border: 1px solid black;\n  width: 350px;\n  height: 350px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 0;\n}\n#play-area-wrap{\n\tpadding-top: 5vh;\n\tdisplay: flex;\n\tflex-flow: column;\n\n\talign-items: center;\n}\n\n#play-area-wrap > .split{\n\tdisplay: flex;\n\tjustify-content: space-between;\n\n\twidth: 80%;\n\tmargin-inline: auto;\n}\n.cell.hit{\n\tbackground-color: darkgray;\n}\n\n.cell.ship.hit{\n\tbackground-color: rgb(156, 19, 19);\n}\n#intro-head{\n\twidth: fit-content;\n\tmargin-inline: auto;\n\tfont-size: 2em;\n\tmargin-block: 1em;\n}\n\n#pregameBoard{\n\tmargin-inline: auto;\n\twidth: 20em;\n\theight: 20em;\n}\n\n#draggable-wrap{\n\twidth: fit-content;\n\tmargin-inline: auto;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\n\tmargin-top: 24px;\n\tbackground-color: cadetblue;\n\tpadding: 0.5em;\n}\n#draggable-wrap > div{\n\twidth: 7rem;\n\theight: 7rem;\n\tbackground-color: rgb(255, 255, 255);\n}\n\n#draggable-wrap .ship-wrap{\n\theight: 100%;\n\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\tmargin: auto;\n}\n#draggable-wrap .ship-wrap.horizontal{\n\tflex-flow: row;\n}\n#draggable-wrap .ship-wrap.vertical{\n\tflex-flow: column;\n}\n\n#draggable-wrap .ship-wrap.carrier{\n\twidth: 80%;\n}\n\n#draggable-wrap .ship-wrap.battleship{\n\twidth: 65%;\n}\n\n#draggable-wrap .ship-wrap.cruiser{\n\twidth: 48%;\n}\n#draggable-wrap .ship-wrap.submarine{\n\twidth: 33%;\n}\n\n#draggable-wrap .cell{\n\twidth: 1rem;\n\theight: 1rem;\n\tmargin-inline: auto;\n\n\tbackground-color: lightblue;\n}\n\n.draggable{\n\tcursor: grabbing;\n}\n\n.draggable.dragging .cell{\n\twidth: 2rem;\n\theight: 2rem;\n}\n\n#pregameBoard .cell.highlight{\n\tbackground-color: rgb(92, 92, 92);\n}\n\n#pregameBoard .cell.occupied{\n\tbackground-color:lightblue;\n}\n\n#draggable-wrap .deactivated{\n\tvisibility:hidden;\n}\n\n#continueBtn{\n\tfont-family: 'Oswald', sans-serif;\n\twidth: 5em;\n\twidth: fit-content;\n\tmargin-inline: auto;\n\tfont-size: 1.5em;\n\n\tcolor: white;\n\tbackground-color: navy;\n\tborder: 4px solid lightblue;\n\tborder-radius: 10px;\n}\n\n#continueBtn:hover{\n\tborder: 4px solid navy;\n\tbackground-color: lightblue;\n\tcolor: black;\n\tpadding: 0.2em;\n\n\t-webkit-transition: 1s color;\n\t-webkit-transition: 1s border;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;CACC,sBAAsB;CACtB,yBAAyB;AAC1B;AACA;CACC,iCAAiC;AAClC;;AAEA;CACC,YAAY;CACZ,aAAa;;CAEb,aAAa;CACb,uBAAuB;;AAExB;AACA;CACC,eAAe;CACf,aAAa;CACb,iBAAiB;CACjB,mBAAmB;AACpB;AACA;CACC,aAAa;CACb,iBAAiB;AAClB;AACA;CACC,kBAAkB;CAClB,aAAa;CACb,uBAAuB;AACxB;AACA;CACC,uBAAuB;CACvB,uBAAuB;AACxB;;AAEA;CACC,2BAA2B;AAC5B;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,MAAM;AACR;AACA;CACC,gBAAgB;CAChB,aAAa;CACb,iBAAiB;;CAEjB,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,8BAA8B;;CAE9B,UAAU;CACV,mBAAmB;AACpB;AACA;CACC,0BAA0B;AAC3B;;AAEA;CACC,kCAAkC;AACnC;AACA;CACC,kBAAkB;CAClB,mBAAmB;CACnB,cAAc;CACd,iBAAiB;AAClB;;AAEA;CACC,mBAAmB;CACnB,WAAW;CACX,YAAY;AACb;;AAEA;CACC,kBAAkB;CAClB,mBAAmB;CACnB,aAAa;CACb,6BAA6B;;CAE7B,gBAAgB;CAChB,2BAA2B;CAC3B,cAAc;AACf;AACA;CACC,WAAW;CACX,YAAY;CACZ,oCAAoC;AACrC;;AAEA;CACC,YAAY;;CAEZ,aAAa;CACb,mBAAmB;CACnB,uBAAuB;;CAEvB,YAAY;AACb;AACA;CACC,cAAc;AACf;AACA;CACC,iBAAiB;AAClB;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,UAAU;AACX;AACA;CACC,UAAU;AACX;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,mBAAmB;;CAEnB,2BAA2B;AAC5B;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,WAAW;CACX,YAAY;AACb;;AAEA;CACC,iCAAiC;AAClC;;AAEA;CACC,0BAA0B;AAC3B;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,iCAAiC;CACjC,UAAU;CACV,kBAAkB;CAClB,mBAAmB;CACnB,gBAAgB;;CAEhB,YAAY;CACZ,sBAAsB;CACtB,2BAA2B;CAC3B,mBAAmB;AACpB;;AAEA;CACC,sBAAsB;CACtB,2BAA2B;CAC3B,YAAY;CACZ,cAAc;;CAEd,4BAA4B;CAC5B,6BAA6B;AAC9B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap');\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody{\n\tbox-sizing: border-box;\n\tbackground-color: #f4ff81;\n}\n:root{\n\tfont-family: 'Oswald', sans-serif;\n}\n\n.total-wrap{\n\twidth: 100vw;\n\theight: 100vh;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\n}\nform{\n\tmargin-top: 10%;\n\tdisplay: flex;\n\tflex-flow: column;\n\talign-items: center;\n}\n.input-wrap{\n\tdisplay: flex;\n\tflex-flow: column;\n}\n.btn-wrap{\n\tmargin-block: 1rem;\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.cell{\n\tbackground-color: white;\n\tborder: 1px solid black;\n}\n\n.cell.ship{\n\tbackground-color: lightblue;\n}\n\n.board{\n  border: 1px solid black;\n  width: 350px;\n  height: 350px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 0;\n}\n#play-area-wrap{\n\tpadding-top: 5vh;\n\tdisplay: flex;\n\tflex-flow: column;\n\n\talign-items: center;\n}\n\n#play-area-wrap > .split{\n\tdisplay: flex;\n\tjustify-content: space-between;\n\n\twidth: 80%;\n\tmargin-inline: auto;\n}\n.cell.hit{\n\tbackground-color: darkgray;\n}\n\n.cell.ship.hit{\n\tbackground-color: rgb(156, 19, 19);\n}\n#intro-head{\n\twidth: fit-content;\n\tmargin-inline: auto;\n\tfont-size: 2em;\n\tmargin-block: 1em;\n}\n\n#pregameBoard{\n\tmargin-inline: auto;\n\twidth: 20em;\n\theight: 20em;\n}\n\n#draggable-wrap{\n\twidth: fit-content;\n\tmargin-inline: auto;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\n\tmargin-top: 24px;\n\tbackground-color: cadetblue;\n\tpadding: 0.5em;\n}\n#draggable-wrap > div{\n\twidth: 7rem;\n\theight: 7rem;\n\tbackground-color: rgb(255, 255, 255);\n}\n\n#draggable-wrap .ship-wrap{\n\theight: 100%;\n\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\tmargin: auto;\n}\n#draggable-wrap .ship-wrap.horizontal{\n\tflex-flow: row;\n}\n#draggable-wrap .ship-wrap.vertical{\n\tflex-flow: column;\n}\n\n#draggable-wrap .ship-wrap.carrier{\n\twidth: 80%;\n}\n\n#draggable-wrap .ship-wrap.battleship{\n\twidth: 65%;\n}\n\n#draggable-wrap .ship-wrap.cruiser{\n\twidth: 48%;\n}\n#draggable-wrap .ship-wrap.submarine{\n\twidth: 33%;\n}\n\n#draggable-wrap .cell{\n\twidth: 1rem;\n\theight: 1rem;\n\tmargin-inline: auto;\n\n\tbackground-color: lightblue;\n}\n\n.draggable{\n\tcursor: grabbing;\n}\n\n.draggable.dragging .cell{\n\twidth: 2rem;\n\theight: 2rem;\n}\n\n#pregameBoard .cell.highlight{\n\tbackground-color: rgb(92, 92, 92);\n}\n\n#pregameBoard .cell.occupied{\n\tbackground-color:lightblue;\n}\n\n#draggable-wrap .deactivated{\n\tvisibility:hidden;\n}\n\n#continueBtn{\n\tfont-family: 'Oswald', sans-serif;\n\twidth: 5em;\n\twidth: fit-content;\n\tmargin-inline: auto;\n\tfont-size: 1.5em;\n\n\tcolor: white;\n\tbackground-color: navy;\n\tborder: 4px solid lightblue;\n\tborder-radius: 10px;\n}\n\n#continueBtn:hover{\n\tborder: 4px solid navy;\n\tbackground-color: lightblue;\n\tcolor: black;\n\tpadding: 0.2em;\n\n\t-webkit-transition: 1s color;\n\t-webkit-transition: 1s border;\n}"],"sourceRoot":""}]);
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
    let y = coord[0];
    let x = coord[1];

    return board[y][x];
  };

  const blowCoordinate = (coord) => {
    let y = coord[0];
    let x = coord[1];

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

    let validChoice = false;

    if (ship.getOrientation() === 'y') {
      if (y - ship.getLen() + 1 >= 0) {
        validChoice = true;
        for (let index = 0; index < ship.getLen(); index++) {
          checkArray.push(board[y - index][x]);
          coordArray.push([y - index, x]);
        }
      }
    }
    if (ship.getOrientation() === 'x') {
      if (x + ship.getLen() - 1 <= 9) {
        validChoice = true;
        for (let index = 0; index < ship.getLen(); index++) {
          checkArray.push(board[y][x + index]);
          coordArray.push([y, x + index]);
        }
      }
    }

    if (!checkArray.includes(1) & validChoice) {
      ships.push({ shipPointer: ship, coordinates: coordArray });
      if (ship.getOrientation() === 'y') {
        for (let index = 0; index < ship.getLen(); index++) {
          board[y - index][x] = 1;
        }
      }
      if (ship.getOrientation() === 'x') {
        for (let index = 0; index < ship.getLen(); index++) {
          board[y][x + index] = 1;
        }
      }
    } else {
      return false;
    }
    return true;
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
function randomOrientation() {
  const o = getRandomInt(2);
  console.log(o);
  switch (o) {
    case 0:
      return 'x';

    default:
      return 'y';
  }
}

function loadMainAssests() {
  loadNamePrompt();
}

function loadNamePrompt() {
  generateRandomBoard();
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
  nameInput.setAttribute('pattern', '^[A-z]{3,}$');

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
      //const playerBoard = populateBoard();
      //const humanPlayer = Player(nameInput.value, playerBoard);
      //const cpuPlayer = Player('CPU', playerBoard);

      //console.log(humanPlayer.getBoard().toString());
      //console.log(cpuPlayer.getBoard().toString());

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

function loadPreGame(name) {
  const introHeading = document.createElement('h1');
  introHeading.id = 'intro-head';
  introHeading.textContent = `Place your ships admiral ${name}`;

  anchorDiv.appendChild(introHeading);

  const blankBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();
  let boardDom = boardToDom(blankBoard);
  boardDom.id = 'pregameBoard';

  const domCells = boardDom.querySelectorAll('.cell');
  let cells = [...Array(10)].map(() => Array(10));

  for (let i = 0; i < 10; i++) {
    const row = cells[i];
    for (let j = 0; j < 10; j++) {
      row[j] = domCells[i * 10 + j];
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
            if (len - 1 + j < 10) {
              cells[i][j + z].classList.add('highlight');
            }
          }
        }
        if (ship.classList.contains('vertical')) {
          for (let z = 0; z < len; z++) {
            if (i - len + 1 >= 0) {
              cells[i - z][j].classList.add('highlight');
            }
          }
        }
      });

      cell.addEventListener('dragleave', () => {
        const ship = document.querySelector('.dragging');
        const len = parseInt(ship.getAttribute('length'));

        if (ship.classList.contains('horizontal')) {
          for (let z = 0; z < len; z++) {
            if (j + z < 10) {
              cells[i][j + z].classList.remove('highlight');
            }
          }
        }
        if (ship.classList.contains('vertical')) {
          for (let z = 0; z < len; z++) {
            if (i - z >= 0) {
              cells[i - z][j].classList.remove('highlight');
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
          if (j + len - 1 < 10) {
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
          if (i - len + 1 < 10) {
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
              cells[i][j + z].classList.add('occupied');
            }
            if (domShip.classList.contains('vertical')) {
              cells[i - z][j].classList.add('occupied');
            }
          }
          domShip.classList.remove('draggable');
          domShip.classList.add('deactivated');
        }
        domShip.classList.remove('dragging');
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

  const btnWrap = document.createElement('div');
  btnWrap.classList.add('btn-wrap');
  const continueButton = document.createElement('button');
  continueButton.textContent = 'Continue';
  continueButton.id = 'continueBtn';

  continueButton.addEventListener('click', () => {
    let ships = document
      .getElementById('draggable-wrap')
      .querySelectorAll('.deactivated');

    if (ships.length === 5) {
      console.log('Game starting');
      generateRandomBoard();
      const humanPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)(name, blankBoard);
      const cpuPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)('CPU', blankBoard);

      clearScreen();
      loadPlayArea(humanPlayer, cpuPlayer);
      startGame(humanPlayer, cpuPlayer);
    } else {
      alert('Please place all your ships on the board');
    }
  });

  btnWrap.appendChild(continueButton);
  anchorDiv.appendChild(btnWrap);
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

  playerBoard.placeShip([5, 0], carrier);
  playerBoard.placeShip([4, 0], battleship);
  playerBoard.placeShip([3, 0], cruiser);
  playerBoard.placeShip([2, 0], submarine);
  playerBoard.placeShip([1, 0], destroyer);

  return playerBoard;
}

function generateRandomBoard() {
  const boardToReturn = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();

  let o = randomOrientation();
  const carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(5, o);

  o = randomOrientation();
  const battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(4, o);

  o = randomOrientation();
  const cruiser = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(3, o);

  o = randomOrientation();
  const submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(3, o);

  o = randomOrientation();
  const destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(2, o);

  const ships = [carrier, battleship, cruiser, submarine, destroyer];

  let x = getRandomInt(10);
  let y = getRandomInt(10);

  ships.forEach((ship) => {
    while (!boardToReturn.placeShip([y, x], ship)) {
      x = getRandomInt(10);
      y = getRandomInt(10);
    }
  });

  //while (!boardToReturn.placeShip([y, x], carrier)) {
  //x = getRandomInt(10);
  //y = getRandomInt(10);
  //}
  //while (!boardToReturn.placeShip([y, x], battleship)) {
  //  x = getRandomInt(10);
  //  y = getRandomInt(10);
  //}
  //while (!boardToReturn.placeShip([y, x], cruiser)) {
  //  x = getRandomInt(10);
  //  y = getRandomInt(10);
  //}
  //while (!boardToReturn.placeShip([y, x], submarine)) {
  //  x = getRandomInt(10);
  //  y = getRandomInt(10);
  //}
  //while (!boardToReturn.placeShip([y, x], destroyer)) {
  //  x = getRandomInt(10);
  //  y = getRandomInt(10);
  //}
  console.log(boardToReturn.toString());
}

function boardToDom(board, drawShip = false) {
  const boardWrap = document.createElement('div');
  boardWrap.classList.add('board');
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cellVal = board.getCoordinate([i, j]);
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
          if (cpuPlayer.getBoard().getCoordinate([i, j]) === 1) {
            cpuCells[i * 10 + j].classList.add('ship');
          }

          if (cpuPlayer.getBoard().getCoordinate([i, j]) !== -1) {
            humanPlayer.attackBoard([i, j], cpuPlayer.getBoard());
            cpuCells[i * 10 + j].classList.add('hit');
            updateIndicator('CPU');

            const attackIndex = getRandomInt(randomPos.length);
            const attackPos = randomPos.splice(attackIndex, 1)[0];
            let y = attackPos[0];
            let x = attackPos[1];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUV1Qjs7Ozs7OztVQ3pCdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUM4QjtBQUNXOztBQUV6QyxzREFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sb2FkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3R1cm5UcmFja2VyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pc3dhbGQ6d2dodEAzMDA7NTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5ib2R5e1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2Y0ZmY4MTtcXG59XFxuOnJvb3R7XFxuXFx0Zm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udG90YWwtd3JhcHtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbn1cXG5mb3Jte1xcblxcdG1hcmdpbi10b3A6IDEwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZmxvdzogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5pbnB1dC13cmFwe1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1mbG93OiBjb2x1bW47XFxufVxcbi5idG4td3JhcHtcXG5cXHRtYXJnaW4tYmxvY2s6IDFyZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmNlbGx7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jZWxsLnNoaXB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG5cXG4uYm9hcmR7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdhcDogMDtcXG59XFxuI3BsYXktYXJlYS13cmFwe1xcblxcdHBhZGRpbmctdG9wOiA1dmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWZsb3c6IGNvbHVtbjtcXG5cXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcGxheS1hcmVhLXdyYXAgPiAuc3BsaXR7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcbn1cXG4uY2VsbC5oaXR7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxufVxcblxcbi5jZWxsLnNoaXAuaGl0e1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxNTYsIDE5LCAxOSk7XFxufVxcbiNpbnRyby1oZWFke1xcblxcdHdpZHRoOiBmaXQtY29udGVudDtcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcblxcdGZvbnQtc2l6ZTogMmVtO1xcblxcdG1hcmdpbi1ibG9jazogMWVtO1xcbn1cXG5cXG4jcHJlZ2FtZUJvYXJke1xcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuXFx0d2lkdGg6IDIwZW07XFxuXFx0aGVpZ2h0OiAyMGVtO1xcbn1cXG5cXG4jZHJhZ2dhYmxlLXdyYXB7XFxuXFx0d2lkdGg6IGZpdC1jb250ZW50O1xcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXG5cXHRtYXJnaW4tdG9wOiAyNHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcXG5cXHRwYWRkaW5nOiAwLjVlbTtcXG59XFxuI2RyYWdnYWJsZS13cmFwID4gZGl2e1xcblxcdHdpZHRoOiA3cmVtO1xcblxcdGhlaWdodDogN3JlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbiNkcmFnZ2FibGUtd3JhcCAuc2hpcC13cmFwe1xcblxcdGhlaWdodDogMTAwJTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFx0bWFyZ2luOiBhdXRvO1xcbn1cXG4jZHJhZ2dhYmxlLXdyYXAgLnNoaXAtd3JhcC5ob3Jpem9udGFse1xcblxcdGZsZXgtZmxvdzogcm93O1xcbn1cXG4jZHJhZ2dhYmxlLXdyYXAgLnNoaXAtd3JhcC52ZXJ0aWNhbHtcXG5cXHRmbGV4LWZsb3c6IGNvbHVtbjtcXG59XFxuXFxuI2RyYWdnYWJsZS13cmFwIC5zaGlwLXdyYXAuY2FycmllcntcXG5cXHR3aWR0aDogODAlO1xcbn1cXG5cXG4jZHJhZ2dhYmxlLXdyYXAgLnNoaXAtd3JhcC5iYXR0bGVzaGlwe1xcblxcdHdpZHRoOiA2NSU7XFxufVxcblxcbiNkcmFnZ2FibGUtd3JhcCAuc2hpcC13cmFwLmNydWlzZXJ7XFxuXFx0d2lkdGg6IDQ4JTtcXG59XFxuI2RyYWdnYWJsZS13cmFwIC5zaGlwLXdyYXAuc3VibWFyaW5le1xcblxcdHdpZHRoOiAzMyU7XFxufVxcblxcbiNkcmFnZ2FibGUtd3JhcCAuY2VsbHtcXG5cXHR3aWR0aDogMXJlbTtcXG5cXHRoZWlnaHQ6IDFyZW07XFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcblxcbi5kcmFnZ2FibGV7XFxuXFx0Y3Vyc29yOiBncmFiYmluZztcXG59XFxuXFxuLmRyYWdnYWJsZS5kcmFnZ2luZyAuY2VsbHtcXG5cXHR3aWR0aDogMnJlbTtcXG5cXHRoZWlnaHQ6IDJyZW07XFxufVxcblxcbiNwcmVnYW1lQm9hcmQgLmNlbGwuaGlnaGxpZ2h0e1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgOTIsIDkyKTtcXG59XFxuXFxuI3ByZWdhbWVCb2FyZCAuY2VsbC5vY2N1cGllZHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Ymx1ZTtcXG59XFxuXFxuI2RyYWdnYWJsZS13cmFwIC5kZWFjdGl2YXRlZHtcXG5cXHR2aXNpYmlsaXR5OmhpZGRlbjtcXG59XFxuXFxuI2NvbnRpbnVlQnRue1xcblxcdGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXG5cXHR3aWR0aDogNWVtO1xcblxcdHdpZHRoOiBmaXQtY29udGVudDtcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IG5hdnk7XFxuXFx0Ym9yZGVyOiA0cHggc29saWQgbGlnaHRibHVlO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNjb250aW51ZUJ0bjpob3ZlcntcXG5cXHRib3JkZXI6IDRweCBzb2xpZCBuYXZ5O1xcblxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0cGFkZGluZzogMC4yZW07XFxuXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiAxcyBjb2xvcjtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IDFzIGJvcmRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTs7Q0FFYixhQUFhO0NBQ2IsdUJBQXVCOztBQUV4QjtBQUNBO0NBQ0MsZUFBZTtDQUNmLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHVCQUF1QjtBQUN4QjtBQUNBO0NBQ0MsdUJBQXVCO0NBQ3ZCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLDJCQUEyQjtBQUM1Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLE1BQU07QUFDUjtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixpQkFBaUI7O0NBRWpCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7O0NBRTlCLFVBQVU7Q0FDVixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLGtDQUFrQztBQUNuQztBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYiw2QkFBNkI7O0NBRTdCLGdCQUFnQjtDQUNoQiwyQkFBMkI7Q0FDM0IsY0FBYztBQUNmO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLG9DQUFvQztBQUNyQzs7QUFFQTtDQUNDLFlBQVk7O0NBRVosYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7O0NBRXZCLFlBQVk7QUFDYjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7QUFDQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osbUJBQW1COztDQUVuQiwyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBO0NBQ0MsaUNBQWlDO0FBQ2xDOztBQUVBO0NBQ0MsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsaUNBQWlDO0NBQ2pDLFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGdCQUFnQjs7Q0FFaEIsWUFBWTtDQUNaLHNCQUFzQjtDQUN0QiwyQkFBMkI7Q0FDM0IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLDJCQUEyQjtDQUMzQixZQUFZO0NBQ1osY0FBYzs7Q0FFZCw0QkFBNEI7Q0FDNUIsNkJBQTZCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZDp3Z2h0QDMwMDs1MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmJvZHl7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmZjgxO1xcbn1cXG46cm9vdHtcXG5cXHRmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50b3RhbC13cmFwe1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxufVxcbmZvcm17XFxuXFx0bWFyZ2luLXRvcDogMTAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1mbG93OiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmlucHV0LXdyYXB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWZsb3c6IGNvbHVtbjtcXG59XFxuLmJ0bi13cmFwe1xcblxcdG1hcmdpbi1ibG9jazogMXJlbTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uY2VsbHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNlbGwuc2hpcHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcblxcbi5ib2FyZHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiAwO1xcbn1cXG4jcGxheS1hcmVhLXdyYXB7XFxuXFx0cGFkZGluZy10b3A6IDV2aDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZmxvdzogY29sdW1uO1xcblxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5LWFyZWEtd3JhcCA+IC5zcGxpdHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG5cXHR3aWR0aDogODAlO1xcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcbi5jZWxsLmhpdHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuLmNlbGwuc2hpcC5oaXR7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NiwgMTksIDE5KTtcXG59XFxuI2ludHJvLWhlYWR7XFxuXFx0d2lkdGg6IGZpdC1jb250ZW50O1xcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuXFx0Zm9udC1zaXplOiAyZW07XFxuXFx0bWFyZ2luLWJsb2NrOiAxZW07XFxufVxcblxcbiNwcmVnYW1lQm9hcmR7XFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXG5cXHR3aWR0aDogMjBlbTtcXG5cXHRoZWlnaHQ6IDIwZW07XFxufVxcblxcbiNkcmFnZ2FibGUtd3JhcHtcXG5cXHR3aWR0aDogZml0LWNvbnRlbnQ7XFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcblxcdG1hcmdpbi10b3A6IDI0cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcblxcdHBhZGRpbmc6IDAuNWVtO1xcbn1cXG4jZHJhZ2dhYmxlLXdyYXAgPiBkaXZ7XFxuXFx0d2lkdGg6IDdyZW07XFxuXFx0aGVpZ2h0OiA3cmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuI2RyYWdnYWJsZS13cmFwIC5zaGlwLXdyYXB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXHRtYXJnaW46IGF1dG87XFxufVxcbiNkcmFnZ2FibGUtd3JhcCAuc2hpcC13cmFwLmhvcml6b250YWx7XFxuXFx0ZmxleC1mbG93OiByb3c7XFxufVxcbiNkcmFnZ2FibGUtd3JhcCAuc2hpcC13cmFwLnZlcnRpY2Fse1xcblxcdGZsZXgtZmxvdzogY29sdW1uO1xcbn1cXG5cXG4jZHJhZ2dhYmxlLXdyYXAgLnNoaXAtd3JhcC5jYXJyaWVye1xcblxcdHdpZHRoOiA4MCU7XFxufVxcblxcbiNkcmFnZ2FibGUtd3JhcCAuc2hpcC13cmFwLmJhdHRsZXNoaXB7XFxuXFx0d2lkdGg6IDY1JTtcXG59XFxuXFxuI2RyYWdnYWJsZS13cmFwIC5zaGlwLXdyYXAuY3J1aXNlcntcXG5cXHR3aWR0aDogNDglO1xcbn1cXG4jZHJhZ2dhYmxlLXdyYXAgLnNoaXAtd3JhcC5zdWJtYXJpbmV7XFxuXFx0d2lkdGg6IDMzJTtcXG59XFxuXFxuI2RyYWdnYWJsZS13cmFwIC5jZWxse1xcblxcdHdpZHRoOiAxcmVtO1xcblxcdGhlaWdodDogMXJlbTtcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuLmRyYWdnYWJsZXtcXG5cXHRjdXJzb3I6IGdyYWJiaW5nO1xcbn1cXG5cXG4uZHJhZ2dhYmxlLmRyYWdnaW5nIC5jZWxse1xcblxcdHdpZHRoOiAycmVtO1xcblxcdGhlaWdodDogMnJlbTtcXG59XFxuXFxuI3ByZWdhbWVCb2FyZCAuY2VsbC5oaWdobGlnaHR7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA5MiwgOTIpO1xcbn1cXG5cXG4jcHJlZ2FtZUJvYXJkIC5jZWxsLm9jY3VwaWVke1xcblxcdGJhY2tncm91bmQtY29sb3I6bGlnaHRibHVlO1xcbn1cXG5cXG4jZHJhZ2dhYmxlLXdyYXAgLmRlYWN0aXZhdGVke1xcblxcdHZpc2liaWxpdHk6aGlkZGVuO1xcbn1cXG5cXG4jY29udGludWVCdG57XFxuXFx0Zm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xcblxcdHdpZHRoOiA1ZW07XFxuXFx0d2lkdGg6IGZpdC1jb250ZW50O1xcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogbmF2eTtcXG5cXHRib3JkZXI6IDRweCBzb2xpZCBsaWdodGJsdWU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI2NvbnRpbnVlQnRuOmhvdmVye1xcblxcdGJvcmRlcjogNHB4IHNvbGlkIG5hdnk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRwYWRkaW5nOiAwLjJlbTtcXG5cXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IDFzIGNvbG9yO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogMXMgYm9yZGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBbXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICBdO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBib2FyZDtcbiAgfTtcblxuICBjb25zdCBnZXRDb29yZGluYXRlID0gKGNvb3JkKSA9PiB7XG4gICAgbGV0IHkgPSBjb29yZFswXTtcbiAgICBsZXQgeCA9IGNvb3JkWzFdO1xuXG4gICAgcmV0dXJuIGJvYXJkW3ldW3hdO1xuICB9O1xuXG4gIGNvbnN0IGJsb3dDb29yZGluYXRlID0gKGNvb3JkKSA9PiB7XG4gICAgbGV0IHkgPSBjb29yZFswXTtcbiAgICBsZXQgeCA9IGNvb3JkWzFdO1xuXG4gICAgYm9hcmRbeV1beF0gPSAtMTtcbiAgfTtcblxuICBjb25zdCBnZXRTaGlwQnlDb29yZGluYXRlID0gKGNvb3JkKSA9PiB7XG4gICAgbGV0IHNoaXBUb1JldHVybiA9IG51bGw7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcC5jb29yZGluYXRlcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50WzBdID09PSBjb29yZFswXSAmJiBlbGVtZW50WzFdID09PSBjb29yZFsxXSkge1xuICAgICAgICAgIHNoaXBUb1JldHVybiA9IHNoaXA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBzaGlwVG9SZXR1cm47XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBzO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChjb29yZCwgc2hpcCkgPT4ge1xuICAgIGNvbnN0IHggPSBjb29yZFsxXTtcbiAgICBjb25zdCB5ID0gY29vcmRbMF07XG5cbiAgICBjb25zdCBjaGVja0FycmF5ID0gW107IC8qYXJyYXkgbWVhbnQgY2hlY2sgaWYgYSBzaGlwIGlzIGFscmVhZHlQbGFjZWQgKi9cbiAgICBjb25zdCBjb29yZEFycmF5ID0gW107IC8qYXJyYXkgbWVhbnQgdG8gdHJhY2sgc2hpcCBjb29yZGluYXRlcyAqL1xuXG4gICAgbGV0IHZhbGlkQ2hvaWNlID0gZmFsc2U7XG5cbiAgICBpZiAoc2hpcC5nZXRPcmllbnRhdGlvbigpID09PSAneScpIHtcbiAgICAgIGlmICh5IC0gc2hpcC5nZXRMZW4oKSArIDEgPj0gMCkge1xuICAgICAgICB2YWxpZENob2ljZSA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaGlwLmdldExlbigpOyBpbmRleCsrKSB7XG4gICAgICAgICAgY2hlY2tBcnJheS5wdXNoKGJvYXJkW3kgLSBpbmRleF1beF0pO1xuICAgICAgICAgIGNvb3JkQXJyYXkucHVzaChbeSAtIGluZGV4LCB4XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNoaXAuZ2V0T3JpZW50YXRpb24oKSA9PT0gJ3gnKSB7XG4gICAgICBpZiAoeCArIHNoaXAuZ2V0TGVuKCkgLSAxIDw9IDkpIHtcbiAgICAgICAgdmFsaWRDaG9pY2UgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcC5nZXRMZW4oKTsgaW5kZXgrKykge1xuICAgICAgICAgIGNoZWNrQXJyYXkucHVzaChib2FyZFt5XVt4ICsgaW5kZXhdKTtcbiAgICAgICAgICBjb29yZEFycmF5LnB1c2goW3ksIHggKyBpbmRleF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFjaGVja0FycmF5LmluY2x1ZGVzKDEpICYgdmFsaWRDaG9pY2UpIHtcbiAgICAgIHNoaXBzLnB1c2goeyBzaGlwUG9pbnRlcjogc2hpcCwgY29vcmRpbmF0ZXM6IGNvb3JkQXJyYXkgfSk7XG4gICAgICBpZiAoc2hpcC5nZXRPcmllbnRhdGlvbigpID09PSAneScpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNoaXAuZ2V0TGVuKCk7IGluZGV4KyspIHtcbiAgICAgICAgICBib2FyZFt5IC0gaW5kZXhdW3hdID0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNoaXAuZ2V0T3JpZW50YXRpb24oKSA9PT0gJ3gnKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaGlwLmdldExlbigpOyBpbmRleCsrKSB7XG4gICAgICAgICAgYm9hcmRbeV1beCArIGluZGV4XSA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCByZWNpZXZlSGl0ID0gKGNvb3JkKSA9PiB7XG4gICAgaWYgKGdldENvb3JkaW5hdGUoY29vcmQpICE9PSAtMSkge1xuICAgICAgaWYgKGdldENvb3JkaW5hdGUoY29vcmQpID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGhpdFNoaXAgPSBnZXRTaGlwQnlDb29yZGluYXRlKGNvb3JkKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhpdFNoaXAuY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBoaXRTaGlwLmNvb3JkaW5hdGVzW2ldWzBdID09PSBjb29yZFswXSAmJlxuICAgICAgICAgICAgaGl0U2hpcC5jb29yZGluYXRlc1tpXVsxXSA9PT0gY29vcmRbMV1cbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGhpdFNoaXAuc2hpcFBvaW50ZXIuaGl0KGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYmxvd0Nvb3JkaW5hdGUoY29vcmQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0b1N0cmluZyA9ICgpID0+IHtcbiAgICBsZXQgc3RyID0gJyc7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGJvYXJkLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgbGV0IGFyciA9IGJvYXJkW2luZGV4XTtcbiAgICAgIHN0ciArPSAnXFxuJztcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFyci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBhcnJbaW5kZXhdO1xuICAgICAgICBzdHIgKz0gYCR7c3RhdGV9IHxgO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG4gIH07XG5cbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgIGxldCBhbGxTdW5rID0gdHJ1ZTtcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmICghc2hpcC5zaGlwUG9pbnRlci5nZXRTdW5rKCkpIHtcbiAgICAgICAgYWxsU3VuayA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhbGxTdW5rO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGdldEJvYXJkLFxuICAgIGdldFNoaXBzLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNpZXZlSGl0LFxuICAgIGFsbFNoaXBzU3VuayxcbiAgICBnZXRDb29yZGluYXRlLFxuICAgIGJsb3dDb29yZGluYXRlLFxuICAgIHRvU3RyaW5nLFxuICB9O1xufTtcblxuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwJztcbmltcG9ydCB7IFR1cm5UcmFja2VyIH0gZnJvbSAnLi90dXJuVHJhY2tlcic7XG5cbmNvbnN0IGFuY2hvckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb25zdCB0cmFja2VyID0gVHVyblRyYWNrZXIoJ0gnKTtcbmxldCByYW5kb21Qb3MgPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgIHJhbmRvbVBvcy5wdXNoKFtpLCBqXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcbn1cbmZ1bmN0aW9uIHJhbmRvbU9yaWVudGF0aW9uKCkge1xuICBjb25zdCBvID0gZ2V0UmFuZG9tSW50KDIpO1xuICBjb25zb2xlLmxvZyhvKTtcbiAgc3dpdGNoIChvKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuICd4JztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJ3knO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRNYWluQXNzZXN0cygpIHtcbiAgbG9hZE5hbWVQcm9tcHQoKTtcbn1cblxuZnVuY3Rpb24gbG9hZE5hbWVQcm9tcHQoKSB7XG4gIGdlbmVyYXRlUmFuZG9tQm9hcmQoKTtcbiAgY29uc3QgdG90YWxXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvdGFsV3JhcC5jbGFzc0xpc3QuYWRkKCd0b3RhbC13cmFwJyk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZTonO1xuICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZV9pbnB1dCcpO1xuXG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWVfaW5wdXQnKTtcbiAgbmFtZUlucHV0LmlkID0gJ25hbWVfaW5wdXQnO1xuICBuYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdwYXR0ZXJuJywgJ15bQS16XXszLH0kJyk7XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi50ZXh0Q29udGVudCA9ICdOZXh0JztcblxuICBjb25zdCBpbnB1dFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5wdXRXcmFwLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXdyYXAnKTtcblxuICBpbnB1dFdyYXAuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgaW5wdXRXcmFwLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dFdyYXApO1xuICBmb3JtLm9uc3VibWl0ID0gYGV2ZW50LnByZXZlbnREZWZhdWx0KCk7YDtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgaWYgKG5hbWVJbnB1dC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgLy9jb25zdCBwbGF5ZXJCb2FyZCA9IHBvcHVsYXRlQm9hcmQoKTtcbiAgICAgIC8vY29uc3QgaHVtYW5QbGF5ZXIgPSBQbGF5ZXIobmFtZUlucHV0LnZhbHVlLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAvL2NvbnN0IGNwdVBsYXllciA9IFBsYXllcignQ1BVJywgcGxheWVyQm9hcmQpO1xuXG4gICAgICAvL2NvbnNvbGUubG9nKGh1bWFuUGxheWVyLmdldEJvYXJkKCkudG9TdHJpbmcoKSk7XG4gICAgICAvL2NvbnNvbGUubG9nKGNwdVBsYXllci5nZXRCb2FyZCgpLnRvU3RyaW5nKCkpO1xuXG4gICAgICBjbGVhclNjcmVlbigpO1xuICAgICAgbG9hZFByZUdhbWUobmFtZUlucHV0LnZhbHVlKTtcbiAgICAgIC8vbG9hZFBsYXlBcmVhKGh1bWFuUGxheWVyLCBjcHVQbGF5ZXIpO1xuICAgICAgLy9zdGFydEdhbWUoaHVtYW5QbGF5ZXIsIGNwdVBsYXllciwgbmFtZUlucHV0LnZhbHVlKTtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxuICBjb25zdCBidG5XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ0bldyYXAuY2xhc3NMaXN0LmFkZCgnYnRuLXdyYXAnKTtcblxuICBidG5XcmFwLmFwcGVuZENoaWxkKGJ0bik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnRuV3JhcCk7XG5cbiAgdG90YWxXcmFwLmFwcGVuZENoaWxkKGZvcm0pO1xuICBhbmNob3JEaXYuYXBwZW5kQ2hpbGQodG90YWxXcmFwKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2hpcERvbShzaXplKSB7XG4gIGNvbnN0IHNoaXBXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNoaXBXcmFwLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgdHJ1ZSk7XG4gIHNoaXBXcmFwLmNsYXNzTGlzdC5hZGQoJ3NoaXAtd3JhcCcpO1xuICBzaGlwV3JhcC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2FibGUnKTtcbiAgc2hpcFdyYXAuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuXG4gIGNvbnN0IHJvb3RDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJvb3RDZWxsLmlkID0gJ3Jvb3QtY2VsbCc7XG4gIHJvb3RDZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcblxuICBzaGlwV3JhcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiB7XG4gICAgc2hpcFdyYXAuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKTtcbiAgfSk7XG5cbiAgc2hpcFdyYXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IHtcbiAgICBzaGlwV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xuICB9KTtcblxuICBzaGlwV3JhcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgaXNIb3Jpem9udGFsID0gc2hpcFdyYXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJyk7XG4gICAgc3dpdGNoIChpc0hvcml6b250YWwpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgc2hpcFdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnaG9yaXpvbnRhbCcpO1xuICAgICAgICBzaGlwV3JhcC5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGZhbHNlOlxuICAgICAgICBzaGlwV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCd2ZXJ0aWNhbCcpO1xuICAgICAgICBzaGlwV3JhcC5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsJyk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG5cbiAgc2hpcFdyYXAuc2V0QXR0cmlidXRlKCdsZW5ndGgnLCBzaXplKTtcblxuICBzd2l0Y2ggKHNpemUpIHtcbiAgICBjYXNlIDU6XG4gICAgICBzaGlwV3JhcC5jbGFzc0xpc3QuYWRkKCdjYXJyaWVyJyk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgNDpcbiAgICAgIHNoaXBXcmFwLmNsYXNzTGlzdC5hZGQoJ2JhdHRsZXNoaXAnKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAzOlxuICAgICAgc2hpcFdyYXAuY2xhc3NMaXN0LmFkZCgnY3J1aXNlcicpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDI6XG4gICAgICBzaGlwV3JhcC5jbGFzc0xpc3QuYWRkKCdzdWJtYXJpbmUnKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplIC0gMTsgaSsrKSB7XG4gICAgbGV0IHNoaXBDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcENlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgIHNoaXBXcmFwLmFwcGVuZENoaWxkKHNoaXBDZWxsKTtcbiAgfVxuXG4gIHNoaXBXcmFwLmFwcGVuZENoaWxkKHJvb3RDZWxsKTtcblxuICByZXR1cm4gc2hpcFdyYXA7XG59XG5mdW5jdGlvbiBjbGVhckhpZ2hsaWdodERvbShjZWxscykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGlmIChjZWxsc1tpXVtqXS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZ2hsaWdodCcpKSB7XG4gICAgICAgIGNlbGxzW2ldW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkUHJlR2FtZShuYW1lKSB7XG4gIGNvbnN0IGludHJvSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGludHJvSGVhZGluZy5pZCA9ICdpbnRyby1oZWFkJztcbiAgaW50cm9IZWFkaW5nLnRleHRDb250ZW50ID0gYFBsYWNlIHlvdXIgc2hpcHMgYWRtaXJhbCAke25hbWV9YDtcblxuICBhbmNob3JEaXYuYXBwZW5kQ2hpbGQoaW50cm9IZWFkaW5nKTtcblxuICBjb25zdCBibGFua0JvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGxldCBib2FyZERvbSA9IGJvYXJkVG9Eb20oYmxhbmtCb2FyZCk7XG4gIGJvYXJkRG9tLmlkID0gJ3ByZWdhbWVCb2FyZCc7XG5cbiAgY29uc3QgZG9tQ2VsbHMgPSBib2FyZERvbS5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuICBsZXQgY2VsbHMgPSBbLi4uQXJyYXkoMTApXS5tYXAoKCkgPT4gQXJyYXkoMTApKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSBjZWxsc1tpXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIHJvd1tqXSA9IGRvbUNlbGxzW2kgKiAxMCArIGpdO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgY29uc3QgY2VsbCA9IGNlbGxzW2ldW2pdO1xuXG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWdnaW5nJyk7XG4gICAgICAgIGNvbnN0IGxlbiA9IHBhcnNlSW50KHNoaXAuZ2V0QXR0cmlidXRlKCdsZW5ndGgnKSk7XG5cbiAgICAgICAgaWYgKHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJykpIHtcbiAgICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IGxlbjsgeisrKSB7XG4gICAgICAgICAgICBpZiAobGVuIC0gMSArIGogPCAxMCkge1xuICAgICAgICAgICAgICBjZWxsc1tpXVtqICsgel0uY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucygndmVydGljYWwnKSkge1xuICAgICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgbGVuOyB6KyspIHtcbiAgICAgICAgICAgIGlmIChpIC0gbGVuICsgMSA+PSAwKSB7XG4gICAgICAgICAgICAgIGNlbGxzW2kgLSB6XVtqXS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnZ2luZycpO1xuICAgICAgICBjb25zdCBsZW4gPSBwYXJzZUludChzaGlwLmdldEF0dHJpYnV0ZSgnbGVuZ3RoJykpO1xuXG4gICAgICAgIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpKSB7XG4gICAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCBsZW47IHorKykge1xuICAgICAgICAgICAgaWYgKGogKyB6IDwgMTApIHtcbiAgICAgICAgICAgICAgY2VsbHNbaV1baiArIHpdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykpIHtcbiAgICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IGxlbjsgeisrKSB7XG4gICAgICAgICAgICBpZiAoaSAtIHogPj0gMCkge1xuICAgICAgICAgICAgICBjZWxsc1tpIC0gel1bal0uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgc2hpcFBsYWNlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBkb21TaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWdnaW5nJyk7XG4gICAgICAgIGNvbnN0IGxlbiA9IHBhcnNlSW50KGRvbVNoaXAuZ2V0QXR0cmlidXRlKCdsZW5ndGgnKSk7XG5cbiAgICAgICAgaWYgKGRvbVNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJykpIHtcbiAgICAgICAgICBpZiAoaiArIGxlbiAtIDEgPCAxMCkge1xuICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gJ3gnO1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IFNoaXAobGVuLCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICBpZiAoYmxhbmtCb2FyZC5wbGFjZVNoaXAoW2ksIGpdLCBzaGlwKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBhbGVydCgnQ0FOTk9UIFBMQUNFIFNISVAgT04gVE9QIE9GIFNISVAnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNoaXBQbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb21TaGlwLmNsYXNzTGlzdC5jb250YWlucygndmVydGljYWwnKSkge1xuICAgICAgICAgIGlmIChpIC0gbGVuICsgMSA8IDEwKSB7XG4gICAgICAgICAgICBsZXQgb3JpZW50YXRpb24gPSAneSc7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gU2hpcChsZW4sIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgIGlmIChibGFua0JvYXJkLnBsYWNlU2hpcChbaSwgal0sIHNoaXApID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIGFsZXJ0KCdDQU5OT1QgUExBQ0UgU0hJUCBPTiBUT1AgT0YgU0hJUCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2hpcFBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzaGlwUGxhY2VkKSB7XG4gICAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCBsZW47IHorKykge1xuICAgICAgICAgICAgaWYgKGRvbVNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJykpIHtcbiAgICAgICAgICAgICAgY2VsbHNbaV1baiArIHpdLmNsYXNzTGlzdC5hZGQoJ29jY3VwaWVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZG9tU2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykpIHtcbiAgICAgICAgICAgICAgY2VsbHNbaSAtIHpdW2pdLmNsYXNzTGlzdC5hZGQoJ29jY3VwaWVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGRvbVNoaXAuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dhYmxlJyk7XG4gICAgICAgICAgZG9tU2hpcC5jbGFzc0xpc3QuYWRkKCdkZWFjdGl2YXRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGRvbVNoaXAuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgICAgICAgY2xlYXJIaWdobGlnaHREb20oY2VsbHMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYW5jaG9yRGl2LmFwcGVuZENoaWxkKGJvYXJkRG9tKTtcblxuICBjb25zdCBkcmFnZ2FibGVXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRyYWdnYWJsZVdyYXAuaWQgPSAnZHJhZ2dhYmxlLXdyYXAnO1xuXG4gIGNvbnN0IGNhcnJpZXJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcnJpZXJXcmFwLmFwcGVuZENoaWxkKGNyZWF0ZVNoaXBEb20oNSkpO1xuICBkcmFnZ2FibGVXcmFwLmFwcGVuZENoaWxkKGNhcnJpZXJXcmFwKTtcblxuICBjb25zdCBiYXR0bGVXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJhdHRsZVdyYXAuYXBwZW5kQ2hpbGQoY3JlYXRlU2hpcERvbSg0KSk7XG4gIGRyYWdnYWJsZVdyYXAuYXBwZW5kQ2hpbGQoYmF0dGxlV3JhcCk7XG5cbiAgY29uc3QgY3J1aXNlcldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3J1aXNlcldyYXAuYXBwZW5kQ2hpbGQoY3JlYXRlU2hpcERvbSg0KSk7XG4gIGRyYWdnYWJsZVdyYXAuYXBwZW5kQ2hpbGQoY3J1aXNlcldyYXApO1xuXG4gIGNvbnN0IHN1Ym1hcmluZVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3VibWFyaW5lV3JhcC5hcHBlbmRDaGlsZChjcmVhdGVTaGlwRG9tKDMpKTtcbiAgZHJhZ2dhYmxlV3JhcC5hcHBlbmRDaGlsZChzdWJtYXJpbmVXcmFwKTtcblxuICBjb25zdCBkZXN0cm95ZXJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc3Ryb3llcldyYXAuYXBwZW5kQ2hpbGQoY3JlYXRlU2hpcERvbSgyKSk7XG4gIGRyYWdnYWJsZVdyYXAuYXBwZW5kQ2hpbGQoZGVzdHJveWVyV3JhcCk7XG5cbiAgYW5jaG9yRGl2LmFwcGVuZENoaWxkKGRyYWdnYWJsZVdyYXApO1xuXG4gIGNvbnN0IGJ0bldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnRuV3JhcC5jbGFzc0xpc3QuYWRkKCdidG4td3JhcCcpO1xuICBjb25zdCBjb250aW51ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb250aW51ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb250aW51ZSc7XG4gIGNvbnRpbnVlQnV0dG9uLmlkID0gJ2NvbnRpbnVlQnRuJztcblxuICBjb250aW51ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgc2hpcHMgPSBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKCdkcmFnZ2FibGUtd3JhcCcpXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLmRlYWN0aXZhdGVkJyk7XG5cbiAgICBpZiAoc2hpcHMubGVuZ3RoID09PSA1KSB7XG4gICAgICBjb25zb2xlLmxvZygnR2FtZSBzdGFydGluZycpO1xuICAgICAgZ2VuZXJhdGVSYW5kb21Cb2FyZCgpO1xuICAgICAgY29uc3QgaHVtYW5QbGF5ZXIgPSBQbGF5ZXIobmFtZSwgYmxhbmtCb2FyZCk7XG4gICAgICBjb25zdCBjcHVQbGF5ZXIgPSBQbGF5ZXIoJ0NQVScsIGJsYW5rQm9hcmQpO1xuXG4gICAgICBjbGVhclNjcmVlbigpO1xuICAgICAgbG9hZFBsYXlBcmVhKGh1bWFuUGxheWVyLCBjcHVQbGF5ZXIpO1xuICAgICAgc3RhcnRHYW1lKGh1bWFuUGxheWVyLCBjcHVQbGF5ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCgnUGxlYXNlIHBsYWNlIGFsbCB5b3VyIHNoaXBzIG9uIHRoZSBib2FyZCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgYnRuV3JhcC5hcHBlbmRDaGlsZChjb250aW51ZUJ1dHRvbik7XG4gIGFuY2hvckRpdi5hcHBlbmRDaGlsZChidG5XcmFwKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJTY3JlZW4oKSB7XG4gIGFuY2hvckRpdi5pbm5lckhUTUwgPSAnJztcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVCb2FyZCgpIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgY2FycmllciA9IFNoaXAoNSwgJ3gnKTtcbiAgY29uc3QgYmF0dGxlc2hpcCA9IFNoaXAoNCwgJ3gnKTtcbiAgY29uc3QgY3J1aXNlciA9IFNoaXAoMywgJ3gnKTtcbiAgY29uc3Qgc3VibWFyaW5lID0gU2hpcCgzLCAneCcpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwKDIsICd4Jyk7XG5cbiAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFs1LCAwXSwgY2Fycmllcik7XG4gIHBsYXllckJvYXJkLnBsYWNlU2hpcChbNCwgMF0sIGJhdHRsZXNoaXApO1xuICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoWzMsIDBdLCBjcnVpc2VyKTtcbiAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFsyLCAwXSwgc3VibWFyaW5lKTtcbiAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFsxLCAwXSwgZGVzdHJveWVyKTtcblxuICByZXR1cm4gcGxheWVyQm9hcmQ7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tQm9hcmQoKSB7XG4gIGNvbnN0IGJvYXJkVG9SZXR1cm4gPSBHYW1lYm9hcmQoKTtcblxuICBsZXQgbyA9IHJhbmRvbU9yaWVudGF0aW9uKCk7XG4gIGNvbnN0IGNhcnJpZXIgPSBTaGlwKDUsIG8pO1xuXG4gIG8gPSByYW5kb21PcmllbnRhdGlvbigpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcCg0LCBvKTtcblxuICBvID0gcmFuZG9tT3JpZW50YXRpb24oKTtcbiAgY29uc3QgY3J1aXNlciA9IFNoaXAoMywgbyk7XG5cbiAgbyA9IHJhbmRvbU9yaWVudGF0aW9uKCk7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IFNoaXAoMywgbyk7XG5cbiAgbyA9IHJhbmRvbU9yaWVudGF0aW9uKCk7XG4gIGNvbnN0IGRlc3Ryb3llciA9IFNoaXAoMiwgbyk7XG5cbiAgY29uc3Qgc2hpcHMgPSBbY2FycmllciwgYmF0dGxlc2hpcCwgY3J1aXNlciwgc3VibWFyaW5lLCBkZXN0cm95ZXJdO1xuXG4gIGxldCB4ID0gZ2V0UmFuZG9tSW50KDEwKTtcbiAgbGV0IHkgPSBnZXRSYW5kb21JbnQoMTApO1xuXG4gIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICB3aGlsZSAoIWJvYXJkVG9SZXR1cm4ucGxhY2VTaGlwKFt5LCB4XSwgc2hpcCkpIHtcbiAgICAgIHggPSBnZXRSYW5kb21JbnQoMTApO1xuICAgICAgeSA9IGdldFJhbmRvbUludCgxMCk7XG4gICAgfVxuICB9KTtcblxuICAvL3doaWxlICghYm9hcmRUb1JldHVybi5wbGFjZVNoaXAoW3ksIHhdLCBjYXJyaWVyKSkge1xuICAvL3ggPSBnZXRSYW5kb21JbnQoMTApO1xuICAvL3kgPSBnZXRSYW5kb21JbnQoMTApO1xuICAvL31cbiAgLy93aGlsZSAoIWJvYXJkVG9SZXR1cm4ucGxhY2VTaGlwKFt5LCB4XSwgYmF0dGxlc2hpcCkpIHtcbiAgLy8gIHggPSBnZXRSYW5kb21JbnQoMTApO1xuICAvLyAgeSA9IGdldFJhbmRvbUludCgxMCk7XG4gIC8vfVxuICAvL3doaWxlICghYm9hcmRUb1JldHVybi5wbGFjZVNoaXAoW3ksIHhdLCBjcnVpc2VyKSkge1xuICAvLyAgeCA9IGdldFJhbmRvbUludCgxMCk7XG4gIC8vICB5ID0gZ2V0UmFuZG9tSW50KDEwKTtcbiAgLy99XG4gIC8vd2hpbGUgKCFib2FyZFRvUmV0dXJuLnBsYWNlU2hpcChbeSwgeF0sIHN1Ym1hcmluZSkpIHtcbiAgLy8gIHggPSBnZXRSYW5kb21JbnQoMTApO1xuICAvLyAgeSA9IGdldFJhbmRvbUludCgxMCk7XG4gIC8vfVxuICAvL3doaWxlICghYm9hcmRUb1JldHVybi5wbGFjZVNoaXAoW3ksIHhdLCBkZXN0cm95ZXIpKSB7XG4gIC8vICB4ID0gZ2V0UmFuZG9tSW50KDEwKTtcbiAgLy8gIHkgPSBnZXRSYW5kb21JbnQoMTApO1xuICAvL31cbiAgY29uc29sZS5sb2coYm9hcmRUb1JldHVybi50b1N0cmluZygpKTtcbn1cblxuZnVuY3Rpb24gYm9hcmRUb0RvbShib2FyZCwgZHJhd1NoaXAgPSBmYWxzZSkge1xuICBjb25zdCBib2FyZFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYm9hcmRXcmFwLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgY29uc3QgY2VsbFZhbCA9IGJvYXJkLmdldENvb3JkaW5hdGUoW2ksIGpdKTtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuXG4gICAgICBpZiAoKGNlbGxWYWwgPT09IDEpICYgZHJhd1NoaXApIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICB9XG5cbiAgICAgIGJvYXJkV3JhcC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm9hcmRXcmFwO1xufVxuXG5mdW5jdGlvbiBsb2FkUGxheUFyZWEoaHVtYW5QbGF5ZXIsIGNwdVBsYXllcikge1xuICBjb25zdCBwbGF5QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwbGF5QXJlYS5pZCA9ICdwbGF5LWFyZWEtd3JhcCc7XG5cbiAgY29uc3QgdHVybkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0dXJuSGVhZGluZy5pbm5lckhUTUwgPSAnPHNwYW4gaWQgPSBcInR1cm4taW5kaWNhdG9yXCI+PC9zcGFuPnMgVHVybi4nO1xuXG4gIHBsYXlBcmVhLmFwcGVuZENoaWxkKHR1cm5IZWFkaW5nKTtcblxuICBjb25zdCBwbGF5ZXJTcGxpdFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGxheWVyU3BsaXRXcmFwLmNsYXNzTGlzdC5hZGQoJ3NwbGl0Jyk7XG5cbiAgcGxheUFyZWEuYXBwZW5kQ2hpbGQocGxheWVyU3BsaXRXcmFwKTtcblxuICBjb25zdCBwbGF5ZXJDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGxheWVyQ29sdW1uLmlkID0gJ2h1bWFuLWNvbHVtbic7XG5cbiAgY29uc3QgY3B1Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNwdUNvbHVtbi5pZCA9ICdjcHUtY29sdW1uJztcblxuICBhbmNob3JEaXYuYXBwZW5kQ2hpbGQocGxheUFyZWEpO1xuXG4gIGNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBwbGF5ZXJOYW1lLnRleHRDb250ZW50ID0gaHVtYW5QbGF5ZXIuZ2V0TmFtZSgpO1xuXG4gIHBsYXllckNvbHVtbi5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lKTtcbiAgcGxheWVyQ29sdW1uLmFwcGVuZENoaWxkKGJvYXJkVG9Eb20oaHVtYW5QbGF5ZXIuZ2V0Qm9hcmQoKSwgdHJ1ZSkpO1xuXG4gIGNvbnN0IGNwdU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBjcHVOYW1lLnRleHRDb250ZW50ID0gY3B1UGxheWVyLmdldE5hbWUoKTtcblxuICBjcHVDb2x1bW4uYXBwZW5kQ2hpbGQoY3B1TmFtZSk7XG4gIGNwdUNvbHVtbi5hcHBlbmRDaGlsZChib2FyZFRvRG9tKGNwdVBsYXllci5nZXRCb2FyZCgpKSk7XG5cbiAgcGxheWVyU3BsaXRXcmFwLmFwcGVuZENoaWxkKHBsYXllckNvbHVtbik7XG4gIHBsYXllclNwbGl0V3JhcC5hcHBlbmRDaGlsZChjcHVDb2x1bW4pO1xufVxuXG5mdW5jdGlvbiBhZGRMaXN0ZW5lclRvQ2VsbHMoXG4gIGh1bWFuQm9hcmREb20sXG4gIGNwdUJvYXJkRG9tLFxuICBjcHVQbGF5ZXIsXG4gIGh1bWFuUGxheWVyXG4pIHtcbiAgY29uc3QgaHVtYW5DZWxscyA9IGh1bWFuQm9hcmREb21bMF0uY2hpbGRyZW47XG4gIGNvbnN0IGNwdUNlbGxzID0gY3B1Qm9hcmREb21bMF0uY2hpbGRyZW47XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBjcHVDZWxsc1tpICogMTAgKyBqXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAge1xuICAgICAgICAgIGlmIChjcHVQbGF5ZXIuZ2V0Qm9hcmQoKS5nZXRDb29yZGluYXRlKFtpLCBqXSkgPT09IDEpIHtcbiAgICAgICAgICAgIGNwdUNlbGxzW2kgKiAxMCArIGpdLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY3B1UGxheWVyLmdldEJvYXJkKCkuZ2V0Q29vcmRpbmF0ZShbaSwgal0pICE9PSAtMSkge1xuICAgICAgICAgICAgaHVtYW5QbGF5ZXIuYXR0YWNrQm9hcmQoW2ksIGpdLCBjcHVQbGF5ZXIuZ2V0Qm9hcmQoKSk7XG4gICAgICAgICAgICBjcHVDZWxsc1tpICogMTAgKyBqXS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgIHVwZGF0ZUluZGljYXRvcignQ1BVJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGF0dGFja0luZGV4ID0gZ2V0UmFuZG9tSW50KHJhbmRvbVBvcy5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgYXR0YWNrUG9zID0gcmFuZG9tUG9zLnNwbGljZShhdHRhY2tJbmRleCwgMSlbMF07XG4gICAgICAgICAgICBsZXQgeSA9IGF0dGFja1Bvc1swXTtcbiAgICAgICAgICAgIGxldCB4ID0gYXR0YWNrUG9zWzFdO1xuXG4gICAgICAgICAgICBpZiAoaHVtYW5QbGF5ZXIuZ2V0Qm9hcmQoKS5nZXRDb29yZGluYXRlKFt5LCB4XSkgPT09IDEpIHtcbiAgICAgICAgICAgICAgaHVtYW5DZWxsc1thdHRhY2tQb3NbMF0gKiAxMCArIGF0dGFja1Bvc1sxXV0uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgICAgICAnc2hpcCdcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGh1bWFuQ2VsbHNbYXR0YWNrUG9zWzBdICogMTAgKyBhdHRhY2tQb3NbMV1dLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuXG4gICAgICAgICAgICB1cGRhdGVJbmRpY2F0b3IoaHVtYW5QbGF5ZXIuZ2V0TmFtZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVJbmRpY2F0b3IobmFtZSA9ICdQbGF5ZXIgMScpIHtcbiAgY29uc3QgdHVybkluZGljYXRvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dXJuLWluZGljYXRvcicpO1xuICBpZiAodHJhY2tlci5nZXRUdXJuKCkgPT09ICdIJykge1xuICAgIHR1cm5JbmRpY2F0b3IudGV4dENvbnRlbnQgPSBuYW1lO1xuICB9XG4gIGlmICh0cmFja2VyLmdldFR1cm4oKSA9PT0gJ0MnKSB7XG4gICAgdHVybkluZGljYXRvci50ZXh0Q29udGVudCA9ICdDUFUnO1xuICB9XG4gIHRyYWNrZXIubmV4dFR1cm4oKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRHYW1lKGh1bWFuUGxheWVyLCBjcHVQbGF5ZXIpIHtcbiAgaWYgKFxuICAgIGh1bWFuUGxheWVyLmdldEJvYXJkKCkuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUgJiZcbiAgICBjcHVQbGF5ZXIuZ2V0Qm9hcmQoKS5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNVxuICApIHtcbiAgICBjb25zdCBodW1hbkRvbUJvYXJkID0gZG9jdW1lbnRcbiAgICAgIC5nZXRFbGVtZW50QnlJZCgnaHVtYW4tY29sdW1uJylcbiAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib2FyZCcpO1xuXG4gICAgY29uc3QgY3B1RG9tQm9hcmQgPSBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKCdjcHUtY29sdW1uJylcbiAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib2FyZCcpO1xuXG4gICAgYWRkTGlzdGVuZXJUb0NlbGxzKGh1bWFuRG9tQm9hcmQsIGNwdURvbUJvYXJkLCBjcHVQbGF5ZXIsIGh1bWFuUGxheWVyKTtcblxuICAgIHVwZGF0ZUluZGljYXRvcihodW1hblBsYXllci5nZXROYW1lKCkpO1xuICB9XG59XG5cbmV4cG9ydCB7IGxvYWRNYWluQXNzZXN0cyB9O1xuIiwiY29uc3QgUGxheWVyID0gKHN0ciwgb2JqQm9hcmQpID0+IHtcbiAgY29uc3QgbmFtZSA9IHN0cjtcbiAgY29uc3QgYm9hcmQgPSBvYmpCb2FyZDtcblxuICBjb25zdCBhdHRhY2tCb2FyZCA9IChjb29yZCwgYm9hcmRUb0F0dGFjaykgPT4ge1xuICAgIGlmIChib2FyZFRvQXR0YWNrLmdldENvb3JkaW5hdGUoY29vcmQpICE9PSAtMSkge1xuICAgICAgYm9hcmRUb0F0dGFjay5yZWNpZXZlSGl0KGNvb3JkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IHtcbiAgICByZXR1cm4gYm9hcmQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbmFtZTtcbiAgfTtcblxuICByZXR1cm4geyBhdHRhY2tCb2FyZCwgZ2V0TmFtZSwgZ2V0Qm9hcmQgfTtcbn07XG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsImNvbnN0IFNoaXAgPSAobGVuZ3RoLCBvKSA9PiB7XG4gIGxldCBzaGlwQXJyYXkgPSBbXTtcbiAgbGV0IG9yaWVudGF0aW9uID0gbztcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgc2hpcEFycmF5LnB1c2goMSk7XG4gIH1cblxuICBjb25zdCBnZXRTaGlwID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwQXJyYXk7XG4gIH07XG5cbiAgY29uc3QgZ2V0TGVuID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwQXJyYXkubGVuZ3RoO1xuICB9O1xuXG4gIGNvbnN0IGdldFN1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuICFzaGlwQXJyYXkuaW5jbHVkZXMoMSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0T3JpZW50YXRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIG9yaWVudGF0aW9uO1xuICB9O1xuXG4gIGNvbnN0IG5pbnRleURlZ3JlZXMgPSAoKSA9PiB7XG4gICAgc3dpdGNoIChvcmllbnRhdGlvbikge1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIG9yaWVudGF0aW9uID0gJ3knO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAneSc6XG4gICAgICAgIG9yaWVudGF0aW9uID0gJ3gnO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGl0ID0gKG4pID0+IHtcbiAgICBpZiAobiA+IGxlbmd0aCB8fCBuIDwgMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoaXBBcnJheVtuXSA9IDA7XG4gICAgfVxuICB9O1xuICByZXR1cm4geyBnZXRTaGlwLCBnZXRTdW5rLCBoaXQsIGdldE9yaWVudGF0aW9uLCBnZXRMZW4sIG5pbnRleURlZ3JlZXMgfTtcbn07XG5cbmV4cG9ydCB7IFNoaXAgfTtcbiIsImNvbnN0IFR1cm5UcmFja2VyID0gKHR1cm4pID0+IHtcbiAgbGV0IGN1cnJUdXJuID0gdHVybjtcblxuICBjb25zdCBnZXRUdXJuID0gKCkgPT4ge1xuICAgIHJldHVybiBjdXJyVHVybjtcbiAgfTtcblxuICBjb25zdCBuZXh0VHVybiA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKGN1cnJUdXJuKSB7XG4gICAgICBjYXNlICdIJzpcbiAgICAgICAgY3VyclR1cm4gPSAnQyc7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdDJzpcbiAgICAgICAgY3VyclR1cm4gPSAnSCc7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0VHVybiwgbmV4dFR1cm4gfTtcbn07XG5cbmV4cG9ydCB7IFR1cm5UcmFja2VyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgbG9hZE1haW5Bc3Nlc3RzIH0gZnJvbSAnLi9sb2FkJztcblxubG9hZE1haW5Bc3Nlc3RzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=