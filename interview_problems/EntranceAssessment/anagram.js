
function isAnagram(first, second){
  first = first.toLowerCase()
  second = second.toLowerCase()

  first = first.split(" ").join("").split("").sort()
  second = second.split(" ").join("").split("").sort()

  if(first.length !== second.length){
    return "NO"
  }

  for(let i = 0; i < first.length; i++){
    if(first[i] !== second[i]){
      return "NO"
    }
  }

  return "YES"
}

console.log(isAnagram("tacocat", "aaccott"))