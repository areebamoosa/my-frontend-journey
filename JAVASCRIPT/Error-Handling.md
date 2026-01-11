# Error Handling

Error handling means your app doesn’t break when something goes wrong

`try...catch` is used to handle runtime errors so that the rest of the code can still run.

If an error occurs inside `try`, control moves to the `catch` block without stopping the program.

### Simple example

```js
console.log("Start");
console.log(x); // x does not exist
console.log("End");
```

Program stops, which is bad

## try-catch

`try` = “Let me try”

`catch` = “If it breaks, handle it”

### Basic Example

```js
try {
  console.log(x);
} catch (error) {
  console.log("Something went wrong");
}
```

error is just a message telling:

- What went wrong
- Why it broke

## Error handling with Promises

```js
let promise = new Promise((resolve, reject) => {
  reject("No internet 😢");
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

`reject()` → .catch()

`resolve()` → .then()

If everything works → try runs

If ANY error happens → jump to catch

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

### throw means:

“Stop here and go to catch”

```js
throw new Error("Something bad happened");
```
