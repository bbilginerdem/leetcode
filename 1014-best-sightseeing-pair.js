/**
 * @param {number[]} values
 * @return {number}
 */


// biome-ignore lint/style/noVar: <explanation>
var  maxScoreSightseeingPairOofNPower2 = (values) => {
	const scores1 = [];
	const scores2 = [];
	let value1 = 0;
	let value2 = 0;
	let highestValue = Number.NEGATIVE_INFINITY; // Initialize to the lowest possible value
	let sum = 0;

	for (let i = 0; i < values.length - 1; i++) {
		value1 = values[i] + i;
		scores1.push(value1);
	}

	for (let j = 1; j < values.length; j++) {
		value2 = values[j] - j;
		scores2.push(value2);
	}

	for (let i = 0; i < scores1.length; i++) {
		for (let j = i; j < scores2.length; j++) {
			sum = scores1[i] + scores2[j];
			if (sum > highestValue) {
				highestValue = sum;
			}
		}
	}

	return highestValue;
};

// biome-ignore lint/style/noVar: <explanation>
var maxScoreSightseeingPair = (values) => {
	let maxScore = 0;
	let maxPrev = values[0];

	for (let j = 1; j < values.length; j++) {
		// Calculate the maximum score for the current spot
		maxScore = Math.max(maxScore, maxPrev + values[j] - j);

		// Update the maximum value of values[i] + i for the next iteration
		maxPrev = Math.max(maxPrev, values[j] + j);
	}

	return maxScore;
};


console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6])); // 11
console.log(maxScoreSightseeingPair([1, 2, 2])); // 3
