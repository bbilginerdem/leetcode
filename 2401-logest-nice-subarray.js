const longestNiceSubarray = (nums) => {
	let max = 0;
	let window = 0; // Tracks the bitwise AND of the current window
	let start = 0; // Start of the sliding window

	for (let end = 0; end < nums.length; end++) {
		while ((window & nums[end]) !== 0) {
			window ^= nums[start]; // Remove nums[start] from the window
			start++; // Shrink the window
		}
		window |= nums[end]; // Add nums[end] to the window
    console.log(window, start, end, "window")
		max = Math.max(max, end - start + 1); // Update max length
    console.log(max, "max")
	}

	return max;
};


console.log(longestNiceSubarray([1,2,3,4,5,6,7,8,9,10])) // 1
console.log(longestNiceSubarray([9,3,4,2,4,3,9])) // 3
