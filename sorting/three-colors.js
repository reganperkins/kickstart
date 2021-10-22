/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/*
Dutch National Flag
  Given some balls of three colors arranged in a line, rearrange them such that all the
  red balls go first, then green and then blue ones. Do rearrange the balls in place.
  A solution that simply counts colors and overwrites the array is not the one we are
  looking for. This is an important problem in search algorithms theory proposed by
  Dutch computer scientist Edsger Dijkstra. Dutch national flag has three colors
  (albeit different from ones used in this problem).

Example
  Input: [G, B, G, G, R, B, R, G]
  Output: [R, R, G, G, G, G, B, B]
  There are a total of 2 red, 4 green and 2 blue balls. In this order they appear
  in the correct output.
*/


function dutchFlagSort(balls) {
  let r = 0;
  let b = balls.length -1;
  let i = 0;

  while (i <= b) {
    if (balls[i] === 'R') {
      [balls[r], balls[i]] = [balls[i], balls[r]];
      r++;
      i++;
    } else if (balls[i] === 'B') {
      [balls[b], balls[i]] = [balls[i], balls[b]];
      b--;
    } else {
      i++;
    }
  }
}
