Description:

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    let newStr = "";
    if(str){
      let wordArr = str.split(/[-_]/g);
      for (let i in wordArr){
        if(i > 0){
          newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
        }else{
          newStr += wordArr[i]
        }
      }
    }else{
      return newStr
    }
    return newStr;
  }

  // Best Practice Below
  // All best practice solutions use regex
  // I attempted to solve without regex.

  function toCamelCase(str){
    var regExp=/[-_]\w/ig; // We declare a new variable that equals to our regular expression in this case it looks for words/elements that begin with a '-' or '_'
    return str.replace(regExp,function(match){ // We use str.replace method and use the regex variable we created above as a argument and a function that calls match
          return match.charAt(1).toUpperCase();// We return the match (any words that begin '_' or '_'.charAt(1) so the character starting at index 1 toUpperCase())
     });
}

// Another one liner below

function toCamelCase(str){
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase()); // use .replace() method using a regular expression
  }

/*
  1. _ (Underscore) as a parameter name means that that parameter will not be used in the function (i.e. it is unnecessary to get the desired return, so doesn't deserve a name.)---
  2. He creates a separate regexp capture group by having the dot in the parantheses.---
  3. So the whole match is underscore|hyphen + a letter but he also has just the letter as a separate capture group 1.
  4. first parameter is the whole match including the underscore|hyphen + the letter (e.g. "-s") and is not used.---
  5. the second parameter is capture group 1, which is only the letter part of the whole match.---
  6. he converts only parameter 2 (i.e. capture group 1) to uppercase and returns that to be used as replacement.
*/