/* Anagrams are words that have the same number of same letters, but in different order.

For instance:

nap - pan
ear - are - era
cheaters - hectares - teachers
Write a function aclean(arr) that returns an array cleaned from anagrams.

For instance:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
From every anagram group should remain only one word, no matter which one. */

/* To find all anagrams, let’s split every word to letters and sort them. When letter-sorted, all anagrams are same.

For instance:

nap, pan -> anp
ear, era, are -> aer
cheaters, hectares, teachers -> aceehrst
... */

// We’ll use the letter-sorted variants as map keys to store only one value per each key:

function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      // split the word by letters, sort them and join back
      let sorted = word.toLowerCase().split('').sort().join(''); // (*)
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
  }
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  console.log( aclean(arr) );

/*   Letter-sorting is done by the chain of calls in the line (*).

For convenience let’s split it into multiple lines:

let sorted = word // PAN
  .toLowerCase() // pan
  .split('') // ['p','a','n']
  .sort() // ['a','n','p']
  .join(''); // anp
Two different words 'PAN' and 'nap' receive the same letter-sorted form 'anp'.

The next line put the word into the map:

map.set(sorted, word);
If we ever meet a word the same letter-sorted form again, then it would overwrite the previous value with the same key in the map. So we’ll always have at maximum one word per letter-form.

At the end Array.from(map.values()) takes an iterable over map values (we don’t need keys in the result) and returns an array of them.

Here we could also use a plain object instead of the Map, because keys are strings.

That’s how the solution can look:

function aclean(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }

  return Object.values(obj);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); */