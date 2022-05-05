
// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; eg. , factorial four( 4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero (0!) is always 1.

// ASSUMPTIONS
// given number is an integer and not a string
// given number is positive

// TEST CASES
// 3 -> 6
// 4 -> 24
// 5 -> 120

// GAME PLAN
// have running total of multiplied value so far
// loop through until given num is reduced to 1
// return total after loop is finished


// without recursion
const factorial = (num) => {
  let total = num
  for(let i = num - 1; i > 1; i--){
    total *= i
  }
  return total
}

// console.log("3", factorial(3))
// console.log("4", factorial(4))
// console.log("5", factorial(5))


// with recursion
function recursiveFactorial(num){

  if(num === 1){ // "end case"
    return 1
  }

  return num * recursiveFactorial(num - 1)

}

console.log("3", recursiveFactorial(3))
console.log("4", recursiveFactorial(4))
console.log("5", recursiveFactorial(5))
