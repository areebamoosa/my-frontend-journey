## What is TypeScript

TypeScript is a typed version of JavaScript developed by Microsoft. It allows you to write JavaScript code with added type safety, which helps catch errors during development instead of at runtime. It is especially useful in larger applications where managing data types and structure becomes important.

## Basic Idea

In simple terms, TypeScript adds a layer of checking on top of JavaScript. You define what type of data a variable should hold, and TypeScript ensures that the rules are followed.

- TypeScript is a superset of JavaScript, so all JavaScript code is valid in TypeScript
- It introduces types like string, number, boolean, arrays, and objects

- It improves code readability and maintainability
- It provides better editor support like autocomplete and suggestions
- TypeScript uses compile time type checking, which means it checks if the specified types match before running the code, not while running the code.

## Example

```ts
let username: string = "Areeba";
username = 25; // Error because the type is string
```

This kind of checking prevents unexpected bugs and makes the code more predictable.

## How TypeScript Works

TypeScript code is not directly understood by browsers. It needs to be compiled into JavaScript first. This process converts all TypeScript files into normal JavaScript files that can run anywhere.

- You write code in .ts files
- TypeScript compiler converts it into .js files
- The final output runs in the browser or Node.js
