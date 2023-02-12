/* In an array of elements find the number with the minimum value

Example 1
Input
1,2,4,1,5,6
Output
1

Example 2
Input
1,-2,-3,6,3,7
Output
-3 */

var findminimumnumber = (arr) => {
let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
