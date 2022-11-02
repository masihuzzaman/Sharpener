//We can loop over a set either with for..of or using forEach:
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) console.log(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  console.log(value);
});


/* Note the funny thing. The callback function passed in forEach has 3 arguments: a value, then the same value valueAgain, and then the target object. Indeed, the same value appears in the arguments twice.

That’s for compatibility with Map where the callback passed forEach has three arguments. Looks a bit strange, for sure. But this may help to replace Map with Set in certain cases with ease, and vice versa.

The same methods Map has for iterators are also supported:

set.keys() – returns an iterable object for values,
set.values() – same as set.keys(), for compatibility with Map,
set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map. */