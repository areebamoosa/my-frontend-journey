# JavaScript Events

JavaScript Events are actions or occurrences that happen in the browser. They can be triggered by various user interactions or by the browser itself.

Events are actions that happen when a user interacts with the page - like clicking an element, typing in a field, or loading a page.

The browser notifies the system that something has happened, and that it needs to be handled. It gets handled by registering a function, called an event handler, that listens for a particular type of event.

---

## Common Events

- onclick
- dblclick
- mousedown
- mouseup
- mousemove
- keydown
- keyup
- touchmove
- touchstart
- touchend
- onload
- onfocus
- onblur
- onerror
- onscroll

---

## Event Categories

**Mouse Events:** click, dblclick, mousemove, mouseover, mouseout

**Keyboard Events:** keydown, keypress, keyup

**Form Events:** submit, change, focus, blur

**Window Events:** load, resize, scroll

---

## Event Attributes

| Event Attribute | Description                                           |
| --------------- | ----------------------------------------------------- |
| onclick         | Triggered when an element is clicked.                 |
| onmouseover     | Fired when the mouse pointer moves over an element.   |
| onmouseout      | Occurs when the mouse pointer leaves an element.      |
| onkeydown       | Fired when a key is pressed down.                     |
| onkeyup         | Fired when a key is released.                         |
| onchange        | Triggered when the value of an input element changes. |
| onload          | Occurs when a page has finished loading.              |
| onsubmit        | Fired when a form is submitted.                       |
| onfocus         | Occurs when an element gets focus.                    |
| onblur          | Fired when an element loses focus.                    |

---

## Event Handling Methods

### 1. Inline HTML Handlers

```html
<button onclick="alert('Button clicked!')">Click Me</button>
```

### 2. DOM Property Handlers

```javascript
let btn = document.getElementById("myButton");
btn.onclick = () => {
  alert("Button clicked!");
};
```

### 3. addEventListener ( ) ( Preferred )

```javascript
btn.addEventListener("click", () => {
  alert("Button clicked using addEventListener!");
});
```

`addEventListener ()` is the most versatile and recommended method as it supports multiple event listeners and removal of listeners.


### Basic Event Examples

```javascript
//Event listener on a button

let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
  console.log("Btn was clicked!");
};
```

```javascript
//Event listener on a div

let div = document.querySelector("div");

div.onmouseover = () => {
  console.log("You are inside the div!");
};
```

### Multiple Event Listeners

Through event listeners, we can make both handlers work at the same time without overriding.

```javascript
btn1.addEventListener("click", () => {
  console.log("Btn was clicked!");
});
btn1.addEventListener("click", () => {
  console.log("Btn handler2 was clicked!");
});
```

### Removing Event Listeners

```javascript
btn1.addEventListener("click", () => {
  console.log("Btn was clicked - Handler 1!");
});
btn1.addEventListener("click", () => {
  console.log("Btn was clicked - Handler 2!");
});
const handler3 = () => {
  console.log("Btn was clicked - Handler 3!");
};

btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () => {
  console.log("Btn was clicked - Handler 4!");
});

btn1.removeEventListener("click", handler3); // Removes handler 3
```



## Event Bubbling

**Event Bubbling** is when an event starts from the deepest target element and then moves upward through its ancestors in the DOM.  

It’s like the event "bubbles up" from child to parent until it reaches the document root.

#### Example:

```js
document.querySelector(".child").addEventListener("click", () => {
  alert("Child was clicked!");
});
document.querySelector(".childContainer").addEventListener("click", () => {
  alert("Child Container was clicked!");
});
document.querySelector(".container").addEventListener("click", () => {
  alert("Container was clicked!");
});

//over here when we click on child, automatically container and child container will also be clicked.

// to stop this we use stopPropogation, after this when we click on child only that event will be invoked and no others.

document.querySelector(".child").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("Child was clicked!");
});
document.querySelector(".childContainer").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("Child Container was clicked!");
});
document.querySelector(".container").addEventListener("click", (e) => {
  alert("Container was clicked!");
});
```
## Event Propagation

JavaScript events propagate in two phases:

**Capturing Phase:** Event goes from top/root of the page down to the target.

**Bubbling Phase:** Event goes back up from the target to the top.

#### Example - Capturing Phase:

```javascript
document.querySelector("div").addEventListener(
  "click",
  () => {
    console.log("Div clicked"); // Runs if the div gets clicked
  },
  true // Capturing Phase
);
```

#### Example - Stopping Propagation:

```javascript
button.addEventListener("click", (e) => {
  console.log("Button clicked");
  e.stopPropagation(); // Stops event from bubbling or capturing further
});
```

`true` in `addEventListener(true)` → Listener runs during capturing phase.

`e.stopPropagation()` → Stops the event from continuing to other elements (both up or down).
