Description:

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.


function positiveSum(arr) {
    return arr.filter((a)=>{ return a >= 0}).reduce((a,b) => a + b, 0 );
      }
        
 // .filter() method Filtered through the array using arrow function to target elements (a)
 // returning only those arrays that were greater than or equal to 0
 // We then call .reduce() method again using an arrow function with parameters (a) and (b)
 // returning a + b with initial value 0 to accomodate for an empty array.