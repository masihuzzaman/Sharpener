/* Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4] */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {

    for (let i = 0; i < k; i++) {
        for (let j = nums.length - 1; j > 0; j--) {

            // moving each number by 1 place
            let temp = nums[j];
            nums[j] = nums[j - 1];
            nums[j - 1] = temp;
        }
    }
    return nums;
};