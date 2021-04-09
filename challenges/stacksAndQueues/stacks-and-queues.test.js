'use strict';

const { Stack } = require('./stacks-and-queues.js');
const { Queue } = require('./stacks-and-queues.js')

// Stack Tests ------------------------------------------------------------

describe('Stack Tests', () => {
    it('should the stack be empty', () => {
        let stack = new Stack();
        expect(stack.length).toBe(0);
        expect(stack.top).toBeNull();
    });

    it('should push to the stack', () => {
        let stack = new Stack();
        let value = 5;
        let value2 = 10;
        stack.push(value);
        stack.push(value2);

        expect(stack.length).toBe(2);
        expect(stack.top.value).toBe(value2);
        expect(stack.top.next.value).toBe(value);
        expect(stack.top.next.next).toBeNull();

    });

    it('should pop from the stack and return the poped node value', () => {
        let stack = new Stack();
        let value = 5;
        let value2 = 10;
        stack.push(value);
        stack.push(value2);

        let popedNode = stack.pop();

        expect(stack.length).toBe(1);
        expect(stack.top.value).toBe(value);
        expect(stack.top.next).toBeNull();
        expect(popedNode).toBe(value2);
    });

    it('should empty the stack after multiple pops from the stack', () => {
        let stack = new Stack();
        let value = 5;
        let value2 = 10;
        let value3 = 20;
        stack.push(value);
        stack.push(value2);
        stack.push(value3);

        stack.pop();
        stack.pop();
        stack.pop();

        expect(stack.length).toBe(0);
        expect(stack.top).toBeNull();
    });

    it('should return an exception when pop an empty stack', () => {
        let stack = new Stack();
        expect(stack.pop()).toBe('exception');
    });

    it('should return an exception when peak to an empty stack', () => {
        let stack = new Stack();
        expect(stack.peak()).toBe('exception');
    });

    it('should return the top node when peak to stack without removing it', () => {
        let stack = new Stack();
        let value = 5;
        let value2 = 10;
        let value3 = 20;
        stack.push(value);
        stack.push(value2);
        stack.push(value3);

        expect(stack.peak().value).toBe(value3);
        expect(stack.length).toBe(3);
    });

    it('should return boolean if the stack empty or not', () => {
        let stack = new Stack();
        expect(stack.isEmpty()).toBe(true);
        stack.push(5)
        expect(stack.isEmpty()).toBe(false);
    });

});

// Queue Tests ------------------------------------------------------------

describe('Queue Tests', () => {
    it('sould be an empty queue', () => {
        let queue = new Queue();
        expect(queue.length).toBe(0);
        expect(queue.front).toBeNull();
        expect(queue.tail).toBeNull();
    });

    it('sould add a new node at the end of the queue', () => {
        let queue = new Queue();
        let value = 5;
        let value2 = 10;
        let value3 = 20;

        queue.enqueue(value);
        queue.enqueue(value2);
        queue.enqueue(value3);

        expect(queue.length).toBe(3);
        expect(queue.front.value).toBe(value);
        expect(queue.tail.value).toBe(value3);
    });

    it('sould dequeue from the queue and return the dequeue node value', () => {
        let queue = new Queue();
        let value = 5;
        let value2 = 10;
        let value3 = 20;

        queue.enqueue(value);
        queue.enqueue(value2);
        queue.enqueue(value3);

        let dequeueNode = queue.dequeue()

        expect(queue.length).toBe(2);
        expect(queue.front.value).toBe(value2);
        expect(queue.tail.value).toBe(value3);
        expect(dequeueNode).toBe(value)
    });
    it('sould return and empty queue after mltiple dequeues to the queue', () => {
        let queue = new Queue();
        let value = 5;
        let value2 = 10;
        let value3 = 20;

        queue.enqueue(value);
        queue.enqueue(value2);
        queue.enqueue(value3);

        queue.dequeue();
        queue.dequeue();
        queue.dequeue();

        expect(queue.length).toBe(0);
        expect(queue.front).toBeNull();
        expect(queue.tail).toBeNull();
    });
    it('should return an exception when dequeue an empty queue', () => {
        let queue = new Queue();
        expect(queue.dequeue()).toBe('exception');
    });

    it('should return an exception when peak to an empty queue', () => {
        let queue = new Queue();
        expect(queue.peak()).toBe('exception');
    });

    it('should return the front node when peak to the queue without removing it', () => {
        let queue = new Queue();
        let value = 5;
        let value2 = 10;
        let value3 = 20;
        queue.enqueue(value);
        queue.enqueue(value2);
        queue.enqueue(value3);

        expect(queue.peak()).toBe(5);
        expect(queue.length).toBe(3);
    });
    
    it('should return boolean if the queue empty or not', () => {
        let queue = new Queue();
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue(5)
        expect(queue.isEmpty()).toBe(false);
    });
});