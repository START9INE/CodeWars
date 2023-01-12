Given an array of integers your solution should find the smallest integer.

For example:

    Given [34, 15, 88, 2] your solution will return 2
    Given [34, -345, -1, 100] your solution will return -345

You can assume, for the purpose of this kata, that the supplied array will not be empty.



// I initiated two variables
// the first one stores the new array with the ints sorted
// the second one simply returns the value at index 0 which is the smallest int.
// the .sort() method is called with two arguements (a and b) i then pass the a - b which sorts themn in decesnding order


class SmallestIntegerFinder {
  findSmallestInt(args) {
    let sortedArr = args.sort((a,b) => a -b);
    let smallInt = sortedArr[0]

    return smallInt

  }
}


// Best practice below
// This soluton employs the Math.min method
// this returns the smallest value in the array
// However in order for this to not return null (finding the smallest value of an array)
// you must use the spread (...) operator on the array (args)


class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
