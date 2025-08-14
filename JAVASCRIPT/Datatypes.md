# DATA TYPES in JS

## Primitive Data Types

There are 7 Primitive Data Types: **Number, String, Boolean, Undefined, Null, BigInt, Symbol**

These are the most basic building blocks — they store a single value.

| Data Type | Example                          | typeof Result |
| --------- | -------------------------------- | ------------- |
| Number    | `let a = 42;`                    | `"number"`    |
| String    | `let b = "Hello";`               | `"string"`    |
| Boolean   | `let c = true;`                  | `"boolean"`   |
| Undefined | `let d;`                         | `"undefined"` |
| Null      | `let e = null;`                  | `"object"`    |
| BigInt    | `let f = BigInt(123);` or `123n` | `"bigint"`    |
| Symbol    | `let g = Symbol("id");`          | `"symbol"`    |

<br>

### Primitive Data Types Example

```javascript
let x = "Areeba Moosa";
let y = 19;
let z = 20;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);
```

`typeof null is object`

```javascript
let x = BigInt("123");
console.log(x);
// bigint jahn p hota hy usk output mn last mn apko (n) nazer ayega
```

**Notes:**

- Null is just “nothing” — like an empty box.

- Undefined means you haven’t even put a box yet.

- BigInt is for really big numbers that normal Number can’t handle.

- Symbol is like a secret unique ID no one can copy.

---

## Non-Primitive Data Types (Objects)

### Objects :

Collection of values, stored as key-value pairs.

Keys are basically the "names" and values are the "data".

```javascript
const student = {
  fullName: "Areeba Moosa",
  age: 19,
};
```

To access any key in a object, here are the two ways to do it.

```javascript
console.log(student["age"]);
// or
console.log(student.age);
```

To redeclare a value in obj

```javascript
student["age"] = student["age"] + 1;
student["fullName"] = "Rahul Kumar";
```

## Objects Example

```javascript
let o = {
  Name: "Areeba Moosa",
  "Job Code": 164,
  is_pretty: true,
};

console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);
//Here the salary value is updated ad the updated value will be shown.
```
