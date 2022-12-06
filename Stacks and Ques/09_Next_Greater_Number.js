/* The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

Example 1:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

Example 2:
Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1. */

var nextGreaterElement = function(nums1, nums2) {
	const map = {};
	const stack = [];
    
    console.log('nums1:', nums1);
    console.log('nums2:', nums2);
	
	// for every n in nums2, fill the stack starting at n, and ending with (but not pushing) the first number in nums2 (after n) that is >= n (or > since all numbers are unique)
	// once a number is found that passes this conditition, add it to a hashmap as a value, with its key being the top of the stack (aka a value found earlier in nums2)
	// this map has "next largest element below it in nums2" as keys, and the "next greater elements" as the values
	nums2.forEach(n => {
        console.log('n:', n);
        
		while (stack.length > 0 && stack[stack.length - 1] < n) {
			map[stack.pop()] = n;
            console.log('map:', map);
		}
		stack.push(n);
        
        console.log('stack:', stack);
	});
	
	return nums1.map(n => map[n] ?? -1);
};

nextGreaterElement([4,1,2], [1,3,4,2]);