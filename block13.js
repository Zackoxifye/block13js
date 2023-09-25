// IS TRUTHY
// Use if/else statements to determine if the answers are true or false


if("I am a string"){
    console.log(true)
}else{
    console.log(false)
}

if(false){
    console.log("The boolean value true is truthy")
}else{
    console.log("The boolean value false is falsy")
}

if(null){
    console.log("The null value is truthy")
}else{
    console.log("The null value is falsy")
}

if(undefined){
    console.log("undefined is truthy")
}else{
    console.log("undefined is falsy")
}

if(0){
    console.log("The number 0 is truthy (another truthy number)")
}else{
    console.log("The number 0 is falsy (the only falsy number)")
}

if(""){
    console.log("The empty string is truthy (the only truthy string)")
}else{
    console.log("The empty string is falsy (the only falsy string)")
}

// NUMBER LINE
// Use if/else statements that takes the sum of 2 numbers and prints out one of the following results
// sum + " is less than -1000";
// sum + " is a negative number";
// sum + " is equal to 0";
// sum + " is larger than 0";
// sum + " is greater than 100";

let num1 = -5;
let num2 = 0;

let numToTest = num1 + num2;

if(numToTest >= 100){
    console.log(numToTest + " is greater than 100")
}else if(numToTest > 0){
    console.log(numToTest + " is greater than 0") 
}else if(numToTest === 0){
    console.log("0 is equal to 0")
}else if(numToTest < 0){
    console.log(numToTest + " is a negative number")
}else if(numToTest < -1000){
    console.log(numToTest + "is less than -1000")
}

// GREATER THAN 5
// Use if/else statements to determine if BOTH numbers are greater than or equal to 5

let num3 = 5;
let num4 = 5;

if(num3 >= 5 && num4 >= 5){
    console.log(true)
}else{
    console.log(false)
}

// PAIR AND COMPARE
// Use if/else statements and strict equality operators that compares 2 sets of values
// Print true if at least one of them are equal to each other

param1A = "cake";
param1B = "cake";
param2A = "pie";
param2B = "pie";

if(param1A === param1B || param2A === param2B){
    console.log(true)
}else{
    console.log(false)
}