const isAcronym = (words, s) => {
	const letterArr = [];
	let x = 0;
	const sArr = s.split("");
	if (words.length === 0 && s.split("").length === 0) {
		return true;
	}

	for (const element of words) {
		letterArr.push(element.split("")[0]);
	}

	letterArr.forEach((element, index) => {
		if (element !== sArr[index]) {
			x++;
		}
	});

	return x === s.length;
};

// console.log(isAcronym(["alice", "bob", "charlie"], "abc"))
console.log(isAcronym(["afqcpzsx", "icenu"], "yi"));
