'use strict';

const { Stack } = require('../stacksAndQueues/stacks-and-queues.js')

class PseudoQueue {
    constructor() {
        this.Stack1 = new Stack();
        this.Stack2 = new Stack();
    }
    enqueue(value) {
        this.Stack1.push(value);
    }
    dequeue() {
        let poped;
        if (this.Stack1.length === 0) {
            return 'exception';
        } else {
            while (this.Stack1.length > 0) {
                this.Stack2.push(this.Stack1.pop())
            }
            poped = this.Stack2.pop()
        }
        while (this.Stack2.length > 0) {
            this.Stack1.push(this.Stack2.pop())
        }
        return poped;
    }
}
module.exports = PseudoQueue;