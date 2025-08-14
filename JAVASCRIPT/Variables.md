# Variables in JavaScript

## 1. String Variable

```javascript
fullName = "Areeba Moosa";

console.log("fullName");

// In double qoutes, the value inside the brackets will be printed, but if we want to print a value inside the variable then we have to use no quotation marks.

console.log(fullName);
```

## 2. Number Variable

```javascript
age = 19;
console.log(age);
```

## 3. Null Variable

```javascript
x = null;
```

## 4. Undefined Variable

```javascript
y = undefined;
```

## 5. Boolean Type Variable

```javascript
isFollow = true;
console.log(isFollow);
```

## Var, Let & Const Keywords

### Var Keyword

A variable keyword that can be redeclared and updated, works in function scope.

```javascript
var age = 90;
var age = 100;
// The value of a var can be changed during the execution of a program. Here the value 100 will be printed since we updated it.
console.log(age);
```

### Let Keyword

A variable keyword that can be updated but not redeclared, works in block scope.

```javascript
let num = 30;
let num = 40;
// let num = 50 , this shows error because we cannnot redeclare same variable again in let, we can only update it.
console.log(num);
```

#### Redeclaring Let in Block Scope

```javascript
{
  let num = 30;
  console.log(num);
}
{
  let num = 30;
  console.log(num);
}
// since let is a block scope var, so we declare it inside brackets like this, now it will show no error.
```

### Const Keyword

A variable keyword that cannot be updated or redeclared, works in block scope.

It must be given a value when declared

Safer choice to avoid accidental value changes.

```javascript
const width = 90;
const width = 100;
console.log(width);
// the error will occur at browser, since we can neither update nor redeclare a const value.
```

Good for fixed values like PI or configuration settings.

```javascript
const PI = 3.14;
console.log(PI);
```

---

### Undefined with Let

```javascript
let a;
console.log(a);
// by default any variable declared using let which have no value assigned, then it will be undefined
```

### Const Without Value

```javascript
const b;
console.log(b);
// this will show an error since a const var must be assigned a value at the time of its declarartion
```

# Variable Keywords Reference

| Keyword | Redeclare? | Reassign? | Scope    | Hoisting Behavior                                 |
| ------- | ---------- | --------- | -------- | ------------------------------------------------- |
| var     | ✅ Yes     | ✅ Yes    | Function | Hoisted (initialized as `undefined`)              |
| let     | ❌ No      | ✅ Yes    | Block    | Hoisted (but in TDZ - Temporal Dead Zone)         |
| const   | ❌ No      | ❌ No     | Block    | Hoisted (but in TDZ - must assign at declaration) |
