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
console.log("Duyện tree theo inorder")
tree.inorder(tree.root);

console.log("Duyện tree theo preorder")
tree.preorder(tree.root);
