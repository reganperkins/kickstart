/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/*
Palindromic Decomposition Of A String
Find all palindromic decompositions of a given string s.
A palindromic decomposition of string is a decomposition of the string into substrings,
such that all those substrings are valid palindromes.

Example
  Input: "abracadabra"
  Output: [ "a|b|r|a|c|a|d|a|b|r|a", "a|b|r|a|c|ada|b|r|a", "a|b|r|aca|d|a|b|r|a" ]

Notes
  Input Parameters: There is only one argument: string s.
  Output: Return array of string res, containing ALL possible palindromic decompositions
  of given string. To separate substrings in the decomposed string, use '|' as a separator
  between them.

  You need not to worry about the order of strings in your output array. Like for s = "aa",
  arrays ["a|a", "aa"] and ["aa", "a|a"] both will be accepted.
  In any string in your returned array res, order of characters should remain the same as
  in the given string. (i.e. for s = "ab" you should return ["a|b"] and not ["b|a"].)
  Any string in the returned array should not contain any spaces. e.g. s = "ab" then ["a|b"]
  is expected, ["a |b"] or ["a| b"] or ["a | b"] will give the wrong answer.

Constraints:
  1 <= |s| <= 20
  s only contains lowercase letters ('a' - 'z').

*/


function isPalindrome(s) {
  return s === s.split('').reverse().join('');
}

function helper(s, i, slate, res) {
  if (i === s.length) {
    res.push(slate.join('|'));
    return;
  }

  for (let j = i + 1; j <= s.length; j++) {
    const current = s.substring(i, j);
    if (isPalindrome(current)) {
      slate.push(current);
      helper(s, j, slate, res);
      slate.pop();
    }
  }
}

function generatePalindromicDecompositions(s) {
  const res = [];
  helper(s, 0, [], res);
  return res;
}
