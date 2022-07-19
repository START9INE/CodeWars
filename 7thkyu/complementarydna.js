Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

function DNAStrand(dna){
  
    let sequence = {
      "A": "T",
      "T": "A",
      "G": "C",
      "C": "G"
  }
   return dna.replace(/[atgc]/gi, function(matched) {
     return sequence[matched];
   });
    
  }

  // We begin by creating an object 'sequence'
  // The object holds key-value pairs.
  // "A": "T", "T": "A", etc.
  // we then use regular expression and .replace to target atgc using /gi for global and case insensitive.
  // We then create a replace function in our replace method.
  // The replace function takes the character that matches the regualar expression 'matched', and uses
  // it as a key to obtain the key's value pair from our 'sequence' object.
  // We use the object bracket notation to get access to the key's value.
  // i.e.: object[keyname] // to get the object value fore that particular key.
  // For a detailed explanation visit: https://levelup.gitconnected.com/javascript-algorithm-complementary-dna-3ad421071110