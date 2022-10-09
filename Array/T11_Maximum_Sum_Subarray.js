/*
Given an array find the maximum sum subarray. Return the maximum sum of the subarray.

Input:-

[5,2,-4,-5, 3,-1,2,3,1]

Output:-

8

Reason :- 3,-1,2,3,1 is the maximum subarray possible.

*/
function find_maximum_subarray(arr, length) {
    /*write the code to find the maximum subarray sum
    only return the maximum sum of the subarray . 
    Both array and size of array is given */

    let maxSum = Math.min(...arr);    //function to find min of an array.
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sum = 0;
            for (let k = i; k < j + 1; k++) {
                sum = sum + arr[k];
            }
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
}