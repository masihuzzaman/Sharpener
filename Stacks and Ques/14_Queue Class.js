class Queue {
    constructor() {
        this.rear = -1;
        this.front = -1;
        this.queue = [];
    }
    enqueue(element) {
        if (this.front = -1) {
            this.front += 1;
            this.rear += 1;
        } else {
            this.rear += 1;
        }
        this.queue[this.rear] = element;
    }

    dequeue() {
        if (this.front == this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front += 1;
        }
    }

    is_empty() {
        console.log(this.front == -1);
        
    }
    get_first_element() {
        console.log(this.queue[this.front]);
    }

}
let queue = new Queue;
queue.enqueue(5);
queue.enqueue(8);
console.log(queue);
queue.get_first_element();

queue.dequeue();
console.log(queue);
console.log(queue.is_empty());
