# ARRAYS in JS

In JavaScript, an array is an ordered list of values.

Each value is called an element, and each element has a numeric position in the array, known as its index.

Arrays in JavaScript are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on.

```js
let marks = [97, 89, 79, 20, 70];

console.log(marks);
console.log(marks.length);

//length is a property not a method
// property wo hoti hy jo value dety hy & method wo hota hy jo kch kam krta hy.

marks[3] = 99;
console.log(marks[3]);
console.log(marks);
```

## Array Methods

### 1. Push Method

The push() method adds the element to the end of the array.

```js
let mart = ["apple", "banana", "grapes", "strawberry"];

mart.push("chips");

console.log(mart);
```

### 2. Pop Method

The pop() method removes an element from the last index of the array.

```js
let deletedItem = mart.pop();

console.log(mart);

console.log(deletedItem);
```

### 3. Array to String Method

We have a builtin method toString() to converts an array to a string.

```js
let a = ["HTML", "CSS", "JS"];

console.log(a.toString());
```

### 4. Concat Method

concat() creates a new array by joining two or more arrays.

It does not change the original arrays (fruits and veg remain unchanged).

The result is stored in mart, which includes all elements from fruits followed by all elements from veg.

```js
let fruits = ["apple", "mango", "grapes", "nuts"];

let veg = ["cucumbers", "ladyfinger", "potato", "tomato"];

let mart = fruits.concat(veg);

console.log(mart);
```

### 5. UnShift Method

The unshift() method add the element to the starting of the array

```js
let fruits = ["apple", "mango", "grapes", "nuts"];

fruits.unshift("mangoes");

console.log(fruits);
```

### 6. Shift Method

The shift() method removes the element from the first index of the array.

```js
let fruits = ["apple", "mango", "grapes", "nuts"];

let val = fruits.shift();

console.log("Deleted : ", val);
```

### 7. join ( ) Method

```js
let arr = ["apple", "mango", "grapes", "nuts"];
console.log(arr.join(" and "));
// Joins all elements of the array into a string with " and " between them
```

### 8. concat ( ) Multiple Arrays

```js
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];
console.log(a1.concat(a2, a3));
```

### 9. sort ( ) Method

```js
let b = [4, 9, 5, 1];
console.log(b.sort());
```

### 10. Slice Method

slice(start, end) extracts a portion of the array from start index up to but not including end.

It returns a new array.

The original array remains unchanged.

```js
let fruits = ["apple", "mango", "grapes", "nuts"];

console.log(fruits.slice(1, 2));

console.log(fruits); //doesn't change original array
```

### 11. Splice Method : Add, remove, replace

The splice() method removes or replaces the element from the array.

#### Add Element

```js
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.splice(2, 0, 101));
console.log(arr);
```

#### Replace

```js
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.splice(2, 1, 8));
console.log(arr); // this changes the org array
```

#### Delete Element

```js
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.splice(3, 1));
console.log(arr);
```

<!--  -->

#### Delete after index

```js
let arr = [1, 2, 3, 4];
console.log(arr.splice(2));
console.log(arr);
```

#### No deletion

```js
let arr = [1, 2, 3, 4];
console.log(arr.splice());
console.log(arr);
```

---

## Array Modifications

```js
let arr = [1, 2, 4, 5, 6];
arr[0] = 566;
console.log(arr);
console.log(arr.length);
console.log(arr[2]);
console.log(arr[0]);
console.log(arr.toString()); // Converts array to a string
```

## Looping over an array : Print all elements of an array

### for loop

```js
let arr = ["ibrahim", "meerub", "areeba"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

```js
let arr = ["ibrahim", "meerub", "areeba", "sara", "zara", "alexa"];
for (let i = 1; i < arr.length; i++) {
  console.log(arr[i - 1]);
}
```

### for-of loop

```js
for (let el of arr) {
  console.log(el);
}
```
