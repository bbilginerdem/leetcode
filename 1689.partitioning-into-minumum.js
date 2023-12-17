/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
  let m = 0

  for(let i = 0; i < n.length; i++) {
    let temp = n[i] - '0';
    console.log(temp)
    if(temp > m) {
      m = temp
    }
  }

  return m
};

console.log(minPartitions('82734'))

