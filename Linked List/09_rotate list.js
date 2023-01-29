/* Given the head of a linked list, rotate the list to the right by k places.

Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Input: head = [0,1,2], k = 4
Output: [2,0,1] */

/* Here is one way to solve this problem:

1. Find the length of the linked list and store it in a variable n.
2. Traverse the list to find the tail node, and connect it to the head. This forms a circular linked list.
3. Traverse the list again to find the (n-k)th node. This will be the new tail node of the rotated list.
4. Break the link between the new tail node and the next node, and set the next node as the new head of the rotated list.
5. Return the new head. */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var rotateRight = function(head, k) {
    if (!head) return null;
    let n = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        n++;
    }
    k = k % n;
    if (k === 0) return head;
    tail.next = head;
    let newTail = head;
    for (let i = 1; i < n - k; i++) {
        newTail = newTail.next;
    }
    let newHead = newTail.next;
    newTail.next = null;
    return newHead;
}


// This solution has a time complexity of O(n) and a space complexity of O(1)