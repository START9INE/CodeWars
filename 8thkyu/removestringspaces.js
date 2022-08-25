Description:

Simple, remove the spaces from the string, then return the resultant string.

// Simple solution: used .split(' ') method to split into an array
// Used .join('') to convert back to string.
// Notice the space between '' in .split() removes leading and trailing empty space.

function noSpace(x){
    return x.split(' ').join(''); 
    }