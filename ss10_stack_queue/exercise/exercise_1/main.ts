import {Stack} from "./Stack";
import {Queue} from "./Queue";

let str = 'able was I ere I saw elba';

let stack = new Stack<string>();
let queue = new Queue<string>();

for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
    queue.enqueue(str[i]);
}

let isSymmetric = true;
while (stack.size() != 0) {
    if (stack.pop() != queue.dequeue()) {
        isSymmetric = false;
        console.log("Chuỗi đầu vào không đối xứng")
        break;
    }
}

if(isSymmetric) {
    console.log("Chuỗi đầu vào đối xứng")
}
