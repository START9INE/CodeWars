/* 
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/



//===============================================================================================//
// The below solution is using regex                                                             //
// str.replace searches for                                                                      //
// everything in the brackets []                                                                 //
// Within the delimiters or slashes '/' (tells the interpreter where the regex begins and ends)  //
// The 'g' and 'i'  are modifiers                                                                //
// 'g' is global, match all instances of the pattern in a string, not just the first one         //
// 'i' is case senseitive (matches all characters regardless of  case)                           //
// In the paranthesis were putting what we want it replaced with. In this case it's empty        //
//===============================================================================================//
function disemvowel(str) {
  
    return str.replace(/[aeiou]/gi, '');
    
    }
  