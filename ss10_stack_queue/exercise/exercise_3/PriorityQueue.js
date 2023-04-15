"use strict";
exports.__esModule = true;
exports.PriorityQueue = void 0;
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.patients = [];
    }
    PriorityQueue.prototype.enqueue = function (patient) {
        this.patients.push(patient);
    };
    PriorityQueue.prototype.dequeue = function () {
        this.patients.sort(function (a, b) { return b.code - a.code; });
        return this.patients.shift();
    };
    PriorityQueue.prototype.front = function () {
        return this.patients[0];
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.patients.length === 0;
    };
    PriorityQueue.prototype.size = function () {
        return this.patients.length;
    };
    PriorityQueue.prototype.toString = function () {
        return this.patients;
    };
    return PriorityQueue;
}());
exports.PriorityQueue = PriorityQueue;
