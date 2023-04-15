"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var stack = new Stack_1.Stack();
stack.push(1);
stack.push(3);
stack.push(5);
stack.push(7);
console.log(stack.pop()); // output: 7
while (stack.size() != 0) {
    console.log(stack.pop());
}
