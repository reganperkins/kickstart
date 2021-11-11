/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/*
Given n nodes labeled from 0 to n-1 and a list of undirected edges (each edge is a pair of nodes),
write a function to check whether these edges make up a valid tree.
Example 1:
  Input: n = 5, and edges = [[0,1], [0,2], [0,3], [1,4]]
  Output: true
Example 2:
  Input: n = 5, and edges = [[0,1], [1,2], [2,3], [1,3], [1,4]]
  Output: false
*/

function createAdjecencyList(nodeCount, edgeStart, edgeEnd) {
  const list = [];

  for (let i = 0; i < nodeCount; i++) {
    list.push([]);
  }

  for (let i = 0; i < edgeStart.length; i++) {
    list[edgeStart[i]].push(edgeEnd[i]);
    list[edgeEnd[i]].push(edgeStart[i]);
  }

  return list;
}

function isValidTree(node, adjecencyList, visited, parents) {
  visited[node] = true;
  const neighbourList = adjecencyList[node];
  for (let i = 0; i < neighbourList.length; i++) {
    const neighbour = neighbourList[i];
    if (!visited[neighbour]) {
      visited[neighbour] = true;
      parents[neighbour] = node;
      isValidTree(neighbour, adjecencyList, visited, parents);
    } else if (parents[node] !== neighbour) {
      return false;
    }
  }
  return true;
}

function isItATree(nodeCount, edgeStart, edgeEnd) {
  let componentCount = 0;
  const adjecencyList = createAdjecencyList(nodeCount, edgeStart, edgeEnd);
  const visited = new Array(nodeCount).fill(false);
  const parents = new Array(nodeCount).fill(false);
  for (let i = 0; i < nodeCount; i++) {
    if (!visited[i]) {
      componentCount++;
      if (componentCount > 1) return false;
      if (!isValidTree(i, adjecencyList, visited, parents)) return false;
    }
  }
  return true;
}
