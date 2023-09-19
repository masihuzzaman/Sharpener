/* You have given a array of heights of hills , the Super hill is the hill which is taller than its neighbors hills .

You have to find the Super hill and return its index if more then one Super hills are there return any one of index .

Example 1:
Input: hills = [1,2,3,1]
Output: 2
Explanation: 3 is a Super hill and your function should return the index number 2.

Example 2:
Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the Super hill is 2, or index number 5 where the Super hill is 6.

Constraints:
1 <= nums.length <= 1000
-2^31 <= nums[i] <= 2^31 - 1
nums[i] != nums[i + 1] for all valid i. */

'use strict';

process.stdin.setEncoding('utf-8');


//========== User's Code Starts Here ==========

/**
 * @param {number[]} arr
 * @return {number}
 */
var super_hill = function(arr) {
    for (var i = 1; i< arr.length -1; i++) {
        if (arr[i]> arr[i-1] && arr[i]> arr[i+1]) {
            return i;
        }
    }
    return -1
};