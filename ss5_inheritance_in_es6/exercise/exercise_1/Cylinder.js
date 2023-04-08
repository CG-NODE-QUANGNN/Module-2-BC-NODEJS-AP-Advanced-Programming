"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Cylinder = void 0;
var Circle_1 = require("./Circle");
var Cylinder = /** @class */ (function (_super) {
    __extends(Cylinder, _super);
    function Cylinder(r, color, h) {
        var _this = _super.call(this, r, color) || this;
        _this.h = h;
        return _this;
    }
    Cylinder.prototype.getVolume = function () {
        return _super.prototype.getArea.call(this) * this.h;
    };
    Cylinder.prototype.getH = function () {
        return this.h;
    };
    Cylinder.prototype.setH = function (h) {
        this.h = h;
    };
    return Cylinder;
}(Circle_1.Circle));
exports.Cylinder = Cylinder;
