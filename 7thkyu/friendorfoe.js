Description:

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

Note: keep the original order of the names in the output.


function friend(friends){
    return friends.filter(word => word.length === 4);
   }

// Simple Kata
// Used .filter() prototype to 
// Used an arrow function inside the filter method and provided a fucntion that
// filter all values in the array with a length of exactly 4   
// For more on .filter() see : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// For more on Arrow Functions see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions