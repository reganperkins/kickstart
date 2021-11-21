/* eslint-disable no-plusplus */
/*
Given an array of positive numbers and a positive number ‘S,’ find the length of the
smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if
no such subarray exists.

Example 1:

Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].

Example 2:

Input: [2, 1, 5, 2, 8], S=7
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
Example 3:

Input: [3, 4, 1, 1, 6], S=8
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] 
or [1, 1, 6].

*/

function smallestSubarrayWithGivenSum(s, arr) {
  let startPointer = 0;
  let sum = 0;
  let minSubArray = Infinity;

  for (let endPointer = 0; endPointer < arr.length; endPointer++) {
    sum += arr[endPointer];

    while (sum >= s) {
      minSubArray = Math.min(minSubArray, endPointer - startPointer + 1);
      sum -= arr[startPointer];
      startPointer += 1;
    }
  }

  return minSubArray === Infinity ? 0 : minSubArray;
}
// space: O(1)
// time: O(n + n) which is asymptotically equivalent to O(n)
