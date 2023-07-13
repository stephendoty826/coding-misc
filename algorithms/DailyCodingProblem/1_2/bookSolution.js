// PROBLEM
// Given an array of integers that are out of order, determine the bounds of the smallest window that must be sorted in order for the entire array to be sorted. For example, given [3, 7, 5, 6, 9], you should return [1, 3]

// ASSUMPTIONS/CLARIFICATIONS

// TEST CASES
// input [3, 7, 5, 6, 9] => output [1, 3] (element positions)

//todo need to track smallest [3, 7, 5, 6, 1]
// GAME PLAN
// Declare smallestWindowToSort function that accepts arrayOfIntegers
  // Declare start, end, and largest variables
  // Loop through arrayOfIntegers
    // if(start === undefined)
      // if(arrayOfIntegers[i] > arrayOfIntegers[i + 1])
        // start = i
        // largest = arrayOfIntegers[i]
    // else 
      // if(arrayOfIntegers[i] > largest)
        // largest = arrayOfIntegers[i]
      // else
        // end = i

// SOLUTION