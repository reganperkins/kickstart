/*
47. Permutations II

Given a collection of numbers, nums, that might contain duplicates,
return all possible unique permutations in any order.

Example 1:
  Input: nums = [1,1,2]
  Output: [[1,1,2], [1,2,1], [2,1,1]]

Example 2:
  Input: nums = [1,2,3]
  Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Constraints:
  1 <= nums.length <= 8
  -10 <= nums[i] <= 10
*/

// function helper(nums, i, slate, results) {
//   if (i === nums.length) {
//     results.push([...slate]);
//     return;
//   }
//   console.log(nums[i] === nums[i - 1], slate, nums, i);
//   if (i > 0 && nums[i] === nums[i - 1]) return;

//   for (let j = i; j < nums.length; j++) {
//     [nums[j], nums[i]] = [nums[i], nums[j]];
//     slate.push(nums[i]);
//     helper(nums, i + 1, slate, results);
//     slate.pop();
//     [nums[i], nums[j]] = [nums[j], nums[i]];
//   }
// }

// function permuteUnique(nums) {
//   const results = [];
//   const sortedNums = nums.sort((a, b) => a - b);
//   helper(sortedNums, 0, [], results);
//   return results;
// }





function backtracking(nums, slate, results) {
  if (nums.length === 0) {
    results.push([...slate]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;

    slate.push(nums[i]);
    nums.splice(i, 1);
    backtracking(nums, slate, results);
    nums.splice(i, 0, slate.pop());
  }
}

function permuteUnique(nums) {
  nums.sort((a, b) => a - b);
  const results = [];
  backtracking(nums, [], results);
  return results;
};
