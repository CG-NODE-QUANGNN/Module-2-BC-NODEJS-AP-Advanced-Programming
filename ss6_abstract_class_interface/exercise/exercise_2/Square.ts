import {Rectangle} from "./Rectangle";
import {Colorable} from "./Colorable";

export class Square extends Rectangle implements Colorable {
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }

    howToColor() {
        console.log("Color all four sides..");
    }
}
