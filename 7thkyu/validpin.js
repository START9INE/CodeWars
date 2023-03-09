// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

//=====================================================================>
//I believe this is quite readable, However it isn't necessairy DRY
//I'm repeating myself by checking for the length twice ( two different lengths)
//We call the .match() method to match and returns an array of pattern matching strings if any, null otherwise
//We then also check for pin.length of 4 and then again 6
//if both of those conditions are met it returns true otherwise false
//=====================================================================>

function validatePIN(pin) {
	if (pin.match(/^\d+$/) && pin.length == 4) {
		return true;
	} else if (pin.match(/^\d+$/) && pin.length == 6) {
		return true;
	} else {
		return false;
	}
}

//========================================================================>
//Best practice from Codewars below
//They checked for string.length inside of regex while i checked outside of exp
//The one liner is pretty but not easily readable code
//The test method is called on the pattern with pin as an arguement,
//which will return true if the pin string matches the pattern and false otherwise
//========================================================================>
//
//
function validatePIN(pin) {
	return /^(\d{4}|\d{6})$/.test(pin);
}

//=====================================================================================================================================>
//Below I used my solution with the regex created by the best practice user above.
//A bit more readable and still used .match() method
//^ Beginning. Matchs the beginning of the string, or the beginning of a line if the multiline flag (m" is enabled
//( Capturing group #1 Groups multiple tokens together and creates a capture group for extracting a substring or using a backreference
//  \d Digit. Matches any digit character (0-9)
//    {4} Quantifier match 4 of the preceding token
//    | Alternation Acts like a boolean OR. MAtches the expression before or after the |
//    \digit. Matches and digit character (0-9)
//    {6} Quantifier match 6 of the preceeding token.
//)
//$ End. Matches the end of the string, or the end of a line if the multiline flag (m) is enabled
//
//***Use this URL: https://regexr.com/#native_link# to test and check regular expressions*****
//=======================================================================================================================================>

function validatePIN(pin) {
	if (pin.match(/^(\d{4}|\d{6})$/)) {
		return true;
	}
	return false;
}
