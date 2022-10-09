/* Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

A subarray is a contiguous subsequence of the array.

Example 1:

Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {

    //let arr = [1, 2, 3, 4]

    var sum = 0;    // Stores the sum
    var l = arr.length;  // Size of array
    for (var i = 0; i < l; i++)  // Traverse the array
    {
        for (var j = i; j < l; j += 2)  // Generate all subarray of odd length
        {
            for (var k = i; k <= j; k++) {
                sum += arr[k]; // Add the element to sum
            }
        }
    }
    return sum;  // Return the final sum
};
