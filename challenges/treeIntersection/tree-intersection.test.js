const { Node, BinaryTree } = require("../tree/tree.js");
const treeIntersection = require("./tree-intersection.js");

describe("Tree Instersection Test", () => {
    let tree1;
    let tree2;
  beforeAll(() => {
    const a150 = new Node(150);
    const a100 = new Node(100);
    const a250 = new Node(250);
    const a75 = new Node(75);
    const a160 = new Node(160);
    const a200 = new Node(200);
    const a350 = new Node(350);
    const a125 = new Node(125);
    const a175 = new Node(175);
    const a300 = new Node(300);
    const a500 = new Node(500);
    a150.left = a100;
    a150.right = a250;
    a100.left = a75;
    a100.right = a160;
    a160.left = a125;
    a160.right = a175;
    a250.left = a200;
    a250.right = a350;
    a350.left = a300;
    a350.right = a500;

    const b42 = new Node(42);
    const b100 = new Node(100);
    const b600 = new Node(600);
    const b15 = new Node(15);
    const b160 = new Node(160);
    const b200 = new Node(200);
    const b350 = new Node(350);
    const b125 = new Node(125);
    const b175 = new Node(175);
    const b4 = new Node(4);
    const b500 = new Node(500);
    b42.left = b100;
    b42.right = b600;
    b100.left = b15;
    b100.right = b160;
    b160.left = b125;
    b160.right = b175;
    b600.left = b200;
    b600.right = b350;
    b350.left = b4;
    b350.right = b500;

    tree1 = new BinaryTree(a150);
    tree2 = new BinaryTree(b42);
  });
  it('should return a set of values found in both trees.',()=>{
      expect(treeIntersection(tree1,tree2)).toEqual([100, 160, 125, 175, 200, 350, 500])
  });
});