/*! For license information please see principal.js.LICENSE.txt */
!function(s){var e={};function _(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return s[o].call(r.exports,r,r.exports,_),r.l=!0,r.exports}_.m=s,_.c=e,_.d=function(s,e,o){_.o(s,e)||Object.defineProperty(s,e,{enumerable:!0,get:o})},_.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},_.t=function(s,e){if(1&e&&(s=_(s)),8&e)return s;if(4&e&&"object"==typeof s&&s&&s.__esModule)return s;var o=Object.create(null);if(_.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:s}),2&e&&"string"!=typeof s)for(var r in s)_.d(o,r,function(e){return s[e]}.bind(null,r));return o},_.n=function(s){var e=s&&s.__esModule?function(){return s.default}:function(){return s};return _.d(e,"a",e),e},_.o=function(s,e){return Object.prototype.hasOwnProperty.call(s,e)},_.p="",_(_.s="./src/principal.js")}({"./src/assets/css/style.css":function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/css/style.css?")},"./src/assets/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/assets/css/style.css");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/index.scss */ "./src/assets/scss/index.scss");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n//# sourceURL=webpack:///./src/assets/index.js?')},"./src/assets/scss/index.scss":function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/scss/index.scss?")},"./src/modulos/moduloA.js":function(module,exports,__webpack_require__){eval('const moduloB = __webpack_require__(/*! ./moduloB */ "./src/modulos/moduloB.js")\nconsole.log(moduloB.saudacao())\n\n//# sourceURL=webpack:///./src/modulos/moduloA.js?')},"./src/modulos/moduloB.js":function(module,exports){eval("//sistema de modulo padrão do nodejs\nmodule.exports = {\n    saudacao(){return 'Olá eu sou módulo B!'}\n}\n\n//# sourceURL=webpack:///./src/modulos/moduloB.js?")},"./src/pessoa.js":function(module,exports){eval("//usando o modelo de export do ECMASCRIPT\n//export default \nmodule.exports = class Pessoa{\n    cumprimentar(){\n        return 'Boa noite, Manaus!!'\n    }\n}\n\n//# sourceURL=webpack:///./src/pessoa.js?")},"./src/principal.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets */ "./src/assets/index.js");\n//import Pessoa from \'./pessoa\' \n//import \'./modulos/moduloA\'\nconst moduloA = __webpack_require__(/*! ./modulos/moduloA */ "./src/modulos/moduloA.js")\nconst Pessoa = __webpack_require__(/*! ./pessoa */ "./src/pessoa.js")\n //sempre vai buscar o index.js\n\nconst atendente = new Pessoa\nconsole.log(atendente.cumprimentar())\n\n//# sourceURL=webpack:///./src/principal.js?')}});