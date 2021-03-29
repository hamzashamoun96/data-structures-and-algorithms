'use strict';

const arrayShift = require('./array-shift.js')
describe('Testing Array Shift', () => {
    test('Array Shift', () => {
        expect(arrayShift([1, 2, 3, 4, 5, 6], 10)).toStrictEqual([1, 2, 3, 10, 4, 5, 6]);
    });
});