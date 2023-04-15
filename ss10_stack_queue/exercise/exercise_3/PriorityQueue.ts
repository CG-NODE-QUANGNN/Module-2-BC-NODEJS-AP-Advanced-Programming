import {Patient} from "./Patient";

export class PriorityQueue {
    private patients: Patient[];

    constructor() {
        this.patients = [];
    }

    enqueue(patient: Patient): void {
        this.patients.push(patient);
    }

    dequeue(): Patient {
        this.patients.sort((a, b) => b.code - a.code);
        return this.patients.shift();
    }

    front(): Patient {
        return this.patients[0];
    }

    isEmpty(): boolean {
        return this.patients.length === 0;
    }

    size(): number {
        return this.patients.length;
    }

    toString() {
        return this.patients;
    }
}
