/* Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.

Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.

Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.

Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list. */

// This implementation uses the "slow and fast pointers" technique to detect a cycle in a linked list. The idea is to have two pointers, one moving at a slower pace (the "slow pointer") and one moving at a faster pace (the "fast pointer"). If there is a cycle in the list, the fast pointer will eventually "lap" the slow pointer and the two pointers will meet. If there is no cycle, the fast pointer will reach the end of the list before the slow pointer. In this implementation, we first check if there is a cycle by iterating through the list with the slow and fast pointers and checking if they meet. If there is a cycle, we reset the slow pointer to the head of the list and iterate through the list again until the slow and fast pointers meet. The node where they meet is the start of the cycle. If there is no cycle, we return null.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // Initialize slow and fast pointers
    let slow = head;
    let fast = head;

    // Iterate through the linked list using the slow and fast pointers
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        // If the slow and fast pointers meet, there is a cycle
        if (slow === fast) {
            // Reset the slow pointer to the head of the list
            slow = head;
            // Iterate through the list again, returning the node where the slow and fast pointers meet
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }

    // If the fast pointer reaches the end of the list, there is no cycle
    return null;
};
