/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  let mySet = new Set()
  const morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
  let map = {};
  let charCode = 'a'.charCodeAt(0);

  for(let char of morseCode) {
    if(map[char]) continue;
    map[char] = String.fromCharCode(charCode++);
  }

  words.forEach((element) => {
    let morseDecoding = []

    let x = element.split('') // ["g", "i", "n"]

    // map the keys to the morseDecoding
    for(let i = 0; i < x.length; i++) {
      morseDecoding.push(Object.keys(map).filter(key => map[key] === x[i]))
    }

    // to remove duplicates add it to a set
    mySet.add(morseDecoding.join(''))
  })

  return mySet.size
};


console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg", "xd"]))
