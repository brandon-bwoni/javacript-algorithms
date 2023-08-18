function rabinKarp(text, pattern, prime) {
  const n = text.length;
  const m = pattern.length;
  const occurrences = [];

  let patternHash = calculateHash(pattern, prime);
  let textHash = calculateHash(text.substring(0, m), prime);

  for (let i = 0; i <= n - m; i++) {
    if (patternHash === textHash && checkEqual(text, pattern, i)) {
      occurrences.push(i);
    }

    if (i < n - m) {
      textHash = recalculateHash(text, i, m, textHash, prime);
    }
  }

  return occurrences;
}

function calculateHash(str, prime) {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = (hash * 256 + str.charCodeAt(i)) % prime;
  }

  return hash;
}

function recalculateHash(text, oldIndex, patternLength, oldHash, prime) {
  let newHash = (oldHash - text.charCodeAt(oldIndex) * Math.pow(256, patternLength - 1)) % prime;
  newHash = (newHash * 256 + text.charCodeAt(oldIndex + patternLength)) % prime;
  if (newHash < 0) {
    newHash += prime;
  }
  return newHash;
}

function checkEqual(text, pattern, startIndex) {
  for (let i = 0; i < pattern.length; i++) {
    if (text[startIndex + i] !== pattern[i]) {
      return false;
    }
  }
  return true;
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const prime = 101;

const result = rabinKarp(text, pattern, prime);
console.log("Pattern found at indices:", result);
