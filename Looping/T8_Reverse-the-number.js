/* Write a program to return the reverse of a number

Input
n=123

output
321 */

/**
 * @return {number}
 * @param {int} n
 */
function reverse(n) {
    /* Function to return the reverse of a number n */
    let m = n;
    let rem1, n1, pow;
    let counter = 0;
    while (m > 0) {
        rem1 = m % 10;
        m = Math.floor(m / 10);
        pow = (counter++);
    }

    let rem;
    let num = 0;
    while (n > 0) {
        rem = n % 10;
        n = Math.floor(n / 10);
        num += rem * Math.pow(10, pow);
        pow--;
    }
    return num;
}