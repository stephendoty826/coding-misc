
// PROBLEM
// Given an array of integers that are out of order, determine the bounds of the smallest window that must be sorted in order for the entire array to be sorted. For example, given [3, 7, 5, 6, 9], you should return [1, 3]

// ASSUMPTIONS/CLARIFCATIONS

// TEST CASES
// input [3, 7, 5, 6, 9] => output [1, 3]
// input [1, 0, 9, -3, 6, 9, 19, 10] => output [0, 7] 
// input [1, 2, 3, 4, 5] => output [0, 0]

// GAME PLAN
// Declare function smallestWindowToSort that takes an arrayOfIntegers
  // declare rightBound variable
  // set maxValue = arrayOfIntegers[0];
  // loop through arrayOfIntegers from left to right (start form i = 1)
    // set currentInt value
    // if currentInt < maxValue
      // rightBound = i  
    // else
      // mValue = currentInt
  // declare leftBound variable
  // set minValue = arrayOfIntegers[arrayOfIntegers.length - 1];
  // loop through arrayOfIntegers from right to left (start form i = arrayOfIntegers.length - 2)
    // set currentInt value
    // if currentInt > minValue
      // leftBound = i  
    // else
      // minValue = currentInt

// SOLUTION
// Declare function smallestWindowToSort that takes an arrayOfIntegers
function smallestWindowToSort(arrayOfIntegers){
  // declare rightBound variable
  let rightBound;
  // set maxValue = arrayOfIntegers[0];
  let maxValue = arrayOfIntegers[0];
  // loop through arrayOfIntegers from left to right (start form i = 1)
  for(let i = 1; i < arrayOfIntegers.length; i++){
    // set currentInt value
    let currentInt = arrayOfIntegers[i];
    // set maxValue using Math.max()
    maxValue = Math.max(maxValue, currentInt);
    // if currentInt < maxValue
    if(currentInt < maxValue){
      rightBound = i  
    }
  }
  // declare leftBound variable
  let leftBound;
  // set minValue = arrayOfIntegers[arrayOfIntegers.length - 1];
  let minValue = arrayOfIntegers[arrayOfIntegers.length - 1];
  // loop through arrayOfIntegers from right to left (start form i = arrayOfIntegers.length - 2)
  for(let i = arrayOfIntegers.length - 2; i >= 0; i--){
    // set currentInt value
    let currentInt = arrayOfIntegers[i];
    // set minValue using Math.min()
    minValue = Math.min(minValue, currentInt)
    // if minValue < currentInt 
    if(minValue < currentInt){
      leftBound = i  
    }
  }

  if(leftBound === undefined){
    return [0, 0]
  }
    
  return [leftBound, rightBound]
}


console.log("expected output [1, 3]", smallestWindowToSort([3, 7, 5, 6, 9]))
console.log("expected output [0, 7]", smallestWindowToSort([1, 0, 9, -3, 6, 0, 19, 10]))
console.log("expected output [0, 0]", smallestWindowToSort([1, 2, 3, 4, 5]))