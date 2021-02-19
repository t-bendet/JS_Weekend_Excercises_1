const findUni = (arr) => {
  if (arr.length < 3) {
    return 0;
  }
  let set = new Set([...arr]);
  let charCount = [...set].map(
    (setChar) => arr.filter((arrChar) => setChar == arrChar) //return an array of nested arrays,each nested array contains number of apperances for each letter
  );
  let unique = charCount.filter((item) => item.length == 1); //filter only duplicates arrays
  return unique.join("") ? unique.join("") : 0; //return num of duplicates
};
const tests = [[0, 0, 0.55, 0, 0], [1, 1, 1, 0, 1, 1], [1, 2], []];
tests.forEach((array, i) => {
  if (findUni(array)) {
    console.log(`array ${i + 1} unique item is ${findUni(array)} `);
  } else {
    console.log(`array ${i + 1} has no unique item's... `);
  }
});
