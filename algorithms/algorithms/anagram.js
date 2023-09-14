//* PROBLEM
// Give two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

//* CLARIFICATIONS/ASSUMPTIONS
// All inputs are single words
// All imputs contain lowercase letters only and no symbols or punctuation

//* GAME PLAN
// Use Frequency Counter pattern
// Check if inputs have the same length. Return false if not.
// Create frequencyStr1 obj
// Loop through first string and fill frequencyStr1 obj with the frequency of each character
// Loop through second string and see if character exists in frequency object. Decrement character frequency count.

//* SOLUTION

const isAnagram = (str1, str2) => {
  // Check if inputs have the same length. Return false if not.
  if(str1.length !== str2.length){
    console.log('lengths not the same')
    return false
  }

  // Create frequencyStr1 obj
  let frequencyStr1 = {}

  // Loop through first string and create and object with the frequency of each character
  for(let char of str1){
    frequencyStr1[char] ? frequencyStr1[char]++ : frequencyStr1[char] = 1
    // if(frequencyStr1[char]){
    //   frequencyStr1[char]++
    // }
    // else{
    //   frequencyStr1[char] = 1
    // }
  }

  // Loop through second string and see if character exists in frequency object. Decrement character frequency count.
  for(let char of str2){
    if(!frequencyStr1[char]){
      return false
    }
    else{
      frequencyStr1[char]--
    }
  }
  
  return true

}

console.log(isAnagram('test1', '1test'))