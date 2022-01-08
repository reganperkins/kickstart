/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/*
Merge One Sorted Array Into Another

Given two arrays:
  1) arr1 of size n, which contains n positive integers sorted in the ascending order.
  2) arr2 of size (2*n) (twice the size of first), which contains n positive integers sorted in the ascending order in its first half. Second half of this array arr2 is empty. (Empty elements are marked by 0).

  Write a function that takes these two arrays, and merges the first one into
  second one, resulting in an increasingly sorted array of (2*n) positive
  integers.

Example
  Input:
  arr1 = [1 3 5]
  arr2 = [2 4 6 0 0 0]

Output: arr2 = [1 2 3 4 5 6]
*/

function mergerFirstIntoSecond(arr1, arr2) {
  let pointer1 = arr1.length - 1;
  let pointer2 = arr1.length - 1;
  let currentIndex = arr2.length - 1;

  while (pointer1 >= 0 && pointer2 >= 0) {
    if (arr1[pointer1] > arr2[pointer2]) {
      arr2[currentIndex] = arr1[pointer1];
      pointer1 -= 1;
    } else {
      arr2[currentIndex] = arr2[pointer2];
      pointer2 -= 1;
    }
    currentIndex -= 1;
  }

  while (pointer1 >= 0) {
    arr2[currentIndex] = arr1[pointer1];
    currentIndex -= 1;
    pointer1 -= 1;
  }

  while (pointer2 >= 0) {
    arr2[currentIndex] = arr2[pointer2];
    currentIndex -= 1;
    pointer2 -= 1;
  }
}
