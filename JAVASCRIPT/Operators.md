# Operators in JS

## 1. Arithmetic Operators

| Operator | Description         | Example  | Result |
| -------- | ------------------- | -------- | ------ |
| +        | Addition            | 5 + 5    | 10     |
| -        | Subtraction         | 5 - 5    | 0      |
| \*       | Multiplication      | 5 \* 5   | 25     |
| /        | Division            | 5 / 5    | 1      |
| %        | Modulus (Remainder) | 5 % 2    | 1      |
| \*\*     | Exponentiation      | 5 \*\* 2 | 25     |

### Example

```javascript
let a = 5;
let b = 5;

console.log("a = ", a, "b = ", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);
```

## 2. Unary Operators

Unary operators are operators that work on a **single operand**.  
They perform operations like `incrementing`, `decrementing`, `negating`, or `type conversion`.

---

### Common Unary Operators

| Operator | Description                       | Example    | Result         |
| -------- | --------------------------------- | ---------- | -------------- |
| ++       | Increment value by 1              | a = 5; ++a | 6              |
| a++      | Increment after current operation | a = 5; a++ | 5 (then a = 6) |
| --       | Decrement value by 1              | b = 5; --b | 4              |
| b--      | Decrement after current operation | b = 5; b-- | 5 (then b = 4) |
| !        | Logical NOT (negation)            | !(true)    | false          |

---

**Note:**

- `++a` vs `a++`:
- `++a` → increment first, then use the value
- `a++` → use the value first, then increment
- Unary `+` is useful to convert strings to numbers.
- Unary `-` can convert positive numbers to negative.
- Logical NOT `!` flips a boolean value.

#### Examples :

```javascript
a++;
console.log("a = ", a);
```

```javascript
b--;
console.log("b = ", b);
```

**Diff in a++ & ++a**

In `a++`, first value that is initially will be printed then addition will happen, then when we'll print the new value again, only then the incremented value will be printed.

In `++a`, first the value will be incremented and then printed

```javascript
console.log("a ", a, "b = ", b);
console.log("++a = ", ++a);
console.log("b++ = ", b++);
console.log("b = ", b);
```

## 3. Comparison Operators

| Operator | Description                    | Example   | Result |
| -------- | ------------------------------ | --------- | ------ |
| ==       | Equal (loose, compares values) | 5 == "5"  | true   |
| ===      | Strict Equal (value + type)    | 5 === "5" | false  |
| !=       | Not equal                      | 5 != "5"  | false  |
| !==      | Strict not equal               | 5 !== "5" | true   |
| >        | Greater than                   | 6 > 5     | true   |
| >=       | Greater than or equal          | 5 >= 5    | true   |
| <        | Less than                      | 4 < 5     | true   |
| <=       | Less than or equal             | 5 <= 5    | true   |


### Loose equality operator  ( == ) 

`==`is the loose equality operator.

It compares values but not types.

#### Example

```javascript
let c = 5;
let d = 5;

console.log("c == d : ", c == d);

let e = 5;
let f = "5"; //string -> number then compared so true returns

console.log("e == f : ", e == f);
```


So, `"5"` (string) is automatically converted to number → `5 == 5` → `true`

### Equal to and type comparison operator (===)

`===` is the strict equality operator.

It compares both value and type.

#### Example


```javascript
let g = 5;
let h = "5"; //string

console.log("g === h : ", g === h);
```

`g` is a `number`, `h` is a `string` → Types are different → `false`

## 4. Logical Operators

| Operator | Description | Example         | Result |
| -------- | ----------- | --------------- | ------ |
| &&       | Logical AND | true && false   | false  |
| \|\|     | Logical OR  | true \|\| false | true   |
| !        | Logical NOT | !true           | false  |

#### Examples:


```javascript
let x = 7;
let y = 6;

let cond1 = x > y;
let cond2 = x == 7;

console.log("cond1 || cond 2 : ", cond1 || cond2);
```

```javascript
let k = 7;
let l = 6;
console.log("!(7<6) ", !(k < l));
```

## 5. Conditional Statements

### if Statement

```javascript
let mode = "dark";
let color;

if (mode == "dark") {
  color = "black";
}
if (mode == "light") {
  color = "white";
}
console.log(color);
```

### if - else Statement

```javascript
let mode = "dark";
let color;

if (mode == "dark") {
  color = "black";
} else {
  color = "white";
}
console.log(color);
```

### else - if Statement

```javascript
let num = 19;

if (num < 18) {
  console.log("Junior");
} else if (num > 60) {
  console.log("Senior");
} else {
  console.log("Middle");
}
```

## 6. Ternary Operators

| Operator | Description                 | Example                      | Result  |
| -------- | --------------------------- | ---------------------------- | ------- |
| ? :      | Short if-else (conditional) | age >= 18 ? "Adult" : "Teen" | "Adult" |

---

#### Example

```javascript
let card = 19;

let result = card >= 18 ? "Adult" : "Teenager"; // simpler, compact if-else

console.log(result);
```

## 7. Switch Statements

```javascript
const expr = mangoes;

switch (expr) {
  case "apple":
    console.log("");
    break;
  case "oranges":
    console.log("");
    break;
  default:
    console.l("");
}
```

## Notes

- `a++` vs `++a`: `a++` prints first then increments, `++a` increments first then prints.
- Logical operators return **boolean values**.
- Comparison operators can be **loose (`==`) or strict (`===`)**.
- Ternary is **compact if-else**, very useful for quick checks.
