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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! backimgapi.jpg */ "./src/backimgapi.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  max-width: 100vw;\r\n  height: 100vh;\r\n  background: linear-gradient(rgba(190, 190, 190, 0.25), rgba(158, 157, 157, 0.5)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center/cover no-repeat;\r\n}\r\n\r\n.main {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 5px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 30px auto;\r\n}\r\n\r\n.header-title {\r\n  width: 95%;\r\n  position: relative;\r\n  justify-content: flex-start;\r\n  font-size: 45px;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.alert {\r\n  font-size: 25px;\r\n  color: #fff;\r\n  padding: 12px;\r\n  width: 40%;\r\n  border-radius: 8px;\r\n  justify-content: center;\r\n  display: none;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.alert-success {\r\n  background-color: #0f0;\r\n  display: flex;\r\n}\r\n\r\n.alert-refresh {\r\n  background-color: cadetblue;\r\n  display: flex;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  width: 95%;\r\n  display: flex;\r\n  column-gap: 10%;\r\n}\r\n\r\n.refresh {\r\n  width: 40%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.refresh-header {\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.refresh-header h2 {\r\n  text-transform: capitalize;\r\n  font-size: 30px;\r\n  text-align: center;\r\n}\r\n\r\n.refresh-header button {\r\n  height: 50%;\r\n  margin: auto 0;\r\n  border: 0;\r\n  outline: 0;\r\n  border-radius: 5%;\r\n  font-size: 18px;\r\n  text-transform: capitalize;\r\n  padding: 18px 25px;\r\n  align-items: center;\r\n  display: flex;\r\n  background-color: lightslategrey;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.refresh-header button:hover {\r\n  box-shadow: 2px 4px 6px grey;\r\n}\r\n\r\n.scores {\r\n  margin: 0;\r\n  position: relative;\r\n  padding: 0;\r\n  list-style: none;\r\n  width: 100%;\r\n  justify-content: flex-start;\r\n  box-shadow: 0 4px 8px rgb(184, 179, 179);\r\n  height: 50vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.scores li {\r\n  font-size: 20px;\r\n  text-transform: capitalize;\r\n  padding: 10px;\r\n}\r\n\r\n.scores li:nth-of-type(odd) {\r\n  background-color: white;\r\n}\r\n\r\n.scores li:nth-of-type(even) {\r\n  background-color: rgb(233, 226, 214);\r\n}\r\n\r\n.add-score {\r\n  position: relative;\r\n  width: 25%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.add-score h2 {\r\n  position: relative;\r\n  font-size: 25px;\r\n  text-transform: capitalize;\r\n  text-align: center;\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 10px;\r\n  position: relative;\r\n}\r\n\r\n.user-name,\r\n.user-score {\r\n  outline: 0;\r\n  padding: 10px 8px;\r\n  border: 0;\r\n  font-size: 20px;\r\n  font-style: italic;\r\n  box-shadow: 0 3px 6px rgb(80, 79, 79);\r\n  text-transform: capitalize;\r\n}\r\n\r\n.btn-cont {\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: flex-end;\r\n}\r\n\r\n.submit-btn {\r\n  width: 40%;\r\n  padding: 10px;\r\n  outline: 0;\r\n  border: 0;\r\n  font-size: 20px;\r\n  background-color: #0f0;\r\n  color: #fff;\r\n  box-shadow: 0 4px 6px rgb(71, 64, 64);\r\n  text-transform: capitalize;\r\n  border-radius: 10px;\r\n}\r\n\r\n.submit-btn:hover {\r\n  color: #0f0;\r\n  background-color: #fff;\r\n  outline: 1px solid #0f0;\r\n}\r\n\r\n@media  screen and (max-width: 768px) {\r\n  body {\r\n    height: 100%;\r\n  }\r\n\r\n  .alert {\r\n    width: 90%;\r\n  }\r\n\r\n  .container {\r\n    flex-direction: column;\r\n    row-gap: 10px;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  .refresh {\r\n    width: 90%;\r\n  }\r\n\r\n  .refresh-header {\r\n    column-gap: 20px;\r\n  }\r\n\r\n  .refresh-header h2 {\r\n    font-size: 28px;\r\n    padding: 5px;\r\n    text-align: left;\r\n  }\r\n\r\n  .refresh-header button {\r\n    width: 30%;\r\n    padding: 10px;\r\n    letter-spacing: 0;\r\n    justify-content: center;\r\n  }\r\n\r\n  .scores {\r\n    height: 50vh;\r\n  }\r\n\r\n  .add-score {\r\n    width: 90%;\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,aAAa;EACb,gJAA4H;AAC9H;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,2BAA2B;EAC3B,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,eAAe;EACf,WAAW;EACX,aAAa;EACb,UAAU;EACV,kBAAkB;EAClB,uBAAuB;EACvB,aAAa;EACb,0BAA0B;AAC5B;;AAEA;EACE,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,2BAA2B;EAC3B,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,0BAA0B;EAC1B,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,SAAS;EACT,UAAU;EACV,iBAAiB;EACjB,eAAe;EACf,0BAA0B;EAC1B,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,gCAAgC;EAChC,mBAAmB;AACrB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,SAAS;EACT,kBAAkB;EAClB,UAAU;EACV,gBAAgB;EAChB,WAAW;EACX,2BAA2B;EAC3B,wCAAwC;EACxC,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,0BAA0B;EAC1B,aAAa;AACf;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,kBAAkB;AACpB;;AAEA;;EAEE,UAAU;EACV,iBAAiB;EACjB,SAAS;EACT,eAAe;EACf,kBAAkB;EAClB,qCAAqC;EACrC,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,UAAU;EACV,SAAS;EACT,eAAe;EACf,sBAAsB;EACtB,WAAW;EACX,qCAAqC;EACrC,0BAA0B;EAC1B,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE;IACE,YAAY;EACd;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,eAAe;IACf,YAAY;IACZ,gBAAgB;EAClB;;EAEA;IACE,UAAU;IACV,aAAa;IACb,iBAAiB;IACjB,uBAAuB;EACzB;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,UAAU;IACV,mBAAmB;EACrB;AACF","sourcesContent":["body {\r\n  max-width: 100vw;\r\n  height: 100vh;\r\n  background: linear-gradient(rgba(190, 190, 190, 0.25), rgba(158, 157, 157, 0.5)), url(backimgapi.jpg) center/cover no-repeat;\r\n}\r\n\r\n.main {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 5px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 30px auto;\r\n}\r\n\r\n.header-title {\r\n  width: 95%;\r\n  position: relative;\r\n  justify-content: flex-start;\r\n  font-size: 45px;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.alert {\r\n  font-size: 25px;\r\n  color: #fff;\r\n  padding: 12px;\r\n  width: 40%;\r\n  border-radius: 8px;\r\n  justify-content: center;\r\n  display: none;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.alert-success {\r\n  background-color: #0f0;\r\n  display: flex;\r\n}\r\n\r\n.alert-refresh {\r\n  background-color: cadetblue;\r\n  display: flex;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  width: 95%;\r\n  display: flex;\r\n  column-gap: 10%;\r\n}\r\n\r\n.refresh {\r\n  width: 40%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.refresh-header {\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.refresh-header h2 {\r\n  text-transform: capitalize;\r\n  font-size: 30px;\r\n  text-align: center;\r\n}\r\n\r\n.refresh-header button {\r\n  height: 50%;\r\n  margin: auto 0;\r\n  border: 0;\r\n  outline: 0;\r\n  border-radius: 5%;\r\n  font-size: 18px;\r\n  text-transform: capitalize;\r\n  padding: 18px 25px;\r\n  align-items: center;\r\n  display: flex;\r\n  background-color: lightslategrey;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.refresh-header button:hover {\r\n  box-shadow: 2px 4px 6px grey;\r\n}\r\n\r\n.scores {\r\n  margin: 0;\r\n  position: relative;\r\n  padding: 0;\r\n  list-style: none;\r\n  width: 100%;\r\n  justify-content: flex-start;\r\n  box-shadow: 0 4px 8px rgb(184, 179, 179);\r\n  height: 50vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.scores li {\r\n  font-size: 20px;\r\n  text-transform: capitalize;\r\n  padding: 10px;\r\n}\r\n\r\n.scores li:nth-of-type(odd) {\r\n  background-color: white;\r\n}\r\n\r\n.scores li:nth-of-type(even) {\r\n  background-color: rgb(233, 226, 214);\r\n}\r\n\r\n.add-score {\r\n  position: relative;\r\n  width: 25%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.add-score h2 {\r\n  position: relative;\r\n  font-size: 25px;\r\n  text-transform: capitalize;\r\n  text-align: center;\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 10px;\r\n  position: relative;\r\n}\r\n\r\n.user-name,\r\n.user-score {\r\n  outline: 0;\r\n  padding: 10px 8px;\r\n  border: 0;\r\n  font-size: 20px;\r\n  font-style: italic;\r\n  box-shadow: 0 3px 6px rgb(80, 79, 79);\r\n  text-transform: capitalize;\r\n}\r\n\r\n.btn-cont {\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: flex-end;\r\n}\r\n\r\n.submit-btn {\r\n  width: 40%;\r\n  padding: 10px;\r\n  outline: 0;\r\n  border: 0;\r\n  font-size: 20px;\r\n  background-color: #0f0;\r\n  color: #fff;\r\n  box-shadow: 0 4px 6px rgb(71, 64, 64);\r\n  text-transform: capitalize;\r\n  border-radius: 10px;\r\n}\r\n\r\n.submit-btn:hover {\r\n  color: #0f0;\r\n  background-color: #fff;\r\n  outline: 1px solid #0f0;\r\n}\r\n\r\n@media  screen and (max-width: 768px) {\r\n  body {\r\n    height: 100%;\r\n  }\r\n\r\n  .alert {\r\n    width: 90%;\r\n  }\r\n\r\n  .container {\r\n    flex-direction: column;\r\n    row-gap: 10px;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  .refresh {\r\n    width: 90%;\r\n  }\r\n\r\n  .refresh-header {\r\n    column-gap: 20px;\r\n  }\r\n\r\n  .refresh-header h2 {\r\n    font-size: 28px;\r\n    padding: 5px;\r\n    text-align: left;\r\n  }\r\n\r\n  .refresh-header button {\r\n    width: 30%;\r\n    padding: 10px;\r\n    letter-spacing: 0;\r\n    justify-content: center;\r\n  }\r\n\r\n  .scores {\r\n    height: 50vh;\r\n  }\r\n\r\n  .add-score {\r\n    width: 90%;\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ "./src/get_scores.js":
/*!***************************!*\
  !*** ./src/get_scores.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewScore": () => (/* binding */ createNewScore),
