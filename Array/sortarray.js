const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log("Original array:", fruits);

console.log("Sorted array in ascending order:", fruits.sort());

console.log("reverse sorted array in descending order:", fruits.reverse());

const months = ["Jan", "Feb", "Mar", "Apr"];

console.log("Sorted months:", months.sort());

const numbers = [40, 100, 1, 5, 25, 10];

console.log("Sorted numbers in ascending order:", numbers.sort((a, b) => a - b));

console.log("Sorted numbers in descending order:", numbers.sort((a, b) => b - a));  

console.log("Min array value:",Math.min(...numbers));

console.log("Max array value:",Math.max(...numbers));

