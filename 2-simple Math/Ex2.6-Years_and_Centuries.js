const Centuries = (year) => {
  if (year) {
    return year % 100 == 0 ? year / 100 : Math.floor(year / 100) + 1;
  } else {
    return "dont push it";
  }
};
const tests = [2, 487, 1987, 0];
tests.forEach((year) => {
  console.log(`year ${year} is in the ${Centuries(year)}th century`);
});
