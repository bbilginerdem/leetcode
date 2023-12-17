var isAcronym = function(words, s) {
  let letterArr = []
  let x = 0
  let sArr = s.split('')
  if(words.length == 0 && s.split('').length == 0) {
    return true
  }

  words.forEach(element => {
    letterArr.push(element.split('')[0])
  })

  letterArr.forEach((element, index) => {
    if(element != sArr[index]) {
      x++
    }
  })

  return x == s.length
};

// console.log(isAcronym(["alice", "bob", "charlie"], "abc"))
console.log(isAcronym(["afqcpzsx", "icenu"], "yi"))