// Write algorithm that goes through a range of 1-25. If the number is divisible by 3, print fizz, if divisible by 5 print buzz, if divisible by both 3 and 5 print fizzbuzz. Otherwise print the number.

for(let i = 1; i <= 25; i++){
  let phrase = ''

  if(i % 3 === 0){
    phrase += "fizz"
  }
  if(i % 5 === 0){
    phrase += "buzz"
  }

  console.log(phrase.length === 0 ? i : phrase)
}