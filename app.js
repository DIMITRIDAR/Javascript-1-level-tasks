//Task 1
//In this task we have to write a JavaScript function that accepts two arguments, a string and a letter and the function will
//count the number of occurrences of the specified letter within the string.
//Sample arguments : "w2resource.com" , "o";Expected output: 2.

//First way to solve this task.

// function countOccurrences(str, char) {
//   let count = 0;
//   for (i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countOccurrences("w3recources.com", "o"));

//Another way to solve this task.

// function countOccurrences(string, char) {
//   let answer = string.split("").reduce((counter, currentValue) => {
//     if (currentValue === char) {
//       return ++counter;
//     }
//     return counter;
//   }, 0);
//   return answer;
// }

// console.log(countOccurrences("w3resources.com", "o"));

//Task 2
//In this task we have to write a JavaScript function to apply the Bubble Sort algorithm.
//Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
//Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

//One way to solve task 2.

// function bubbleSortAlgorithm(arr) {
//   return arr.sort((a, b) => b - a);
// }

// console.log(
//   bubbleSortAlgorithm([
//     12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213,
//   ])
// );

//Second way to solve task 2 .

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] < arr[j + 1]) {
//         //Swapping two values here
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(
//   bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
// );
