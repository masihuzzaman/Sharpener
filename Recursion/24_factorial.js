/* Task details:

Write a program to write a function factorial which takes an input n and prints the factorial of the number in a recursive way

Example :- n=5;

Output = 1*2*3*4*5 = 120

Write Down the Entire Code for the above Question in your IDE and copy paste the code here. */

function factorial(n) {
    if (n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  let n = 5;
  console.log(`The factorial of ${n} is`, factorial(n));
  
  /* Explanation:

The function factorial takes an integer n as input.
If n is equal to 1, the function returns 1, which is the base case.
If n is not equal to 1, the function returns n multiplied by the factorial of n-1, which is calculated by calling the same function factorial with n-1 as input.
The function keeps calling itself with a decremented n until n becomes 1.
At each call, the result is accumulated in the form of a product and returned back to the previous call.
The final result is the factorial of n.
In the end, the result is logged to the console. */