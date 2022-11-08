
//* PROBLEM
// 1. Without using .flat(), create a function to flatten an array 
// 	1. const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10] 
// 	2. flatten(exampleArray) 
// 	3. [1,2,3,4,5,6,7,8,9,10] , //[1, 2, 3].concat([4, 5, 6]), // [1, 2, 3, 4, 5, 6]

//* CLARIFICATIONS/ASSUMPTIONS

//* GAME PLAN

//* SOLUTION


//* PROBLEM
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

//* CLARIFICATIONS/ASSUMPTIONS
    // array is sorted

//* GAME PLAN
  // use two pointer pattern, first & second
  // start pointers at first and second element in array
  // loop through with while loop and compare values
    // if values are the same, add 1 to second 
    // if values are not the same, add 1 to first and modify arr[first] to be value at arr[second], add 1 to second

//* SOLUTION
//            i 
// [1,2,3,4,7,12,4,7,7,12,12,13]
//                           j

function countUniqueValues(arr){
  // use two pointer pattern, first & second
  // start pointers at first and second element in array
  let first = 0

  // loop through and compare values
  for (let second = 1; second < arr.length; second++){
    // if values are not the same, add 1 to first and modify arr[first] to be value at arr[second]
    if(arr[first] !== arr[second]){
      first++
      arr[first] = arr[second]
    }
  }
  return  first + 1
}




