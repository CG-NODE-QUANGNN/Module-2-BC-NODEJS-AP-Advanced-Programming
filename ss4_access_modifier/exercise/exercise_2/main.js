"use strict";
exports.__esModule = true;
var EmployeeManager_1 = require("./EmployeeManager");
var Employee_1 = require("./Employee");
var employeeManager = new EmployeeManager_1.EmployeeManager();
// Hiển thị danh sách nhân sự
employeeManager.display();
// Thêm một nhân sự mới
var employee = new Employee_1.Employee(4, 'Nguyễn Văn D', '2000-01-01', 'Đà Nẵng', 'Lập Trình Viên');
employeeManager.add(employee);
employeeManager.display();
// Xem chi tiết thông tin nhân sự
console.log(employeeManager.detail(1));
// Xoá một nhân sự
employeeManager["delete"](2);
employeeManager.display();
// Chỉnh sửa thông tin nhân sự
var employeeEdit = new Employee_1.Employee(3, 'Nguyễn Văn XXX', '2000-01-01', 'Đà Nẵng', 'Lập Trình Viên');
employeeManager.edit(3, employeeEdit);
employeeManager.display();
