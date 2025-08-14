// Basic Questions to practice JavaScript concepts.

// Q1 : Create a const obj called "product" to store info as shown in picture

const product = {
    title : "Ball Pen",
    rating : 4,
    offer : 8,
    price : 290,
};

console.log(product);

// Q2 : Create a const obj called "profile" to store info as shown in picture

const profile = {
    username : "Areeba Moosa",
    posts : 42,
    followers : 127,
    following : 650,
    isFollow : true,
};

console.log(profile);
console.log(typeof profile);
console.log(typeof profile["username"]);

// Q3 : Get user to input a number using prompt ("Enter a number"). Check if the num is multiplier of 5 or not.

let num = prompt("Enter a number");

if (num % 5 == 0){
    console.log("Yes the ", num , " number is divisible by 5");
}
else {
    console.log("No the ", num , " number is not divisible by 5");
}

// Q4 : Assign Grades according to marks

let marks = 97;
let grade;

if (marks >= 80 && marks <= 100){
    grade = "A";
    console.log("Your Grade is : ", grade);
}
else if (marks >= 70 && marks <= 89){
    grade = "B";
    console.log("Your Grade is : ", grade);
}
else if (marks >= 60 && marks <= 69){
    grade = "C";
    console.log("Your Grade is : ", grade);
}
else if (marks >= 50 && marks <= 59){
    grade = "D";
    console.log("Your Grade is : ", grade);
}
else (marks >= 0 && marks <= 49){
    grade = "F";
    console.log("Your Grade is : ", grade);
}

// Q5 : Print all even numbers from 0 to 100

for(let num = 0; num <= 100; num++ ){
    if(num % 2 === 0){
    console.log("Num =  ", num);
    }
}

// Q6 : Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters a correct value. 

let gameNum = 16;
let userNum = prompt("Guess the Game Number : ");

while( userNum != gameNum){
    userNum = prompt("You guessed the wrong number. Guess the Game Number again : ");
}

console.log("Congratulations, You guessed the right number! ");

// prompt always gives us a string number, so we have to use one equal sign only in this case. ( != )
// double qual to ham tab dety jab ham num ko as a string treat krty "16"

// Q7: Prompt the user to enter their full name. Generate a username for them based on their input. Start username with @ , followed by their full name and ending with a full name length.
// eg : user name = "areebamoosa" , username should be "@areebamoosa16"

let fullName = prompt("Enter your Full Name");
let length = fullName.length;
let userName = "@" + fullName + length;
console.log(userName);

// Q8 : For a given array with marks of students -> [87,97,44,37,76,60]. Find the avg of class.

let marks = [87,97,44,37,76,60];
let sum = 0;

for(let val of marks){
    sum += val;
}

let avg = sum / marks.length;

console.log(`Average of the class is ${avg}`);

// Q9 : For a given array with prices of 5 items -> [250,645,300,900,50]. All items have an offer of 10% off on them. Change the array to store final price after applying offer.

let items =  [250,645,300,900,50];

for ( let val of items){
    offer = val / 10;
    items[i] = val - offer;
    console.log(`Value after offer = ${items[i]}`);
    i++;
}

// Q10 : Create an array to store companies -> "Apple" , "Microsoft" , " Uber"  , "Google" , "Netflix"
// a. Remove first company from the array
// b. Remove Uber and add Careem at its place
// c. Add Amazon at the end.

let comp = [ "Apple" , "Microsoft" , " Uber"  , "Google" , "Netflix"];

console.log(comp);

console.log(comp.shift());
console.log(comp);

console.log(comp.splice(1,1,"Careem"));
console.log(comp);

console.log(comp.push("Amazon"));
console.log(comp);

// Q11 : Create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in string.

function countVowels(str){
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    return count;
}
countVowels("areeba");

// Q12 : Create an arrow function to perform the same task.

function countVowels = (str) => {
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    return count;
}

// Q13 : For a given array of numbers, print the square of each value using the for each loop

let arr = [1,2,3,4,5];

arr.forEach((num) => {
    console.log(num*num);
});

// Q14 : Create a H2 Heading element with text - "Hello Javascript". Append "from Apna College students" to this text using JS.

let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from Apna College Students";
//here we are cocanetating two strings by using plus sign.

// Q15 : Create 3 divs with common class name - "box". Access them and add some unique text to each of them.

let divs = document.querySelectorAll(".box");

divs[0].innerText = "New Unique Value 1";
divs[1].innerText = "New Unique Value 2";
divs[2].innerText = "New Unique Value 3";

// we can do this same with loop since we may have uncountable divs.

let idx = 1;
for (div of divs){
    div.innerText = `unique value of ${idx}`;
    idx++;
}

// Q16 : Create a new element. Give it a new text "click me", background colour of red & text color of white. Insert the button as the first element inside the body tag.

let newEl = document.createElement("button");
newEl.innerText = "Click me!";

newEl.style.backgroundColor = "red";
newEl.style.color = "white";

document.querySelector("body").prepend(newEl);

// Q17 : Create a <p> tag in html, give it a class & some styling. Now create a new class in CSS & try to append this class to the <p> element. Did you notice how you overwrite the class name when you add a new one? Solve this problem using class list.

let para = document.querySelector("p");
para.classList.add("newPara");

// Q18 : Create a toggle button that changes the screen to dark-mode when clicked and light-mode when clicked again.

let modeBtn = document.querySelector("#mode");
let currMod = "light";

modeBtn.addEventListener("click", () => {
    if ( currMod === "light"){
        currMod = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        currMod = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMod);
})