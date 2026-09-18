const car = ["Toyota", "Honda", "Ford", "Chevrolet", "BMW"];
console.log("Car array:",car);

const points1 = new Array(100,25,98,45,77);
console.log("Points array:",points1);

console.log("length:",car.length);

console.log("toString:",car.toString());

console.log("At:",car.at(1));

console.log(car.pop());

console.log("After pop means delete last element:",car);

console.log(car.push("Mercedes"));

console.log("After push means add element at the end:",car);

console.log(car.shift());

console.log("After shift means delete first element:",car);

console.log(car.unshift("Nissan"));

console.log("After unshift means add element at the beginning:",car);

console.log("isArray means check if it's an array:",Array.isArray(car));

const concatarray = car.concat(points1);
console.log("Join two array:",concatarray);

console.log("Join two array with join method:",concatarray.join(" - "));

console.log("Reverse means reverse the order of elements:",concatarray.reverse());

console.log("Sort means sort the elements in ascending order:",concatarray.sort());

console.log("Sort means sort the elements in descending order:",concatarray.sort((a,b)=>b-a));

console.log("Splice means add or remove elements from an array:",concatarray.splice(2,3,"New Element"));

console.log("After splice means add or remove elements from an array:",concatarray);

console.log("Slice means extract a section of an array:",concatarray.slice(1,4));

console.log("After slice means extract a section of an array:",concatarray);

console.log("IndexOf means find the index of an element in an array:",concatarray.indexOf(98));

console.log("LastIndexOf means find the last index of an element in an array:",concatarray.lastIndexOf(98));    

console.log("flat means separate a nested array into a single array:",[1,2,[3,4,[5,6]]].flat());

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 10]);
console.log("New array after flatMap:", newArr);

console.log(car);
console.log("splicearray means add or remove elements from an array:",car.splice(1,2,"New Element"));
console.log("After splicearray means add or remove elements from an array:",car);

// console.log("toSpliced means convert an array to a string with a specified separator:",car.toSpliced(1,2,"New Element"));

const myArr2 = [1, 2, 3, 4, 5, 6];
const maparray=myArr2.map((i)=>{
    // console.log("i",i);
    return i * 2;
});
console.log("maparray:",maparray);

const filterarray=myArr2.filter((i)=>{
    return i > 3;
})
console.log("filterarray:",filterarray);


const maparray3=filterarray.map((i)=>{
    // console.log("i",i);
    return i * 3;
});
console.log("maparray3:",maparray3);

const reducearr=myArr2.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log("reducearr:",reducearr);

arrayofobjects = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jim", age: 35 }
];
// use map and filter to get the names of people who are older than 30