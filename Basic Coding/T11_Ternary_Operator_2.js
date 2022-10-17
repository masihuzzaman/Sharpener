/* Write a program to print the maximum of two numbers using Ternary operator.

Input:-
a=3, b=5
Output:-
5 
*/

function max(a, b) {
    /*write the code to find the maximum between two numbers below 
     only print the maximum number  */
    var a, b, big_number;
    big_number = (a > b) ? a : b;
    console.log(big_number);
}