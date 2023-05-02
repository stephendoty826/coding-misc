// Looping a Triangle
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

// let phrase = ""

// for(let i = 0; i < 7; i++){
//   phrase += "*"
//   console.log(phrase)
// }




// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// for(let i = 1; i < 100; i++){

//   let phrase = "";

//   phrase += i % 3 === 0 ? "Fizz" : "";
//   phrase += i % 5 === 0 ? "Buzz" : "";

//   console.log(phrase || i);
// }




// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #

// let size = 8;

// let chessboard = "";

// // outer loop for every row
// for(let outerIdx = 1; outerIdx <= size; outerIdx++){
//   // inner loop for every character
//   for(let innerIdx = 0; innerIdx < size/2; innerIdx++){
//     // if outerIdx is odd, add " #" (space with pound sign after)
//     if(!(outerIdx % 2 === 0)){
//       chessboard += " #"
//     }
//     // if outerIdx is even, add "# " (pound sign with space after)
//     else{
//       chessboard += "# "
//     }
//   }
//   chessboard += "\n"
// }

// console.log(chessboard)