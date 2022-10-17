/* Given the Day number, print the Day name in lower case corresponding to it by using the help of switch statement.

Note: Day 1 - is monday.

If the day is not valid example 1> day >7 then print invalid

Input :-
Day - 3
Output :-
wednesday 
*/

function weekday_name(n) {
    /*write the code to print the weekday name in lower case when
     the weekday number is given using switch statements*/
    //var Day = "n"; 
    switch (n) {
        case 1:
            console.log("monday");
            break;
        case 2:
            console.log("tuesday");
            break;
        case 3:
            console.log("wednesday");
            break;
        case 4:
            console.log("thursday");
            break;
        case 5:
            console.log("friday");
            break;
        case 6:
            console.log("saturday");
            break;
        case 7:
            console.log("sunday");
            break;
        default:
            console.log("invalid");
    }
}

weekday_name(3);