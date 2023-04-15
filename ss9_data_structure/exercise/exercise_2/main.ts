import {LinkedList} from "./LinkedList";
import {Employee} from "./Employee";

let linkedList = new LinkedList<Employee>();
linkedList.insertFirst({month: 1, money: 5000000});
linkedList.insertFirst({month: 2, money: 5500000});
linkedList.insertFirst({month: 3, money: 6000000});
linkedList.insertFirst({month: 4, money: 5000000});
linkedList.insertFirst({month: 5, money: 7000000});
linkedList.insertFirst({month: 6, money: 4500000});
linkedList.insertFirst({month: 7, money: 8000000});
linkedList.insertFirst({month: 8, money: 7000000});
linkedList.insertFirst({month: 9, money: 6000000});
linkedList.insertFirst({month: 10, money: 7500000});
linkedList.insertFirst({month: 11, money: 9000000});
linkedList.insertFirst({month: 12, money: 8500000});

console.log(linkedList.showList());
console.log(linkedList.calculateTotalSalary());
console.log(linkedList.findMaxMoney());
