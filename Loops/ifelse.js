let age=22;
if (age >18){
    console.log("You are an adult.");
}
else{
    console.log("You are a minor.");
}

let State= "California";
let District= "Los Angeles";
if (State === "California"){
    if (District === "Los Angeles"){
        console.log("You are in Los Angeles, California.");
    }
}
if(age > 18 && State === "California"){
    console.log("You are an adult in California.");
}