/*
Possible To Achieve Target Sum?
Given a set of integers and a target value k, find a non-empty subset that sums up to k.

Example One
  Input: [2 4 8], k = 6
  Output: True
  Because 2+4=6.

Example Two
  Input: [2 4 6], k = 5
  Output: False
  Because no subset of numbers from the input sums up to 5.

Notes
  Input Parameters: Function has two arguments: an array of integers (their order doesn’t matter) and the target value  k.
  Output: Function must return a boolean value.

Constraints:
  1 <= size of the input array <= 18
  -10^12 <= elements of the array, k <= 10^12
*/

function helper(arr, i, target, notEmpty) {
  if (notEmpty && target === 0) {
    return true;
  }

  if (i === arr.length) {
    return false;
  }

  return helper(arr, i + 1, target, notEmpty) || helper(arr, i + 1, target - arr[i], true);
}

function check_if_sum_possible(arr, k) {
  return helper(arr, 0, k, false);
}
