const Growth = (pStart, percent, aug, pEnd) => {
  let currentP = pStart;
  let years = 0;
  while (currentP < pEnd) {
    currentP += Math.floor(currentP * (percent / 100) + aug); //if percent == null it will just add up aug
    years++;
  }
  return years;
};
const tests = [
  [1000, 2, 50, 1200],
  [1500, 5, 100, 5000],
  [1500000, 2.5, 10000, 2000000],
];
tests.forEach((data, i) => {
  console.log(
    `case ${i + 1} result is ${Growth(
      data[0],
      data[1],
      data[2],
      data[3]
    )} years`
  );
});
