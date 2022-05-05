//todo do this one again
// write an algorithm that takes in an array of numbers and an integer and returns an array with all elements equal to that integer to the end of the array (you may use two arrays)

// do the same thing without an additional array (mutate original array)

//[1,2,1,3,1,1,1]
// console.log(shiftData([1,2,1,3], 1))
function shiftData(numsArr, shiftedElement) {
  let rightIndex = numsArr.length-1
  let temp = 0
  for(let leftIndex = 0; leftIndex < numsArr.length; leftIndex++){
    
    if(leftIndex >= rightIndex){
      break
    }

    if(numsArr[leftIndex] === shiftedElement){

      if(numsArr[rightIndex] === shiftedElement){
        if(leftIndex === rightIndex - 1){
          return numsArr
        }
        for(let rIndex = rightIndex - 1; rIndex >=0; rIndex--){
          if(numsArr[rIndex] !== shiftedElement){
            rightIndex = rIndex
            break
          }
        }
      }
      
      temp = numsArr[leftIndex]
      numsArr[leftIndex] = numsArr[rightIndex]
      numsArr[rightIndex] = temp
      rightIndex -= 1
    }

  }
  return numsArr
}

// shiftData([1,2,1,3,1,1,1], 1) [1,2,1,3,1,1,1] -> should change to [2, 3, 1, 1, 1, 1, 1]

// Test Case
// console.log(shiftData([1,5,1,1,5,4,8,1,1,1], 1))
// console.log(shiftData([3,1,3,1,1,2,1,4,1,1,3,1,5,3,6,7,45,1,1,1,1], 1))
// console.log(shiftData([1,1,1,8,1,1,1], 1))
// console.log(shiftData([1,4,6,2,7,9,0,3,6,5,2,9,8,67,5,2,1,4,3,5,7,7,3,2,8,2,5,0], 1))

