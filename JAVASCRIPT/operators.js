// Operators in JS

// Arithmetic Operators

let a = 5;
let b = 5;

console.log("a = ", a, "b = ", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);

// Unary Operators

a++;
console.log("a = ", a);

b--;
console.log("b = ", b);

//  Diff in a++ & ++a
//  In a++ first value that is initially will be printed then addition will happen, then when we'll print the new value, then the value will be incremented.
//  In ++a first value will be incremented then printed

console.log("a ", a, "b = ", b);
console.log("++a = ", ++a);
console.log("b++ = ", b++);
console.log("b = ", b);

// Comparision Operators

let c = 5;
let d = 5;

console.log("c == d : ", c == d);

let e = 5;
let f = "5"; //string -> number then compared so true returns

console.log("e == f : ", e == f);

// == is the loose equality operator.
// It compares values but not types.
// So, "5" (string) is automatically converted to number → 5 == 5 →  true

//Equal to and type comparision operator ( === )

let g = 5;
let h = "5"; //string

console.log("g === h : ", g === h);

// === is the strict equality operator.
// It compares both value and type.
// g is a number, h is a string → Types are different → false

// Logical Operators

let x = 7;
let y = 6;

let cond1 = x > y;
let cond2 = x == 7;

// console.log("cond1 && cond 2 : ", cond1 && cond2);

let x = 7;
let y = 6;

let cond1 = x > y;
let cond2 = x == 6;

console.log("cond1 || cond 2 : ", cond1 || cond2);

let k = 7;
let l = 6;
console.log("!(7<6) ", !(k < l));

// Conditional Statements

// if statement

let age = 19;

if (age > 18) {
  console.log("You can go");
}

let mode = "dark";
let color;

if (mode == "dark") {
  color = "black";
}
if (mode == "light") {
  color = "white";
}
console.log(color);

// if - else statement
let mode = "dark";
let color;

if (mode == "dark") {
  color = "black";
} else {
  color = "white";
}
console.log(color);

// else - if statement

let num = 19;

if (num < 18) {
  console.log("Junior");
} else if (num > 60) {
  console.log("Senior");
} else {
  console.log("Middle");
}

// Ternary Operators

let card = 19;

let result = card >= 18 ? "Adult" : "Teenager"; //simpler, compact if-else

console.log(result);

// Switch - Statements

const expr = mangoes;

switch (expr) {
  case "apple":
    console.log("");
    break;
  case "oranges":
    console.log("");
    break;
  default:
    console.l("");
}
