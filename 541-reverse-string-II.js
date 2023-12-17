/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var reverseStr = function (s, k) {
  let arr = s.split('');
  // loop through the array with a step of 2k
  for (let i = 0; i < arr.length; i += 2 * k) {
    console.log(i)
    // reverse the first k elements from index i
    let reversed = arr.slice(i, i + k).reverse();
    // replace the original elements with the reversed ones
    // console.log(reversed)
    console.log(arr.splice(i, k, ...reversed))
    console.log(arr)
  }
  // join the array back into a string
  return arr.join('');
};

// a b c d e f
// 0 1 2 - - - 6 7 8 - -- -- 12 13 14
// - - - 3 4 5 - - - 9 10 11 -- -- -- 15

console.log(reverseStr("abcdefda", 3))
// console.log([2, 1, 3, 4, 5].splice(4, 2, ...[]))