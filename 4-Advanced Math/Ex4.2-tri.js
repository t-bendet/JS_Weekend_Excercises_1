const tribonacci = (signature, n) => {
  if (!n) {
    return [];
  }
  let arr = signature;
  for (i = 3; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2] + arr[i - 3]);
  }
  return arr[n - 1];
};
const sign = [0, 0, 1];
const tests = [1, 2, 3, 4, 5, 6, 9, 12];
const results = tests.map((number) => {
  console.log(
    `The ${number}th number in tribonacci with a signature of ${[
      ...sign,
    ]} is ${tribonacci([...sign], number)}`
  );
  console.log(
    "******************************************************************"
  );
});
