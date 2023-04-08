"use strict";
var _this = this;
exports.__esModule = true;
exports.EmployeeManager = void 0;
var Employee_1 = require("./Employee");
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
    }
    EmployeeManager.prototype.display = function () {
        EmployeeManager.employeeList.forEach(function (item) { return console.log(item); });
    };
    EmployeeManager.prototype.add = function (employee) {
        EmployeeManager.employeeList.push(employee);
    };
    EmployeeManager.prototype.detail = function (id) {
        var index = EmployeeManager.employeeList.map(function (item) { return item.getId(); }).indexOf(id);
        if (index < 0) {
            return undefined;
        }
        var employee = EmployeeManager.employeeList[index];
        return "".concat(employee.getId(), " - ").concat(employee.getName(), " - ").concat(employee.getDateOfBirth(), " - ").concat(employee.getAddress(), " - ").concat(employee.getPosition());
    };
    EmployeeManager.prototype["delete"] = function (id) {
        var index = EmployeeManager.employeeList.map(function (item) { return item.getId(); }).indexOf(id);
        if (index > 0) {
            EmployeeManager.employeeList.splice(index, 1);
        }
        return index > 0;
    };
    EmployeeManager.prototype.edit = function (id, employee) {
        var index = EmployeeManager.employeeList.map(function (item) { return item.getId(); }).indexOf(id);
        if (index > 0) {
            employee.setId(id);
            EmployeeManager.employeeList.splice(index, 1, employee);
        }
        return index > 0;
    };
    var _a;
    _a = EmployeeManager;
    EmployeeManager.employeeList = [];
    (function () {
        _a.employeeList.push(new Employee_1.Employee(1, 'Nguyễn Văn A', '2000-01-01', 'Đà Nẵng', 'Lập Trình Viên'));
        _a.employeeList.push(new Employee_1.Employee(2, 'Nguyễn Văn B', '2000-01-01', 'Đà Nẵng', 'Lập Trình Viên'));
        _a.employeeList.push(new Employee_1.Employee(3, 'Nguyễn Văn C', '2000-01-01', 'Đà Nẵng', 'Lập Trình Viên'));
    })();
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
