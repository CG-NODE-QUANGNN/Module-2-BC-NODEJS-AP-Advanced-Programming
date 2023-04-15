import {Shape} from "./Shape";
import {Square} from "./Square";
import {Rectangle} from "./Rectangle";
import {Circle} from "./Circle";
import {Cylinder} from "./Cylinder";

let shapes: Shape[] = [];
shapes.push(new Square("Hình vông mày đỏ", 5));
shapes.push(new Rectangle(10, 5, "Hình chữ nhật màu cam"));
shapes.push(new Circle("Hình tròn màu cam", 15, ));
shapes.push(new Cylinder("Hình trụ màu vàng", 20, 25));

for(let shape of shapes) {
    console.log(shape)
    shape.resize(Math.ceil(Math.random() * 100 + 1))
    console.log(shape)
}
