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
    LinkedList.prototype.insertFirstNode = function (data) {
        var node = new Node_1.Node(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    LinkedList.prototype.insertLastNode = function (data) {
        if (!this.head) {
            this.insertFirstNode(data);
        }
        else {
            var node = new Node_1.Node(data);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    };
    LinkedList.prototype.search = function (data) {
        if (this.size) {
            var currentNode = this.head;
            while (currentNode !== null) {
                if (currentNode.data == data) {
                    return currentNode;
                }
                currentNode = currentNode.next;
            }
        }
        return null;
    };
    LinkedList.prototype.deleteFirstNode = function () {
        if (this.head) {
            if (this.head.next) {
                this.head = this.head.next;
            }
            else {
                this.head = null;
            }
            this.size--;
        }
    };
    LinkedList.prototype.deleteLastNode = function () {
        if (this.head) {
            var currentNode = this.head;
            if (!currentNode.next) {
                this.head = null;
            }
            else {
                var previousNode = null;
                while (currentNode.next) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                previousNode.next = null;
                this.tail = previousNode;
                this.size--;
            }
        }
    };
    LinkedList.prototype.getSize = function () {
        return this.size;
    };
    LinkedList.prototype.readList = function () {
        var listData = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next;
        }
        return listData;
    };
    LinkedList.prototype.addOfIndex = function (index, data) {
        if (index == 0) {
            this.insertFirstNode(data);
        }
        else {
            var node = new Node_1.Node(data);
            var preNode = this.head;
            var currNode = this.head;
            for (var i = 1; i < index; i++) {
                preNode = currNode;
                currNode = preNode.next;
            }
            var temLink = currNode.next;
            currNode.next = node;
            node.next = temLink;
            this.size++;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
