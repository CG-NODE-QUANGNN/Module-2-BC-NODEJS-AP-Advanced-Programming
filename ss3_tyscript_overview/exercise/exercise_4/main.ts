import {Employee, Gender} from "./Employee";

let employeeList: Employee[] = [];

employeeList.push(new Employee("Nguyen Van A", Gender.MALE, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"));
employeeList.push(new Employee("Tran Thi A", Gender.FEMALE, new Date("1991-10-12"), "btran@gmail.com", "0123456790"));
employeeList.push(new Employee("Huynh An Nhien", Gender.OTHER, new Date("1990-09-19"), "nhienhuynh@gmail.com", "0123456791"));

function showEmployee(employee: Employee) {
    console.log(employee);
}

function addEmployee(employee: Employee) {
    employeeList.push(employee);
}

function deleteEmployee(index: number) {
    employeeList.splice(index, 1);
}
addEmployee(new Employee("Nguyen Van Axxxx", Gender.MALE, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"));
deleteEmployee(0);
deleteEmployee(0);
employeeList.forEach(showEmployee);
