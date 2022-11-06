/* You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0 */

/* var numJewelsInStones = function(jewels, stones) {
    let map = new Map();
    let count = 0;
    
    for(let i = 0; i < stones.length; i++){
        if(map.has(stones[i]))
            map.set(stones[i], map.get(stones[i]) + 1);
        else
            map.set(stones[i], 1);
    }
    for(let i = 0; i < jewels.length; i++)
        if(map.has(jewels[i]))
            count += map.get(jewels[i])
    return count;
}; */

/* HashMap is implemented by ES6 in JavaScript.
It has a key-value pair and in both, we can use non-primitive datatype to store the data.
The Map will return the key, value pairs in the same order we inserted.
Map also have properties and methods like the size of the map and more.
It uses sameValueZero algorithm. NaN which is considered the same as NaN(even though NaN !== NaN).
 */
var numJewelsInStones = function (jewels, stones) {
    const hashmap = new Map();
    let output = 0;

    for (let i = 0; i < jewels.length; i++) {
        const jewel = jewels[i];
        hashmap.set(jewel, i);
    }

    for (let i = 0; i < stones.length; i++) {
        const stone = stones[i];
        if (hashmap.has(stone)) output++;
    }

    console.log(output);
    return output;
};

numJewelsInStones("aA", "aAAbbbb");