let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate");
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
console.log("Last Index Of:", index);

console.log("Index Of:", text.indexOf("locate"));
// The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:

console.log("Search:", text.search("occurs"));

console.log("Match:", text.match("cate"));

console.log("includes:", text.includes("locate"));
// if present, it returns true, otherwise false.

console.log("startsWith:", text.startsWith("Please"));

console.log("endsWith:", text.endsWith("!"));
