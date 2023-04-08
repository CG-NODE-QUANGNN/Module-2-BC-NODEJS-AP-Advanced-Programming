class Fan {
    static readonly SLOW = 1;
    static readonly MEDIUM = 2;
    static readonly FAST = 3;

    private speed: number;
    private on: boolean;
    private radius: number;
    private color: string;

    constructor() {
        this.speed = Fan.SLOW;
        this.on = false;
        this.radius = 5;
        this.color = "blue";
    }

    getSpeed(): number {
        return this.speed;
    }

    setSpeed(speed: number): void {
        this.speed = speed;
    }

    isOn(): boolean {
        return this.on;
    }

    setOn(on: boolean): void {
        this.on = on;
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

    getColor(): string {
        return this.color;
    }

    setColor(color: string): void {
        this.color = color;
    }


    toString(): string {
        if (this.on) {
            return `Fan is on\nSpeed: ${this.speed}, Color: ${this.color}, Radius: ${this.radius}`;
        } else {
            return `Fan is off\nColor: ${this.color}, Radius: ${this.radius}`;
        }
    }
}


const fan1 = new Fan();
fan1.setSpeed(Fan.FAST);
fan1.setRadius(10);
fan1.setColor("yellow");
fan1.setOn(true);

const fan2 = new Fan();
fan2.setSpeed(Fan.MEDIUM);
fan2.setRadius(5);
fan2.setColor("blue");
fan2.setOn(false);

console.log(fan1.toString());
console.log(fan2.toString());
let x:String = new String("hello");
let y:String = new String("hello");
