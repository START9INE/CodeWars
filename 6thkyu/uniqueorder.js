Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]


//==========================================>
//Not the best practice solution on CodeWars but i believe it gets the job done
//This solution seems to be O(1)
//==========================================>

var uniqueInOrder=function(iterable){
  let arr = [] // Declared empty array
  // Used a for loop to iterate through the iterable argument
  for ( let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i-1]){ //if statement to compare current value to its previous value
      arr.push(iterable[i])// if not equal we push to arr
    }
  }
  return arr// finally we return arr
}
