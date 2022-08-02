Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


function findOdd(A) {
    // The first thing done is loop through the array
    for (i = 0; i < A.length; i++){ 
      // We then intialize a count Variable and assign it a new array using the .filter() method 
      // that contains all the values that match the current iterated value
      // We also use the .length() method to help us obtain the number of duplicates for that particular number in A.
      const count = A.filter(value => value === A[i]).length;  
      // We then use a conditional to check if count is an odd number. 
      if (count % 2 == 1){
       // If the count is odd we stop the loop by returning the element(number) that has an odd number of duplicates. 
        return A[i];
      }
    }
  
   
  }


  // For more info see : https://levelup.gitconnected.com/javascript-algorithm-find-the-odd-int-4410a7e7f0a3

  // Best practice on Codewars below 

  const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

  // This solution uses the .reduce() method and 'Bitwise XOR (^)' to solve the solution.
  // The bitwise XOR operator (^) returns a 1 in each bit position for which the corresponding
  // bits of either but not both perands are 1s.

  // XOR (exclusive OR) is a boolean operator, like && and ||, but with the following logic: It is successful if the expression on either side is true (like ||), but not if both sides are true (like !( x && y )).

  // For more info see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  // For more info see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwis
  


// An Explanation from user for how XOR works

/*  Even number copies of numbers cancel eachother out within XOR. The odd entry will return.

XOR of a,b

a b =

1 1 0

1 0 1

0 1 1

0 0 0

Example time: let arr = [1101,1001,1101,1101,1001]

 arr.reduce((a,b)=>a^b)
 

Reduce Acc B Result

1 1101 1001 0100

2 0100 1101 1001

3 1001 1101 0100

4 0100 1001 1101

Ending in 1101, our odd value.

Now for double odd balls

Ex2:

let arr = [1101,1001,1101,1101,1001,0001,0001,0001] arr.reduce((a,b)=>a^b)

Reduce Acc B Result

1 1101 1001 0100

2 0100 1101 1001

3 1001 1101 0100

4 0100 1001 1101

5 1101 0001 1100

6 1100 0001 1101

7 1101 0001 1100

Giving 1100, not our number.

The code above only works because the problem specifically has 1 number an odd amount of times.

PS. Sorry for the formatting.
*/
