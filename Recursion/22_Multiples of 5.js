/* Task details:

Write a question to print all the multiples of 5 less than 30 in a recursive way.

output - 0 5 10 15 20 25  */

function printMultiples(n) {
    if (n >= 30) {
        return;
    }
    console.log(n);
    printMultiples(n + 5);
}

console.log("The multiples of 5 less than 30 are:");
printMultiples(0);

/* Explanation:

The function printMultiples takes a single parameter n.
If n is greater than or equal to 30, the function returns without doing anything.
If n is less than 30, the function logs n to the console and calls itself with n + 5.
The function printMultiples is initially called with 0.
The result is the multiples of 5 less than 30 in sequence. */


/* function printMultiplesOf5(n) {

    if (n >= 30) {
        return;
    }
    if (n % 5 === 0) {
        console.log(n);
    }
    printMultiplesOf5(n + 1);
}
printMultiplesOf5(0); */