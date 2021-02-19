const findPerimeter = (recWidth, recLength) => 2 * (recWidth + recLength);
const test = [6, 7];
console.log(
  `the Perimeter of a rectngle with a hight of ${test[0]} and a width of ${
    test[1]
  } is ${findPerimeter(test[0], test[1])}`
);
