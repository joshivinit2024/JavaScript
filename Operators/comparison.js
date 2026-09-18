let a = 10;
let b = 20;

// ==========================================
// 1. EQUALITY & RELATIONAL COMPARISON OPERATORS
// ==========================================

// == (Loose Equality): Checks if values are equal (allows type conversion)
console.log("a==b: " + (a == b)); // false | 10 is not equal to 20

// != (Loose Inequality): Checks if values are NOT equal
console.log("a!=b: " + (a != b)); // true | 10 is indeed not equal to 20

// === (Strict Equality): Checks if values AND types are identical
console.log("a===b: " + (a === b)); // false | Both are numbers, but values differ

// !== (Strict Inequality): Checks if values OR types are not identical
console.log("a!==b: " + (a !== b)); // true | Values are different

// > (Greater Than): Checks if left value is strictly larger than right
console.log("a>b: " + (a > b)); // false | 10 is not greater than 20

// < (Less Than): Checks if left value is strictly smaller than right
console.log("a<b: " + (a < b)); // true | 10 is less than 20

// >= (Greater Than or Equal): Checks if left value is larger or equal
console.log("a>=b: " + (a >= b)); // false | 10 is neither greater than nor equal to 20

// <= (Less Than or Equal): Checks if left value is smaller or equal
console.log("a<=b: " + (a <= b)); // true | 10 is less than 20