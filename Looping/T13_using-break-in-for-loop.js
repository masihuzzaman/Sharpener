/* Write a program to print all the numbers from 1 to n .If m is present in between the sequence then stop printing any other number and break out of the loop.

Input :-
n = 10 m = 4

Output :-
1
2
3 */

function print_series(n, m) {
    /* Print the following series from 1 to n if m is present stop printing the series 
           Note print all the numbers in a seperate line */

    for (let i = 1; i <= n; i++) {
        if (i == m) {
            break;
        }
        console.log(i);
    }
}