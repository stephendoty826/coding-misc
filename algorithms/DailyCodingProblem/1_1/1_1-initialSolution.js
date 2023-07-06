
// PROBLEM
// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// ASSUMPTIONS/CLARIFICATIONS
// Array is not empty

// TEST CASES
// input [1, 2, 3, 4, 5] => output [120, 60, 40, 30, 24]
// input [3, 2, 1] => output [2, 3, 6]

// GAME PLAN
// Create function that takes in arrOfNums
  // create newArrOfNums (new empty array)
  // use forEach loop to step through elements of arrOfNums
    // use for-loop to multiply all elements except the on at i of arrOfNums and push result to newArrOfNums
  // return new newArrOfNums

// SOLUTION 
// Create function that takes in arrOfNums
function productArr(arrOfNums){
  // create newArrOfNums (new empty array)
  const newArrOfNums = []
  // use forEach loop to step through elements of arrOfNums
  for(let i = 0; i < arrOfNums.length; i++){ // [3, 2, 1] --- i = 0 arrOfNums[0] = 3 
    // use for-loop to multiply all elements except the on at index of arrOfNums and push result to newArrOfNums

    let product = 1

    for(let j = 0; j < arrOfNums.length; j++){
      if(j !== i){
        product *= arrOfNums[j]
      }
    }
    newArrOfNums.push(product)
  }
    
  // return new newArrOfNums
  return newArrOfNums
}

console.log(productArr([1, 2, 3, 4, 5]))
  
