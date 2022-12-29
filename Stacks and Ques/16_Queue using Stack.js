/* use two stacks: stack and reversed
push:
    push into stack
pop:
    if reversed is empty
        fill reversed with stack
    return reversed.pop
peek:
    return last item in reversed or first item in stack */

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
	this.stack1 = []
	this.stack2 = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
	this.stack1.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
	while(this.stack1.length !== 0){
		this.stack2.push(this.stack1.pop())
	}

	let pop = this.stack2.pop()

	while(this.stack2.length !== 0){
		this.stack1.push(this.stack2.pop())
	}

	return pop
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack2[this.stack2.length - 1] ?? this.stack1[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
	return this.stack1.length === 0 ? true:false
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */