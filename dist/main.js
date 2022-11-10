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
      const humanPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)(name, blankBoard);
      const cpuPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)('CPU', blankBoard);

      clearScreen();
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

  playerBoard.placeShip([0, 2], carrier);

  battleship.ninteyDegrees();
  playerBoard.placeShip([8, 5], battleship);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2xvYWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdHVyblRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZDp3Z2h0QDMwMDs1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmJvZHl7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmZjgxO1xcbn1cXG46cm9vdHtcXG5cXHRmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50b3RhbC13cmFwe1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxufVxcbmZvcm17XFxuXFx0bWFyZ2luLXRvcDogMTAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1mbG93OiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmlucHV0LXdyYXB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWZsb3c6IGNvbHVtbjtcXG59XFxuLmJ0bi13cmFwe1xcblxcdG1hcmdpbi1ibG9jazogMXJlbTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uY2VsbHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNlbGwuc2hpcHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcblxcbi5ib2FyZHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiAwO1xcbn1cXG4jcGxheS1hcmVhLXdyYXB7XFxuXFx0cGFkZGluZy10b3A6IDV2aDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZmxvdzogY29sdW1uO1xcblxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5LWFyZWEtd3JhcCA+IC5zcGxpdHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG5cXHR3aWR0aDogODAlO1xcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcbi5jZWxsLmhpdHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuLmNlbGwuc2hpcC5oaXR7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NiwgMTksIDE5KTtcXG59XFxuI2ludHJvLWhlYWR7XFxuXFx0d2lkdGg6IGZpdC1jb250ZW50O1xcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuXFx0Zm9udC1zaXplOiAyZW07XFxuXFx0bWFyZ2luLWJsb2NrOiAxZW07XFxufVxcblxcbiNwcmVnYW1lQm9hcmR7XFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXG5cXHR3aWR0aDogMjBlbTtcXG5cXHRoZWlnaHQ6IDIwZW07XFxufVxcblxcbiNkcmFnZ2FibGUtd3JhcHtcXG5cXHR3aWR0aDogZml0LWNvbnRlbnQ7XFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcblxcdG1hcmdpbi10b3A6IDI0cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcblxcdHBhZGRpbmc6IDAuNWVtO1xcbn1cXG4jZHJhZ2dhYmxlLXdyYXAgPiBkaXZ7XFxuXFx0d2lkdGg6IDdyZW07XFxuXFx0aGVpZ2h0OiA3cmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuI2RyYWdnYWJsZS13cmFwIC5zaGlwLXdyYXB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXHRtYXJnaW46IGF1dG87XFxufVxcbiNkcmFnZ2FibGUtd3JhcCAuc2hpcC13cmFwLmhvcml6b250YWx7XFxuXFx0ZmxleC1mbG93OiByb3c7XFxufVxcbiNkcmFnZ2FibGUtd3JhcCAuc2hpcC13cmFwLnZlcnRpY2Fse1xcblxcdGZsZXgtZmxvdzogY29sdW1uO1xcbn1cXG5cXG4jZHJhZ2dhYmxlLXdyYXAgLnNoaXAtd3JhcC5jYXJyaWVye1xcblxcdHdpZHRoOiA4MCU7XFxufVxcblxcbiNkcmFnZ2FibGUtd3JhcCAuc2hpcC13cmFwLmJhdHRsZXNoaXB7XFxuXFx0d2lkdGg6IDY1JTtcXG59XFxuXFxuI2RyYWdnYWJsZS13cmFwIC5zaGlwLXdyYXAuY3J1aXNlcntcXG5cXHR3aWR0aDogNDglO1xcbn1cXG4jZHJhZ2dhYmxlLXdyYXAgLnNoaXAtd3JhcC5zdWJtYXJpbmV7XFxuXFx0d2lkdGg6IDMzJTtcXG59XFxuXFxuI2RyYWdnYWJsZS13cmFwIC5jZWxse1xcblxcdHdpZHRoOiAxcmVtO1xcblxcdGhlaWdodDogMXJlbTtcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuLmRyYWdnYWJsZXtcXG5cXHRjdXJzb3I6IGdyYWJiaW5nO1xcbn1cXG5cXG4uZHJhZ2dhYmxlLmRyYWdnaW5nIC5jZWxse1xcblxcdHdpZHRoOiAycmVtO1xcblxcdGhlaWdodDogMnJlbTtcXG59XFxuXFxuI3ByZWdhbWVCb2FyZCAuY2VsbC5oaWdobGlnaHR7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA5MiwgOTIpO1xcbn1cXG5cXG4jcHJlZ2FtZUJvYXJkIC5jZWxsLm9jY3VwaWVke1xcblxcdGJhY2tncm91bmQtY29sb3I6bGlnaHRibHVlO1xcbn1cXG5cXG4jZHJhZ2dhYmxlLXdyYXAgLmRlYWN0aXZhdGVke1xcblxcdHZpc2liaWxpdHk6aGlkZGVuO1xcbn1cXG5cXG4jY29udGludWVCdG57XFxuXFx0Zm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xcblxcdHdpZHRoOiA1ZW07XFxuXFx0d2lkdGg6IGZpdC1jb250ZW50O1xcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogbmF2eTtcXG5cXHRib3JkZXI6IDRweCBzb2xpZCBsaWdodGJsdWU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI2NvbnRpbnVlQnRuOmhvdmVye1xcblxcdGJvcmRlcjogNHB4IHNvbGlkIG5hdnk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRwYWRkaW5nOiAwLjJlbTtcXG5cXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IDFzIGNvbG9yO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogMXMgYm9yZGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0Qix5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLGlDQUFpQztBQUNsQzs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhOztDQUViLGFBQWE7Q0FDYix1QkFBdUI7O0FBRXhCO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGFBQWE7Q0FDYixpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsdUJBQXVCO0FBQ3hCO0FBQ0E7Q0FDQyx1QkFBdUI7Q0FDdkIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsMkJBQTJCO0FBQzVCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsTUFBTTtBQUNSO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLGlCQUFpQjs7Q0FFakIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4Qjs7Q0FFOUIsVUFBVTtDQUNWLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0Msa0NBQWtDO0FBQ25DO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLDZCQUE2Qjs7Q0FFN0IsZ0JBQWdCO0NBQ2hCLDJCQUEyQjtDQUMzQixjQUFjO0FBQ2Y7QUFDQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0MsWUFBWTs7Q0FFWixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1Qjs7Q0FFdkIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFVBQVU7QUFDWDtBQUNBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixtQkFBbUI7O0NBRW5CLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBRUE7Q0FDQywwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxpQ0FBaUM7Q0FDakMsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsZ0JBQWdCOztDQUVoQixZQUFZO0NBQ1osc0JBQXNCO0NBQ3RCLDJCQUEyQjtDQUMzQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsMkJBQTJCO0NBQzNCLFlBQVk7Q0FDWixjQUFjOztDQUVkLDRCQUE0QjtDQUM1Qiw2QkFBNkI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkOndnaHRAMzAwOzUwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuYm9keXtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmNGZmODE7XFxufVxcbjpyb290e1xcblxcdGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRvdGFsLXdyYXB7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuZm9ybXtcXG5cXHRtYXJnaW4tdG9wOiAxMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWZsb3c6IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaW5wdXQtd3JhcHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZmxvdzogY29sdW1uO1xcbn1cXG4uYnRuLXdyYXB7XFxuXFx0bWFyZ2luLWJsb2NrOiAxcmVtO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5jZWxse1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2VsbC5zaGlwe1xcblxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuLmJvYXJke1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBnYXA6IDA7XFxufVxcbiNwbGF5LWFyZWEtd3JhcHtcXG5cXHRwYWRkaW5nLXRvcDogNXZoO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1mbG93OiBjb2x1bW47XFxuXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3BsYXktYXJlYS13cmFwID4gLnNwbGl0e1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcblxcdHdpZHRoOiA4MCU7XFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuLmNlbGwuaGl0e1xcblxcdGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbn1cXG5cXG4uY2VsbC5zaGlwLmhpdHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU2LCAxOSwgMTkpO1xcbn1cXG4jaW50cm8taGVhZHtcXG5cXHR3aWR0aDogZml0LWNvbnRlbnQ7XFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXG5cXHRmb250LXNpemU6IDJlbTtcXG5cXHRtYXJnaW4tYmxvY2s6IDFlbTtcXG59XFxuXFxuI3ByZWdhbWVCb2FyZHtcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcblxcdHdpZHRoOiAyMGVtO1xcblxcdGhlaWdodDogMjBlbTtcXG59XFxuXFxuI2RyYWdnYWJsZS13cmFwe1xcblxcdHdpZHRoOiBmaXQtY29udGVudDtcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFxuXFx0bWFyZ2luLXRvcDogMjRweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XFxuXFx0cGFkZGluZzogMC41ZW07XFxufVxcbiNkcmFnZ2FibGUtd3JhcCA+IGRpdntcXG5cXHR3aWR0aDogN3JlbTtcXG5cXHRoZWlnaHQ6IDdyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4jZHJhZ2dhYmxlLXdyYXAgLnNoaXAtd3JhcHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcblxcdG1hcmdpbjogYXV0bztcXG59XFxuI2RyYWdnYWJsZS13cmFwIC5zaGlwLXdyYXAuaG9yaXpvbnRhbHtcXG5cXHRmbGV4LWZsb3c6IHJvdztcXG59XFxuI2RyYWdnYWJsZS13cmFwIC5zaGlwLXdyYXAudmVydGljYWx7XFxuXFx0ZmxleC1mbG93OiBjb2x1bW47XFxufVxcblxcbiNkcmFnZ2FibGUtd3JhcCAuc2hpcC13cmFwLmNhcnJpZXJ7XFxuXFx0d2lkdGg6IDgwJTtcXG59XFxuXFxuI2RyYWdnYWJsZS13cmFwIC5zaGlwLXdyYXAuYmF0dGxlc2hpcHtcXG5cXHR3aWR0aDogNjUlO1xcbn1cXG5cXG4jZHJhZ2dhYmxlLXdyYXAgLnNoaXAtd3JhcC5jcnVpc2Vye1xcblxcdHdpZHRoOiA0OCU7XFxufVxcbiNkcmFnZ2FibGUtd3JhcCAuc2hpcC13cmFwLnN1Ym1hcmluZXtcXG5cXHR3aWR0aDogMzMlO1xcbn1cXG5cXG4jZHJhZ2dhYmxlLXdyYXAgLmNlbGx7XFxuXFx0d2lkdGg6IDFyZW07XFxuXFx0aGVpZ2h0OiAxcmVtO1xcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG5cXG4uZHJhZ2dhYmxle1xcblxcdGN1cnNvcjogZ3JhYmJpbmc7XFxufVxcblxcbi5kcmFnZ2FibGUuZHJhZ2dpbmcgLmNlbGx7XFxuXFx0d2lkdGg6IDJyZW07XFxuXFx0aGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4jcHJlZ2FtZUJvYXJkIC5jZWxsLmhpZ2hsaWdodHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDkyLCA5Mik7XFxufVxcblxcbiNwcmVnYW1lQm9hcmQgLmNlbGwub2NjdXBpZWR7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjpsaWdodGJsdWU7XFxufVxcblxcbiNkcmFnZ2FibGUtd3JhcCAuZGVhY3RpdmF0ZWR7XFxuXFx0dmlzaWJpbGl0eTpoaWRkZW47XFxufVxcblxcbiNjb250aW51ZUJ0bntcXG5cXHRmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxuXFx0d2lkdGg6IDVlbTtcXG5cXHR3aWR0aDogZml0LWNvbnRlbnQ7XFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xcblxcdGJvcmRlcjogNHB4IHNvbGlkIGxpZ2h0Ymx1ZTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jY29udGludWVCdG46aG92ZXJ7XFxuXFx0Ym9yZGVyOiA0cHggc29saWQgbmF2eTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdHBhZGRpbmc6IDAuMmVtO1xcblxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogMXMgY29sb3I7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiAxcyBib3JkZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IFtcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gIF07XG4gIGNvbnN0IHNoaXBzID0gW107XG5cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IGdldENvb3JkaW5hdGUgPSAoY29vcmQpID0+IHtcbiAgICBsZXQgeSA9IGNvb3JkWzFdO1xuICAgIGxldCB4ID0gY29vcmRbMF07XG5cbiAgICByZXR1cm4gYm9hcmRbeV1beF07XG4gIH07XG5cbiAgY29uc3QgYmxvd0Nvb3JkaW5hdGUgPSAoY29vcmQpID0+IHtcbiAgICBsZXQgeSA9IGNvb3JkWzFdO1xuICAgIGxldCB4ID0gY29vcmRbMF07XG5cbiAgICBib2FyZFt5XVt4XSA9IC0xO1xuICB9O1xuXG4gIGNvbnN0IGdldFNoaXBCeUNvb3JkaW5hdGUgPSAoY29vcmQpID0+IHtcbiAgICBsZXQgc2hpcFRvUmV0dXJuID0gbnVsbDtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBzaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnRbMF0gPT09IGNvb3JkWzBdICYmIGVsZW1lbnRbMV0gPT09IGNvb3JkWzFdKSB7XG4gICAgICAgICAgc2hpcFRvUmV0dXJuID0gc2hpcDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNoaXBUb1JldHVybjtcbiAgfTtcblxuICBjb25zdCBnZXRTaGlwcyA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcHM7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKGNvb3JkLCBzaGlwKSA9PiB7XG4gICAgY29uc3QgeCA9IGNvb3JkWzFdO1xuICAgIGNvbnN0IHkgPSBjb29yZFswXTtcblxuICAgIGNvbnN0IGNoZWNrQXJyYXkgPSBbXTsgLyphcnJheSBtZWFudCBjaGVjayBpZiBhIHNoaXAgaXMgYWxyZWFkeVBsYWNlZCAqL1xuICAgIGNvbnN0IGNvb3JkQXJyYXkgPSBbXTsgLyphcnJheSBtZWFudCB0byB0cmFjayBzaGlwIGNvb3JkaW5hdGVzICovXG5cbiAgICBpZiAoc2hpcC5nZXRPcmllbnRhdGlvbigpID09PSAneScpIHtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaGlwLmdldExlbigpOyBpbmRleCsrKSB7XG4gICAgICAgIGNoZWNrQXJyYXkucHVzaChib2FyZFt4IC0gaW5kZXhdW3ldKTtcbiAgICAgICAgY29vcmRBcnJheS5wdXNoKFt4IC0gaW5kZXgsIHldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNoaXAuZ2V0T3JpZW50YXRpb24oKSA9PT0gJ3gnKSB7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcC5nZXRMZW4oKTsgaW5kZXgrKykge1xuICAgICAgICBjaGVja0FycmF5LnB1c2goYm9hcmRbeF1beSArIGluZGV4XSk7XG4gICAgICAgIGNvb3JkQXJyYXkucHVzaChbeSArIGluZGV4LCB4XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFjaGVja0FycmF5LmluY2x1ZGVzKDEpKSB7XG4gICAgICBzaGlwcy5wdXNoKHsgc2hpcFBvaW50ZXI6IHNoaXAsIGNvb3JkaW5hdGVzOiBjb29yZEFycmF5IH0pO1xuICAgICAgaWYgKHNoaXAuZ2V0T3JpZW50YXRpb24oKSA9PT0gJ3knKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaGlwLmdldExlbigpOyBpbmRleCsrKSB7XG4gICAgICAgICAgYm9hcmRbeCAtIGluZGV4XVt5XSA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzaGlwLmdldE9yaWVudGF0aW9uKCkgPT09ICd4Jykge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcC5nZXRMZW4oKTsgaW5kZXgrKykge1xuICAgICAgICAgIGJvYXJkW3hdW3kgKyBpbmRleF0gPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZWNpZXZlSGl0ID0gKGNvb3JkKSA9PiB7XG4gICAgaWYgKGdldENvb3JkaW5hdGUoY29vcmQpICE9PSAtMSkge1xuICAgICAgaWYgKGdldENvb3JkaW5hdGUoY29vcmQpID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGhpdFNoaXAgPSBnZXRTaGlwQnlDb29yZGluYXRlKGNvb3JkKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhpdFNoaXAuY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBoaXRTaGlwLmNvb3JkaW5hdGVzW2ldWzBdID09PSBjb29yZFswXSAmJlxuICAgICAgICAgICAgaGl0U2hpcC5jb29yZGluYXRlc1tpXVsxXSA9PT0gY29vcmRbMV1cbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGhpdFNoaXAuc2hpcFBvaW50ZXIuaGl0KGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYmxvd0Nvb3JkaW5hdGUoY29vcmQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0b1N0cmluZyA9ICgpID0+IHtcbiAgICBsZXQgc3RyID0gJyc7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGJvYXJkLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgbGV0IGFyciA9IGJvYXJkW2luZGV4XTtcbiAgICAgIHN0ciArPSAnXFxuJztcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFyci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBhcnJbaW5kZXhdO1xuICAgICAgICBzdHIgKz0gYCR7c3RhdGV9IHxgO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG4gIH07XG5cbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgIGxldCBhbGxTdW5rID0gdHJ1ZTtcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmICghc2hpcC5zaGlwUG9pbnRlci5nZXRTdW5rKCkpIHtcbiAgICAgICAgYWxsU3VuayA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhbGxTdW5rO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGdldEJvYXJkLFxuICAgIGdldFNoaXBzLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNpZXZlSGl0LFxuICAgIGFsbFNoaXBzU3VuayxcbiAgICBnZXRDb29yZGluYXRlLFxuICAgIGJsb3dDb29yZGluYXRlLFxuICAgIHRvU3RyaW5nLFxuICB9O1xufTtcblxuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwJztcbmltcG9ydCB7IFR1cm5UcmFja2VyIH0gZnJvbSAnLi90dXJuVHJhY2tlcic7XG5cbmNvbnN0IGFuY2hvckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb25zdCB0cmFja2VyID0gVHVyblRyYWNrZXIoJ0gnKTtcbmxldCByYW5kb21Qb3MgPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgIHJhbmRvbVBvcy5wdXNoKFtpLCBqXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcbn1cblxuZnVuY3Rpb24gbG9hZE1haW5Bc3Nlc3RzKCkge1xuICBsb2FkTmFtZVByb21wdCgpO1xufVxuXG5mdW5jdGlvbiBsb2FkTmFtZVByb21wdCgpIHtcbiAgY29uc3QgdG90YWxXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvdGFsV3JhcC5jbGFzc0xpc3QuYWRkKCd0b3RhbC13cmFwJyk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZTonO1xuICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZV9pbnB1dCcpO1xuXG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWVfaW5wdXQnKTtcbiAgbmFtZUlucHV0LmlkID0gJ25hbWVfaW5wdXQnO1xuICBuYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdwYXR0ZXJuJywgJ15bQS16XXszLH0kJyk7XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi50ZXh0Q29udGVudCA9ICdOZXh0JztcblxuICBjb25zdCBpbnB1dFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5wdXRXcmFwLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXdyYXAnKTtcblxuICBpbnB1dFdyYXAuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgaW5wdXRXcmFwLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dFdyYXApO1xuICBmb3JtLm9uc3VibWl0ID0gYGV2ZW50LnByZXZlbnREZWZhdWx0KCk7YDtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgaWYgKG5hbWVJbnB1dC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgLy9jb25zdCBwbGF5ZXJCb2FyZCA9IHBvcHVsYXRlQm9hcmQoKTtcbiAgICAgIC8vY29uc3QgaHVtYW5QbGF5ZXIgPSBQbGF5ZXIobmFtZUlucHV0LnZhbHVlLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAvL2NvbnN0IGNwdVBsYXllciA9IFBsYXllcignQ1BVJywgcGxheWVyQm9hcmQpO1xuXG4gICAgICBjbGVhclNjcmVlbigpO1xuICAgICAgbG9hZFByZUdhbWUobmFtZUlucHV0LnZhbHVlKTtcbiAgICAgIC8vbG9hZFBsYXlBcmVhKGh1bWFuUGxheWVyLCBjcHVQbGF5ZXIpO1xuICAgICAgLy9zdGFydEdhbWUoaHVtYW5QbGF5ZXIsIGNwdVBsYXllciwgbmFtZUlucHV0LnZhbHVlKTtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxuICBjb25zdCBidG5XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ0bldyYXAuY2xhc3NMaXN0LmFkZCgnYnRuLXdyYXAnKTtcblxuICBidG5XcmFwLmFwcGVuZENoaWxkKGJ0bik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnRuV3JhcCk7XG5cbiAgdG90YWxXcmFwLmFwcGVuZENoaWxkKGZvcm0pO1xuICBhbmNob3JEaXYuYXBwZW5kQ2hpbGQodG90YWxXcmFwKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2hpcERvbShzaXplKSB7XG4gIGNvbnN0IHNoaXBXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNoaXBXcmFwLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgdHJ1ZSk7XG4gIHNoaXBXcmFwLmNsYXNzTGlzdC5hZGQoJ3NoaXAtd3JhcCcpO1xuICBzaGlwV3JhcC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2FibGUnKTtcbiAgc2hpcFdyYXAuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuXG4gIGNvbnN0IHJvb3RDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJvb3RDZWxsLmlkID0gJ3Jvb3QtY2VsbCc7XG4gIHJvb3RDZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcblxuICBzaGlwV3JhcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiB7XG4gICAgc2hpcFdyYXAuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKTtcbiAgfSk7XG5cbiAgc2hpcFdyYXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IHtcbiAgICBzaGlwV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xuICB9KTtcblxuICBzaGlwV3JhcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgaXNIb3Jpem9udGFsID0gc2hpcFdyYXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJyk7XG4gICAgc3dpdGNoIChpc0hvcml6b250YWwpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgc2hpcFdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnaG9yaXpvbnRhbCcpO1xuICAgICAgICBzaGlwV3JhcC5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGZhbHNlOlxuICAgICAgICBzaGlwV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCd2ZXJ0aWNhbCcpO1xuICAgICAgICBzaGlwV3JhcC5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsJyk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG5cbiAgc2hpcFdyYXAuc2V0QXR0cmlidXRlKCdsZW5ndGgnLCBzaXplKTtcblxuICBzd2l0Y2ggKHNpemUpIHtcbiAgICBjYXNlIDU6XG4gICAgICBzaGlwV3JhcC5jbGFzc0xpc3QuYWRkKCdjYXJyaWVyJyk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgNDpcbiAgICAgIHNoaXBXcmFwLmNsYXNzTGlzdC5hZGQoJ2JhdHRsZXNoaXAnKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAzOlxuICAgICAgc2hpcFdyYXAuY2xhc3NMaXN0LmFkZCgnY3J1aXNlcicpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDI6XG4gICAgICBzaGlwV3JhcC5jbGFzc0xpc3QuYWRkKCdzdWJtYXJpbmUnKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplIC0gMTsgaSsrKSB7XG4gICAgbGV0IHNoaXBDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcENlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgIHNoaXBXcmFwLmFwcGVuZENoaWxkKHNoaXBDZWxsKTtcbiAgfVxuXG4gIHNoaXBXcmFwLmFwcGVuZENoaWxkKHJvb3RDZWxsKTtcblxuICByZXR1cm4gc2hpcFdyYXA7XG59XG5mdW5jdGlvbiBjbGVhckhpZ2hsaWdodERvbShjZWxscykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGlmIChjZWxsc1tpXVtqXS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZ2hsaWdodCcpKSB7XG4gICAgICAgIGNlbGxzW2ldW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkUHJlR2FtZShuYW1lKSB7XG4gIGNvbnN0IGludHJvSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGludHJvSGVhZGluZy5pZCA9ICdpbnRyby1oZWFkJztcbiAgaW50cm9IZWFkaW5nLnRleHRDb250ZW50ID0gYFBsYWNlIHlvdXIgc2hpcHMgYWRtaXJhbCAke25hbWV9YDtcblxuICBhbmNob3JEaXYuYXBwZW5kQ2hpbGQoaW50cm9IZWFkaW5nKTtcblxuICBjb25zdCBibGFua0JvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGxldCBib2FyZERvbSA9IGJvYXJkVG9Eb20oYmxhbmtCb2FyZCk7XG4gIGJvYXJkRG9tLmlkID0gJ3ByZWdhbWVCb2FyZCc7XG5cbiAgY29uc3QgZG9tQ2VsbHMgPSBib2FyZERvbS5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuICBsZXQgY2VsbHMgPSBbLi4uQXJyYXkoMTApXS5tYXAoKCkgPT4gQXJyYXkoMTApKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSBjZWxsc1tpXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIHJvd1tqXSA9IGRvbUNlbGxzW2kgKyBqICogMTBdO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgY29uc3QgY2VsbCA9IGNlbGxzW2ldW2pdO1xuXG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWdnaW5nJyk7XG4gICAgICAgIGNvbnN0IGxlbiA9IHBhcnNlSW50KHNoaXAuZ2V0QXR0cmlidXRlKCdsZW5ndGgnKSk7XG5cbiAgICAgICAgaWYgKHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJykpIHtcbiAgICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IGxlbjsgeisrKSB7XG4gICAgICAgICAgICBpZiAobGVuIC0gMSArIGkgPCAxMCkge1xuICAgICAgICAgICAgICBjZWxsc1tpICsgel1bal0uY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucygndmVydGljYWwnKSkge1xuICAgICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgbGVuOyB6KyspIHtcbiAgICAgICAgICAgIGlmIChqIC0gbGVuICsgMSA+PSAwKSB7XG4gICAgICAgICAgICAgIGNlbGxzW2ldW2ogLSB6XS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnZ2luZycpO1xuICAgICAgICBjb25zdCBsZW4gPSBwYXJzZUludChzaGlwLmdldEF0dHJpYnV0ZSgnbGVuZ3RoJykpO1xuXG4gICAgICAgIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpKSB7XG4gICAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCBsZW47IHorKykge1xuICAgICAgICAgICAgaWYgKGkgKyB6IDwgMTApIHtcbiAgICAgICAgICAgICAgY2VsbHNbaSArIHpdW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykpIHtcbiAgICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IGxlbjsgeisrKSB7XG4gICAgICAgICAgICBpZiAoaiAtIHogPj0gMCkge1xuICAgICAgICAgICAgICBjZWxsc1tpXVtqIC0gel0uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgc2hpcFBsYWNlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBkb21TaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWdnaW5nJyk7XG4gICAgICAgIGNvbnN0IGxlbiA9IHBhcnNlSW50KGRvbVNoaXAuZ2V0QXR0cmlidXRlKCdsZW5ndGgnKSk7XG5cbiAgICAgICAgaWYgKGRvbVNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJykpIHtcbiAgICAgICAgICBpZiAoaSArIGxlbiAtIDEgPCAxMCkge1xuICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gJ3gnO1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IFNoaXAobGVuLCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICBpZiAoYmxhbmtCb2FyZC5wbGFjZVNoaXAoW2ksIGpdLCBzaGlwKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBhbGVydCgnQ0FOTk9UIFBMQUNFIFNISVAgT04gVE9QIE9GIFNISVAnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNoaXBQbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb21TaGlwLmNsYXNzTGlzdC5jb250YWlucygndmVydGljYWwnKSkge1xuICAgICAgICAgIGlmIChqIC0gbGVuICsgMSA8IDEwKSB7XG4gICAgICAgICAgICBsZXQgb3JpZW50YXRpb24gPSAneSc7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gU2hpcChsZW4sIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgIGlmIChibGFua0JvYXJkLnBsYWNlU2hpcChbaSwgal0sIHNoaXApID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIGFsZXJ0KCdDQU5OT1QgUExBQ0UgU0hJUCBPTiBUT1AgT0YgU0hJUCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2hpcFBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzaGlwUGxhY2VkKSB7XG4gICAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCBsZW47IHorKykge1xuICAgICAgICAgICAgaWYgKGRvbVNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJykpIHtcbiAgICAgICAgICAgICAgY2VsbHNbaSArIHpdW2pdLmNsYXNzTGlzdC5hZGQoJ29jY3VwaWVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZG9tU2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykpIHtcbiAgICAgICAgICAgICAgY2VsbHNbaV1baiAtIHpdLmNsYXNzTGlzdC5hZGQoJ29jY3VwaWVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGRvbVNoaXAuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dhYmxlJyk7XG4gICAgICAgICAgZG9tU2hpcC5jbGFzc0xpc3QuYWRkKCdkZWFjdGl2YXRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFySGlnaGxpZ2h0RG9tKGNlbGxzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFuY2hvckRpdi5hcHBlbmRDaGlsZChib2FyZERvbSk7XG5cbiAgY29uc3QgZHJhZ2dhYmxlV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkcmFnZ2FibGVXcmFwLmlkID0gJ2RyYWdnYWJsZS13cmFwJztcblxuICBjb25zdCBjYXJyaWVyV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJyaWVyV3JhcC5hcHBlbmRDaGlsZChjcmVhdGVTaGlwRG9tKDUpKTtcbiAgZHJhZ2dhYmxlV3JhcC5hcHBlbmRDaGlsZChjYXJyaWVyV3JhcCk7XG5cbiAgY29uc3QgYmF0dGxlV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBiYXR0bGVXcmFwLmFwcGVuZENoaWxkKGNyZWF0ZVNoaXBEb20oNCkpO1xuICBkcmFnZ2FibGVXcmFwLmFwcGVuZENoaWxkKGJhdHRsZVdyYXApO1xuXG4gIGNvbnN0IGNydWlzZXJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNydWlzZXJXcmFwLmFwcGVuZENoaWxkKGNyZWF0ZVNoaXBEb20oNCkpO1xuICBkcmFnZ2FibGVXcmFwLmFwcGVuZENoaWxkKGNydWlzZXJXcmFwKTtcblxuICBjb25zdCBzdWJtYXJpbmVXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHN1Ym1hcmluZVdyYXAuYXBwZW5kQ2hpbGQoY3JlYXRlU2hpcERvbSgzKSk7XG4gIGRyYWdnYWJsZVdyYXAuYXBwZW5kQ2hpbGQoc3VibWFyaW5lV3JhcCk7XG5cbiAgY29uc3QgZGVzdHJveWVyV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXN0cm95ZXJXcmFwLmFwcGVuZENoaWxkKGNyZWF0ZVNoaXBEb20oMikpO1xuICBkcmFnZ2FibGVXcmFwLmFwcGVuZENoaWxkKGRlc3Ryb3llcldyYXApO1xuXG4gIGFuY2hvckRpdi5hcHBlbmRDaGlsZChkcmFnZ2FibGVXcmFwKTtcblxuICBjb25zdCBidG5XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ0bldyYXAuY2xhc3NMaXN0LmFkZCgnYnRuLXdyYXAnKTtcbiAgY29uc3QgY29udGludWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29udGludWVCdXR0b24udGV4dENvbnRlbnQgPSAnQ29udGludWUnO1xuICBjb250aW51ZUJ1dHRvbi5pZCA9ICdjb250aW51ZUJ0bic7XG5cbiAgY29udGludWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbGV0IHNoaXBzID0gZG9jdW1lbnRcbiAgICAgIC5nZXRFbGVtZW50QnlJZCgnZHJhZ2dhYmxlLXdyYXAnKVxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWFjdGl2YXRlZCcpO1xuXG4gICAgaWYgKHNoaXBzLmxlbmd0aCA9PT0gNSkge1xuICAgICAgY29uc29sZS5sb2coJ0dhbWUgc3RhcnRpbmcnKTtcbiAgICAgIGNvbnN0IGh1bWFuUGxheWVyID0gUGxheWVyKG5hbWUsIGJsYW5rQm9hcmQpO1xuICAgICAgY29uc3QgY3B1UGxheWVyID0gUGxheWVyKCdDUFUnLCBibGFua0JvYXJkKTtcblxuICAgICAgY2xlYXJTY3JlZW4oKTtcbiAgICAgIHN0YXJ0R2FtZShodW1hblBsYXllciwgY3B1UGxheWVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ1BsZWFzZSBwbGFjZSBhbGwgeW91ciBzaGlwcyBvbiB0aGUgYm9hcmQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIGJ0bldyYXAuYXBwZW5kQ2hpbGQoY29udGludWVCdXR0b24pO1xuICBhbmNob3JEaXYuYXBwZW5kQ2hpbGQoYnRuV3JhcCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyU2NyZWVuKCkge1xuICBhbmNob3JEaXYuaW5uZXJIVE1MID0gJyc7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlQm9hcmQoKSB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IGNhcnJpZXIgPSBTaGlwKDUsICd4Jyk7XG4gIGNvbnN0IGJhdHRsZXNoaXAgPSBTaGlwKDQsICd4Jyk7XG4gIGNvbnN0IGNydWlzZXIgPSBTaGlwKDMsICd4Jyk7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IFNoaXAoMywgJ3gnKTtcbiAgY29uc3QgZGVzdHJveWVyID0gU2hpcCgyLCAneCcpO1xuXG4gIHBsYXllckJvYXJkLnBsYWNlU2hpcChbMCwgMl0sIGNhcnJpZXIpO1xuXG4gIGJhdHRsZXNoaXAubmludGV5RGVncmVlcygpO1xuICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoWzgsIDVdLCBiYXR0bGVzaGlwKTtcblxuICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoWzEsIDRdLCBjcnVpc2VyKTtcblxuICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoWzEsIDZdLCBzdWJtYXJpbmUpO1xuICBkZXN0cm95ZXIubmludGV5RGVncmVlcygpO1xuXG4gIHBsYXllckJvYXJkLnBsYWNlU2hpcChbNiwgNV0sIGRlc3Ryb3llcik7XG5cbiAgcmV0dXJuIHBsYXllckJvYXJkO1xufVxuXG5mdW5jdGlvbiBib2FyZFRvRG9tKGJvYXJkLCBkcmF3U2hpcCA9IGZhbHNlKSB7XG4gIGNvbnN0IGJvYXJkV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBib2FyZFdyYXAuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBjb25zdCBjZWxsVmFsID0gYm9hcmQuZ2V0Q29vcmRpbmF0ZShbaiwgaV0pO1xuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG5cbiAgICAgIGlmICgoY2VsbFZhbCA9PT0gMSkgJiBkcmF3U2hpcCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgIH1cblxuICAgICAgYm9hcmRXcmFwLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib2FyZFdyYXA7XG59XG5cbmZ1bmN0aW9uIGxvYWRQbGF5QXJlYShodW1hblBsYXllciwgY3B1UGxheWVyKSB7XG4gIGNvbnN0IHBsYXlBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBsYXlBcmVhLmlkID0gJ3BsYXktYXJlYS13cmFwJztcblxuICBjb25zdCB0dXJuSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHR1cm5IZWFkaW5nLmlubmVySFRNTCA9ICc8c3BhbiBpZCA9IFwidHVybi1pbmRpY2F0b3JcIj48L3NwYW4+cyBUdXJuLic7XG5cbiAgcGxheUFyZWEuYXBwZW5kQ2hpbGQodHVybkhlYWRpbmcpO1xuXG4gIGNvbnN0IHBsYXllclNwbGl0V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwbGF5ZXJTcGxpdFdyYXAuY2xhc3NMaXN0LmFkZCgnc3BsaXQnKTtcblxuICBwbGF5QXJlYS5hcHBlbmRDaGlsZChwbGF5ZXJTcGxpdFdyYXApO1xuXG4gIGNvbnN0IHBsYXllckNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwbGF5ZXJDb2x1bW4uaWQgPSAnaHVtYW4tY29sdW1uJztcblxuICBjb25zdCBjcHVDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3B1Q29sdW1uLmlkID0gJ2NwdS1jb2x1bW4nO1xuXG4gIGFuY2hvckRpdi5hcHBlbmRDaGlsZChwbGF5QXJlYSk7XG5cbiAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHBsYXllck5hbWUudGV4dENvbnRlbnQgPSBodW1hblBsYXllci5nZXROYW1lKCk7XG5cbiAgcGxheWVyQ29sdW1uLmFwcGVuZENoaWxkKHBsYXllck5hbWUpO1xuICBwbGF5ZXJDb2x1bW4uYXBwZW5kQ2hpbGQoYm9hcmRUb0RvbShodW1hblBsYXllci5nZXRCb2FyZCgpLCB0cnVlKSk7XG5cbiAgY29uc3QgY3B1TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNwdU5hbWUudGV4dENvbnRlbnQgPSBjcHVQbGF5ZXIuZ2V0TmFtZSgpO1xuXG4gIGNwdUNvbHVtbi5hcHBlbmRDaGlsZChjcHVOYW1lKTtcbiAgY3B1Q29sdW1uLmFwcGVuZENoaWxkKGJvYXJkVG9Eb20oY3B1UGxheWVyLmdldEJvYXJkKCkpKTtcblxuICBwbGF5ZXJTcGxpdFdyYXAuYXBwZW5kQ2hpbGQocGxheWVyQ29sdW1uKTtcbiAgcGxheWVyU3BsaXRXcmFwLmFwcGVuZENoaWxkKGNwdUNvbHVtbik7XG59XG5cbmZ1bmN0aW9uIGFkZExpc3RlbmVyVG9DZWxscyhcbiAgaHVtYW5Cb2FyZERvbSxcbiAgY3B1Qm9hcmREb20sXG4gIGNwdVBsYXllcixcbiAgaHVtYW5QbGF5ZXJcbikge1xuICBjb25zdCBodW1hbkNlbGxzID0gaHVtYW5Cb2FyZERvbVswXS5jaGlsZHJlbjtcbiAgY29uc3QgY3B1Q2VsbHMgPSBjcHVCb2FyZERvbVswXS5jaGlsZHJlbjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGNwdUNlbGxzW2kgKiAxMCArIGpdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB7XG4gICAgICAgICAgaWYgKGNwdVBsYXllci5nZXRCb2FyZCgpLmdldENvb3JkaW5hdGUoW2osIGldKSA9PT0gMSkge1xuICAgICAgICAgICAgY3B1Q2VsbHNbaSAqIDEwICsgal0uY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChodW1hblBsYXllci5nZXRCb2FyZCgpLmdldENvb3JkaW5hdGUoW2osIGldKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGh1bWFuUGxheWVyLmF0dGFja0JvYXJkKFtqLCBpXSwgY3B1UGxheWVyLmdldEJvYXJkKCkpO1xuICAgICAgICAgICAgY3B1Q2VsbHNbaSAqIDEwICsgal0uY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICB1cGRhdGVJbmRpY2F0b3IoJ0NQVScpO1xuXG4gICAgICAgICAgICBjb25zdCBhdHRhY2tJbmRleCA9IGdldFJhbmRvbUludChyYW5kb21Qb3MubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IGF0dGFja1BvcyA9IHJhbmRvbVBvcy5zcGxpY2UoYXR0YWNrSW5kZXgsIDEpWzBdO1xuICAgICAgICAgICAgbGV0IHkgPSBhdHRhY2tQb3NbMV07XG4gICAgICAgICAgICBsZXQgeCA9IGF0dGFja1Bvc1swXTtcblxuICAgICAgICAgICAgaWYgKGh1bWFuUGxheWVyLmdldEJvYXJkKCkuZ2V0Q29vcmRpbmF0ZShbeSwgeF0pID09PSAxKSB7XG4gICAgICAgICAgICAgIGh1bWFuQ2VsbHNbYXR0YWNrUG9zWzBdICogMTAgKyBhdHRhY2tQb3NbMV1dLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICAgICAgJ3NoaXAnXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBodW1hbkNlbGxzW2F0dGFja1Bvc1swXSAqIDEwICsgYXR0YWNrUG9zWzFdXS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcblxuICAgICAgICAgICAgdXBkYXRlSW5kaWNhdG9yKGh1bWFuUGxheWVyLmdldE5hbWUoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlSW5kaWNhdG9yKG5hbWUgPSAnUGxheWVyIDEnKSB7XG4gIGNvbnN0IHR1cm5JbmRpY2F0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHVybi1pbmRpY2F0b3InKTtcbiAgaWYgKHRyYWNrZXIuZ2V0VHVybigpID09PSAnSCcpIHtcbiAgICB0dXJuSW5kaWNhdG9yLnRleHRDb250ZW50ID0gbmFtZTtcbiAgfVxuICBpZiAodHJhY2tlci5nZXRUdXJuKCkgPT09ICdDJykge1xuICAgIHR1cm5JbmRpY2F0b3IudGV4dENvbnRlbnQgPSAnQ1BVJztcbiAgfVxuICB0cmFja2VyLm5leHRUdXJuKCk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZShodW1hblBsYXllciwgY3B1UGxheWVyKSB7XG4gIGlmIChcbiAgICBodW1hblBsYXllci5nZXRCb2FyZCgpLmdldFNoaXBzKCkubGVuZ3RoID09PSA1ICYmXG4gICAgY3B1UGxheWVyLmdldEJvYXJkKCkuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDVcbiAgKSB7XG4gICAgY29uc3QgaHVtYW5Eb21Cb2FyZCA9IGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoJ2h1bWFuLWNvbHVtbicpXG4gICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm9hcmQnKTtcblxuICAgIGNvbnN0IGNwdURvbUJvYXJkID0gZG9jdW1lbnRcbiAgICAgIC5nZXRFbGVtZW50QnlJZCgnY3B1LWNvbHVtbicpXG4gICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm9hcmQnKTtcblxuICAgIGFkZExpc3RlbmVyVG9DZWxscyhodW1hbkRvbUJvYXJkLCBjcHVEb21Cb2FyZCwgY3B1UGxheWVyLCBodW1hblBsYXllcik7XG5cbiAgICB1cGRhdGVJbmRpY2F0b3IoaHVtYW5QbGF5ZXIuZ2V0TmFtZSgpKTtcbiAgfVxufVxuXG5leHBvcnQgeyBsb2FkTWFpbkFzc2VzdHMgfTtcbiIsImNvbnN0IFBsYXllciA9IChzdHIsIG9iakJvYXJkKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBzdHI7XG4gIGNvbnN0IGJvYXJkID0gb2JqQm9hcmQ7XG5cbiAgY29uc3QgYXR0YWNrQm9hcmQgPSAoY29vcmQsIGJvYXJkVG9BdHRhY2spID0+IHtcbiAgICBpZiAoYm9hcmRUb0F0dGFjay5nZXRDb29yZGluYXRlKGNvb3JkKSAhPT0gLTEpIHtcbiAgICAgIGJvYXJkVG9BdHRhY2sucmVjaWV2ZUhpdChjb29yZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH07XG5cbiAgcmV0dXJuIHsgYXR0YWNrQm9hcmQsIGdldE5hbWUsIGdldEJvYXJkIH07XG59O1xuZXhwb3J0IHsgUGxheWVyIH07XG4iLCJjb25zdCBTaGlwID0gKGxlbmd0aCwgbykgPT4ge1xuICBsZXQgc2hpcEFycmF5ID0gW107XG4gIGxldCBvcmllbnRhdGlvbiA9IG87XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgIHNoaXBBcnJheS5wdXNoKDEpO1xuICB9XG5cbiAgY29uc3QgZ2V0U2hpcCA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcEFycmF5O1xuICB9O1xuXG4gIGNvbnN0IGdldExlbiA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcEFycmF5Lmxlbmd0aDtcbiAgfTtcblxuICBjb25zdCBnZXRTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiAhc2hpcEFycmF5LmluY2x1ZGVzKDEpO1xuICB9O1xuXG4gIGNvbnN0IGdldE9yaWVudGF0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBvcmllbnRhdGlvbjtcbiAgfTtcblxuICBjb25zdCBuaW50ZXlEZWdyZWVzID0gKCkgPT4ge1xuICAgIHN3aXRjaCAob3JpZW50YXRpb24pIHtcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICBvcmllbnRhdGlvbiA9ICd5JztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3knOlxuICAgICAgICBvcmllbnRhdGlvbiA9ICd4JztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhpdCA9IChuKSA9PiB7XG4gICAgaWYgKG4gPiBsZW5ndGggfHwgbiA8IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaGlwQXJyYXlbbl0gPSAwO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHsgZ2V0U2hpcCwgZ2V0U3VuaywgaGl0LCBnZXRPcmllbnRhdGlvbiwgZ2V0TGVuLCBuaW50ZXlEZWdyZWVzIH07XG59O1xuXG5leHBvcnQgeyBTaGlwIH07XG4iLCJjb25zdCBUdXJuVHJhY2tlciA9ICh0dXJuKSA9PiB7XG4gIGxldCBjdXJyVHVybiA9IHR1cm47XG5cbiAgY29uc3QgZ2V0VHVybiA9ICgpID0+IHtcbiAgICByZXR1cm4gY3VyclR1cm47XG4gIH07XG5cbiAgY29uc3QgbmV4dFR1cm4gPSAoKSA9PiB7XG4gICAgc3dpdGNoIChjdXJyVHVybikge1xuICAgICAgY2FzZSAnSCc6XG4gICAgICAgIGN1cnJUdXJuID0gJ0MnO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnQyc6XG4gICAgICAgIGN1cnJUdXJuID0gJ0gnO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IGdldFR1cm4sIG5leHRUdXJuIH07XG59O1xuXG5leHBvcnQgeyBUdXJuVHJhY2tlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgY3NzIGZyb20gJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGxvYWRNYWluQXNzZXN0cyB9IGZyb20gJy4vbG9hZCc7XG5cbmxvYWRNYWluQXNzZXN0cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9