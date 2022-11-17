/* Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr. */

function unique(arr) {
    //return Array.from(new Set(arr));
    let set1 = Array.from(new Set(arr));
    console.log(set1);
  }

  unique(["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"]);