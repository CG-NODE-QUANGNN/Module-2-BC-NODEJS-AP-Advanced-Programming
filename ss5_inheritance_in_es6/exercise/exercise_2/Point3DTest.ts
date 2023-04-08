import {Point3D} from "./Point3D";

let point3D: Point3D = new Point3D(1, 2, 3);
console.log(point3D);
point3D.setXY(3, 4);
point3D.setZ(5);
console.log(point3D.getXYZ());
