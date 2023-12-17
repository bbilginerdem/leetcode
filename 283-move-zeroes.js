/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zero = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[zero++] = nums[i]
    }
  }

  for (i = zero; i < nums.length; i++) {
    nums[i] = 0
  }

  console.log(nums)
};

console.log(moveZeroes([1,3,0,12,0]))