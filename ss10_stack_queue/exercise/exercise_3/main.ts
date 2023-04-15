// Tạo danh sách bệnh nhân
import {Patient} from "./Patient";
import {PriorityQueue} from "./PriorityQueue";

const patient1: Patient = {name: 'Smith', code: 5};
const patient2 = {name: 'Jones', code: 4};
const patient3 = {name: 'Fehrenbach', code: 6};
const patient4 = {name: 'Brown', code: 1};
const patient5 = {name: 'Ingram', code: 1};

// Tạo hàng đợi ưu tiên và thêm bệnh nhân vào
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue(patient1);
priorityQueue.enqueue(patient2);
priorityQueue.enqueue(patient3);
priorityQueue.enqueue(patient4);
priorityQueue.enqueue(patient5);

// Hiển thị danh sách bệnh nhân
console.log(priorityQueue.toString());

// Khám bệnh bệnh nhân đầu tiên trong hàng đợi
const seenPatient = priorityQueue.dequeue();

// Hiển thị tên của bệnh nhân đã được khám
console.log(`Đã khám bệnh cho: ${seenPatient.name}`);

// Hiển thị danh sách bệnh nhân còn lại
console.log(priorityQueue.toString());

// Khám bệnh bệnh nhân tiếp theo
const seenPatient2 = priorityQueue.dequeue();

// Hiển thị tên của bệnh nhân đã được khám
console.log(`Đã khám bệnh cho: ${seenPatient2.name}`);

// Hiển thị danh sách bệnh nhân còn lại
console.log(priorityQueue.toString());
