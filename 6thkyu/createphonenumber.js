Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Example

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!






// Below is a very rudimentary solution.
// Not DRY!!!!!!
// Used .splice() method to add open paranthesis at the 0th index, delete 0 elements and insert '('
// Used .splice() method to add open paranthesis at the 4th index, delete 0 elements and insert ') '
// Used .splice() method to add open paranthesis at the 8th index, delete 0 elements and insert '-'
// This is repetitive and looks ugly.

function createPhoneNumber(numbers){
    
    numbers.splice(0,0,'(');
    numbers.splice(4,0,') ');
    numbers.splice(8,0,'-');
    return numbers.join('');
    
  }





// The below solution is best practice
// We initialize a variable 'format' and we have it equal '(xxx) xxx-xxxx'
// We iterate through variable we created 
// And use the .replace() method to replace 'x' with numbers[i] (The elements in our given array)
// Finally we return 'format'



  function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";     // We initialize a variable 'format' and we have it equal '(xxx) xxx-xxxx'       
    
    for(var i = 0; i < numbers.length; i++)      //We iterate through variable we created 
    {
      format = format.replace('x', numbers[i]);  //And use the .replace() method to replace 'x' with numbers[i] (The elements in our given array)
    }
    
    return format;                              // Return format
  }

  


