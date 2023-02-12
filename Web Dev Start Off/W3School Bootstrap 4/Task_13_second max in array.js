/* o find the second maximum number in an array, you can use a similar approach as finding the maximum number, but with a few modifications. You need to keep track of both the maximum and second maximum values while iterating through the array.

Here's the solution in JavaScript that returns the second maximum element in an array without using any built-in JavaScript array functions: */

var secondmax = (arr) => {
    let max = arr[0];
    let secondMax = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
      } else if (arr[i] > secondMax && arr[i] < max) {
        secondMax = arr[i];
      }
    }
    return secondMax;
  };

//   This solution uses a for loop to iterate through the array, and updates the values of max and secondMax based on the comparison with the current element. If the current element is greater than max, it becomes the new max and the previous max becomes the new secondMax. If the current element is greater than secondMax but less than max, it becomes the new secondMax. This continues until the end of the array, at which point secondMax holds the second maximum value in the array.

