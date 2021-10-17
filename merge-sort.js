// split fn
// accepts the array as input, startIndex & endIndex index
// each time its going to split the array by
// getting mid point index endIndex/2 and then getting the following
// left index (start to midpoint)
// right (midpoint + 1 - endIndex)
// this is going to happen until start === end

// once start === end
// empty array
// i = start
// j = mid + 1
// while i is <= mid and  j <= end
//      if i <= j arr.push i
//      else arr.push j
// arr.push(...i, ...j)

function merge(arr, start, end, midIndex) {
  const auxArray = [];
  let i = start;
  let j = midIndex + 1;

  while (i <= midIndex && j <= end) {
    if (arr[i] <= arr[j]) {
      auxArray.push(arr[i]);
      i += 1;
    } else {
      auxArray.push(arr[j]);
      j += 1;
    }
  }

  while (i <= midIndex) {
    auxArray.push(arr[i]);
    i += 1;
  }

  while (j <= end) {
    auxArray.push(arr[j]);
    j += 1;
  }
  arr.splice(start, auxArray.length, ...auxArray);
}

function mergeSort(arr, start, end) {
  if (start < end) {
    const midIndex = Math.floor((start + end) / 2);
    mergeSort(arr, start, midIndex);
    mergeSort(arr, midIndex + 1, end);
    merge(arr, start, end, midIndex);
  }
}


const set = [2, 3, 5, 4, -3, 0];
const set1 = [2, 3, 5, 4, 8, 7, 6];
const set2 = [6, 8, 2, 4, 1];
const set3 = [1, 2, 3, 4, 5, 6, 7, 8];

mergeSort(set, 0, set.length - 1);
console.log('set', set);

mergeSort(set1, 0, set1.length - 1);
console.log('set1', set1);

mergeSort(set2, 0, set2.length - 1);
console.log('set2', set2);

mergeSort(set3, 0, set3.length - 1);
console.log('set3', set3);
