"use strict";
exports.__esModule = true;
var TestController_1 = require("./../Controllers/Test/TestController");
var TestServices_1 = require("./../Services/Test/TestServices");
var testServices = new TestServices_1["default"]();
exports.Controllers = [new TestController_1["default"](testServices)];
