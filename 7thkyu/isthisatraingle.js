// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

//==============================================>
//This took me longer than i'd like to admit
//i had no idea how to determine whether it was a triangle only using 3 sides
//the idea is that generally triangles all have equal or close to equal side lengths.
//if one side is too long, it's no longer a triangle.
//used conditonal to return a bollean for length inouts
//used "&&" to make sure the additon of 2 side lengths is greater than each side length.
//========================================================================================>

function isTriangle(a, b, c) {
	if (a + b > c && a + c > b && b + c > a) {
		return true;
	} else {
		return false;
	}
}
