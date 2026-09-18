// Sample base strings to demonstrate various string methods
const text = "JavaScript";
const messyText = "   Hello World!   ";
const malformedStr = "\uD800"; // High surrogate without a matching low surrogate

// 1. String Length
console.log("length:",text.length);

// 2. String toUpperCase()
console.log("Uppercase:",text.toUpperCase());

// 3. String toLowerCase()
console.log("Lowercase:",text.toLowerCase());

console.log("CharAt:",text.charAt(1));

console.log("Char code:",text.charCodeAt(2));

console.log("Slice:",text.slice(4,10));

console.log("trim:",messyText.trim());

console.log("replace:",messyText.replace("Hello","Hi"));

console.log("Concatenate:",messyText.concat("",text));

console.log("toWellFormed:",messyText.toWellFormed());

console.log(text);
const splt=text.split("");
console.log("Split:",splt);

const messyText2 = "   Hello World!   ";
console.log("without trim:",messyText2);
console.log("with trim",messyText2.trim());