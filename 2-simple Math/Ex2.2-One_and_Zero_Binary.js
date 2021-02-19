const arrays = [
  [0, 0, 0, 1],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 0, 0, 1],
  [0, 0, 1, 0],
  [0, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 0, 1, 0, 0, 1, 0],
];
const oneAndZero = (test) => parseInt(test.join(""), 2); // convertion function
arrays.forEach((array) =>
  console.log(`${array.join("")} is ${oneAndZero(array)} in binary `)
);
