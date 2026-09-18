// Input variables
let age = 20;
let isStudent = true;
let hasCouponCode = false;

// 1. Using comparison operator (>=) and logical AND (&&)
// Rule: Must be a student AND under 25 years old
let qualifiesForStudentDiscount = isStudent && (age < 25);

// 2. Using logical OR (||)
// Rule: Gets a discount if eligible for student discount OR has a valid coupon code
let getsDiscount = qualifiesForStudentDiscount || hasCouponCode;

// 3. Using logical NOT (!)
// Rule: Full price applies if NOT getting a discount
let paysFullPrice = !getsDiscount;

// --- Output Results ---
console.log("Qualifies for Student Discount: " + qualifiesForStudentDiscount); // true
console.log("Receives Any Discount: " + getsDiscount);                       // true
console.log("Pays Full Price: " + paysFullPrice);                             // false