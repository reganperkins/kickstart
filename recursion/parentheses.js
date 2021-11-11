/*
Given n pairs of parentheses, write a function to generate all combinations
of well-formed parentheses.

Example 1:
  Input: n = 3
  Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
  Input: n = 1
  Output: ["()"]

Constraints:
  1 <= n <= 8
*/


function helper(left, right, slate, results) {
  if (left === 0 && right === 0) {
      results.push(slate.join(''));
      return;
  }
  
  if (left > 0) {
      slate.push('(');
      helper(left - 1, right, slate, results);
      slate.pop();
  } 
  
  if (right > left) {
      slate.push(')');
      helper(left, right - 1, slate, results);
      slate.pop();
  }
}

var generateParenthesis = function(n) {
  const results = [];
  helper(n, n, [], results);
  return results;
};