Array.prototype.myForEach = function (callback) {
  if (callback.length == 1) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i]);
    }
  } else if (callback.length == 2) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i);
    }
  } else if (callback.length == 3) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }
};

Array.prototype.myMap = function (callback) {
  let mapArr = [];
  if (callback.length == 1) {
    for (let i = 0; i < this.length; i++) {
      mapArr.push(callback(this[i]));
    }
  } else if (callback.length == 2) {
    for (let i = 0; i < this.length; i++) {
      mapArr.push(callback(this[i], i));
    }
  } else if (callback.length == 3) {
    for (let i = 0; i < this.length; i++) {
      mapArr.push(callback(this[i], i, this));
    }
  }
  return mapArr;
};

Array.prototype.myFilter = function (callback) {
  let fillterArr = [];
  if (callback.length == 1) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        fillterArr.push(this[i]);
      }
    }
  } else if (callback.length == 2) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i)) {
        fillterArr.push(this[i]);
      }
    }
  } else if (callback.length == 3) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        fillterArr.push(this[i]);
      }
    }
  }
  return fillterArr;
};

const longest = (str) => {
  const arr = str.split(" ");
  const wordsLength = arr.myMap((word) => word.length);
  const longestWords = arr.myFilter(
    (word) => word.length == Math.max(...wordsLength)
  );
  return longestWords;
};
const test =
  "my methodes actually workssssssssssssssssssssssssssssssssssssssssssssssssssss";
console.log(`it ${longest(test)}`);
