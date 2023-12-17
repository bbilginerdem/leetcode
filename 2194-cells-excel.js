/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
  let [col1, row1, , col2, row2] = s.split('')

  let c1 = colToNum(col1)
  let c2 = colToNum(col2)
  let r1 = parseInt(row1)
  let r2 = parseInt(row2)

  function numToCol (num) {
    let col = "";
    while(num > 0) {
      let rem = (num - 1) % 26;
      num = Math.floor((num - 1) / 26);
      col = String.fromCharCode(rem + 'A'.charCodeAt(0));
    }
    return col;
  }


  function colToNum (col) {
    let num = 0;
    for(let c of col) {
      num = num * 26 + (c.charCodeAt(0) - 'A'.charCodeAt(0) + 1);
    }
    return num;
  }

  let cells = [];
  // Loop through the rows and columns in the range
  for(let i = r1; i <= r2; i++) {
    for(let j = c1; j <= c2; j++) {
      // Convert the row and column numbers to strings
      let row = i.toString();
      let col = numToCol(j);
      console.log(row)
      // Concatenate the column and row strings
      let cell = col + row;
      // Push the cell to the array
      cells.push(cell);
    }
  }

  return cells
};

// console.log(cellsInRange("K1:L2")) // ["K1","K2","L1","L2"]
// console.log(cellsInRange("K1:L3")) // ["K1","K2","K3","L1","L2","L3"]
console.log(cellsInRange("B1:F1")) // ["A1","B1","C1","D1","E1","F1"]
