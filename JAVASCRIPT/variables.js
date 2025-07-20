// Variables in JavaScript

// String Variable
fullName = "Areeba Moosa";
console.log("fullName");
// In double qoutes, the value inside will  be printed, but if we want to print a value inside the variable then we have to use no quotation marks.
console.log(fullName);

// Number Variable
age = 19;
console.log(age);

// Null Variable
x = null;

// Undefined Variable
y = undefined;

// Boolean type Variale
isFollow = true;
console.log(isFollow);

// Var, Let & const keyword

var age = 90;
var age = 100;
// The value of a var can be changed during the execution of a program. Here the value 100 will be printed since we updated it.
console.log(age);

let num = 30;
let num = 40;
// let num = 50 , this shows error because we cannnot redeclare same variable again in let, we can only update it.
console.log(num);

// in order to redclare the same named variable using let, we will do this

{
let num = 30;
console.log(num);
}

{
let num = 30;
console.log(num);
}
// since let is a block scope var, so we declare it inside brackets like this, now it will show no error.


// const width = 90;
// const width = 100;
// console.log(width);
// the error will occur at browser, since we can neither update nor redeclare a const value.

const PI = 3.14;
console.log(PI);

// 

let a;
console.log(a);
// by default any variable declared usig let which have no value assigned, then it will be undefiend


// const b;
// console.log(b);
// this will show an error since a const var must be assigned a value at the time of its declarartion

// DATA TYPES in JS

// Primitive Data Types : 
// These are 7 Primitive Data Types : Number, String, Boolean, Undefined, Null, BigInt, Symbol


// typeof null is object

let x = BigInt("123");
console.log(x);
// bigint jahn p hota hy usk output mn last mn apko (n) nazer ayega

let y = Symbol("Hello!")

// Non - Primitive Data Types : 
// Objects : collection of values

const student = {
    fullName : "Areeba Moosa",
    age : 19,
};

// To access any key in a object, here are the two ways to do it.

console.log(student["age"]);
// or
console.log(student.age);

// to redeclare a value in obj

student["age"] = student["age"] + 1;
student["fullName"] = "Rahul Kumar";

console.log(student.age);
console.log(student.fullName);

// 

// Var & Let

var a = 5;
var b = 5;
var c = "Areeba"

console.log(a + b)

console.log(typeof a, typeof b, typeof c)

// 
{
    let a = 66;
    console.log(a)
}
console.log(a)

{
    let b = 66;
    console.log(a)
}
console.log(b)

// Primitive Data Types

let x ="Areeba Moosa";
let y = 19;
let z = 20;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x,typeof y,typeof z,typeof p, typeof q, typeof r)

// type of null is object and not null. All of these are Primitive Data Types

// Objects

let o = {
    "Name" : "Areeba Moosa",
    "Job Code" : 164,
    "is_pretty" : true
}

console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);