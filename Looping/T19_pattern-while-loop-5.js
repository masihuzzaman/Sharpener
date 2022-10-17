/* Print the following pattern using while loop


*****
****
***
**
*
*
**
***
****
***** 

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

    let i = 1;
    while (i <= 5) {
        let string = "";
        let j = 1;
        while (j <= i) {
            string = string + "*";
            j++;
        } console.log(string);
        i++;
    }
}