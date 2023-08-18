class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
    this.failureLink = null;
    this.outputLinks = [];
  }
}

class AhoCorasick {
  constructor() {
    this.root = new TrieNode();
  }

  addPattern(pattern) {
    let currentNode = this.root;

    for (let i = 0; i < pattern.length; i++) {
      const char = pattern[i];

      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }

      currentNode = currentNode.children.get(char);
    }

    currentNode.isEndOfWord = true;
  }

  buildFailureLinks() {
    const queue = [];

    for (const [char, node] of this.root.children) {
      node.failureLink = this.root;
      queue.push(node);
    }

    while (queue.length > 0) {
      const currentNode = queue.shift();

      for (const [char, child] of currentNode.children) {
        queue.push(child);

        let failureLinkNode = currentNode.failureLink;

        while (failureLinkNode !== null && !failureLinkNode.children.has(char)) {
          failureLinkNode = failureLinkNode.failureLink;
        }

        child.failureLink = failureLinkNode ? failureLinkNode.children.get(char) : this.root;

        child.outputLinks = child.failureLink.isEndOfWord
          ? [child.failureLink, ...child.failureLink.outputLinks]
          : child.failureLink.outputLinks;
      }
    }
  }

  search(text) {
    let currentNode = this.root;
    const occurrences = [];

    for (let i = 0; i < text.length; i++) {
      const char = text[i];

      while (currentNode !== null && !currentNode.children.has(char)) {
        currentNode = currentNode.failureLink;
      }

      if (currentNode === null) {
        currentNode = this.root;
        continue;
      }

      currentNode = currentNode.children.get(char);

      for (const outputLink of currentNode.outputLinks) {
        occurrences.push([i - outputLink.output.length + 1, outputLink.output]);
      }
    }

    return occurrences;
  }
}

// Example usage
const ac = new AhoCorasick();

ac.addPattern("he");
ac.addPattern("she");
ac.addPattern("his");
ac.addPattern("hers");

ac.buildFailureLinks();

const text = "ushers";
const result = ac.search(text);

console.log("Pattern found at indices:");
result.forEach(([index, pattern]) => {
  console.log(`Index: ${index}, Pattern: ${pattern}`);
});
