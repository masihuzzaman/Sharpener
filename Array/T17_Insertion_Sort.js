/* Write a program to sort the array in ascending order using Insertion sort algorithm. After Sorting return the array.

Note both the array and size is already given.

Input:-

[4,3,2,5,1]

Output:-

[1,2,3,4,5] */

/**
 * @param {number[]} arr
 * @param {number} length
 * @return {number[]}
 */
function sort_array(arr, length) {
    /*Function to sort the array in ascending order
    After sorting return the sorted array */

    let i, j, temp;

    for (i = 1; i < length; i++) {
        temp = arr[i];
        j = i - 1;

        while (j >= 0 && temp <= arr[j])  /* Move the elements greater than temp to one position ahead from their current position*/ {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = temp;
    }

    for (let i = 0; i < length; i++)
        console.log(arr[i]);
};