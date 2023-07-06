
// PROBLEM
// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// ASSUMPTIONS/CLARIFICATIONS
// Array is not empty

// TEST CASES
// input [1, 2, 3, 4, 5] => output [120, 60, 40, 30, 24]
// input [3, 2, 1] => output [2, 3, 6]

// GAME PLAN
// Create function that takes in arrOfNums
  // Find product of all elements using reduce???
  // Create arrOfProducts (empty array)
  // Loop through arrOfNums using forEach method and divide total product by each element and push to arrOfProducts
  // return arrOfProducts

// SOLUTION 
// Create function that takes in arrOfNums
const getProductsArr = (arrOfNums) => {
  // Find product of all elements using reduce
  let totalProduct = arrOfNums.reduce((prev, curr) => {
    return prev * curr
  })
  // Create arrOfProducts (empty array)
  const arrOfProducts = []
  // Loop through arrOfNums using forEach method and divide totalProduct by each element and push to arrOfProducts
  arrOfNums.forEach(num => {
    arrOfProducts.push(totalProduct/num)
  })
  // return arrOfProducts
  return arrOfProducts
}


console.log(getProductsArr([1, 2, 3, 4, 5]))
  
  
  
