// MINIMUM: Write a function min() that takes two arguments and returns their minimum value.

// function min(num1, num2){
//   return num1 < num2 ? num1 : num2;
// }

// console.log(min(0, 10));
// console.log(min(0, -10));
// console.log(min(10, 10));




// RECURSION: Write a recursive function isEven() that takes a positive integer and returns a boolean value determining whether or on that given integer is even. NOTE: Zero is even; one is odd; for any other number, its evenness is the same as N - 2.

// function isEven(num){

//   if(num < 0){
//     num = num * -1
//   }

//   // end condition for even number
//   if(num === 0){
//     return true;
//   }
//   // end condition for odd number
//   if(num === 1){
//     return false;
//   }

//   return isEven(num - 2);
// }





// BEAN COUNTER: Write a function countBs() that takes a string and returns the number of capital Bs in said string. 

function countBs(phrase){

  return countChar(phrase, "B");
}

console.log(countBs("BsomeBthing"));


function countChar(phrase, char){
  let count = 0;

  for(letter of phrase){
    if(letter === char){
      count++;
    }
  }

  return count
}

// console.log(countChar("something happening", "g"));