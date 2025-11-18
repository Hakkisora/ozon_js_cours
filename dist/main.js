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

eval("{const cart = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\r\nconst load = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\r\nconst search = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\r\nconst catalog = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\r\nconst priceBars = __webpack_require__(/*! ./modules/priceBars */ \"./src/modules/priceBars.js\");\r\nconst isSale = __webpack_require__(/*! ./modules/isSale */ \"./src/modules/isSale.js\");\r\n\r\n\r\ncart();\r\nload();\r\nsearch();\r\ncatalog();\r\npriceBars();\r\nisSale();\n\n//# sourceURL=webpack://js-project/./src/index.js?\n}");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{const renderCart = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\")\r\nconst postData = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\")\r\n\r\nconst cart = () => {\r\n    const cartBtn = document.getElementById('cart')\r\n    const cartWnd = document.querySelector('.cart')\r\n    const cartClsBtn = cartWnd.querySelector('.cart-close')\r\n    const goodsBox = document.querySelector('.goods')\r\n    const totalSum = document.querySelector('.cart-total span')\r\n    const cartWrapper = document.querySelector('.cart-wrapper')\r\n    const sendBtn = document.querySelector('.cart-confirm')\r\n\r\n    const openCart = () => {\r\n        const cart = localStorage.getItem('cart') ?\r\n            JSON.parse(localStorage.getItem('cart')) : []\r\n\r\n        cartWnd.style.display = 'flex'\r\n\r\n        renderCart(cart)\r\n        totalSum.textContent = cart.reduce((sum, goodsItem) => {\r\n            return sum + goodsItem.price\r\n        }, 0)\r\n    }\r\n\r\n    const closeCart = () => {\r\n        cartWnd.style.display = ''\r\n    }\r\n\r\n    cartBtn.addEventListener('click', openCart)\r\n    cartClsBtn.addEventListener('click', closeCart)\r\n    goodsBox.addEventListener('click', (event) => {\r\n        if (event.target.classList.contains('btn-primary')) {\r\n            const card = event.target.closest('.card')\r\n            const key = card.dataset.key\r\n            const goods = JSON.parse(localStorage.getItem('goods'))\r\n            const cart = localStorage.getItem('cart') ?\r\n                JSON.parse(localStorage.getItem('cart')) : []\r\n            const goodsItem = goods.find((item) => {\r\n                return item.id === key\r\n            })\r\n\r\n            cart.push(goodsItem)\r\n\r\n            localStorage.setItem('cart', JSON.stringify(cart))\r\n\r\n            console.log(goodsItem)\r\n        }\r\n    })\r\n\r\n    cartWrapper.addEventListener('click', (event) => {\r\n        if (event.target.classList.contains('btn-primary')) {\r\n            const cart = localStorage.getItem('cart') ?\r\n                JSON.parse(localStorage.getItem('cart')) : []\r\n            const card = event.target.closest('.card')\r\n            const key = card.dataset.key\r\n            const index = cart.findIndex((item) => {\r\n                return item.id === key\r\n            })\r\n\r\n            cart.splice(index, 1)\r\n\r\n            localStorage.setItem('cart', JSON.stringify(cart))\r\n\r\n            renderCart(cart)\r\n            totalSum.textContent = cart.reduce((sum, goodsItem) => {\r\n                return sum + goodsItem.price\r\n            }, 0)\r\n        }\r\n    })\r\n\r\n    sendBtn.addEventListener('click', () => {\r\n        const cart = localStorage.getItem('cart') ?\r\n            JSON.parse(localStorage.getItem('cart')) : []\r\n\r\n        postData(cart).then(() => {\r\n            localStorage.removeItem('cart')\r\n\r\n            renderCart([])\r\n            totalSum.textContent = 0\r\n        })\r\n    })\r\n}\r\n\r\nmodule.exports = cart\n\n//# sourceURL=webpack://js-project/./src/modules/cart.js?\n}");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{const getData = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\")\r\nconst renderGoods = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\")\r\nconst { catalogFilter } = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\")\r\n\r\nconst catalog = () => {\r\n    const catalogBtn = document.querySelector('.catalog-button');\r\n    const catalogWnd = document.querySelector('.catalog');\r\n    const catalogWndItems = document.querySelectorAll('.catalog li');\r\n    let clickFlag = false;\r\n\r\n    catalogBtn.addEventListener('click', () => {\r\n        clickFlag = !clickFlag\r\n\r\n        if (clickFlag) {\r\n            catalogWnd.style.display = 'block'\r\n        } else {\r\n            catalogWnd.style.display = ''\r\n        }\r\n    })\r\n\r\n    catalogWndItems.forEach((item) => {\r\n\r\n        const category = item.textContent\r\n        item.addEventListener('click', () => {\r\n\r\n            getData().then((data) => {\r\n                renderGoods(catalogFilter(data, category))\r\n            })\r\n        })\r\n    })\r\n}\r\n\r\nmodule.exports = catalog\n\n//# sourceURL=webpack://js-project/./src/modules/catalog.js?\n}");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((module) => {

eval("{const searchFilter = (goods, value) => {\r\n    return goods.filter((goodsItem) => {\r\n        return goodsItem.title.toLowerCase().includes(value.toLowerCase())\r\n    })\r\n}\r\n\r\nconst catalogFilter = (goods, text) => {\r\n    return goods.filter((goodsItem) => {\r\n        return goodsItem.category === text\r\n    })\r\n}\r\n\r\nconst priceFilterMax = (goods, array) => {\r\n    return goods.filter((goodsItem) => {\r\n        return parseInt(goodsItem.price) <= parseInt(array[1])\r\n    })\r\n}\r\n\r\nconst priceFilterMin = (goods, array) => {\r\n    return goods.filter((goodsItem) => {\r\n        return parseInt(array[0]) <= parseInt(goodsItem.price)\r\n    })\r\n}\r\n\r\nconst saleFilter = (goods, state) => {\r\n\r\n    if (state) {\r\n        return goods.filter((goodsItem) => {\r\n            return goodsItem.sale === state\r\n        })\r\n    } else {\r\n        return goods\r\n    }\r\n}\r\n\r\nmodule.exports = {\r\n    searchFilter,\r\n    catalogFilter,\r\n    priceFilterMax,\r\n    priceFilterMin,\r\n    saleFilter\r\n}\n\n//# sourceURL=webpack://js-project/./src/modules/filters.js?\n}");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((module) => {

eval("{const getData = () => {\r\n    return fetch('https://ozon-7cd58-default-rtdb.firebaseio.com/goods.json')\r\n        .then((response) => {\r\n            return response.json()\r\n        })\r\n}\r\n\r\nmodule.exports = getData\n\n//# sourceURL=webpack://js-project/./src/modules/getData.js?\n}");

/***/ }),

/***/ "./src/modules/isSale.js":
/*!*******************************!*\
  !*** ./src/modules/isSale.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{const { saleFilter } = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\")\r\nconst getData = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\")\r\nconst renderGoods = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\")\r\n\r\nconst isSale = () => {\r\n    const chackBoxInput = document.getElementById('discount-checkbox')\r\n    const chackMark = document.querySelector('.filter-check_checkmark')\r\n\r\n    chackBoxInput.addEventListener('change', () => {\r\n\r\n        if (chackBoxInput.checked) {\r\n            chackMark.classList.add('checked')\r\n        } else {\r\n            chackMark.classList.remove('checked')\r\n        }\r\n\r\n        getData().then((data) => {\r\n            renderGoods(saleFilter(data, chackBoxInput.checked))\r\n        })\r\n    })\r\n}\r\n\r\nmodule.exports = isSale\n\n//# sourceURL=webpack://js-project/./src/modules/isSale.js?\n}");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{const getData = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\")\r\nconst renderGoods = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\")\r\n\r\nconst load = () => {\r\n    getData().then((data) => {\r\n        renderGoods(data)\r\n    })\r\n}\r\n\r\nmodule.exports = load\n\n//# sourceURL=webpack://js-project/./src/modules/load.js?\n}");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((module) => {

eval("{const postData = (data) => {\r\n    return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n        method: 'POST',\r\n        body: JSON.stringify(data),\r\n        headers: {\r\n            'Content-type': 'application/json; charset=UTF-8',\r\n        },\r\n    })\r\n        .then(res => res.json())\r\n}\r\n\r\nmodule.exports = postData\n\n//# sourceURL=webpack://js-project/./src/modules/postData.js?\n}");

/***/ }),

