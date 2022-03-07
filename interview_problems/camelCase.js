
// interview questions from JP Morgan Chase
/**
* create program that when given a series of words prints out them in camel Case
* 
* Example:
* when given
*
* Camel        prints out "camelCase"
* Case
* 
* NEPTUNE      prints out "neptunePlutoYellow"
* PLUTO
* YELLOW
* 
*/

let arr = ["Camel", "Case", "", "NEPTUNE", "PLUTO", "YELLOW", "",  "Hello", "World", "", "rAvAgEr", "pYRoMaNiac", "pycho", "mechromancer"]

function toCamelCase(arrOfStrings){

  let arrOfArrays = []
  let tempArr = []

  // pushes each word into tempArr which is then pushed to arrOfArrays so each smaller phrase can be tackled one at a time
  arrOfStrings.forEach((element, i) => {
    console.log(element)
    if(element !== ""){
      tempArr.push(element)
    }
    else{
      arrOfArrays.push(tempArr)
      tempArr = []
    }
    //checks if the last element is not "" and adds the final temp array (the last set of words)
    if(i === arrOfStrings.length - 1 && element !== ""){
      arrOfArrays.push(tempArr)
      tempArr = []
    }
  })

  let camelCasePhrase = ""

  // loop to go through each sub-array and create the camelCase word and then concatinate it to camelCasePhrase
  arrOfArrays.forEach(array =>{
    let camelCaseWord = ""

    for(let i=0; i < array.length; i++){
      
      if(i === 0){
        camelCaseWord += array[i].toLowerCase()
      }
      else{
        // take of first character, capitalize it, and concatinate it to camelCaseWord
        camelCaseWord += array[i].charAt(0).toUpperCase()
        // slice remaining characters and concatinate it to camelCaseWord
        camelCaseWord += array[i].slice(1).toLowerCase()
      }
    }
    // console.log(camelCaseWord)
    camelCasePhrase += (camelCaseWord + " ")
  })
  
  return camelCasePhrase
}

console.log(toCamelCase(arr))

