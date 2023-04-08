export class Employee {
    protected id: number;
    private name: string;
    private dateOfBirth: Date;
    private address: string;
    private position: string;

    constructor(id, name, dateOfBirth, address, position) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.position = position;
    }


    getId(): number {
        return this.id;
    }

    setId(value: number) {
        this.id = value;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getDateOfBirth(): Date {
        return this.dateOfBirth;
    }

    setDateOfBirth(value: Date) {
        this.dateOfBirth = value;
    }

    getAddress(): string {
        return this.address;
    }

    setAddress(value: string) {
        this.address = value;
    }

    getPosition(): string {
        return this.position;
    }

    setPosition(value: string) {
        this.position = value;
    }
}
