
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

//todo review online other solutions for this

function IsMagicSquare(matrix) {
  let firstRowSum
  let diagonalsSummedUp = false 
  let firstDiagonalSum = 0
  let secondDiagonalSum = 0

  let isSquareArray = matrix.every(row => row.length === matrix.length)
  if(!isSquareArray){
    return false
  }

  let flatMatrix = matrix.flat().sort((a, b) => a - b) // checks for distinct and 1 through n^2 elements
  for(let i = 0; i < flatMatrix.length; i++){
    if(flatMatrix[i] !== i+1){
      return false
    }
  }

  for(let rowIndex = 0; rowIndex < matrix.length; rowIndex++){
    let rowSum = 0
    let columnSum = 0 
    let diagonalIndex = matrix.length - 1
    
    for(let columnIndex = 0; columnIndex < matrix[rowIndex].length; columnIndex++){

      rowSum += matrix[rowIndex][columnIndex]

      columnSum += matrix[columnIndex][rowIndex]

      if(!diagonalsSummedUp){

        firstDiagonalSum += matrix[columnIndex][columnIndex]

        secondDiagonalSum += matrix[rowIndex][diagonalIndex] 

        diagonalIndex--
      }

    } // end of inner for-loop
    
    if(!firstRowSum){
      firstRowSum = rowSum
    }
  
    if(firstRowSum !== rowSum || firstRowSum !== columnSum || firstRowSum !== firstDiagonalSum || firstRowSum !== secondDiagonalSum){
      return false
    }
    if(!diagonalsSummedUp){
      diagonalsSummedUp = true
    }

  } // end of outer for-loop

  return true // only returns true if all the conditions for a magic square are met
}



// TEST CASES TO RUN

// matrix is empty
let matrixEmpty = [[], [], []]
console.log("matrix is empty - expected output: false", IsMagicSquare(matrixEmpty), "\n")



// matrix is not square array
let matrixNotSquare = [
  [1, 2, 3],
  [6],
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


// matrix 1st row and 1st column sums equal but no other sums
let matrixRow1Col1 = [ // sums = 15
  [2, 7, 6],
  [9, 15, 1],
  [4, 3, 8],
]
console.log("matrix Row1 = Col1 but others do not equal - expected output: false", IsMagicSquare(matrixRow1Col1), "\n")


// matrix elements are not 1 through n^2
let matrixNot1ToN2 = [ // sums = 18
  [3, 8, 7],
  [10, 6, 2],
  [5, 4, 9],
]
console.log("matrix elements not 1 through n^2 - expected output: false", IsMagicSquare(matrixNot1ToN2), "\n")


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

