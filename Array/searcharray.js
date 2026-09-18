const fruits = ["Apple", "Orange", "Apple", "Mango"];

// 1. indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log("Index of Apple:", fruits.indexOf("Apple"));

// 2. lastIndexOf() - Returns the last index at which a given element can be found in the array, or -1 if it is not present.
console.log("Last index of Apple:", fruits.lastIndexOf("Apple"));

const numbers = [1, 2, 3, 4, 5];

// 3. find() - Returns the value of the first element in the array that satisfies the provided testing function.
const foundNumber = numbers.find(num => num > 3);
console.log("First number greater than 3:", foundNumber);

// 4. findIndex() - Returns the index of the first element in the array that satisfies the provided testing function, or -1 if it is not present.
const foundIndex = numbers.findIndex(num => num > 3);
console.log("Index of the first number greater than 3:", foundIndex);

// 5. findLast() - Returns the value of the last element in the array that satisfies the provided testing function.
const foundLastNumber = numbers.findLast(num => num > 3);
console.log("Last number greater than 3:", foundLastNumber);

const mixedArray = [1, "two", 3, "four", 5];
console.log("demoinclude",mixedArray.includes("two")?"Yes":"No");



