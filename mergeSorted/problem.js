var merge = function (nums1, m, nums2, n) {
  // if m is empty and n is empty then return nums1
  if (m === 0 && n === 0) {
    return nums1;
  }
  // if m is empty and n has numbers then push the numbers from nums2 to nums1
  if (m == 0 && n > 0) {
    var i = 0;
    while (n > 0) {
      nums1.splice(i, 0, nums2.shift());
      nums1.pop();
      i++;
      n--;
    }
    return nums1;
  }
  // if m is greater than zero and n is greater than zero
  if (m > 0 && n > 0) {
    var i = 0;
    while (n > 0) {
      
    }
  }
  return nums1;
};

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(
  merge([-1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0], 5, [-1, -1, 0, 0, 1, 2], 6)
);
