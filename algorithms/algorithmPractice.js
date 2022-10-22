
// PROBLEM: Write an algorithm that takes in a string and gives a count of all alphanumeric characters.

// ASSUMPTIONS/CLARIFICTIONS
  // don't distinguish between lowercase vs uppercase letters

// TEST CASES(straight-forward/simple and edge cases)
  // 'hello' => {h: 1, e: 1, l: 2, o: 1}
  // 'Hello, hi there!' => {h: 3, e: 3, l: 2, o: 1, i: 1, t: 1, r:1}
  // null => {}
  // undefined => {}

// GAME PLAN
  // create charCount object to hold count
  // loop through each char in string
    // make lowercase
    // check if char is alphanumeric
      // if char is in object, add 1 to value,
      // if char is not in object, add it and set value to 1
  // return charCount object

// SOLUTION

// const getCharCount = (str) => {
//   // create charCount object to hold count
//   let charCount = {}

//   // loop through each char in string
//   for(let i = 0; i < str.length; i++){

//     // make lowercase
//     let char = str[i].toLowerCase()

//     // todo: check if char is alphanumeric
//       // if char is in object, add 1 to value,
//       if(charCount[char] > 0){
//         charCount[char]++
//       }
//       // if char is not in object, add it and set value to 1
//       else {
//         charCount[char] = 1
//       }
//   }

//   // return charCount object
//   return charCount
// }

// let result = getCharCount('Hi, hello there!')

// console.log(result)



//* PROBLEM/QUESTION
// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; eg. , factorial four( 4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero (0!) is always 1.

//* ASSUMPTIONS/CLARIFICATIONS
// The input is an integer
// The input is positive

//* GAME PLAN
// Create factorial variable
// Loop through values from from num to 1 and multiply current value with current factorial variable value. 
// return factorial

//* SOLUTIONS
const getFactorial = (num) => {
  // Create factorial variable
  let factorial = num
  // Loop through values from num to 1 and multiply current value with current factorial variable value.
  for(let i = num - 1; i > 1; i--){
    factorial *= i
  }
  // return factorial
  return factorial
}

let result = getFactorial(4)

console.log(result)



//! NEXT do factorial algorithm with recursion 
