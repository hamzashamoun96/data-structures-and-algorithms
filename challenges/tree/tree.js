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
                    }else{
                        node.right = newNode;
                    }
                } else if (value < node.value) {
                    if (node.left) {
                        _traverse(node.left)
                    }else{
                        node.left = newNode;
                    }
                }
            }
            _traverse(this.root);
        }
    }
    // contains(value) {
    //     let boo = false
    //     let root = this.root
    //     while(root){
    //         if(value > root.value){
    //              root = root.right;
    //         }else if (value < root.value){
    //              root = root.left;
    //         }else{
    //             boo = true
    //         }
    //     }
    //     return boo;
    // }

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