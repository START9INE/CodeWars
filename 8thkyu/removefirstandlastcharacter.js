It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't 
have to worry with strings with less than two characters.

function removeChar(str){
    const newArr = str.split('') //Declared new variable equal to str.split('') (turns string into an array) We do this to be able to call the following methods.
     return newArr.slice(1, newArr.length - 1).join(''); // We call on methods .slice(1, newArr.length-1) and finally turn it back into a string with .join('')
   
   };
   

   // Best Practice below:


   function removeChar(str) {
    return str.slice(1, -1); // Same as above. I did not know you could call .slice on a string. (there was no need to turn into an array) 
                            // Additonally You can also just list "-1" instead of str.length -1 for the ending parameter.
  }