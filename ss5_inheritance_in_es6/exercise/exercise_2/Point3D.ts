import {Point2D} from "./Point2D";

export class Point3D extends Point2D {
    private z: number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }

    getZ(): number {
        return this.z;
    }

    setZ(z: number) {
        this.z = z;
    }

    getXYZ(): number[] {
        return [...super.getXY(), this.z];
    }

    setXYZ(x: number, y: number, z: number): void {
        super.setXY(x, y);
        this.z = z;
    }
}
