/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("{const cart = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\r\nconst showData = __webpack_require__(/*! ./modules/showData */ \"./src/modules/showData.js\");\r\n\r\ncart();\r\nshowData();\n\n//# sourceURL=webpack://js-project/./src/index.js?\n}");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((module) => {

eval("{const cart = () => {\r\n    const cartBtn = document.getElementById('cart')\r\n    const cartWnd = document.querySelector('.cart')\r\n    const cartClsBtn = cartWnd.querySelector('.cart-close')\r\n\r\n    const openCart = () => {\r\n        cartWnd.style.display = 'flex'\r\n    }\r\n\r\n    const closeCart = () => {\r\n        cartWnd.style.display = ''\r\n    }\r\n\r\n    cartBtn.addEventListener('click', openCart)\r\n    cartClsBtn.addEventListener('click', closeCart)\r\n}\r\n\r\nmodule.exports = cart\n\n//# sourceURL=webpack://js-project/./src/modules/cart.js?\n}");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((module) => {

eval("{const getData = () => {\r\n    return fetch('https://ozon-7cd58-default-rtdb.firebaseio.com/goods.json')\r\n        .then((response) => {\r\n            return response.json()\r\n        })\r\n}\r\n\r\nmodule.exports = getData\n\n//# sourceURL=webpack://js-project/./src/modules/getData.js?\n}");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((module) => {

eval("{const postData = () => {\r\n    return fetch('https://ozon-7cd58-default-rtdb.firebaseio.com/goods.json', {\r\n        method: 'POST',\r\n        body: JSON.stringify({\r\n            title: \"Everlustind summer\",\r\n            price: 0,\r\n            sale: true,\r\n            img: \"https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg\",\r\n            category: \"Игры и софт\"\r\n        }),\r\n        headers: {\r\n            'Content-type': 'application/json; charset=UTF-8',\r\n        },\r\n    })\r\n        .then(res => res.json())\r\n}\r\n\r\nmodule.exports = postData\n\n//# sourceURL=webpack://js-project/./src/modules/postData.js?\n}");

/***/ }),

/***/ "./src/modules/showData.js":
/*!*********************************!*\
  !*** ./src/modules/showData.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{const getData = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\")\r\nconst postData = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\")\r\n\r\nconst showData = () => {\r\n    const cartBtn = document.getElementById('cart')\r\n\r\n    getData().then((data) => {\r\n        console.log(data)\r\n    })\r\n}\r\n\r\nmodule.exports = showData\n\n//# sourceURL=webpack://js-project/./src/modules/showData.js?\n}");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;