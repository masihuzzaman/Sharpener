/* Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Example 1
Input Link List = 1->2->3->4->5
Function should return 3rd node

Example 2
Input Link List = 1->2->3->4->5->6
Function should return the 4th node as it is the second middle node */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var findMiddleElement = function(head) {
    let slow = head;
    let fast = head;
  
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    return slow;
  };
  