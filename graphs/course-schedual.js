/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/*
notes:
  back edges indicate cycles
  cross edges do not
  if using the arrival/departure method back edges will not yet have a departure set
  when seen again, cross edges will
*/

function createAdjacencyList(n, a, b) {
  const list = [];

  for (let i = 0; i < n; i++) {
    list.push([]);
  }

  for (let i = 0; i < a.length; i++) {
    list[a[i]].push(b[i]);
  }

  return list;
}

function isValidPath(node, adjacencyList, arrival, departure) {
  arrival[node] = true;
  for (let i = 0; i < adjacencyList[node].length; i++) {
    const neighbour = adjacencyList[node][i];
    if (arrival[neighbour]) {
      if (!departure[neighbour]) {
        return false;
      }
    } else if (!isValidPath(neighbour, adjacencyList, arrival, departure)) {
      return false;
    }
  }
  departure[node] = true;
  return true;
}

function canBeCompleted(n, a, b) {
  const arrival = new Array(n).fill(false);
  const departure = new Array(n).fill(false);
  const adjacencyList = createAdjacencyList(n, a, b);

  for (let i = 0; i < n; i++) {
    if (!arrival[i]) {
      if (!isValidPath(i, adjacencyList, arrival, departure)) {
        return false;
      }
    }
  }
  return true;
}
