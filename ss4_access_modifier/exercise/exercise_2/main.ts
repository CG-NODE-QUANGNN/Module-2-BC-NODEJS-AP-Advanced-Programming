import {EmployeeManager} from "./EmployeeManager";
import {Employee} from "./Employee";

let employeeManager: EmployeeManager = new EmployeeManager();

// Hiển thị danh sách nhân sự
employeeManager.display();

// Thêm một nhân sự mới
let employee: Employee = new Employee(4, 'Nguyễn Văn D', '2000-01-01', 'Đà Nẵng', 'Lập Trình Viên')
employeeManager.add(employee);
employeeManager.display();

// Xem chi tiết thông tin nhân sự
console.log(employeeManager.detail(1));

// Xoá một nhân sự
employeeManager.delete(2);
employeeManager.display();

// Chỉnh sửa thông tin nhân sự
let employeeEdit: Employee = new Employee(3, 'Nguyễn Văn XXX', '2000-01-01', 'Đà Nẵng', 'Lập Trình Viên')
employeeManager.edit(3, employeeEdit);
employeeManager.display();
