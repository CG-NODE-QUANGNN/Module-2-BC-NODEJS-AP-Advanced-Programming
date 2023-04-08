"use strict";
exports.__esModule = true;
exports.ProductManager = void 0;
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.products = [];
    }
    Object.defineProperty(ProductManager.prototype, "getAll", {
        get: function () {
            return this.products;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductManager.prototype, "add", {
        set: function (product) {
            this.products.push(product);
        },
        enumerable: false,
        configurable: true
    });
    return ProductManager;
}());
exports.ProductManager = ProductManager;
