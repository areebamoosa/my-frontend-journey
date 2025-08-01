// Extra topic understandig of Java Script

let boxChildren = document.querySelectorAll(".box > div");

boxChildren.forEach( (child) => {
    console.log(child.className);
});

// this will print all the classes inside the class container.

// To add a class in classList

let box = document.querySelector(".box");

box.classList.add("harry");

console.log(box.className);

// to remove a class

let box = document.querySelector(".box");

box.classList.remove("red");

console.log(box.className);

// Toggle = opposite
// The toggle() method is used with classList to:
// Add a class if it’s not there, and
// Remove the class if it is there.

// Think of it like a switch:
// Just like a light switch:
// If the light is on, it turns off
// If it’s off, it turns on


let red = document.querySelector(".box");

red.classList.toggle("red");
console.log(red.className);
// // red will be removed

red.classList.toggle("red");
console.log(red.className);

// Checks if the given class exists or not

let elem = document.querySelector(".box");

elem.classList.contains("red");

if(elem.classList.contains("red") ){
    console.log("Red class Exists");
}else{
    console.log("Red class doesnt exist");
}

// Events

let btn = document.getElementById("btn");

btn.addEventListener( "click", ()=>{
    alert("I was clicked!");
})

// 

btn.addEventListener( "dblclick", ()=>{
    alert("I was clicked!");
})

// 

btn.addEventListener( "contextmenu", ()=>{
    alert("Don't hack us by right click. Please!");
})

// 

btn.addEventListener( "keydown", (e)=>{
    console.log(e.key);
})

// 

alert("Hello World");

console.log("Code is running...")

var a = prompt("Enter your number")

var isTrue = confirm("Are you sure you wannt to leave this page and last your computer? ")

if(isTrue){
    console.log("Computer is blasting")
}
else{
    console.log("Computer is not blasting")
}
document.title = "Node JS"

document.body.style.backgroundColor = "Red"

// 

let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor = "red"

document.getElementById("red-box").style.backgroundColor

// This is Inline CSS using JavaScript

document.querySelector(".box").style.backgroundColor = "green"

console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "green"
}
)

console.log(document.getElementsByTagName("div"))

// Element Matches

e = document.getElementsByTagName("div")

e[4].matches("#red-box")
