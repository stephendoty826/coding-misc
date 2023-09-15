
// PROBLEM
// Given an array of integers that are out of order, determine the bounds of the smallest window that must be sorted in order for the entire array to be sorted. For example, given [3, 7, 5, 6, 9], you should return [1, 3]

// ASSUMPTIONS/CLARIFICATIONS

// TEST CASES
// input [3, 7, 5, 6, 9] => output [1, 3]
// input [1, 0, 9, -3, 6, 9, 19, 10] => output [0, 7] 
// input [1, 2, 3, 4, 5] => output [0, 0]

// GAME PLAN
// Declare a function named smallestWindowToSort that takes arrayOfIntegers
  // Create a sorted copy of the array
  // Loop through arrayOfIntegers
    // if current integer is not the same as the interger in the same position on the sorted array AND leftBound is undefined
      // set leftBound = i
    // else if current integer not the same as the integer int the same position on the sorted array
      // set rightBount = i

// SOLUTION

// Declare a function named smallestWindowToSort that takes arrayOfIntegers
const smallestWindowToSort = (arrayOfIntegers) => {
  
  let leftBound;
  let rightBound;

  // Create a sorted copy of the array
  let sortedArray = [...arrayOfIntegers].sort();

  // Loop through arrayOfIntegers
  for(let i = 0; i < arrayOfIntegers.length; i++){
    let currentInt = arrayOfIntegers[i];
    let sortedCurrent = sortedArray[i];

    // if current integer is not the same as the interger in the same position on the sorted array AND leftBound is undefined
    if(currentInt !== sortedCurrent && leftBound === undefined){ // todo can you combined the if statements and use a ternary statment for the leftBound vs the rightBound assignment???
      // set leftBound = i
      leftBound = i;
    }
    // else if current integer not the same as the integer int the same position on the sorted array
    else if(currentInt !== sortedCurrent){
      // set rightBound = i
      rightBound = i
    }
  }
  if(leftBound === undefined){
    return [0, 0]
  }
  return [leftBound, rightBound]
}

console.log("expected output [1, 3]", smallestWindowToSort([3, 7, 5, 6, 9]))
console.log("expected output [0, 7]", smallestWindowToSort([1, 0, 9, -3, 6, 9, 19, 10]))
console.log("expected output [0, 0]", smallestWindowToSort([1, 2, 3, 4, 5]))
