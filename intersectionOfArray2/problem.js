/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/*
Brute Force - Not Optimal
- Look for elements that exist in both arrays
- We can loop through nums 1 and create a map 
- We can loop through nums2 and create a map
- Find the larger array and loop through it, for each element  in the array 
look at each element and see if it is in the map for its opposite. If found check the count and see if those match.
- If the element exists in both arrays and the count matches then push the max count else push the lesser count. e.g. if nums1 contains 9 once but nums2 contains it twice, add 9 once to the result array.
*/
var intersect = function (nums1, nums2) {
  var map1 = {};
  var map2 = {};
  var result = [];
  for (var i = 0; i < nums1.length; i++) {
    var curr = nums1[i];
    if (map1.hasOwnProperty(curr)) {
      map1[curr] += 1;
    } else {
      map1[curr] = 1;
    }
  }
  // do the same iteration for nums2
  for (var i = 0; i < nums2.length; i++) {
    var curr = nums2[i];
    if (map2.hasOwnProperty(curr)) {
      map2[curr] += 1;
    } else {
      map2[curr] = 1;
    }
  }
  if (nums1.length > nums2.length) {
    for (const [item, value] of Object.entries(map1)) {
      if (map2.hasOwnProperty(item)) {
        if (map2[item] == map1[item]) {
          var count = 0;
          while (count < value) {
            result.push(item);
            count++;
          }
        } else if (map2[item] < map1[item]) {
          var count = 0;
          while (count < map2[item]) {
            result.push(item);
            count++;
          }
        } else {
          var count = 0;
          while (count < map1[item]) {
            result.push(item);
            count++;
          }
        }
      }
    }
  } else {
    for (const [item, value] of Object.entries(map2)) {
      if (map1.hasOwnProperty(item)) {
        if (map1[item] == map2[item]) {
          var count = 0;
          while (count < value) {
            result.push(item);
            count++;
          }
        } else if (map1[item] < map2[item]) {
          var count = 0;
          while (count < map1[item]) {
            result.push(item);
            count++;
          }
        } else {
          var count = 0;
          while (count < map2[item]) {
            result.push(item);
            count++;
          }
        }
      }
    }
  }
  return result;
};

// Leetcode discussion solution
// Time O(n) - Space O(n)
var intersectLeet = function (nums1, nums2) {
  let map = new Map();
  let result = [];
  // set up our map to compare against
  for (const item of nums1) {
    map.set(item, map.get(item) + 1 || 1);
  }
  // loop over the items of nums2
  for (const item of nums2) {
    // if our map of nums1 has the element in nums2
    if (map.get(item) >= 1) {
      result.push(item);
      map.set(item, map.get(item) - 1);
    }
  }
  return result;
};
// console.log(intersect([1, 2, 2, 1], [2, 2]));
// console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));

console.log(intersectLeet([1, 2, 2, 1], [2, 2]));
console.log(intersectLeet([4, 9, 5], [9, 4, 9, 8, 4]));
