//Functions !!!

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

//Task 3
//In this task we have to write a JavaScript function that accepts a list of country names as input and returns the longest
//country name as output.
//Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"]).
//Expected output : "United States of America"

// function Longest_Country_Name(arr) {
//   if (arr.length === 0) {
//     return "No country name!";
//   }
//   let longestElement = arr[0];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i].length > longestElement.length) {
//       longestElement = arr[i];
//     }
//   }
//   return longestElement;
// }

// console.log(
//   Longest_Country_Name(["Australia", "Germany", "United States of America"])
// );

//Task 4
//In this task we have to Write a JavaScript function that takes an array of numbers and finds the second lowest and second
//greatest numbers, respectively.
//Sample array : [1,2,3,4,5]
//Expected Output : 2,4

// function findExactArrays(arr) {
//   let sortedArr = arr.sort((a, b) => a - b);
//   let secondLowest = sortedArr[1];
//   let secondGreatest = sortedArr.length - 1;
//   return [secondLowest, secondGreatest];
// }

// console.log(findExactArrays([1, 2, 3, 4, 5]));

//Task 5
//In this task we have to write a JavaScript function that accepts a string as a parameter and converts the first letter of
//each word into upper case.
//Example string: "the quick brown fox".
//Expected output:"The Quick Brown Fox".

//First way.

// function convertToUpperCase(str) {
//   let splittedStr = str.split(" ");
//   for (let i = 0; i < splittedStr.length; i++) {
//     splittedStr[i] = splittedStr[i][0].toUpperCase() + splittedStr[i].slice(1);
//   }
//   return splittedStr.join(" ");
// }

// console.log(convertToUpperCase("the quick brown fox"));

// Second way.

// function convertToUpperCase(str) {
//   return str
//     .split(" ")
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join(" ");
// }
// console.log(convertToUpperCase("the quick brown fox"));

//Task 6
//In this task we have to write a JavaScript function that returns a string that has letters in alphabetical order.
//Example string : 'webmaster'.
//Expected Output : 'abeemrstw'.

function alphabeticalOrder(str) {
  let sorted = str.toLowerCase().split("").sort().join("");

  return sorted;
}

console.log(alphabeticalOrder("webmaster"));
