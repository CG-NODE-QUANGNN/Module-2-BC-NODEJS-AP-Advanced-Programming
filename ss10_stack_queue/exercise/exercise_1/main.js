"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var Queue_1 = require("./Queue");
var str = 'able was I ere I saw elba';
var stack = new Stack_1.Stack();
var queue = new Queue_1.Queue();
for (var i = 0; i < str.length; i++) {
    stack.push(str[i]);
    queue.enqueue(str[i]);
}
var isSymmetric = true;
while (stack.size() != 0) {
    if (stack.pop() != queue.dequeue()) {
        isSymmetric = false;
        console.log("Chuỗi đầu vào không đối xứng");
        break;
    }
}
if (isSymmetric) {
    console.log("Chuỗi đầu vào đối xứng");
}
