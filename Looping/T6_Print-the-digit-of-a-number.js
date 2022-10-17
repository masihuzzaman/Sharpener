/* Write a program to print the digits of a number .

Input:-
N - 153 .

output:-
3
5
1 

*/

function print_digits(n) {
    /*Function to print the digits of the number n 
        Note Print all the digits in a new line*/
    while (n > 0) {
        console.log(n % 10);
        n = Math.floor(n / 10);
    }
}