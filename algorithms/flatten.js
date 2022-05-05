
// PROBLEM
// 1. Without using .flat(), create a function to flatten an array 
// 	1. const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10] 
// 	2. flatten(exampleArray) 
// 	3. [1,2,3,4,5,6,7,8,9,10] , //[1, 2, 3].concat([4, 5, 6]), // [1, 2, 3, 4, 5, 6]

// ASSUMPTIONS/CLARIFCATIONS
// 

// TEST CASES (straightforward one, then others and edge cases)
// [1, 2, [3, 4, [5, 6, [7]], 8], 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// [ [ [] ], [ [ [], [] ] ], []] -> []
// [ {first: "Stephen", last: "Doty"}, [1, 2, 3, 4], [{arr: [1, 5, 2, 9]}, [5, 2, 1]]] -> [{first: "Stephen", last: "Doty"}, 1, 2, 3, 4, {arr: [1, 5, 2, 9]}, 5, 2, 1]

// without recursion
// GAME PLAN
// set given array equal to flatArr for while-loop condition
// while loop
  // create tempArr = []
  // for-loop to loop through elements in flatArr
    // if current element of arr has length >= 0, concatinate to tempArr, otherwise, push to tempArr
  // set flatArr = tempArr
  // .some method on flatArr to see if some elements have length >= 0
  // if above condition is true, continue while-loop
// return flatArr

// SOLUTION
const flatten = (arr) => { // [1, [2, [3]], 5]
  let flatArr = arr // flatArr = [1, [2, [3]], 5]
  let flattenFlag = true

  while(flattenFlag){
    let tempArr = []

    for(let i = 0; i < flatArr.length; i++){

      if(Array.isArray(flatArr[i])){
        tempArr = tempArr.concat(flatArr[i])
      }
      else{
        tempArr.push(flatArr[i])          // tempArr = [1, 2, 3, 5]
      }
    }
    flatArr = tempArr // flatArr = [1, 2, 3, 5]

    flattenFlag = flatArr.some(element => element.length >= 0)

  }

  return flatArr
}

// console.log(flatten([1, [2, [3]], 5]))
// console.log(flatten([1, 2, [3, 4, [5, 6, [7]], 8], 9, 10]))
// console.log(flatten([ [ [] ], [ [ [], [] ] ], []]))
// console.log(flatten([ {first: "Stephen", last: "Doty"}, [1, 2, 3, 4], [{arr: [1, 5, 2, 9]}, [5, 2, 1]]]))


// with recursion
// GAME PLAN
// create flatten function and pass into it array to be flattened (arr) along with empty array to be filled with flattened elements (flattenedArr) (this will be passed in recursively to accumulate the flattened elements)
// loop through each element in array to be flatten
  // check if Array.isArray(element)
    // if true, recurse...(return flatten(element, flattenedArr))
  // else
    // push current element to flattenedArr
// // if loop completes, use .every method to confirm all elements do not have .length >= 0
// //   if true return flattenedArr

// [1, [2, [3, 4,]], [5, 6], 7]
    // [5, 6]

// SOLUTION
const flattenRecursive = (arr) => { // arr = [5, 6]; flattenedArr = [1, 2, 3, 4, 5, 6, 7]
  let flattenedArr = []
  
  for(const element of arr){ // element = [5, 6]
    if(Array.isArray(element)){ // element.length === 2

      flattenedArr = flattenedArr.concat(flattenRecursive(element))

    }
    else{
      flattenedArr.push(element) // flattenedArr = [1, 2, 3, 4]
    }

  }

  return flattenedArr

}

console.log(flattenRecursive([1, [2, [3]], 5]))
console.log(flattenRecursive([1, 2, [3, 4, [5, 6, [7]], 8], 9, 10]))
console.log(flattenRecursive([ [ [] ], [ [ [], [] ] ], []]))
console.log(flattenRecursive([ {first: "Stephen", last: "Doty"}, [1, 2, 3, 4], [{arr: [1, 5, 2, 9]}, [5, 2, 1]]]))

// Vernonica's Solution using .reduce() method and recursion
function flatten2(arr){ // arr = [2, [3]]
  return arr.reduce((acc, val) => {
      if (Array.isArray(val)){
          return acc.concat(flatten2(val)) 
      }else{
        acc.push(val)
        return acc
      }
  }, [])
}

// console.log(flatten2([1, [2, [3]], 5]))
// console.log(flatten2([1, 2, [3, 4, [5, 6, [7]], 8], 9, 10]))
// console.log(flatten2([ [ [] ], [ [ [], [] ] ], []]))
// console.log(flatten2([ {first: "Stephen", last: "Doty"}, [1, 2, 3, 4], [{arr: [1, 5, 2, 9]}, [5, 2, 1]]]))

//Magic Matt's Solution
let test = [1,2,[3,4,[5,6,7],8],9,10]

const flatten3 = arr => {
    let newArr = []
    for (let i=0; i<arr.length; i++){
        if (Array.isArray(arr[i])){ 
            let moreFlat = flatten3(arr[i])
            newArr = newArr.concat(moreFlat)
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// console.log(flatten3([1, [2, [3]], 5]))
// console.log(flatten3([1, 2, [3, 4, [5, 6, [7]], 8], 9, 10]))
// console.log(flatten3([ [ [] ], [ [ [], [] ] ], []]))
// console.log(flatten3([ {first: "Stephen", last: "Doty"}, [1, 2, 3, 4], [{arr: [1, 5, 2, 9]}, [5, 2, 1]]]))