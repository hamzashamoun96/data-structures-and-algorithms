'use strict';

function multiBracketValidation(input) {
    let boo;
    let reg = /[{}[\]()]/g;
    let arr = input.match(reg);
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i] === arr[i + 1] && arr[i + 2] === arr[i + 3]) {
            boo = true
        } else {
            if (arr[i] === '{') {
                if (arr[i + 1] === '}') {
                    boo = true
                } else {
                    boo = false
                    break
                }
            }
            if (arr[i] === '(') {
                if (arr[i + 1] === ')') {
                    boo = true
                } else {
                    boo = false
                    break
                }
            }
            if (arr[i] === '[') {
                if (arr[i + 1] === ']') {
                    boo = true
                } else {
                    boo = false
                    break
                }
            }
        }
    }
    return boo
}
module.exports = multiBracketValidation;