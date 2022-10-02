/*
Write a program to store first n prime numbers in an array . After storing return the array.﻿
Input:-
n=5
Output:- Return the output in the form of an array.
2
3
5
7
11
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
