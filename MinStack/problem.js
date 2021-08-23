/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.data = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.data.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.data.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.data.length > 0) {
    let lastNumber = this.data.length - 1;
    return this.data[lastNumber];
  } else {
    return null;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return Math.min(...this.data);
};

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top()); // return 0
console.log(minStack.getMin()); // return -2
