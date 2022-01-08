/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-else-return */
/*
2 Sum In A Sorted Array

Given an array sorted in non-decreasing order and a target number, find the
indices of the two values from the array that sum up to the given target number.

Example:
Input: [1, 2, 3, 5, 10], 7
Output: [1, 3]

Sum of the elements at index 1 and 3 is 7.

Notes:
  The function returns an array of size two where the two elements specify the
  input array indices whose values sum up to the given target number.
  In case when no answer exists, return an array of size two with both values
  equal to -1, i.e., [-1, -1].
  In case when multiple answers exist, you may return any of them.
  The order of the indices returned does not matter.
  A single index cannot be used twice.
Constraints:
  2 <= Array Size <= 105.
  -105 <= Array Elements <= 105.
  -105 <= Target Number <= 105.
  Array can contain duplicate elements.
*/

function pairSumSortedArray(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    const sum = numbers[start] + numbers[end];
    if (sum === target) {
      return [start, end];
    } else if (sum > target) {
      end -= 1;
    } else {
      start += 1;
    }
  }

  return [-1, -1];
}
