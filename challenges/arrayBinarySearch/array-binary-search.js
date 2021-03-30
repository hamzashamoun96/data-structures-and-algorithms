'use strict'
function BinarySearch(arr, num) {
    let count = 0
    let middle;
    let diff;
    let end = arr.length - 1
    if (arr.length % 2 == 0) {
        middle = arr.length / 2
    } else {
        middle = Math.floor(arr.length / 2) + 1
    }
    while (count <= arr.length) {
        count++;
        if (arr[middle] == num) {
            return middle
        } else if (num > arr[middle]) {
            if (((end + middle) / 2) % 2 == 0) {
                diff = (end + middle) / 2
                middle = diff
            } else {
                diff = Math.floor(((end + middle) / 2)) + 1
                middle = diff
            }
            if (arr[diff] == num) {
                return diff
            }
        } else if (num < arr[middle]) {
            if (((middle) / 2) % 2 == 0) {
                diff = (middle) / 2
                middle = diff
            } else {
                diff = Math.floor(((middle) / 2))
                middle = diff
            }
            if (arr[diff] == num) {
                return diff
            }
        }
    }
    return -1
}

module.exports = BinarySearch