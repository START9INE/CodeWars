The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!



function duplicateEncode(word){
    var letterCount = []; // Initialize variable to hold count
    var letters = word.toLowerCase().split(''); // initialized a new array that holds all elements (letters) in letters(converted to lowercase)
  
    letters.forEach(function(letter) { // Iterate through the array letters with a function with a (letter) arg.
      letterCount[letter] = (letterCount[letter] || 0) + 1; // for each element  lettercount is equal to the lettercount of letters or 0 + 1
    });
  
    return letters.map(function(letter) {  // We then use the .map() method to return the new string.
      return letterCount[letter] === 1 ? '(' : ')'; // if lettercount[letter] is equal to 1 return '(' else return ')'.
    }).join(''); // We then join the array to create a string.
  }


  // Best Practice Below
  // Very simple and much easier to understand.

  function duplicateEncode(word){
    return word         
      .toLowerCase()    // Convert to lowercase
      .split('')        // Convert to an array.
      .map( function (a, i, w) {  // Call on the .map((element, index, array) method (this creates anew array with the results of the below function)
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'  // A very clever use of .indexOf() and .lastIndexOf() methods.
      })                                                     // indexOf() returns the first index that the element is found at
      .join('');                                             // lastIndexOf() returns the last index that the element is found at.
  }                                                          // If both of these are equal then the element does not repeat   
                                                            // Thus we return '('
                                                            // If they are not equal then the element does repeat 
                                                            // Thus we return ')'
                                                            // Finally we join the array to return the string.
                                                            // More on .map() here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
