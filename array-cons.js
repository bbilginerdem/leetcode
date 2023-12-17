var findLongestConsecutiveSubsequence = function(nums) {
	let count = 1
	let countArr = []
  let sorted = nums.sort(function(a, b) {
    return a - b;
  });

  if(nums.length == 0) {
    return 0
  }

	for(let i=0; i < nums.length; i++) {
		if(sorted[i] +1 == sorted[i+1]) {
      count++
		} else {
			countArr.push(count)
			count = 0
		}
	}

	return Math.max(...countArr)
};

// console.log(findLongestConsecutiveSubsequence([100,4,200,1,2,3]))
console.log(findLongestConsecutiveSubsequence([1]))