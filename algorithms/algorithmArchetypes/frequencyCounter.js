//* Frequency Counter (unofficial name)
//* This pattern uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested loops or O(N^2) operations with arrays/strings.

// This algorithm uses the Frequency Counter archetype. 
const isAnagram = (str1, str2) => {
  // Check if inputs have the same length. Return false if not.
  if(str1.length !== str2.length){
    console.log('lengths not the same')
    return false
  }
  // Create frequencyStr1 obj
  let frequencyStr = {}
  // Loop through first string and create and object with the frequency of each character
  for(let char of str1){
    frequencyStr[char] ? frequencyStr[char]++ : frequencyStr[char] = 1
  }
  // Loop through second string and see if character exists in frequency object. Decrement character frequency count.
  for(let char of str2){
    if(!frequencyStr[char]){
      return false
    }
    else{
      frequencyStr[char]--
    }
  }
  return true
}

console.log(isAnagram('test1', '1test'))


// This algorithm also uses the Frequency Counter archetype. 
const same = (arr1, arr2) => {
  // return false if array lengths are not the same
  if(arr1.length !== arr2.length){
    console.log('not same length')
    return false
  }

  let frequencyCounter = {}

  // Loop through first array and build frequencyCounter object
  for(let val of arr1){
    frequencyCounter[val] = (frequencyCounter[val] || 0) + 1
  }

  // loop through second array and confirm frequencyCounter obj contains sqrt of value in arr2. If so, reduce count in frequencyCounter. If not, return false. 
  for(let val of arr2){
    if(!frequencyCounter[Math.sqrt(val)]){
      return false
    }
    else{
      frequencyCounter[val]--
    }
  }
  return true
}

console.log(same([1, 2, 3], [9, 1, 4]))

