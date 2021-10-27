/*
90. Subsets II
  Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
  The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
  Input: nums = [1,2,2]
  Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

Example 2:
  Input: nums = [0]
  Output: [[],[0]]

Constraints:
  1 <= nums.length <= 10
  -10 <= nums[i] <= 10
*/

function helper(nums, i, slate, results, pickedUp) {
  if (i === nums.length) {
    results.push([...slate]);
    return;
  }

  helper(nums, i + 1, slate, results, false);

  if (i > 0 && nums[i] === nums[i - 1] && !pickedUp) return;

  slate.push(nums[i]);
  helper(nums, i + 1, slate, results, true);
  slate.pop();
}

function subsetsWithDup(nums) {
  const results = [];
  helper(nums.sort((a, b) => b - a), 0, [], results, false);
  return results;
}

