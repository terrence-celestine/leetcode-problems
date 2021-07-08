/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  /* Original solution - super slow and not efficient */

  // var result = {};
  // var answer = false;
  // for (var i = 0; i < nums.length; i++) {
  //   if (result.hasOwnProperty(nums[i])) {
  //     result[nums[i]].push(i);
  //   } else {
  //     result[nums[i]] = [];
  //     result[nums[i]].push(i);
  //   }
  // }
  // for (const prop in result) {
  //   if (result[prop].length > 1) {
  //     for (var i = 0; i < result[prop].length; i++) {
  //       for (var j = i + 1; j < result[prop].length; j++) {
  //         if (Math.abs(result[prop][i] - result[prop][j]) <= k) {
  //           answer = true;
  //           break;
  //         }
  //       }
  //     }
  //   }
  // }
  // return answer;

  /* Optimal Solution from Leetcode Discussion */
  /*
  - we start by creating an object to look up 
  */
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    if (map[nums[i]] >= 0 && i - map[nums[i]] <= k) {
      return true;
    }
    map[nums[i]] = i;
  }
  //
  return false;
};

// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // should return true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // should return true
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // should return false
