'use strict';
const BinarySearch = require('./array-binary-search.js')
describe('Testing Array Shift', () => {
    test('Array Shift', () => {
        expect(BinarySearch([4, 8, 15, 16, 23, 42], 15)).toEqual(2);
        expect(BinarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toEqual(-1);
        expect(BinarySearch([11, 22, 33, 44, 55, 66, 77], 55)).toEqual(4);
        expect(BinarySearch([11, 22, 33, 44, 55, 66, 77], 77)).toEqual(6);
        expect(BinarySearch([1, 2, 3, 5, 6, 7], 1)).toEqual(0);
    });
});