/***/ "./src/modules/priceBars.js":
/*!**********************************!*\
  !*** ./src/modules/priceBars.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{const getData = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\")\r\nconst renderGoods = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\")\r\nconst { priceFilterMax, priceFilterMin } = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\")\r\n\r\nconst priceBars = () => {\r\n    const barMin = document.querySelector('#min')\r\n    const barMax = document.querySelector('#max')\r\n    let maxPrice = 0\r\n    let minPrice = 0\r\n    getData().then((data) => {\r\n        data.forEach(item => {\r\n\r\n            if (parseInt(maxPrice) <= parseInt(item.price)) {\r\n                maxPrice = item.price\r\n                pricesArray = [minPrice, maxPrice]\r\n            }\r\n        })\r\n    })\r\n\r\n    pricesArray = [minPrice, maxPrice]\r\n\r\n    barMin.addEventListener('input', (event) => {\r\n        pricesArray[0] = (event.target.value)\r\n\r\n        console.log(pricesArray)\r\n\r\n        if (pricesArray[0] === '') {\r\n            pricesArray[0] = minPrice\r\n            getData().then((data) => {\r\n                renderGoods(data)\r\n            })\r\n        } else {\r\n            getData().then((data) => {\r\n                renderGoods(priceFilterMin(priceFilterMax(data, pricesArray), pricesArray))\r\n            })\r\n        }\r\n    })\r\n\r\n    barMax.addEventListener('input', (event) => {\r\n        pricesArray[1] = (event.target.value)\r\n\r\n        console.log(pricesArray)\r\n\r\n        if (pricesArray[1] === '') {\r\n            pricesArray[1] = maxPrice\r\n            getData().then((data) => {\r\n                renderGoods(data)\r\n            })\r\n        } else {\r\n            getData().then((data) => {\r\n                renderGoods(priceFilterMax(priceFilterMin(data, pricesArray), pricesArray))\r\n            })\r\n        }\r\n    })\r\n}\r\n\r\nmodule.exports = priceBars\n\n//# sourceURL=webpack://js-project/./src/modules/priceBars.js?\n}");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((module) => {

eval("{const renderCart = (goods) => {\r\n    const cartWrapper = document.querySelector('.cart-wrapper')\r\n\r\n    cartWrapper.innerHTML = ''\r\n\r\n    if (goods.length === 0) {\r\n        cartWrapper.insertAdjacentHTML('beforeend', `\r\n            <div id=\"cart-empty\">\r\n\t\t\t\tВаша корзина пока пуста\r\n\t\t\t</div>\r\n            `)\r\n        console.log('It works')\r\n    } else {\r\n        goods.forEach((goodItem) => {\r\n            cartWrapper.insertAdjacentHTML('beforeend', `\r\n                <div class=\"card\" data-key=\"${goodItem.id}\">\r\n                    ${goodItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n                    <div class=\"card-img-wrapper\">\r\n                        <span class=\"card-img-top\"\r\n                            style=\"background-image: url('${goodItem.img}')\"></span>\r\n                    </div>\r\n                    <div class=\"card-body justify-content-between\">\r\n                        <div class=\"card-price\">${goodItem.price} ₽</div>\r\n                        <h5 class=\"card-title\">${goodItem.title}</h5>\r\n                        <button class=\"btn btn-primary\">Удалить</button>\r\n                    </div>\r\n                </div>\r\n        `)\r\n        }\r\n        )\r\n    }\r\n}\r\n\r\nmodule.exports = renderCart\n\n//# sourceURL=webpack://js-project/./src/modules/renderCart.js?\n}");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((module) => {

eval("{const renderGoods = (goods) => {\r\n    const goodsWrapper = document.querySelector('.goods')\r\n\r\n    localStorage.setItem('goods', JSON.stringify(goods))\r\n\r\n    goodsWrapper.innerHTML = ''\r\n\r\n    goods.forEach((goodItem) => {\r\n        goodsWrapper.insertAdjacentHTML('beforeend', `\r\n            <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n                <div class=\"card\" data-key=\"${goodItem.id}\">\r\n                    ${goodItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n                    <div class=\"card-img-wrapper\">\r\n                        <span class=\"card-img-top\"\r\n                            style=\"background-image: url('${goodItem.img}')\"></span>\r\n                    </div>\r\n                    <div class=\"card-body justify-content-between\">\r\n                        <div class=\"card-price\">${goodItem.price} ₽</div>\r\n                        <h5 class=\"card-title\">${goodItem.title}</h5>\r\n                        <button class=\"btn btn-primary\">В корзину</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        `)\r\n    }\r\n    )\r\n}\r\n\r\nmodule.exports = renderGoods\n\n//# sourceURL=webpack://js-project/./src/modules/renderGoods.js?\n}");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{const getData = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\")\r\nconst renderGoods = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\")\r\nconst { searchFilter } = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\")\r\n\r\nconst search = () => {\r\n    const searchBarInput = document.querySelector(\".search-wrapper_input\")\r\n\r\n    searchBarInput.addEventListener('input', (event) => {\r\n        const text = event.target.value\r\n\r\n        getData().then((data) => {\r\n            renderGoods(searchFilter(data, text))\r\n        })\r\n    })\r\n}\r\n\r\nmodule.exports = search\n\n//# sourceURL=webpack://js-project/./src/modules/search.js?\n}");

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