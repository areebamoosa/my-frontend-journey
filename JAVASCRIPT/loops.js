// LOOPS in JS
// loops are used to execute a piece of code again & again

// for loop

for (let i = 0; i <= 500; i++) {
  console.log("Areeba Moosa");
}

// Calculate the sum of 1 to 5

let sum = 0;
for (i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log("sum = ", sum);

// Print 1 to 5

for (let i = 1; i <= 5; i++) {
  console.log("i = ", i);
}

console.log(i);
// here the value of i will be undefined, because i in the loop is a let type, and let is a block scope variable whose value is only defined inside the region.

// Print 1 to 5

for (let i = 1; i >= 0; i++) {
  console.log("i = ", i);
}

// while - loop

let x = 6;
while (x <= 5) {
  console.log("x= ", x);
  x++;
}

// do - while loop
// this loop executes atleast one time and then checks the condition

y = 6;

do {
  console.log("y = ", y);
  y++;
} while (y <= 5);

// for-of loop

let str = "AreebaMoosa";
let size = 0;

for (let i of str) {
  console.log("i = ", i);
  size++;
}

let a = [1, 2, 3, 4, 5];
for (let val of a) {
  console.log(val);
}

console.log("Size = ", size);

//  for - in loop
// The for in loop is used to iterate over the properties of an object. It only iterate over keys of an object which have their enumerable property set to “true”.

let student = {
  fullName: "Areeba Moosa",
  age: 19,
  cgpa: 3.1,
  isPass: true,
};

for (let key in student) {
  console.log("Key = ", key, " & Value = ", student[key]);
}

// Choosing the Right Loop:

// Use for loop when the number of iterations is known.
// Use while loop when the condition depends on dynamic factors.
// Use do-while loop to ensure the block executes at least once.
// Use for...in loop to iterate over object properties.
// Use for...of loop for iterating through iterable objects.