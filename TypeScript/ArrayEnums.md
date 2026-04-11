## Arrays

TypeScript allows you to define arrays with specific types to ensure all elements follow the same structure.

- Use `type[]` or `Array<type>`
- Ensures consistent data inside arrays

```ts id="p7c1s8"
const chaiFlavours: string[] = ["Masla", "ginger"];
const chaiPrice: number[] = [10, 20];

const rating: Array<number> = [2, 5];
```

## Array of Objects

You can define a type for objects and then use it inside arrays.

- Keeps object structure consistent
- Useful for lists like menus, users, etc.

```ts id="r3n9ks"
type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  { name: "Masala", price: 2 },
  { name: "Ginger", price: 3 },
];
```

## Readonly Arrays

Readonly arrays cannot be modified after creation.

- Prevents changes like push, pop
- Useful for fixed data

```ts id="9r2t5k"
const cities: readonly string[] = ["Karachi", "Islamabad"];
cities.push("Hyderabad"); // This action cant be done
```

## 2D Arrays

You can create arrays inside arrays (matrix structure).

- Used for tables or grids

```ts id="z4x1qp"
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 3],
];
```

## Tuples

Tuples are fixed-length arrays with specific types at each position.

- Order and type must match exactly
- More strict than normal arrays

```ts id="k8d2vn"
let chaiTuple: [string, number];

chaiTuple = ["Masala", 20];
chaiTuple = [10, "Ginger"];
```

## Optional Values in Tuples

You can make some tuple values optional.

- Use `?` for optional elements

```ts id="m1q8zy"
let userInfo: [string, number, boolean?];

userInfo = ["Masala", 10];
userInfo = ["Masala", 10, false];
```

## Readonly Tuples

Tuples can also be made readonly to prevent changes.

```ts id="a5w3nb"
const location: readonly [number, number] = [10, 2];
```

## Named Tuples

You can give names to tuple elements for better readability.

```ts id="u2c9jf"
const chaiItems: [name: string, price: number] = ["Masala", 20];
```

## Enums

Enums allow you to define a set of fixed values.

- Restricts values to predefined options
- Makes code more structured

```ts id="y7p4dh"
enum cupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = cupSize.LARGE;
```

## String Enums

Enums can also store string values.

```ts id="x9v2lm"
enum chaiType {
  MASALA = "masala",
  GINGER = "ginger",
}

function makeChai(type: chaiType) {
  console.log(`Making : ${type}`);
}

makeChai(chaiType.GINGER);
```

## Const Enums

Using `const enum` makes enums more optimized at compile time.

```ts id="c3t6re"
const enum chaiType {
  MASALA = "masala",
  GINGER = "ginger",
}
```

## Tuples Behavior (Important Note)

Even though tuples are fixed types, they are still arrays underneath.

- You can still use array methods like `push`
- This can break strict structure

```ts id="b2n7fk"
let t: [string, number] = ["masala", 20];
t.push("extra");
// tuples behave like arrays internally
```
