# Error Handling 

`try...catch` is used to handle runtime errors so that the rest of the code can still run.  

If an error occurs inside `try`, control moves to the `catch` block without stopping the program.

## try-catch

#### Without try-catch:

```js
let a = 5;
let b = 8;

console.log("a + b", a + b);
console.log("a - b", a - b);
console.log("a * c", a * c); // Error: c is not defined
console.log("a * b", a * b);
console.log("a / b", a / b);
console.log("a = a", (a = a));
```

Here, since c doesn’t exist, an error will occur and the rest of the code will not execute.

#### With try-catch:

```js
console.log("a + b", a + b);
console.log("a - b", a - b);

try {
  console.log("a * c", a * c);
} catch (err) {
  console.log(err);
}

console.log("a * b", a * b);
console.log("a / b", a / b);
console.log("a = a", (a = a));
```
