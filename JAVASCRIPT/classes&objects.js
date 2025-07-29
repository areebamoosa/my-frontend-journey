// Objects
// In the primitive datatypes only one value is stored but an object can store more than one value even of different types. 

const student = {

    // Properties in Obj
    fullName : "Areeba Moosa",
    marks : 98,

    // Methods in Obj
    printMarks : function () {
        console.log("Marks = ", this.marks);
    },
};

console.log("Name:", student.fullName);
console.log("Marks:", student["marks"]);

//Calling the method inside the object
student.printMarks();


// Having same functions in diff obj using prototype

const employee = {
    calcTax(){
        console.log("Tax rate is 10%");
    },
};

const karanArjun1 = {
    salary : 50000,
};
const karanArjun2 = {
    salary : 50000,
};
const karanArjun3 = {
    salary : 50000,
};

// now every obj have the access of functions that are inside employee obj
karanArjun1__proto__ = employee;
karanArjun2__proto__ = employee;
karanArjun3__proto__ = employee;

// Classes
// Class is a blueprint for an object of it. 

// The Constructor Method
// The constructor method is a special method in JavaScript with the exact name 'constructor.' It is automatically executed when a new object is created from a class.

class toyotaCar {
    constructor(brand){
        console.log("Creating new object!");
        this.brand = brand;
    }
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }

}

let fortuner = new toyotaCar("Land Cruiser");
console.log(fortuner);

// Inheritance

class Parent {
    hello() {
        console.log("Hello!");
    }
}
class Child extends Parent {}

let obj = new Child();
// this the syntax of creating an object

// Super Keyword

class Person {
    constructor(name) {
        this.color = "Red";
        this.name = name;
    }
    eat(){
        console.log("Eat first!");
    }
}
class Engineer extends Person {
    constructor(name){
        super(); //to invoke the parent class's constructor first
        // Using the keyword (super) keyword is imp before this keyword, otherwise error will come.
        this.branch = branch;
    }
    work(){
        super.eat(); 
        // here eat functionn will be called first we when we call this work function.
        console.log("I work 9/7");
    }
}
let engObj = new Engineer("Areeba Moosa");

// Class Getters and Setters
// We can use getter and setter methods to get the value of an object and set the value of an object. We can use the get keyword for the getter method and the set keyword for the setter methods.

// Syntax:

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

// 

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

let obj = new OOPs('JavaScript');
console.log(obj.name); 

obj.langName = 'Java';
console.log(obj.name);


// Error Handling
// try-catch

let a = 5;
let b = 8;

console.log("a + b", a+b);
console.log("a - b", a-b);
console.log("a * c", a*c);
// since c doesnt exist so error will come come and along with this rest of the code will not execute. So for this we use try-catch
console.log("a * b", a*b);
console.log("a / b", a/b);
console.log("a = a", a=a);

//

console.log("a + b", a+b);
console.log("a - b", a-b);
console.log("a * c", a*c);
try{
    console.log("a * c", a*c);
}catch(err){
    console.log(err);
}
console.log("a * b", a*b);
console.log("a / b", a/b);
console.log("a = a", a=a);