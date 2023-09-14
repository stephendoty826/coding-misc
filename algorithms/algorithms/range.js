
// Write a function which accepts a number and adds up all the numbers from 0 to that number 

// ASSUMPTIONS
// number given is an integer not a string
// number give is positive
// return value as integer

// TEST CASES
// 4 -> 10 
// 5 -> 15
// 10 -> 55

// GAME PLAN
// keep running total
// loop through and add 1 through num to total
// return total

// without recursion
function rangeAddition(num){
  let total = 0

  for(let i = 1; i <= num; i++){
    total += i
  }
  
  return total
}

// with recursion
const rangeAdditionRecursive = (num) => {

  if(num === 1){
    return 1
  }

  return num + rangeAdditionRecursive(num - 1)

}