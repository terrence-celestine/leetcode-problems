/**
 * @param {number[]} nums
 * @return {number}
 */
/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

*/
/* Original Solution  */
// var missingNumber = function (nums) {
//   var totalNumbers = nums.length;
//   var sorted = nums.sort(function (a, b) {
//     return a - b;
//   });
//   for (var i = 0; i <= totalNumbers; i++) {
//     var curr = i;
//     if (!sorted.includes(curr)) {
//       return i;
//     }
//   }
// };

/* Discuss Leetcode Solution */
var missingNumber = function (nums) {
  var result = new Array(nums.length + 1).fill(-1);
  // iterate over items in array
  for (const num of nums) {
    result[num] = num;
  }

  return result.indexOf(-1);
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
