//..................................................................
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

// function alphabeticalOrder(str) {
//   let sorted = str.toLowerCase().split("").sort().join("");

//   return sorted;
// }

// console.log(alphabeticalOrder("webmaster"));

//Task 7
//In this task we have to write a JavaScript function that generates all combinations of a string.
//Example string: "dog".
//Expected output: "d, do, dog, o, og , g."

// function allCombinations(word) {
//   let combinations = [];
//   let length = word.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = i; j < length; j++) {
//       combinations.push(word.slice(i, j + 1));
//     }
//   }

//   return combinations.join(" , ");
// }

// console.log(allCombinations("dog"));

//Task 8
//In this task we have to write a JavaScript function to find the first not repeated character.
//Sample arguments : "abacddbec".
//Expected output: "e".

// function notRepeated(str) {
//   const charFrequency = {};

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     // charFrequency[char] = (charFrequency[char] || 0) + 1;

//     if (charFrequency[char]) {
//       charFrequency[char]++;
//     } else {
//       charFrequency[char] = 1;
//     }
//   }

//   for (let char in charFrequency) {
//     if (charFrequency[char] === 1) {
//       return char;
//     }
//   }

//   return charFrequency;
// }

// console.log(notRepeated("abacdddbec"));

//.........................................................................

//Arrays !!!

//Task 1
//In this task we have to Find the Maximum Subarray Sum:
//Write a function that takes an array of integers as input and finds the contiguous subarray
//within the array that has the largest sum. Return the sum of that subarray.
//For example, given the array [-2, 1, -3, 4, -1, 2, 1, -5, 4], the function should return 6,
// which corresponds to the sum of the subarray [4, -1, 2, 1].

// function sumOfSubArray(arr) {
//   let maxSumOfSubArray = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       sum = sum + arr[j];
//       if (sum > maxSumOfSubArray) {
//         maxSumOfSubArray = sum;
//       }
//     }
//   }

//   return maxSumOfSubArray;
// }

// console.log(sumOfSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//The second way is Cadane's algorithm

//Task2
//Rotate Array: Write a function that rotates an array of n elements to the right by k steps.
//For example, given the array [1, 2, 3, 4, 5, 6, 7] and k = 3,
//the function should modify the array to become [5, 6, 7, 1, 2, 3, 4].

// function rotate(arr, k) {
//   for (let i = 0; i < k; i++) {
//     let poppedItem = arr.pop();
//     arr.unshift(poppedItem);
//   }

//   return arr;
// }

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

//Task 3
//In this task we have to Find Missing Number:
//Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the missing number.
//For example, given the array [3, 0, 1], the function should return 2.

//Task 4
//In this task we have to write a function that Merge Intervals: Given an array of intervals,
//merge overlapping intervals and return the resulting merged intervals.
//For example, given the intervals [[1,3],[2,6],[8,10],[15,18]], the function should return [[1,6],[8,10],[15,18]].

//.........................................................................

///Objects !!!

//Task 1
// Object Deep Comparison: Write a function that compares two objects deeply and returns true if they are equal,
//and false otherwise. The function should handle nested objects and arrays.
//For example, given the objects c, the function should return true.

// let obj1 = {
//   name: "temo",
//   age: 18,
// };

// let obj2 = {
//   name: "temo",
//   age: 18,
// };

// console.log(obj1 === obj2);

// function comparison(obj1, obj2) {
//   const entriesObj1 = Object.entries(obj1);
//   const entriesObj2 = Object.entries(obj2);

//   if (entriesObj1.length !== entriesObj2.length) {
//     return false;
//   }

//   for (let i = 0; i < entriesObj1.length; i++) {
//     const [key1, value1] = entriesObj1[i];
//     const [key2, value2] = entriesObj2[i];

//     if (key1 !== key2) {
//       return false;
//     }
//     if (typeof value1 === "object" && typeof value2 === "object") {
//       if (!comparison(value1, value2)) {
//         return false;
//       } else if (value1 !== value2) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
// console.log(comparison({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));

//Another way to solve this task

// function comparisonStringiFy(obj1, obj2) {
//   return JSON.stringify(obj1) === JSON.stringify(obj2);
// }

// console.log(comparisonStringiFy({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));

//JSON.stringify changes arrays and objects into strings, and JSON.parse makes to change string into array or object.

// let obj = {
//   name: "Bob",
//   age: 27,
// };

// console.log(JSON.stringify(obj));   ==> changing object into string

//Task 2

//Object Transformation: Write a function that takes an array of objects and transforms them into a single object.
//The transformation should use a specific property of each object as the key and another property as the value.
//For example, given the array [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }], and using the id property as the key
//and the name property as the value, the function should return { 1: 'Alice', 2: 'Bob' }.

