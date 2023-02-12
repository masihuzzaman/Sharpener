/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'. */


/* 
Here is one approach to solve this problem:

Create a stack to keep track of the brackets.
Iterate through the string and for each open bracket, push it onto the stack.
For each closing bracket, pop the top element from the stack and check if it is a matching open bracket.
If the stack is empty at the end, the input string is valid, otherwise, it is invalid. */

const isValid = s => {
    const stack = [];
    const mapping = { ')': '(', '}': '{', ']': '[' };
  
    for (const char of s) {
      if (char in mapping) {
        if (stack[stack.length - 1] === mapping[char]) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        stack.push(char);
      }
    }
  
    return stack.length === 0;
  };
  