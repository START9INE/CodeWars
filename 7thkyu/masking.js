Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples

"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"







function maskify(cc) {
    let newArr = cc.split('');
    for (let i = 0; i <= newArr.length; i++) {
      if (i < newArr.length-4){
        newArr[i] = '#';   
      }
      cardNum = newArr.join('')
    }
  return cardNum;  
  }
  
  // First we create a new array (newArr) and calling the .split method.
  // We the iterate through the new array.
  // We add a conditional if i (the index) is less than the length of the array - 4
  // Then the value is equals to '#'
  // We then create a new variable 'cardNum' and equal it to the newArr.join.
  // This rejoins the values in the array into a string and removes the delimiters (,).
  // Finally we return the new variable cardNum 


  //On Codewars the below soulution was most popular
  // Uses .slice() and regex 

  function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }