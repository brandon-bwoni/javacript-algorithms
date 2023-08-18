function bubbleSort(arr) {
  const len = arr.length;
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  }
  return arr;
}
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log('Original array: ' + arr);
console.log('Sorted array:  ' + bubbleSort(arr));

