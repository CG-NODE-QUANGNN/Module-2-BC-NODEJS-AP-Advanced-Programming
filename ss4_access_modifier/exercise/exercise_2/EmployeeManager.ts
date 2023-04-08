import {Employee} from "./Employee";

export class EmployeeManager {
    static employeeList: Employee[] = [];
    static {
        this.employeeList.push(new Employee(1, 'Nguyễn Văn A', '2000-01-01', 'Đà Nẵng', 'Lập Trình Viên'));
        this.employeeList.push(new Employee(2, 'Nguyễn Văn B', '2000-01-01', 'Đà Nẵng', 'Lập Trình Viên'));
        this.employeeList.push(new Employee(3, 'Nguyễn Văn C', '2000-01-01', 'Đà Nẵng', 'Lập Trình Viên'));
    }

    display() {
        EmployeeManager.employeeList.forEach(item => console.log(item));
    }

    add(employee: Employee) {
        EmployeeManager.employeeList.push(employee);
    }

    detail(id: number) {
        let index = EmployeeManager.employeeList.map(item => item.getId()).indexOf(id);
        if (index < 0) {
            return undefined;
        }
        let employee: Employee = EmployeeManager.employeeList[index];
        return `${employee.getId()} - ${employee.getName()} - ${employee.getDateOfBirth()} - ${employee.getAddress()} - ${employee.getPosition()}`;
    }

    delete(id: number): boolean {
        let index = EmployeeManager.employeeList.map(item => item.getId()).indexOf(id);
        if (index > 0) {
            EmployeeManager.employeeList.splice(index, 1);
        }
        return index > 0;
    }

    edit(id: number, employee: Employee): boolean {
        let index = EmployeeManager.employeeList.map(item => item.getId()).indexOf(id);
        if (index > 0) {
            employee.setId(id);
            EmployeeManager.employeeList.splice(index, 1, employee);
        }
        return index > 0;
    }
}
