
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
 * when looping through each row, store each element in "column" cache so you don't have to loop through again for the column values and you can find the sum of the columns and diagonals by simply doing a lookup on the cache
 *  - as you loop through the rows, check if matrix is not square, elements are not all positive, and elements are not distinct. Do all of this in one loop through the matrix
 */

//  let matrix3by3 = [ // sums = 15
//   [2, 7, 6],
//   [9, 5, 1],
//   [4, 3, 8],
// ]

function IsMagicSquare(matrix) {
  let distinctCache = {} // used to check if all elements are distinct
  let firstRowSum // sum with which to compare other sums
  let diagonalsSummedUp = false // used to ensure diagonals are only summed up the first time through the outer for-loop

  for(let i = 0; i < matrix.length; i++){ // start of outer for-loop to drill down 1-dimension
    let rowSum = 0 // sum to be added up inside of inner for-loop and then added to sumsArr
    let columnSum = 0 
    let firstDiagonalSum = 0
    let secondDiagonalSum = 0
    let k = matrix.length - 1 // index for use with summing up secondDiagonalSum

    // confirm matrix is a square array
    if(matrix.length !== matrix[i].length){
      return false
    }
    
    for(let j = 0; j < matrix[i].length; j++){ // start of inner for-loop to drill down to 2-dimensions

      // confirm all elements are unique
      let integer = matrix[i][j]
      if(!distinctCache[integer]){ // if integer does not exist in cache, add to cache
        distinctCache[integer] = integer // adds integer to cache if it doesn't already exist

        // confirm all elements are positive
        if(integer <= 0){
          return false
        }
      }
      else{ // if integer already exists in cache, elements are not distinct...return false
        return false
      }

      rowSum += matrix[i][j] // calculates row sum starting from top row and moving down

      columnSum += matrix[j][i] // calculates column sum starting from left column and moving right

      if(!diagonalsSummedUp){ // ensures diagonals are only summed up the first time through the outer for-loop

        firstDiagonalSum += matrix[j][j] // calculates top-left to bottom-right diagonal sum the first time through the outer for-loop

        secondDiagonalSum += matrix[i][k] // calculates top-right to bottom-left diagonal sum the first time through the outer for-loop

        k-- // decrementing k to move from top-right to bottom-left through matrix when calculating secondDiagonalSum
      }

    } // end of inner for-loop

    
    if(!firstRowSum){ // only assign firstRow to rowSum the first time through the outer loop
      firstRowSum = rowSum
    }
  
    switch(firstRowSum){ // confirm sums calculated are equal to first row sum
      case rowSum:
      case columnSum:
      case firstDiagonalSum:
      case secondDiagonalSum:
        if(!diagonalsSummedUp){ // ensures the diagonals are only summed up the first time through the outer for-loop
          diagonalsSummedUp = true
        }
        break // all sums calculated this run were equal to firstRowSum
      default:
        return false // not all sums calculated this run were equal to firstRowSum
    }

  } // end of outer for-loop

  return true // only returns true if all the conditions for a magic square are met
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

