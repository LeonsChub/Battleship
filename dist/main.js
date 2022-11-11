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

    if (ship.getOrientation() === 'y') {
      for (let index = 0; index < ship.getLen(); index++) {
        checkArray.push(board[y - index][x]);
        coordArray.push([y - index, x]);
      }
    }
    if (ship.getOrientation() === 'x') {
      for (let index = 0; index < ship.getLen(); index++) {
        checkArray.push(board[y][x + index]);
        coordArray.push([y, x + index]);
      }
    }

    if (!checkArray.includes(1)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0RBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbG9hZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy90dXJuVHJhY2tlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkOndnaHRAMzAwOzUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuYm9keXtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmNGZmODE7XFxufVxcbjpyb290e1xcblxcdGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRvdGFsLXdyYXB7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuZm9ybXtcXG5cXHRtYXJnaW4tdG9wOiAxMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWZsb3c6IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaW5wdXQtd3JhcHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZmxvdzogY29sdW1uO1xcbn1cXG4uYnRuLXdyYXB7XFxuXFx0bWFyZ2luLWJsb2NrOiAxcmVtO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5jZWxse1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2VsbC5zaGlwe1xcblxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuLmJvYXJke1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBnYXA6IDA7XFxufVxcbiNwbGF5LWFyZWEtd3JhcHtcXG5cXHRwYWRkaW5nLXRvcDogNXZoO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1mbG93OiBjb2x1bW47XFxuXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3BsYXktYXJlYS13cmFwID4gLnNwbGl0e1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcblxcdHdpZHRoOiA4MCU7XFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuLmNlbGwuaGl0e1xcblxcdGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbn1cXG5cXG4uY2VsbC5zaGlwLmhpdHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU2LCAxOSwgMTkpO1xcbn1cXG4jaW50cm8taGVhZHtcXG5cXHR3aWR0aDogZml0LWNvbnRlbnQ7XFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXG5cXHRmb250LXNpemU6IDJlbTtcXG5cXHRtYXJnaW4tYmxvY2s6IDFlbTtcXG59XFxuXFxuI3ByZWdhbWVCb2FyZHtcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcblxcdHdpZHRoOiAyMGVtO1xcblxcdGhlaWdodDogMjBlbTtcXG59XFxuXFxuI2RyYWdnYWJsZS13cmFwe1xcblxcdHdpZHRoOiBmaXQtY29udGVudDtcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFxuXFx0bWFyZ2luLXRvcDogMjRweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XFxuXFx0cGFkZGluZzogMC41ZW07XFxufVxcbiNkcmFnZ2FibGUtd3JhcCA+IGRpdntcXG5cXHR3aWR0aDogN3JlbTtcXG5cXHRoZWlnaHQ6IDdyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4jZHJhZ2dhYmxlLXdyYXAgLnNoaXAtd3JhcHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcblxcdG1hcmdpbjogYXV0bztcXG59XFxuI2RyYWdnYWJsZS13cmFwIC5zaGlwLXdyYXAuaG9yaXpvbnRhbHtcXG5cXHRmbGV4LWZsb3c6IHJvdztcXG59XFxuI2RyYWdnYWJsZS13cmFwIC5zaGlwLXdyYXAudmVydGljYWx7XFxuXFx0ZmxleC1mbG93OiBjb2x1bW47XFxufVxcblxcbiNkcmFnZ2FibGUtd3JhcCAuc2hpcC13cmFwLmNhcnJpZXJ7XFxuXFx0d2lkdGg6IDgwJTtcXG59XFxuXFxuI2RyYWdnYWJsZS13cmFwIC5zaGlwLXdyYXAuYmF0dGxlc2hpcHtcXG5cXHR3aWR0aDogNjUlO1xcbn1cXG5cXG4jZHJhZ2dhYmxlLXdyYXAgLnNoaXAtd3JhcC5jcnVpc2Vye1xcblxcdHdpZHRoOiA0OCU7XFxufVxcbiNkcmFnZ2FibGUtd3JhcCAuc2hpcC13cmFwLnN1Ym1hcmluZXtcXG5cXHR3aWR0aDogMzMlO1xcbn1cXG5cXG4jZHJhZ2dhYmxlLXdyYXAgLmNlbGx7XFxuXFx0d2lkdGg6IDFyZW07XFxuXFx0aGVpZ2h0OiAxcmVtO1xcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG5cXG4uZHJhZ2dhYmxle1xcblxcdGN1cnNvcjogZ3JhYmJpbmc7XFxufVxcblxcbi5kcmFnZ2FibGUuZHJhZ2dpbmcgLmNlbGx7XFxuXFx0d2lkdGg6IDJyZW07XFxuXFx0aGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4jcHJlZ2FtZUJvYXJkIC5jZWxsLmhpZ2hsaWdodHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDkyLCA5Mik7XFxufVxcblxcbiNwcmVnYW1lQm9hcmQgLmNlbGwub2NjdXBpZWR7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjpsaWdodGJsdWU7XFxufVxcblxcbiNkcmFnZ2FibGUtd3JhcCAuZGVhY3RpdmF0ZWR7XFxuXFx0dmlzaWJpbGl0eTpoaWRkZW47XFxufVxcblxcbiNjb250aW51ZUJ0bntcXG5cXHRmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxuXFx0d2lkdGg6IDVlbTtcXG5cXHR3aWR0aDogZml0LWNvbnRlbnQ7XFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xcblxcdGJvcmRlcjogNHB4IHNvbGlkIGxpZ2h0Ymx1ZTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jY29udGludWVCdG46aG92ZXJ7XFxuXFx0Ym9yZGVyOiA0cHggc29saWQgbmF2eTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdHBhZGRpbmc6IDAuMmVtO1xcblxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogMXMgY29sb3I7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiAxcyBib3JkZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsaUNBQWlDO0FBQ2xDOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7O0NBRWIsYUFBYTtDQUNiLHVCQUF1Qjs7QUFFeEI7QUFDQTtDQUNDLGVBQWU7Q0FDZixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYix1QkFBdUI7QUFDeEI7QUFDQTtDQUNDLHVCQUF1QjtDQUN2Qix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQywyQkFBMkI7QUFDNUI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxNQUFNO0FBQ1I7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsaUJBQWlCOztDQUVqQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCOztDQUU5QixVQUFVO0NBQ1YsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQywwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxrQ0FBa0M7QUFDbkM7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsNkJBQTZCOztDQUU3QixnQkFBZ0I7Q0FDaEIsMkJBQTJCO0NBQzNCLGNBQWM7QUFDZjtBQUNBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxZQUFZOztDQUVaLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCOztDQUV2QixZQUFZO0FBQ2I7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLG1CQUFtQjs7Q0FFbkIsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGlDQUFpQztBQUNsQzs7QUFFQTtDQUNDLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGlDQUFpQztDQUNqQyxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixnQkFBZ0I7O0NBRWhCLFlBQVk7Q0FDWixzQkFBc0I7Q0FDdEIsMkJBQTJCO0NBQzNCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QiwyQkFBMkI7Q0FDM0IsWUFBWTtDQUNaLGNBQWM7O0NBRWQsNEJBQTRCO0NBQzVCLDZCQUE2QjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pc3dhbGQ6d2dodEAzMDA7NTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5ib2R5e1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2Y0ZmY4MTtcXG59XFxuOnJvb3R7XFxuXFx0Zm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udG90YWwtd3JhcHtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbn1cXG5mb3Jte1xcblxcdG1hcmdpbi10b3A6IDEwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZmxvdzogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5pbnB1dC13cmFwe1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1mbG93OiBjb2x1bW47XFxufVxcbi5idG4td3JhcHtcXG5cXHRtYXJnaW4tYmxvY2s6IDFyZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmNlbGx7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jZWxsLnNoaXB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG5cXG4uYm9hcmR7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdhcDogMDtcXG59XFxuI3BsYXktYXJlYS13cmFwe1xcblxcdHBhZGRpbmctdG9wOiA1dmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWZsb3c6IGNvbHVtbjtcXG5cXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcGxheS1hcmVhLXdyYXAgPiAuc3BsaXR7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcbn1cXG4uY2VsbC5oaXR7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxufVxcblxcbi5jZWxsLnNoaXAuaGl0e1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxNTYsIDE5LCAxOSk7XFxufVxcbiNpbnRyby1oZWFke1xcblxcdHdpZHRoOiBmaXQtY29udGVudDtcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcblxcdGZvbnQtc2l6ZTogMmVtO1xcblxcdG1hcmdpbi1ibG9jazogMWVtO1xcbn1cXG5cXG4jcHJlZ2FtZUJvYXJke1xcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuXFx0d2lkdGg6IDIwZW07XFxuXFx0aGVpZ2h0OiAyMGVtO1xcbn1cXG5cXG4jZHJhZ2dhYmxlLXdyYXB7XFxuXFx0d2lkdGg6IGZpdC1jb250ZW50O1xcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXG5cXHRtYXJnaW4tdG9wOiAyNHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcXG5cXHRwYWRkaW5nOiAwLjVlbTtcXG59XFxuI2RyYWdnYWJsZS13cmFwID4gZGl2e1xcblxcdHdpZHRoOiA3cmVtO1xcblxcdGhlaWdodDogN3JlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbiNkcmFnZ2FibGUtd3JhcCAuc2hpcC13cmFwe1xcblxcdGhlaWdodDogMTAwJTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFx0bWFyZ2luOiBhdXRvO1xcbn1cXG4jZHJhZ2dhYmxlLXdyYXAgLnNoaXAtd3JhcC5ob3Jpem9udGFse1xcblxcdGZsZXgtZmxvdzogcm93O1xcbn1cXG4jZHJhZ2dhYmxlLXdyYXAgLnNoaXAtd3JhcC52ZXJ0aWNhbHtcXG5cXHRmbGV4LWZsb3c6IGNvbHVtbjtcXG59XFxuXFxuI2RyYWdnYWJsZS13cmFwIC5zaGlwLXdyYXAuY2FycmllcntcXG5cXHR3aWR0aDogODAlO1xcbn1cXG5cXG4jZHJhZ2dhYmxlLXdyYXAgLnNoaXAtd3JhcC5iYXR0bGVzaGlwe1xcblxcdHdpZHRoOiA2NSU7XFxufVxcblxcbiNkcmFnZ2FibGUtd3JhcCAuc2hpcC13cmFwLmNydWlzZXJ7XFxuXFx0d2lkdGg6IDQ4JTtcXG59XFxuI2RyYWdnYWJsZS13cmFwIC5zaGlwLXdyYXAuc3VibWFyaW5le1xcblxcdHdpZHRoOiAzMyU7XFxufVxcblxcbiNkcmFnZ2FibGUtd3JhcCAuY2VsbHtcXG5cXHR3aWR0aDogMXJlbTtcXG5cXHRoZWlnaHQ6IDFyZW07XFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcblxcbi5kcmFnZ2FibGV7XFxuXFx0Y3Vyc29yOiBncmFiYmluZztcXG59XFxuXFxuLmRyYWdnYWJsZS5kcmFnZ2luZyAuY2VsbHtcXG5cXHR3aWR0aDogMnJlbTtcXG5cXHRoZWlnaHQ6IDJyZW07XFxufVxcblxcbiNwcmVnYW1lQm9hcmQgLmNlbGwuaGlnaGxpZ2h0e1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgOTIsIDkyKTtcXG59XFxuXFxuI3ByZWdhbWVCb2FyZCAuY2VsbC5vY2N1cGllZHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Ymx1ZTtcXG59XFxuXFxuI2RyYWdnYWJsZS13cmFwIC5kZWFjdGl2YXRlZHtcXG5cXHR2aXNpYmlsaXR5OmhpZGRlbjtcXG59XFxuXFxuI2NvbnRpbnVlQnRue1xcblxcdGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXG5cXHR3aWR0aDogNWVtO1xcblxcdHdpZHRoOiBmaXQtY29udGVudDtcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IG5hdnk7XFxuXFx0Ym9yZGVyOiA0cHggc29saWQgbGlnaHRibHVlO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNjb250aW51ZUJ0bjpob3ZlcntcXG5cXHRib3JkZXI6IDRweCBzb2xpZCBuYXZ5O1xcblxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0cGFkZGluZzogMC4yZW07XFxuXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiAxcyBjb2xvcjtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IDFzIGJvcmRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gW1xuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgXTtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IHtcbiAgICByZXR1cm4gYm9hcmQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0Q29vcmRpbmF0ZSA9IChjb29yZCkgPT4ge1xuICAgIGxldCB5ID0gY29vcmRbMF07XG4gICAgbGV0IHggPSBjb29yZFsxXTtcblxuICAgIHJldHVybiBib2FyZFt5XVt4XTtcbiAgfTtcblxuICBjb25zdCBibG93Q29vcmRpbmF0ZSA9IChjb29yZCkgPT4ge1xuICAgIGxldCB5ID0gY29vcmRbMF07XG4gICAgbGV0IHggPSBjb29yZFsxXTtcblxuICAgIGJvYXJkW3ldW3hdID0gLTE7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hpcEJ5Q29vcmRpbmF0ZSA9IChjb29yZCkgPT4ge1xuICAgIGxldCBzaGlwVG9SZXR1cm4gPSBudWxsO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudFswXSA9PT0gY29vcmRbMF0gJiYgZWxlbWVudFsxXSA9PT0gY29vcmRbMV0pIHtcbiAgICAgICAgICBzaGlwVG9SZXR1cm4gPSBzaGlwO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2hpcFRvUmV0dXJuO1xuICB9O1xuXG4gIGNvbnN0IGdldFNoaXBzID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwcztcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoY29vcmQsIHNoaXApID0+IHtcbiAgICBjb25zdCB4ID0gY29vcmRbMV07XG4gICAgY29uc3QgeSA9IGNvb3JkWzBdO1xuXG4gICAgY29uc3QgY2hlY2tBcnJheSA9IFtdOyAvKmFycmF5IG1lYW50IGNoZWNrIGlmIGEgc2hpcCBpcyBhbHJlYWR5UGxhY2VkICovXG4gICAgY29uc3QgY29vcmRBcnJheSA9IFtdOyAvKmFycmF5IG1lYW50IHRvIHRyYWNrIHNoaXAgY29vcmRpbmF0ZXMgKi9cblxuICAgIGlmIChzaGlwLmdldE9yaWVudGF0aW9uKCkgPT09ICd5Jykge1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNoaXAuZ2V0TGVuKCk7IGluZGV4KyspIHtcbiAgICAgICAgY2hlY2tBcnJheS5wdXNoKGJvYXJkW3kgLSBpbmRleF1beF0pO1xuICAgICAgICBjb29yZEFycmF5LnB1c2goW3kgLSBpbmRleCwgeF0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hpcC5nZXRPcmllbnRhdGlvbigpID09PSAneCcpIHtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaGlwLmdldExlbigpOyBpbmRleCsrKSB7XG4gICAgICAgIGNoZWNrQXJyYXkucHVzaChib2FyZFt5XVt4ICsgaW5kZXhdKTtcbiAgICAgICAgY29vcmRBcnJheS5wdXNoKFt5LCB4ICsgaW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNoZWNrQXJyYXkuaW5jbHVkZXMoMSkpIHtcbiAgICAgIHNoaXBzLnB1c2goeyBzaGlwUG9pbnRlcjogc2hpcCwgY29vcmRpbmF0ZXM6IGNvb3JkQXJyYXkgfSk7XG4gICAgICBpZiAoc2hpcC5nZXRPcmllbnRhdGlvbigpID09PSAneScpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNoaXAuZ2V0TGVuKCk7IGluZGV4KyspIHtcbiAgICAgICAgICBib2FyZFt5IC0gaW5kZXhdW3hdID0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNoaXAuZ2V0T3JpZW50YXRpb24oKSA9PT0gJ3gnKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaGlwLmdldExlbigpOyBpbmRleCsrKSB7XG4gICAgICAgICAgYm9hcmRbeV1beCArIGluZGV4XSA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlY2lldmVIaXQgPSAoY29vcmQpID0+IHtcbiAgICBpZiAoZ2V0Q29vcmRpbmF0ZShjb29yZCkgIT09IC0xKSB7XG4gICAgICBpZiAoZ2V0Q29vcmRpbmF0ZShjb29yZCkgPT09IDEpIHtcbiAgICAgICAgY29uc3QgaGl0U2hpcCA9IGdldFNoaXBCeUNvb3JkaW5hdGUoY29vcmQpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGl0U2hpcC5jb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGhpdFNoaXAuY29vcmRpbmF0ZXNbaV1bMF0gPT09IGNvb3JkWzBdICYmXG4gICAgICAgICAgICBoaXRTaGlwLmNvb3JkaW5hdGVzW2ldWzFdID09PSBjb29yZFsxXVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgaGl0U2hpcC5zaGlwUG9pbnRlci5oaXQoaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBibG93Q29vcmRpbmF0ZShjb29yZCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4ge1xuICAgIGxldCBzdHIgPSAnJztcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYm9hcmQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBsZXQgYXJyID0gYm9hcmRbaW5kZXhdO1xuICAgICAgc3RyICs9ICdcXG4nO1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IGFycltpbmRleF07XG4gICAgICAgIHN0ciArPSBgJHtzdGF0ZX0gfGA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbiAgfTtcblxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgbGV0IGFsbFN1bmsgPSB0cnVlO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKCFzaGlwLnNoaXBQb2ludGVyLmdldFN1bmsoKSkge1xuICAgICAgICBhbGxTdW5rID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFsbFN1bms7XG4gIH07XG4gIHJldHVybiB7XG4gICAgZ2V0Qm9hcmQsXG4gICAgZ2V0U2hpcHMsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2lldmVIaXQsXG4gICAgYWxsU2hpcHNTdW5rLFxuICAgIGdldENvb3JkaW5hdGUsXG4gICAgYmxvd0Nvb3JkaW5hdGUsXG4gICAgdG9TdHJpbmcsXG4gIH07XG59O1xuXG5leHBvcnQgeyBHYW1lYm9hcmQgfTtcbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCB7IFNoaXAgfSBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IHsgVHVyblRyYWNrZXIgfSBmcm9tICcuL3R1cm5UcmFja2VyJztcblxuY29uc3QgYW5jaG9yRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbnN0IHRyYWNrZXIgPSBUdXJuVHJhY2tlcignSCcpO1xubGV0IHJhbmRvbVBvcyA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgcmFuZG9tUG9zLnB1c2goW2ksIGpdKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21JbnQobWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xufVxuXG5mdW5jdGlvbiBsb2FkTWFpbkFzc2VzdHMoKSB7XG4gIGxvYWROYW1lUHJvbXB0KCk7XG59XG5cbmZ1bmN0aW9uIGxvYWROYW1lUHJvbXB0KCkge1xuICBjb25zdCB0b3RhbFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG90YWxXcmFwLmNsYXNzTGlzdC5hZGQoJ3RvdGFsLXdyYXAnKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdOYW1lOic7XG4gIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lX2lucHV0Jyk7XG5cbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZV9pbnB1dCcpO1xuICBuYW1lSW5wdXQuaWQgPSAnbmFtZV9pbnB1dCc7XG4gIG5hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BhdHRlcm4nLCAnXltBLXpdezMsfSQnKTtcblxuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuLnRleHRDb250ZW50ID0gJ05leHQnO1xuXG4gIGNvbnN0IGlucHV0V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbnB1dFdyYXAuY2xhc3NMaXN0LmFkZCgnaW5wdXQtd3JhcCcpO1xuXG4gIGlucHV0V3JhcC5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICBpbnB1dFdyYXAuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICBmb3JtLmFwcGVuZENoaWxkKGlucHV0V3JhcCk7XG4gIGZvcm0ub25zdWJtaXQgPSBgZXZlbnQucHJldmVudERlZmF1bHQoKTtgO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBpZiAobmFtZUlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAvL2NvbnN0IHBsYXllckJvYXJkID0gcG9wdWxhdGVCb2FyZCgpO1xuICAgICAgLy9jb25zdCBodW1hblBsYXllciA9IFBsYXllcihuYW1lSW5wdXQudmFsdWUsIHBsYXllckJvYXJkKTtcbiAgICAgIC8vY29uc3QgY3B1UGxheWVyID0gUGxheWVyKCdDUFUnLCBwbGF5ZXJCb2FyZCk7XG5cbiAgICAgIC8vY29uc29sZS5sb2coaHVtYW5QbGF5ZXIuZ2V0Qm9hcmQoKS50b1N0cmluZygpKTtcbiAgICAgIC8vY29uc29sZS5sb2coY3B1UGxheWVyLmdldEJvYXJkKCkudG9TdHJpbmcoKSk7XG5cbiAgICAgIGNsZWFyU2NyZWVuKCk7XG4gICAgICBsb2FkUHJlR2FtZShuYW1lSW5wdXQudmFsdWUpO1xuICAgICAgLy9sb2FkUGxheUFyZWEoaHVtYW5QbGF5ZXIsIGNwdVBsYXllcik7XG4gICAgICAvL3N0YXJ0R2FtZShodW1hblBsYXllciwgY3B1UGxheWVyLCBuYW1lSW5wdXQudmFsdWUpO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuXG4gIGNvbnN0IGJ0bldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnRuV3JhcC5jbGFzc0xpc3QuYWRkKCdidG4td3JhcCcpO1xuXG4gIGJ0bldyYXAuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChidG5XcmFwKTtcblxuICB0b3RhbFdyYXAuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGFuY2hvckRpdi5hcHBlbmRDaGlsZCh0b3RhbFdyYXApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaGlwRG9tKHNpemUpIHtcbiAgY29uc3Qgc2hpcFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2hpcFdyYXAuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCB0cnVlKTtcbiAgc2hpcFdyYXAuY2xhc3NMaXN0LmFkZCgnc2hpcC13cmFwJyk7XG4gIHNoaXBXcmFwLmNsYXNzTGlzdC5hZGQoJ2RyYWdnYWJsZScpO1xuICBzaGlwV3JhcC5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsJyk7XG5cbiAgY29uc3Qgcm9vdENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcm9vdENlbGwuaWQgPSAncm9vdC1jZWxsJztcbiAgcm9vdENlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuXG4gIHNoaXBXcmFwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsICgpID0+IHtcbiAgICBzaGlwV3JhcC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuICB9KTtcblxuICBzaGlwV3JhcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xuICAgIHNoaXBXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XG4gIH0pO1xuXG4gIHNoaXBXcmFwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxldCBpc0hvcml6b250YWwgPSBzaGlwV3JhcC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKTtcbiAgICBzd2l0Y2ggKGlzSG9yaXpvbnRhbCkge1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICBzaGlwV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsJyk7XG4gICAgICAgIHNoaXBXcmFwLmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJyk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgIHNoaXBXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ3ZlcnRpY2FsJyk7XG4gICAgICAgIHNoaXBXcmFwLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwnKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcblxuICBzaGlwV3JhcC5zZXRBdHRyaWJ1dGUoJ2xlbmd0aCcsIHNpemUpO1xuXG4gIHN3aXRjaCAoc2l6ZSkge1xuICAgIGNhc2UgNTpcbiAgICAgIHNoaXBXcmFwLmNsYXNzTGlzdC5hZGQoJ2NhcnJpZXInKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSA0OlxuICAgICAgc2hpcFdyYXAuY2xhc3NMaXN0LmFkZCgnYmF0dGxlc2hpcCcpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDM6XG4gICAgICBzaGlwV3JhcC5jbGFzc0xpc3QuYWRkKCdjcnVpc2VyJyk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgMjpcbiAgICAgIHNoaXBXcmFwLmNsYXNzTGlzdC5hZGQoJ3N1Ym1hcmluZScpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemUgLSAxOyBpKyspIHtcbiAgICBsZXQgc2hpcENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlwQ2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgc2hpcFdyYXAuYXBwZW5kQ2hpbGQoc2hpcENlbGwpO1xuICB9XG5cbiAgc2hpcFdyYXAuYXBwZW5kQ2hpbGQocm9vdENlbGwpO1xuXG4gIHJldHVybiBzaGlwV3JhcDtcbn1cbmZ1bmN0aW9uIGNsZWFySGlnaGxpZ2h0RG9tKGNlbGxzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgaWYgKGNlbGxzW2ldW2pdLmNsYXNzTGlzdC5jb250YWlucygnaGlnaGxpZ2h0JykpIHtcbiAgICAgICAgY2VsbHNbaV1bal0uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRQcmVHYW1lKG5hbWUpIHtcbiAgY29uc3QgaW50cm9IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaW50cm9IZWFkaW5nLmlkID0gJ2ludHJvLWhlYWQnO1xuICBpbnRyb0hlYWRpbmcudGV4dENvbnRlbnQgPSBgUGxhY2UgeW91ciBzaGlwcyBhZG1pcmFsICR7bmFtZX1gO1xuXG4gIGFuY2hvckRpdi5hcHBlbmRDaGlsZChpbnRyb0hlYWRpbmcpO1xuXG4gIGNvbnN0IGJsYW5rQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgbGV0IGJvYXJkRG9tID0gYm9hcmRUb0RvbShibGFua0JvYXJkKTtcbiAgYm9hcmREb20uaWQgPSAncHJlZ2FtZUJvYXJkJztcblxuICBjb25zdCBkb21DZWxscyA9IGJvYXJkRG9tLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XG4gIGxldCBjZWxscyA9IFsuLi5BcnJheSgxMCldLm1hcCgoKSA9PiBBcnJheSgxMCkpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IGNlbGxzW2ldO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgcm93W2pdID0gZG9tQ2VsbHNbaSAqIDEwICsgal07XG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBjb25zdCBjZWxsID0gY2VsbHNbaV1bal07XG5cbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dpbmcnKTtcbiAgICAgICAgY29uc3QgbGVuID0gcGFyc2VJbnQoc2hpcC5nZXRBdHRyaWJ1dGUoJ2xlbmd0aCcpKTtcblxuICAgICAgICBpZiAoc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKSkge1xuICAgICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgbGVuOyB6KyspIHtcbiAgICAgICAgICAgIGlmIChsZW4gLSAxICsgaiA8IDEwKSB7XG4gICAgICAgICAgICAgIGNlbGxzW2ldW2ogKyB6XS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCd2ZXJ0aWNhbCcpKSB7XG4gICAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCBsZW47IHorKykge1xuICAgICAgICAgICAgaWYgKGkgLSBsZW4gKyAxID49IDApIHtcbiAgICAgICAgICAgICAgY2VsbHNbaSAtIHpdW2pdLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWdnaW5nJyk7XG4gICAgICAgIGNvbnN0IGxlbiA9IHBhcnNlSW50KHNoaXAuZ2V0QXR0cmlidXRlKCdsZW5ndGgnKSk7XG5cbiAgICAgICAgaWYgKHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJykpIHtcbiAgICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IGxlbjsgeisrKSB7XG4gICAgICAgICAgICBpZiAoaiArIHogPCAxMCkge1xuICAgICAgICAgICAgICBjZWxsc1tpXVtqICsgel0uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucygndmVydGljYWwnKSkge1xuICAgICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgbGVuOyB6KyspIHtcbiAgICAgICAgICAgIGlmIChpIC0geiA+PSAwKSB7XG4gICAgICAgICAgICAgIGNlbGxzW2kgLSB6XVtqXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBzaGlwUGxhY2VkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGRvbVNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dpbmcnKTtcbiAgICAgICAgY29uc3QgbGVuID0gcGFyc2VJbnQoZG9tU2hpcC5nZXRBdHRyaWJ1dGUoJ2xlbmd0aCcpKTtcblxuICAgICAgICBpZiAoZG9tU2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKSkge1xuICAgICAgICAgIGlmIChqICsgbGVuIC0gMSA8IDEwKSB7XG4gICAgICAgICAgICBsZXQgb3JpZW50YXRpb24gPSAneCc7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gU2hpcChsZW4sIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgIGlmIChibGFua0JvYXJkLnBsYWNlU2hpcChbaSwgal0sIHNoaXApID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIGFsZXJ0KCdDQU5OT1QgUExBQ0UgU0hJUCBPTiBUT1AgT0YgU0hJUCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2hpcFBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvbVNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCd2ZXJ0aWNhbCcpKSB7XG4gICAgICAgICAgaWYgKGkgLSBsZW4gKyAxIDwgMTApIHtcbiAgICAgICAgICAgIGxldCBvcmllbnRhdGlvbiA9ICd5JztcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKGxlbiwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgaWYgKGJsYW5rQm9hcmQucGxhY2VTaGlwKFtpLCBqXSwgc2hpcCkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgYWxlcnQoJ0NBTk5PVCBQTEFDRSBTSElQIE9OIFRPUCBPRiBTSElQJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzaGlwUGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNoaXBQbGFjZWQpIHtcbiAgICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IGxlbjsgeisrKSB7XG4gICAgICAgICAgICBpZiAoZG9tU2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKSkge1xuICAgICAgICAgICAgICBjZWxsc1tpXVtqICsgel0uY2xhc3NMaXN0LmFkZCgnb2NjdXBpZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkb21TaGlwLmNsYXNzTGlzdC5jb250YWlucygndmVydGljYWwnKSkge1xuICAgICAgICAgICAgICBjZWxsc1tpIC0gel1bal0uY2xhc3NMaXN0LmFkZCgnb2NjdXBpZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZG9tU2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2FibGUnKTtcbiAgICAgICAgICBkb21TaGlwLmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJIaWdobGlnaHREb20oY2VsbHMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYW5jaG9yRGl2LmFwcGVuZENoaWxkKGJvYXJkRG9tKTtcblxuICBjb25zdCBkcmFnZ2FibGVXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRyYWdnYWJsZVdyYXAuaWQgPSAnZHJhZ2dhYmxlLXdyYXAnO1xuXG4gIGNvbnN0IGNhcnJpZXJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcnJpZXJXcmFwLmFwcGVuZENoaWxkKGNyZWF0ZVNoaXBEb20oNSkpO1xuICBkcmFnZ2FibGVXcmFwLmFwcGVuZENoaWxkKGNhcnJpZXJXcmFwKTtcblxuICBjb25zdCBiYXR0bGVXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJhdHRsZVdyYXAuYXBwZW5kQ2hpbGQoY3JlYXRlU2hpcERvbSg0KSk7XG4gIGRyYWdnYWJsZVdyYXAuYXBwZW5kQ2hpbGQoYmF0dGxlV3JhcCk7XG5cbiAgY29uc3QgY3J1aXNlcldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3J1aXNlcldyYXAuYXBwZW5kQ2hpbGQoY3JlYXRlU2hpcERvbSg0KSk7XG4gIGRyYWdnYWJsZVdyYXAuYXBwZW5kQ2hpbGQoY3J1aXNlcldyYXApO1xuXG4gIGNvbnN0IHN1Ym1hcmluZVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3VibWFyaW5lV3JhcC5hcHBlbmRDaGlsZChjcmVhdGVTaGlwRG9tKDMpKTtcbiAgZHJhZ2dhYmxlV3JhcC5hcHBlbmRDaGlsZChzdWJtYXJpbmVXcmFwKTtcblxuICBjb25zdCBkZXN0cm95ZXJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc3Ryb3llcldyYXAuYXBwZW5kQ2hpbGQoY3JlYXRlU2hpcERvbSgyKSk7XG4gIGRyYWdnYWJsZVdyYXAuYXBwZW5kQ2hpbGQoZGVzdHJveWVyV3JhcCk7XG5cbiAgYW5jaG9yRGl2LmFwcGVuZENoaWxkKGRyYWdnYWJsZVdyYXApO1xuXG4gIGNvbnN0IGJ0bldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnRuV3JhcC5jbGFzc0xpc3QuYWRkKCdidG4td3JhcCcpO1xuICBjb25zdCBjb250aW51ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb250aW51ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb250aW51ZSc7XG4gIGNvbnRpbnVlQnV0dG9uLmlkID0gJ2NvbnRpbnVlQnRuJztcblxuICBjb250aW51ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgc2hpcHMgPSBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKCdkcmFnZ2FibGUtd3JhcCcpXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLmRlYWN0aXZhdGVkJyk7XG5cbiAgICBpZiAoc2hpcHMubGVuZ3RoID09PSA1KSB7XG4gICAgICBjb25zb2xlLmxvZygnR2FtZSBzdGFydGluZycpO1xuICAgICAgY29uc3QgaHVtYW5QbGF5ZXIgPSBQbGF5ZXIobmFtZSwgYmxhbmtCb2FyZCk7XG4gICAgICBjb25zdCBjcHVQbGF5ZXIgPSBQbGF5ZXIoJ0NQVScsIGJsYW5rQm9hcmQpO1xuXG4gICAgICBjbGVhclNjcmVlbigpO1xuICAgICAgbG9hZFBsYXlBcmVhKGh1bWFuUGxheWVyLCBjcHVQbGF5ZXIpO1xuICAgICAgc3RhcnRHYW1lKGh1bWFuUGxheWVyLCBjcHVQbGF5ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCgnUGxlYXNlIHBsYWNlIGFsbCB5b3VyIHNoaXBzIG9uIHRoZSBib2FyZCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgYnRuV3JhcC5hcHBlbmRDaGlsZChjb250aW51ZUJ1dHRvbik7XG4gIGFuY2hvckRpdi5hcHBlbmRDaGlsZChidG5XcmFwKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJTY3JlZW4oKSB7XG4gIGFuY2hvckRpdi5pbm5lckhUTUwgPSAnJztcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVCb2FyZCgpIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgY2FycmllciA9IFNoaXAoNSwgJ3gnKTtcbiAgY29uc3QgYmF0dGxlc2hpcCA9IFNoaXAoNCwgJ3gnKTtcbiAgY29uc3QgY3J1aXNlciA9IFNoaXAoMywgJ3gnKTtcbiAgY29uc3Qgc3VibWFyaW5lID0gU2hpcCgzLCAneCcpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwKDIsICd4Jyk7XG5cbiAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFs1LCAwXSwgY2Fycmllcik7XG4gIHBsYXllckJvYXJkLnBsYWNlU2hpcChbNCwgMF0sIGJhdHRsZXNoaXApO1xuICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoWzMsIDBdLCBjcnVpc2VyKTtcbiAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFsyLCAwXSwgc3VibWFyaW5lKTtcbiAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFsxLCAwXSwgZGVzdHJveWVyKTtcblxuICByZXR1cm4gcGxheWVyQm9hcmQ7XG59XG5cbmZ1bmN0aW9uIGJvYXJkVG9Eb20oYm9hcmQsIGRyYXdTaGlwID0gZmFsc2UpIHtcbiAgY29uc3QgYm9hcmRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvYXJkV3JhcC5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGNvbnN0IGNlbGxWYWwgPSBib2FyZC5nZXRDb29yZGluYXRlKFtpLCBqXSk7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcblxuICAgICAgaWYgKChjZWxsVmFsID09PSAxKSAmIGRyYXdTaGlwKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgfVxuXG4gICAgICBib2FyZFdyYXAuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJvYXJkV3JhcDtcbn1cblxuZnVuY3Rpb24gbG9hZFBsYXlBcmVhKGh1bWFuUGxheWVyLCBjcHVQbGF5ZXIpIHtcbiAgY29uc3QgcGxheUFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGxheUFyZWEuaWQgPSAncGxheS1hcmVhLXdyYXAnO1xuXG4gIGNvbnN0IHR1cm5IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgdHVybkhlYWRpbmcuaW5uZXJIVE1MID0gJzxzcGFuIGlkID0gXCJ0dXJuLWluZGljYXRvclwiPjwvc3Bhbj5zIFR1cm4uJztcblxuICBwbGF5QXJlYS5hcHBlbmRDaGlsZCh0dXJuSGVhZGluZyk7XG5cbiAgY29uc3QgcGxheWVyU3BsaXRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBsYXllclNwbGl0V3JhcC5jbGFzc0xpc3QuYWRkKCdzcGxpdCcpO1xuXG4gIHBsYXlBcmVhLmFwcGVuZENoaWxkKHBsYXllclNwbGl0V3JhcCk7XG5cbiAgY29uc3QgcGxheWVyQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBsYXllckNvbHVtbi5pZCA9ICdodW1hbi1jb2x1bW4nO1xuXG4gIGNvbnN0IGNwdUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjcHVDb2x1bW4uaWQgPSAnY3B1LWNvbHVtbic7XG5cbiAgYW5jaG9yRGl2LmFwcGVuZENoaWxkKHBsYXlBcmVhKTtcblxuICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgcGxheWVyTmFtZS50ZXh0Q29udGVudCA9IGh1bWFuUGxheWVyLmdldE5hbWUoKTtcblxuICBwbGF5ZXJDb2x1bW4uYXBwZW5kQ2hpbGQocGxheWVyTmFtZSk7XG4gIHBsYXllckNvbHVtbi5hcHBlbmRDaGlsZChib2FyZFRvRG9tKGh1bWFuUGxheWVyLmdldEJvYXJkKCksIHRydWUpKTtcblxuICBjb25zdCBjcHVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgY3B1TmFtZS50ZXh0Q29udGVudCA9IGNwdVBsYXllci5nZXROYW1lKCk7XG5cbiAgY3B1Q29sdW1uLmFwcGVuZENoaWxkKGNwdU5hbWUpO1xuICBjcHVDb2x1bW4uYXBwZW5kQ2hpbGQoYm9hcmRUb0RvbShjcHVQbGF5ZXIuZ2V0Qm9hcmQoKSkpO1xuXG4gIHBsYXllclNwbGl0V3JhcC5hcHBlbmRDaGlsZChwbGF5ZXJDb2x1bW4pO1xuICBwbGF5ZXJTcGxpdFdyYXAuYXBwZW5kQ2hpbGQoY3B1Q29sdW1uKTtcbn1cblxuZnVuY3Rpb24gYWRkTGlzdGVuZXJUb0NlbGxzKFxuICBodW1hbkJvYXJkRG9tLFxuICBjcHVCb2FyZERvbSxcbiAgY3B1UGxheWVyLFxuICBodW1hblBsYXllclxuKSB7XG4gIGNvbnN0IGh1bWFuQ2VsbHMgPSBodW1hbkJvYXJkRG9tWzBdLmNoaWxkcmVuO1xuICBjb25zdCBjcHVDZWxscyA9IGNwdUJvYXJkRG9tWzBdLmNoaWxkcmVuO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgY3B1Q2VsbHNbaSAqIDEwICsgal0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoY3B1UGxheWVyLmdldEJvYXJkKCkuZ2V0Q29vcmRpbmF0ZShbaSwgal0pID09PSAxKSB7XG4gICAgICAgICAgICBjcHVDZWxsc1tpICogMTAgKyBqXS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNwdVBsYXllci5nZXRCb2FyZCgpLmdldENvb3JkaW5hdGUoW2ksIGpdKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGh1bWFuUGxheWVyLmF0dGFja0JvYXJkKFtpLCBqXSwgY3B1UGxheWVyLmdldEJvYXJkKCkpO1xuICAgICAgICAgICAgY3B1Q2VsbHNbaSAqIDEwICsgal0uY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICB1cGRhdGVJbmRpY2F0b3IoJ0NQVScpO1xuXG4gICAgICAgICAgICBjb25zdCBhdHRhY2tJbmRleCA9IGdldFJhbmRvbUludChyYW5kb21Qb3MubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IGF0dGFja1BvcyA9IHJhbmRvbVBvcy5zcGxpY2UoYXR0YWNrSW5kZXgsIDEpWzBdO1xuICAgICAgICAgICAgbGV0IHkgPSBhdHRhY2tQb3NbMF07XG4gICAgICAgICAgICBsZXQgeCA9IGF0dGFja1Bvc1sxXTtcblxuICAgICAgICAgICAgaWYgKGh1bWFuUGxheWVyLmdldEJvYXJkKCkuZ2V0Q29vcmRpbmF0ZShbeSwgeF0pID09PSAxKSB7XG4gICAgICAgICAgICAgIGh1bWFuQ2VsbHNbYXR0YWNrUG9zWzBdICogMTAgKyBhdHRhY2tQb3NbMV1dLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICAgICAgJ3NoaXAnXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBodW1hbkNlbGxzW2F0dGFja1Bvc1swXSAqIDEwICsgYXR0YWNrUG9zWzFdXS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcblxuICAgICAgICAgICAgdXBkYXRlSW5kaWNhdG9yKGh1bWFuUGxheWVyLmdldE5hbWUoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlSW5kaWNhdG9yKG5hbWUgPSAnUGxheWVyIDEnKSB7XG4gIGNvbnN0IHR1cm5JbmRpY2F0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHVybi1pbmRpY2F0b3InKTtcbiAgaWYgKHRyYWNrZXIuZ2V0VHVybigpID09PSAnSCcpIHtcbiAgICB0dXJuSW5kaWNhdG9yLnRleHRDb250ZW50ID0gbmFtZTtcbiAgfVxuICBpZiAodHJhY2tlci5nZXRUdXJuKCkgPT09ICdDJykge1xuICAgIHR1cm5JbmRpY2F0b3IudGV4dENvbnRlbnQgPSAnQ1BVJztcbiAgfVxuICB0cmFja2VyLm5leHRUdXJuKCk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZShodW1hblBsYXllciwgY3B1UGxheWVyKSB7XG4gIGlmIChcbiAgICBodW1hblBsYXllci5nZXRCb2FyZCgpLmdldFNoaXBzKCkubGVuZ3RoID09PSA1ICYmXG4gICAgY3B1UGxheWVyLmdldEJvYXJkKCkuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDVcbiAgKSB7XG4gICAgY29uc3QgaHVtYW5Eb21Cb2FyZCA9IGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoJ2h1bWFuLWNvbHVtbicpXG4gICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm9hcmQnKTtcblxuICAgIGNvbnN0IGNwdURvbUJvYXJkID0gZG9jdW1lbnRcbiAgICAgIC5nZXRFbGVtZW50QnlJZCgnY3B1LWNvbHVtbicpXG4gICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm9hcmQnKTtcblxuICAgIGFkZExpc3RlbmVyVG9DZWxscyhodW1hbkRvbUJvYXJkLCBjcHVEb21Cb2FyZCwgY3B1UGxheWVyLCBodW1hblBsYXllcik7XG5cbiAgICB1cGRhdGVJbmRpY2F0b3IoaHVtYW5QbGF5ZXIuZ2V0TmFtZSgpKTtcbiAgfVxufVxuXG5leHBvcnQgeyBsb2FkTWFpbkFzc2VzdHMgfTtcbiIsImNvbnN0IFBsYXllciA9IChzdHIsIG9iakJvYXJkKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBzdHI7XG4gIGNvbnN0IGJvYXJkID0gb2JqQm9hcmQ7XG5cbiAgY29uc3QgYXR0YWNrQm9hcmQgPSAoY29vcmQsIGJvYXJkVG9BdHRhY2spID0+IHtcbiAgICBpZiAoYm9hcmRUb0F0dGFjay5nZXRDb29yZGluYXRlKGNvb3JkKSAhPT0gLTEpIHtcbiAgICAgIGJvYXJkVG9BdHRhY2sucmVjaWV2ZUhpdChjb29yZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH07XG5cbiAgcmV0dXJuIHsgYXR0YWNrQm9hcmQsIGdldE5hbWUsIGdldEJvYXJkIH07XG59O1xuZXhwb3J0IHsgUGxheWVyIH07XG4iLCJjb25zdCBTaGlwID0gKGxlbmd0aCwgbykgPT4ge1xuICBsZXQgc2hpcEFycmF5ID0gW107XG4gIGxldCBvcmllbnRhdGlvbiA9IG87XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgIHNoaXBBcnJheS5wdXNoKDEpO1xuICB9XG5cbiAgY29uc3QgZ2V0U2hpcCA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcEFycmF5O1xuICB9O1xuXG4gIGNvbnN0IGdldExlbiA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcEFycmF5Lmxlbmd0aDtcbiAgfTtcblxuICBjb25zdCBnZXRTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiAhc2hpcEFycmF5LmluY2x1ZGVzKDEpO1xuICB9O1xuXG4gIGNvbnN0IGdldE9yaWVudGF0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBvcmllbnRhdGlvbjtcbiAgfTtcblxuICBjb25zdCBuaW50ZXlEZWdyZWVzID0gKCkgPT4ge1xuICAgIHN3aXRjaCAob3JpZW50YXRpb24pIHtcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICBvcmllbnRhdGlvbiA9ICd5JztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3knOlxuICAgICAgICBvcmllbnRhdGlvbiA9ICd4JztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhpdCA9IChuKSA9PiB7XG4gICAgaWYgKG4gPiBsZW5ndGggfHwgbiA8IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaGlwQXJyYXlbbl0gPSAwO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHsgZ2V0U2hpcCwgZ2V0U3VuaywgaGl0LCBnZXRPcmllbnRhdGlvbiwgZ2V0TGVuLCBuaW50ZXlEZWdyZWVzIH07XG59O1xuXG5leHBvcnQgeyBTaGlwIH07XG4iLCJjb25zdCBUdXJuVHJhY2tlciA9ICh0dXJuKSA9PiB7XG4gIGxldCBjdXJyVHVybiA9IHR1cm47XG5cbiAgY29uc3QgZ2V0VHVybiA9ICgpID0+IHtcbiAgICByZXR1cm4gY3VyclR1cm47XG4gIH07XG5cbiAgY29uc3QgbmV4dFR1cm4gPSAoKSA9PiB7XG4gICAgc3dpdGNoIChjdXJyVHVybikge1xuICAgICAgY2FzZSAnSCc6XG4gICAgICAgIGN1cnJUdXJuID0gJ0MnO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnQyc6XG4gICAgICAgIGN1cnJUdXJuID0gJ0gnO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IGdldFR1cm4sIG5leHRUdXJuIH07XG59O1xuXG5leHBvcnQgeyBUdXJuVHJhY2tlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgY3NzIGZyb20gJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGxvYWRNYWluQXNzZXN0cyB9IGZyb20gJy4vbG9hZCc7XG5cbmxvYWRNYWluQXNzZXN0cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9