'use strict'
const { LinkedList } = require('./linked-list.js')


test('should instantiate an empty linked list', () => {
    let newLL = new LinkedList();
    expect(newLL.head).toEqual(null)
})

test('should properly insert a Head into the linked list', () => {
    let newLL = new LinkedList();
    newLL.insert(10); // it will be the head.
    expect(newLL.head.value).toEqual(10);
})

test('should properly insert a Node at the last of the linked list and the head will point to the first node', () => {
    let newLL = new LinkedList();
    newLL.insert(10); // it will be the head.
    newLL.insert(15); // it will be next to the head.
    newLL.insert(20); // it will be the last node.

    let lastNode = newLL.head
    while (lastNode.next) {
        lastNode = lastNode.next
    }
    expect(newLL.head.value).toEqual(10);
    expect(newLL.head.next.value).toEqual(15);
    expect(lastNode.value).toEqual(20)
    expect(lastNode.next).toEqual(null)
})

test('should return true when finding a value within the linked list that exists', () => {
    let newLL = new LinkedList();
    newLL.insert(10); // it will be the head.
    newLL.insert(5)
    expect(newLL.includes(10)).toEqual(true);
})

test('should return false when searching for a value in the linked list that does not exist', () => {
    let newLL = new LinkedList();
    newLL.insert(10); // it will be the head.
    newLL.insert(5)
    expect(newLL.includes(33)).toEqual(false);
})

test('Can properly return a collection of all the values that exist in the linked lis', () => {
    let newLL = new LinkedList();
    newLL.insert(10); // it will be the head.
    newLL.insert(5)
    expect(newLL.toString()).toBe("{10}->{5}->NULL");
})
