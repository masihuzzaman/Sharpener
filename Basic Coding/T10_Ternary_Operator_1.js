/* Write a program to assume a value of marks and print whether a person has failed or passed using ternary Operator.

If Marks> =40 --> pass

ELSE ---> fail

Input:-
Marks =52
Ouput:-
pass

 */


function has_passed(marks) {
    /*write the code to find the whether a candidate has passed or failed 
    only print "pass" or "fail" */
    /*let marks;
    if (marks >= 40) {
        console.log(pass);
    } else {
        console.log(fail);
    }*/
    var marks, result;
    result = (marks >= 40) ? "pass" : "fail";
    console.log(result);
}
