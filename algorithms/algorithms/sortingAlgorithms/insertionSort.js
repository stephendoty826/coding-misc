// Javascript program for insertion sort

// Function to sort an array using insertion sort

// [11, 12, 13, 5, 6 ] 
// i = 4
// j = 3
// key = 6
// function insertionSort(arr, n){ 
// 	let i, key, j;
// 	for (i = 1; i < n; i++){
// 		key = arr[i]; 
// 		j = i - 1; 

// 		/* Move elements of arr[0..i-1], that are
// 		greater than key, to one position ahead
// 		of their current position */
// 		while (j >= 0 && arr[j] > key){ 
// 			arr[j + 1] = arr[j]; // [5, 6, 11, 12, 13 ] 
// 			j--;
// 		}
// 		arr[j + 1] = key;
// 	}
// }

// Driver code
	let arr = [12, 11, 13, 5, 6]; // [5, 6, 11, 12, 13]
	let n = arr.length;

  let tempArr = [...arr]

	insertionSort(arr, n);
	// console.log(tempArr, arr)

  // JavaScript & TypeScript

// This code is contributed by Mayank Tyagi

// todo rewrite function from scratch
function insertionSort(arr, n){
  // 

}