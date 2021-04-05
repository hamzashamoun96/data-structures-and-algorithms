'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
        // this.tail = null;
    }

    insert(value) {
      const newNode = new Node(value)
      if (!this.head) {
        this.head = newNode;
        this.length++;
      } else {
        let lastNode = this.head;
        while (lastNode.next) {
          lastNode = lastNode.next
        }
        lastNode.next = newNode
        this.length++
      }
    }

    includes(val) {
        let boo = false;
        let checkNode = this.head
        for (let i = 0; i < this.length; i++) {
            if (checkNode.value === val) {
                boo = true;
            } else {
                checkNode = checkNode.next
            }
        }
        return boo;
    }
    toString(){
        let nextNode = this.head;
        let str = `{${nextNode.value}}->`;
        for(let i = 0; i < this.length; i++){
          nextNode = nextNode.next
          if(nextNode){
           str +=`{${nextNode.value}}->`
          }else{
            str += 'NULL'
          }
        }
        return str
      }
      append(value) {
        const newNode = new Node(value)
        if (!this.head) {
          this.head = newNode;
          this.length++;
        } else {
          let lastNode = this.head;
          while (lastNode.next) {
            lastNode = lastNode.next
          }
          lastNode.next = newNode
          this.length++
        }
      }
      insertBefore(value, newVal){
        let newNode = new Node(newVal);
    if (this.head) {
      let currentNode = this.head;
      if (currentNode.value === value) {
        newNode.next = currentNode;
        this.head = newNode;
        this.length++
        return;
      }
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          let temp = currentNode.next;
          currentNode.next = newNode;
          newNode.next = temp;
          this.length++
          return currentNode.value;
        }
        currentNode = currentNode.next;
      }
    } 
  }
  insertAfter(value, newVal){
    let newNode = new Node(newVal);
    let current = this.head;
    while (current) {
      if (current.value === value) {
        let temp = current.next;
        current.next = newNode;
        newNode.next = temp;
        this.length++
        return;
      }
      current = current.next;
    }
  }
}

module.exports = {
    Node: Node,
    LinkedList: LinkedList,
}