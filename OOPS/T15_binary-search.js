/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let low = 0, high = nums.length - 1; //asign index to variables
    while (low < high) {
        let mid = low + Math.floor((high - low + 1) / 2); // ??
        if (target < nums[mid]) {
            high = mid - 1
        } else {
            low = mid;
        }
    }
   /*  target is compared with the nums[low] if the its ture then the index stored in variable 'low' is returned else it returns -1 */
    return nums[low] == target ? low : -1;
};
//search([-1, 0, 3, 5, 9, 12], 9)