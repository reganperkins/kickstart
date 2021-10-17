// we want to get a random index to act as the pivot
// swap the random index value with index 0 so it is the first item in the array
// we will use hoar's partioning since it tends to run faster the lomuto's
// create two pointers one at the end and one at index 1
// compare left and right points to the piviot 
// we will want the left side to have the lower values and the right to have the higher values
// if the lower pointer has a value higher than the pivot stop until the higher pointer has a lower value and swap.
// once both are done swap the pivot into the end position of the left lower subarray

// psudo code
// break if arr.length <= 0
// get reandom index and swap values of rand index and 0
// create pointers high = arr.length and low = 1
// while low < high
// if low >= pivot low++
// else if high <= pivot high ++
// else swap 
// call self with (arr)

const getRandomIndex = max => Math.floor(Math.random() * max);

// Hoare's partitioning
const quicksortHoare = (arr, start, end) => {
  if (start <= end) return;
  const pivot = getRandomIndex(arr.length);
  [arr[0], arr[pi]] = [arr[pi], arr[0]];

  let low = start + 1;
  let high = end;

  while (low < high) {
    if (arr[low] <= pivot) {
      arr += 1;
    } else if (arr[high > pivot]) {
      high += 1;
    } else {
      [arr[low], arr[high]] = [arr[high], arr[low]];
      high += 1;
      low += 1;
    }
  }

  [arr[low], arr[start]] = [arr[start], arr[low]];

  quicksortHoare(arr, start, low);
  quicksortHoare(arr, high, end);
}

// Lomuto partitioning


const set = [2, 3, 5, 4, -3, 0];
const set1 = [2, 3, 5, 4, 8, 7, 6];
const set2 = [6, 8, 2, 4, 1];
const set3 = [1, 2, 3, 4, 5, 6, 7, 8];

quicksortHoare(set, 0, set.length - 1);
console.log('set', set);

quicksortHoare(set1, 0, set1.length - 1);
console.log('set1', set1);

quicksortHoare(set2, 0, set2.length - 1);
console.log('set2', set2);

quicksortHoare(set3, 0, set3.length - 1);
console.log('set3', set3);
