Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice





function duplicateCount(text){

    // We initialize a variable and call on toLowerCase() and split() to create an array with each string  and convert all elements to lower case
    let newArr = text.toLowerCase().split('') 
    // We then intialize variable findDuplicates and call on a function that uses.filter(item,index) and calls on indexOf() method not equal to index
    let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
    // Finally we use Set to return the length of the array to get the number of the duplicates
    // The Set object lets you store unique values of any type. (In this case it only returns one value for each duplicate.)
    return [...new Set(findDuplicates(newArr))].length;
  }
  
  // More about Set here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // Implemented solution used here: https://stackoverflow.com/questions/49215358/checking-for-duplicate-strings-in-javascript-array


  // OR Best Practice below


  function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/gi) || []).length;
  }

  // This solution begins very similar to the intial solution.
  // We begin by using functions .toLowerCase() to convert all elements to lower case.
  // We then use .split('').Sort('').Join('') to convert to array, sort the array and finally convert back to string in that respective order.
  // Finally we used .match() with regex(regular expression)
  // ([^])\1+ / 1st Capturing Group ([^]) [^] matches any character, including newline \1+ matches the same text as most recently matched by the 1st capturing group

  // Quantifier — Matches between one and unlimited times, as many times as possible, giving back as needed (greedy)
  // Finally we return the length of the match.
  // **Foot note** in the regex || [] accounts for no matches. This returns an emptry array in palce of null in case there are no matches.