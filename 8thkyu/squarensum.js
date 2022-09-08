Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


function squareSum(numbers){
  
    return numbers.reduce((a, num) => a + (num * num),0);
    
             
    }

    // The example in the instruction is quite misleading
    // The instructions read that we should square each number and sum the results together.
    // The example however states that for [1,2,2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
    // while true why is 1 beinq squared to 2?


// I solved by calling the .reduce() method
// passed the arguments a and num
// a = sum
// num = to each number being passed.
// finally for simple math we simply square num by multiplying by itself then adding the sum to the next sum.
// (,0)  to take into account for empty arrays so it doesnt return null or NaN.
// For more information on reduce method see here:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce