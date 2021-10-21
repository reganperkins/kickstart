function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      // find the ith smallest value
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // swap the ith index with the index of the ith smallest value
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
  return arr;
}

const test1 = [1, 5, 3, 9, 8, 2];
selectionSort(test1);
console.log(test1);
