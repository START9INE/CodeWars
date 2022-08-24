Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

function solution(str){
    return str.split('').reverse().join(''); //Simple: In order to run .reverse() method we must first convert string to array with .split('') and finally back to array with .join('').
  }