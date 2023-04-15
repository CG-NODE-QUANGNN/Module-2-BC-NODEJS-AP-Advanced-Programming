import {Node} from "./Node";

export class LinkedList<T extends { month?: number, money?: number }> {
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

    showList(): T[] {
        let listData = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next
        }
        return listData;
    }

    calculateTotalSalary(): number {
        let total = 0;
        if (this.size) {
            let currentNode = this.head;
            while (currentNode !== null) {
                total += currentNode.data.money;
                currentNode = currentNode.next;
            }
        }

        return total;
    }

    findMaxMoney(): number {
        let max = this.head?.data.money;
        let currentNode = this.head;
        while (currentNode !== null) {
            if (max < currentNode.data.money) {
                max = currentNode.data.money;
            }
            currentNode = currentNode.next
        }
        return max;
    }
}

