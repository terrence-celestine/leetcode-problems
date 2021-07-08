/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  var result = {};
  for (var i = 0; i < nums.length; i++) {
    if (result.hasOwnProperty(nums[i])) {
      result[nums[i]].push(i);
    } else {
      result[nums[i]] = [];
      result[nums[i]].push(i);
    }
  }
  return result;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // should return true
// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // should return true
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // should return false
