const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numArrayOne) {
  if (numArrayOne.length === 0) {
    return 0;
  } else if (numArrayOne.length === 1) {
    return numArrayOne[0];
  } else if (numArrayOne.length === 2) {
    return numArrayOne[0] + numArrayOne[1];
  } else {
    return numArrayOne.reduce((total, currentItem) => {
      return total + currentItem;
    }, 0);
  }
};

const multiply = function (numberArray) {
  if (numberArray.length >= 2) {
    return numberArray.reduce((total, currentItem) => {
      return total * currentItem;
    }, 1);
  }
};

const power = function (numOne, numTwo) {
  return Math.pow(numOne, numTwo);
};

const factorial = function (n) {
  let res = 1;

  if (n === 0)
    return 1;
  for (let i = 2; i <= n; i++)
    res = res * i;
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
