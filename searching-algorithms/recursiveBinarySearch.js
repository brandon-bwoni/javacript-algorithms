function binarySearch(arr, target, left, right) {
  if (left > right) {
    return -1; // Base case: target not found
  }

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid; // Base case: target found
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right); // Search in the right half
  } else {
    return binarySearch(arr, target, left, mid - 1); // Search in the left half
  }
}

var arr = [1, 3, 5, 7, 9, 11];
var target = 7;
console.log("Array: " + arr);
console.log("Target: " + target);
var result = binarySearch(arr, target, 0, arr.length - 1);
if (result === -1) {
  console.log("Target not found");
} else {
  console.log("Target found at index " + result);
}
