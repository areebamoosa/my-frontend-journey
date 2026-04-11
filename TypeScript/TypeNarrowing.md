## Type Narrowing with `typeof`

TypeScript can narrow down types using checks like `typeof`. This helps decide what type you’re working with inside conditions.

- Used with primitive types like string, number
- Ensures safe operations based on type

```ts id="9r4m4c"
function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} of chai...`;
  }
  return `Chai order: ${kind}`;
}
```

Here, TypeScript knows inside the `if` block that `kind` is a string.

## Optional Parameters

Optional parameters allow you to pass a value or skip it.

- Defined using `?`
- Useful for default behavior

```ts id="8x7zgj"
function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default masala chai`;
}
```

## Type Narrowing with `instanceof`

You can use `instanceof` to check class instances.

- Works with classes
- Helps identify object type

```ts id="jv6q3h"
// Default Instances

class Ayra {
  serve() {
    return `Serving Ayra's Chai`;
  }
}
class Amariah {
  serve() {
    return `Serving Amariah's Chai`;
  }
}

function serve(chai: Ayra | Amariah) {
  if (chai instanceof Ayra) {
    return chai.serve();
  }
}
```

## Custom Type Guard

Custom type guards help you define your own logic to check types.

- Uses `obj is Type`
- Improves type safety

```ts id="s2nq8l"
type chaiOrder = {
  type: "string";
  sugar: "number";
};

function isChaiOrder(obj: any): obj is chaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}
```

## Using Type Guard in Function

You can use the custom type guard to safely handle different types.

```ts id="2p9r9f"
function serveOrder(item: chaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar} sugar`;
  }
  return `Serving custom chai ${item}`;
}
```

## Discriminated Unions

This pattern uses a common property (like `type`) to differentiate between multiple types.

- Makes handling multiple types easier
- Works well with `switch`

```ts id="3xk2q9"
type MasalaChai = { type: "masala"; spicelevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; aroma: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

function makeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return `Masala Chai`;
    case "ginger":
      return `ginger Chai`;
    case "elaichi":
      return `elaichi Chai`;
  }
}
```

## Property Check with `in`

You can check if a property exists in an object using `in`.

- Helps narrow object types
- Useful when properties differ

```ts id="8h0v2y"
function brew(order: MasalaChai | GingerChai) {
  if ("spicelevel" in order) {
    // over here it will give us object masala chai because only that has the property spicelevel
    // so this means if this property exists
  }
}
```

## Custom Guard for Arrays

You can also create type guards for arrays.

- Ensures all elements match a type
- Useful with unknown data

```ts id="1q0h2z"
function isStringArray(arr: unknown): arr is string[] {
  //
}
```
