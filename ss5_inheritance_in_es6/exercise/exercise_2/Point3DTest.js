"use strict";
exports.__esModule = true;
var Point3D_1 = require("./Point3D");
var point3D = new Point3D_1.Point3D(1, 2, 3);
console.log(point3D);
point3D.setXY(3, 4);
point3D.setZ(5);
console.log(point3D.getXYZ());
