var Fan = /** @class */ (function () {
    function Fan() {
        this.speed = Fan.SLOW;
        this.on = false;
        this.radius = 5;
        this.color = "blue";
    }
    Fan.prototype.getSpeed = function () {
        return this.speed;
    };
    Fan.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Fan.prototype.isOn = function () {
        return this.on;
    };
    Fan.prototype.setOn = function (on) {
        this.on = on;
    };
    Fan.prototype.getRadius = function () {
        return this.radius;
    };
    Fan.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Fan.prototype.getColor = function () {
        return this.color;
    };
    Fan.prototype.setColor = function (color) {
        this.color = color;
    };
    Fan.prototype.toString = function () {
        if (this.on) {
            return "Fan is on\nSpeed: ".concat(this.speed, ", Color: ").concat(this.color, ", Radius: ").concat(this.radius);
        }
        else {
            return "Fan is off\nColor: ".concat(this.color, ", Radius: ").concat(this.radius);
        }
    };
    Fan.SLOW = 1;
    Fan.MEDIUM = 2;
    Fan.FAST = 3;
    return Fan;
}());
var fan1 = new Fan();
fan1.setSpeed(Fan.FAST);
fan1.setRadius(10);
fan1.setColor("yellow");
fan1.setOn(true);
var fan2 = new Fan();
fan2.setSpeed(Fan.MEDIUM);
fan2.setRadius(5);
fan2.setColor("blue");
fan2.setOn(false);
console.log(fan1.toString());
console.log(fan2.toString());
var x = new String("hello");
var y = new String("hello");
