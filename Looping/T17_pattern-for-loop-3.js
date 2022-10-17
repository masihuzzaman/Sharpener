/* Print the following pattern using for loop

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

    for (let i = 1; i <= 5; i++) {
        let str = "";
        for (let j = 0; j <= 5 - i; j++) {
            str = str + "*";
        }
        console.log(str);
    }

    for (let i = 1; i <= 5; i++) {
        let str = "";
        for (let j = 1; j <= i; j++) {
            str = str + "*";
        }
        console.log(str);
    }
}
