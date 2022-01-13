/*
  Implement Operation function such that it allows method chaining to achieve the functionality given below -
  let ops = Operation().add(2).subtract(1).multiply(10).divide(2);
*/

const Operation = () => {
  let currentCount = 0;

  return {
    add: function add(num) {
      currentCount += num;
      return this;
    },
    subtract: function subtract(num) {
      currentCount -= num;
      return this;
    },
    multiply: function multiply(num) {
      currentCount *= num;
      return this;
    },
    divide: function divide(num) {
      currentCount /= num;
      return this;
    },
    getCount: function getCount() {
      return currentCount;
    },
  };
};

const ops = Operation().add(2).subtract(1).multiply(10).divide(2);
console.log(ops.getCount());
