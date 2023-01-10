
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case








var countBits = function(n) {
  let binaryNum = n.toString(2); // We use .toString() to only convert int to string but by using base (2) we convert the number into a binary format
  let arr = binaryNum.split(''); // from there we simply convert the string into an array
  let filteredArr = arr.filter((e) => e == 1); // we create a new array using .filter() and passing along the value 1 (creates a new array with only 1s)

  if ( n > 0) { // We use a conditonal to test if the value is greater than 0
    return  filteredArr.length // if greater than 0 we return the length of the filteredArr above
  } else {
    return n // otherwise we return n
  }
};


// The best pratice solution below
// a beautiful one liner
// essentially the same as above
// Very cleverly they .split('0') which essentially removes the 0's in the binary string
// This allows them to simply call .length on remaining string

countBits = n => n.toString(2).split('0').join('').length;


// Second best practice below
// Very clever use of regex (regular expressions)
// The simply replace all 0s with empty spaces and return the length


var countBits = function(n) {
  return n.toString(2).replace(/0/g,'').length;
};


// Below is my original solution incorporating what i learned from the best practice solution from Codewars.
// Still kept multiple lines as i believe that is most easily understood by other engineers.


var countBits = function(n) {
  let binaryNum = n.toString(2); // We use .toString() to only convert int to string but by using base (2) we convert the number into a binary format
  let arr = binaryNum.split('0'); // from there we simply convert the string into an array

  if ( n > 0) { // We use a conditonal to test if the value is greater than 0
    return  binaryNum.length // if greater than 0 we return the length of the filteredArr above
  } else {
    return n // otherwise we return n
  }
};


