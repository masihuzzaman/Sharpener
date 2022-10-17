/* Write a program to print all odd numbers from 1 to n using for loops

Example:

Input :
n=7

Output :
1
3
5
7 */

function print_series(n) {
    /* Print all odd numbers from 1 to n (including)
            . Note print all the numbers in a seperate line*/
    for (let i = 1; i <= n; i += 2) {
        console.log(i);
    }
}