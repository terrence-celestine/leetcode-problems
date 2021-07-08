## Notes

Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

1. We can start a loop from the end of the array and iterate while i is greater than 0.
2. On each iteration we compare the current element with the previous element.
   1. If the current element and previous element match
      1. We remove the current element in place using **splice**
3. At the end we return the length of the array.

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var prevIdx;
  for (var i = nums.length; i > 0; i--) {
    prevIdx = i - 1;
    if (nums[i] == nums[prevIdx]) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};
```
