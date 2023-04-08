"use strict";
exports.__esModule = true;
var Employee_1 = require("./Employee");
var employeeList = [];
employeeList.push(new Employee_1.Employee("Nguyen Van A", Employee_1.Gender.MALE, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"));
employeeList.push(new Employee_1.Employee("Tran Thi A", Employee_1.Gender.FEMALE, new Date("1991-10-12"), "btran@gmail.com", "0123456790"));
employeeList.push(new Employee_1.Employee("Huynh An Nhien", Employee_1.Gender.OTHER, new Date("1990-09-19"), "nhienhuynh@gmail.com", "0123456791"));
function showEmployee(employee) {
    console.log(employee);
}
function addEmployee(employee) {
    employeeList.push(employee);
}
function deleteEmployee(index) {
    employeeList.splice(index, 1);
}
addEmployee(new Employee_1.Employee("Nguyen Van Axxxx", Employee_1.Gender.MALE, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"));
deleteEmployee(0);
deleteEmployee(0);
employeeList.forEach(showEmployee);
