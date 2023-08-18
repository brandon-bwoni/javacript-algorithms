function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Return the index if the target is found
    } else if (arr[mid] < target) {
      left = mid + 1; // Continue searching in the right half
    } else {
      right = mid - 1; // Continue searching in the left half
    }
  }

  return -1; // Return -1 if the target is not found
}

var arr = [1, 3, 5, 7, 9, 11];
var target = 7;
console.log("Array: " + arr);
console.log("Target: " + target);
var result = binarySearch(arr, target);
if (result === -1) {
  console.log("Target not found");
} else {
  console.log("Target found at index " + result);
}
