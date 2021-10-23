/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
// we want to get a random index to act as the pivot
// swap the random index value with index 0 so it is the first item in the array
// we will use hoar's partioning since it tends to run faster the lomuto's
// create two pointers one at the end and one at index 1
// compare left and right points to the piviot 
// we will want the left side to have the lower values and the right to have the higher values
// if the lower pointer has a value higher than the pivot stop until the higher pointer has a lower value and swap.
// once both are done swap the pivot into the end position of the left lower subarray

// vs Lomutos
// less swaps
// quicker
// more complex


function helper(arr, start, end) {
  if (start >= end) {
    return;
  }

  const pivot = Math.floor(Math.random() * (end - start + 1) + start);
  [arr[pivot], arr[start]] = [arr[start], arr[pivot]];

  let smaller = start + 1;
  let bigger = end;

  while (smaller <= bigger) {
    if (arr[smaller] <= arr[start]) {
      smaller++;
    } else if (arr[bigger] > arr[start]) {
      bigger--;
    } else {
      [arr[smaller], arr[bigger]] = [arr[bigger], arr[smaller]];
      smaller++;
      bigger--;
    }
  }

  // put the index in the right place
  [arr[start], arr[bigger]] = [arr[bigger], arr[start]];

  helper(arr, start, bigger - 1);
  helper(arr, bigger + 1, end);
}

function quicksort(arr) {
  helper(arr, 0, arr.length - 1);
  return arr;
}


const set = [2, 3, 5, 4, -3, 0];
const set1 = [2, 3, 5, 4, 8, 7, 6];
const set2 = [6, 8, 2, 4, 1];
const set3 = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(quicksort(set));
console.log(quicksort(set1));
console.log(quicksort(set2));
console.log(quicksort(set3));
