
let nums = [1, 3, 5, 8, 10, 13, 17, 28, 49, 55, 64, 75, 90]
// arr = [1, 3, 5, 8, 10, 13, 17, 28, 49, 55, 64, 75, 90]
//                        T   P  
//        0  1  2  3  4   5   6   7   8   9   10  11  12                                  

const search = function(nums, target){ // target = 13
  let arr = nums // arr = [1, 3, 5, 8, 10, 13, 17, 28, 49, 55, 64, 75, 90]
  let pivot = Math.floor(arr.length/2) // pivot = 6
  let index = pivot // index = 6

  while(arr.length > 0){ // arr.length is 12
    if(arr[pivot] < target){ 
      arr = arr.slice(pivot + 1) 
      pivot = Math.floor(arr.length/2) 
      index += (pivot + 1) //todo adjust how index is tracked
    }
    else if(arr[pivot] > target){
      arr = arr.slice(0, pivot)
      pivot = Math.floor(arr.length/2)
      index -= (pivot) //todo adjust how index is tracked
    }
    else if(arr[pivot] === target){
      return [index, nums.indexOf(arr[pivot])]
    }
  }
  return -1
}

console.log(search(nums, 13))