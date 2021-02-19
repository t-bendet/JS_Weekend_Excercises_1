const isogram = (str) => {
  let unicasing = [...str.toLowerCase()];
  let set = new Set([...unicasing]);
  return [...set].join("") === unicasing.join("");
};
const test = "Talt";
console.log(`**${test}** is ${isogram(test) ? "a real" : "not an"} isogram`);
