const abbriviate = (str) => {
  let init = str.trim().split(" ");
  init.forEach((word, i, arr) => {
    arr[i] = arr[i].slice(0, 1).toUpperCase();
  });
  return init.join(".");
};
const test = "   tal bendet ";
console.log(`${test} turns into ${abbriviate(test)} after you abbriviate it`);
