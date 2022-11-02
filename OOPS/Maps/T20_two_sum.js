/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Solution using map
var twoSum = function(nums, target) {
    let map = new Map;
    for (var i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            //console.log([map.get(complement), i])
            return [map.get(complement), i]
        }
        map.set(nums[i], i);
        
    }
}
//twoSum([3, 2, 4], 6);
twoSum([2, 5, 7, 11, 15], 9)
