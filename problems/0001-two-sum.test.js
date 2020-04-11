/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === diff) {
        return [i, j];
      }
    }
  }
};

test("1. Two Sum", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});
