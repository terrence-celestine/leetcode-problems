/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var prevIdx = "";
  for (var i = nums.length; i > 0; i--) {
    prevIdx = i - 1;
    if (nums[i] == nums[prevIdx]) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};
