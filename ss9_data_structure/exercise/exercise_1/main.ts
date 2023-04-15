import {LinkedList} from "./LinkedList";
import {Student} from "./Student";

let linkedList = new LinkedList<Student>();
linkedList.insertFirst({name: 'Nguyễn Văn Nguyên', score: 5});
linkedList.insertFirst({name: 'Trần Thị Mai', score: 7});
linkedList.insertFirst({name: 'Phạm Văn Tuấn', score: 9});
linkedList.insertFirst({name: 'Lê Thị Lan', score: 8});
linkedList.insertFirst({name: 'Võ Minh Khang', score: 4});
linkedList.insertFirst({name: 'Nguyễn Thanh Hương', score: 6});
linkedList.insertFirst({name: 'Trần Minh Tú', score: 3});
linkedList.insertFirst({name: 'Nguyễn Thị Thảo', score: 10});
linkedList.insertFirst({name: 'Lưu Văn Tùng', score: 1});
linkedList.insertFirst({name: 'Bùi Thị Thu', score: 10});
linkedList.insertFirst({name: 'Đỗ Anh Tuấn', score: 9});

console.log(linkedList.showList());
console.log(linkedList.totalStudentsFail());
console.log(linkedList.listStudentMaxScore());
console.log(linkedList.findByName('Nguyễn'));
