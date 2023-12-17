/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  let myArr = s.split('')
  let myArr2 = [0,0,0,0,0,0,0,0]
  for(let i = 0; i < s.length; i++) {
    myArr2[indices[i]] = myArr[i]
  }

  return myArr2.join('')
};

// s = "codeleet", indices = [4,5,6,7,0,2,1,3]
console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]))