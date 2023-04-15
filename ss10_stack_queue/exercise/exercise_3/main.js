"use strict";
exports.__esModule = true;
var PriorityQueue_1 = require("./PriorityQueue");
var patient1 = { name: 'Smith', code: 5 };
var patient2 = { name: 'Jones', code: 4 };
var patient3 = { name: 'Fehrenbach', code: 6 };
var patient4 = { name: 'Brown', code: 1 };
var patient5 = { name: 'Ingram', code: 1 };
// Tạo hàng đợi ưu tiên và thêm bệnh nhân vào
var priorityQueue = new PriorityQueue_1.PriorityQueue();
priorityQueue.enqueue(patient1);
priorityQueue.enqueue(patient2);
priorityQueue.enqueue(patient3);
priorityQueue.enqueue(patient4);
priorityQueue.enqueue(patient5);
// Hiển thị danh sách bệnh nhân
console.log(priorityQueue.toString());
// Khám bệnh bệnh nhân đầu tiên trong hàng đợi
var seenPatient = priorityQueue.dequeue();
// Hiển thị tên của bệnh nhân đã được khám
console.log("\u0110\u00E3 kh\u00E1m b\u1EC7nh cho: ".concat(seenPatient.name));
// Hiển thị danh sách bệnh nhân còn lại
console.log(priorityQueue.toString());
// Khám bệnh bệnh nhân tiếp theo
var seenPatient2 = priorityQueue.dequeue();
// Hiển thị tên của bệnh nhân đã được khám
console.log("\u0110\u00E3 kh\u00E1m b\u1EC7nh cho: ".concat(seenPatient2.name));
// Hiển thị danh sách bệnh nhân còn lại
console.log(priorityQueue.toString());
