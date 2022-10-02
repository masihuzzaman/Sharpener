/*
Complete the function to find the minimum in the array and return it
Input :- Array and the length of the array
[5,6,2,9,-2] , 5
Output:-
-2
Write a program to return the minimum element in the array.
*/
let n = 20;
// 2, 3, 5
let num;
let arr = new Array();
let index = 1;
arr[0] = 2;
for (num = 3; num < n; num++) { 
  for (let divisor = 2; divisor < num; divisor++) {
    if (num % divisor == 0) {
      break;
    } else {
     arr[index] = num; console.log(arr[index]);
    }
  } index++;
} //console.log(arr);
