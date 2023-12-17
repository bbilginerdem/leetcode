/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
  let map = {};
  let charCode = 'a'.charCodeAt(0);
  for(let char of sentence) {
    if(map[char]) continue;
    map[char] = String.fromCharCode(charCode++);
  }

  return Object.entries(map).length == 26 ? true : false
  // return new Set(sentence) === 26
};

console.log(checkIfPangram("tttthequickbrownfoxjumpsoverthelazydog"))
