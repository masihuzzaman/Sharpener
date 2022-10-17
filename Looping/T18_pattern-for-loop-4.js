/* Print the following pattern using for loop

*    *
**   **
***  ***
**** ****
**********

 */

function print_pattern() {
    /* Function to print the pattern */

    for (var i = 1; i <= 5; i++) {
        var str = ""
        for (var j = 1; j <= i; j++) {
            str = str + "*"
        }
        for (var j = 1; j <= 5 - i; j++) {
            str = str + " "
        }
        for (var j = 1; j <= i; j++) {
            str = str + "*"
        }
        console.log(str)
    }
}