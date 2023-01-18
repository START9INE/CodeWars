You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
Examples

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

//========================================================================================>
//Similar to the best practice solution on Codewars
//First we iniiate two variables one for an array with only even nums
//one for an array with only odd nums
//we achieve this by calling the .filter() method and passing and using modulus
//anything modulus 2 that has no remainders is even
//anything modulus 2 that has a remainder is odd
//we then use an if else to check if evenNums.length is equal to 1
//if it is we return the 0 index of evenNums (Because we know there will only be 1 outlier)
//otherwise we return the 0 index of oddNums
//=======================================================================================>

function findOutlier(integers){
  let evenNums = integers.filter((a) => a % 2 == 0);
  let oddNums = integers.filter((a) => a % 2 != 0);

  if (evenNums.length == 1) {
    return evenNums[0]
  } else {
    return oddNums[0]
  }
}
