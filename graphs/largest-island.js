function bfsTraversal(row, col, grid, visited) {
  const queue = [];
  queue.push({ row, col });
  let currentIslandLength = 0;

  while (queue.length) {
    const { row: currentRow, col: currentCol } = queue.shift();
    if (!visited[currentRow][currentCol]) {
      visited[currentRow][currentCol] = true;
      if (grid[currentRow][currentCol]) {
        currentIslandLength++;
        grid[currentRow][currentCol] = 0;
      }
      // up
      if (grid[currentRow - 1] && grid[currentRow - 1][currentCol]) {
        queue.push({ row: currentRow - 1, col: currentCol });
      }
      // down
      if (grid[currentRow + 1] && grid[currentRow + 1][currentCol]) {
        queue.push({ row: currentRow + 1, col: currentCol });
      }
      // left
      if (grid[currentRow][currentCol - 1]) {
        queue.push({ row: currentRow, col: currentCol - 1 });
      }
      // right
      if (grid[currentRow][currentCol + 1]) {
        queue.push({ row: currentRow, col: currentCol + 1 });
      }
    }
  }

  return currentIslandLength;
}

function max_island_size(grid) {
  const visited = [];
  for (let row = 0; row < grid.length; row++) {
    visited.push([]);
    for (let col = 0; col < grid[0].length; col++) {
      visited[row].push(false);
    }
  }
  let largestIslandLength = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (!visited[row][col]) {
        const islandLength = bfsTraversal(row, col, grid, visited);
        if (islandLength > largestIslandLength) {
          largestIslandLength = islandLength;
        }
      }
    }
  }

  return largestIslandLength;
}
