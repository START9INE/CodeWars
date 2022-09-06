Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F


// My solution:
// Extremly rudimentary and uncessarily long.
// We conver to all upper case.
// We then used .slice() method to grab the first element and add "."
// We then add the second intial similar to the way we grabbed the first initial.
// We used .slice() method and in the first parameter (begining index) we call another method indexOf(' ') + 1
// So above we look for the element after the space  and as the (ending index) we call again indexOf(' ') +2 
// This gives us the first letter of the last name.
// We return this to get S.H

function abbrevName(name){

    return name.toUpperCase().slice(0, 1) + "." + name.toUpperCase().slice(name.indexOf(' ')+1, name.indexOf(' ')+2);
    
    }

// Best Practice Below
// Easy to understand and efficient
// First we declare new array = to name.split(' ')
// this converts the string into an array with a space as the delmiter 
// We then return nameArray[0][0] (this is to say return index [0] element [0]) + "." + nameArray[1][0] (this is to say return index [1] element [0]) )


function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }