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
    let max = arr[0];
    for(let i=1; i<arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    //console.log(max);
    return max;
}
find_maximum([3, 7, 3, 9], 4);

