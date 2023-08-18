function calculateZArray(str) {
  const n = str.length;
  const Z = new Array(n).fill(0);

  let [left, right] = [0, 0];

  for (let i = 1; i < n; i++) {
    if (i > right) {
      left = right = i;
      while (right < n && str[right - left] === str[right]) {
        right++;
      }
      Z[i] = right - left;
      right--;
    } else {
      const k = i - left;
      if (Z[k] < right - i + 1) {
        Z[i] = Z[k];
      } else {
        left = i;
        while (right < n && str[right - left] === str[right]) {
          right++;
        }
        Z[i] = right - left;
        right--;
      }
    }
  }

  return Z;
}

function ZAlgorithm(text, pattern) {
  const concat = pattern + "$" + text;
  const len = concat.length;
  const patternLength = pattern.length;

  const Z = calculateZArray(concat);

  const occurrences = [];

  for (let i = patternLength + 1; i < len; i++) {
    if (Z[i] === patternLength) {
      occurrences.push(i - patternLength - 1);
    }
  }

  return occurrences;
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABAB";

const result = ZAlgorithm(text, pattern);
console.log("Pattern found at indices:", result);
