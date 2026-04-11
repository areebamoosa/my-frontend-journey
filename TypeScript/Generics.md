## Generics in Functions

Generics allow you to create reusable functions that work with multiple types while still keeping type safety. Instead of fixing a type, you pass it as a parameter.

* Makes functions flexible
* Keeps type safety intact
* Works with any data type

```ts id="g1a2b3"
function wrapInArray<T>(item: T) :T []{
    return [item]
}

wrapInArray("masala")
wrapInArray(45)
wrapInArray({flavour: "ginger"})
```

Here, `T` represents a generic type that adapts based on input.

---

## Multiple Generics

You can use more than one generic type when dealing with multiple inputs.

* Useful when combining different types
* Keeps return type accurate

```ts id="c4d5e6"
function pair<A, B> (a:A, b:B) : [A,B]{
    return [a, b]
}

pair("masala" , "ginger")
```

---

## Generic Interfaces

Interfaces can also use generics to make them reusable for different data types.

* Works like a template for objects
* Flexible and type-safe

```ts id="f7g8h9"
interface Box<T>{
    content : T;
}

const numBox : Box <number> = {content: 10}
const letterBox : Box <string> = {content: "Chai"}
```

---

## Generics in API Responses

Generics are commonly used in APIs to define dynamic response data.

* Helps define flexible API structures
* Keeps response type consistent

```ts id="j1k2l3"
interface ApiPromise<T>{
    status: number,
    data: T
}

const res: ApiPromise<{flavour: string}> = {
    status : 100,
    data : {flavour : "masala"}
}
```
