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


let n = 2;
let counter = 0;
let arr = new Array(20);
while (counter < 20) {
  let flag = true;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      //console.log("not a prime");
      flag = false;
      break;
    }
  }
  if (flag) {
    arr[counter] = n;
    counter = counter + 1;
    //console.log("a prime number");
  } n = n + 1;
}
for (i = 0; i < 20; i++) {
  console.log(arr[i]);
}

