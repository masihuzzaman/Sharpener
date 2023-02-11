/* Solve the following in Javascript only 

Given a string , reverse the string and return the reverse string.

Example 1:

Input:

ram

Output:

mar

Example 2:

Input:

mango

Output:

ognam

Write the code in Javascript and do not use special functions. */

/**
 * @param {string} s
 * @return {boolean}
 */
var reverseString = function(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
};
