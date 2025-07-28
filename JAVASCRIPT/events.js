// Events

// JavaScript Events are actions or occurrences that happen in the browser. They can be triggered by various user interactions or by the browser itself.
// Events are actions that happen when a user interacts with the page - like clicking an element, typing in a field, or loading a page.
// The browser notifies the system that something has happened, and that it needs to be handled. It gets handled by registering a function, called an event handler, that listens for a particular type of event.

// Here are some common events :
// onclick dblclick mousedown mouseup mousemove keydown keyup touchmove touchstart touchend onload onfocus onblur onerror onscroll

// Mouse Events: click, dblclick, mousemove, mouseover, mouseout
// Keyboard Events: keydown, keypress, keyup
// Form Events: submit, change, focus, blur
// Window Events: load, resize, scroll

// Event Attribute            	Description
// onclick	                    Triggered when an element is clicked.
// onmouseover                  Fired when the mouse pointer moves over an element.
// onmouseout	                Occurs when the mouse pointer leaves an element.
// onkeydown	                Fired when a key is pressed down.
// onkeyup	                    Fired when a key is released.
// onchange	                    Triggered when the value of an input element changes.
// onload	                    Occurs when a page has finished loading.
// onsubmit	                    Fired when a form is submitted.
// onfocus	                    Occurs when an element gets focus.
// onblur	                    Fired when an element loses focus

// Event Handling Methods:

// 1. Inline HTML Handlers :
<button onclick="alert('Button clicked!')">Click Me</button>;

// 2. DOM Property Handlers :
let btn = document.getElementById("myButton");
btn.onclick = () => {
  alert("Button clicked!");
};

// 3. addEventListener() (Preferred) :
btn.addEventListener("click", () => {
  alert("Button clicked using addEventListener!");
});
// addEventListener() is the most versatile and recommended method as it supports multiple event listeners and removal of listeners.

// Event Propagation
// JavaScript events propagate in two phases:

// Capturing Phase: Event goes from top/root of the page down to the target.
// Bubbling Phase: Event goes back up from the target to the top.

// Selecting the <div> element and adding a click event listener
document.querySelector("div").addEventListener(
  "click",
  () => {
    console.log("Div clicked"); //This will run if the div gets clicked
  },
  true // true means this listener runs in the "Capturing Phase"
);

// Adding a click event listener to the button element
button.addEventListener("click", (e) => {
  console.log("Button clicked"); // This will run when button is clicked
  e.stopPropagation();// This stops the event from bubbling or capturing further
  // So the click won't reach the <div> listener after this

});

// true in addEventListener(true) → listener runs during capturing phase.
//e.stopPropagation() → stops the event from continuing to other elements (both up or down).

//
let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
  console.log("Btn was clicked!");
};

//
let div = document.querySelector("div");

div.onmouseover = () => {
  console.log("You are inside the div!");
};

btn1.onclick = (e) => {
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX, e.clientY);
};

// Event Listeners

btn1.addEventListener("click", () => {
  console.log("Btn was clicked!");
});
btn1.addEventListener("click", () => {
  console.log("Btn2 handler was clicked!");
});
// through event listeners, we can make both the handlers work at same time, it does not override.

btn1.addEventListener("click", (e) => {
  console.log("Btn was clicked!");
  console.log(e);
});

// To remove an Event listener

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

btn1.removeEventListener("click", handler3); // this removes the event handler 3.