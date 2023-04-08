export class Circle {
    protected r: number;
    protected color: string

    constructor(r: number, color: string) {
        this.r = r;
        this.color = color;
    }

    getArea() {
        return this.r * this.r * Math.PI;
    }

    getR() {
        return this.r;
    }

    setR(r: number) {
        this.r = r;
    }

    getColor() {
        return this.color;
    }

    setColor(color: string) {
        this.color = color;
    }
}
