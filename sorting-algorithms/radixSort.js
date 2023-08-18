function radixSort(arr) {
  const max = Math.max(...arr);
  const maxLength = max.toString().length;

  // Perform counting sort for each digit
  for (let i = 0; i < maxLength; i++) {
    countingSortByDigit(arr, i);
  }
}

function countingSortByDigit(arr, digit) {
  const count = new Array(10).fill(0);
  const sortedArr = new Array(arr.length);

  // Count the occurrences of each digit
  for (let i = 0; i < arr.length; i++) {
    const num = getDigit(arr[i], digit);
    count[num]++;
  }

  // Modify the count array to store the actual position of each digit
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Build the sorted array by placing elements in their correct positions
  for (let i = arr.length - 1; i >= 0; i--) {
    const num = getDigit(arr[i], digit);
    sortedArr[count[num] - 1] = arr[i];
    count[num]--;
  }

  // Copy the elements from the sorted array to the original array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = sortedArr[i];
  }
}

function getDigit(num, digit) {
  return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
}

var arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Original Array: " + arr);
radixSort(arr);
console.log("Sorted Array: " + arr);
