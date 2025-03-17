const divideArray = (nums) => {
	// Sort the array numerically
	const sorted = nums.sort((a, b) => a - b);

	// Loop through the array in steps of 2
	for (let i = 0; i < sorted.length; i += 2) {
		if (sorted[i] !== sorted[i + 1]) return false; // Check if pairs are equal
	}

	return true; // All pairs are valid
};

console.log(divideArray([1, 2, 3, 4])); // Output: false
console.log(divideArray([3, 2, 1, 2, 3, 1])); // Output: true
