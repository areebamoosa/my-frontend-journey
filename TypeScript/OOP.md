## Classes and Constructor

Classes in TypeScript are used to create reusable object blueprints. A constructor initializes values when an object is created.

* Helps structure data and behavior together
* Constructor runs automatically when creating an object

```ts id="c1a2b3"
class Chai{
    flavour: string;
    price: number

    constructor (flavour: string, price:number){
        this.flavour = flavour
        this.price = price
    }
}

const masalaChai = new Chai("Ginger", 20)
```

## Access Modifiers

Access modifiers control how properties and methods are accessed.

* `public`: accessible everywhere
* `private`: accessible only inside the class
* `protected`: accessible in class and subclasses

```ts id="d4e5f6"
class Chai{
    public flavor: string = "Masala"

    private secretIngredients = "Adrak"

    reveal(){
        return this.secretIngredients 
    }

    protected shopName = "Chai corner "
}

const c = new Chai();
```

## Inheritance

Inheritance allows a class to use properties and methods of another class.

* Child class extends parent class
* `protected` members can be accessed in child class

```ts id="g7h8i9"
class Shop {
    protected shopName = "Chai corner"
}

class Branch extends Shop{
    getName(){
        return this.shopName;
    }
}
```

## Private Fields with `#`

JavaScript also supports private fields using `#`.

* Strictly private to the class
* Cannot be accessed outside

```ts id="j1k2l3"
class Wallet{
    #balance = 100

    getBalance(){
        return this.#balance
    }
}

const w = new Wallet()
```

## Readonly Properties

Readonly properties can only be assigned once.

* Prevents modification after initialization

```ts id="m4n5o6"
class Cup{
    readonly capacity: number = 250

    constructor(capacity : number){
        this.capacity = capacity;
    }
}
```

## Getters and Setters

Getters and setters control access to private properties.

* Getter reads value
* Setter validates before setting value

```ts id="p7q8r9"
class Modernchai{
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

    set sugar(value: number){
        if (value > 5) throw new Error("Too sweet")
        this._sugar = value
    }
}

const c = new Modernchai()
c.sugar = 3;
```

## Static Properties

Static members belong to the class itself, not instances.

* Accessed using class name
* Shared across all instances

```ts id="s1t2u3"
class EkChai{
    static shopName = "Chaicode caffe"

    constructor(public flavour : string){}
}

console.log(EkChai.shopName);
```

## Abstract Classes

Abstract classes cannot be directly instantiated. They define a structure for child classes.

* Must be implemented in derived classes
* Used as blueprint

```ts id="v4w5x6"
abstract class Drink{
    abstract make(): void
}

class MyChai extends Drink{
    make(){
        console.log("Brewing Chai");
    }
}
```

## Composition

Composition means using one class inside another instead of inheritance.

* More flexible than inheritance
* Builds complex systems from small parts

```ts id="y7z8a9"
class Heater{
    heat(){}
}

class chaiMaker{
    constructor (private heater: Heater){}

    make(){
        return this.heater.heat
    }
}
```
