/* By using while loop and continue statement

Print all number from 1 to n but then it should not be divisible by 5

Example:-
Input:-
n=7

output:-
1
2
3
4
6
7

 */

function print_output(n) {
    /*Print all numbers from 1 to n except the ones divisible by 5
    use the help of continue statement to leverage this */

    for (let i = 0; i <= n; i++) {
        if (i % 5 === 0) {
            continue;
        }
        console.log(i);
    }
}