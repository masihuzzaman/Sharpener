/* Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique. */

var sortArray = function(nums) {
    if (nums.length <= 1) {
      return nums;
    }
  
    let pivot = nums[0];
    let left = [];
    let right = [];
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < pivot) {
        left.push(nums[i]);
      } else {
        right.push(nums[i]);
      }
    }
  
    left = sortArray(left);
    right = sortArray(right);
  
    return left.concat(pivot).concat(right);
  };

  
  /* Explanation:

If the length of nums is less than or equal to 1, the function returns nums as it is.
Otherwise, the function takes the first element of nums as the pivot and separates the rest of the elements into two arrays, left and right.
The elements smaller than the pivot are stored in left and the elements larger than the pivot are stored in right.
Both left and right are then recursively sorted.
Finally, the function returns the concatenation of left, pivot, and right. */

