// PROBLEM
// Given an array of integers that are out of order, determine the bounds of the smallest window that must be sorted in order for the entire array to be sorted. For example, given [3, 7, 5, 6, 9], you should return [1, 3]

// ASSUMPTIONS/CLARIFICATIONS

// TEST CASES
// input [3, 7, 5, 6, 9] => output [1, 3] (element positions)

//todo need to track smallest [3, 7, 5, 6, 1]
//todo what if array has repeating values??? Currently repeated values if the largest, moves indexOfLargest which can change startIndex...We don't want this to happen. Once set the startIndex shouldn't change. The algorithm is simply determining how much to the "right" the endIndex needs to be. 
// GAME PLAN
// Declare smallestWindowToSort function that accepts arrayOfIntegers
  // Declare startIndex = 0
  // Declare endIndex = 0
  // Declare smallestInt = arrayOfIntegers[0]
  // Declare largestInt = arrayOfIntegers[0]
  // Declare indexOfLargestInt = 0
  // Loop through arrayOfIntegers staring from i = 1
    // if(arrayOfIntegers[i] < smallestInt)
      // smallestInt = arrayOfIntegers[i]
      // startIndex = 0
      // endIndex = i
    // else if(arrayOfIntegers[i] < largestInt)
      // if(startIndex !== 0)
        // startIndex = indexOfLargest
      // endIndex = i
    // else 
      // largestInt = arrayOfIntegers[i]
        // indexOfLargestInt = i
      



// SOLUTION

// Declare smallestWindowToSort function that accepts arrayOfIntegers

//            |
// [1, 0, 9, -3, 6, 9, 19, 10]
function smallestWindowToSort(arrayOfIntegers){
  let startIndex; // 0
  let endIndex; // 0
  let smallestInt = arrayOfIntegers[0]; // 1
  let largestInt = arrayOfIntegers[0]; // 9
  let indexOfSmallestInt = 0 // 0
  let indexOfLargestInt = 0 // 1

  // Loop through arrayOfIntegers staring from i = 1
  for (let i = 1; i < arrayOfIntegers.length; i++){

    let currentNum = arrayOfIntegers[i] // 6

    if(currentNum < smallestInt){ // false
      startIndex = 0
      endIndex = i
      smallestInt = currentNum
      indexOfSmallestInt = i
    }
    else if(currentNum < largestInt){ // true
      if(startIndex !== 0){ // todo CHECK CONDITION...  
        startIndex = indexOfLargestInt //todo startIndex is being redefined here when 19 comes around
      }
      endIndex = i
    }
    else{
      largestInt = currentNum
      indexOfLargestInt = i
    }
  }

  // if startIndex and endIndex are never set because the array is already ordered. 
  if(!startIndex && !endIndex){
    return [0, 0]
  }

  return [startIndex, endIndex]
}

// todo this value doesn't function properly. Find out why and fix the algorithm. 
let smallestWindow = smallestWindowToSort([1, 9, 6, 9, 19, 10])

console.log(smallestWindow)

