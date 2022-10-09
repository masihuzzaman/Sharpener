/* Write a program to sort the array in descending order using Selection sort algorithm. After Sorting return the array.

Note both the array and size is already given.

Input:-

[4,3,2,5,1]

Output:-

[5,4,3,2,1]

 */

/**
 * @param {number[]} arr
 * @param {number} length
 * @return {number[]}
 */
function sort_array(arr, length) {
    /*Function to sort the array in descending order
    After sorting return the sorted array */

    let i, j, small;

    for (i = 0; i < length - 1; i++)    // One by one move boundary of unsorted subarray  
    {
        small = i; //minimum element in unsorted array  

        for (j = i + 1; j < length; j++)
            if (arr[j] < arr[small])
                small = j;
        // Swap the minimum element with the first element  
        let temp = arr[small];
        arr[small] = arr[i];
        arr[i] = temp;
    }

    for (let i = length - 1; i >= 0; i--)
        console.log(arr[i]);

};
