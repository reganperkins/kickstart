// need to take in an array
// we will have the sorted subarray on the left and the unsorted one on the right
// we will take the first element on the right array and try to insert it into the left sorted subarray
// set the inserting element to a temp key var
// we will look at the sorted subarray from r-l
// each time the inserting element is smaller than the key we will move the comparision value to the right
// when we find a value the key is more then we add the key vale to the index before it.

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i += 1) {
    const key = arr[i];
    let counter = i - 1;

    while (counter >= 0 && arr[counter] > key) {
      arr[counter + 1] = arr[counter];
      counter -= 1;
    }
    arr[counter + 1] = key;
  }
};

// Tests

const set = [2, 3, 5, 4, -3, 0];
const set1 = [2, 3, 5, 4, 8, 7, 6];
const set2 = [6, 8, 2, 4, 1];
const set3 = [1, 2, 3, 4, 5, 6, 7, 8];

insertionSort(set);
console.log('set', set);

insertionSort(set1);
console.log('set1', set1);

insertionSort(set2);
console.log('set2', set2);

insertionSort(set3);
console.log('set3', set3);
