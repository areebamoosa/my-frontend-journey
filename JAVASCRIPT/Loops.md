# LOOPS in JS

Loops are used to execute a piece of code again & again.

---

## 1. For Loop

```javascript
//Printing my name using for loop for 10 times.

for (let i = 0; i <= 10; i++) {
  console.log("Areeba Moosa");
}
```

```javascript
//Calculate the sum of 1 to 5

let sum = 0;
for (i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log("sum = ", sum);
```

```javascript
//Print 1 to 5

for (let i = 1; i <= 5; i++) {
  console.log("i = ", i);
}

console.log(i);

// Here the value of i will be undefined, because "i" in the loop is a let type.

// And let is a block scope variable whose value is only defined inside the region & we cannot access it outside the block of code.
```

## 2. While Loop

```javascript
let x = 6;
while (x <= 5) {
  console.log("x= ", x);
  x++;
}
```

## 3. Do - While Loop

This loop executes at least one time and then checks the condition.

```javascript
y = 6;

do {
  console.log("y = ", y);
  y++;
} while (y <= 5);
```

## 4. For - Of Loop

The for-of loop is used to iterate over iterable objects like `arrays` or `strings`.  
It gives each element one by one, making it easy to access values directly.

```javascript
let str = "AreebaMoosa";
let size = 0;

for (let i of str) {
  console.log("i = ", i);
  size++;
}

console.log("Size = ", size);

let a = [1, 2, 3, 4, 5];
for (let val of a) {
  console.log(val);
}
```

## 5. For-In Loop

The for-in loop is used to iterate over the properties of an `object`.

It only iterates over keys of an object which have their enumerable property set to true.

```javascript
let student = {
  fullName: "Areeba Moosa",
  isPass: true,
};

for (let key in student) {
  console.log("Key = ", key, " & Value = ", student[key]);
}
```

### Choosing the Right Loop

- Use for loop when the number of iterations is known.

- Use while loop when the condition depends on dynamic factors.

- Use do-while loop to ensure the block executes at least once.

- Use for...in loop to iterate over object properties.

- Use for...of loop for iterating through iterable objects.

<br>

---

## JavaScript Loops Quick Sheet

| Loop Type     | Syntax                                         | Use Case                                           | Example                                                                | Output     |
| ------------- | ---------------------------------------------- | -------------------------------------------------- | ---------------------------------------------------------------------- | ---------- |
| For Loop      | for(initialization; condition; update) { ... } | When the number of iterations is known             | for(let i=1;i<=5;i++){ console.log(i); }                               | 1 2 3 4 5  |
| While Loop    | while(condition) { ... }                       | When iterations depend on dynamic conditions       | let x=1; while(x<=5){ console.log(x); x++; }                           | 1 2 3 4 5  |
| Do-While Loop | do { ... } while(condition);                   | To execute block at least once                     | let y=1; do { console.log(y); y++; } while(y<=5);                      | 1 2 3 4 5  |
| For-Of Loop   | for(let item of iterable){ ... }               | Iterate through iterable objects (arrays, strings) | for(let char of "JS"){ console.log(char); }                            | J S        |
| For-In Loop   | for(let key in object){ ... }                  | Iterate over object properties (keys)              | let obj = {a:1,b:2}; for(let key in obj){ console.log(key,obj[key]); } | a 1<br>b 2 |
---