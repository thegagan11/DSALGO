class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.addVertex(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    if(this.nodes.has(v1) && this.nodes.has(v2)){
      v1.adjacent.add(v2);
      v2.adjacent.add(v1);
    } else {
      console.log("One or bot vertices are not in the graph. ")
    }
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    if(this.nodes.has(v1) && this.nodes.has(v2)){
      v1.adjacent.delete(v2);
      v2.adjacent.delete(v1);
    } else {
      console.log("one or both vertices are not in the graph.")
    }
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    // Check if the vertex is in the graph
    if(this.nodes.has(vertex)){
      //Iterate over the adjacent vertexs
      for(let adjacentVertex of vertex.adjacent) {
        // Remove the current vertex from the adjacent vertex's adjacent
        adjacentVertex.adjacent.delete(vertex);
      }
      this.nodes.delete(vertex);
    }
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let toVisitStack = [start];
    let seen = new Set(toVisitStack);
    let result = [];
    while(toVisitStack.length > 0){
      let currentVertex = toVisitStack.pop();
      result.push(currentVertex.value);
      for(let adjacentVertex of currentVertex.adjacent){
        if(!seen.has(adjacentVertex)){
          seen.add(adjacentVertex);
          toVisitStack.push(adjacentVertex);
        }
      }
    }
    return result;

  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let queue = [start];
    let visited = new Set(queue);


    while (queue.length > 0) {
      let cuurentVertex = queue.shift();
      console.log(cuurentVertex.value);


      for (let adjacentVertex of cuurentVertex.adjacent) {
        if (!visited.has(adjacentVertex)) {
          visited.add(adjacentVertex);
          queue.push(adjacentVertex);
        }
      }
    }


  }
}

module.exports = {Graph, Node}



