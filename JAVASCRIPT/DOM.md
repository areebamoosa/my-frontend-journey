# HTML DOM (Document Object Model)

The HTML DOM (Document Object Model) is a programming interface that represents the structure of a web page in a way that programming languages like JavaScript can understand and manipulate.

Think of it as a tree of objects where each part of your HTML document (elements, attributes, text) is represented as a node, allowing you to dynamically change or interact with the content and structure of the page.

```js
console.log(window);
// window Object
window.console.log("Hello");
// all these things are part of window object.
console.dir(window.document);
// or
console.dir(document);
console.log(document.body);
```

## DOM Manipulation

`getElementById(id)` → Selects an element by its ID.

`getElementsByClassName(class)` → Selects all elements with a given class.

`querySelector(selector)` → Selects the first matching element.

`querySelectorAll(selector)` → Selects all matching elements.

`createElement(tag)` → Creates a new HTML element.

`appendChild(node)` → Adds a child node to an element.

`remove()` → Removes an element from the DOM.

`addEventListener(event, fn)` → Attaches an event handler to an element.

### Selecting with ID

```js
let heading = document.getElementById("heading");
console.dir(heading);
```

### Selecting with Class

```js
let head = document.getElementsByClassName("head");
console.dir(head);
```

### Selecting with Tags

```js
let tag = document.getElementsByTagName("p");
console.dir(tag);
```

### Query Selector

```js
let firstEl = document.querySelector("p");
// returns first element that matches the required input.
console.dir(firstEl);

let allEl = document.querySelectorAll("p");
// returns all elements (NodeList) of required input.
console.dir(allEl);
```

### Properties

#### 1. tagName

```js
let firstEl = document.querySelector("p");
console.dir(firstEl);
console.log(firstEl.tagName);
```

#### 2. innerText

```js
let div = document.querySelector("div");
// div.innerText = "abcd";
// Changes can be made at runtime and will update the page instantly.

heading.innerText = "new heading";
// Changes the text having class heading.
```

#### 3. textContent

Shows content that is hidden too (e.g., visibility: hidden elements).

Can be accessed with:

```js
heading.textContent;
```

### Attributes

#### 1. getAttribute

```js
let div = document.querySelector("div");
let id = div.getAttribute("id");
console.log(id);
```

#### 2. setAttribute

```js
let para = document.querySelector("p");
para.setAttribute("class", "newClass");
```

#### 3. Node Style

```js
let div = document.querySelector("div");
div.style.backgroundColor = "green";
div.innerText = "Hello";
```

#### 4. Insert Elements

```js
let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";

let div = document.querySelector("div");
div.append(newBtn);
div.before(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerText = "Hi I am Areeba";

document.querySelector("body").prepend(newHeading);
```

#### Remove Elements

```js
let rem = document.querySelector("h1");
rem.remove();
```

<br>

### Why the DOM is Essential

- **Dynamic Content Updates:** Update content without reloading the page.

- **User Interaction:** Make webpages interactive (e.g., button clicks).

- **Flexibility:** Add, modify, or remove elements/styles in real-time.

- **Cross-Platform Compatibility:** Standard way to interact with documents in browsers.

<br>

### The DOM Connects Your Webpage to JavaScript By Letting You:

- Access elements (e.g., finding an `<h1>` tag).

- Modify content (e.g., changing the text of a `<p>` tag).

- React to events (e.g., button click).

- Create or remove elements dynamically.
