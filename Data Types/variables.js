// 1. CONST (Constant - Never changes)
const birthYear = 2000;
// birthYear = 2005; // ❌ ERROR! You cannot change a const.


// 2. LET (Can change over time)
let score = 10;
score = 15; // ✅ OK! score is now 15.


// 3. VAR (Avoid this! It escapes where it belongs)
if (true) {
  var leakySecret = "I am visible everywhere!";
  let safeSecret = "I stay inside this block!";
}

console.log(leakySecret); // Output: "I am visible everywhere!" (Unsafe)
// console.log(safeSecret); // ❌ ERROR! Safely hidden inside the block.

// Rules to remember:

// Use const for values that stay fixed.

// Use let for values that change.

// Forget var exists in modern code.