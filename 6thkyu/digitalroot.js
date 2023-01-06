// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Examples

//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


function digitalRoot(n) {
  let sum = n
  let arr = []
  let reducer = (a,b) => parseInt(a) + parseInt(b)

  while ( sum > 9) {
    arr = sum.toString().split('')
    sum = arr.reduce(reducer)


  }
  return sum
}




// This was my original answer
// I was applying the while loop for recusion
// however clearly it wasn't looping through.
// I was not assigning n to anything and simply hoping to change the value of n with each recursion.
// Obviously it didn't work that way.
// So i initialized three new value.
// sum which was equal to n
// arr which was equal to [] or empty array
// reducer which contained our reducer function
// i then performed a while loop that checked if sum was greater than 9
// if so it converted the sum to a array with separated values
// it then would reduce arr to a single value and return it back to an int
// it would then check if this new sum was again greater than 9 and proceed to run the proess again.
// It would stop when the sum was 9 or less.

  // return n.toString().split('').map(Number).reduce((a,b) => a + b)
