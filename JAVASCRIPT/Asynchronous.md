# Synchronous (sync)

One task at a time.

Each step waits for the previous one to finish.

**Example:**

```js
console.log("Start");
console.log("Middle");
console.log("End");
```

**Output :**

```
Start
Middle
End
```

# Asynchronous (async)

Asynchronous JavaScript is about handling tasks that take time without blocking the main thread.

Asynchronous means tasks don’t happen one after another in order — instead, some tasks can run in the background while the program keeps going.

Your program doesn’t stop while waiting for slow stuff (like fetching data).

**Example:**

```js
console.log("Start");

setTimeout(() => {
  console.log("Middle");
}, 2000);

console.log("End");
```

**Output :**

```
Start
End
Middle
```

```js
console.log("one");
console.log("two");

function hello() {
  console.log("Hello!");
}

setTimeout(hello, 2000); //2s=2000

console.log("three");
console.log("four");

//pehly sync mn cheezein print hojayeingy aur jo cheezein time lagarhy hain, wo apny time k bad print hogy tab tak us k bad wli cheezein bhi print hojayeingy.
```

### Real-life example

Imagine ordering food 🍔

**Synchronous:**

`You order → stand there doing nothing → get food → then talk to friends`

**Asynchronous:**

`You order → go sit & chat → food arrives later → you eat`

JavaScript prefers the async way, especially for:

- Fetching data from APIs

- Reading files

- Timers

- Database calls

In JavaScript Async helps your app:

- Not freeze the UI
- Load data smoothly
- Feel fast and responsive

That’s why we use:

1. callbacks
2. promises
3. async / await (the cleanest one )

---

Async functions always return a Promise

If the code waits for:

API response 🌐
timer ⏱
user action 🖱
file/database data 📂

👉 It’s async.

```js
function getData() {
  fetch(url);
}
```

This function is still async, even though:

- no async
- no await

Because `fetch()` itself is async.

## Quick cheat checklist for identifying asyc functions

✔ Does it have async?

✔ Does it use await?

✔ Does it use .then() or .catch()?

✔ Does it call fetch, setTimeout, or an API?

✔ Does the result come later, not immediately?

If any answer is yes → it’s async.

---

### Why does async even exist?

Because some tasks are slow, and JavaScript doesn’t like waiting.

**Examples of slow tasks:**

- Fetching data from an API 🌐
- Reading a file 📁
- Waiting for a timer ⏱
- Talking to a database

If JS waited for these tasks line by line, your app would feel frozen.

👉 Async exists so JS can say:

`I’ll start this slow task… but I won’t sit here staring at it. I’ll do other work meanwhile.`

### JavaScript is single-threaded

What does single-threaded mean?

It means:

- JS can do only ONE thing at a time
- It has one call stack
- No multitasking like humans

Think of JS as:

- 🧠 One chef
- 🍳 One stove
- 📝 Many orders

The chef can only cook one dish at a time

### Blocking code:

Blocking code stops everything until it finishes.

**Example (imagine this existed in JS):**

```
sleep(5 seconds);
console.log("Done");
```

**What happens?**

- JS waits 5 seconds
- NOTHING else runs
- UI freezes ❌
- Buttons don’t click
- Page feels dead
  This is blocking behavior.

### Why blocking is BAD for the UI

Your browser uses JS for:

- Clicking buttons
- Scrolling
- Typing
- Animations
- Rendering updates

If JS is blocked:

- ❌ Button clicks don’t work
- ❌ Screen doesn’t update
- ❌ User thinks the app crashed

That’s why:

`The UI must NEVER freeze`

### What is non-blocking code?

Non-blocking code says:

`Start this slow task, but don’t wait for it.`

**Example:**

```js
setTimeout(() => {
  console.log("Done");
}, 5000);

console.log("Next line");
```

**Output:**

```
Next line
Done (after 5 seconds)
```

💡 JS didn’t wait.

It kept going.

## The KEY IDEA

JavaScript does one thing at a time

So to handle slow tasks, it uses async mechanisms.

**Async means:**

- Start a slow task
- Continue running other code
- Come back when the task is finished

---

JavaScript is single-threaded.
Slow tasks would block it.
Async exists so JS doesn’t freeze the UI.

---

# Call back

A callback is a function that you pass into another function to be run later.

```js
function sayHi() {
  console.log("Hi");
}

function doSomething(callback) {
  callback();
}

doSomething(sayHi);
```

CallBack with Arrow Functions

```js
doSomething(() => {
  console.log("Hi");
});
```

Callack with SetTimeOut

```js
setTimeout(function () {
  console.log("I waited");
}, 1000);
```

`setTimeout` = wait

`function () {}` = is a callback because you are passing it to setTimeout as an argument.

`1000` = 1 second

You’re telling JavaScript: "Hey setTimeout, after 1 second, please call this function for me."

# Callback hell

