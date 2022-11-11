/* You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

Return the array after sorting it.

Example 1:
Input: arr = [0,1,2,3,4,5,6,7,8]
Output: [0,1,2,4,8,3,5,6,7]
Explantion: [0] is the only integer with 0 bits.
[1,2,4,8] all have 1 bit.
[3,5,6] have 2 bits.
[7] has 3 bits.
The sorted array by bits is [0,1,2,4,8,3,5,6,7]

Example 2:
Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
Output: [1,2,4,8,16,32,64,128,256,512,1024]
Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order. */

/**
 * @param {number[]} arr
 * @return {number[]}
 */

/*  By default, the sort() function sorts values as strings.

 This works well for strings ("Apple" comes before "Banana").
 
 However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
 
 Because of this, the sort() method will produce incorrect result when sorting numbers.
 
 You can fix this by providing a compare function: 
 
 Example
 const points = [40, 100, 1, 5, 25, 10];
 points.sort(function(a, b){return a - b});

 Use the same trick to sort an array descending:

 Example
 const points = [40, 100, 1, 5, 25, 10];
 points.sort(function(a, b){return b - a});

 The Compare Function
The purpose of the compare function is to define an alternative sort order.

The compare function should return a negative, zero, or positive value, depending on the arguments:

function(a, b){return a - b}
When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative, a is sorted before b.

If the result is positive, b is sorted before a.

If the result is 0, no changes are done with the sort order of the two values.

Example:

The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.
*/


var sortByBits = function (arr) {
    let sortedArray = arr.sort((a, b) => bitCount(a) - bitCount(b) || a - b);
    console.log(sortedArray);
};
const bitCount = num => {
    let sum = 0;
    while (num) {
        sum += num & 1;
        num = num >> 1;
    }
    //console.log(sum);
    return sum;
};

let arr = [0,1,2,3,4,5,6,7,8]
sortByBits(arr)
//bitCount(5)
 