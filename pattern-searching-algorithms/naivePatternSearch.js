function naivePatternSearch(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const occurrences = [];

  for (let i = 0; i <= n - m; i++) {
    let j;

    for (j = 0; j < m; j++) {
      if (text[i + j] !== pattern[j]) {
        break;
      }
    }

    if (j === m) {
      occurrences.push(i);
    }
  }

  return occurrences;
}

// Example usage
const text = "ABABCABABABA";
const pattern = "ABA";

const result = naivePatternSearch(text, pattern);
console.log("Pattern found at indices:", result);
