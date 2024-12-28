
// biome-ignore lint/style/noVar: <explanation>
var xd2 = () => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (j === 1) {
        break; // Breaks out of the inner loop
      }
      console.log(`i = ${i}, j = ${j}`);
    }
    console.log(`Outer loop iteration i = ${i} completed`);
  }
}

// biome-ignore lint/style/noVar: <explanation>
var xd = () => {
  outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (j === 1) {
        continue outerLoop; // Skip the current iteration of the outer loop
      }
      console.log(`i = ${i}, j = ${j}`);
    }
    console.log(`Outer loop iteration i = ${i} completed`);
  }
}

// console.log(xd2())
console.log(xd())
