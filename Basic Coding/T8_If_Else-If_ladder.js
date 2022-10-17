/* Given a variable D (distance) write a program to print the cost associated with it as shown in the image:- 

Assign a value to double variable cost depending on the value of integer variable distance as follows:

Distance ---------Cost
0 thruogh 100 : 5.00
More than 100 but not more than 500 : 8.00
More than 500 but less than 1,000 : 10.00
1,000 or more : 12.00


Input:-
D = 700
Output:-
10

*/

function print_cost(distance) {
    /*write the code below to print the cost
     if the distance is given   */
    var distance;
    if (distance >= 0 && distance <= 100) {
        console.log(5);
    } else if (distance > 100 && distance <= 500) {
        console.log(8);
    } else if (distance > 500 && distance < 1000) {
        console.log(10);
    } else {
        console.log(12);
    }
}