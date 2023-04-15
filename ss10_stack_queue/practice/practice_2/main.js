"use strict";
exports.__esModule = true;
var Queue_1 = require("./Queue");
var queue = new Queue_1.Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue()); // 1
