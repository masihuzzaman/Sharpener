/* There is a singly-linked list head and we want to delete a node node in it.

You are given the node to be deleted node. You will not be given access to the first node of head.

All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.

Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:

The value of the given node should not exist in the linked list.
The number of nodes in the linked list should decrease by one.
All the values before node should be in the same order.
All the values after node should be in the same order. */

// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

// Input: head = [4,5,1,9], node = 1
// Output: [4,5,9]
// Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */


// To delete a given node in a singly-linked list when you do not have access to the head node, you can simply copy the value and next pointer of the next node to the current node, effectively replacing the current node's value and next pointer with that of the next node. Then, you can remove the next node by setting its next pointer to null. Here is an example implementation:

var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

// This approach has Time complexity of O(1) and Space complexity of O(1) as it only takes constant time and space to perform the operation.

// This approach works as we are just updating the current node with the next node and remove the next node. So all the values before node stays same and all the values after node stays same as well.