
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

const getCharCount = (str) => {
  // create charCount object to hold count
  let charCount = {}

  // loop through each char in string
  for(let i = 0; i < str.length; i++){

    // make lowercase
    let char = str[i].toLowerCase()

    // todo: check if char is alphanumeric
      // if char is in object, add 1 to value,
      if(charCount[char] > 0){
        charCount[char]++
      }
      // if char is not in object, add it and set value to 1
      else {
        charCount[char] = 1
      }
  }

  // return charCount object
  return charCount
}

let result = getCharCount('Hi, hello there!')

console.log(result)