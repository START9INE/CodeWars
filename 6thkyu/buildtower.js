Build Tower

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

function towerBuilder(nFloors) {
let space,star, tower = [];
  
  for (let i = 1; i <= nFloors; i++){
    space = " ".repeat(nFloors - i);
    star = "*".repeat((2*i) - 1);
  tower.push(`${space}${star}${space}`);

  }
      
  return tower;
}


// Best Practice Below
//
//
function towerBuilder(n) {
  return Array.from({length: n},(e, i) => {
    const spaces = ' '.repeat(n - i - 1);
    return spaces + '*'.repeat(i + i + 1) + spaces;
  });
}

// Call Array.from({length: n}) where they specified the length of the array equal to n (given)
// They then included a second argument as a function
// The function had to paramaeters e and i where e is element and i is index
// We then define spaces
// and return spaces and concat '*'.repeat(i+i+1) and spaces again



