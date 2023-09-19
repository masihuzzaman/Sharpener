/* Given An array Integer and Target value. return the index of elements whose absolute difference is equal to target.
Absolute value of -9 is 9
Solve it in O(n) Time Complexity
Input:-
Arr - [9,5,1, 11,14]
Target - 2
Output:-
[0, 3]
Explanation:- 
Absoulte value of(9-11) is 2 = target.

Example 2:-
Input:-
Arr- [10,19,11,1,6]
Target - 13
Output:-
[1,4]
Explanation:- 
19-6 is 13 = Target

Constraints:
2 <= nums.length <= 10^4
-10^9 <= nums[i] <= 10^9
0 <=target <= 10^9
Only one valid answer exists. */

var target_hitting = function (nums, target) {
  const map = new Map();
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const diff = Math.abs(nums[i] - target);

    if (map.has(diff)) {
      result.push(map.get(diff));
      result.push(i);
      break;
    }

    map.set(nums[i], i);
  }

  return result;
};
