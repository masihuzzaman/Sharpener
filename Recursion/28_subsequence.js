/* Task details

Write a program to print all the subsequence of an array.

All subsequence of an array [1,2,3]

[1]
[1,2]
[1,2,3]
[1,3]
[2]
[2,3]
[3]

Write Down the Entire Code for the above Question in your IDE and copy paste the code here.

 */

function subseq(array, index, current) {
    if (index === array.length) {
      console.log(current);
      return;
    }
    subseq(array, index + 1, current);
    subseq(array, index + 1, current.concat([array[index]]));
  }
  
  let array = [1, 2, 3];
  console.log(`The subsequences of "${array}" are:`);
  subseq(array, 0, []);

  function subseq(array, index, current) {
    if (index === array.length) {
      console.log(current);
      return;
    }
    subseq(array, index + 1, current.concat([array[index]]));
    subseq(array, index + 1, current);
  }
  
  let array = [1, 2, 3];
  console.log(`The subsequences of "${array}" are:`);
  subseq(array, 0, []);
  

  /* Explanation:

  The function subseq takes three parameters: array, index, and current.
  If index is equal to the length of array, the function logs current to the console and returns.
  If index is not equal to the length of array, the function calls itself twice:
  The first call with index + 1 and current.
  The second call with index + 1 and current.concat([array[index]]).
  The second call generates a new subsequence that includes the current element array[index].
  The function subseq is initially called with array, 0, and [].
  The result is all the possible subsequences of array.
 */

/*   function subseq(array, index, current) {
    if (index === array.length) {
      console.log(current);
      return;
    }
    subseq(array, index + 1, current.concat([array[index]]));
    subseq(array, index + 1, current);
  }
  
  let array = [1, 2, 3];
  console.log(`The subsequences of "${array}" are:`);
  subseq(array, 0, []); */
  