/* You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input: list1 = [], list2 = []
Output: []

Input: list1 = [], list2 = [0]
Output: [0] */

// Here's an example implementation of the mergeTwoLists function that uses a dummy node as a starting point for the merged list:

// This function compares the values of the current nodes in each list and adds the node with the smaller value to the merged list. It then moves the current pointer for the merged list to the next node, and repeats the process until one of the lists is exhausted. Once one list is exhausted, the remaining nodes from the other list are added to the merged list. The function then returns the merged list, starting from the dummy node's next.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(list1, list2) {
    // Create a dummy node to serve as the starting point for the merged list
    let dummy = new ListNode();
    let current = dummy;

    // Compare the values of the current nodes in each list
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // If one list is exhausted, add the remaining nodes of the other list to the merged list
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    // Return the merged list, starting from the dummy node's next
    return dummy.next;
};

