//   This solution uses a for loop to iterate through the array, and updates the value of max to the current element if it's greater than the current maximum value. This continues until the end of the array, at which point max holds the maximum value in the array.

var secondmax = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  };

//   Here's a solution in JavaScript that returns the maximum element in an array:


  var secondmax = (arr) => {
    return Math.max(...arr);
  };

//   You can use the Math.max function and spread operator ... to get the maximum value in the array.
  
  
  
  

//   Here's an alternative solution in JavaScript that returns the maximum element in an array without using the spread operator:
  

  var secondmax = (arr) => {
    return arr.reduce((a, b) => Math.max(a, b));
  };

//   You can use the reduce method and Math.max function to get the maximum value in the array. The reduce method takes a function as an argument, which takes two arguments a and b, and returns the maximum value between a and b in each iteration. The reduce method starts by taking the first two elements of the array, performs the comparison and passes the maximum value to the next iteration until it reaches the end of the array.
  

 