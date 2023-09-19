/* Write a program to add two Matrices ( 2d Array). Return the resultant Array.

Note:- Both the 2d Array will be of the same size.

Input 1:
MT1 =
[[1,2,5],
[3,5,5]]

MT2 =
[[1,5,7],
[2,1,3]]

Output:
[[2,7,12],
[5,6,8]]

Input 2:
MT1 =
[[1,1,1],
[2,2,2]]

MT2 =
[[3,3,3],
[4,4,4]]

Output: 
[[4,4,4],
[6,6,6]]

Input 3:
MT1 =
[[1,1,1],
[2,2,2]
[3,3,3]]

MT2 =
[[3,3,3],
[4,4,4]
[5,5,5]]

Output: 
[[4,4,4],
[6,6,6]
[8,8,8]] */

'use strict';

process.stdin.setEncoding('utf-8');

/**
 * @param {number[][]} arr1,arr2
 * @return {number[][]}
 */


//========== User's Code Starts Here ==========

var counter = function(arr1,arr2) {
    const rows = arr1.length;
    const cols = arr1[0].length;
    
    const result = [];
    
    for (let i= 0; i<rows; i++) {
        result[i] = [];
        for (let j=0; j<cols; j++) {
            result[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return result;
};
