export class Shape {
    protected name: string;
    protected color: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    getColor(): string {
        return this.color;
    }

    setColor(color: string) {
        this.color = color;
    }
}
