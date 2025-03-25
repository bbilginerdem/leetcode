var getSneakyNumbers = function (nums) {
  const duplicates = nums.filter((num,index,array) => array.indexOf(num) !== index);
 return duplicates
};

console.log(getSneakyNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1])); // [1]
console.log(getSneakyNumbers([9, 3, 4, 2, 4, 3, 9])); // [3, 4, 9]