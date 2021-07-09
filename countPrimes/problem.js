/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  var result = [];

  for (var i = 0; i < n; i++) {
    var isPrime = true;
    if (i > 1) {
      for (var j = 2; j < i; j++) {
        if (i % j == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime === true) {
        result.push(i);
      }
    }
  }
  return result.length;
};

console.log(countPrimes(10)); // should return [2,3,5,7]
console.log(countPrimes(0)); // should return 0
console.log(countPrimes(1)); // should return 0
