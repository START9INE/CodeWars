You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

    Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).



// My Soltion below
// One line
// Used a conditonal to return true if the length of the array was strictly equal to 10 (no more and no less than 10 minutes)
// and called filter method on (item) (this created a new array with only elements that passed the filter (n)) grabbed the length of said array and verified that it was equal to filter() called on (s).length
// and ran the same on (w) and (e)
// This ensured that i would only take a ten minute walk and return to the place i started.


    function isValidWalk(walk) {
        return walk.length === 10 && walk.filter((item) => item === 'n').length === walk.filter((item)=> item === "s").length && walk.filter((item) => item === 'w').length === walk.filter((item)=> item === "e").length;
        // return true if array.length === 10 AND the number of 'n'orth directions were equal to the number of 's'outh directions  AND the number of "w"est directions were equal to the number of "e"ast directions given
        // else return false.    
    }













// Similar Solution below
// Declared three variables
// iterated through the array.
// Then bolean by using a conditonal where walk.length must be equal to 10
// and dx variable was === 0 
// and dy variable was === 0


    function isValidWalk(walk) {
        var dx = 0
        var dy = 0
        var dt = walk.length
        
        for (var i = 0; i < walk.length; i++) {
          switch (walk[i]) {
            case 'n': dy--; break
            case 's': dy++; break
            case 'w': dx--; break
            case 'e': dx++; break
          }
        }
        
        return dt === 10 && dx === 0 && dy === 0
      }