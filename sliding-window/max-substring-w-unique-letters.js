/*
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".
Example 3:

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
*/

function longestSubstringWithKDistinct(str, k) {
  let startPointer = 0;
  let maxLength = 0;
  const cache = {};

  for (let endPointer = 0; endPointer < str.length; endPointer += 1) {
    const letter = str[endPointer];
    if (!cache[letter]) {
      cache[letter] = 0;
    }

    while (Object.keys(cache).length > k) {
      const firstLetter = str[startPointer];
      cache[firstLetter] -= 1;
      if (cache[firstLetter] < 1) {
        delete cache[firstLetter];
      }
      startPointer += 1;
    }

    maxLength = Math.max(maxLength, endPointer - startPointer + 1);
  }

  return maxLength;
};