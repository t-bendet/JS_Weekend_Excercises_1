const toWeirdCase = (str) => {
  let Weird = str.split("");
  Weird.forEach((char, i, arr) => {
    if (i % 2 == 0) {
      arr[i] = arr[i].toUpperCase();
    } else {
      arr[i] = arr[i].toLowerCase();
    }
  });
  return Weird.join("");
};
const test = "the stealth warrior";
console.log(`${test} turns into ${toWeirdCase(test)} in weird casing`);
