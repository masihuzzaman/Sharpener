/* Find the sum of odd elements in a linked list
Example
Input
1->2->4->3->9->10->5
Output
18
Reason
1+3+9+5 = 18
Example 2
2->4->6
Ouput
0
Reason
No odd values present */

var findSumOfOddElements = function(head) {
    
	// return the sum of odd values of the linkedlist
    let current = head;
    let sum = 0;

    while (current !== null) {
    if (current.val % 2 !== 0) {
      sum += current.val;
    }
    current = current.next;
  }

    return sum;
};