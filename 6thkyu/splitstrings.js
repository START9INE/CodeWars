Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']



function solution(str){

    return str.length % 2 === 0 ? str.split(/(?=(?:..)*$)/) : (str += "_").split(/(?=(?:..)*$)/)

      }

      // My Solution
      // Simple Solution using regex.
      // First we check if str.length is even using Modulos and a ternary conditional statement.
      // If even we use regex on .split()
      // Using look-aheads the pattern is (?:..)*$ which checks for even number of characters before the end of the string $
      // Note that non-capturing group (?:pattern) is used here, otherwise, capturing group will create extra entries in the split result)






      function solution(s){
        return (s+"_").match(/.{2}/g)||[]
     }
// Best Practice Solution
// First we add the "_" to str using the + operator.
// We then call .match() with regex
// (/.{2}/g) only returns matches in groups of 2. So if the string is an odd length after we added "_" the last underscore will not be able to be captured.
// This takes advantage of limiting the capture group to 2.
// Brilliant solution.
// No need to check for length of str.


function solution(str){
    var i = 0;
    var result [];
    if (str.length % 2 !== 0) {
      str = str + '_';
    }
    while (i < str.length) {
        result.push(str[i] + str[i+1]);
        i += 2;
      }
    return result;
  }


// Best practice not using regex
// Simple and easy to understand.
// We declare new variable i = 0
// We declare new empty  array (result)
// We then check if str is odd 
// If odd we add '_' with str + 
// Finally we iterate through the length of the string.
// We finally push to empty array "result" str[i] (str[element] being iterated) + str[i+1]
// i += 2 : means that we iterate every two elements. so ab cd ef.


