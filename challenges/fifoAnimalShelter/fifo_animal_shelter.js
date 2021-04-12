'use strict';

const { Queue } = require('../stacksAndQueues/stacks-and-queues.js');

class Dog {
    constructor(name) {
        this.DogName = name;
        this.next = null;
    }
}
class Cat {
    constructor(name) {
        this.CatName = name;
        this.next = null;
    }
}

class AnimalShelter {
    constructor() {
        this.DogShelter = new Queue();
        this.CatShelter = new Queue();
    }
    enqueue(animal) {
        if (animal instanceof Dog) {
            this.DogShelter.enqueue(animal)
        } else if (animal instanceof Cat) {

            this.CatShelter.enqueue(animal)
        } else {
            return 'only cats and dogs';
        }
    }
    dequeue(pref) {
        if (pref === 'dog') {
            if (this.DogShelter.front && this.DogShelter.tail) {
                return this.DogShelter.dequeue();
            } else {
                return 'Not Found'
            }
        } else if (pref === 'cat') {
            if (this.CatShelter.front && this.CatShelter.tail) {
                return this.CatShelter.dequeue();
            } else {
                return 'Not Found'
            }
        } else {
            return null;
        }
    }
}

module.exports = {
    AnimalShelter,
    Cat,
    Dog
}