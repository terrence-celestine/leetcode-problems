/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  if (nums.length == 1) {
    return nums;
  } else {
    for (var i = 0; i < nums.length; i++) {
      for (var j = 0; j < nums.length; j++) {
        if (nums[j] > nums[j + 1]) {
          let temp = nums[j];
          nums[j] = nums[j + 1];
          nums[j + 1] = temp;
        }
      }
    }
  }
  return nums;
};

console.log(sortColors([234, 43, 55, 63, 5, 6, 235, 547]));
