Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

However, the arrays can have varying lengths, not just limited to 4.

// We being by calling parseInt() method
// parseInt() takes in two parameters a string and an optional radix
// We pass on arr.join('') to convert array into a string.
// We then plug in 2 as the radix.
// SYNTAX = parseInt(string, radix)
//radix an integer between 2 and 365 that represents the radix(the base in mathematical numeral systems)
//Knowning the formula for converting binary to intger we know the base would be 2


const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2);
  };




// This solution is quite clever
// it uses a conditional statement and iterates through all possible arrays combinations.
// returns the value for each possible comibination.



  function binaryArrayToNumber(s) {
    if (s[0] === 0 && s[1] === 0 && s[2] === 0 && s[3] === 1) {
      return 1;
    } else if (s[0] === 0 && s[1] === 0 && s[2] === 1 && s[3] === 0) {
      return 2;
    } else if (s[0] === 0 && s[1] === 0 && s[2] === 1 && s[3] === 1) {
      return 3;
    } else if (s[0] === 0 && s[1] === 1 && s[2] === 0 && s[3] === 0) {
      return 4;
    } else if (s[0] === 0 && s[1] === 1 && s[2] === 0 && s[3] === 1) {
      return 5;
    } else if (s[0] === 0 && s[1] === 1 && s[2] === 1 && s[3] === 0) {
      return 6;
    } else if (s[0] === 0 && s[1] === 1 && s[2] === 1 && s[3] === 1) {
      return 7;
    } else if (s[0] === 1 && s[1] === 0 && s[2] === 0 && s[3] === 0) {
      return 8;
    } else if (s[0] === 1 && s[1] === 0 && s[2] === 0 && s[3] === 1) {
      return 9;
    } else if (s[0] === 1 && s[1] === 0 && s[2] === 1 && s[3] === 0) {
      return 10;
    } else if (s[0] === 1 && s[1] === 0 && s[2] === 1 && s[3] === 1) {
      return 11;
    } else if (s[0] === 1 && s[1] === 1 && s[2] === 0 && s[3] === 0) {
      return 12;
    } else if (s[0] === 1 && s[1] === 1 && s[2] === 0 && s[3] === 1) {
      return 13;
    } else if (s[0] === 1 && s[1] === 1 && s[2] === 1 && s[3] === 0) {
      return 14;
    } else if (s[0] === 1 && s[1] === 1 && s[2] === 1 && s[3] === 1) {
      return 15;
    } else if (s[0] === 0 && s[1] === 0 && s[2] === 0 && s[3] === 0) {
      return 0;
    }
  }