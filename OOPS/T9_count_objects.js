/* Write a program to create a class count_objects and calculate the number of objects that has been created in realtime. */

class Count_objects {
    static count = 0;
    countObj() {
        Count_objects.count++;
    }
}
//Object.count = 0;

let obj1 = new Count_objects;
let obj2 = new Count_objects;
let obj3 = new Count_objects;
console.log(Count_objects.count);
