Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"


//Simple solution
//essentially we split into an array and call reverse method
//this reverse reverse the words however it also reverses the order of the words.
//So compensate for this we rejoin into a string
//Split again but this time split it with a space so it makes an array of the words and not individual characters
//we reverse the order of the words and rejoin into a string.
function reverseWords(str) {
 return str.split('').reverse().join('').split(' ').reverse().join(' ')
}




// OR 
//split into an array of the words
//call .map() and pass an arrow function that splits all the words into an array of letters
//reverses the order of the letters
//joins the array into strings of reverse letters
//And finally rejoins the array holding the reversed words into a string of reverse words.
function reverseWords(str) {
return str.split(' ').map((word) => word.split('').reverse().join('')).join(' ');
}
