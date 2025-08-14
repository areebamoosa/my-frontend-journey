# Extra topic understanding of JavaScript

## Selecting All Children of a Class

```js
let boxChildren = document.querySelectorAll(".box > div");

boxChildren.forEach((child) => {
  console.log(child.className);
});

//This will print all the classes inside the .box container.
```

## Adding a Class

```js
let box = document.querySelector(".box");

box.classList.add("harry");

console.log(box.className);
```

## Removing a Class

```js
let box = document.querySelector(".box");

box.classList.remove("red");

console.log(box.className);
```

## Toggle Class

The toggle() method with classList will:

Add a class if it’s not there.

Remove the class if it is there.

Think of it like a switch:

If the light is on, it turns off.

If it’s off, it turns on.

```js
let red = document.querySelector(".box");

red.classList.toggle("red");
// red will be removed

red.classList.toggle("red");
console.log(red.className);
// red will be added back
```

## Checking if a Class Exists

```js
let elem = document.querySelector(".box");

elem.classList.contains("red");

if (elem.classList.contains("red")) {
  console.log("Red class Exists");
} else {
  console.log("Red class doesnt exist");
}
```

## Inline CSS Using JavaScript

```js
//Changing Background for the elements having .box class.

document.querySelector(".box").style.backgroundColor = "green";

//Changing Background for All .box Elements

document.querySelectorAll(".box").forEach((e) => {
  e.style.backgroundColor = "green";
});
```
