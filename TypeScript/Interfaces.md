## Reusing Object Types

When multiple functions use the same object structure, repeating the type makes code messy. Instead, you can extract it into a reusable type.

- Avoids duplication
- Makes code cleaner and easier to maintain

```ts id="a1b2c3"
function makeChai(order: { type: string; sugar: number; strong: boolean }) {
  console.log(order);
}

function serveChai(order: { type: string; sugar: number; strong: boolean }) {
  console.log(order);
}
```

Improved version using a type:

```ts id="d4e5f6"
type chaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function chai(order: chaiOrder) {
  console.log(order);
}

function serve(order: chaiOrder) {
  console.log(order);
}
```

---

## Implementing Types in Classes

You can use `implements` to enforce a structure in a class.

- Class must follow the type structure
- Ensures consistency

```ts id="g7h8i9"
type TeaRecipe = {
  water: number;
  milk: number;
};

class MasalaChai implements TeaRecipe {
  water = 100;
  milk = 50;
}
```

---

## Literal Types Limitation with Classes

Literal types cannot be directly implemented in classes because they represent fixed values, not structures.

```ts id="j1k2l3"
type CupSize = "small" | "medium";

class Chai implements CupSize {
  // Not allowed
}
```

---

## Using Interfaces for Structure

Interfaces are better for defining object structures that classes must follow.

```ts id="m4n5o6"
interface CupSizee {
  size: "small" | "medium";
}

class Chaai implements CupSizee {
  size: "small" | "medium" = "medium";
}
```

---

## Interface with Literal Values

Interfaces can also use literal unions inside properties.

```ts id="p7q8r9"
interface response {
  ok: "true" | "false";
}

class myRes implements response {
  ok: "true" | "false" = "false";
}
```

---

## Union Types

Union types allow a variable to accept multiple predefined values.

- Restricts allowed values
- Improves type safety

```ts id="s1t2u3"
type TeaType = "Ginger" | "lemon" | "masala";

function orderChai(t: TeaType) {
  console.log(t);
}
```

---

## Intersection Types

Intersection combines multiple types into one.

- Must satisfy all types
- Used for merging structures

```ts id="v4w5x6"
type BaseChai = { teaLeaves: number };
type ExtraChai = { masala: number };

type MasalaChai = BaseChai & ExtraChai;
```

---

## Readonly Properties

Readonly prevents reassignment after initialization.

- Value can only be set once

```ts id="y7z8a9"
type config = {
    readonly appName: string,
    version: number
}

const cfg: config {
    appName = "A.M",
    version = 1
}

cfg.appName = "Areeba" // error
```

---

## Optional Properties in Interfaces

Interfaces can define optional fields using `?`.

```ts id="b1c2d3"
interface Chai {
  flavour: string;
  price: number;
  milk?: number;
}

const masala: Chai = {
  flavour: "masala",
  price: 23,
};
```

---

## Function Types in Interfaces

Interfaces can describe function signatures.

```ts id="e4f5g6"
interface DiscountCalculator {
  (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.5;
```

---

## Interface for Objects with Methods

Interfaces can define methods inside objects.

```ts id="h7i8j9"
interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};
```

---

## Index Signatures

Used when object keys are dynamic.

- Keys are not fixed
- Useful for maps/dictionaries

```ts id="k1l2m3"
interface chaiRatings {
  [flavour: string]: number;
}

const ratings: chaiRatings = {
  masala = 10,
  ginger = 5,
};
```

---

## Interface Merging

Interfaces with the same name automatically merge.

- Useful for extending existing types
- Common in large codebases

```ts id="n4o5p6"
interface user{
    name : string
}
interface user{
    age : number
}

const u: user{
    name = "Areeba",
    age = 20
}
```

---

## Interface Extension

Interfaces can extend other interfaces.

- Builds on existing structures
- Promotes reuse

```ts id="q7r8s9"
interface A {
  a: string;
}
interface B {
  b: string;
}

interface C extends A, B {}
```
