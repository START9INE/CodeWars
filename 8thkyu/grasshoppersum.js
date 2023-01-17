Summation

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)




var summation = function (num) {
//=================================================================>
// Using Gausse Sum we can return the correct sum very efficiently.
//=================================================================>
  return num * (num + 1) / 2;


//=================================================================>
// Otherwise we can run a for loop and sum every int until we reach num
//=================================================================>
//  let sum = 0
//
//  for  (let  i = 1; i <= num; i++ ) {
//    sum += i;
//  }
//  return sum
}
