const lastStop = (busLine) => {
  let count = 0;
  for (const busStop of busLine) {
    count += busStop[0];
    count -= busStop[1];
  }
  return count;
};
const testCase = [
  [2, 0],
  [4, 1],
  [8, 5],
  [0, 2],
  [1, 0],
];
console.log(`There are ${lastStop(testCase)} people still on the bus`);
