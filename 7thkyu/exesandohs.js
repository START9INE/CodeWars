/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/
function XO(str) {
   // const numOfX = (str.match(/[x]/gi) || []).length;
   // const numOfO = (str.match(/[o]/gi) || []).length;
    
   // if (numOfX == numOfO) {
   //   return true
   // }else{
   //   return false
   // }
     
   // As a ternary below
   // return numOfX == numOfO ? true : false
    

   // A one liner
   // assigned variable and returned in the same line.
    return (numOfX = (str.match(/[x]/gi) || []).length) == (numOfO = (str.match(/[o]/gi) || []).length) ? true : false;
    // OR //

    return (numOfX = (str.match(/[x]/gi) || []).length) === (numOfO = (str.match(/[o]/gi) || []).length) 
  }


  // See below for resources used to understand and make this work
  // https://bobbyhadz.com/blog/javascript-count-regex-matches
  // Regex cheatsheet: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
  // Used this to convert if statement to ternary: https://stackoverflow.com/questions/45788996/convert-if-statement-to-ternary-operator
  // First we assigned the number of x's and o's to variables numOfX and numOfO
  // We used regex (regular expression) .match() to accomplish this.
  // used /g (global search) and /i (case insensitive)
  // If no matches of the regular are found in the string, the 'match' method returns 'null'
  // we handle this by using the logical OR (||) operator.
  // We don't want to access the 'length' property of a vulue of 'null' because we'd receive an error.
  // The logical OR (||) operator allows us to return an empty array if the 'match' mnethod returned 'null'
  // And the brackets on the far right returns an array with matches.
  // We then use .length of the array to return the number of matches.
  // We then used an if statement to compare the results and returned true for equal matches otherwise false.