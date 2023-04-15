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
    LinkedList.prototype.insertLast = function (data) {
        if (!this.head) {
            this.insertFirst(data);
        }
        else {
            var node = new Node_1.Node(data);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
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
    LinkedList.prototype.totalStudentsFail = function () {
        var total = 0;
        if (this.size) {
            var currentNode = this.head;
            while (currentNode !== null) {
                if (currentNode.data.score <= 5) {
                    total++;
                }
                currentNode = currentNode.next;
            }
        }
        return total;
    };
    LinkedList.prototype.findMaxScore = function () {
        var _a;
        var max = (_a = this.head) === null || _a === void 0 ? void 0 : _a.data.score;
        var currentNode = this.head;
        while (currentNode !== null) {
            if (max < currentNode.data.score) {
                max = currentNode.data.score;
            }
            currentNode = currentNode.next;
        }
        return max;
    };
    LinkedList.prototype.listStudentMaxScore = function () {
        var max = this.findMaxScore();
        var listData = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.data.score == max) {
                listData.push(currentNode.readData());
            }
            currentNode = currentNode.next;
        }
        return listData;
    };
    LinkedList.prototype.findByName = function (name) {
        var listData = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.data.name.search(name) >= 0) {
                listData.push(currentNode.readData());
            }
            currentNode = currentNode.next;
        }
        return listData;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
