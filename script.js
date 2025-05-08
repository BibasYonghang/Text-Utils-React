// let str = "bib";
// if(str === str.split("").reverse().join("")){
//     console.log(`${str} is a Palindrome.`);
// }else{
//     console.log(`${str} is not a Palindrome.`)
// }

// count the vowels in the string;

// let str ="Bibas";
// let vowels = 0;
// for (let i of str){
//     if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
//         vowels = vowels + 1;
//     }
// }

// console.log(`The Number of Vowels in The Given String is ${vowels}.`);

// Write a function to find the factorial of a number (n! = n * (n-1) * (n-2) * ... * 1).

// function factorialNum(num) {
//     let facto = 1;
//     for (let i = num; i >= 1; i--){
//         facto = facto * i
//     }
//     return facto;
// }

// console.log(factorialNum(10));



// function factorialNum(n){
//     let facto = 1;
//     let i = n;
//     while(i>= 1) {
//         facto = facto * i;
//         i--;
//     }
//     return facto;
// }
// console.log(factorialNum(5));


// let facto = 1;
// let num = 10;
// for(num;num>= 1;num--){
//     facto *= num;
// }

// console.log(facto);

// Example: [4, 1, 9, 2] => 9



// js
// Copy
// Edit
// // Example: 5 => [0, 1, 1, 2, 3]
// Check if Two Strings are Anagrams
// Write a function that checks if two strings are anagrams of each other (contain the same letters in any order).

// js
// Copy
// Edit
// // Example: "listen" & "silent" => true
// Remove Duplicates from an Array
// Write a function that removes duplicate values from an array.

// js
// Copy
// Edit
// // Example: [1, 2, 2, 3, 4, 4] => [1, 2, 3, 4]
// Flatten a Nested Array
// Write a function th flattens a nested array (array within an array) into a single array.

// js
// Copy
// Edit
// // Example: [1, [2, [3, 4]]] => [1, 2, 3, 4]
// Capitalize the First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a given sentence.

// js
// Copy
// Edit
// // Example: "hello world" => "Hello World"

// js
// Copy
// Edit
// // Example output: 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", ...

// js
// Copy
// Edit
// // Example: "aabbcddf" => "c"
// Sum of All Numbers in a Nested Object
// Write a function that sums all the numbers in a nested object (including objects within objects).

// js
// Copy
// Edit
// // Example: { a: 1, b: { c: 2, d: { e: 3 } } } => 6
// Check if an Array is Sorted
// Write a function that checks if an array is sorted in ascending order.

// js
// Copy
// Edit
// // Example: [1, 2, 3, 4] => true, [4, 2, 1] => false
// Implement a Custom map() Function
// Write a custom map() function that works like the built-in Array.prototype.map() method.

// js
// Copy
// Edit


// Find the Largest Number in an Array
// Write a function that finds the largest number in an array of numbers.
// // Example: customMap([1, 2, 3], x => x * 2) => [2, 4, 6]


// let arr = [1,2,3,4,5,6,7,8,9,10];
// let largestNumber = Math.max(...arr);
// console.log(largestNumber);


// Fibonacci Sequence (first N numbers)
// Write a function that returns the first N numbers of the Fibonacci sequence.

// 🔵 Advanced Level
// FizzBuzz
// Write a function that prints numbers from 1 to 100, but for multiples of 3, print "Fizz", for multiples of 5, print "Buzz", and for multiples of both, print "FizzBuz".

// function fizzBuzz(){
//     for (let i = 1; i<=100; i++){
//         if (i % 3 == 0 && i % 5 == 0){
//             console.log("FizzBuzz");
//         }else if(i % 3 == 0){
//             console.log("Fizz");
//         }else if(i % 5 == 0){
//             console.log("Buzz");
//         }else{
//             console.log(i);
//         }
//     }
// }
// console.log(fizzBuzz());

// Find the First Non-Repeating Character
// Write a function that finds the first non-repeating character in a string.

function nonRepeatedChar(str){
    let result = []
    for (let i of str){
        result = result.append(i);
        if (!result.includes(i)){
            console.log(i);
        }
    }
}

console.log(nonRepeatedChar("bibas"));