'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.length = 0;
        this.top = null;
    }
    push(value) {
        const newNode = new Node(value);
        if (!this.top) {
            this.top = newNode
            this.length++
        } else {
            newNode.next = this.top
            this.top = newNode;
            this.length++
        }
    }
    pop() {
        let popedNode;
        if (!this.top) {
            return 'exception';
        } else {
            popedNode = this.top;
            this.length--;
            this.top = this.top.next;
        }
        return popedNode.value;
    }
    peak() {
        return !this.top ? 'exception' : this.top;
    }
    isEmpty() {
        return this.length === 0 ? true : false;
    }
}


class Queue {
    constructor() {
        this.front = null;
        this.tail = null;
        this.length = 0;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (!this.front) {
            this.front = newNode;
            this.tail = newNode;
            this.length++;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
    }
    dequeue() {
        let dequeueNode;
        if (!this.front && !this.tail) {
            return 'exception';
        } else {
            if (this.length === 1) {
                dequeueNode = this.front;
                this.front = null;
                this.tail = null;
                this.length--;
                return dequeueNode;
            } else {
                dequeueNode = this.front.value;
                this.front = this.front.next;
                this.length--;
                return dequeueNode;
            }
        }
    }
    peak() {
        return !this.front ? 'exception' : this.front.value;
    }
    isEmpty() {
        return !this.front ? true : false;
    }
}





module.exports = {
    Stack: Stack,
    Queue: Queue,
}