/* You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

Example 1:

Input: s = "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
Example 2:

Input: s = "azxxzy"
Output: "ay" */

var removeDuplicates = function(S) {
    // empty array
    let stack = []
    
    // iterate over S
    for (let char of S) {
      
      // check if the last element of the stack is equal to the current element of S
      if(stack[stack.length - 1] === char){
      
        // true, remove the last element of the stack.
        stack.pop()
      } else {
      
        // false, add the current element of S to the end of the stack.
        stack.push(char)
      }
    }
    
    // return stack as a string
    return stack.join('');
  };


  console.log(removeDuplicates("abbkjaca"));