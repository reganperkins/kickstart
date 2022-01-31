/*
Given two strings s1 and s2, return the longest common subsequence of s1 and s2
(with longest common subsequence defined as the longest sequence of characters
  such that all of them appear in both of the strings, possibly with other
  characters in between)

questions
- case sensitive
- can you skip as many items as is needed to make it match?

Questions for after
- did i get the time complexity correct?
- how might you have made the iterative solution more performant
*/

// maxMatch = [];
// pointer a = 0, pointer b = 0
// for i of str1
//    let current = str1[i];
//    pointer b = i;
//    currMax = [];
//    while pointer b < str2.length
//      find first match of current
//      if found currMaxLength.push();
//      current = current += 1;
//    end
//    if currMax.length > maxMatch.length
//      maxMatch = currMax

function getLongestSubsequence(str1, str2) {
  if (!str1 || !str2) {
    return '';
  }

  if (str1.length < str2.length) {
    [str2, str1] = [str1, str2];
  }

  let maxMatch = [];

  for (let i = 0; i < str1.length; i++) {
    const currMax = [];
    let current = str1[i];
    let pointerB = 0;

    while (pointerB < str2.length) {
      if (str2[pointerB] === current) {
        currMax.push(str2[pointerB]);
        current = str1[i += 1];
      }
      pointerB += 1;
    }

    if (maxMatch.length < currMax.length) {
      maxMatch = currMax;
    }
  }

  return maxMatch.join('');
}
