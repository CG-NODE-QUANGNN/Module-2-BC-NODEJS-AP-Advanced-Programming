"use strict";
exports.__esModule = true;
exports.PhoneRegex = void 0;
var PhoneRegex = /** @class */ (function () {
    function PhoneRegex() {
    }
    PhoneRegex.validatePhone = function (regex) {
        return this.PHONE_REGEX.test(regex);
    };
    PhoneRegex.PHONE_REGEX = /^\(\d{2}\)-\(0\d{9}\)$/;
    return PhoneRegex;
}());
exports.PhoneRegex = PhoneRegex;
