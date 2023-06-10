/* Given a linked list, remove the 3rd last Element of a linked list.
Example
Input 1
1->3->2->5->1->9
Output
1->3->2->1->9
Example 2
Input 2
1->3->2->5->1->9->10->7
Output
1->3->2->1->10->7 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/* var remove3rdlastElem = function (head) {
  if (head === null || head.next === null || head.next.next === null) {
    // The linked list has less than 3 elements
    return head;
  }

  let prev = null;
  let slow = head;
  let fast = head;

  // Move the fast pointer to the third-last node
  for (let i = 0; i < 3; i++) {
    if (fast === null) {
      // The linked list has less than 3 elements
      return head;
    }
    fast = fast.next;
  }

  // Move both pointers until the fast pointer reaches the end
  while (fast !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next;
  }

  // Remove the third-last node
  prev.next = slow.next;

  return head;
}; */

function remove3rdlastElem(head) {
    if (head === null || head.next === null || head.next.next === null) {
      // The linked list has less than 3 elements
      return head;
    }
  
    let prev = null;
    let slow = head;
    let fast = head;
  
    // Move the fast pointer to the third-last node
    for (let i = 0; i < 3; i++) {
      if (fast === null) {
        // The linked list has less than 3 elements
        return head;
      }
      fast = fast.next;
    }
  
    // Move both pointers until the fast pointer reaches the end
    while (fast !== null) {
      prev = slow;
      slow = slow.next;
      fast = fast.next;
    }
  
    // Remove the third-last node
    prev.next = slow.next;
  
    return head;
  }
  
  // Helper function to print the linked list
  function printLinkedList(head) {
    let current = head;
    let result = "";
    while (current !== null) {
      result += current.val;
      if (current.next !== null) {
        result += "->";
      }
      current = current.next;
    }
    console.log(result);
  }
  
  // Create the linked list: 1->3->2->5->1->9
  let head = { val: 1, next: { val: 3, next: { val: 2, next: { val: 5, next: { val: 1, next: { val: 9, next: null } } } } } };
  
  // Remove the third-last element from the linked list
  head = remove3rdlastElem(head);
  
  // Print the modified linked list
  printLinkedList(head);
  
