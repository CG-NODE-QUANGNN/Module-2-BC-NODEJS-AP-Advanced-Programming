"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, name, dateOfBirth, address, position) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.position = position;
    }
    Employee.prototype.getId = function () {
        return this.id;
    };
    Employee.prototype.setId = function (value) {
        this.id = value;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.setName = function (value) {
        this.name = value;
    };
    Employee.prototype.getDateOfBirth = function () {
        return this.dateOfBirth;
    };
    Employee.prototype.setDateOfBirth = function (value) {
        this.dateOfBirth = value;
    };
    Employee.prototype.getAddress = function () {
        return this.address;
    };
    Employee.prototype.setAddress = function (value) {
        this.address = value;
    };
    Employee.prototype.getPosition = function () {
        return this.position;
    };
    Employee.prototype.setPosition = function (value) {
        this.position = value;
    };
    return Employee;
}());
exports.Employee = Employee;
