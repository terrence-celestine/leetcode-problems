// Brute Force - not optimal
var merge = function (nums1, m, nums2, n) {
  if (m == 0 && n == 0) {
    return nums1;
  } else if (m >= 1 && n == 0) {
    return nums1;
  } else if (m == 0 && n >= 1) {
    var i = 0;
    while (i < n) {
      nums1.splice(i, 1, nums2.shift());
      i++;
    }
  } else if (m >= 1 && n >= 1) {
    var i = 0;
    while (i < n) {
      nums1.pop();
      i++;
    }
    i = 0;
    while (i < n) {
      nums1.push(nums2.shift());
      i++;
    }
  }
  return nums1.sort(function (a, b) {
    return a - b;
  });
};

// From leetcode discussion
/*
Explaination: 
Since we know how many items are in both arrays m + n gives us the total length of nums1.
- We can use that total value to find the last index of the array
- We can use m and n to find the last item of each array and compare the two
- If nums1[m - 1] is less than nums2[n - 1], we set the last element of nums1 to nums2[n - 1]
- else we set the last element of nums1 to nums1[m - 1]
- we can decrement m and n depending which one is lower so we always keep track of the element we are on.
- on each iteration we decrement curr;
*/

var mergeLeet = function (nums1, m, nums2, n) {
  // cur is the last index of nums1 array

  let cur = m + n - 1;

  // we wanna do this if we have elements in both the arrays
  while (m > 0 && n > 0) {
    // console.log(m - 1, n - 1);
    if (nums1[m - 1] < nums2[n - 1]) {
      nums1[cur] = nums2[n - 1];
      n--;
    } else {
      nums1[cur] = nums1[m - 1];
      m--;
    }
    cur--;
  }

  // if there are no elememts in nums1 then we add all nums2 to nums1

  while (n > 0) {
    nums1[cur] = nums2[n - 1];
    n--;
    cur--;
  }

  return nums1;
  // we do not wanna return anything ;)
};

// console.log(merge([0, 0, 0, 0, 0], 0, [1, 2, 3, 4, 5], 5));
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge([1], 1, [], 0));
// console.log(merge([0], 0, [1], 1));
// console.log(
//   merge([-1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0], 5, [-1, -1, 0, 0, 1, 2], 6)
// );
