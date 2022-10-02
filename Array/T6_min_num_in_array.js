/*
Complete the function to find the minimum in the array and return it
Input :- Array and the length of the array
[5,6,2,9,-2] , 5
Output:-
-2
Write a program to return the minimum element in the array.
*/
function find_minimum(arr,length){
        /*Function to find the minimum in the array--> arr 
          return the minimum value*/
let min = arr[0];
    for(let i=1; i<arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;  
}
