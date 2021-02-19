const maskify = (str) =>
  str.length > 4 ? "#".repeat(str.length - 4) + str.slice(-4) : str;
const test = "4556364607935616";
console.log(`${test} turns into ${maskify(test)} after you mask it`);
