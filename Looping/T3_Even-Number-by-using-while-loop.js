/* Write a program using only while loops to print all the even numbers from 1 to n

Input
if n = 10

Output
2
4
6
8
10 
*/

function print_even(n) {
    /*write the code to Print all even numbers from 1 to n*/
    let i = 2;
    while (i <= n) {
        console.log(i);
        i += 2;
    }
}