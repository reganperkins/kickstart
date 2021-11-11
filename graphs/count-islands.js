function bfsTraversal(row, col, matrix) {
  const queue = [];
  queue.push({ row, col });
  matrix[row][col] = 0;
  
  while (queue.length) {
      const {row: currentRow, col: currentColumn} = queue.shift();
      // set to zero????
      matrix[currentRow][currentColumn] = 0;
      
      // check up
      if (matrix[currentRow - 1] && matrix[currentRow - 1][currentColumn]) {
          queue.push({ row: currentRow - 1, col: currentColumn});
      }
      // check down
      if (matrix[currentRow + 1] && matrix[currentRow + 1][currentColumn]) {
          queue.push({ row: currentRow + 1, col: currentColumn});
      }
      // check right
      if (matrix[currentRow][currentColumn + 1]) {
          queue.push({ row: currentRow, col: currentColumn + 1});
      }
      // check left
      if (matrix[currentRow][currentColumn - 1]) {
          queue.push({ row: currentRow, col: currentColumn - 1});
      }
      // check up-right
      if (matrix[currentRow - 1] && matrix[currentRow - 1][currentColumn + 1]) {
          queue.push({ row: currentRow - 1, col: currentColumn + 1});
      }
      // check up-left
      if (matrix[currentRow - 1] && matrix[currentRow - 1][currentColumn - 1]) {
          queue.push({ row: currentRow - 1, col: currentColumn - 1});
      }
      // check down-right
      if (matrix[currentRow + 1] && matrix[currentRow + 1][currentColumn + 1]) {
          queue.push({ row: currentRow + 1, col: currentColumn + 1});
      }
      // check down-left
      if (matrix[currentRow + 1] && matrix[currentRow + 1][currentColumn - 1]) {
          queue.push({ row: currentRow + 1, col: currentColumn - 1});
      }
  }
  
}

function count_islands(matrix) {
  let islandCount = 0;
  
  for (let row = 0; row < matrix.length; row++) {
      const current = matrix[row];
      for (let col = 0; col < current.length; col++) {
          if (current[col]) {
              islandCount++;
              bfsTraversal(row, col, matrix);
          }
      }
  }
  
  return islandCount;
}