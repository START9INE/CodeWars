/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes

    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.
*/

const highAndLow = numbers => {
    numbers = numbers.split(" ");
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  // Read this article for explanation.
  // First we create a variable labeled numbers that contains the new string that has split the the characters in the string.
  // Then we return the Max and Min of the variable.
  // We use the "Spread Operator or "..." as a shorter wat of writing the apply solution to get the maximum and minimum of the array."