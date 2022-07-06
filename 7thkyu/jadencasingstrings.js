/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

String.prototype.toJadenCase = function () { 
    return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
    
  };
  
// This solution uses regex.
// You can use 'This' since it's a method.
// We then use the replace method and regex (regular expressions)
//  replace() executes a search for a match in a string, and replaces the matched substring with a replacement substring
// When the search for a match requires something more than a direc match,
// such as finding one or more b's or finding white space, you can incude
// special characters in the pattern.
// (^|\s)  (Match the following at the start of a new line or white space)    
// - (^) is a position anchor in this case start of a line
//  (|) is "OR"
// \s is for leading white space.
// [a-z] is a groups we are matching
// the / in the begging indicates the start of the regex
// the "/g" means replace all matches found.
// then we assign these into variable x place it in a function that
// returns x/toUpperCase()