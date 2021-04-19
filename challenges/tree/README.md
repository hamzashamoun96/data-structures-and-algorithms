# Trees

Type of data structure, It consists of root node and a children nodes and every node can hava a maximum od two node children in the binary tree.
## Challenge

It is not a challenge when you know how

## Approach & Efficiency
### BinaryTree
* preOrder: space O(h)/time O(n)
* inOrder: space O(h)/time O(n)
* postOrder: space O(h)/time O(n)
* breadthFirst: space O(h)/time O(n)

### BinarySearchTree
* add(value): space O(1)/time O(n)
* contain(value): space O(1)/time O(n)

## API
* preOrder() Returns an array with the tree values ordered root > left > right.
* inOrder() Returns an array with the tree values ordered left > root > right.
* postOrder() Returns an array with the tree values ordered root > left > right.
* findMaximumValue() return the maximum value in the tree.
* breadthFirst() Returns an arra with the tree values ordered level by level from left to right.

The BinarySearchTree contains two methods:
* add(value) Adds the input value in its place in the sorted tree.
* contains(value) Search the tree and checks if the input value exists.

## Test 
* To test it in the terminal run the command npm test tree.
## Solution
![uml](/assets/tree.png)