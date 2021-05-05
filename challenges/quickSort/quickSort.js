function QuickSort(arr, left, right) {
  if (left >= right) return;
  let position = partition(arr, left, right);

  QuickSort(arr, left, position - 1);
  QuickSort(arr, position + 1, right);

  return arr;
}
function partition(arr, left, right) {
  let pivot = arr[right];

  let low = left - 1;
  for (let i = left; i <= right; i++) {
    if (arr[i] <= pivot) {
      Swap(arr, i, ++low);
    }
  }
  return low;
}
function Swap(arr, i, low) {
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}
module.exports = QuickSort;