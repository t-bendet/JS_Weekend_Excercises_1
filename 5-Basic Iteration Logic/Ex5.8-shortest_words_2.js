const longest = (str) => {
  const arr = str.split(" ");
  const wordsLength = arr.map((word) => word.length);
  const longestWords = arr.filter(
    (word) => word.length == Math.max(...wordsLength)
  );
  return longestWords;
};
const test = "this is a strinaaaaaaaag with a faw words in it";
console.log(`**${test}** longest word is ${longest(test)}`);
