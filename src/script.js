"use strict";

require("core-js/modules/es6.string.iterator.js");
require("core-js/modules/es6.object.to-string.js");
require("core-js/modules/es6.array.iterator.js");
require("core-js/modules/web.dom.iterable.js");
require("core-js/modules/es6.object.set-prototype-of.js");
require("core-js/modules/es6.object.get-prototype-of.js");
require("core-js/modules/es6.reflect.construct.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.button = button;
exports.default = void 0;
require("core-js/modules/es6.symbol.js");
require("core-js/modules/es6.number.constructor.js");
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function button() {
  return 'button';
}
var Slider = /*#__PURE__*/function () {
  function Slider(widht, height, count) {
    _classCallCheck(this, Slider);
    this.widht = widht;
    this.height = height;
    this.count = count;
  }
  _createClass(Slider, [{
    key: "nestSlide",
    value: function nestSlide() {
      console.log('Move');
    }
  }, {
    key: "prevSlide",
    value: function prevSlide() {
      console.log('Back');
    }
  }, {
    key: "whoAmI",
    value: function whoAmI() {
      console.log("\u042F \u0442\u043E\u043B\u0449\u0435 \u043D\u0430 ".concat(this.widht, ",\u0438 \u0432\u044B\u0448\u0435 \u043D\u0430 ").concat(this.height, ",\u0438 \u043C\u043E\u0435 \u043B\u044E\u0431\u0438\u043C\u043E\u0435 \u0447\u0438\u0441\u043B\u043E ").concat(this.count));
    }
  }]);
  return Slider;
}(); // const slider = new Slider(100, 200, 10),
//     someSlider = new Slider(150, 250, 1);  
// slider.whoAmI();
// someSlider.whoAmI();
var AutoSlider = /*#__PURE__*/function (_Slider) {
  _inherits(AutoSlider, _Slider);
  var _super = _createSuper(AutoSlider);
  function AutoSlider(widht, height, count, auto) {
    var _this;
    _classCallCheck(this, AutoSlider);
    _this = _super.call(this, widht, height, count);
    _this.auto = auto;
    return _this;
  }
  _createClass(AutoSlider, [{
    key: "play",
    value: function play() {
      console.log("Autoplay: ".concat(this.auto));
    }
  }]);
  return AutoSlider;
}(Slider); // const slider = new AutoSlider(100, 200, 10, true);
// slider.whoAmI();
// slider.play();
// export {Slider,AutoSlider,button}; //экспорт нескольких методов.
var _default = Slider; //экспорт по умолчанию. Только один по умолчанию
exports.default = _default;