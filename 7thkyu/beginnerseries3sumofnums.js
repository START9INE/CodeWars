Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
Examples (a, b) --> output (explanation)

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

Fundamentals
Algorithms

function getSum( a,b ){
    let min = Math.min(a,b);
    let max = Math.max(a,b);
   return (max - min + 1) * (min + max) / 2;
      
  }

  // This solution uses Gauss Summation
  // First we create variables min and max.
  // using Math.min and Math.max we find the lowest and highest number respetively.
 
 
  // We then use the Gauss formula to find the sum of a sequence of numbers including a and b.
  // Where n represents the amount of integers in a sequence
  // The number of pairs would be this number divided by 2
  // (number of pairs) x (sum of each pair) = n/2 x (n +1) 


  // Alternatively there is no need to find the min and max of the sequence
  // Please see below

  function getsum(a,b){
    return (Math.abs(a - b) + 1) * (a + b) / 2
  }

  // This solution uses Math.abs()
  //The Math.abs() function returns the absolute value of a number. 
  //That is, it returns x if x is positive or zero, and the negation of x if x is negative. 
  // For more information on Math.abs() please see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs