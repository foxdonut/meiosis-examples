var meiosisVanillaJs =
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
	
	var _meiosisVanillajs = __webpack_require__(1);
	
	module.exports = _meiosisVanillajs.meiosisVanillaJs;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var renderIntoElement = function renderIntoElement(element) {
	  return function (view) {
	    return element.innerHTML = view;
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
	
	var on = function on(target, type, callback, useCapture) {
	  return target.addEventListener(type, callback, !!useCapture);
	};
	
	var dispatchEvent = function dispatchEvent(target, selector, handler) {
	  return function (evt) {
	    var targetElement = evt.target;
	    var potentialElements = target.querySelectorAll(selector);
	    var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;
	
	    if (hasMatch) {
	      handler.call(targetElement, evt);
	    }
	  };
	};
	
	var delegate = function delegate(target, selector, type, handler) {
	  return(
	    // https://developer.mozilla.org/en-US/docs/Web/Events/blur
	    on(target, type, dispatchEvent(target, selector, handler), type === "blur" || type === "focus")
	  );
	};
	
	var meiosisVanillaJs = {
	  renderIntoElement: renderIntoElement,
	  renderIntoId: renderIntoId,
	  renderIntoSelector: renderIntoSelector,
	  intoElement: intoElement,
	  intoId: intoId,
	  intoSelector: intoSelector,
	  on: on,
	  delegate: delegate
	};
	
	exports.meiosisVanillaJs = meiosisVanillaJs;

/***/ }
/******/ ]);
//# sourceMappingURL=meiosis-vanillajs.js.map