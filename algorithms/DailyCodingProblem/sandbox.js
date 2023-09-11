

let sortedArray = [1, 2, 3, 4]

let partiallySorted = [1, 2, 5, 6, 3, 4]

let unsortedArray = [1, 0, 9, 6, 9, 19, 10]



let startIndex; // index at start of window // 0
let endIndex; // index at end of window // 1
let smallestInt = unsortedArray[0]; // 0
let largestInt = unsortedArray[0]; // 9
let indexOfSmallestInt = 0; // 1
let indexOfLargestInt = 0; // 2

//          |
//[1, 0, 9, 6, 9, 19, 10]


//      |
//0, 9, 10, -1, 6, 9, 19, 10]

for(let i = 1; i < unsortedArray.length; i++){ // i = 3;

  let currentNum = unsortedArray[i]; // currentNum = 6;

  if(currentNum < smallestInt){ // evaluates to true
    smallestInt = currentNum; // smallestInt reset to currentNum
    indexOfSmallestInt = i;
    startIndex = 0; // must sort at least from beginning to i
    endIndex = i;
  }
  else if(currentNum < largestInt){
    if(indexOfLargestInt < startIndex){
      startIndex = indexOfLargestInt;
    }
    endIndex = i;
  }
  else{ // only if value is sorted properly
    largestInt = currentNum; // smallestInt reset to currentNum
    indexOfLargestInt = i;
  }
}
