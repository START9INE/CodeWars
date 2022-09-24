There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

    Find the unique number (this kata)
    Find the unique string
    Find The Unique



    function findUniq(arr) {
        return arr.filter((item)=> arr.indexOf(item) === arr.lastIndexOf(item)).pop()
      }
      // We begin by filtering the array with .filter()
      // we pass in parameter item
      // We then create an arrow function that tests if the indexof item is equal to the last indexof item
      // if this equals to true then it implies that the item or element is unique(only occurs once in the array).
      // If the above test is true then it returns a new array with the unqiue item
      // We the called .pop() method to return the integer.



      //Second best practice solution
      // The solution is similar except they call .find() instead of .filter()
      // .find() pull the element if the test case equals to true.
      // They use the same test case as my solution above.
      // no need to .pop()
      function findUniq(arr) {
        return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
      }
