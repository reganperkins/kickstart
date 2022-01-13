function selectionSort(arr) {
  for (let index = 0; index < arr.length; index++) {
    let indexOfSmallestNumber = index;
    for (let current = index + 1; current < arr.length; current++) {
      // find the ith smallest value
      if (arr[current] < arr[indexOfSmallestNumber]) {
        indexOfSmallestNumber = current;
      }
    }
    // swap the ith index with the index of the ith smallest value
    [arr[index], arr[indexOfSmallestNumber]] = [arr[indexOfSmallestNumber], arr[index]];
  }
  return arr;
}

const test1 = [1, 5, 3, 9, 8, 2];
selectionSort(test1);
console.log(test1);