//Task 3
//Object Serialization: Write a function that serializes an object into a string representation.
//The serialization should handle nested objects and arrays. For example, given the object { a: 1, b: { c: [2, 3] } },
//the function should return the string "{ a: 1, b: { c: [2, 3] } }".

//Task 4
// Object Prototype Extension: Write a function that extends an object's prototype with additional methods.
//The additional methods should perform specific operations on the object's properties.
//For example, extend the Array prototype with a method called sum() that calculates the sum of all elements in the array.

// Array.prototype.sum = function () {
//   let sum = 0;
//   for (let i = 0; i < this.length; i++) {
//     sum = sum + this[i];
//   }

//   return sum;
// };

// let numbers = [1, 2, 3, 4, 5];
// let numbers1 = [3, 4, 5, 6, 7];

// console.log(numbers1.sum());

//Task 5
//Object Inheritance: Implement a class hierarchy using object-oriented programming principles.
//Create a base class with common properties and methods, and then create child classes that inherit from the base class
//and add their own specific properties and methods.

//.....................................................

//Conditionals/Loops !!!

//Task 1
//Palindrome Checker.Write a program that prompts the user for a string and checks if it is a palindrome.
//A palindrome is a word, phrase, number, or other sequence of characters that reads the same backward as forward.
//Ignore spaces, punctuation, and letter casing. Use conditional statements and loops to implement this behavior.

//Task 2
//Fibonacci Sequence. Write a program that prompts the user for a number and generates the Fibonacci sequence up
//to that number. The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones.
//Use a loop and conditional statements to generate the sequence.

// function Fibonacci(number) {
//   if (number <= 0) {
//     return "Wrong input";
//   } else {
//     let fibonacci = [0, 1];

//     while (number > fibonacci[fibonacci.length - 1]) {
//       let newItem =
//         fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
//       if (newItem > number) {
//         break;
//       }
//       fibonacci.push(newItem);
//     }
//     return fibonacci;
//   }
// }

// let input = parseInt(prompt("Enter the number"));
// console.log(Fibonacci(input));

//Task 3
//Diamond Pattern.Write a program that prompts the user for a number and prints a diamond pattern using asterisks (*)
//and spaces. The number represents the number of rows in the diamond (which should be odd).
//Use nested loops and conditional statements to achieve this pattern.

//Task 4
//Prime Number Generator.Write a program that prompts the user for a range of numbers and generates
//all prime numbers within that range. Use a loop and conditional statements to check if each number
//is prime and output the prime numbers.

// function isPrime(number) {
//   if (number <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// function generatePrimeNumber(start, end) {
//   let primeNumbers = [];

//   for (let i = start; i <= end; i++) {
//     if (isPrime(i)) {
//       primeNumbers.push(i);
//     }
//   }
//   return primeNumbers;
// }

// console.log(generatePrimeNumber(1, 100));

//Task 5
//Guessing Game.Write a program that generates a random number between 1 and 100 and lets the user guess the number.
//Provide feedback to the user, indicating whether the guessed number is too high or too low. Use a loop and conditional
//statements to implement the game, allowing the user to keep guessing until they guess the correct number.

//.............................................

//Algorithms !!!

//Task1
//Anagram Checker
//Write a function that takes two strings as input and determines whether they are anagrams of each other.
//Anagrams are words or phrases that use the same characters in a different order.

// function isAnagram(str1, str2) {
//   str1 = str1.replaceAll(" ", "").toLowerCase();
//   str2 = str2.replaceAll(" ", "").toLowerCase();

//   if (str1.length !== str2.length) {
//     return false;
//   }

//   let sortedStr1 = str1.split("").sort().join("");
//   let sortedStr2 = str2.split("").sort().join("");

//   return sortedStr1 === sortedStr2;
// }

// console.log(isAnagram("bi  tc amp", "t   ibcamp"));

//Task 2
//Prime Number Generator.Write a function that takes a range of numbers as input and returns an array containing
//all prime numbers within that range.

//Task 3
//Sorting Algorithms.Implement sorting algorithms such as Bubble Sort, Insertion Sort,
//or Quick Sort. Write functions that take an array of numbers as input and sort the array in ascending order
//using the chosen algorithm.

//Task 4
// Binary Search. Write a function that takes a sorted array of numbers and a target number
//as input and performs a binary search to determine if the target number exists in the array.
// Return true if found, and false otherwise.

//Task 5
//Unique Elements. Write a function that takes an array of numbers as input and returns a new array containing
//only the unique elements of the original array. Remove any duplicate numbers.
