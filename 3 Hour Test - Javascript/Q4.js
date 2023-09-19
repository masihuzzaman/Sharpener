/* You are given an array and a target. you have to make the whole array prime by adding numbers from [1 to k]. If a number can't become prime set it to -1.

Test Case 1:
Input:
5
10 12 15 20 22
3
Output:
11 13 17 23 23
Explanation:
The first element, 10, is not prime so we add 3 to it to get 13 which is a prime number. The second element, 12 we add 1, so it is marked as 13. The third element, 15, is not a prime number so we add 2 to it to get 17 which is a prime number and so on.

Test Case 2:
Input:
4
8 11 13 24
4
Output:
11 13 17 -1
Explanation:
The first 3 elements can be made  prime by adding number from 1 to 4.
the number 24 cannot be made prime by adding numbers from 0 to 4 as all number from 24 to 28 are non prime.

Test Case 3:
Input:
5
10 12 15 20 22
1
Output:
11 13 -1 -1 23
15 and 20 cannot be made prime by adding 1 to it. */

'use strict';

process.stdin.setEncoding('utf-8');


//========== User's Code Starts Here ==========

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]} 
 */
var isPrime = function(nums, k) {
    const result = [];
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        while (!isNumberPrime(num)) {
            num++;
            if(num - nums[i] > k) {
                num = -1;
                break;
            }
        }
        result.push(num);
    }
    return result;
    
};