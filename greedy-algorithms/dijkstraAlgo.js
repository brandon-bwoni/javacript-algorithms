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

  dijkstra(source) {
    const distances = new Array(this.vertices).fill(Infinity);
    const visited = new Array(this.vertices).fill(false);

    distances[source] = 0;

    for (let count = 0; count < this.vertices - 1; count++) {
      const u = this.minDistance(distances, visited);
      visited[u] = true;

      for (let v = 0; v < this.vertices; v++) {
        if (
          !visited[v] &&
          this.adjacencyMatrix[u][v] !== 0 &&
          distances[u] !== Infinity &&
          distances[u] + this.adjacencyMatrix[u][v] < distances[v]
        ) {
          distances[v] = distances[u] + this.adjacencyMatrix[u][v];
        }
      }
    }

    this.printSolution(distances);
  }

  minDistance(distances, visited) {
    let min = Infinity;
    let minIndex = -1;

    for (let v = 0; v < this.vertices; v++) {
      if (!visited[v] && distances[v] <= min) {
        min = distances[v];
        minIndex = v;
      }
    }

    return minIndex;
  }

  printSolution(distances) {
    console.log("Vertex \t Distance from Source");
    for (let v = 0; v < this.vertices; v++) {
      console.log(v + "\t\t" + distances[v]);
    }
  }
}

// Example usage
const graph = new Graph(6);
graph.addEdge(0, 1, 4);
graph.addEdge(0, 2, 2);
graph.addEdge(1, 2, 1);
graph.addEdge(1, 3, 5);
graph.addEdge(2, 3, 8);
graph.addEdge(2, 4, 10);
graph.addEdge(3, 4, 2);
graph.addEdge(3, 5, 6);
graph.addEdge(4, 5, 3);

graph.dijkstra(0);
