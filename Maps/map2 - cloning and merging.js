//Just like Arryay, Map can be cloned
const original = new Map([
    [1, 'one'],
]);

const clone = new Map(original);

console.log(clone.get(1));
console.log(original === clone); //keep in mind that the data itself is not cloned


//Maps can be merged, maintaining key uniqueness
const first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);

const second = new Map([
    [1, 'uno'],
    [2, 'dos'],
]);

//Merge two maps, the last repeated key wins.
//Spread syntax essentially converts a Map to an Array
const merged = new Map([...first, ...second]);

console.log(merged.get(1));
console.log(merged.get(2));
console.log(merged.get(3));