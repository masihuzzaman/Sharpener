/* Given the head of a linked list, remove the nth node from the end of the list and return its head.

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Input: head = [1], n = 1
Output: []

Input: head = [1,2], n = 1
Output: [1] */

// One approach to solve this problem is to first determine the length of the linked list using a pointer that iterates through the list. Then, using a second pointer, iterate through the list again until the second pointer reaches the (length - n)th node. Then, remove the nth node from the end by updating the next pointer of the (length - n - 1)th node to point to the (length - n + 1)th node.

// This solution has a time complexity of O(n), where n is the number of nodes in the linked list, since we need to iterate through the list twice to determine the length and to remove the nth node from the end.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // create two pointers, p1 and p2
    let p1 = head;
    let p2 = head;
    // iterate p2 n nodes ahead of p1
    for (let i = 0; i < n; i++) {
        p2 = p2.next;
    }
    // if p2 is null, remove the first node
    if (!p2) {
        return head.next;
    }
    // iterate both pointers until p2 reaches the end of the list
    while (p2.next) {
        p1 = p1.next;
        p2 = p2.next;
    }
    // remove the nth node from the end by updating the next pointer of the (length - n - 1)th node
    p1.next = p1.next.next;
    return head;
}
