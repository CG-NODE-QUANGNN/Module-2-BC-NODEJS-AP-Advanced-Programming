"use strict";
exports.__esModule = true;
exports.LinkedList = void 0;
var Node_1 = require("./Node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedList.prototype.insertFirst = function (data) {
        var node = new Node_1.Node(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    LinkedList.prototype.showList = function () {
        var listData = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next;
        }
        return listData;
    };
    LinkedList.prototype.calculateTotalSalary = function () {
        var total = 0;
        if (this.size) {
            var currentNode = this.head;
            while (currentNode !== null) {
                total += currentNode.data.money;
                currentNode = currentNode.next;
            }
        }
        return total;
    };
    LinkedList.prototype.findMaxMoney = function () {
        var _a;
        var max = (_a = this.head) === null || _a === void 0 ? void 0 : _a.data.money;
        var currentNode = this.head;
        while (currentNode !== null) {
            if (max < currentNode.data.money) {
                max = currentNode.data.money;
            }
            currentNode = currentNode.next;
        }
        return max;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
