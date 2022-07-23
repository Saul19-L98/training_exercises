'use strict'

/*
    2 - 0
   / \
  1 - 3
*/

//Edge List

// const graph = [
//     //Node reletionship
//     [0,2],
//     [2,3],
//     [2,1],
//     [1,3]
// ];

//NOTE: This one is the structure we are going tu us below.
//Adjacent List
//              0   2        3     1
// const graph = [[2],[0,1,3],[1,2],[2,3]];

// const graph = {
//     0:[2],
//     1:[2,3],
//     2:[0,1,3],
//     3:[1,2]
// };

// Adjacent Matrix

// const graph = [
//     [0,0,1,0],
//     [0,0,1,1],
//     [1,1,0,1],
//     [0,1,1,0]
// ];

// const graph = {
//     0:[0,0,1,0],
//     1:[0,0,1,1],
//     2:[1,1,0,1],
//     3:[0,1,1,0]
// };

class Graph{
    constructor() {
        this.nodes = 0;
        this.adjacentList = {};
    }

    addVertex(node){
        this.adjacentList[node] = [];
        this.nodes++;
        return this;
    }

    addEdge(node1,node2){
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
        return this;
    }
}

const myGraph = new Graph();

console.log(myGraph.addVertex(1));
console.log(myGraph.addVertex(3));
console.log(myGraph.addVertex(4));
console.log(myGraph.addVertex(5));
console.log(myGraph.addVertex(6));
console.log(myGraph.addVertex(8));

console.log(myGraph.addEdge(3,5));
console.log(myGraph.addEdge(6,3));
console.log(myGraph.addEdge(1,6));
console.log(myGraph.addEdge(1,3));
console.log(myGraph.addEdge(1,4));
console.log(myGraph.addEdge(4,5));
console.log(myGraph.addEdge(8,4));
