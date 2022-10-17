/* vPrint the following pattern using while loops

*****
****
***
**
*

*/

function print_pattern() {
    /* Function to print the pattern */

    let k = 1;
    while (k <= 5) {
        let string = "";
        let m = 0;
        while (m <= 5 - k) {
            string = string + "*";
            m++;
        } console.log(string);

        k++;
    }
}