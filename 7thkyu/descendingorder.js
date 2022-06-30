/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

function descendingOrder(n){
// First we convert integer to string and assign it to variable "str"
    let str = n.toString()
// Then we split the string and sort it using arguements "a" and "b" and sorting descending "b-a"
// we then join it (.join(''))
// And return the value
// the "+" sign before the function, actually called Unary plus is part of a group called Unary Operators
// Unary Operators are used to convert string and other representations to numbers (integers or floats)
   return +str.split('').sort((a,b) => b-a).join('');
    
  }




