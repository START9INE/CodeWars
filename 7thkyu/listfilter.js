/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
Example

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/
function filter_list(l){
    return l.filter(x => typeof x === 'number');
  }

  // Used the filter prototype method to filter out all elements (x) in array that were === 'number'
  // and returned new array that was filtered.
  // filter() method creates a nhew array with all elements that pass the test implemented by the provided function.
  // For more info visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter