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

function prime_numbers(n) {
  let m = 2;
  let i;
  let counter = 0;
  let arr = new Array(n);
  while (counter < n) {
    let flag = true;
    for (i = 2; i < m; i++) {
      if (m % i == 0) {
        //console.log("not a prime");
        flag = false;
        break;
      }
    }
    if (flag) {
      arr[counter] = m;
      counter = counter + 1;
      //console.log("a prime number");
    } m = m + 1;
  }
  for (i = 0; i < n; i++) {
    console.log(arr[i]);
  }

}
prime_numbers(20);