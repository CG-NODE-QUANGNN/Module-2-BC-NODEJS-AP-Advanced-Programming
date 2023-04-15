import {Resizeable} from "./Resizeable";

export abstract class Shape implements Resizeable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    show(): string {
        return `I am a shape. My name is ${this.name}`;
    }

    abstract resize(percent: number);
}
