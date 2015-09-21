/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	document.addEventListener("DOMContentloaded", domloaded, false);

	/** Creates a canvas for loop
	 @param {string} title - The title of the book.
	 */
	function domloaded() {

	  var c = document.getElementById("canvas");
	  var ctx = c.getContext("2d");

	  var j = 0,
	      pixSize = 2,
	      pixCount = 50;
	  for (var r = 0; r < pixCount; r++) {
	    for (var i = 0; i < pixCount; i++) {
	      if (i % pixCount === 0) {
	        j++;
	      }
	      //random color function
	      ctx.fillStyle = "hsl(" + 360 * Math.random() + ", 50%, 50%)";
	      ctx.fillRect(i * pixSize, j * pixSize, 20, 20);
	    }
	  }
	}
	setInterval(domloaded, 150);

/***/ }
/******/ ]);