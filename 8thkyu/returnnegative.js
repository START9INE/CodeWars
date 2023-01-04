In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
Examples

makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notes

    The number can be negative already, in which case no change is required.
    Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.










    //===================================>
    //First CodeWar after a 2 month hiatus
    //===================================>


    // Easy solution
    // first solved with a ternary operator ( A Codewar Solution)
    // Harder to understand
    // Decided to solve it with a normal conditonal
    // The logic is simple if num is 0 or already negative return the number
    // otherwise convert to negative


function makeNegative(num) {
  //return num <= 0 ? num : -Math.abs(num)

  if (num <= 0) {
    return num;
  } else {
    return -Math.abs(num);
  }
}


// The most popular solution below
// Simply call the -Math.abs() method
// Placing the "-" before Math.abs()
// will find the absolute value and conver it to a nagative
// no need for any conditionals



function makeNegative(num) {
  return -Math.abs(num);



 // alternatively you can use a conditional
// and smply add a "-" to num to convert to negative

function makeNegative(num) {
  return num < 0 ? num : -num;
}}
