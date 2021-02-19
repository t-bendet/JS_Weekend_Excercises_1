const accum = (str) => {
  const arr = [...str.toLowerCase()];
  arr.forEach((char, i, arr) => {
    arr[i] = arr[i].toUpperCase() + arr[i].repeat(i);
  });
  return arr.join("-");
};
const test = "RqaEzty";
console.log(`**${test}** in mumblish is ${accum(test)}`);
