var merge = function (nums1, m, nums2, n) {
  if (m > 0 && n == 0) {
    return nums1;
  } else if (m == 0 && n == 0) {
    return nums1;
  } else if (m == 0 && n > 0) {
    var i = 0;
    while (i <= n) {
      nums1.pop();
      nums1.push(nums2.shift());
      i++;
    }
    return nums1.sort();
  } else {
    var i = 0;
    while (i < m) {
      nums1.pop();
      i++;
    }
    // reset i
    i = 0;
    while (i < m) {
      var curr = nums2.shift();
      // console.log(curr);
      nums1.push(curr);
      i++;
    }
  }
  return nums1.sort();
};

console.log(merge([0, 0, 0, 0, 0], 0, [1, 2, 3, 4, 5], 5));
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge([1], 1, [], 0));
// console.log(merge([0], 0, [1], 1));
// console.log(
//   merge([-1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0], 5, [-1, -1, 0, 0, 1, 2], 6)
// );
