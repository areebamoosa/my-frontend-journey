## Type Inferencing

Type inferencing means TypeScript automatically understands the type of a variable based on the value assigned to it. You don’t need to explicitly define the type in this case.

```ts
// Where the variable knows which type the output will have

let drink = "chai";

let cups = Math.random() > 0.5 ? 10 : "5";
```

In the first example, TypeScript infers `drink` as a string. In the second example, it infers `cups` as a union type (`number | string`) because it can return both.

## Type Annotation

Type annotation is when you explicitly define the type of a variable. This gives you more control and avoids unwanted type changes.

- You manually define the type
- Helps in complex or larger codebases
- Prevents accidental type changes

```ts
// Where we to explicitly define the type

let channel: string = "Chai aur Code";
channel = "Apna College";
```

Here, the variable `channel` is strictly a string, so assigning any other type would cause an error.

## Type Assertion

Type assertion is used when you want to tell TypeScript what the type is, even if it cannot detect it automatically. This is a forced way of setting a type.

- Used when TypeScript cannot correctly infer the type
- Can cause errors if used wrongly

```ts
let response: any = "64";

let numericLength: number = (response as string).length;
// over here we are doing forcefull assertion
```

## Custom Types

You can define your own types using `type` to structure data.

- Helps organize object structure
- Makes code reusable and clear

```ts
type book = {
  name: string;
};
```

## DOM Type Assertion

When working with the DOM, TypeScript may not know the exact element type, so you assert it.

```ts
const inputElement = document.getElementById("username") as HTMLInputElement;
```

## Any Type

The `any` type disables type checking completely. TypeScript will not show errors, even if the code is wrong.

- No type safety
- Avoid using in most cases
- Can lead to runtime errors

```ts
let value: any;

value = "chai";
value = [1, 2, 3];
value = 2.5;
```

## Unknown Type

The `unknown` type is safer than `any`. You must check the type before using it.

- Type-safe alternative to `any`
- Requires type checking before usage

```ts
let newValue: unknown;

newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;

if (typeof newValue === "string") {
  newValue.toUpperCase();
}
```

## Error Handling with Unknown

When handling errors, TypeScript treats them as `unknown`, so you must check the type before accessing properties.

- Use `instanceof` to narrow type
- Prevents unsafe access

```ts
try {
  //
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }

  console.log("Error", error);
}
```

## Type Assertion with Unknown

You can also assert unknown values to a specific type when you are sure about it.

```ts
const data: unknown = "chai aur code";
const strData: string = data as string;
```

## Union Types

Union types allow a variable to hold more than one type. This makes the code flexible while still maintaining type safety.

- Use `|` to define multiple types
- Useful when a value can be of different types

```ts
// We can assign more than one type

let subs: string | number = "1M";
```

## Literal Types

Literal types allow you to restrict a variable to specific exact values.

- Only predefined values are allowed
- Useful for statuses, roles, or fixed options

```ts
// We can assign our own default options
let apiRequestStatus: "pending" | "success" | "error" = "pending";

apiRequestStatus = "success";
```

## Function with Specific Types

Functions can use these custom types to control behavior.

```ts
type Role = "admin" | "user" | "superAdmin";
```

```ts
function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirecting to Admin Dashboard");
    return;
  }
  if (role === "user") {
    console.log("Redirecting to user Dashboard");
    return;
  }
  role; // on hover this shows that the other case must be superadmin
}
```

TypeScript understands that if other cases are handled, the remaining value must be `"superAdmin"`.

## Never Type

The `never` type is used for functions that never return anything.

- Infinite loops
- Functions that always throw errors

```ts
function neverReturn(): never {
  while (true) {}
}
```

## Avoiding Undefined Issues

Sometimes a variable may or may not have a value. You can use `undefined` in union types to handle this safely.

- Helps avoid unexpected errors
- Common in loops and condition checks

```ts
// To avoid any data type

let orders = ["12", "20", "54"];

let currentOrder: string | undefined;

for (let order of orders) {
  if (order === "28") {
    currentOrder = order;
    break;
  }
  currentOrder = "11";
}

console.log(currentOrder);
```

Here, `currentOrder` can either be a string or `undefined`, which ensures safer handling when the value is not found.

---

## Type vs Object

### What is `type`?

`type` is NOT an object.  
It is a **blueprint (structure)** that defines how an object should look.

### Example

```ts
type Book = {
  name: string;
};
```

This defines the shape of an object.

```ts
const myBook: Book = {
  name: "Atomic Habits",
};
```

This is the actual object.

### Summary

- `type` → structure / blueprint
- object → real data following that structure
