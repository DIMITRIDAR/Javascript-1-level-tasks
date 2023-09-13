//Task 1
//In this task we have to write a JavaScript function that accepts two arguments, a string and a letter and the function will
//count the number of occurrences of the specified letter within the string.
//Sample arguments : "w2resource.com" , "o";Expected output: 2.

/Erti xerxi

// function countOccurrences(string,char) {
//     let counter =0;
//     for(i=0; i < string.length; i++){
//         if(string[i] === char) {
//             counter++
//         }
//     }
//     return counter
// }

// console.log(countOccurrences("w3recources.com", "o"))

//Meore xerxi

// function countOccurrences(string,char) {
//     let answer = string.split("").reduce((counter, currentValue) =>{
//         if(currentValue === char) {
//             return ++counter
//         }
//         return counter
//     }, 0)
//     return answer
// }

// console.log(countOccurrences("w3recources.com", "o"))
