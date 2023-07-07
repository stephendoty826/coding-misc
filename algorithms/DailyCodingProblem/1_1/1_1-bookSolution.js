
// PROBLEM
// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// ASSUMPTIONS/CLARIFCATIONS

// TEST CASES
// input [1, 2, 3] => output [6, 3, 2]
// input [1, 2, 3, 4, 5] => output [120, 60, 40, 30, 24]

// GAME PLAN
// Create function to accept arrOfInts
  // Create prefixProducts [array of products of numbers in acsending order (input [1, 2, 3] => prefixProducts [1, 1*2, 1*2*3])]
  // Create suffixProducts [reverse array and then create array of products of numbers in ascending order (input [1, 2, 3] => suffixProducts [3, 3*2, 3*2*1])
  // reverse suffixProducts array
  // Create resultArr to fill with final products
  // Use for-loop to loop through arrOfInts and fill resultArr 
    // if(i == 0)
      // resultArr.push(suffixProducts[i + 1]) *** [FIRST ELEMENT OF ARRAY]
    // else if(i === arrOfInts.length - 1) *** [LAST ELEMENT OF ARRAY]
      // resultArr.push(prefixProducts[i - 1])
    // else *** [EVER ELEMENT BUT FIRST AND LAST]
      // resultArr.push(prefixProducts[i -1] * suffixProducts[i + 1])
  // return resultArr

// SOLUTION
// Create function to accept arrOfInts
const productArr = (arrOfInts) => {
  // Create prefixProducts [create array of accumulating products (input [1, 2, 3] => prefixProducts [1, 1*2, 1*2*3])]
  let prefixProducts = []

  arrOfInts.forEach(int => {
    if(prefixProducts.length > 0){
      prefixProducts.push(prefixProducts[prefixProducts.length - 1] * int)
    }
    else{
      prefixProducts.push(int)
    }
  })
  // Create suffixProducts [create array of products of numbers in ascending order but in reverse order (input [1, 2, 3] => suffixProducts [3, 3*2, 3*2*1])
  let suffixProducts = []

  for(let i = arrOfInts.length - 1; i >= 0; i--){
    if(suffixProducts.length > 0){
      suffixProducts.push(suffixProducts[suffixProducts.length - 1] * arrOfInts[i])
    }
    else{
      suffixProducts.push(arrOfInts[i])
    }
  }
  // reverse suffixProducts array
  suffixProducts.reverse()

  // Create resultArr to fill with final products
  let resultArr = []
  // Use for-loop to loop through arrOfInts and fill resultArr 
  for(let i = 0; i < arrOfInts.length; i++){
    if(i === 0){ // [FIRST ELEMENT OF ARRAY]
      resultArr.push(suffixProducts[i + 1])
    }
    else if(i === arrOfInts.length - 1){ // [LAST ELEMENT OF ARRAY]
      console.log(prefixProducts[i - 1])
      resultArr.push(prefixProducts[i - 1])
    }
    else{ // [EVER ELEMENT BUT FIRST AND LAST]
      resultArr.push(prefixProducts[i -1] * suffixProducts[i + 1])
    }
  }

  return resultArr
}

console.log(productArr([1, 2, 3, 4]))