const { Mergesort } = require("./mergeSort.js");

describe("Test Merge Sort", () => {
  it("Should sort an array with merge sort", () => {
    let arr = [8, 4, 23, 42, 16, 15];
    expect(Mergesort(arr)).toEqual([4,8,15,16,23,42]);
  });
  it("Should merge sort the array that Reverse-sorted", () => {
    let arr = [ 20 , 18 , 12 , 8 , 5 ,-2 ];
    expect(Mergesort(arr)).toEqual([ -2 , 5 , 8 , 12 , 18 , 20 ] )

  });
  it("Should merge sort the array that Few uniques", () => {
    let arr = [ 5 , 12 , 7 , 5 , 5 , 7 ];
    expect(Mergesort(arr)).toEqual([ 5 , 5 , 5 , 7 , 7 , 12 ] )
  });
  it("Should merge sort the array that Nearly-sorted", () => {
    let arr = [ 2 , 3 , 5 , 7 , 13 , 11 ];
    expect(Mergesort(arr)).toEqual([ 2 , 3 , 5 , 7 , 11 , 13 ] )
  });
});
