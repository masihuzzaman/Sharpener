// program to count the number of keys/properties in an object

const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

let count = 0;

// loop through each key/value
for(let key in student) {

    // increase the count
    ++count;
}

/* console.log(count);

The above program counts the number of keys/properties in an object using the for...in loop.

The count variable is initially 0. Then, the for...in loop increases the count by 1 for every key/value in an object.

Note: While using the for...in loop, it will also count inherited properties. */

