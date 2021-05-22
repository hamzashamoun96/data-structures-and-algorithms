'use strict';

class Node{
    constructor(value){
        this.value = value;
    }
}
class Edge{
    constructor(node , weight){
        this.node = node;
        this.weight = weight;
    }
}
class Graph{
    constructor(){
        this._adjacencyList = new Map();
    }
    AddNode(node){
        this._adjacencyList.set(node,[]);
    }
    AddEdge(startNode , endNode , weight = 0){
        if(!this._adjacencyList.has(startNode) || !this._adjacencyList.has(endNode)){
            throw new Error('INVALID NODE');
        }
        const adjacencies = this._adjacencyList.get(startNode);
        adjacencies.push(new Edge(endNode , weight));
    }
    GetNodes(){
        let Arr = [];
        for (const [node] of this._adjacencyList.entries()) {
        Arr.push(node);
    }
    return (Arr.length === 0)? null : Arr;
    }
    GetNeighbors(node){
      if (!this._adjacencyList.has(node)) {
      throw new Error('__ERROR__ Invalid Node', node);
    }
    return this._adjacencyList.get(node);
    }
    size(){
        return this._adjacencyList.size;
    }
}
module.exports = {
    Graph,
    Node
}