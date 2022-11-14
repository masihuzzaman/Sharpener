/* Write a program to create a class count_objects and calculate the number of objects that has been created in realtime. */

/* In JavaScript, functions are first-class objects, because they can have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called. In brief, they are Function objects */

/*      function Count_objects() {
        Count_objects.count++;
    }


Count_objects.count = 0;

let obj1 = new Count_objects;
let obj2 = new Count_objects;
let obj3 = new Count_objects;
let obj4 = new Count_objects;
console.log(Count_objects.count);
 */

class Count_objects {
    static count = 0;
    constructor() {
        Count_objects.count += 1;
    }
}

let object_1 = new Count_objects();
let object_2 = new Count_objects();
let object_3 = new Count_objects();

console.log(Count_objects.count);