const toCamelCase = (str) => {
  let camel = str.split("");
  camel.forEach((char, i, arr) => {
    if (char === "-" || char === "_") {
      arr.splice(i, 1);
      arr[i] = arr[i].toUpperCase();
    }
  });
  return camel.join("");
};
const test = "the-stealth-warrior";
console.log(`${test} turns into ${toCamelCase(test)} in CamelCase`);
