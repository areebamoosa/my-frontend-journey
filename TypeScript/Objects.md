## Object Types

You can directly define the structure of an object while declaring a variable. This ensures the object always follows the given shape.

* All properties must match the defined types
* Missing or wrong types will cause errors

```ts id="q1w2e3"
let tea : {
    name : string;
    price : number;
    isHot: boolean
}

tea = {
    name : "Masala",
    price : 20,
    isHot : true
}
```

## Type Alias for Objects

Instead of repeating object structures, you can create reusable types using `type`.

* Makes code cleaner and reusable
* Easy to manage large structures

```ts id="a4s5d6"
type Tea = {
    name : string;
    price : number;
    ingrediennts : string[]
}

const Adrakchai: Tea = {
    name : "Adrak",
    price : 50,
    ingrediennts : ["ginger", "tea leaves"]
}
```

## Extra Properties Behavior

TypeScript allows assigning objects with extra properties to a defined type in some cases.

* Extra properties are ignored in assignment
* Works when assigning one variable to another

```ts id="z7x8c9"
type Cup = {size : string}
let smallCup: Cup = {size: "200ml"};

let bigCup = {size: "500ml", material: "steel"}

smallCup = bigCup
```

## Nested Types

You can combine multiple types to create complex structures.

* Useful for real-world data like orders
* Keeps data organized

```ts id="l1k2j3"
type item = {name: string, quantity : number}
type address = {street: string, pin: number}

type order = {
    id : string;
    items : item[],
    address : address
}
```

## Utility Type: Partial

`Partial` makes all properties optional.

* Useful for updates
* You don’t need to pass full object

```ts id="m4n5b6"
type Chai = {
    name: string;
    price: number;
    isHot : boolean
}

const updateChai = (updates : Partial<Chai>) => {
    console.log("updating chai with", updates);
}

updateChai({price: 25})
updateChai({isHot: false})
updateChai({})
```

## Utility Type: Required

`Required` makes all optional properties mandatory.

* Opposite of `Partial`
* Forces all fields to be present

```ts id="p7o8i9"
type chaiOrder = {
    name?: string;
    quantity ?: number
}

const placeOrder = (order: Required<chaiOrder>) =>{
    console.log(order)
}
```

If you don’t provide all fields, TypeScript will give an error.

## Utility Type: Pick

`Pick` allows selecting specific properties from a type.

* Helps create smaller versions of a type
* Only required fields are included

```ts id="u1y2t3"
type Chai = {
    name : string;
    price : number;
    isHot : boolean;
    ingredients: string[]
}

type basicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: basicChaiInfo = {
    name : "Masala",
    price : 20
}
```

## Utility Type: Omit

`Omit` removes specific properties from a type.

* Opposite of `Pick`
* Useful for hiding data

```ts id="g4h5j6"
type NewChai = {
    name : string;
    price : number;
    isHot : boolean;
    ingredients: string
}

type publicChai = Omit<NewChai, "ingredients">;
```
