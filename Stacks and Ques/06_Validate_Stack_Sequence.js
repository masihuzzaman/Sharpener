/* Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.

 

Example 1:

Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4),
pop() -> 4,
push(5),
pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
Example 2:

Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
Output: false
Explanation: 1 cannot be popped before 2.
 */
function validateStackSequence(pushed, popped)
{
	let countOfPopped = 0;
	let stack=[];
	for(let i = 0; i < pushed.length; i++){
		stack.push(pushed[i]);
		
		// check if appended value is next
		// to be popped out
		while (!stack.length==0 && countOfPopped < pushed.length &&
		stack[stack.length-1] == popped[countOfPopped])
		{
			stack.pop();
			countOfPopped++;
		}
	}
	
	return countOfPopped == pushed.length;
}

var pushed = [1, 2, 3, 4, 5];
var popped = [4, 3, 5, 1, 2];
// var popped = [4, 5, 3, 2, 1];
	
console.log( (validateStackSequence(pushed, popped)
? "True" : "False"));



 

