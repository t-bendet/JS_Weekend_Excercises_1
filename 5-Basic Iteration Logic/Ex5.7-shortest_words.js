const shortest = (str) => {
  let wordsLength = str.split(" ").map((word) => word.length);
  return Math.min(...wordsLength);
};
const test = "this is a string with a faw words in it";
console.log(`**${test}** shortest word has a length of  ${shortest(test)}`);
