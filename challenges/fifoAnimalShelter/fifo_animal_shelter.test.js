'use strict';

const { AnimalShelter } = require('./fifo_animal_shelter.js');
const { Cat } = require('./fifo_animal_shelter.js');
const { Dog } = require('./fifo_animal_shelter.js');

describe('Animal Shelter Test', () => {
    it('should make two empty shelters for cat and dog', () => {
        const animalShelter = new AnimalShelter();

        expect(animalShelter.DogShelter.front).toBeNull();
        expect(animalShelter.DogShelter.tail).toBeNull();
        expect(animalShelter.CatShelter.front).toBeNull();
        expect(animalShelter.CatShelter.tail).toBeNull();
    });

    it('should add a dog or a cat to the shelters', () => {
        const animalShelter = new AnimalShelter();

        let katty = new Cat('katty');
        let roy = new Dog('roy');

        animalShelter.enqueue(katty);
        animalShelter.enqueue(roy);

        expect(animalShelter.DogShelter.front.value).toBe(roy);
        expect(animalShelter.CatShelter.front.value).toBe(katty);
    });

    it('should return the dog or the cat from the front of the dog/cat shelter', () => {
        const animalShelter = new AnimalShelter();

        let katty = new Cat('katty');
        let lucy = new Cat('lucy');
        let roy = new Dog('roy');
        let wolfy = new Dog('wolfy');

        animalShelter.enqueue(katty);
        animalShelter.enqueue(lucy);
        animalShelter.enqueue(roy);
        animalShelter.enqueue(wolfy);

        expect(animalShelter.dequeue('cat')).toBe(katty);
        expect(animalShelter.dequeue('dog')).toBe(roy);
    });

    it('should return empty dog/cat shelter after multiple dequeues', () => {
        const animalShelter = new AnimalShelter();

        let katty = new Cat('katty');
        let lucy = new Cat('lucy');
        let roy = new Dog('roy');
        let wolfy = new Dog('wolfy');

        animalShelter.enqueue(katty);
        animalShelter.enqueue(lucy);
        animalShelter.enqueue(roy);
        animalShelter.enqueue(wolfy);

        animalShelter.dequeue('cat')
        animalShelter.dequeue('cat')
        animalShelter.dequeue('dog')
        animalShelter.dequeue('dog')

        expect(animalShelter.DogShelter.front).toBeNull();
        expect(animalShelter.CatShelter.front).toBeNull();
    });
});