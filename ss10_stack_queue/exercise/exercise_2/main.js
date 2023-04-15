"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
var stack = new Stack_1.Stack();
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var item = arr_1[_i];
    stack.push(item);
}
for (var i = 0; i < arr.length; i++) {
    arr[i] = stack.pop();
}
console.log("Mảng sau khi đảo");
console.log(arr);
