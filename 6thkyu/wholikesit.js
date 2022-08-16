You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.


//Very simple solution 
// Used conditonal to return the text.
// used `` to reference the names at each index depending on the length of the array.
// Also intialized a variable (remainder) and had it equal to the length of the array - 2.
// referenced remained in the final condition to return ' and remainder others like this.


function likes(names) {
    let remainder = names.length - 2;
    if (names.length == 0) {
    return `no one likes this`; 
    } else if (names.length == 1) {
       return `${names[0]} likes this`;
    } else if ( names.length == 2) {
      return `${names[0]} and ${names[1]} like this`
    } else if ( names.length == 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
      return `${names[0]}, ${names[1]} and ${remainder} others like this`
    }
  }


  // Best practice and clever soltution below.

/*
The Solution use Math.min Method, that is built-in object in JavaScript.
Math.min is used to get smallest number in round brackets.
So We can get array length of names using idx variable.
Because if array of Names length is smaller than Four, idx variable is array of Names length.
Else The Array length is bigger than Four, idx variable is Four.
This mean is that choose one in templates.
And Then We use replace String Method in JS.
if {name} or {n} is in templates[idx], val Parameters replace {name} or {n}.
So if val is {name}, val get using shift Method in names array.
if val is {n}, val get just array length of names.
*/


  function likes (names) {
    var templates = [
      'no one likes this',
      '{name} likes this',
      '{name} and {name} like this',
      '{name}, {name} and {name} like this',
      '{name}, {name} and {n} others like this'
    ];
    var idx = Math.min(names.length, 4);
    
    return templates[idx].replace(/{name}|{n}/g, function (val) {
      return val === '{name}' ? names.shift() : names.length;
    });
  }

  // Another best practice below

// This solution employs a similar strategy as mine.
// Instead this conditionals it uses switch statements.
// The syntax is as follows

/* 
switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  } 
*/

  function likes(names) {
    names = names || []; // Creates a variable that holds the array and uses and or operator '|| []' to  control for empty arrays
    switch(names.length){ // Switch statment based on the length of the array.
      case 0: return 'no one likes this'; break; // 0 length returns 'no one likes this
      case 1: return names[0] + ' likes this'; break; // 1 length returns name[0](or the name at first index) likes this
      case 2: return names[0] + ' and ' + names[1] + ' like this'; break; // same as before but adds name at index 1
      case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; // same as before but adds name at index 2
      default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this'; // includes name at index 0 and 1 and adds names.length -2 others like this.
    }
  }


  // More on switch statements: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch