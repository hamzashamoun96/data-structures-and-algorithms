const { Node } = require('./tree.js')
const { BinaryTree } = require('./tree.js')
const { BinarySearchTree } = require('./tree.js')

describe('Binary Tree', () => {
    let tree;
    beforeAll(() => {
        const one = new Node(1);
        const two = new Node(2);
        const three = new Node(3);
        const four = new Node(4);
        const five = new Node(5);
        const six = new Node(6);
        const seven = new Node(7);
        const eight = new Node(8);
        const nine = new Node(9);
        const ten = new Node(10);
        const eleven = new Node(11);
        const twelve = new Node(12);
        one.left = two;
        one.right = three;
        two.left = four;
        two.right = five;
        four.left = eight;
        four.right = nine;
        five.left = ten;
        three.left = six;
        three.right = seven;
        six.right = eleven;
        seven.right = twelve;

        tree = new BinaryTree(one);
    });

    it('preOrder', () => {
        const expected = [1, 2, 4, 8, 9, 5, 10, 3, 6, 11, 7, 12];
        const preOrder = tree.preOrder();
        expect(preOrder).toEqual(expected);
    });
    it('inOrder', () => {
        const expected = [8, 4, 9, 2, 10, 5, 1, 6, 11, 3, 7, 12];
        const inOrder = tree.inOrder();
        expect(inOrder).toEqual(expected);
    });
    it('postOrder', () => {
        const expected = [8, 9, 4, 10, 5, 2, 11, 6, 12, 7, 3, 1];
        const postOrder = tree.postOrder();
        expect(postOrder).toEqual(expected);
    });
    it('can successfully search for the maximum value in the tree', () => {
        // console.log(tree)
        expect(tree.findMaximumValue()).toBe(12);
    });
    it('breadthFirst', () => {
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const breadthFirst = tree.breadthFirst();
        expect(breadthFirst).toEqual(expected);
    });
});
describe('Binary Search Tree', () => {
    it('can successfully instantiate an empty tree', () => {
        const tree = new BinarySearchTree();
        expect(tree.root).toBeNull();
    });

    it('can successfully add a root node to existing empty tree', () => {
        const tree = new BinarySearchTree();
        const value = 8;
        tree.add(value);
        expect(tree.root.value).toEqual(value);
    });
    it('can successfully add a left child and right child to a single root node', () => {
        const tree = new BinarySearchTree();
        const root = 10;
        const value1 = 5;
        const value2 = 20;
        tree.add(root);
        tree.add(value1);
        tree.add(value2);
        expect(tree.root.left.value).toEqual(value1);
        expect(tree.root.right.value).toEqual(value2);
    });
    it('can successfully add a new node in the correct location in the binary search tree', () => {
        const tree = new BinarySearchTree();
        tree.add(10);
        tree.add(5);
        tree.add(15);
        tree.add(13);
        tree.add(7);
        tree.add(9);

        expect(tree.root.left.right.right.value).toEqual(9);
        expect(tree.root.right.left.value).toEqual(13);
    });
    it('can successfully search for a value in the tree', () => {
        const tree = new BinarySearchTree();
        tree.add(10);
        tree.add(5);
        tree.add(15);
        tree.add(13);

        expect(tree.contains(10)).toBe(true);
        expect(tree.contains(15)).toBe(true);
        expect(tree.contains(19)).toBe(false);
    });
});