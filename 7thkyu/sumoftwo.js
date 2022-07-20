Description:

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.


function sumTwoSmallestNumbers(numbers) {  
    nums = numbers.sort((a, b) => {return a-b});
     return nums[0] + nums[1]
  };

  // First we create a variable nums
  // We sort the array with .sort((a,b) =>)
  // In order to have it sort by number value and not alphabetically we give it two parameters
  // we then call a function return and ask it to sort from a - b (number value in ascending order) 
  // We finally return and call the sum of index 0 and 1 of variable nums 