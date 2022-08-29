Description:

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
Example

alphabetPosition("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


function alphabetPosition(text) {
    return text.split('').filter(v=>/[a-zA-Z]/.test(v)).map(v=>v.toLowerCase().charCodeAt(0)-96).join(' ');
    
  }

//  Best Practice 


function alphabetPosition(text) {
    return text
      .toUpperCase() // .toUpperCase to convert string to all upper case, because in dec value, lower-case and upper-case are different integer values. 
      .match(/[a-z]/gi) // Uses .match() and a regular expression to match string with any elements in the alphabet a-z "/gi" searches (g)lobally and case (i)nsensitive
      .map( (c) => c.charCodeAt() - 64) //calls .map()to create a new array with arguement (c) for element or character in string and .charCodeAt() which returns an integer between 0 and
                    // 65535 representing the UTF-16 code unit at the given index. we then subtract - 64 to get the appropriate value(The letter "A" has charcode of 65 in UTF-16, so doing that subtraction it is converted into 1, and the other letters go on.)
      .join(' '); //finally we join the array to convert to string.       
    } 


    /*
    HIGH LEVEL SUMMARY

    .toUpperCase to convert string to all upper case, because in dec value, lower-case and upper-case are different integer values.

    .match(/[a-z]/gi) returns an array object based on regex filter, g multiple instance, i any case.

    .map((c) => c.charCodeAt() - 64 ) to create a new array populated with the results of calling a provided function on every element in the calling array. Runs through the array object, and results in the index position.

    .join(' ') converts the array object ['a', 'b'] back into a string 'a b'
    */
    
    // More info on .charCodeAt(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
    // More info on .map(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map