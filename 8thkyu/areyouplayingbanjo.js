Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"

Names given are always valid strings.










	// Simple Solution
	// Returned toLowerCase for case insensitivity
	// then called chartAt(0) to verify the value of the first letter
	// Added a ternary operator that checked if the character at 0 was == to "r"
	// If true returned a string literal where we plucked the value of name plays banjo
	// else string literal where we plucked the value of name does not play banjo




function areYouPlayingBanjo(name) {
  
  return name.toLowerCase().charAt(0) == "r" ? `${name} plays banjo` : `${name} does not play banjo`
}
