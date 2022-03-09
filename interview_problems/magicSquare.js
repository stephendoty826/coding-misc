
// Write an algorithm that does the following:

// Given a two-dimensional matrix, determine if it is a magic square.  The function IsMagicSquare will just receive a 2d matrix.  It is your job to make sure it complies with all the magic square requirements listed in the paragraph below. Return true if the matrix is a magic square. Otherwise, return false.


// What is a magic square?
// A magic square is a n x n square grid (where n is the number of cells on each side) filled with distinct positive integers in the range 1, 2, ..., n² such that each cell contains a different integer and the sum of the integers in each row, column and diagonal is equal. The sum is called the magic constant or magic sum of the magic square.

// An example with 15 as the magic constant:

/**
 * [ 
 *      [2, 7, 6], -> 15
 *      [9, 5, 1], -> 15
 *      [4, 3, 8], -> 15
 * ]   / |  |  | \
 *   15 15 15 15 15
 */

/**
 * optimization
 * 
 * 
 * when looping through each row, store each element in "column" cache so you don't have to loop through again for the column values and you can find the sum of the columns and diagonals by simply doing a lookup on the cache
 *  - as you loop through the rows, check if matrix is not square, elements are not all positive, and elements are not distinct. Do all of this in one loop through the matrix
 */

function IsMagicSquare(matrix) {

	// check if “matrix” is a 2D array and is square
  let isSquareArr = matrix.every(subArr=>{
    return subArr.length === matrix.length
  })
  if(isSquareArr){ // confirms matrix is square
    let allArePositive = allPositives(matrix)
    if(allArePositive){
      let areDistinctElements = distinctElements(matrix) // confirms that all elements in each subarray are distinct
      if(areDistinctElements){ 
        // check row sums, then column sums, then diagonal sums
        let firstSum = checkRowSums(matrix)
        if(firstSum){
          let columnSumsConfirmed = checkColumnSums(matrix, firstSum)
          if(columnSumsConfirmed){ 
            let diagonalSumsConfirmed = checkDiagonalSums(matrix, firstSum)
            if(diagonalSumsConfirmed){
              return true
            }
            else{ // return false if checkDiagonalSums function returns false
              // console.log("diagonal sums do not equal all other sums")
              return false
            }
          }
          else{ // return false if checkColumnSums function returns false
            // console.log("column sums do not equal all other sums")
            return false
          }
        } 
        else{ // return false if checkRowSums function returns false
          // console.log("first row sum does not equal all other sums")
          return false
        }
      }
      else{ // returns false if all elements in subarray are not distinct
        // console.log("elements in subarray not distinct")
        return false
      }
    }
    else{ // returns false if all elements are not positive
      // console.log("all elements are not positive")
      return false 
    }
  }
  else{ // returns false if matrix is not square
    // console.log("matrix is not square")
    return false
  }
}



// function to check for negative numbers
const allPositives = (matrix) => {
  for(let i = 0; i < matrix.length; i++){ // loop elements of main array
    for(let j = 0; j < matrix[i].length; j++){ // loop through elements of subarray
      let integer = matrix[i][j]
      if(integer <= 0){ // checks if integer is positive
        return false
      }
    }
  }
  return true // if all integers are positive, return true
}



// function to check if all elements are distinct
const distinctElements = (matrix) => {
  let cache = {}
  for(let i = 0; i < matrix.length; i++){ // loop elements of main array
    for(let j = 0; j < matrix[i].length; j++){ // loop through elements of subarray
      let integer = matrix[i][j]
      if(!cache[integer]){ // if integer does not exist in cache, add to cache
        cache[integer] = integer
      }
      else{ // if integer already exists in cache, elements are not distint...return false
        return false
      }
    }
  }
  return true // if all integers are distint, return true
}



