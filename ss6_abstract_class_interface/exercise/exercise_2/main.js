"use strict";
exports.__esModule = true;
var Square_1 = require("./Square");
var Rectangle_1 = require("./Rectangle");
var Circle_1 = require("./Circle");
var Cylinder_1 = require("./Cylinder");
var shapes = [];
shapes.push(new Square_1.Square("Hình vông mày đỏ", 5));
shapes.push(new Rectangle_1.Rectangle(10, 5, "Hình chữ nhật màu cam"));
shapes.push(new Circle_1.Circle("Hình tròn màu cam", 15));
shapes.push(new Cylinder_1.Cylinder("Hình trụ màu vàng", 20, 25));
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log(shape.calculateArea());
    if (shape instanceof Square_1.Square) {
        shape.howToColor();
    }
}
