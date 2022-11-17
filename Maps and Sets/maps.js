/* //Objects are used for storing keyed collections.
//Arrays are used for storing ordered collections.
//Map is a collection of keyed data items, just like an Object.
//But the main difference is that Map allows keys of any type.
//maps are not objects
let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log(map.get(1)); // 'num1'
console.log(map.get('1')); // 'str1'
console.log(map.get(true)); // 'bool1'
console.log(map.size); // 3
 */
//-----------------------------------------------------------------

/* let map = new Map();
map.set('1', 'str1');
map.set("1", "str2");
map.set(1, 'num1');
map.set(true, 'bool1');

console.log(map.get(1));
console.log(map.get('1'));
console.log(map.get(true)); */

/* map[2] = 'num2';
console.log(map.get(2)); */

// create an object and store it as a key in a map
let john = {
    name: "John",
    age: 33
};

let map = new Map();
map.set(john, "Abraham");
console.log(map.get(john));



















































