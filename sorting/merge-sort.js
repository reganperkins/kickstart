/* eslint-disable no-plusplus */
/*
Time Complexity:
  O(n * log(n)).
  Merge Sort operates on the "divide and conquer" principle.
  The sub-arrays are divided recursively into two halves until the size of each sub array becomes 1.
  It forms a tree of height log(n).

  At a height of 1, there will be 2 arrays of size (n / 2) and it will take O(n) time to merge them.
  At a height of 2, there will be 4 arrays of size (n / 4) and it will take O(n) time to merge them.
  At a height of 3, there will be 8 arrays of size (n / 8) and it will take O(n) time to merge them.
  .
  .
  .
  At a height of log(n), there will be O(n) arrays of size 1 and it will take O(n) time to merge
  them. This makes the overall time complexity equal to O(n * log(n)).

Auxiliary Space Used:
    O(n).
    The merge process in each step will take O(n) amount of auxiliary space.

Space Complexity:
    O(n).
    Space used for input: O(n).
    Auxiliary space used: O(n).
    Space used for output: O(n).
    So, the overall space complexity: O(n).
*/
// function merge(leftArr, rightArr) {
//   const results = [];
//   let i = 0;
//   let j = 0;

//   while (i < leftArr.length && j < rightArr.length) {
//     if (leftArr[i] <= rightArr[j]) {
//       results.push(leftArr[i]);
//       i++;
//     } else {
//       results.push(rightArr[j]);
//       j++;
//     }
//   }
//   while (i < leftArr.length) {
//     results.push(leftArr[i]);
//     i++;
//   }
//   while (j < rightArr.length) {
//     results.push(rightArr[j]);
//     j++;
//   }
//   return results;
// }

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;

//   const mid = Math.floor(arr.length / 2);
//   const leftArr = mergeSort(arr.slice(0, mid));
//   const rightArr = mergeSort(arr.slice(mid));

//   return merge(leftArr, rightArr);
// }

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const sortedArray = [];
  const mid = Math.floor(arr.length / 2);
  const leftArr = mergeSort(arr.slice(0, mid));
  const rightArr = mergeSort(arr.slice(mid));

  let rightIndex = 0;
  let leftIndex = 0;

  while (rightIndex < rightArr.length && leftIndex < leftArr.length) {
    if (rightArr[rightIndex] <= leftArr[leftIndex]) {
      sortedArray.push(rightArr[rightIndex]);
      rightIndex += 1;
    } else {
      sortedArray.push(leftArr[leftIndex]);
      leftIndex += 1;
    }
  }

  while (leftIndex < leftArr.length) {
    sortedArray.push(leftArr[leftIndex]);
    leftIndex += 1;
  }

  while (rightIndex < rightArr.length) {
    sortedArray.push(rightArr[rightIndex]);
    rightIndex += 1;
  }

  return sortedArray;
}



const set = [2, 3, 5, 4, -3, 0];
const set1 = [2, 3, 5, 4, 8, 7, 6];
const set2 = [6, 8, 2, 4, 1];
const set3 = [1, 2, 3, 4, 5, 6, 7, 8];

console.log('set', mergeSort(set));
console.log('set1', mergeSort(set1));
console.log('set2', mergeSort(set2));
console.log('set3', mergeSort(set3));


function mergeSort(arr) {
  mergeSortHelper(arr, 0, arr.length - 1);
  return arr;
}

function mergeSortHelper(arr, start, end) {
  if (start === end) {
    return;
  }

  const mid = Math.floor(start + end / 2);
  console.log(start, end, mid)
  const leftArr = mergeSortHelper(arr, start, mid);
  const rightArr = mergeSortHelper(arr, mid + 1, end);
  let rightCounter = start;
  let leftCounter = mid;
  const aux = [];

  while(rightCounter < mid && leftCounter < end) {
    if (leftArr[leftCounter] <= rightArr[rightCounter]) {
      aux.push(leftArr[leftCounter]);
      leftCounter++;
    } else {
      aux.push(rightArr[rightCounter]);
      rightCounter++;
    }
  }

  while (leftCounter < end) {
    aux.push(leftArr[leftCounter]);
    leftCounter++;
  }

  while (rightCounter < mid) {
    aux.push(rightArr[rightCounter]);
    rightCounter++;
  }

  return arr.splice(start, aux.length, ...aux)
}