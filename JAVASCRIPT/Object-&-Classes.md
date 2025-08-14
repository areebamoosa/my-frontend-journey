# Objects

In the primitive datatypes only one value is stored but an object can store more than one value, even of different types.

```js
const student = {
  // Properties in Obj
  fullName: "Areeba Moosa",
  marks: 98,

  // Methods in Obj
  printMarks: function () {
    console.log("Marks = ", this.marks);
  },
};

console.log("Name:", student.fullName);
console.log("Marks:", student["marks"]);

// Calling the method inside the object

student.printMarks();
```

### Having Same Functions in Different Objects Using Prototype

```js
const employee = {
  calcTax() {
    console.log("Tax rate is 10%");
  },
};

const karanArjun1 = { salary: 50000 };
const karanArjun2 = { salary: 50000 };
const karanArjun3 = { salary: 50000 };

// Now every obj has the access of functions inside employee obj
karanArjun1.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
```

# Classes

Class is a blueprint for an object of it.

## The Constructor Method

The constructor method is a special method in JavaScript with the exact name `'constructor'`.
It is automatically executed when a new object is created from a class.

```js
class toyotaCar {

    constructor(brand){

    console.log("Creating new object!");
    this.brand = brand;

    start(){
    console.log("Start");
    }

    stop(){
    console.log("Stop");
    }

    }
}

let fortuner = new toyotaCar("Land Cruiser");

console.log(fortuner);
```

## Inheritance

```js
class Parent {
  hello() {
    console.log("Hello!");
  }
}

class Child extends Parent {}

let obj = new Child();
// This is the syntax of creating an object
```

### Super Keyword

```js
class Person {
  constructor(name) {
    this.color = "Red";
    this.name = name;
  }
  eat() {
    console.log("Eat first!");
  }
}

class Engineer extends Person {
  constructor(name) {
    super();

    // Invoke the parent class's constructor first
    // Using super is important before this keyword, otherwise error will come.

    this.branch = branch;
  }

  work() {
    super.eat();

    // eat() will be called first when we call work()

    console.log("I work 9/7");
  }
}

let engObj = new Engineer("Areeba Moosa");
```

## Class Getters and Setters

We can use getter and setter methods to get and set the value of an object.

Use the get keyword for the getter method and the set keyword for the setter method.

### Syntax:

```js
class Name {

     constructor(var) {
     this.var = var;

}

// defining getter method
    get method() {
    Code Here
}

// defining setter method
    set method(value) {
    this.var = value;
}

}
```

#### Example:

```js
class OOPs {
  constructor(name) {
    this.name = name;
  }

  // Getter method
  get langName() {
    return this.name;
  }

  // Setter method
  set langName(x) {
    this.name = x;
  }
}

let obj = new OOPs("JavaScript");
console.log(obj.name);

obj.langName = "Java";
console.log(obj.name);
```
