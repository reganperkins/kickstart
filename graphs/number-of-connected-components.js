/*
323 Number of Connected Components in an Undirected Graph
Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes),
write a function to find the number of connected components in an undirected graph.

Example 1:
     0          3
     |          |
     1 --- 2    4
Given n = 5 and edges = [[0, 1], [1, 2], [3, 4]], return 2.

Example 2:
     0           4
     |           |
     1 --- 2 --- 3
Given n = 5 and edges = [[0, 1], [1, 2], [2, 3], [3, 4]], return 1.

Note:
You can assume that no duplicate edges will appear in edges. Since all edges are undirected,
[0, 1] is the same as [1, 0] and thus will not appear together in edges.
*/

/*
is it a graphs problem?
  yes the problem tells us this
will a traversal help us?
  yes, we want to traverse through and get the number of components
  likely using BFS
what is the extention?
  none, we just traverse through and count the components

1. do we need to build the graph?
  yes
2. do we need an outer loop?
  yes,
3. start with the base bfs or dfs
  BFS
4. incorporate extensions
  none needed


  mk getComponentCount fn
    for e of edges
      if !visited
        set visted
        call BFS


    return component

  BFS()
    queue = []
    push to queue
    for

  createAdjacency list
    create a empty list
    well i <= n
      list[i] = [];
    go through the edges
      add a to b and b to a
*/


function createAdjacencyList(n, edges) {
  const list = [];
  for (let i = 0; i < n; i++) {
    list.push([]);
  }

  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];
    list[edge[0]].push(edge[1]);
    list[edge[1]].push(edge[0]);
  }

  return list;
}

function bfsTraverse(node, adjacencyList, visited) {
  const queue = [];
  queue.push(node);
  visited[node] = true;

  while (queue.length) {
    const current = queue.shift();
    for (let i = 0; i < adjacencyList[current].length; i++) {
      const neighbour = adjacencyList[current][i];
      if (!visited[neighbour]) {
        visited[neighbour] = true;
        queue.push(neighbour);
      }
    }
  }
}

function numberOfConnectedComponents(n, edges) {
  let componentCount = 0;
  const visited = new Array(n).fill(false);
  const adjacencyList = createAdjacencyList(n, edges);

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      componentCount++;
      bfsTraverse(i, adjacencyList, visited);
    }
  }

  return componentCount;
}
