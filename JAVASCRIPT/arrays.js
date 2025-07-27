// ARRAYS in JS

// In JavaScript, an array is an ordered list of values. Each value is called an element, and each element has a numeric position in the array, known as its index. Arrays in JavaScript are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on.

let marks = [97, 89, 79, 20, 70];
console.log(marks);
console.log(marks.length);
//length is a property not a method
// property wo hoti hy jo value dety hy & method wo hota hy jo kch kam krta hy.

marks[3] = 99;
console.log(marks[3]);
console.log(marks);

// Looping over an array : Print all elements of an array.
// for loop

let arr = ["ibrahim", "meerub", "areeba"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let arr = ["ibrahim", "meerub", "areeba", "sara", "zara", "alexa"];
for (let i = 1; i < arr.length; i++) {
  console.log(arr[i - 1]);
}

// for - of loop

for (let el of arr) {
  console.log(el);
}

for (let el of arr) {
  console.log(el.toUpperCase());
}

// Array Methods

// Push Method
// The push() method adds the element to the end of the array.

let mart = ["apple", "banana", "grapes", "strawberry"];
mart.push("chips");
console.log(mart);

// Pop Method
// The pop() method removes an element from the last index of the array.

let deletedItem = mart.pop();
console.log(mart);
console.log(deletedItem);

// Array to String Method
// We have a builtin method toString() to converts an array to a string.

// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"];

// Convert array ot String
console.log(a.toString());

// Concat Method
// concat() creates a new array by joining two or more arrays.
// It does not change the original arrays (fruits and veg remain unchanged).
// The result is stored in mart, which includes all elements from fruits followed by all elements from veg.

let fruits = ["apple", "mango", "grapes", "nuts"];
let veg = ["cucumbers", "ladyfinger", "potato", "tomato"];

let mart = fruits.concat(veg);
console.log(mart);

// UnShift Method
// The unshift() method add the element to the starting of the array

let fruits = ["apple", "mango", "grapes", "nuts"];
fruits.unshift("mangoes");
console.log(fruits);

// Shift Method
// The shift() method removes the element from the first index of the array.
let fruits = ["apple", "mango", "grapes", "nuts"];

let val = fruits.shift();
console.log("Deleted : ", val);

// Slice Method
// slice(start, end) extracts a portion of the array from start index up to but not including end.
// It returns a new array.
// The original array remains unchanged.

let fruits = ["apple", "mango", "grapes", "nuts"];
console.log(fruits.slice(1, 2));
console.log(fruits); //doesnt change original array

// Splice Method : Add, remove, replace
// The splice() method removes or replaces the element from the array.

//Add Element
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.splice(2, 0, 101));
console.log(arr);

// Replace
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.splice(2, 1, 8));

// The splice() method returns the deleted items
console.log(arr);
//this changes the org array

//Delete Element

let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.splice(3, 1));
console.log(arr);

//

let arr = [1, 2, 3, 4];
console.log(arr.splice(2));
console.log(arr);
//this works as after the index 2 delete all the elements (that index inclusive)

//
let arr = [1, 2, 3, 4];
console.log(arr.splice());
console.log(arr);
//this will print the whole array and delete no value.

//

let arr = [1, 2, 4, 5, 6];
arr[0] = 566;
console.log(arr);
console.log(arr.length);
console.log(arr[2]);
console.log(arr[0]);

console.log(arr.toString());
// Converts array to a string

let arr = ["apple", "mango", "grapes", "nuts"];
// console.log(arr.join( " and "))
// Wherever there are commas, and will appear over there
// Joins all elements of the array into a string with " and " between them:
// Output: "apple and mango and grapes and nuts"
// join(separator) → Converts the array to a string using the given separator instead of commas. You can use " ", "-", " and ", etc.

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];

console.log(a1.concat(a2, a3));
// Returns a new array, does not change existing values

let b = [4, 9, 5, 1];
console.log(b.sort());

let c = [4, 9, 5, 1, 3, 6];
console.log(c.splice(1, 3));
// this will output number starting at index 1 till index 3

//
let num = [1, 2, 3, 4];
console.log(num.slice(2));
console.log(num.slice(1, 3));

//
let array = [1, 2, 3, 4, 5];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

array.forEach((value, index, arr) => {
  console.log(value, index, arr);
});

//

let obj = {
  a: 1,
  b: 2,
  c: 3,
};

// Use for in loop to iterate over all enumerable properties (keys) in the object
for (const key in obj) {
  // Check if the key is a direct property of obj (not inherited from prototype)
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    // Access the value using the key
    const element = obj[key];

    // Print the key and its value
    console.log(key, element);
  }
}

//

let arr = [1, 2, 3, 4, 5];
for (const value of arr) {
  console.log(value);
}

//

let js = [1, 2, 3, 4, 5];
let new_js = [];

for (let index = 0; index < js.length; index++) {
  const element = js[index];
  new_js.push(element ** 2); // Square each element and push it to new_js
}

console.log(new_js);

// Same result using map() — a cleaner and shorter way

let arr = [1, 2, 3, 4, 5];

let new_arr = arr.map((e) => {
  return e ** 2; // Square each element
});

console.log(new_arr);

// for loop: Manually iterates over each item, squares it, and stores in a new array.
// map(): A built-in array method that returns a new array by applying a function to each element.
// (e) => e ** 2: Arrow function that returns the square of each element.
//  Both methods give the same result, but map() is shorter, cleaner, and more readable.

//

const greaterThanThree = (e) => {
  if (e > 3) {
    return true;
  }
  return false;
};
console.log(arr.filter(greaterThanThree));

let arr2 = [1, 2, 3, 4];

const red = (a, b) => {
  return a * b;
};

console.log(arr2.reduce(red));
// reduce will do this => 1*2=2 =>2*3=6 =>6*4=24

Array.from("Areeba");
// this wil output this => {'A','r','e','e','b','a'};