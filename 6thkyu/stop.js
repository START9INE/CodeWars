Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string){
    const stringArray = string.split(' '); // Declare variable StringArray and assign it to string.split() that is turn it into an array
    let result = ''; // Declare new empty variable
    stringArray.map((str, i) => { // call .map() function on new variable stringArray and assign params str and i (string and index)
      if (str.length >= 5){ // Call function on .map() method and use conditional to check if str(string).length is greater than or equal to 5
        stringArray[i] = str.split('').reverse().join(''); // If condition is met .split() to turn into array
      } else { // reverse() to reverse the elements and finally .join() to turn it back into string and assign to new variable stringArray[i]
        stringArray[i] = str; // If condition is not met (str.length < 5) then stringArray[i] = str (keep it the same)
      }
    result = stringArray.join(' '); // assign string.Array.join(' ') to result variable make note of space between '' to account for delimiters
    });return result;  // return result 
  }

  // Best Practice Below

  function spinWords(words){
    return words.split(' ').map(function (word) { // First we call on .split() to convert into array (make note of space between '') .map() with a function with a param of word
      return (word.length > 4) ? word.split('').reverse().join('') : word; // we return a ternary if word.length is greater than 4 we split().rever.join() word else we return word.
    }).join(' '); // And finally join(' ') again taking note of the space between the ' ' 
  }