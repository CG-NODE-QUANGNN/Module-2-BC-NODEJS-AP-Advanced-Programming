"use strict";
exports.__esModule = true;
var Point2D_1 = require("./Point2D");
var point2D = new Point2D_1.Point2D(1, 2);
console.log(point2D);
point2D.setXY(3, 4);
console.log(point2D.getXY());
