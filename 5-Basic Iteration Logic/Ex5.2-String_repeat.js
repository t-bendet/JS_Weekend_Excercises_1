const repeatStr = (str, repeat) => {
  let newStr = str.repeat(repeat);
  return newStr;
};
const testStr = "tal";
const n = 5;
console.log(
  `${testStr} turns into ${repeatStr(
    testStr,
    n
  )} after you reapeat it ${n} times`
);
