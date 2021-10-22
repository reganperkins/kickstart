/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */

/*
  You are given an integer array arr of size n. Group and rearrange them (in-place) into evens
  and odds in such a way that group of all even integers appears on the left side and group of
  all odd integers appears on the right side.

  Example
  Input: [1, 2, 3, 4]
  Output: [4, 2, 1, 3]

  Order does not matter. Other valid solutions are:
  [2, 4, 1, 3]
  [2, 4, 3, 1]
  [4, 2, 3, 1]
*/

function solve(arr) {
  let evens = 0;
  let odds = arr.length - 1;

  while (evens < odds) {
    if (arr[evens] % 2 === 0) {
      evens++;
    } else if (arr[odds] % 2 === 1) {
      odds--;
    } else {
      [arr[evens], arr[odds]] = [arr[odds], arr[evens]];
      odds--;
      evens++;
    }
  }

  return arr;
}
