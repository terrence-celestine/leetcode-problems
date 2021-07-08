/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var reverse = Math.abs(x).toString().split("").reverse().join("");
  var isNegative = false;
  if (x < 0) {
    isNegative = true;
  }

  if (isNegative) {
    return reverse * -1;
  } else {
    return reverse * 1;
  }
};
