function countingSort(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min + 1;

  // Create a count array to store the count of each element
  const count = new Array(range).fill(0);

  // Store the count of each element in the count array
  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }

  // Modify the count array to store the actual position of each element
  for (let i = 1; i < range; i++) {
    count[i] += count[i - 1];
  }

  // Create a result array to store the sorted elements
  const result = new Array(arr.length);

  // Build the result array by placing elements in their correct positions
  for (let i = arr.length - 1; i >= 0; i--) {
    result[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }

  // Copy the elements from the result array to the original array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = result[i];
  }
}

var arr = [4, 2, 2, 8, 3, 3, 1];
console.log("Original Array: " + arr);
countingSort(arr);
console.log("Sorted Array: " + arr);
