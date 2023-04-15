import {Shape} from "./Shape";

export class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number,
                height: number,
                name: string) {
        super(name);
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return (this.width + this.height) * 2;
    }

    resize(percent: number) {
        this.width += this.width * percent * 0.01;
        this.height += this.height * percent * 0.01;
    }
}
