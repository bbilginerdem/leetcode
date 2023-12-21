/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  let save = 0;
  let myArr = [];

  for (let i = 0; i < points.length; i++) {
    myArr.push(points[i][0]);
  }

  let newArr = myArr.sort(function (a, b) {
    return a - b;
  })

  for (let i = 0; i < newArr.length - 1; i++) {
    let subs =  Math.abs(myArr[i] - newArr[i + 1]);
    
    if (save < subs) {
      save = subs;
    }
  }

  return save
};

// console.log(maxWidthOfVerticalArea([[3, 1], [9, 0], [1, 0], [1, 4], [5, 3], [8, 8]]))
console.log(maxWidthOfVerticalArea([[2, 4], [10, 10], [6, 8], [6, 8], [6, 10], [8, 6], [5, 3]]))