import {BinaryTree} from "./src/BinaryTree";

let tree = new BinaryTree<number>();
tree.insert(6);
tree.insert(5);
tree.insert(7);
tree.insert(7);
tree.insert(7);
tree.insert(7);
tree.insert(3);
tree.insert(4);
tree.insert(4);
tree.insert(4);
tree.insert(4);
tree.insert(4);
tree.delete(4)
tree.delete(3)

console.log(`The numbers of nodes ${tree.totalNode}`)
tree.inorder(tree.root)
