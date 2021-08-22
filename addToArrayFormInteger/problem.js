/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  // join the num string and convert to a number
  var convertedNumArray = num.join("");
  convertedNumArray = BigInt(convertedNumArray) + BigInt(k);
  var added = String(convertedNumArray);
  var result = [];
  for (const letter of added) {
    result.push(Number(letter));
  }
  return result;
};

console.log(addToArrayForm([1, 2, 0, 0], 34)); // should return 1234
console.log(addToArrayForm([2, 7, 4], 181)); // should return 455
console.log(addToArrayForm([2, 1, 5], 806)); // should return 1021
console.log(
  addToArrayForm(
    [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
    516
  )
);
