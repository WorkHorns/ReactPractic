/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./scripts/script.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoSlider": () => (/* binding */ AutoSlider),
/* harmony export */   "Slider": () => (/* binding */ Slider),
/* harmony export */   "button": () => (/* binding */ button),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function button(){
    return 'button';
}

class Slider {
    constructor(widht, height, count) {
        this.widht = widht;
        this.height = height;
        this.count = count
    }
    nestSlide(){
        console.log('Move');
    }

    prevSlide(){
        console.log('Back');
    }

    whoAmI(){
        console.log(`Я толще на ${this.widht},и выше на ${this.height},и мое любимое число ${this.count}`);
    }
}

// const slider = new Slider(100, 200, 10),
//     someSlider = new Slider(150, 250, 1);  

// slider.whoAmI();
// someSlider.whoAmI();

class AutoSlider extends Slider {
    constructor(widht, height, count, auto) {
        super(widht, height, count);
        this.auto = auto;
    }
    play(){
        console.log(`Autoplay: ${this.auto}`);
    }
}

// const slider = new AutoSlider(100, 200, 10, true);

// slider.whoAmI();
// slider.play();

 //экспорт нескольких методов.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider); //экспорт по умолчанию. Только один по умолчанию




/******/ })()
;
//# sourceMappingURL=bundle.js.map