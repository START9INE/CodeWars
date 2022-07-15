/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/


    // take string split into different values
    // Create new array of the lengths of each value.
    // Sort new array by length and return shortest length #
    function findShort(s){
        return s.split(' ').map(w => w.length).sort((a, b) => {return a - b} )[0];
        
      }
// Turn s into an array of strings calling the .split() method on it. Pass .split() an empty space as separator argument
// Call the .map() method on step 1 to create a new array out of step 1's content. Pass .map() an arrow function that checks every element in step 1's array, and returns its length
// We then call .sort() based on the array created with .map()
// We then pass the parameters (a,b) and pass an arrow funcion that sorts from  lowest to greatest. (Without this it would sort alphabetically)
// Finally we return the value at index [0]
     
     
     
     
     
     
      // OR //

      function findShort(s){
        return Math.min.apply(null, s.split(' ').map(w => w.length));
      }

      /*
      Breaking it down

    Step 1/3 - Turn s into an array of strings calling the .split() method on it. Pass .split() an empty space as separator argument:

    s = "an undocumented feature";
    function findShort(s){
    return s.split(" ");
    }
    // returns: ["an", "undocumented", "feature"]

    Step 2/3 - Call the .map() method on step 1 to create a new array out of step 1's content. Pass .map() an arrow function that checks every element in step 1's array, and returns its length:

    s = "an undocumented feature";
    function findShort(s){
    return s.split(' ').map(x => x.length));
    }
    // returns: [2, 12, 7]

    Step 3/3 - Pass step 2 as argument of the Math.min() function with a small twist. Math.min() returns the smallest of zero or more numbers, but won't work with arrays. Thus, add the spread operator ... to step 2 so that its array is "expanded" into numbers:

    s = "an undocumented feature";
    function findShort(s){
    return Math.min(...s.split(' ').map(x => x.length)));
    }
    // returns: 2

    BONUS STEP: filtering out trailing whitespace
    Submitting this kata with trailing whitespace in s will fail. As a remedy, on step 2, call the .filter() method passing it an argument of Boolean to filter out all falsy values:

    s = "an undocumented feature       ";
    function findShort(s){
    return Math.min(...s.split(" ").map(x => x.length).filter(Boolean));
    }
    // returns: 2

*/