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
}

module.exports = {
    Node: Node,
    LinkedList: LinkedList,
}