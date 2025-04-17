


class Graph {
    constructor() {
      this.graph = {};
    }
  
    addNode(node) {
      if (!this.graph[node]) {
        this.graph[node] = [];
      }
    }
  
    addEdge(node1, node2) {
      this.graph[node1].push(node2);
      this.graph[node2].push(node1); 
    }

    // Depth-First Search (DFS)
    dfs(start, visited = new Set()) {
        console.log(start);
        visited.add(start);
        for (let neighbor of this.graph[start]) {
            if (!visited.has(neighbor)) {
            this.dfs(neighbor, visited);
            }
        }
    }

     //Breadth-First Search (BFS)
    bfs(start) {
        let queue = [start];
        let visited = new Set();
        visited.add(start);
        
        while (queue.length > 0) {
            let node = queue.shift();
            console.log(node);
            
            for (let neighbor of this.graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
            }
        }
    }

    // Dijkstra's Algorithm (Shortest Path)
    dijkstra(start) {
        let distances = {};
        let prev = {};
        let pq = new PriorityQueue();
        
        for (let node in this.graph) {
            distances[node] = Infinity;
            prev[node] = null;
            pq.enqueue(node, distances[node]);
        }
        distances[start] = 0;
        pq.enqueue(start, distances[start]);
        
        while (!pq.isEmpty()) {
            let { value: node } = pq.dequeue();
            
            for (let neighbor of this.graph[node]) {
            let alt = distances[node] + 1; 
            if (alt < distances[neighbor]) {
                distances[neighbor] = alt;
                prev[neighbor] = node;
                pq.enqueue(neighbor, distances[neighbor]);
            }
            }
        }
    
        return { distances, prev };
    }
  
    display() {
      console.log(this.graph);
    }
}
  

// Depth-First Search (DFS)

class Graph {
    
    dfs(start, visited = new Set()) {
        console.log(start);
        visited.add(start);
        for (let neighbor of this.graph[start]) {
            if (!visited.has(neighbor)) {
            this.dfs(neighbor, visited);
            }
        }
        }
    }

  
  //Breadth-First Search (BFS)

  class Graph {
  
    bfs(start) {
        let queue = [start];
        let visited = new Set();
        visited.add(start);
        
        while (queue.length > 0) {
            let node = queue.shift();
            console.log(node);
            
            for (let neighbor of this.graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
            }
        }
        }
    }

  
  // Check for Graph Connectivity (using DFS)

  class Graph {
  
    isConnected() {
        let visited = new Set();
        
        this.dfs('A', visited);
        
        return Object.keys(this.graph).length === visited.size;
        }
    }

  
  // Dijkstra's Algorithm (Shortest Path)

  class Graph {
    
    dijkstra(start) {
        let distances = {};
        let prev = {};
        let pq = new PriorityQueue();
        
        for (let node in this.graph) {
            distances[node] = Infinity;
            prev[node] = null;
            pq.enqueue(node, distances[node]);
        }
        distances[start] = 0;
        pq.enqueue(start, distances[start]);
        
        while (!pq.isEmpty()) {
            let { value: node } = pq.dequeue();
            
            for (let neighbor of this.graph[node]) {
            let alt = distances[node] + 1; 
            if (alt < distances[neighbor]) {
                distances[neighbor] = alt;
                prev[neighbor] = node;
                pq.enqueue(neighbor, distances[neighbor]);
            }
            }
        }
    
        return { distances, prev };
        }
    }

  
const g = new Graph();
g.addNode('A');
g.addNode('B');
g.addNode('C');
g.addNode('D');
g.addNode('E');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');

g.display();

console.log("DFS Traversal:");
g.dfs('A');

console.log("\nBFS Traversal:");
g.bfs('A');

console.log("\nGraph is connected: ", g.isConnected());

console.log("\nDijkstra's Algorithm:");
const { distances, prev } = g.dijkstra('A');
console.log(distances);
console.log(prev);
