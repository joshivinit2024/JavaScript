const numbers = [10, 20, 30, 40, 50];

// 1. map
const squared = numbers.map(n => n * n);
console.log("Map:", squared); // [100, 400, 900, 1600, 2500]

// 2. filter
const greaterThan25 = numbers.filter(n => n > 25);
console.log("Filter:", greaterThan25); // [30, 40, 50]

// 3. reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Reduce Sum:", sum); // 150

// 4. find & findIndex
console.log("Find > 25:", numbers.find(n => n > 25)); // 30
console.log("FindIndex > 25:", numbers.findIndex(n => n > 25)); // 2

// 5. some & every
console.log("Some > 40:", numbers.some(n => n > 40)); // true
console.log("Every > 5:", numbers.every(n => n > 5));  // true

// 6. forEach
console.log("ForEach:");
numbers.forEach((val, idx) => console.log(`Index ${idx}: ${val}`));