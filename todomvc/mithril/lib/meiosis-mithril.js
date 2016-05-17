var meiosisMithril =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _meiosisMithril = __webpack_require__(1);
	
	module.exports = _meiosisMithril.meiosisMithril;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.meiosisMithril = undefined;
	
	var _mithril = __webpack_require__(2);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var renderIntoElement = function renderIntoElement(element) {
	  return function (view) {
	    return _mithril2.default.render(element, view);
	  };
	};
	
	var renderIntoId = function renderIntoId(id) {
	  return renderIntoElement(document.getElementById(id));
	};
	
	var renderIntoSelector = function renderIntoSelector(selector) {
	  return renderIntoElement(document.querySelector(selector));
	};
	
	var intoElement = function intoElement(element) {
	  return { render: renderIntoElement(element) };
	};
	
	var intoId = function intoId(id) {
	  return { render: renderIntoId(id) };
	};
	
	var intoSelector = function intoSelector(selector) {
	  return { render: renderIntoSelector(selector) };
	};
	
	var meiosisMithril = {
	  renderIntoElement: renderIntoElement,
	  renderIntoId: renderIntoId,
	  renderIntoSelector: renderIntoSelector,
	  intoElement: intoElement,
	  intoId: intoId,
	  intoSelector: intoSelector
	};
	
	exports.meiosisMithril = meiosisMithril;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = m;

/***/ }
/******/ ]);
//# sourceMappingURL=meiosis-mithril.js.map