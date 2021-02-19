const longest = (a, b) => {
  let set = new Set([...a, ...b]);
  return [...set].join("");
};
const test = ["xyaabbbccccdefww", "xxxxyyyyabklmopq"];
console.log(
  `${test.join(" *and* ")} longest string possible is ${longest(
    test[0],
    test[1]
  )} `
);
