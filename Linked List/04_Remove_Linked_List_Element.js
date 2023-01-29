/* Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head. */

/* Example 1:
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Example 2:
Input: head = [], val = 1
Output: []

Example 3:
Input: head = [7,7,7,7], val = 7
Output: [] */




/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// One way to remove all nodes with a certain value from a linked list is to iterate through the list, keeping track of the previous node and the current node. If the current node's value equals the target value, we remove the current node by updating the previous node's next pointer to skip the current node and pointing it to the next node.

// This approach has a Time complexity of O(n) where n is the number of nodes in the linked list and a Space complexity of O(1) as it only uses a constant amount of additional memory.

var removeElements = function(head, val) {
    // Create dummy node to serve as a placeholder for the head
    var dummy = new ListNode();
    dummy.next = head;
    var prev = dummy;
    var curr = head;
    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next;
        } else {
            prev = curr;
        }
        curr = curr.next;
    }
    return dummy.next;
}