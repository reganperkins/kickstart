/*
Given an array of positive numbers and a positive number ‘k,’ find the maximum
sum of any contiguous subarray of size ‘k’.

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
Example 2:

Input: [2, 3, 4, 1, 5], k=2
Output: 7
Explanation: Subarray with maximum sum is [3, 4].
*/

function maxSubArrayOfSize_k(k, arr) {
  if (!arr.length || !(arr.length >= k)) return -1;
  let highestSum = 0;
  let sum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      if (sum > highestSum) {
        highestSum = sum;
      }
      sum -= arr[windowStart];
      windowStart += 1;
    }
  }
  return highestSum;
}
