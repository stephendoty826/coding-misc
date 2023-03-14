//* PROBLEM
// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i. 

//* CLARIFICATIONS/ASSUMPTIONS

//* TEST CASES
// input [1, 2, 3, 4, 5] -> output [120, 60, 40, 30, 24]

//* GAME PLAN
// Create empty array to be filled with new values
// Loop through array of integers using for-loop with i and multiply all values that don't have index position of i and push value to new array
// return new array

//* SOLUTION
const productArr = (arr) => {
  // Create empty array to be filled with new values
  let newArr = []

  // Create currentIndex variable to track idx position in outer for-loop
  let currentIndex = 0

  for(let idx = 0; idx < arr.length; idx++){
    // Create product variable to hold product
    let product = 1

    // Loop through array of integers using for-loop with i
    for(let i = 0; i < arr.length; i++){
      // multiply all values where currentIndex != i
      if(currentIndex !== i){
        product *= arr[i]
      }
      console.log("product", product)
      console.log("i", i)

    }
    //push resulting value to new array
    newArr.push(product)
    console.log("newArr", newArr)

    // increment currentIndex
    currentIndex++
  }
  

  // return new array
  return newArr
}



// let input = [1, 2, 3, 4, 5]
let input = [3, 2, 1]

console.log(productArr(input))