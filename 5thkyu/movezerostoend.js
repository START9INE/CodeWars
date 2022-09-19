Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


function moveZeros(arr) {
    let newArr = arr.filter((x)=> x !== 0 ); // Declare new variable that filters arr and returns a shadow copy of the array with all the 0's removed. We used strictly not equals "!==" in order to compenstate for other falsy values like null, {} and []
    let zeroArr = arr.filter((x)=> x === 0);// Declare new variable that filters arr and returns a shadow copy of the array with only 0's
    
    for (let i = 0; i < zeroArr.length; i++) // Finaly we iterate through the array with only 0's and push them all to newArr (the array with no 0's)
    newArr.push(zeroArr[i]);
    return newArr; // We return newArr with all the 0's at the end of the array.
   
  }





// A similar solution as a one liner.
  var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;})); // They do the same as above except they don't declare new variables
  }                                                                                                    // They simply run filter on the array and use method .concat() to add the second filter
                                                                                                        // Concat method is used to merge two or more arrays. This method does not change the xisting arrays, but isntead returns a new array.
                                                                                                        // More on .concat() here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat