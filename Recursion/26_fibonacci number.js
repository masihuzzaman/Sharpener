/* The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).


Example 1:
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

Example 2:
Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

Example 3:
Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3. */

var fib = function(n) {
    if (n <= 1) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
  };
  
  // for(let i = 0; i < 5; i++) {
  //         console.log(fib(i));
  //     }

  /* Explanation:

The function fib takes an integer n as input.
If n is less than or equal to 1, the function returns n, which is the base case.
If n is greater than 1, the function returns the sum of the n-1th and n-2th Fibonacci numbers, which are calculated by calling the same function fib with n-1 and n-2 as input, respectively.
The function keeps calling itself with decremented n until n becomes less than or equal to 1.
At each call, the result is accumulated in the form of a sum and returned back to the previous call.
The final result is the nth Fibonacci number.
In the end, the result is logged to the console. */