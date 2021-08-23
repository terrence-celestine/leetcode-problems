/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {    
    var firstSet = new Set(nums1);
    var secondSet = new Set(nums2);
    var result = new Set();
    for (const item of firstSet) {
        if (secondSet.has(item)){
            result.add(item);
        }
    }  
    return result;  
};

console.log(intersection([1,2,2,1], [2,2]))
console.log(intersection([4,9,5],[9,4,9,8,4]))