class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.edges = [];
  }

  addEdge(source, destination, weight) {
    this.edges.push({ source, destination, weight });
  }

  find(parent, i) {
    if (parent[i] === i) {
      return i;
    }
    return this.find(parent, parent[i]);
  }

  union(parent, rank, x, y) {
    const xRoot = this.find(parent, x);
    const yRoot = this.find(parent, y);

    if (rank[xRoot] < rank[yRoot]) {
      parent[xRoot] = yRoot;
    } else if (rank[xRoot] > rank[yRoot]) {
      parent[yRoot] = xRoot;
    } else {
      parent[yRoot] = xRoot;
      rank[xRoot]++;
    }
  }

  kruskalMST() {
    const result = [];
    const parent = [];
    const rank = [];

    for (let i = 0; i < this.vertices; i++) {
      parent[i] = i;
      rank[i] = 0;
    }

    this.edges.sort((a, b) => a.weight - b.weight);

    let edgeCount = 0;
    let index = 0;

    while (edgeCount < this.vertices - 1) {
      const { source, destination, weight } = this.edges[index++];

      const x = this.find(parent, source);
      const y = this.find(parent, destination);

      if (x !== y) {
        result.push({ source, destination, weight });
        this.union(parent, rank, x, y);
        edgeCount++;
      }
    }

    this.printMST(result);
  }

  printMST(result) {
    console.log("Edge   Weight");
    for (let i = 0; i < result.length; i++) {
      console.log(
        result[i].source + " - " + result[i].destination + "   " + result[i].weight
      );
    }
  }
}

// Example usage
const graph = new Graph(5);
graph.addEdge(0, 1, 2);
graph.addEdge(0, 3, 6);
graph.addEdge(1, 2, 3);
graph.addEdge(1, 3, 8);
graph.addEdge(1, 4, 5);
graph.addEdge(2, 4, 7);
graph.addEdge(3, 4, 9);

graph.kruskalMST();