/* harmony export */   "getAllScores": () => (/* binding */ getAllScores)
/* harmony export */ });
const createNewScore = (user, score) => {
  const userScore = { user, score };
  return fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/r8MdtPvt8QNRAgM5KlJw/scores',
    {
      method: 'POST',
      body: JSON.stringify(userScore),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
};

const getAllScores = () => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/r8MdtPvt8QNRAgM5KlJw/scores');




/***/ }),

/***/ "./src/backimgapi.jpg":
/*!****************************!*\
  !*** ./src/backimgapi.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "376e6a7aad457d0dbd5b.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _get_scores_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get_scores.js */ "./src/get_scores.js");



const listContainer = document.querySelector('.scores');
const form = document.querySelector('.form');
const name = document.querySelector('.user-name');
const userScore = document.querySelector('.user-score');
const alert = document.querySelector('.alert');
const refresh = document.querySelector('.refresh-btn');

const displayscores = (list) => {
  let display = list.map((item) => `<li><span class='name'>${item.user}</span>:<span class='score'>${item.score}</span></li>`);
  display = display.join('');
  listContainer.innerHTML = display;
};

const displayAlert = (message, action) => {
  alert.innerHTML = message;
  alert.classList.add(`alert-${action}`);
  setTimeout(() => {
    alert.innerHTML = '';
    alert.classList.remove(`alert-${action}`);
  }, 3000);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const postScore = async () => {
    try {
      const id = await (await (0,_get_scores_js__WEBPACK_IMPORTED_MODULE_1__.createNewScore)(name.value, userScore.value)).json();
      displayAlert(id.result, 'success');
      return id;
    } catch (err) {
      return err;
    }
  };
  postScore();
  form.reset();
});

