const fiboFromZero = (n) => {
  if (!n) {
    return "Count start from 1 here";
  }
  let n1 = 1,
    n2 = 0,
    acc;
  while (n > 1) {
    acc = n1;
    n1 = n1 + n2;
    n2 = acc;
    n--;
  }

  return n2;
};
const tests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
tests.forEach((number) => {
  console.log(`The ${number}th number in Fibonacci is ${fiboFromZero(number)}`);
});
