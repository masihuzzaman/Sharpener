/* Print the following series using for loop:-

1,8,27,64,125,216,......n

Input
125

Output :-
1
8
27
64
125 */

function print_series(n) {
    /* Print the following series 
           1 8 27 64 125 to n (including) . Note print all the numbers in a seperate line*/

    for (let i = 1; i * i * i <= n; i++) {
        console.log(Math.pow(i, 3));
    }
}
