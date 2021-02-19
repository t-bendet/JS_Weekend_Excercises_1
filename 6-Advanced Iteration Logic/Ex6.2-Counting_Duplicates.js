const duplicates = (str) => {
  let arr = [...str.toLowerCase()];
  let set = new Set([...str.toLowerCase()]);
  let charCount = [...set].map(
    (setChar) => arr.filter((arrChar) => setChar == arrChar) //return an array of nested arrays,each nested array contains number of apperances for each letter
  );
  let duplicateCount = charCount.filter((item) => item.length > 1); //filter only duplicates arrays
  return duplicateCount.length; //return num of duplicates
};
const test = "indivisibility";
console.log(`**${test}** has ${duplicates(test)} duplicates`);
