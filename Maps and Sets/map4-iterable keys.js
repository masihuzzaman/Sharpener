/* We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.

But that doesn’t work:

let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
keys.push("more");
Why? How can we fix the code to make keys.push work? */

// That’s because map.keys() returns an iterable, but not an array.

// We can convert it into an array using Array.from:

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

console.log(keys); // name, more


/* one more shortcut

let keys = [...map.keys(), 'more'];

console.log(keys); // ["name", "more"]; */