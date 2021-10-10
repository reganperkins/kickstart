const selectionSort = (array) => {
  const arr = array;
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
  return array;
};

const test1 = [1, 5, 3, 9, 8, 2];
console.log(selectionSort(test1));
