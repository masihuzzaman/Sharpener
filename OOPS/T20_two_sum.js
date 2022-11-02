/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    var set = new Set(nums);
    for(var i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        if(set.has(complement)) {
            var map = new Map();
            map.set([i, nums[i]]);
            console.log(map);
        }
    }
};



//twoSum([3, 2, 4], 6);
twoSum([2, 7, 11, 15], 9)