const getScore = async () => {
  try {
    const myScore = await (await (0,_get_scores_js__WEBPACK_IMPORTED_MODULE_1__.getAllScores)()).json();
    displayscores(myScore.result);
    return myScore;
  } catch (err) {
    return err;
  }
};

refresh.addEventListener('click', () => {
  getScore();
  displayAlert('refreshing scoreboard...', 'refresh' )
});

window.addEventListener('DOMContentLoaded', () => {
  getScore();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9nZXRfc2NvcmVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiYmFja2ltZ2FwaS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMTkwLCAxOTAsIDE5MCwgMC4yNSksIHJnYmEoMTU4LCAxNTcsIDE1NywgMC41KSksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHJvdy1nYXA6IDVweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMzBweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXRpdGxlIHtcXHJcXG4gIHdpZHRoOiA5NSU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBmb250LXNpemU6IDQ1cHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFsZXJ0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFsZXJ0LXN1Y2Nlc3Mge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5hbGVydC1yZWZyZXNoIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDk1JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBjb2x1bW4tZ2FwOiAxMCU7XFxyXFxufVxcclxcblxcclxcbi5yZWZyZXNoIHtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZnJlc2gtaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZnJlc2gtaGVhZGVyIGgyIHtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaC1oZWFkZXIgYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogNTAlO1xcclxcbiAgbWFyZ2luOiBhdXRvIDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNSU7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIHBhZGRpbmc6IDE4cHggMjVweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyZXk7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaC1oZWFkZXIgYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCA0cHggNnB4IGdyZXk7XFxyXFxufVxcclxcblxcclxcbi5zY29yZXMge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2IoMTg0LCAxNzksIDE3OSk7XFxyXFxuICBoZWlnaHQ6IDUwdmg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5zY29yZXMgbGkge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVzIGxpOm50aC1vZi10eXBlKG9kZCkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5zY29yZXMgbGk6bnRoLW9mLXR5cGUoZXZlbikge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjI2LCAyMTQpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXNjb3JlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGQtc2NvcmUgaDIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHJvdy1nYXA6IDEwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi51c2VyLW5hbWUsXFxyXFxuLnVzZXItc2NvcmUge1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggOHB4O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYig4MCwgNzksIDc5KTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWNvbnQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG4ge1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYig3MSwgNjQsIDY0KTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG46aG92ZXIge1xcclxcbiAgY29sb3I6ICMwZjA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkICMwZjA7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hbGVydCB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcm93LWdhcDogMTBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVmcmVzaCB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVmcmVzaC1oZWFkZXIge1xcclxcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlZnJlc2gtaGVhZGVyIGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVmcmVzaC1oZWFkZXIgYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNjb3JlcyB7XFxyXFxuICAgIGhlaWdodDogNTB2aDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hZGQtc2NvcmUge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixnSkFBNEg7QUFDOUg7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLHdDQUF3QztFQUN4QyxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHFDQUFxQztFQUNyQywwQkFBMEI7RUFDMUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgxOTAsIDE5MCwgMTkwLCAwLjI1KSwgcmdiYSgxNTgsIDE1NywgMTU3LCAwLjUpKSwgdXJsKGJhY2tpbWdhcGkuanBnKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcm93LWdhcDogNXB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAzMHB4IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItdGl0bGUge1xcclxcbiAgd2lkdGg6IDk1JTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGZvbnQtc2l6ZTogNDVweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxlcnQge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxlcnQtc3VjY2VzcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmFsZXJ0LXJlZnJlc2gge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGNvbHVtbi1nYXA6IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZnJlc2gge1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaC1oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaC1oZWFkZXIgaDIge1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZWZyZXNoLWhlYWRlciBidXR0b24ge1xcclxcbiAgaGVpZ2h0OiA1MCU7XFxyXFxuICBtYXJnaW46IGF1dG8gMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1JTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgcGFkZGluZzogMThweCAyNXB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JleTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5yZWZyZXNoLWhlYWRlciBidXR0b246aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDRweCA2cHggZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlcyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYigxODQsIDE3OSwgMTc5KTtcXHJcXG4gIGhlaWdodDogNTB2aDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlcyBsaSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zY29yZXMgbGk6bnRoLW9mLXR5cGUob2RkKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlcyBsaTpudGgtb2YtdHlwZShldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyMjYsIDIxNCk7XFxyXFxufVxcclxcblxcclxcbi5hZGQtc2NvcmUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1zY29yZSBoMiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcm93LWdhcDogMTBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItbmFtZSxcXHJcXG4udXNlci1zY29yZSB7XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbiAgcGFkZGluZzogMTBweCA4cHg7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiKDgwLCA3OSwgNzkpO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxufVxcclxcblxcclxcbi5idG4tY29udCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LWJ0biB7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiKDcxLCA2NCwgNjQpO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LWJ0bjpob3ZlciB7XFxyXFxuICBjb2xvcjogIzBmMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgIzBmMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFsZXJ0IHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICByb3ctZ2FwOiAxMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWZyZXNoIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWZyZXNoLWhlYWRlciB7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVmcmVzaC1oZWFkZXIgaDIge1xcclxcbiAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWZyZXNoLWhlYWRlciBidXR0b24ge1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2NvcmVzIHtcXHJcXG4gICAgaGVpZ2h0OiA1MHZoO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZC1zY29yZSB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNyZWF0ZU5ld1Njb3JlID0gKHVzZXIsIHNjb3JlKSA9PiB7XHJcbiAgY29uc3QgdXNlclNjb3JlID0geyB1c2VyLCBzY29yZSB9O1xyXG4gIHJldHVybiBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvcjhNZHRQdnQ4UU5SQWdNNUtsSncvc2NvcmVzJyxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJTY29yZSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRBbGxTY29yZXMgPSAoKSA9PiBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvcjhNZHRQdnQ4UU5SQWdNNUtsSncvc2NvcmVzJyk7XHJcblxyXG5leHBvcnQgeyBjcmVhdGVOZXdTY29yZSwgZ2V0QWxsU2NvcmVzIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBjcmVhdGVOZXdTY29yZSwgZ2V0QWxsU2NvcmVzIH0gZnJvbSAnLi9nZXRfc2NvcmVzLmpzJztcclxuXHJcbmNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVzJyk7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xyXG5jb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItbmFtZScpO1xyXG5jb25zdCB1c2VyU2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1zY29yZScpO1xyXG5jb25zdCBhbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydCcpO1xyXG5jb25zdCByZWZyZXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZnJlc2gtYnRuJyk7XHJcblxyXG5jb25zdCBkaXNwbGF5c2NvcmVzID0gKGxpc3QpID0+IHtcclxuICBsZXQgZGlzcGxheSA9IGxpc3QubWFwKChpdGVtKSA9PiBgPGxpPjxzcGFuIGNsYXNzPSduYW1lJz4ke2l0ZW0udXNlcn08L3NwYW4+OjxzcGFuIGNsYXNzPSdzY29yZSc+JHtpdGVtLnNjb3JlfTwvc3Bhbj48L2xpPmApO1xyXG4gIGRpc3BsYXkgPSBkaXNwbGF5LmpvaW4oJycpO1xyXG4gIGxpc3RDb250YWluZXIuaW5uZXJIVE1MID0gZGlzcGxheTtcclxufTtcclxuXHJcbmNvbnN0IGRpc3BsYXlBbGVydCA9IChtZXNzYWdlLCBhY3Rpb24pID0+IHtcclxuICBhbGVydC5pbm5lckhUTUwgPSBtZXNzYWdlO1xyXG4gIGFsZXJ0LmNsYXNzTGlzdC5hZGQoYGFsZXJ0LSR7YWN0aW9ufWApO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgYWxlcnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBhbGVydC5jbGFzc0xpc3QucmVtb3ZlKGBhbGVydC0ke2FjdGlvbn1gKTtcclxuICB9LCAzMDAwKTtcclxufTtcclxuXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgcG9zdFNjb3JlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaWQgPSBhd2FpdCAoYXdhaXQgY3JlYXRlTmV3U2NvcmUobmFtZS52YWx1ZSwgdXNlclNjb3JlLnZhbHVlKSkuanNvbigpO1xyXG4gICAgICBkaXNwbGF5QWxlcnQoaWQucmVzdWx0LCAnc3VjY2VzcycpO1xyXG4gICAgICByZXR1cm4gaWQ7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmV0dXJuIGVycjtcclxuICAgIH1cclxuICB9O1xyXG4gIHBvc3RTY29yZSgpO1xyXG4gIGZvcm0ucmVzZXQoKTtcclxufSk7XHJcblxyXG5jb25zdCBnZXRTY29yZSA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbXlTY29yZSA9IGF3YWl0IChhd2FpdCBnZXRBbGxTY29yZXMoKSkuanNvbigpO1xyXG4gICAgZGlzcGxheXNjb3JlcyhteVNjb3JlLnJlc3VsdCk7XHJcbiAgICByZXR1cm4gbXlTY29yZTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiBlcnI7XHJcbiAgfVxyXG59O1xyXG5cclxucmVmcmVzaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBnZXRTY29yZSgpO1xyXG4gIGRpc3BsYXlBbGVydCgncmVmcmVzaGluZyBzY29yZWJvYXJkLi4uJywgJ3JlZnJlc2gnIClcclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBnZXRTY29yZSgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9