Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
	return Math.pow(n, 3);
}

// This was more of a mathematical problem.
// After spending some time wondering how how the rows worked
// I found that the test input was 42 and the correct output was 74088
// I thought about squaring the input but i received 1764
// I then divided the intended output 74088 by 42 and received 1764.
// This is when i realized it was x to the third power or cubed!
// So i called the math.pow(base, exponent) method. 