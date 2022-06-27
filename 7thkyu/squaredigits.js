/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer
*/
function squareDigits(num){
    //======================================================================//
    //The first thing we will do is convert our number to a string.         //
    //This will allow us to split num into individual characters or digits. //
    //We assign our string to a variable called numStr.                     //
    //======================================================================//

    let numStr = num + "";
    
    
  //===============================================================================//  
  //  We create another variable called total.                                     //
  //  This variable will contain our number after concatenating the squared digits.// 
  //  This variable will be a string as you can’t concatenate a number             //
  //  (you’ll end up adding them together).                                        //
  //===============================================================================//


    
    let total = "";

   //========================================================//
   // Next, we will loop through numStr:                     //
   // Starting with what’s going on inside the parenthesis,  //
   // we use parseInt() to convert each digit to an integer. //
   // Then we square it.                                     //
   // We wrap that statement in parenthesis                  //
   // to let JavaScript know that we want to                 //
   // concatenate our squared digit to total.                //
   //========================================================//
   
   //====================================//
    for(let i in numStr){
      total += (parseInt(numStr[i])**2 + "");
    }
  

    //=======================================================================//
    // After we are done looping through all the digits of our number,       //
    // we return total. Before we do that, we convert it to an integer first //
    //=======================================================================//
    return parseInt(total);
  }


  //=====================//
  //       OR            //
  //=====================//


  function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }