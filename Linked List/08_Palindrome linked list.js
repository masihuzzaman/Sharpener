/* Given the head of a singly linked list, return true if it is a  palindrome or false otherwise.

Input: head = [1,2,2,1]
Output: true

Input: head = [1,2]
Output: false */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// One way to check if a singly linked list is a palindrome is to first find the middle of the list, and then reverse the second half of the list. Then, starting from the head of the original list and the head of the reversed second half, compare the values of each node. If they are all equal, then the list is a palindrome. If any values are not equal, then the list is not a palindrome.

// This solution has a time complexity of O(n) and a space complexity of O(1) as we are not using any extra space.

var isPalindrome = function(head) {
    // Find middle of list
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // Reverse second half of list
    let prev = null;
    let current = slow;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    // Compare values of head and reversed second half
    let reversedSecondHalf = prev;
    while (reversedSecondHalf) {
        if (head.val !== reversedSecondHalf.val) {
            return false;
        }
        head = head.next;
        reversedSecondHalf = reversedSecondHalf.next;
    }
    return true;
};

