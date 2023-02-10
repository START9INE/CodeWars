Introduction

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task

Given a year, return the century it is in.
Examples

1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20

//=========================================================================================>
//My Solution below
//Used conditonals to identify the century
//Intialized 5 variables (Not DRY)
//One identifies the length of the year
//One splits the year into an array
//One splices the last two digits in the year
//lastTwo converts the last two digits into an integer
//remainder converts the remaining digits in the year into an into
//We then use a conditonal to round up or remain the same based on the last two digits
//or else return one for the first century.
//extremely WET and not efficient
//==========================================================================================>

function century(year) {
  let length = year.toString().split('').length
  let arr = year.toString().split('')
  let split = arr.splice(-2);
  let lastTwo = parseInt(split[0] + split[1]);
  let remainder = parseInt(arr.join(''))


  if (lastTwo > 0 && length > 2){
    return remainder + 1
  } else if (lastTwo == 0 && length > 2) {
    return remainder
  } else {
   return 1
  }

}


//=====================================================>
//This is a brilliant solution
//This solution incorporates the Math.Ceil method
//to round up the the nearest century and divides by 100
//ex: Math.ceil(1705/100) = 18
//======================================================>


function century(year) {
  return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
}
