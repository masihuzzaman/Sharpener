/* Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

The test cases are generated such that there are no cycles anywhere in the entire linked structure.

Note that the linked lists must retain their original structure after the function returns.

Custom Judge:

The inputs to the judge are given as follows (your program is not given these inputs):

intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
listA - The first linked list.
listB - The second linked list.
skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted.

Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'
Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
- Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) are different node references. In other words, they point to two different locations in memory, while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory.

Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Intersected at '2'
Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: No intersection
Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null. */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

/* To find the intersection node of two singly linked lists, you can use a two-pointer approach. Here's the general idea:

Create two pointers, one starting at the head of list A (pointerA) and one starting at the head of list B (pointerB).
Traverse both lists, moving pointerA and pointerB one step at a time.
If pointerA reaches the end of list A, redirect it to the head of list B. If pointerB reaches the end of list B, redirect it to the head of list A.
Continue traversing both lists in this way, until both pointers are pointing to the same node (the intersection node).

This function uses a while loop to traverse both lists simultaneously. Inside the loop, it uses a ternary operator to redirect each pointer to the head of the other list when it reaches the end of its current list. Once both pointers are pointing to the same node, the loop exits and that node is returned as the intersection node. If the pointers never meet, the function returns null. */

/* This approach has Time complexity of O(n+m) where n and m are the number of nodes in the linked lists, and Space complexity of O(1) as it only uses a constant amount of additional memory.

This approach works as we are traversing both lists at the same time, and when we reach the end of one list, we switch pointers and start traversing the other list so that both pointers are traversing the same distance in total. At some point if both pointers meet, it means there is an intersection else if both pointers reach at the end of both lists and no intersection is found, we return null. */

var getIntersectionNode = function(headA, headB) {
    let pointerA = headA;
    let pointerB = headB;
    while (pointerA !== pointerB) {
        pointerA = pointerA === null ? headB : pointerA.next;
        pointerB = pointerB === null ? headA : pointerB.next;
    }
    return pointerA;
};
