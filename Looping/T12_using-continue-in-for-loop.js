/* Write a program to print even numbers from 1 to n except numbers which are divisible by 4. 

Use Continue statement to avoid printing.

Input
10

Output
2
6
10 */

function print_output(n) {
    /*Print all even numbers from 1 to n except the ones divisible by 4
    use the help of continue statement to leverage this */

    for (let i = 0; i <= n; i += 2) {
        if (i % 4 == 0) {
            continue;
        }
        console.log(i);
    }
}