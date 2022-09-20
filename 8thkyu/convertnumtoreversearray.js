Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example(Input => Output):

35231 => [1,3,2,5,3]
0 => [0]


// We begin by converting the integer into a string with String(x) 
// We then convert to array with .split()
// Reverse the order with .reverse()
// Finally use Method .map() to convert strings into digits with integers
function digitize(n) {
    return String(n).split('').reverse().map((digit)=> Number(digit));
  }



  // Best practice below
  // Essentially the same solution
  // instead they simply call Number as a function that converts strings into integers
  function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }



  // MDN for String/Number constructors
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number