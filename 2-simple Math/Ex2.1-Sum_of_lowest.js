const sumOfLowest = (arr) => {
  arr.sort((first, second) => first - second);
  return arr[0] + arr[1];
};
const arrays = [
  [10, 343445353, 3453445, 3453545353453],
  [19, 5, 42, 2, 77],
  [1, 1, 0, 1, 0, 0, 1, 0],
];
arrays.forEach((array, i) =>
  console.log(`array ${i + 1} sumOfLowest is ${sumOfLowest(array)} `)
);
