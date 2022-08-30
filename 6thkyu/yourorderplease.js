Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""


function order(words){
  
    return words.split(' ').sort(function(a, b){ // First we split the string into an array and call method .sort() and we pass on 2 arguments a and b
        return a.match(/\d/) - b.match(/\d/); // We return the sort a - b not a minus b ( Here we specify the order in which we are sorting) i.e from A to B
     }).join(' ');  // Finally we join the array to convert to string.
  }    
