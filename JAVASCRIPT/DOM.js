// HTML DOM (Document Object Model)

// The HTML DOM (Document Object Model) is a programming interface that represents the structure of a web page in a way that programming languages like JavaScript can understand and manipulate.

// Think of it as a tree of objects where each part of your HTML document (elements, attributes, text) is represented as a node, allowing you to dynamically change or interact with the content and structure of the page.

// console.log(window); 
// window Object
// window.console.log("Hello");
//all these things are part of window object.
// console.dir(window.document);
//or
// console.dir(document);
// console.log(document.body);

// DOM Manipulation

// getElementById(id) Selects an element by its ID.

// getElementsByClassName(class)    Selects all elements with a given class.
// querySelector(selector)          Selects the first matching element.
// querySelectorAll(selector)       Selects all matching elements.
// createElement(tag)               Creates a new HTML element.
// appendChild(node)                Adds a child node to an element.
// remove()                         Removes an element from the DOM.
// addEventListener(event, fn)      Attaches an event handler to an element


// Selecting with ID
let heading = document.getElementById("heading");
console.dir(heading)

// Selecting with Class
let head = document.getElementsByClassName("head");
console.dir(head)

// Selecting with Tags
let tag = document.getElementsByTagName("p");
console.dir(tag);

// Query Selector

let firstEl = document.querySelector("p") 
//returns first element that matches the required input.
console.dir(firstEl);

let allEl = document.querySelectorAll("p")
// returns all elemets (Nodelist) of required input.
console.dir(allEl);

// Properties

// tagName 

let firstEl = document.querySelector("p")
console.dir(firstEl);
console.log(firstEl.tagName);

// innerText

let div = document.querySelector("div");
// console.dir(div);
// console.dir(div.innerText); 
// write these commands in browser

// div.innerText = "abcd";
// we can make chages at runtime by these properties and all of the code will be changed.

heading.innertext = "new heading";
// this changes the text having class heading.(confirm this)

// textContent
// this shows the content that is hidden too : eg look at h3 having visibbility hidden.
// we can access it by writing this on browser
// heading.textContent

// Attributes

// getAttribute 
let div = document.querySelector("div");
console.log(div);
let id = div.getAttribute("id");
console.log(id);

// setAttribute
let para = document.querySelector("p");
console.log(para.setAttribute("class", "newClass"))

// node style

let div = document.querySelector("div");
div.style.backgroundColor = "green";
div.innerText = "Hello";

// Insert Elements

let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);

div.before(newBtn);

// 

let newHeading = document.createElement("h1");
newHeading.innerText = "Hi I am Areeba";

document.querySelector("body").prepend(newHeading);

// Remove 
let rem = document.querySelector("h1");
rem.remove();

// The DOM is essential because

// Dynamic Content Updates: Without reloading the page, the DOM allows content updates (e.g., form validation, AJAX responses).
// User Interaction: It makes your webpage interactive (e.g., responding to button clicks, form submissions).
// Flexibility: Developers can add, modify, or remove elements and styles in real-time.
// Cross-Platform Compatibility: It provides a standard way for scripts to interact with web documents, ensuring browser compatibility.

// The DOM connects your webpage to JavaScript, allowing you to:
// Access elements (like finding an <h1> tag).
// Modify content (like changing the text of a <p> tag).
// React to events (like a button click).
// Create or remove elements dynamically.

// Properties of the DOM
// Node-Based: Everything in the DOM is represented as a node (e.g., element nodes, text nodes, attribute nodes).
// Hierarchical: The DOM has a parent-child relationship, forming a tree structure.
// Live: Changes made to the DOM using JavaScript are immediately reflected on the web page.
// Platform-Independent: It works across different platforms, browsers, and programming languages.

// Advantages of DOM
// Dynamic Content Manipulation: DOM allows you to access, modify, and update the HTML structure and content dynamically, which enables interactive websites.
// Cross-platform Compatibility: DOM works across different browsers and platforms, making it a universal way of handling documents in web development.
// Event Handling: DOM supports event handling, enabling user interactions like clicks, keyboard presses, etc., to trigger actions on the page.
// Language Independence: While typically used with JavaScript, DOM can be accessed by various programming languages, making it flexible.
// Structured Representation: The DOM provides a structured representation of a webpage that is easy to manipulate programmatically, offering more control over the page.

// Disadvantages of DOM
// Performance Issues: Manipulating the DOM can be slow, especially with large and complex documents, leading to performance bottlenecks in certain situations.
// Memory Usage: The DOM can consume significant memory, especially with large web pages, as it keeps a copy of the document’s structure in memory.
// Browser Inconsistencies: Different browsers may interpret and implement DOM features slightly differently, causing compatibility issues.
// Complexity: For large applications, managing complex DOM structures can become challenging and lead to messy or difficult-to-maintain code.
// Repaint and Reflow: DOM manipulation can trigger page repaints and reflows, which may cause visible delays in updates, leading to a poor user experience.
