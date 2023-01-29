/* Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Input: head = [1,2]
Output: [2,1]

Input: head = []
Output: [] */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/* Explanation:

Initialize prev to null and current to head of the list.
While current is not null, we follow these steps:
Next node is stored in a variable called nextNode
We reverse the current node's next pointer to the previous node
Move prev and current pointers to next node
Return prev, which is now the head of the reversed list. */

var reverseList = function(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    return prev;
};

