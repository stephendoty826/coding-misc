/**
* 
* create a program that when given a jumbled up series of letters prints out the numerical equivalient of the words used to make up the jumbled up letters (only single digits [zero through nine]). They are to be printed out in ascending order. Numbers can be repeated in the jumbled word. 
* 
* Example:
* when given
* evuosfxsifne    prints out "467"      foursixseven
*/


//? could you use the .some() array method? It iterates over the array and returns true if at least one element passes your condition??? 

function letterCount(string, char){
  let count = 0
  wordArr = string.split("")

  wordArr.forEach(character => {
    if(character === char){
      count++
    }
  })
  return count
}

function letterObj(string){
  let charCount = {}
  const arr = string.split("")

  arr.forEach(character => {
    if(charCount[character]){
      charCount[character]++
    }
    else{
      charCount[character] = 1
    }
  })
  return charCount
}

console.log(letterObj("zero"))

let jumbled = "evuosfxsifne" // should  print out 467

let nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

// while(jumbled.length > 0){
//   nums.forEach(num => {

//   })
// }




// sudo code******

/**
 * while there are still letters in the jumbled number string
 *  
 */


/**
 * Loop through "zero", "one", ... all they way to "nine" and see if all of the characters in that numbers string ("zero", "one", "two") is in the jumbled number string
 *  
 * 
 * 
 */
