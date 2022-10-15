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
// do-while loop
  // create tempArr = []
  // for-loop to loop through elements in flatArr
    // if current element of arr is an Array, concatinate to tempArr, otherwise, push to tempArr
  // set flatArr = tempArr
  // check while condition with .some method on flatArr using Array.isArray()
  // if above condition is true, continue while-loop
// return flatArr

// SOLUTION
const flatten = (arr) => { // [1, [2, [3]], 5]
  let flatArr = arr // flatArr = [1, [2, [3]], 5]
  let flattenFlag = true

  while(flattenFlag){ //todo use do...while loop
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

    flattenFlag = flatArr.some(element => element.length >= 0) // todo check while condition with .some and Array.isArray(...)

  }

  return flatArr
}