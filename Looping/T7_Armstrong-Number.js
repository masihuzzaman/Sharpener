/* Write a program to print whether a given number is an Armstrong number or not..

(Armstrong number is a number in which all the sum of cubes of digits is equal to the number

Example:-
Input
n=153
Output
true

Logic - 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 1 +125 + 27 = 153 which is equal to the original number )

Input
123

Output
false

Logic - 123 is not an Armstrong number because 1^3 + 2^3 + 3^3 = 1 + 8 + 27 = 36 which is not equal to the original number )

 */

function check_armstrong(n) {
    /*Function to check whether a number is an armstrong number or not
       Print true if yes else false */
    let num = n;
    let rem;
    let sum = 0;
    while (n > 0) {
        rem = n % 10;
        sum += Math.pow(rem, 3);
        n = Math.floor(n / 10);
    }
    if (sum == num) {
        console.log("true");
    } else {
        console.log("false");
    }
}