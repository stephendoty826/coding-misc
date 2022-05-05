
// Write a function called reverse which accepts a string and returns a new string in reverse.

// ASSUMPTIONS/CLARIFICATIONS
// capitalization doesn't matter (Hello -> olleH)
// spaces are to be included (one two -> owt eno)

// TEST CASES
// test -> tset
// hello there -> ereht olleh
// empty string: "" -> ""


// GAME PLAN (witout recursion)
// create new reversedString
// loop through and append current character to front of reversedString
// return reversedString 

// without recursion
function reverse(string){
  let reversedString = "" 

  for(const character of string){
    reversedString = character + reversedString
  }

  return reversedString
}

console.log("", reverse(""))
// console.log("test", reverse("test"))
// console.log("hello there", reverse("hello there"))

// GAME PLAN (with recursion)
// end case: if string === ""
// return and call function again passing in string slice without first character and add first character to end

// with recursion
function reverseRecursive(string){
  if(string.length === 0) return ""

  return reverseRecursive(string.slice(1)) + string[0]

}

// console.log(reverseRecursive(""))
// console.log("test", reverseRecursive("test"))
// console.log("hello there", reverseRecursive("hello there"))


// JAMES' SOLUTION
const reverseStringHelper = (string, index, revString) => {
  if (index === string.length) return revString;
  return reverseStringHelper(string, index + 1, string[index] + revString) 
}

const reverseString = string => {
  return reverseStringHelper(string, 0, "")
}


// console.log(reverseString(""))
// console.log("test", reverseString("test"))
// console.log("hello there", reverseString("hello there"))


