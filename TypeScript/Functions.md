## Function Parameters

TypeScript allows you to define types for function parameters. This ensures that only the correct type of values are passed when calling the function.

* Improves function safety
* Gives suggestions while calling the function
* Prevents wrong inputs

```ts
function makeChai(type : string, cups: number){
    console.log(`Making ${cups} of ${type} chai`)
}

makeChai("Masala", 2);
```

Here, TypeScript suggests what types should be passed when calling the function.

## Return Types

You can explicitly define what type a function should return.

* Makes function output predictable
* Helps avoid returning wrong types

```ts
function getChaiPrice() : number{
    return 25;
}
```

## Nullable Returns

Sometimes a function may return a value or nothing (`null`).

* Useful for conditional returns
* Helps handle missing data safely

```ts
function makeOrder(order: string){
    if ( !order ) return null
    return order;
}
```

## Void Type

The `void` type is used when a function does not return anything.

* Used for logging or side effects
* No return value expected

```ts
function logChai() : void {
    console.log(`Chai is ready`);
}
```

## Optional and Default Parameters

You can make parameters optional or give them default values.

* Optional parameter uses `?`
* Default parameter assigns a value if none is provided

```ts
function orderChai (type ?: string){
    // optional parameter
}

function orderChhai (type : string = "Masala"){
    // deafult parameter
}
```

## Complex Function Types

You can define structured objects as parameters for better clarity and control.

* Useful for handling multiple values
* Makes function inputs more organized

```ts
function createChai(order: {
    type: string;
    sugar: number;
    size : "small" | "large"
}) : number{
    return 5
}
```
