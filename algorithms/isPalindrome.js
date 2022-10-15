
// PROBLEM
// Write a function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise returns false.

// ASSUMPTIONS/CLARIFICATIONS
// string will be given as lowercase
// characters included in string do not have to be letters...?

// TEST CASES (one straightforward, then others and edge cases)
// deed -> true
// tacocat -> true
// palindrome -> false

// GAME PLAN
// take string and convert to lowercase
// loop through string taking the first and last character and comparing them, if these are the same, move pointers toward the center and continue loop until either no characters remain (i.e. "deed") or one character remains (i.e. "level")
// if above comparison is false, return stringIsPalidrome
// if we loop through the entire string, set stringIsPalindrome to true
// return stringIsPalindrome

// SOLUTION
// without recursion
const isPalindrome = (string) => {

  string = string.toLowerCase()

  if(string === ""){
    return false
  }

  let i = 0
  let j = string.length - 1

  while(i < j){

    if(string[i] !== string[j]){
      return false
    }

    i++
    j--
  }
  return true
}

// console.log(isPalindrome("deed"))
// console.log(isPalindrome("racecar"))
// console.log(isPalindrome("palindrome"))

// GAME PLAN
// outer function to check if string === ""
// inner recursing function with end condition to check if string.length === 1 or 0 
  // if above comparison is false, return stringIsPalidrome
  // if we loop through the entire string, set stringIsPalindrome to true
  // return stringIsPalindrome

// SOLUTION
// with recursion

function recursivePalindrome(string){
    
  if(string.length === 1 || string.length === 0){
    return true
  }

  if(string[0] === string[string.length - 1]){
    return recursivePalindrome(string.slice(1, string.length - 1))
  }

  return false

}

function isPalindrome2(string){

  if(string === ""){
    return false
  }

  return recursivePalindrome(string)

}

// console.log(isPalindrome2("deed"))
// console.log(isPalindrome2("racecar"))
// console.log(isPalindrome2("palindrome"))