Callback hell is when callbacks sit inside callbacks inside callbacks.

Many nested callbacks make code messy, hard to read, and difficult to manage.

```js
setTimeout(() => {
  console.log("1");

  setTimeout(() => {
    console.log("2");

    setTimeout(() => {
      console.log("3");
    }, 1000);
  }, 1000);
}, 1000);
```

Another example

```js
function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("Data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

// Callback hell example
getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});
```

This code is really difficult to understand & hence called callback hell.

To solve this, modern JavaScript provides Promises and async/await syntax, making code cleaner and easier to handle.

# Promises

Promise is a JavaScript object that represents the result of an asynchronous task — it can be pending, fulfilled, or rejected.

It helps handle async code more cleanly, avoiding deep callback nesting.

Promise has ONLY 3 states:

- pending
- fulfilled
- rejected

You don’t control the state manually.
JavaScript handles it.

**Basic syntax**

```js
let promise = new Promise((resolve, reject) => {
  // work here
});
```

This means we promise to do some work.

If it works -> call `resolve()`

If it doesn't work -> call `reject()`

### Using a Promise (.then())

`.then()` means:

“When the promise is successful, do this”

```js
promise.then((result) => {
  console.log(result);
});
```

### Promise with WAITING

```js
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Ice cream 🍦");
  }, 2000);
});
```

### Failure case (reject)

```js
let promise = new Promise((resolve, reject) => {
  reject("No ice cream ");
});
```

### Handling failure (.catch())

```js
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

## Promise chaining (NO CALLBACK HELL )

```js
doHomework()
  .then(() => cleanRoom())
  .then(() => getChocolate())
  .then((reward) => {
    console.log(reward);
  })
  .catch((error) => {
    console.log(error);
  });
```

## Resolve & Reject in Promises

```js
// Simple promise that resolves
const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise!");
    resolve("Success");
  });
};

let promise = getPromise();
promise
  .then((res) => {
    console.log("Promise fulfilled!", res);
  })
  .catch((err) => {
    console.log("Rejected!", err);
  });
```

```js
// Promise example with rejection
function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error occurred");
    }, 2000);
  });
}

getData(1)
  .then((res) => console.log(res))
  .catch((err) => console.log("Rejected!", err));
```

# Async Functions

Async functions are special JavaScript functions that always return a Promise.

They let you write asynchronous code in a cleaner & more readable way.

```js
function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data 1");
      resolve("Success");
    }, 4000);
  });
}
.
console.log("Fetching data1 ...");
let p1 = asyncFunc();
p1.then((res) => {
  console.log(res);
});
```

## Chaining Async Functions

```js
function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data 1");
      resolve("Success");
    }, 4000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data 2");
      resolve("Success");
    }, 4000);
  });
}

console.log("Fetching data1 ...");
let p1 = asyncFunc1();
p1.then((res) => {
  console.log("Fetching data2 ...");
  let p2 = asyncFunc2();
  p2.then((res) => {});
});
```

# Async Await

Async / Await is just a nicer way to use Promises

**Async/Await** is a way to write asynchronous code that looks and behaves like synchronous code.

`async` makes a function return a Promise, and `await` pauses the code until that Promise settles.

Real-life story

### You go to a restaurant:

- Order food 🍔
- WAIT for food ⏳
- Eat food 😋

You must wait before eating.

That waiting is `await.`

`async` means: "This function will take time"

```js
async function hello() {
  return "Hi";
}
```

Even though it returns "Hi",

JavaScript automatically turns it into a Promise

So this actually returns:

```js
Promise.resolve("Hi");
```

**Example :**

```js
async function play() {
  let toy = await getToy();
  console.log(toy);
}

play();
```

await only works inside async

## Multiple steps

### Promise version

```js
wash()
  .then(() => dry())
  .then(() => fold())
  .then(() => console.log("Done"));
```

### Async/Await version

```js
async function doLaundry() {
  await wash();
  await dry();
  await fold();
  console.log("Done");
}
```

Looks like normal code.

No nesting. No .then() chains.

## Error handling

### Promise way

```js
getToy()
  .then(...)
  .catch((error) => {
    console.log(error);
  });
```

### Async/Await way

```js
async function play() {
  try {
    let toy = await getToy();
    console.log(toy);
  } catch (error) {
    console.log(error);
  }
}
```

## More Examples :

```js
function Api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather Data");
      resolve(200);
    }, 2000);
  });
}

async function getWeatherData() {
  await Api(); // 1st call
  await Api(); // 2nd call
}
```

### Async Await with multiple data calls

```js
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataId);
      resolve("Success");
    }, 3000);
  });
}
async function getAllData() {
  await getData(1);
  await getData(2);
  await getData(3);
}
```

## IIFE with Async Await

```js
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataId);
      resolve("Success");
    }, 3000);
  });
}

(async function () {
  await getData(1);
  await getData(2);
  await getData(3);
})();
```
