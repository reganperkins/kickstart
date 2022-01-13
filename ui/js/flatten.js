/*
Implement a flatten function such that given an array, it returns a
new array with all sub-array elements concatenated into it recursively.
Given below are some sample inputs and outputs.
*/

function helper(arr, list) {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      helper(item, list);
    } else if (item) {
      list.push(item);
    }
  });
  return list;
}

function flatten(arr) {
  const list = [];
  if (!arr || !Array.isArray(arr)) {
    console.error(new Error(`${arr} is not an array`));
  }

  return helper(arr, list);
}
