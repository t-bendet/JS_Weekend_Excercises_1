const basic = (operation, str1, str2) => {
  let n1 = parseInt(str1);
  let n2 = parseInt(str2);
  let res;
  switch (operation) {
    case "+":
      res = n1 + n2;
      break;
    case "-":
      res = n1 - n2;
      break;
    case "*":
      res = n1 * n2;
      break;
    case "**":
      res = n1 ** n2;
      break;
    case "/":
      res = n1 / n2;
      break;
    case "%":
      res = n1 % n2;
      break;
  }
  return res;
};
const tests = [
  ["/", "4", "2"],
  ["-", "9", "3"],
  ["%", "2", "1"],
  ["*", "4", "3"],
];
tests.forEach((test) => {
  console.log(
    `The outcome of ${test.join(" ")} is ${basic(test[0], test[1], test[2])}`
  );
});
