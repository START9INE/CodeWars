/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

*/

function isIsogram(str){
   return !str.match(/([a-z]).*\1/i);
   return !/([a-z]).*\1/i.test(str)
    }

    // Both of the above return statements work//
    // In the first we use regular expression .match()
    // to match values [a-z]
    // the . matches any character(except for line terminiators)
    // * matches the previous token between zero and unilimited times, as many times as possible.
    // in this case it's matching what . matched.
    // \1 matches the same text as most recently matched by the 1st capturing group.
    // /i matches case insensitive 
    // If there any matches it returns true else false.
    // However the bang operator (!) flips this.
    // Returns true if there is no match an (isogram)
    // Return false if there is a match (not an isogram)