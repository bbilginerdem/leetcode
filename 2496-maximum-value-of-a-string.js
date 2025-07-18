/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  let maxVal = 0
  for (const s of strs) {
    let currentVal;
    if (/^\d+$/.test(s)) {
      currentVal = parseInt(s, 10)
      console.log(currentVal, "currentVal")
    } else {
      currentVal = s.length
    }
    if (currentVal > maxVal) {
      maxVal = currentVal
    }
  }

  return maxVal
};

console.log(maximumValue(["alic3", "bob", "3", "4", "00000"]))
console.log(maximumValue(["1", "01", "001", "0001"]))
