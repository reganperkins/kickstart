/* eslint-disable no-unused-vars */
/*
784. Letter Case Permutation
  Given a string s, we can transform every letter individually to be lowercase or
  uppercase to create another string.
  Return a list of all possible strings we could create. You can return the output
  in any order.

Example 1:

  Input: s = "a1b2"
  Output: ["a1b2","a1B2","A1b2","A1B2"]

Example 2:
  Input: s = "3z4"
  Output: ["3z4","3Z4"]

Example 3:
  Input: s = "12345"
  Output: ["12345"]

Example 4:
  Input: s = "0"
  Output: ["0"]

Constraints:
  s will be a string with length between 1 and 12.
  s will consist only of letters or digits.
*/

const isNumeric = require('../helpers/is-numric').default;

function helper(s, i, slate, results) {
  if (i === s.length) {
    results.push(slate.join(''));
    return;
  }

  if (isNumeric(s[i])) {
    slate.push(s[i]);
    helper(s, i + 1, slate, results);
    slate.pop();
  } else {
    slate.push(s[i].toLowerCase());
    helper(s, i + 1, slate, results);
    slate.pop();

    slate.push(s[i].toUpperCase());
    helper(s, i + 1, slate, results);
    slate.pop();
  }
}

function letterCasePermutation(s) {
  const results = [];
  helper(s, 0, [], results);
  return results;
}
