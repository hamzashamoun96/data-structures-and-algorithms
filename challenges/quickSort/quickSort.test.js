const QuickSort = require('./quickSort.js');

describe("Test Quick Sort", () => {
  it("Should sort an array with Quick sort", () => {
    let arr = [8, 4, 23, 42, 16, 15];
    expect(QuickSort(arr , 0 , arr.length-1)).toEqual([4,8,15,16,23,42]);
  });
  it("Should Quick sort the array that Reverse-sorted", () => {
    let arr = [ 20 , 18 , 12 , 8 , 5 ,-2 ];
    expect(QuickSort(arr , 0 ,arr.length-1)).toEqual([ -2 , 5 , 8 , 12 , 18 , 20 ] )

  });
  it("Should Quick sort the array that Few uniques", () => {
    let arr = [ 5 , 12 , 7 , 5 , 5 , 7 ];
    expect(QuickSort(arr , 0 ,arr.length-1)).toEqual([ 5 , 5 , 5 , 7 , 7 , 12 ] )
  });
  it("Should Quick sort the array that Nearly-sorted", () => {
    let arr = [ 2 , 3 , 5 , 7 , 13 , 11 ];
    expect(QuickSort(arr , 0 ,arr.length-1)).toEqual([ 2 , 3 , 5 , 7 , 11 , 13 ] )
  });
});
