'use strict';

const PseudoQueue = require('./queue-with-stacks.js');

describe('Pseudo Queue Tests', () => {
    it('should instantiate an empty Pseudoqueue with stacks object', () => {
        const sQueue = new PseudoQueue();

        expect(sQueue.Stack1.top).toBeNull();
        expect(sQueue.Stack1.top).toBeNull();
    });

    it('should add node (enqueue) an empty Pseudoqueue', () => {
        const sQueue = new PseudoQueue();
        let value = 5;
        let value2 = 10;
        sQueue.enqueue(value);
        sQueue.enqueue(value2);

        expect(sQueue.Stack1.top.value).toBe(value2);
        expect(sQueue.Stack1.length).toBe(2);
    });

    it('should remove node (dequeue) from Pseudoqueue', () => {
        const sQueue = new PseudoQueue();
        let value = 5;
        let value2 = 10;
        let value3 = 20;

        sQueue.enqueue(value);
        sQueue.enqueue(value2);
        sQueue.enqueue(value3);

        expect(sQueue.dequeue()).toBe(value);
        expect(sQueue.dequeue()).toBe(value2);
        expect(sQueue.dequeue()).toBe(value3);
        expect(sQueue.dequeue()).toBe('exception');
    });

});