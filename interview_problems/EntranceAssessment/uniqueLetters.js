
let string = "dauabcabdefddaad"

function findUniqueCharacters(characters){

  let sortedCharacters = characters.split("").sort().join("")
  
  let cache = {}

  for(const char of sortedCharacters){
    if(!cache[char]){
      cache[char] = char
    }
  }

  let uniqueSortedString = ""

  for(const char in cache){
    uniqueSortedString += char
  }

  return uniqueSortedString

}

console.log(findUniqueCharacters(string))