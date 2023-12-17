/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
  let nums1 = 0
  let nums2 = 0

  for(let i = 1; i < n + 1; i++) {
    if(i % m == 0) {
      nums2 = nums2 + i
      console.log('🚀 ~ file: 2894-divisible-andnon-divisible.js:13 ~ differenceOfSums ~ nums2:', nums2)
    } else {
      nums1 = nums1 + i
      console.log(nums1)
    }
  }

  return nums1 - nums2
};

console.log(differenceOfSums(10, 3))
// console.log(differenceOfSums(5, 2))

// Input: n = 10, m = 3
// Output: 19
// Explanation: In the given example:
// - Integers in the range[1, 10] that are not divisible by 3 are[1, 2, 4, 5, 7, 8, 10], num1 is the sum of those integers = 37.
//   - Integers in the range[1, 10] that are divisible by 3 are[3, 6, 9], num2 is the sum of those integers = 18.
// We return 37 - 18 = 19 as the answer.