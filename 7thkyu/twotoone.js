// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {

	let sortedArr = (s1 + s2).split("").sort();
	let arr = [];

	for (let i = 0; i < sortedArr.length; i++) {
		if (sortedArr[i] !== sortedArr[i - 1]) {
			arr.push(sortedArr[i]);
		}
	}
	return arr.join("");
}




const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
