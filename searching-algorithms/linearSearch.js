function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index if the target is found
    }
  }
  return -1; // Return -1 if the target is not found
}

var arr = [5, 3, 8, 2, 9, 1];
var target = 8;
console.log("Array: " + arr);
console.log("Target: " + target);
var result = linearSearch(arr, target);
if (result === -1) {
  console.log("Target not found");
} else {
  console.log("Target found at index " + result);
}
