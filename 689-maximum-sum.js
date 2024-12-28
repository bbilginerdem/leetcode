/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// biome-ignore lint/style/noVar: <explanation>
var maxSumOfThreeSubarrays = (nums, k) => {
	// 1. crush it into k = 1 array
	// slide window
	const sums = [];
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		if (i >= k) {
			sum -= nums[i - k];
		}

		if (i >= k - 1) {
			sums.push(sum);
		}
	}

	// 2. max Array from left(inclusive)
	const maxIndexFromLeft = Array(sums.length).fill(0);
	maxIndexFromLeft[0] = 0;
	for (let i = 1; i < sums.length; i++) {
		if (sums[i] > sums[maxIndexFromLeft[i - 1]]) {
			maxIndexFromLeft[i] = i;
		} else {
			maxIndexFromLeft[i] = maxIndexFromLeft[i - 1];
		}
	}

	// 3. max array from right
	const maxIndexFromRight = Array(sums.length).fill(0);
	maxIndexFromRight[sums.length - 1] = sums.length - 1;
	for (let i = sums.length - 2; i > -1; i--) {
		if (sums[i] >= sums[maxIndexFromRight[i + 1]]) {
			maxIndexFromRight[i] = i;
		} else {
			maxIndexFromRight[i] = maxIndexFromRight[i + 1];
		}
	}

	console.log(maxIndexFromLeft, maxIndexFromRight);
	// 4. get the right by fixing middle element
};

console.log(maxSumOfThreeSubarrays([1, 2, 1, 2, 6, 7, 5, 1], 2)); // [0, 3, 5]
