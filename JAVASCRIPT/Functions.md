# Functions

Functions are blocks of code designed to perform a particular task.

They help avoid rewriting code multiple times.

---

## Function Definition with No Parameters

```javascript
function myFunction() {
  console.log("Welcome to A.M Restaurant!");
}

// Function call
myFunction();
```

## Function Definition with Parameters

```javascript
function myFunction(msg) {
  console.log(msg);
}

// Function call
myFunction("Welcome");
```

Example :

```javascript
//Function to Sum Two Numbers
function sum(x, y) {
  console.log(x + y); // Directly prints the sum
}
sum(5, 3);
```

## Function with Return Keyword

```javascript
function sum(x, y) {
  s = x + y;
  return s; // Returns the sum instead of printing it
}

let val = sum(5, 3);
console.log(val); // Prints the returned value
```

## Return Stops Execution

```javascript
function sum(x, y) {
  s = x + y;
  console.log("Before return : ");
  return s;
  console.log("After return : "); // This line will not be executed because any code written after return keyword will not be executed.
}
```

# Arrow Functions

### With Parameters

```javascript
const arrowSum = (a, b) => {
  console.log(a + b);
};

arrowSum(3, 4);
```

### Without Parameters

```javascript
const printHello = () => {
  console.log("Hello");
};

printHello();
```

## IIFE (Immediately Invoked Function Expression)

An IIFE is a function in JavaScript that runs immediately after it is created.

```js
(function () {
  console.log("IIFE is running!");
})();
// This function runs instantly without being called separately.
```

##  for Each Loop in Arrays

The `forEach` loop is used to run a function once for every element in an array.  
It’s great for quickly looping through arrays without writing a full loop.

```javascript
let arr = [1, 2, 3, 4, 5];

arr.forEach(function printVal(val) {
  console.log(val); // Prints each value in the array
});
```

## Parameters Inside Callback

```javascript
let arr = ["Karachi", "Islamabad", "Hyderabad"];

arr.forEach(function printVal(val, index, arr) {
  console.log(val, index, arr); // Prints value, index, and the full array
});
```

## Map Method

Creates a new array by applying a function to each element of the original array.

```javascript
let newArr = arr.map((val) => {
  return val; // Returns the same value (no transformation)
});
```

## Filter Method

Creates a new array with only the elements that pass a given test.

```javascript
let arr = [1, 2, 3, 4, 5];

let evenArr = arr.filter((val) => {
  return val % 2 !== 0; // Filters out even numbers; keeps only odd
});

console.log(evenArr);
```

## Reduce Method

Reduces an array to a single value by applying a function to each element in sequence.

```javascript
// Sum Using Reduce

let arr = [1, 2, 3, 4];

const output = arr.reduce((res, curr) => {
  return res + curr;
});

console.log(output);
```

```javascript
//Largest Value Using Reduce

const output = arr.reduce((res, curr) => {
  return res > curr ? res : curr; // Finds the maximum value
});

console.log(output);
```

## Default Parameters

```javascript
function sum(a, b, c = 3) {
  return a + b + c; // Uses default parameter for c if not provided
}

result1 = sum(3, 5); // c takes default value 3
result2 = sum(1, 2); // c takes default value 3
result3 = sum(2, 6, 6); // All parameters are given

console.log("The sum of these numbers is : ", result1);
console.log("The sum of these numbers is : ", result2);
console.log("The sum of these numbers is : ", result3);
```

## Undefined Parameter Example

```javascript
function sum(a, b, c = 3) {
  console.log(a, b, c);
  return a + b + c;
}

result = sum(3);
// Since value of b is not passed, so it will show undefined
console.log("The sum of these numbers is : ", result);
// NaN will show here (NaN: Not a Number) because undefined + number = NaN
```

## Hoisting

Hoisting in JavaScript is the default behavior where function declarations and variable declarations are moved to the top of their scope before code runs.

It means you can use functions and `var` variables before they are actually written in the code (but `let` and `const` are not hoisted the same way).

### Function Declarations

```javascript
sayHi(); // works fine

function sayHi() {
  console.log("Hello!");
}
// Function declarations are hoisted, so they work even before their definition
```

### Function Expressions

```javascript
sayHello(); // Error: Cannot access 'sayHello' before initialization

let sayHello = function () {
  console.log("Hi there!");
};
// Function expressions are NOT hoisted
```

### Variables

var is hoisted and initialized with undefined.

let and const are hoisted but not initialized, so using them before declaration causes an error.

```js
// Using var
console.log(a); // undefined (hoisted but no value yet)
var a = 10;

// Using let
console.log(b); // ReferenceError
let b = 20;

// Using const
console.log(c); // ReferenceError
const c = 30;
```

### Real Life Example: Pizza

#### Function Declaration :

Recipe in a Book

```javascript
makePizza(); // You can make pizza before reading the recipe

function makePizza() {
  console.log("Pizza is ready!");
}
// Hoisted – function available even before definition
```

#### Function Expression

Recipe Written During Cooking

```javascript
cookPizza(); // Error: cookPizza is not a function (yet!)

let cookPizza = function () {
  console.log("🍕 Cooking pizza...");
};
// Not hoisted – function only exists after this line
```

# What Gets Hoisted?

| Thing                | Hoisted?               | Notes                             |
| -------------------- | ---------------------- | --------------------------------- |
| function declaration | ✅ Yes                 | Can be used before it’s written   |
| var variables        | ✅ Yes (but undefined) | Gets hoisted, but not with value  |
| let & const          | ❌ No                  | Not hoisted like var, gives error |
| function expression  | ❌ No                  | Not hoisted                       |

## Conclusion

Hoisting means JavaScript remembers function declarations and var variables early, before code runs, and moves them to the top in memory — so you can use them even before writing them.

---

<br>

# JavaScript Functions Sheet

| Function Type                                      | Syntax / Example                                    | Key Features / Notes                                                       |
| -------------------------------------------------- | --------------------------------------------------- | -------------------------------------------------------------------------- |
| **Function Declaration**                           | `function sayHi() { console.log("Hello!"); }`       | Hoisted: Can be called before definition. Named function.                  |
| **Function Expression**                            | `let greet = function() { console.log("Hi!"); };`   | Not hoisted: Only usable after definition. Can be anonymous or named.      |
| **Arrow Function**                                 | `const add = (a, b) => a + b;`                      | Concise syntax, `this` is lexically scoped. Cannot be used as constructor. |
| **Immediately Invoked Function Expression (IIFE)** | `(function() { console.log("IIFE run!"); })();`     | Runs immediately after creation. Creates isolated scope.                   |
| **Functions with Default Parameters**              | `function sum(a, b = 3) { return a + b; }`          | Default value used if argument is not passed.                              |
| **Functions with Return**                          | `function sum(a, b) { return a + b; }`              | Returns value to be stored or used elsewhere.                              |
| **Callback Functions**                             | `arr.forEach(function(val) { console.log(val); });` | Passed as argument to another function, executed later.                    |
