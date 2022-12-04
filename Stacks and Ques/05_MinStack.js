/* Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2 */

/* Solution:
Consider using an extra stack to keep track of the current minimum value. During the
push operation we choose the new element or the current minimum, whichever that is
smaller to push onto the min stack.
For the pop operation, we would pop from both stacks. getMin() is then reflected by the
top element of min stack.
To illustrate this idea, we push the elements 1, 4, 3, 0, 3 in that order.

Main stack      Min stack
    3               0
    0               0
    3               1
    4               1
    1               1 

After popping two elements from the stack it becomes:

Main stack      Min stack
    3               1
    4               1
    1               1 

If a new element is larger than the current minimum, we do not need to push it on to the
min stack. When we perform the pop operation, check if the popped element is the same
as the current minimum. If it is, pop it off the min stack too. */

var MinStack = function() {
    this.dataStore = [];
    this.min = [];
};

/** 
 * @param {string} val
 * @return {string}
 */
MinStack.prototype.push = function(val) {
    this.dataStore.push(val);
    if (this.min.length == 0 || val <= this.min[this.min.length-1]) {
        this.min.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.top() == this.min[this.min.length-1] ) {
        this.min.pop();
    }
    this.dataStore.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.dataStore[this.dataStore.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
 