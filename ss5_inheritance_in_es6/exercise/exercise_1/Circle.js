"use strict";
exports.__esModule = true;
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(r, color) {
        this.r = r;
        this.color = color;
    }
    Circle.prototype.getArea = function () {
        return this.r * this.r * Math.PI;
    };
    Circle.prototype.getR = function () {
        return this.r;
    };
    Circle.prototype.setR = function (r) {
        this.r = r;
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    return Circle;
}());
exports.Circle = Circle;
