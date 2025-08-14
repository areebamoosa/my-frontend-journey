# Asynchronous

Asynchronous means tasks don’t happen one after another in order — instead, some tasks can run in the background while the program keeps going.

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

# Call back

A callback is a function that you pass into another function to be run later.

```js
function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}

calculator(1, 2, sum);
```

```js
// this is also a callback function

const hello = () => {
  console.log("hello");
};
setTimeout(hello, 3000);

//Here () => { console.log("Hello") } is a callback because you are passing it to setTimeout as an argument.
// You’re telling JavaScript: "Hey setTimeout, after 2 seconds, please call this function for me."
```

# Callback hell

Callback hell is when many nested callbacks make code messy, hard to read, and difficult to manage.

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

```js
//The same example with Promises
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataId);
      resolve("Success");
    }, 3000);
  });
}
getData(1).then((res) => {
  console.log(res);
  getData(2).then(() => {
    console.log(res);
  });
});
```

## Promise Chain

```js
getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    console.log(res);
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

**Async/Await** is a way to write asynchronous code that looks and behaves like synchronous code.

`async` makes a function return a Promise, and `await` pauses the code until that Promise settles.

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
