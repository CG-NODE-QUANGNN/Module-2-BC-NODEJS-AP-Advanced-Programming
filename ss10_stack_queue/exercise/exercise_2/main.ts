import {Stack} from "./Stack";

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr)

let stack = new Stack<number>();

for (const item of arr) {
    stack.push(item);
}

for (let i = 0; i < arr.length; i++) {
    arr[i] =  stack.pop();
}

console.log("Mảng sau khi đảo")
console.log(arr)
