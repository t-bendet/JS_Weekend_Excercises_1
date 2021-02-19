const findNextSquare = (n) =>
  Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
const squers = [121, 625, 627];
squers.forEach((sqr) => {
  let res = findNextSquare(sqr);
  if (res !== -1) {
    console.log(`the next perfect squere after ${sqr} is ${res}`);
  } else {
    console.log(`${sqr} is not a perfect squere`);
  }
});
