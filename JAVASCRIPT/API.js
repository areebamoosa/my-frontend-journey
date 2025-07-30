// API = Application Programming Interface
// An API is a way for two applications (like your website and a server) to communicate with each other.
// You can use APIs to get data from a server or send data to a server.

// An API is simply a medium to fetch or send data between interfaces. Let's say you want to make an application that provides the user with some real-time data fetched from the server or maybe even allows you to modify or add data to some other endpoint. This is made possible by the API or the Application Programming Interface

// This is the URL from where we will fetch cat facts
const URL = "https://cat-fact.herokuapp.com/facts";

// Getting the paragraph element where the cat fact will be displayed
const factPara = document.querySelector("#fact");

// Getting the button element that the user will click to get a new fact
const btn = document.querySelector("#btn");

// This is an async function that fetches cat facts from the API
const getFacts = async () => {
  console.log("Getting data...");

  // Fetching data from the API using fetch() method
  let response = await fetch(URL);

  // Logging the raw response object (still in JSON format)
  console.log(response); // This shows status, headers, etc.

  // Converting the response into usable JSON data
  let data = await response.json();

  // Logging the parsed JSON data
  console.log(data);

  // Showing one of the facts on the webpage (2nd fact from the array)
  factPara.innerText = data[1].text;
};

// The same function above can also be written using Promise chaining (instead of async/await)

// function getFacts() {
//     fetch(URL) // fetch returns a Promise
//     .then((response) => {
//         return response.json(); // convert response to JSON
//     })
//     .then((data) => {
//         console.log(data); // log the data
//         factPara.innerText = data[2].text; // show a fact in the paragraph
//     })
// }

// Adding a click event listener to the button
// When the button is clicked, it will run the getFacts function
btn.addEventListener("click", getFacts);