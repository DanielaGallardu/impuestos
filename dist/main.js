"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuestos = _interopRequireDefault(require("./impuestos.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var impuesto1 = new _impuestos["default"](1000000, 200000);
var cliente1 = new _cliente["default"]('Juan Pérez', impuesto1);
console.log("El impuesto anual de ".concat(cliente1.nombre, " es: $").concat(cliente1.calcularImpuesto()));