/*
This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
    // Iterate through string
    // Add copies of each value to equal the location in the order found in original string.
    // Capitlize the first letter.
    // Hypen between each different letter
    

        return s.toLowerCase().split('').map((char,idx) => `${char.toUpperCase()}${char.repeat(idx)}`).join('-');
      
}