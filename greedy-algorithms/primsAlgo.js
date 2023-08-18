class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjacencyMatrix = [];
    for (let i = 0; i < vertices; i++) {
      this.adjacencyMatrix[i] = new Array(vertices).fill(0);
    }
  }

  addEdge(source, destination, weight) {
    this.adjacencyMatrix[source][destination] = weight;
    this.adjacencyMatrix[destination][source] = weight;
  }

  findMinKey(keys, visited) {
    let min = Infinity;
    let minIndex = -1;

    for (let i = 0; i < this.vertices; i++) {
      if (visited[i] === false && keys[i] < min) {
        min = keys[i];
        minIndex = i;
      }
    }

    return minIndex;
  }

  printMST(parent, graph) {
    console.log("Edge   Weight");
    for (let i = 1; i < this.vertices; i++) {
      console.log(parent[i] + " - " + i + "   " + graph[i][parent[i]]);
    }
  }

  primMST() {
    const parent = new Array(this.vertices);
    const keys = new Array(this.vertices);
    const visited = new Array(this.vertices);

    for (let i = 0; i < this.vertices; i++) {
      keys[i] = Infinity;
      visited[i] = false;
    }

    keys[0] = 0;
    parent[0] = -1;

    for (let count = 0; count < this.vertices - 1; count++) {
      const u = this.findMinKey(keys, visited);
      visited[u] = true;

      for (let v = 0; v < this.vertices; v++) {
        if (
          this.adjacencyMatrix[u][v] !== 0 &&
          visited[v] === false &&
          this.adjacencyMatrix[u][v] < keys[v]
        ) {
          parent[v] = u;
          keys[v] = this.adjacencyMatrix[u][v];
        }
      }
    }

    this.printMST(parent, this.adjacencyMatrix);
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

graph.primMST();
