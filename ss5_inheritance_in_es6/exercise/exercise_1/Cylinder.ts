import {Circle} from "./Circle";

export class Cylinder extends Circle {
    private h: number;

    constructor(r: number, color: string, h: number) {
        super(r, color);
        this.h = h;
    }

    getVolume(): number {
        return super.getArea() * this.h;
    }

    getH(): number {
        return this.h;
    }

    setH(h: number) {
        this.h = h;
    }
}
