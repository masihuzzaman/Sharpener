/* Task details:

Write a recursive program to find all the permutations of a string and store it in a list or arraylist or vectors.

Example:-

Permutation for abc

abc,acb, bac, bca, cab ,cba

Write Down the Entire Code for the above Question in your IDE and copy paste the code here.

 */

function permutation(str) {
    if (str.length === 0) {
      return [''];
    }
    let result = [];
    for (let i = 0; i < str.length; i++) {
      let rem = str.substring(0, i) + str.substring(i + 1);
      let permutations = permutation(rem);
      permutations.forEach(p => result.push(str[i] + p));
    }
    return result;
  }
  
  let str = 'abc';
  console.log(`The permutations of "${str}" are:`);
  let permutations = permutation(str);
  console.log(permutations);

  
//   Here's the conventional style code for the line permutations.forEach(p => result.push(str[i] + p));:

for (let j = 0; j < permutations.length; j++) { result.push(str[i] + permutations[j]); } 


/* Explanation:

The code iterates over the elements in the permutations array.
For each element permutations[j], it concatenates it with the current character str[i] and pushes the result to the result array.
 */