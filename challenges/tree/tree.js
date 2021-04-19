'use strict';

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }
    preOrder() {                     // root => left => right
        const result = [];
        const _traverse = (node) => {
            result.push(node.value)
            if (node.left) {
                _traverse(node.left)
            };
            if (node.right) {
                _traverse(node.right)
            };
        }
        _traverse(this.root);
        return result;
    }
    inOrder() {
        const result = [];
        const _traverse = (node) => {
            if (node.left) {
                _traverse(node.left)
            };
            result.push(node.value)
            if (node.right) {
                _traverse(node.right)
            };
        }
        _traverse(this.root);
        return result;
    }
    postOrder() {
        const result = [];
        const _traverse = (node) => {
            if (node.left) {
                _traverse(node.left)
            };
            if (node.right) {
                _traverse(node.right)
            };
            result.push(node.value)
        }
        _traverse(this.root);
        return result;
    }
    findMaximumValue() {
        let max = 0;
        const _traverse = (node) => {
            if (node.left) {
                _traverse(node.left)
            };
            if (node.right) {
                _traverse(node.right)
            };
            if (node.value > max) {
                max = node.value
            }
        }
        _traverse(this.root);
        return max;
    }
    breadthFirst() {
        let values = [];
        let queue = [];
        let current = this.root;
        queue.push(current);
        while (queue.length) {
            current = queue.shift();
            values.push(current.value);

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        };
        return values;
    }
}

class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }
    add(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            const _traverse = (node) => {
                if (value > node.value) {
                    if (node.right) {
                        _traverse(node.right)
                    } else {
                        node.right = newNode;
                    }
                } else if (value < node.value) {
                    if (node.left) {
                        _traverse(node.left)
                    } else {
                        node.left = newNode;
                    }
                }
            }
            _traverse(this.root);
        }
    }
    contains(value) {
        let root = this.root;
        while (root) {
            if (value < root.value) root = root.left;
            else if (value > root.value) root = root.right;
            else return true;
        }
        return false;
    }
}

module.exports = {
    Node,
    BinaryTree,
    BinarySearchTree
}