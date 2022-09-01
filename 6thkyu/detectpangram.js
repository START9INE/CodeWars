A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
    
function isPangram(string){
    return string.toLowerCase().match(/[a-z]/gi).filter(function (value,index,self) {
      return self.indexOf(value) === index;
    }).join('').length === 26;
    }
  // Long convuluted solution
  // First we call .toLowerCase().match(/[a-z]/gi) to transform string to all lower case and .match creates a new array of only alphabetic characters.
  // Finally we call the .filter() method and a function within with the value,index,self parameters (element, index, array)
  // that returns a only one value per character (no duplicates)
  // We then .join('') to return back to string. length of string === 26 returns true if not false. (26 letters in the english alphabet)

    // Best Practice

    function isPangram(string){
        return 'abcdefghijklmnopqrstuvwxyz'.split('').every((x) => string.toLowerCase().includes(x));
      }

      // Simple and clever solution that used .every() and .includes ()
      // First we declare new variable with all letters we then call .split(')
      // we then call .every()with (x) argument function and we check that string.toLowerCase().includes(x)
      // x = 'abcdefghijklmnopqrstuvwxyx'