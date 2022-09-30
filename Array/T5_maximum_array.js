/**
*   Given an array find the maximum in it and return it 
*   Example:-
*   Input:-
*   Arr=[5, 4, 7, 2, 6]
*   Ouput:-
*   7
 **/

function find_maximum(arr,length){
    /*Function to find the maximum in the array--> arr 
    return the maximum value*/
    let i = 0;
    let big;
    while (i <= length) {
        if (arr[i] > arr[i++]) {
        big = arr[i]; 
        }
        else {
        big = arr[i++];   
        }
        i++; console.log(big);
    }
    //console.log(big);
}
find_maximum([3, 7, 3, 9], 4);

