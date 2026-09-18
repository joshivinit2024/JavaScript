
// 1. Object
let emp={
    name:"Vinit",
    age:32,
    dept : "IT" 
};
console.log("Object: " + emp);
console.log("employee name: " +  emp.name);

// Array
let fruits=["Mango", "Banana", "Apple", "Grapes"];
console.log("Array: " + fruits);
console.log("First fruit: " + fruits[0]);
// console.log("Second fruit: " + fruits);

// function
function add(a,b){
    return a+b;
}
console.log("Addition: " + add(5, 3));

function greet() {
    console.log("Hello Vinit!");
}

greet();