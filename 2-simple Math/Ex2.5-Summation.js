const summation = (num) => {
  let i = 1;
  let res = 0;
  while (num >= i) {
    res += i;
    i++;
  }
  return res;
};
const tests = [2, 8, 12];
tests.forEach((num, i) => {
  console.log(`num ${i + 1} summation is ${summation(num)} `);
});
