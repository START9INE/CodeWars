// We need a function that can transform a number into a string.
// 
// What ways of achieving this do you know?
// Examples:
// 
// 123 --> "123"
// 999 --> "999"

function numberToString(num) {
    if (Number.isInteger(num)){
       return num.toString();
   }
   }

// Or without conditionals

function numberToString(num) {
    return num.toString();
  }