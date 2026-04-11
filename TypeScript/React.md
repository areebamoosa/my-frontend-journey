## Generic React Hook with TypeScript

You can create reusable custom hooks using generics to handle different types of API data while keeping strong type safety.

- Makes hooks reusable for any data type
- Ensures correct structure of state
- Common pattern in React + TypeScript apps

```ts id="a1b2c3"
import { useState } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  // useEffect to make fetch request
}
```

Here, `T` makes the hook flexible so it can work with any API response type.

## Props With Children

In React, `children` means anything you put inside a component tag. TypeScript lets you type it so the component knows it can accept inner content.

- Used when a component wraps other content
- Common in reusable UI components like Card, Layout, Modal

Example:

```ts id="c1a2b3"
type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps) {
  return <div className="card">{children}</div>;
}
```

Usage:

```ts id="d4e5f6"
<Card>
  <h1>Hello</h1>
  <p>This is inside card</p>
</Card>
```

Here, everything inside `<Card>` becomes `children`.

---

## ReactNode Type

`ReactNode` is a TypeScript type that represents anything React can render.

- Can be text, number, JSX, fragments, etc.
- Used when props need flexible content

Example:

```ts id="g7h8i9"
type Props = {
  children: React.ReactNode;
};

function Wrapper({ children }: Props) {
  return <div>{children}</div>;
}
```

So basically:

- string → valid
- JSX → valid
- fragments → valid

It’s the most flexible type for rendering content.

---

## Form Submission with TypeScript

When working with forms, TypeScript helps you correctly type the event so you don’t get errors and everything stays predictable.

- Prevents page reload using `preventDefault()`
- Ensures correct event type
- Helps avoid runtime mistakes

Example:

```ts id="j1k2l3"
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  console.log("Form submitted");
}
```

Usage:

```ts id="m4n5o6"
<form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
</form>
```

Or inline version:

```ts id="p7q8r9"
<form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("Submitted");
}}>
```

So basically:

- You type the event (`React.FormEvent<HTMLFormElement>`)
- You stop default reload
- Then handle your logic safely inside the function
