What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false

Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []







function anagrams(word, words) {
let multiArray = []  // First we declare an empty array
let wordArr = word.split('').sort().join('') // For readbility declared a variable here

	// below we then iterate through the array with a .forEach() method pass in the argument element(elements in the array)
	// We then use callback function to check if the element is equal to the variable we declared above.
	// We split the element into an array, sort the array and finally join the array into a string.
	// We call a ternary operator and if true we push the element into the empty array declared above
	// If false we return an empty array.
	// Note: the ternary operator will not parse if there is nothing on both the right and left side of the ":"
words.forEach((element) => element.split('').sort('').join('') == wordArr ? multiArray.push(element) : [] );
  

  return multiArray // We finally return the now not empty array.

}


//A better Solution

function anagrams(word, words) {
word = word.split('').sort('').join('');
return words.filter((e) => e.split('').sort('').join('') == word)
}


  
  

  



