"use strict";
const { Graph, Node } = require("./graph.js");

describe("Graph Tests", () => {
  let AllNodes = [];
  const graph = new Graph();
  const ten = new Node(10);
  const three = new Node(3);
  const twenty = new Node(20);
  const seven = new Node(7);
  const five = new Node(5);
  const twelve = new Node(12);
  graph.AddNode(ten);
  graph.AddNode(three);
  graph.AddNode(twenty);
  graph.AddNode(seven);
  graph.AddNode(five);
  graph.AddNode(twelve);
  graph.AddEdge(ten, three, 5);
  graph.AddEdge(ten, twenty, 10);
  graph.AddEdge(twenty, seven);
  graph.AddEdge(twenty, twelve);
  graph.AddEdge(twenty, five);
  graph.AddEdge(seven, twelve);
  graph.AddEdge(twelve, five);

  AllNodes.push(ten, three, twenty, seven, five, twelve);
  it("Node can be successfully added to the graph", () => {
    expect(graph._adjacencyList.has(ten)).toBeTruthy();
  });
  it("An edge can be successfully added to the graph", () => {
    expect(graph._adjacencyList.get(ten)[0].node).toBe(three);
    expect(graph._adjacencyList.get(ten)[1].node).toBe(twenty);
  });
  it("A collection of all nodes can be properly retrieved from the graph", () => {
    expect(graph.GetNodes()).toEqual(AllNodes);
  });
  it("All appropriate neighbors can be retrieved from the graph", () => {
    expect(graph.GetNeighbors(ten)).toEqual(graph._adjacencyList.get(ten));
  });
  it("Neighbors are returned with the weight between nodes included", () => {
    expect(graph.GetNeighbors(ten)[0].weight).toEqual(5);
    expect(graph.GetNeighbors(ten)[1].weight).toEqual(10);
  });
  it("The proper size is returned, representing the number of nodes in the graph", () => {
    expect(graph.size()).toEqual(AllNodes.length);
  });
  it("A graph with only one node and edge can be properly returned", () => {
    const graph2 = new Graph();
    const two = new Node(2);
    graph2.AddNode(two);
    graph2.AddEdge(two, two);
    expect(graph2.GetNodes()[0]).toEqual(two);
  });
  it("An empty graph properly returns null", () => {
    const graph3 = new Graph();
    expect(graph3.GetNodes()).toBeNull();
  });
});
