import {Tree} from "../interface/Tree";
import {TreeNode} from "./TreeNode";

export class BinaryTree<E> implements Tree<E> {
    root: TreeNode<E> | null;
    totalNode: number;

    constructor() {
        this.root = null;
        this.totalNode = 0;
    }

    getSize(): number {
        return this.totalNode;
    }

    inorder(node: TreeNode<E>): void {
        if (node) {
            console.log(node.data)
            if (node.left) {
                this.inorder(node.left)
            }
            if (node.right) {
                this.inorder(node.right)
            }
        }
    }

    insert(data: E): TreeNode<E> {
        if (!this.root) {
            this.root = new TreeNode<E>(data);
            this.totalNode++;
            return this.root;
        } else {
            let node = new TreeNode<E>(data);
            let currentNode = this.root;

            while (currentNode) {
                // so sánh giá trị currentNode với data
                if (data < currentNode.data) { // đi xét bên trái tree
                    /* nếu currentNode không có phần tử bên trái thì gán bên trái của
                        currentNode bằng node cần thêm
                     */
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    }
                    // gán lại currentNode cho node bên trái
                    currentNode = currentNode.left;

                } else if (data > currentNode.data) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    }
                    // gán lại currentNode cho node bên phải
                    currentNode = currentNode.right;
                } else {
                    this.totalNode--;
                    break;
                }
            }
            this.totalNode++;
            return currentNode;
        }
    }

    delete(e: E): boolean {
        let parent: TreeNode<E> | null = null;
        let current: TreeNode<E> | null = this.root;

        // Tìm nút cần xoá và nút cha của nó
        while (current !== null && current.data !== e) {
            parent = current;
            if (e < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        if (current === null) { // Nếu không tìm thấy nút cần xoá
            return false;
        }

        // Xử lý trường hợp nút cần xoá không có con trái
        if (current.left === null) {
            if (parent === null) { // Nếu nút cần xoá là nút gốc
                this.root = current.right;
            } else {
                if (e < parent.data) {
                    parent.left = current.right;
                } else {
                    parent.right = current.right;
                }
            }
        }
        // Xử lý trường hợp nút cần xoá có con trái
        else {
            let rightmost: TreeNode<E> = current.left;

            // Tìm nút phải nhất trong cây con trái
            while (rightmost.right !== null) {
                rightmost = rightmost.right;
            }

            // Sao chép giá trị của nút phải nhất vào nút cần xoá
            current.data = rightmost.data;

            // Xoá nút phải nhất
            if (rightmost.left !== null) {
                parent = current;
                current = rightmost.left;
                while (current.right !== null) {
                    parent = current;
                    current = current.right;
                }
                parent.right = current.left;
            } else {
                if (current.left === rightmost) {
                    current.left = rightmost.left;
                } else {
                    rightmost.left = current.left;
                    if (parent === null) {
                        this.root = rightmost;
                    } else {
                        if (e < parent.data) {
                            parent.left = rightmost;
                        } else {
                            parent.right = rightmost;
                        }
                    }
                }
            }
        }

        this.totalNode--;
        return true;
    }

    preorder(node: TreeNode<E>): void {
        if (node) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }
}
