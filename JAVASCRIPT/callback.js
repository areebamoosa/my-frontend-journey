// Asynchronous

console.log("one");
console.log("two");

function hello() {
  console.log("Hello!");
}

setTimeout(hello, 2000); //2s=2000

console.log("three");
console.log("four");

// pehly sync mn cheezein print hojayeingy aur jo cheezein time lagarhy hain, wo apny time k bad print hogy tab tak us k bad wli cheezein bhi print hojayeingy.

// Call back

function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}

calculator(1, 2, sum);

// this is also a callback

const hello = () => {
  console.log("hello");
};
setTimeout(hello, 3000);

// Here () => { console.log("Hello") } is a callback because you are passing it to setTimeout as an argument.
// You’re telling JavaScript: "Hey setTimeout, after 2 seconds, please call this function for me."

//

function getData(dataId) {
  setTimeout(() => {
    console.log("Data", dataId);
  }, 2000);
}

// Callback hell

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("Data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});

//this code is really difficult to understand & hence called callback hell ,To solve this, modern JavaScript provides Promises and async/await syntax, making code cleaner and easier to handle.

// the same thing we can do in promises like this :

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

//we can do this upper method by this Promise Chain

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

// Promises in JS

let promise = new Promise((resolve, reject) => {
  console.log("I am a promise");
  resolve("No error");
  reject("Some error occured!");
});

//

function getData(dataId, getnextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("Data", dataId);
      // resolve("Success");
      reject("error");
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise!");
    resolve("succes");
    reject("Network Error");
  });
};

let promise = getPromise();
promise.then((res) => {
  console.log("Promise fulfilled!", res);
});
promise.catch((err) => {
  console.log("Rejected!", err);
});

//

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

//

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

// Async Await

function Api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather Data");
      resolve(200);
    }, 2000);
  });
}

async function getWeatherData() {
  await Api();
  // 1st call
  await Api();
  // 2nd call
}

//

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
// this is executed by calling the function

// if we want to execute the function without calling we use IIFE

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

// Promise example

let promise = new Promise((resolve, reject) => {
  let success = true; // change this to false to test rejection

  setTimeout(() => {
    if (success) {
      resolve("Done! Data loaded successfully.");
    } else {
      reject("Error! Something went wrong.");
    }
  }, 3000); // waits 3 seconds before resolving or rejecting
});

promise
  .then((res) => {
    console.log("Success:", res);
  })
  .catch((error) => {
    console.log("Failed:", error);
  });
