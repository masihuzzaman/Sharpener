/* Write a program to print the largest of the three numbers.

Input:-
a=3, b=5, c=1
Output:-
5 */

function max(a, b, c){
    /*write the code to find the maximum between the three numbers below 
     only print the maximum number  */
   var a, b, c;
   if (a > b) {
        if (a > c) 
           console.log(a);
        else 
            console.log(c);
   } else {
       if (b > c)
           console.log(b);
      else
           console.log(c);
   }
    
}
max(56,23,83);