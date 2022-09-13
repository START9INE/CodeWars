Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined



// Simply Solution
// We simply call on .filter() method.
// We pass on another function that takes parameter item
// item is then checked to === true
// Those items that passed the test are then added to a new array.
// We then simply grab the length of said array.

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter((item)=> item === true).length;
  }

  