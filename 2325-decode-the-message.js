/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
  let elementCount = {}
  let result = {}
  let keyArr = key.replace(/\s/g, '').split('');
  let messageArr = message.split('')
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let decipher = []

  let uniqueArr = keyArr.filter((element) => {
    elementCount[element] = (elementCount[element] || 0) + 1
    return elementCount[element] <= 1
  })


  for(let i in uniqueArr) {
    result[uniqueArr[i]] = alphabet[i]
  }

  for(let i in messageArr) {
    if(messageArr[i] !== " ") {
      decipher.push(result[messageArr[i]])
    } else {
      decipher.push(' ')
    }
  }

  return decipher.join('')
};

console.log(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv"))