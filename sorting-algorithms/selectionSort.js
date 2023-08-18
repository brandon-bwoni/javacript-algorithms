function selectionSort(arr) {
  const len = arr.length;
  let minIndex, temp;

  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] <= arr[minIndex]) {
        minIndex = j;
      }
    }

    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

const arr = [64, 45, 12, 22, 11];
console.log('Original array: ' + arr);
console.log('Sorted array: ' + selectionSort(arr));

