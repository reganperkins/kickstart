/* eslint-disable no-unused-vars */
/*
Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].

You may return the answer in any order.

Example 1:
Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

Example 2:
Input: n = 1, k = 1
Output: [[1]]

Constraints:
1 <= n <= 20
1 <= k <= n
*/


function helper(n, k, i, slate, results) {
  if (slate.length === k) {
    results.push([...slate]);
    return;
  }

  if (i === n + 1) {
    return;
  }
  // include
  slate.push(i);
  helper(n, k, i + 1, slate, results);
  slate.pop();
  // exclude
  helper(n, k, i + 1, slate, results);
}

function combine(n, k) {
  const results = [];
  helper(n, k, 1, [], results); // output range is 1+ so we pass i value of 1
  return results;
}
