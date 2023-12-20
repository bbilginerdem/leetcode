var findLongestConsecutiveSubsequence = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let set = new Set(nums);
  console.log(set)
  let longestStreak = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {  // check if it's the first element of the sequence
      let currentNum = num;
      let currentStreak = 1;

      while (set.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
};

console.log(findLongestConsecutiveSubsequence([100, 4, 200, 1, 2, 3]))
console.log(findLongestConsecutiveSubsequence([1, 2, 0, 1]))
console.log(findLongestConsecutiveSubsequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
// console.log(findLongestConsecutiveSubsequence([1]))