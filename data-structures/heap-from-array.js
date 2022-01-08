function minHeapify (array, index) {
  const temp = array[index];
  let childIndex;

  for (; index * 2 < array.length; index = childIndex) {
    childIndex = index * 2;

    // Choose the smaller of the two (left, right) children
    if (childIndex != array.length - 1 && array[childIndex] > array[childIndex + 1]) {
      childIndex ++;
    }

    if (temp > array[childIndex]) {
      array[index] = array[childIndex];
    } else {
      break;
    }
  }

  array[index] = temp;
}
