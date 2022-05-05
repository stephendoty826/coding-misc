
let arr = [4, 1, 30, 5, 11]

function getMaxSum(numbers) {
    
  let sortedArr = numbers.sort((a, b)=> a - b)
  
  let maxSum = 0
  
  for(let i = 1; i < sortedArr.length; i++){
      maxSum += sortedArr[i]
  }
  
  return maxSum
}

console.log(getMaxSum(arr))