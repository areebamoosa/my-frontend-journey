// Functions in JS

// Function Definition having no parameters
function myFunction() {
  console.log("Welcome to A.M Restaurant!");
}
// Function call
myFunction();

//Function Definition having parameters.
function myFunction(msg) {
  console.log(msg);
}

//Function call
myFunction("Welcome");

// Function : 2 num sum

function sum(x, y) {
  console.log(x + y); // Directly prints the sum
}
sum(5, 3);

// Function with return keyword

function sum(x, y) {
  s = x + y;
  return s; // Returns the sum instead of printing it
}
let val = sum(5, 3);
console.log(val); // Prints the returned value

//
function sum(x, y) {
  s = x + y;
  console.log("Before return : ");
  return s;
  console.log("After return : "); // This line will not be executed
  // whatever we write after return keyword, it never executes.
}
let val = sum(5, 3);
console.log(val);

//Arrow Functions

const arrowSum = (a, b) => {
  console.log(a + b); // Arrow function that adds two numbers
};
arrowSum(3, 4);

//we can also write arrow function without passing parameters.

const printHello = () => {
  console.log("Hello");
};
printHello();

// forEach loop in Arrays

let arr = [1, 2, 3, 4, 5];

arr.forEach(function printVal(val) {
  console.log(val); // Prints each value in the array
});

// Parameters inside call back function

let arr = ["Karachi", "Islamabad", "Hyderabad"];

arr.forEach(function printVal(val, index, arr) {
  console.log(val, index, arr); // Prints value, index, and the full array
});

// Map Method

// let arr = [12,34,60];

let newArr = arr.map((val) => {
  return val; // Returns the same value (no transformation)
});

// Filter

let arr = [1, 2, 3, 4, 5];

let evenArr = arr.filter((val) => {
  return val % 2 !== 0; // Filters out even numbers; keeps only odd
});

console.log(evenArr);

// Reduce Method

// sum using reduce
let arr = [1, 2, 3, 4];

const output = arr.reduce((res, curr) => {
  return res + curr;
});

console.log(output);

// largest value using reduce

// let arr = [6,2,8,7];

const output = arr.reduce((res, curr) => {
  return res > curr ? res : curr; // Finds the maximum value
});

console.log(output);

//
// Functions are used to avoid making long changes manually each time in code.

// function nice(name){
//     console.log("Hey " + name + " you are nice")
//     console.log("Hey " + name + " you are good")
//     console.log("Hey " + name + " your dress is decent")
//     console.log("Hey " + name + " your glasses are good ")
// }
// nice("Areeba")
// nice("Sara")

function sum(a, b) {
  console.log(a + b); // Simple sum function with console.log
}

sum(3, 5);

// If we want to get this value of sum as output we would have to use return keyword.

function sum(a, b) {
  return a + b; // Returns the sum instead of printing
}

result = sum(3, 5);

console.log("The sum of these numbers is : ", result);

function sum(a, b, c = 3) {
  return a + b + c; // Uses default parameter for c if not provided
}

result1 = sum(3, 5); // c takes default value 3
result2 = sum(1, 2); // c takes default value 3
result3 = sum(2, 6, 6); // All parameters are given

console.log("The sum of these numbers is : ", result1);
console.log("The sum of these numbers is : ", result2);
console.log("The sum of these numbers is : ", result3);

// Undefined number

function sum(a, b, c = 3) {
  console.log(a, b, c);
  return a + b + c;
}

result = sum(3);
// Since value of b is not passed, so it will show undefined

console.log("The sum of these numbers is : ", result);
// NaN will show here (NaN: Not a Number) because undefined + number = NaN

//  Arrow Functions

const func1 = (x) => {
  console.log("I am an arrow function", x);
};

func1(34);
func1(80);
