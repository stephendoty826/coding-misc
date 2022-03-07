
//? could you use the .some() array method? It iterates over the array and returns true if at least one element passes your condition??? 

let word = "heret"

// let numsArr = ["one", "two", "three"]

let threeString = "three"

let unjumbledWord = ""

for(let i = 0; i < threeString.length; i++){
  if(word.includes(threeString[i])){
    unjumbledWord += threeString[i]
    let index = word.indexOf(threeString[i])
    let slice = word.slice(index, index + 1)
    word = word.replace(slice, "")
  }
  else{
    break
  }
}

console.log("unjubmledWord", unjumbledWord)
console.log("word", word)


// function test(){
//   numsArr.forEach(num => {
    
//   })
// }



