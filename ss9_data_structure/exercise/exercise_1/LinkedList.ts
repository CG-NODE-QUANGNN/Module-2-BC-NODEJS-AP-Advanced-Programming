import {Node} from "./Node";

export class LinkedList<T extends { score?: number, name?: string }> {
    head: Node<T> | null;
    tail: Node<T> | null;

    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirst(data: T): void {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;

        if (!this.tail) {
            this.tail = node
        }
        this.size++;
    }

    insertLast(data: T): void {
        if (!this.head) {
            this.insertFirst(data);
        } else {
            let node = new Node(data);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }

    showList(): T[] {
        let listData = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next
        }
        return listData;
    }

    totalStudentsFail(): number {
        let total = 0;
        if (this.size) {
            let currentNode = this.head;
            while (currentNode !== null) {
                if (currentNode.data.score <= 5) {
                    total++;
                }
                currentNode = currentNode.next;
            }
        }

        return total;
    }

    findMaxScore(): number {
        let max = this.head?.data.score;
        let currentNode = this.head;
        while (currentNode !== null) {
            if (max < currentNode.data.score) {
                max = currentNode.data.score;
            }
            currentNode = currentNode.next
        }
        return max;
    }

    listStudentMaxScore() {
        let max = this.findMaxScore();

        let listData = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.data.score == max) {
                listData.push(currentNode.readData());
            }
            currentNode = currentNode.next
        }
        return listData;
    }

    findByName(name: string) {
        let listData = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.data.name.search(name) >= 0) {
                listData.push(currentNode.readData());
            }
            currentNode = currentNode.next
        }
        return listData;
    }
}

