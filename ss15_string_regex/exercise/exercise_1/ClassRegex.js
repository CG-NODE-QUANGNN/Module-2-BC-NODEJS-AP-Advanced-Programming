"use strict";
exports.__esModule = true;
exports.ClassRegex = void 0;
var ClassRegex = /** @class */ (function () {
    function ClassRegex() {
    }
    ClassRegex.validateClass = function (regex) {
        return this.CLASS_REGEX.test(regex);
    };
    ClassRegex.CLASS_REGEX = /^[CAP][0-9]{4}[GHIKLM]$/;
    return ClassRegex;
}());
exports.ClassRegex = ClassRegex;
