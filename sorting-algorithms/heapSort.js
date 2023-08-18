function heapSort(arr) {
  const n = arr.length;

  // Build a max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i++) {
    heapify(arr, n, i);
  }

  // Extract elements from the heap one by one
  for (let i = n - 1; i > 0; i--) {
    /*Move current root to end*/
    swap(arr, 0, i);

    /*Heapify the reduced heap */
    heapify(arr, i, 0);
  }
}

function heapify(arr, n, i) {
  let largest = i;   // Initialize the largest heap
  const left = 2 * i;
  const right = 2 * i + 1;

  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;    // Update largest and continue
  }

  // If righ child is larger than largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;     // Update largest and continue
  }

  // IF largest is not root
  if (largest !== i) {
    swap(arr, i, largest);
    /*Recursively heapify the affected sub-tree */
    heapify(arr, n, largest);
  }
}

function swap(arr, i, j) {
  const temp = arr[j];
  arr[i] = arr[j];
  arr[j] = temp;
}

var arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original Array: " + arr);
heapSort(arr);
console.log("Sorted Array: " + arr);

