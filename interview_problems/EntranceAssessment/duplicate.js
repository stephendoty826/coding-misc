
function duplicate(numbers){

  let doubledNumbers = []

  for(const num of numbers){
    doubledNumbers.push(num * 2)
  }

  return numbers.concat(doubledNumbers)

}

console.log(duplicate([1, 2, 3, 4]))