//function to check sum of all rows...return sum of 1st row if all sums equal and false if not
function checkRowSums(matrix){
  let firstSum
  let otherSum
  // get sum of first row and compare to sum of other rows. if any not equal, return false
  for(let i = 0; i < matrix.length; i++){
    if(i === 0){// 
      firstSum = matrix[i].reduce((prev, curr) => prev + curr)
    }
    else{
      otherSum = matrix[i].reduce((prev, curr) => prev + curr)
      if(otherSum !== firstSum){ // checks if sums on all rows are the same as first row sum
        return false
      }
    }
  }
  return firstSum
}



//function to check sum of all columns (pass in matrix and value of 1st row sum)
function checkColumnSums(matrix, firstSum){
  // get sum of first row and compare to sum of other rows. if any not equal, return false
  for(let i = 0; i < matrix.length; i++){
    let sum = 0
    for(let j = 0; j < matrix[i].length; j++){
      sum += matrix[j][i]
    }
    if(sum !== firstSum){
      return false
    }
  }
  return true
}



//function to check sum of all diagnals (pass in value of 1st row sum)
function checkDiagonalSums(matrix, firstSum){
  let sum = 0
  for(let i = 0; i < matrix.length; i++){ // loop for left-right diagonal
    sum += matrix[i][i]
  }
  if(sum !== firstSum){ // check to see if left-right diagnol sum is equal to firstSum
    return false
  }
  // reset sum to zero
  sum = 0
  let j = matrix.length - 1
  for(let i = 0; i < matrix.length; i++){ // loop for right-left diagonal
    sum += matrix[i][j]
    j--
  }
  if(sum !== firstSum){ // check to see if diagnol sum is equal to firstSum
    return false
  }
  return true
}



// TEST CASES TO RUN

// matrix is empty
let matrixEmpty = [[], [], []]
console.log("matrix is empty - expected output: false", IsMagicSquare(matrixEmpty), "\n")

// matrix contains strings
let matrixStrings = [["Hello", "World", "!"], ["Coding", "Is", "Great!"], ["End", "Of", "Line"]]
console.log("matrix contains strings - expected output: false", IsMagicSquare(matrixStrings), "\n")

// matrix is not square array
let matrixNotSquare = [
  [1, 2, 3],
  [6, 5],
  [3, 4, 5, 6],
]

console.log("matrix is not square array - expected output: false", IsMagicSquare(matrixNotSquare), "\n")

// matrix contains negative numbers or 0
let matrixNegative = [
  [1, 2, -3],
  [6, 0, 4],
  [9, 8, 5],
]
console.log("matrix contains negative numbers or 0 - expected output: false", IsMagicSquare(matrixNegative), "\n")

// matrix contains non-distinct elements
let matrixNotDistinct = [ 
  [9, 7, 6],
  [1, 5, 1],
  [4, 3, 9],
]
console.log("matrix contains non-distinct elements - expected output: false", IsMagicSquare(matrixNotDistinct), "\n")

// matrix row, column, and diagonal sums do not equal each other
let matrixSumsNotEqual = [ 
  [8, 7, 9],
  [6, 5, 1],
  [4, 3, 2],
]
console.log("matrix sums do not equal - expected output: false", IsMagicSquare(matrixSumsNotEqual), "\n")


// matrix is 3x3 magic square 
let matrix3by3 = [ // sums = 15
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
]
console.log("matrix is 3x3 magic square - expected output: true", IsMagicSquare(matrix3by3), "\n")

// matrix is 4x4 magic square
let matrix4by4 = [ // sums = 34
  [4, 14, 15, 1],
  [9, 7, 6, 12],
  [5, 11, 10, 8],
  [16, 2, 3, 13]
]
console.log("matrix is 4x4 magic square - expected output: true", IsMagicSquare(matrix4by4), "\n")

// matrix is 5x5 magic square
let matrix5by5 = [ // sums = 65
  [9, 2, 25, 18, 11],
  [3, 21, 19, 12, 10],
  [22, 20, 13, 6, 4],
  [16, 14, 7, 5, 23],
  [15, 8, 1, 24, 17]
]
console.log("matrix is 5x5 magic square - expected output: true", IsMagicSquare(matrix5by5), "\n")


//todo look up big O and try to figure out what is the big O of this algorithm
