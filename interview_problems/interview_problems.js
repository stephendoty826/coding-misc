
// // PathAI assessment question 1

// // Below logs is an array of time logs for signing in and signing out of a system. They are written in the following format: employeeID, timestamp, sign-in or sign-out

// // If given a list of logs in no particular order, write a function called processLogs that takes in an array of logs (type of strings) and maxSpan. The function should return an array of logs where the time between signing in and signing out for that employee is less than or equal to the maxSpan. 

// let logs = ["60 12 sign-in", "80 25 sign-out", "80 10 sign-in", "130 15 sign-out",  "10 20 sign-in","60 20 sign-out", "130 12 sign-in", "10 50 sign-out"]

// function processLogs(logs, maxSpan) {

//   let arr = []
//   let cache = {}
//   let logoutCache = {}

//   logs.forEach(log=>{
//       let splitLog = log.split(" ")

//       if(cache[splitLog[0]]){
//           logoutCache[splitLog[0]] = Math.abs(parseInt(splitLog[1]) - parseInt(cache[splitLog[0]]))
//       }else{
//           cache[splitLog[0]] = parseInt(splitLog[1])
//       }
//   })

//   console.log(logoutCache)

//   const employeeIDs = Object.keys(logoutCache)

//   employeeIDs.forEach(ID => {
//       if(logoutCache[ID] <= maxSpan){
//           arr.push(ID)
//       }
//   })

//   arr.sort((a, b) => {
//       a = parseInt(a)
//       b = parseInt(b)

//       if(a < b){
//           return -1
//       }
//       else if(b < a){
//           return 1
//       }
//       else{
//           return 0
//       }
//   })

//   return arr
// }

// console.log(processLogs(logs, 20))

// employee_schedules = [
//   ["00:00-05:30"],
//   ["00:00-05:00", "08:00-22:00"],
//   ["00:00-12:30"]
// ]

// function find_meeting_slot(num_slots, employee_schedules){



// }

// arr3 = []

// let arr1 = ["00:00-02:30", "05:30-09:45", "11:00-3:15", "17:15-20:45"]

// arr1.forEach(timeString=>{
//   arr3.push(timeString.split("-"))
// })

// let availableTimes = []

// for(let i=0; i < arr3.length; i++){
//   if(i === 0 && arr3[0][0] !== "00:00"){
//     availableTimes.push([`00:00-${arr3[i][0]}`])
//     availableTimes.push([`${arr3[i][1]}-${arr3[i+1][0]}`])
//   }
//   else if(i < arr3.length - 1 && arr3[i+1][1] !== "24:00"){
//     availableTimes.push([`${arr3[i][1]}-${arr3[i+1][0]}`])
//     availableTimes.push([`${arr3[i+1][1]}-24:00`])
//   }

// }



// console.log(availableTimes)





// console.log(arr3)



// console.log(arr3)



// arr3.push(23 - parseInt(arr2[0]))

// arr3.push(60 - parseInt(arr2[1]))

// if(arr3[1] === 60){
//   arr3[1] = 00

//   arr3[0] = arr3[0] + 1
// }

// arr3 = arr3.join(":")

// console.log(arr3)



// DAILY CODING PROBLEM

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

/**
 * [10, 15, 3, 7]
 *   |
 *       |
 */

// arr = [15, 10, 3, 6, 9, 4, 0]

// function algo(arr, k){
//   for(let i = 0; i < arr.length - 1; i++){
//     for (let j = i + 1; j < arr.length; j++){
//       if(arr[i] + arr[j] === k){
//         return true
//       }
//     }
//   }
//   return false
// }

// console.log(algo(arr, 17))







// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?




//open and closing bracket problem

  





