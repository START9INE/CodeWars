Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]


function arrayDiff(a, b) {
   return a.filter(e => !b.includes(e));
   }
   
   // Called a method on .filter() and used .inlcudes on element
   // filters through array (a) and returns elements not included on array (b)

   // More info on .filter() here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   // More info on .includes() here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter