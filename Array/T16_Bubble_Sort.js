/* Write a program to sort the array in descending order using Bubble sort algorithm. After Sorting return the array.

Note both the array and size is already given.

Input:-

[4,3,2,5,1]

Output:-

[5,4,3,2,1] */

/**
 * @param {number[]} arr
 * @param {number} length
 * @return {number[]}
 */
function sort_array(arr, length) {
    /*Function to sort the array in descending order
    After sorting return the sorted array */


    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    for (let i = 0; i < length; i++)
        console.log(arr[i])
}